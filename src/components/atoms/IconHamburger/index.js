import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICHamburger} from '../../../assets';

export default function IconHamburger({onPress}) {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <ICHamburger />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {height: 20, width: 20, alignItems: 'center'},
});
