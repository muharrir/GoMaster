import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyCustomer1, DummyCustomer2} from '../../../assets';
import TemplateImage from '../TemplateImage';

export default function CustomerItem() {
  return (
    <View style={styles.container}>
      <TemplateImage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {marginTop: 26},
});
