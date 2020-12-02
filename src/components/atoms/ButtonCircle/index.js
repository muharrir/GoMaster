import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICPlus} from '../../../assets';

export default function ButtonCircle() {
  return (
    <View style={styles.container}>
      <ICPlus />
    </View>
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
