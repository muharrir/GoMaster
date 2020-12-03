import React from 'react';
import {Image, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {ICVisa, ILCard1, ILMastercard, ILVisa} from '../../../assets';

export default function PaymentItems({bg, code, exp, logo, amount}) {
  return (
    <View style={styles.container}>
      <ImageBackground source={bg} style={styles.img}>
        <View style={styles.wrapperText}>
          <Text style={styles.text}>{amount}</Text>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <View style={styles.code}>
          <Text style={styles.code}>{code}</Text>
          <Text style={styles.exp}>{exp}</Text>
        </View>
        <View>
          <Image source={logo} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E2E2E0',
    paddingVertical: 24,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  img: {width: 65, height: 42, marginRight: 15, borderRadius: 1.6},
  wrapperText: {justifyContent: 'flex-end', flex: 1},
  text: {
    fontSize: 8,
    fontFamily: 'Gilroy-SemiBold',
    color: 'white',
    marginLeft: 5,
    marginBottom: 4,
  },
  code: {fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: '#525464'},
  exp: {fontSize: 14, fontFamily: 'Gilroy-Medium', color: '#838391'},
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
  },
  logo: {width: 29, height: 18},
});
