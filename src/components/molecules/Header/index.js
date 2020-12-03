import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IconBack, IconHamburger} from '../../atoms';

export default function Header({onPress, label}) {
  return (
    <View style={styles.container}>
      <IconBack onPress={onPress} />
      <Text style={styles.text}>{label}</Text>
      <IconHamburger onPress={onPress} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  text: {fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: '#525464'},
});
