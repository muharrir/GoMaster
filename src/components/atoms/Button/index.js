import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default function Button({label}) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Next</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {padding: 20, backgroundColor: '#20C3AF'},
  text: {
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    color: 'white',
    textAlign: 'center',
  },
});
