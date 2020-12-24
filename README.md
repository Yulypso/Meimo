# Meimo Project

## Author
[Thierry Khamphousone](https://www.linkedin.com/in/tkhamphousone/)

## Introduction

The Meimo app was designed to allows users to write notes to memorize several things. It is possible to save text and images in your Meimos and also has a registration and login system.
The app is available for IOS & Android OS.

<p align="center" width="100%">
    <img align="center" width="300" height="200" src="./pictures/logo.png"/>
</p>

Designed using __my own RESTful API Meimo__. Here you will find the __link to the project and its documentation__.

- [Meimo ApiREST](https://github.com/Yulypso/MeimoHerokuJsApiREST)


---
<br>

## App icon

<p align="center" width="100%">
    <img align="center" width="200" height="200" src="./pictures/panda_logo.jpg"/>
</p>


designed by [Caroline Khamphousone](https://www.linkedin.com/in/caroline-khamphousone-8a2a48185/) 


---
<br>

## Setting up the react-native project 


__Running on IOS Simulator__

Requirements: 
- node
- watchman
- cocoapods
- IOS Simulator

```bash
> git clone https://github.com/Yulypso/Meimo.git
> cd Meimo
> npm install
> cd ios
> pod install
> cd ..
> react-native run-ios
```

__Running on Android Emulator__

Requirements:
- node
- watchman
- Android Emulator

```bash
> git clone https://github.com/Yulypso/Meimo.git
> cd Meimo
> npm install
> react-native run-android
```

<p align="center" width="100%">
    <img align="center" width="252" height="506" src="./pictures/14_login_fill.png"/>
    <img align="center" width="252" height="506" src="./pictures/17_Android.png"/>
</p>

---
<br>

## Features

The project includes the use of several technical features and methods. So here is a list of what was used while coding the application.
- [React-Native Setting up](https://reactnative.dev/docs/environment-setup)
- [React-Native components](https://reactnative.dev/docs/components-and-apis)
- [React Navigation](https://reactnavigation.org/docs/getting-started)

---
<br>

## Implementations

several features have been implemented within this application. 

__Screens__ 
- Login Screen
- Register Screen
- Home Screen
- NewMeimo Screen
- Detail Screen <\br>

__Components__ 
- loader
- Meimo item
- Search bar
- Picture item

__Others__
- Navigator
- Meimo List

---
<br>

## How the mobile app works ? 

### Login Screen

> When launching the application, the login screen is displayed.
> You can connect and access to your meimos.
> If you have no account, you navigate to the register screen.

<p align="center" width="100%">
    <img align="center" width="252" height="506" src="./pictures/1_Login.png"/>
</p>

---
<br>

### Register Screen

> Here is the register screen, let's create our account. 
> if an account already exists, you cannot register with the same email.

<p align="center" width="100%">
    <img align="left" width="252" height="506" src="./pictures/2_register.png"/>
    <img align="center" width="252" height="506" src="./pictures/3_register_fill.png"/>
    <img align="right" width="252" height="506" src="./pictures/18_account_exists.png"/>
</p>

---
<br>

### Home Screen

> Our account has been created, this is the Home screen, where our Meimo's list will be displayed.

<p align="center" width="100%">
    <img align="center" width="252" height="506" src="./pictures/4_registered.png"/>
</p>

---
<br>

### New Meimo Screen

> Let's create our first Meimo!
> And some others ...

<p align="center" width="100%">
    <img align="left" width="252" height="506" src="./pictures/5_new_meimo.png"/>
    <img align="center" width="252" height="506" src="./pictures/6_new_meimo_fill.png"/>
    <img align="right" width="252" height="506" src="./pictures/7_meimo_created.png"/>
</p>

---
<br>

### Search bar feature

> An amazing feature was set up for you to search your meimo among several of them!

<p align="center" width="100%">
    <img align="center" width="252" height="506" src="./pictures/8_added_meimo.png"/>
    <img align="center" width="252" height="506" src="./pictures/9_Search.png"/>
</p>

---
<br>

### Details Screen

<p align="center" width="100%">
    <img align="center" width="252" height="506" src="./pictures/10_edited_meimo.png"/>
    <img align="center" width="252" height="506" src="./pictures/11_edited_meimo_saved.png"/>
</p>

> the last added/edited Meimo goes to the top of the list.

<p align="center" width="100%">
    <img align="center" width="252" height="506" src="./pictures/12_last_edited_at_top.png"/>
</p>

---
<br>

### Disconnect from the App

> You can sign out from the App.

<p align="center" width="100%">
    <img align="center" width="252" height="506" src="./pictures/13_disconnected.png"/>
</p>

---
<br>

### Login Screen

> You can now reconnect to your personal meimo space.
> It automatically fetch back all your saved meimos!

<p align="center" width="100%">
    <img align="center" width="252" height="506" src="./pictures/14_login_fill.png"/>
    <img align="center" width="252" height="506" src="./pictures/15_fetched_meimos.png"/>
</p>

---
<br>

### Delete a Meimo

> You can delete meimos. 
> 
> Swipe left, then press on delete button. 

<p align="center" width="100%">
    <img align="center" width="252" height="506" src="./pictures/19_delete_meimo.png"/>
    <img align="center" width="252" height="506" src="./pictures/20_delete_confirm.png"/>
</p>

---
<br>

### Feature not implemented

> I thought about adding a feature that would allow users to add their photos to their meimo before saving it. 
> Here is the concept which is functional only locally. Photos are not saved.

<p align="center" width="100%">
    <img align="center" width="252" height="506" src="./pictures/16_pictures_feature.png"/>
</p>

---
<br>

### Improvements

In order to improve the mobile application we can:
 - save pictures on a specific cloud and save its url into the database MongoDB
 - Improve the secury of the App 
 - Improve the architecture of the [RESTful API Meimo](https://github.com/Yulypso/MeimoHerokuJsApiREST)

