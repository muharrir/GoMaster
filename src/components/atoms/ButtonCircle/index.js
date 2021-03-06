import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICPlus} from '../../../assets';

export default function ButtonCircle({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ICPlus />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 82,
    height: 82,
    borderRadius: 82 / 2,
    backgroundColor: '#20C3AF',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
