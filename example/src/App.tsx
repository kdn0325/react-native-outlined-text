import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import OutlinedText from '@kdn0325/react-native-outlined-text';

export default function App() {
  return (
    <View style={styles.container}>
      <OutlinedText
        text={'Hello World'}
        color={'#000'}
        fontSize={50}
        fontWeight={'500'}
        outlineColor={'#fff'}
        shadowLine={2}
      />
      <OutlinedText
        text={'Hello World'}
        color={'#fff'}
        fontSize={50}
        fontWeight={'500'}
        outlineColor={'pink'}
        shadowLine={2}
      />
      <OutlinedText
        text={'Hello World'}
        color={'green'}
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
