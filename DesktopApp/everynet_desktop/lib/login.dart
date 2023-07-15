import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http;

class LoginPage extends StatefulWidget {
  @override
  _LoginPageState createState() => _LoginPageState();
}

class _LoginPageState extends State<LoginPage> {
  final GlobalKey<FormState> _formKey = GlobalKey<FormState>();
  final TextEditingController emailController = TextEditingController();
  final TextEditingController passwordController = TextEditingController();

  String get serverUrl {
    return 'http://10.0.0.38:8000';
  }

  Future<void> login() async {
    if (_formKey.currentState!.validate()) {
      var url = Uri.parse('$serverUrl/api/user/login');

      var response = await http.post(
        url,
        headers: <String, String>{
          'Content-Type': 'application/json; charset=UTF-8',
        },
        body: jsonEncode(<String, String>{
          'email': emailController.text,
          'password': passwordController.text,
        }),
      );

      if (response.statusCode == 200) {
        Navigator.pushNamed(context, '/home');
      } else {
        showDialog(
          context: context,
          builder: (BuildContext context) {
            return AlertDialog(
              title: Text('Error'),
              content: Text('Failed to login. Please try again.'),
              actions: <Widget>[
                TextButton(
                  child: Text('Close'),
                  onPressed: () {
                    Navigator.of(context).pop();
                  },
                ),
              ],
            );
          },
        );
      }
    }
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text('Login'),
      ),
      body: Padding(
        padding: EdgeInsets.all(8.0),
        child: Form(
          key: _formKey,
          child: Column(
            children: <Widget>[
              TextFormField(
                controller: emailController,
                decoration: InputDecoration(labelText: 'Email'),
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Please enter your email';
                  }
                  return null;
                },
              ),
              TextFormField(
                controller: passwordController,
                obscureText: true,
                decoration: InputDecoration(labelText: 'Password'),
                validator: (value) {
                  if (value!.isEmpty) {
                    return 'Please enter your password';
                  }
                  return null;
                },
              ),
              ElevatedButton(
                onPressed: login,
                child: Text('Login'),
              ),
            ],
          ),
        ),
      ),
    );
  }
}
