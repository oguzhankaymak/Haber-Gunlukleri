# Haber-Gunlukleri

<!-- Contents -->

## Contents

- [About Project](#about-project)
  - [Purpose Of Project](#purpose-of-project)
- [Installation](#installation)
- [Screenshots](#screenshots)

## About Project

With this mobile application, you can view the news in any category or country you want.

| Some Packages / Libraries | Version |
| ------------------------- | ------- |
| react-native              | 0.64.0  |
| react                     | 17.0.1  |
| redux                     | 4.1.0   |
| redux-thunk               | 2.3.0   |
| reselect                  | 4.0.0   |
| react-native-webview      | 11.4.3  |

### Purpose Of Project

- In this project, User can see the news in any category or country want.
- User can view the news detail on source and should be just click news title for that.

### API

- [NewsAPI](https://newsapi.org)

### Credits

- PercentageCalculator.js : [react-native-responsive-screen](https://github.com/marudy/react-native-responsive-screen)

## Installation

1. Clone the repository.

```sh
git clone https://github.com/oguzhankaymak/Haber-Gunlukleri.git
```

2. Install necessary packages via yarn.

```sh
yarn install
```

3. Create API key on [NewsAPI](https://newsapi.org) and create environment.js on project folder. 
   environment.js :

```sh
export const API_KEY = '*****************';
```

4. Run the app.

```sh
npx react-native run-android
```
  or

```sh
npx react-native run-ios
```

## Screenshots

https://user-images.githubusercontent.com/36153454/117650919-f563c080-b199-11eb-8811-0d9f939c5404.mp4

https://user-images.githubusercontent.com/36153454/117651514-aff3c300-b19a-11eb-9c79-7ce6fa779258.mp4

https://user-images.githubusercontent.com/36153454/117650522-7bcbd280-b199-11eb-9a86-4825e3c309f9.mp4
