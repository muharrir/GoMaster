import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Dot() {
  return (
    <View
      style={{
        backgroundColor: '#B5C3C7',
        width: 5,
        height: 5,
        borderRadius: 5 / 2,
        alignItems: 'center',
        justifyContent: 'center',
        marginHorizontal: 14,
      }}
    />
  );
}
