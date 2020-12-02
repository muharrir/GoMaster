import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ICHamburger} from '../../../assets';
import {IconBack} from '../../atoms';

export default function Header({onPress, label}) {
  return (
    <View style={styles.container}>
      <IconBack onPress={onPress} />

      <Text style={styles.text}>{label}</Text>
      <View style={styles.icon}>
        <ICHamburger />
      </View>
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
  icon: {height: 20, width: 20, alignItems: 'center'},
  text: {fontSize: 18, fontFamily: 'Gilroy-SemiBold', color: '#525464'},
});
