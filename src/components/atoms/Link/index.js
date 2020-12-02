import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export default function Link({label, onPress, active}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text(active)}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  text: (active) => ({
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    textDecorationLine: active ? 'underline' : 'none',
    color: active ? '#FFB19D' : '#838391',
  }),
});
