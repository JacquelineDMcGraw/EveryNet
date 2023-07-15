// main.dart
import 'package:flutter/material.dart';
import 'login.dart';
import 'home_page.dart';
import 'register.dart';
import 'forgot_password.dart';
import 'landing_page.dart';  

void main() {
  runApp(EveryNet());
}

class EveryNet extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'EveryNet',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      initialRoute: '/',  
      routes: {
        '/': (context) => LandingPage(),
        '/login': (context) => LoginPage(),
        '/home': (context) => HomePage(),
        '/register': (context) => RegisterPage(),
        '/forgotPassword': (context) => ForgotPasswordPage(),
      },
    );
  }
}
