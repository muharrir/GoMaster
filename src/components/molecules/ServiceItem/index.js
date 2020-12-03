import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function ServiceItem({image, label, price}) {
  return (
    <View>
      <View style={styles.imageContent}>
        <Image source={image} style={styles.img} />
        <View style={styles.wrapperText}>
          <Text style={styles.label}>{label}</Text>
          <Text style={styles.price}>{price}</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  imageContent: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 26,
  },
  img: {width: 60, height: 60, marginRight: 20},
  wrapperText: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  label: {fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: '#525464'},
  price: {fontSize: 24, fontFamily: 'Ubuntu-Medium', color: '#525464'},
});
