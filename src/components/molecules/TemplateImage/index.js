import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {
  DummyCustomer1,
  DummyCustomer2,
  DummyCustomer3,
  DummyCustomer4,
} from '../../../assets';

export default function TemplateImage() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={DummyCustomer1} style={styles.image} />
      </View>
      <View style={styles.wrapperSmallImage}>
        <Image source={DummyCustomer2} style={styles.smallImage} />
        <Image source={DummyCustomer1} style={styles.smallImage} />
        <Image source={DummyCustomer3} style={styles.smallImage} />
        <Image source={DummyCustomer4} style={styles.smallImage} />
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {width: 270, height: windowHeight * 0.335},
  smallImage: {
    width: 70,
    height: windowHeight * 0.074,
  },
  wrapperSmallImage: {justifyContent: 'space-between'},
});
