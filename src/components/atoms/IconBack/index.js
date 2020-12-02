import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICBack} from '../../../assets';

export default function IconBack({onPress}) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.icon}>
        <ICBack />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  icon: {height: 20, width: 20, alignItems: 'center'},
});
