import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
  const textStyle = {
    color,
    textShadowRadius: shadowLine,
    fontWeight: fontWeight,
    fontSize: fontSize,
    fontFamily: fontFamily,
    textShadowColor: outlineColor,
    textAlign: align,
  };

  const renderOutLineText = (style: object) => (
    <Text style={[styles.paragraph, style]}>{text}</Text>
  );
  return (
    <View>
      {renderOutLineText(textStyle)}
      {renderOutLineText({
        ...textStyle,
        ...styles.abs,
        textShadowOffset: { width: shadowLine, height: shadowLine },
      })}
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
