This is a new [**React Native**](https://reactnative.dev) project, bootstrapped using [`@react-native-community/cli`](https://github.com/react-native-community/cli).

This project is a web-based replica of the Indian banking application "Slice," focusing on its UI and frontend interactions. It's built using React Native for Web.

## Project Structure

```
SliceReplica/
├── android/            # Android native project
├── ios/                # iOS native project
├── public/
│   └── index.html      # HTML template for the web app
├── src/
│   ├── assets/         # For static assets like images, fonts (if any)
│   ├── components/     # Reusable UI components (if any created beyond screens)
│   ├── navigation/     # Navigation setup
│   │   └── AppNavigator.tsx
│   ├── screens/        # Screen components
│   │   ├── DashboardScreen.tsx
│   │   ├── LoginScreen.tsx
│   │   ├── PaymentsScreen.tsx
│   │   └── TransactionsScreen.tsx
│   └── styles/         # Global styles or theme (if any)
├── App.tsx             # Main application component, loads AppNavigator
├── index.js            # Entry point for React Native (and React Native Web)
├── package.json        # Project dependencies and scripts
├── tsconfig.json       # TypeScript configuration
└── webpack.config.js   # Webpack configuration for the web build
```

## Available Scripts

In the project directory, you can run:

### `npm start` or `yarn start`

Runs your app in development mode with an Metro bundler.

### `npm run android` or `yarn android`

Builds your app and starts it on a connected Android emulator or device.

### `npm run ios` or `yarn ios`

Builds your app and starts it on the iOS simulator (macOS only).

### `npm run web` or `yarn web`

Bundles the app for the web using Webpack and starts a development server (typically on `http://localhost:8080`). This is the primary way to run this Slice replica.
*Note: This command requires all dependencies, including `react-native-web`, `@react-navigation/*`, `webpack`, etc., to be installed correctly.*

### `npm run build:web` or `yarn build:web`

Creates a production build of the web application in the `dist` folder.

## Core Features Implemented (Mock)

*   **Login Screen:** Basic UI for login.
*   **Dashboard:** Displays mock balance, quick actions.
*   **Transactions List:** Shows a list of mock transactions.
*   **Payments Screen:** UI for various payment options.
*   **Navigation:** Tab-based navigation for main sections and stack navigation for login.

## Note on Dependencies and Environment

This project relies on several npm packages for web compatibility and navigation (e.g., `react-native-web`, `@react-navigation/native`, `webpack`). If you encounter issues running the web version, ensure all dependencies listed in `package.json` are correctly installed by running `npm install` or `yarn install` from within the `SliceReplica` directory.
The development environment used during the creation of this project faced some challenges with installing dependencies in the nested `SliceReplica` directory. If issues persist, ensure your environment is correctly configured for React Native development and that npm/yarn commands are executed from the correct directory path.

# Getting Started

> **Note**: Make sure you have completed the [Set Up Your Environment](https://reactnative.dev/docs/set-up-your-environment) guide before proceeding.

## Step 1: Start Metro

First, you will need to run **Metro**, the JavaScript build tool for React Native.

To start the Metro dev server, run the following command from the root of your React Native project:

```sh
# Using npm
npm start

# OR using Yarn
yarn start
```

## Step 2: Build and run your app

With Metro running, open a new terminal window/pane from the root of your React Native project, and use one of the following commands to build and run your Android or iOS app:

### Android

```sh
# Using npm
npm run android

# OR using Yarn
yarn android
```

### iOS

For iOS, remember to install CocoaPods dependencies (this only needs to be run on first clone or after updating native deps).

The first time you create a new project, run the Ruby bundler to install CocoaPods itself:

```sh
bundle install
```

Then, and every time you update your native dependencies, run:

```sh
bundle exec pod install
```

For more information, please visit [CocoaPods Getting Started guide](https://guides.cocoapods.org/using/getting-started.html).

```sh
# Using npm
npm run ios

# OR using Yarn
yarn ios
```

If everything is set up correctly, you should see your new app running in the Android Emulator, iOS Simulator, or your connected device.

This is one way to run your app — you can also build it directly from Android Studio or Xcode.

## Step 3: Modify your app

Now that you have successfully run the app, let's make changes!

Open `App.tsx` in your text editor of choice and make some changes. When you save, your app will automatically update and reflect these changes — this is powered by [Fast Refresh](https://reactnative.dev/docs/fast-refresh).

When you want to forcefully reload, for example to reset the state of your app, you can perform a full reload:

- **Android**: Press the <kbd>R</kbd> key twice or select **"Reload"** from the **Dev Menu**, accessed via <kbd>Ctrl</kbd> + <kbd>M</kbd> (Windows/Linux) or <kbd>Cmd ⌘</kbd> + <kbd>M</kbd> (macOS).
- **iOS**: Press <kbd>R</kbd> in iOS Simulator.

## Congratulations! :tada:

You've successfully run and modified your React Native App. :partying_face:

### Now what?

- If you want to add this new React Native code to an existing application, check out the [Integration guide](https://reactnative.dev/docs/integration-with-existing-apps).
- If you're curious to learn more about React Native, check out the [docs](https://reactnative.dev/docs/getting-started).

# Troubleshooting

If you're having issues getting the above steps to work, see the [Troubleshooting](https://reactnative.dev/docs/troubleshooting) page.

# Learn More

To learn more about React Native, take a look at the following resources:

- [React Native Website](https://reactnative.dev) - learn more about React Native.
- [Getting Started](https://reactnative.dev/docs/environment-setup) - an **overview** of React Native and how setup your environment.
- [Learn the Basics](https://reactnative.dev/docs/getting-started) - a **guided tour** of the React Native **basics**.
- [Blog](https://reactnative.dev/blog) - read the latest official React Native **Blog** posts.
- [`@facebook/react-native`](https://github.com/facebook/react-native) - the Open Source; GitHub **repository** for React Native.
