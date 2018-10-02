# ParkMe

## Installation

This is a React Native app that uses Expo.

```
npm i -g expo-cli
```

If you are on a Mac:

```
brew install watchman
```

```
npm i
expo start
```

Download the Expo app, read the QR code - magic!

## Testing

Making a React Native app that works with Enzyme for rendering and testing
components is actually really hard, since Enzyme is built for use with the
DOM, and not native components.

For now, we use `react-test-renderer` to render our components in test files.

[Here][1] is a great introduction to testing with `react-test-renderer`, and
[here][2] are the `react-test-renderer` docs.

[1]: https://medium.com/@pshrmn/testing-react-native-components-in-node-with-react-test-renderer-cb2985402dce
[2]: https://reactjs.org/docs/test-renderer.html