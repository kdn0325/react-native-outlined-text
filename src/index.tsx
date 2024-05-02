import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
type FontWeight =
  | 'normal'
  | 'bold'
  | '100'
  | '200'
  | '300'
  | '400'
  | '500'
  | '600'
  | '700'
  | '800'
  | '900'
  | undefined;

type TextAlign = 'auto' | 'left' | 'right' | 'center' | 'justify';

interface OutlinedTextProps {
  text: string;
  shadowLine: number;
  color?: string;
  outlineColor?: string;
  fontWeight?: FontWeight;
  fontSize?: number;
  fontFamily?: string;
  align?: TextAlign;
}
export default function OutlinedText({
  text,
  shadowLine = 1,
  color = '#fff',
  outlineColor = '#000',
  fontWeight = '500',
  fontSize = 14,
  fontFamily,
  align = 'center',
}: OutlinedTextProps) {
  return (
    <View>
      <Text
        style={[
          styles.paragraph,
          {
            color,
            textShadowRadius: shadowLine,
            fontWeight: fontWeight,
            fontSize: fontSize,
            fontFamily: fontFamily,
            textShadowColor: outlineColor,
            textAlign: align,
          },
        ]}
      >
        {text}
      </Text>
      <Text
        style={[
          styles.paragraph,
          styles.abs,
          {
            textShadowOffset: { width: shadowLine, height: shadowLine },
            color,
            textShadowRadius: shadowLine,
            fontWeight: fontWeight,
            fontSize: fontSize,
            fontFamily: fontFamily,
            textShadowColor: outlineColor,
            textAlign: align,
          },
        ]}
      >
        {text}
      </Text>
      <Text
        style={[
          styles.paragraph,
          styles.abs,
          {
            textShadowOffset: { width: shadowLine, height: shadowLine },
            color,
            textShadowRadius: shadowLine,
            fontWeight: fontWeight,
            fontSize: fontSize,
            fontFamily: fontFamily,
            textShadowColor: outlineColor,
            textAlign: align,
          },
        ]}
      >
        {text}
      </Text>
      <Text
        style={[
          styles.paragraph,
          styles.abs,
          {
            textShadowOffset: { width: shadowLine, height: shadowLine },
            color,
            textShadowRadius: shadowLine,
            fontWeight: fontWeight,
            fontSize: fontSize,
            fontFamily: fontFamily,
            textShadowColor: outlineColor,
            textAlign: align,
          },
        ]}
      >
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    textShadowOffset: {
      width: 1,
      height: 1,
    },
  },
  abs: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
