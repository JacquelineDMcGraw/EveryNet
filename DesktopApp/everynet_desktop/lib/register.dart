// register.dart
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:dio/dio.dart';
import 'package:email_validator/email_validator.dart';

abstract class Result<S, E extends Exception> {
  const Result();
}

class Success<S, E extends Exception> extends Result<S, E> {
  const Success(this.value);
  final S value;
}

class Failure<S, E extends Exception> extends Result<S, E> {
  const Failure(this.exception);
  final E exception;
}

class RegisterPage extends StatefulWidget {
  @override
  _RegisterPageState createState() => _RegisterPageState();
}

class _RegisterPageState extends State<RegisterPage> {
  final GlobalKey<ScaffoldState> _scaffoldKey = GlobalKey<ScaffoldState>();
  final TextEditingController nameController = TextEditingController();
  final TextEditingController aliasController = TextEditingController();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController confirmEmailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();
  final TextEditingController confirmPasswordController = TextEditingController();

  int currentStep = 0;
  bool complete = false;
  String serverUrl = 'http://10.0.0.38:8000';

  Future<Result<String, Exception>> register() async {
    var url = Uri.parse('$serverUrl/api/user/register');
    try {
      Dio dio = new Dio();
      var response = await dio.post(
        url.toString(),
        data: {
          'name': nameController.text,
          'email': emailController.text,
          'password': passwordController.text,
          'alias': aliasController.text,
        },
      );
      switch (response.statusCode) {
        case 200:
          return Success('Success');
        default:
          var message = response.statusMessage ?? 'Unknown error';
          return Failure(Exception(message));
      }
    } catch (e) {
      if (e is DioError && e.response?.statusCode == 400) {
        var message = e.response?.data.toString();
        if (message == 'Email already registered.') {
          message = 'Email already registered.';
        } else if (message == 'Alias already exists.') {
          message = 'Username already in use, please choose a different username.';
        }
        return Failure(Exception(message));
      }
      var errorStr = e.toString();
      var message = errorStr.replaceFirst('Exception: ', '');
      return Failure(Exception(message));
    }
  }

  bool _validateNameAndUsername() {
    if (nameController.text.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Registration Failed: Please enter your name.')));
      return false;
    }
    if (aliasController.text.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Registration Failed: Please enter your username.')));
      return false;
    }
    return true;
  }

  bool _validateEmail() {
    if (emailController.text.isEmpty || confirmEmailController.text.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Registration Failed: Please enter your email.')));
      return false;
    }
    if (!EmailValidator.validate(emailController.text)) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Registration Failed: Please enter a valid email.')));
      return false;
    }
    if (emailController.text != confirmEmailController.text) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Registration Failed: Emails do not match.')));
      return false;
    }
    return true;
  }

  bool _validatePassword() {
    if (passwordController.text.isEmpty || confirmPasswordController.text.isEmpty) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Registration Failed: Please enter your password.')));
      return false;
    }
    if (passwordController.text.length < 8) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Registration Failed: Password must be at least 8 characters.')));
      return false;
    }
    if (passwordController.text != confirmPasswordController.text) {
      ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Registration Failed: Passwords do not match.')));
      return false;
    }
    return true;
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      key: _scaffoldKey,
      appBar: AppBar(
        title: Text('Register'),
      ),
      body: Stepper(
        currentStep: currentStep,
        onStepTapped: (step) => goTo(step),
        onStepContinue: next,
        onStepCancel: cancel,
        controlsBuilder: (BuildContext context, ControlsDetails controlsDetails) {
          return Row(
            children: <Widget>[
              ElevatedButton(
                onPressed: controlsDetails.onStepContinue,
                child: Text(currentStep == 2 ? 'Finish' : 'Next'),
              ),
              if (currentStep != 0)
                TextButton(
                  onPressed: controlsDetails.onStepCancel,
                  child: const Text('Back'),
                ),
            ],
          );
        },
        steps: <Step>[
          Step(
            title: const Text('Name and Username'),
            isActive: currentStep >= 0,
            state: StepState.indexed,
            content: Column(
              children: <Widget>[
                TextField(
                  controller: nameController,
                  decoration: InputDecoration(labelText: 'Name'),
                ),
                TextField(
                  controller: aliasController,
                  decoration: InputDecoration(labelText: 'Username'),
                ),
              ],
            ),
          ),
          Step(
            title: const Text('Email'),
            isActive: currentStep >= 1,
            state: StepState.indexed,
            content: Column(
              children: <Widget>[
                TextField(
                  controller: emailController,
                  decoration: InputDecoration(labelText: 'Email'),
                ),
                TextField(
                  controller: confirmEmailController,
                  decoration: InputDecoration(labelText: 'Confirm Email'),
                ),
              ],
            ),
          ),
          Step(
            title: const Text('Password'),
            isActive: currentStep >= 2,
            state: StepState.indexed,
            content: Column(
              children: <Widget>[
                TextField(
                  controller: passwordController,
                  decoration: InputDecoration(labelText: 'Password'),
                ),
                TextField(
                  controller: confirmPasswordController,
                  decoration: InputDecoration(labelText: 'Confirm Password'),
                ),
              ],
            ),
          ),
        ],
      ),
    );
  }
  
  void next() {
    if (currentStep + 1 != 3) {
      goTo(currentStep + 1);
    } else {
      if (_validateNameAndUsername() && _validateEmail() && _validatePassword()) {
        register().then((result) {
          if (result is Failure<String, Exception>) {
            var errorStr = (result as Failure<String, Exception>).exception.toString();
            var message = errorStr.replaceFirst('Exception: ', '');
            ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Registration failed: $message')));
          } else if (result is Success<String, Exception>) {
            ScaffoldMessenger.of(context).showSnackBar(SnackBar(content: Text('Registration successful')));
          }
        });
      }
    }
  }

  void cancel() {
    if (currentStep > 0) {
      goTo(currentStep - 1);
    }
  }

  void goTo(int step) {
    setState(() => currentStep = step);
  }
}
