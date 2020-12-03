import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICNext} from '../../../assets';

export default function SettingItem({label, onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
      <ICNext />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: '#F7F7F7',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 29,
    paddingHorizontal: 24,
    marginBottom: 16,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    color: '#838391',
  },
});
