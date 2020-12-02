import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Button({onPress, label}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#20C3AF'},
  text: {
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    color: 'white',
    textAlign: 'center',
  },
});
