import React, { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import type { TextStyle as RNTextStyle, StyleProp } from 'react-native';

interface OutlinedTextProps {
  /**
   * The text to be displayed with outline effect
   */
  text: string;
  /**
   * Width of the text shadow (outline)
   * @default 1
   */
  shadowLine?: number;
  /**
   * Color of the text
   * @default '#fff'
   */
  color?: string;
  /**
   * Color of the outline
   * @default '#000'
   */
  outlineColor?: string;
  /**
   * Font weight of the text
   * @default '500'
   */
  fontWeight?: RNTextStyle['fontWeight'];
  /**
   * Font size of the text
   * @default 14
   */
  fontSize?: number;
  /**
   * Font family of the text
   */
  fontFamily?: string;
  /**
   * Text alignment
   * @default 'center'
   */
  align?: RNTextStyle['textAlign'];
  /**
   * Additional custom styles for the text
   */
  customStyle?: StyleProp<RNTextStyle>;
}

/**
 * OutlinedText component for displaying text with outline effect
 */
export default function OutlinedText({
  text,
  shadowLine = 1,
  color = '#fff',
  outlineColor = '#000',
  fontWeight = '500',
  fontSize = 14,
  fontFamily,
  align = 'center',
  customStyle,
}: OutlinedTextProps) {
  // Memoize the text style to prevent unnecessary re-renders
  const textStyle = useMemo(
    () => ({
      color,
      textShadowRadius: shadowLine,
      fontWeight,
      fontSize,
      fontFamily,
      textShadowColor: outlineColor,
      textAlign: align,
    }),
    [color, shadowLine, fontWeight, fontSize, fontFamily, outlineColor, align]
  );

  // Memoize the outline text style
  const outlineTextStyle = useMemo(
    () => ({
      ...textStyle,
      ...styles.abs,
      textShadowOffset: { width: shadowLine, height: shadowLine },
    }),
    [textStyle, shadowLine]
  );

  return (
    <View>
      <Text style={[styles.paragraph, textStyle, customStyle]}>{text}</Text>
      <Text style={[styles.paragraph, outlineTextStyle, customStyle]}>
        {text}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  paragraph: {
    backgroundColor: 'transparent',
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
