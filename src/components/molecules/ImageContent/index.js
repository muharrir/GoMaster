import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {DummyOP1} from '../../../assets';

export default function ImageContent({image, label, price}) {
  return (
    <View style={styles.container}>
      <Image source={image} style={styles.image} />
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.price}>{price}</Text>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {width: 170, marginBottom: 15},
  image: {width: 170, height: windowHeight * 0.25, marginBottom: 10},
  label: {
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    color: '#525464',
    textAlign: 'center',
    marginBottom: 6,
  },
  price: {
    fontSize: 14,
    fontFamily: 'Gilroy-Medium',
    color: '#b0b0c3',
    textAlign: 'center',
  },
});
