import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Button({onPress, label, secondary, double}) {
  return (
    <TouchableOpacity
      style={styles.container(secondary, double)}
      onPress={onPress}>
      <Text style={styles.text(secondary)}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: (secondary, double) => ({
    padding: 20,
    backgroundColor: secondary ? 'white' : '#20C3AF',
    borderWidth: 1,
    borderColor: secondary ? '#E2E2E0' : '#20C3AF',
    flex: double ? 1 : 0,
  }),
  text: (secondary) => ({
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    color: secondary ? '#838391' : 'white',
    textAlign: 'center',
  }),
});
