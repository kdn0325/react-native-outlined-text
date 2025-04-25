# React Native Stroke/Outline Text

Want to use text stroke or text outline in React Native? This library is easy to create

## Examples

```
cd example

npm install @kdn0325/react-native-outlined-text
# or
yarn add @kdn0325/react-native-outlined-text


react-native run-ios

react-native run-android
```

![Example](https://github.com/kdn0325/react-native-outlined-text/assets/91298955/e87d52f3-9178-4a38-8c05-1fff55dbe056)

## Installation

```bash
npm install @kdn0325/react-native-outlined-text
# or
yarn add @kdn0325/react-native-outlined-text
```

## Usage

Here's a quick example to get you started with StrokeText:

```jsx
import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import OutlinedText from '@kdn0325/react-native-outlined-text';

export default function App() {
  return (
    <View style={styles.container}>
      <OutlinedText
        text={'Hello World'}
        fontColor={'#000'}
        fontSize={50}
        fontWeight={'500'}
        outlineColor={'#fff'}
        shadowLine={2}
      />
      <OutlinedText
        text={'Hello World'}
        fontColor={'#fff'}
        fontSize={50}
        fontWeight={'500'}
        outlineColor={'pink'}
        shadowLine={2}
      />
      <OutlinedText
        text={'Hello World'}
        fontColor={'green'}
        fontSize={50}
        fontWeight={'500'}
        outlineColor={'blue'}
        shadowLine={2}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
```

### Props

The following table outlines the props available for the `StrokeText` component:

| Prop           | Type   | Description                                                                                                                                                                                                                            |
| -------------- | ------ | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `text`         | string | The text content you want to display.                                                                                                                                                                                                  |
| `shadowLine`   | number | The thickness of the stroke (outline) around the text. If this prop isn't provided, the default thickness will be used. (default: `1`)                                                                                                 |
| `color`        | string | Color of the text, can use any valid color format. (default: `#fff`)                                                                                                                                                                   |
| `outlineColor` | string | Color of the stroke (outline) around the text. (default: `#000`)                                                                                                                                                                       |
| `fontWeight`   | string | The thickness of the font. It accepts the following values: 'normal', 'bold', '100', '200', '300', '400', '500', '600', '700', '800', '900'. If this prop isn't provided, the default value 'normal' will be used. (default: `normal`) |
| `fontSize`     | string | Size of the text font, defining how large the text will be. (default: `14`)                                                                                                                                                            |
| `fontFamily`   | string | Font family for the text, should match available project fonts. (default: `system font`)                                                                                                                                               |
| `align`        | string | Text alignment. It accepts the following values: 'auto', 'left', 'right', 'center', 'justify'. If this prop isn't provided, the default value 'center' will be used. (default: `center`)                                               |

## Ellipsis

```jsx
<OutlinedText
  text={'Hello World'}
  fontColor={'#fff'}
  fontSize={50}
  fontWeight={'500'}
  outlineColor={'pink'}
  line={2}
/>
```

## Custom Font

Create a `react-native.config.js` file in the root directory

```javascript
module.exports = {
  project: {
    ios: {},
    android: {},
  },
  assets: ['/assets/fonts'], // or './src/assets/fonts'
};
```

## Contributing

We welcome contributions to improve this component. Feel free to submit issues and enhancement requests.

## License

Please refer to the project's license for usage rights and limitations.
