import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

export default function NotificationItem({name, profession, desc, image}) {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Image source={image} style={styles.image} />
        <View style={styles.wrapperText}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.profession}>{profession}</Text>
        </View>
      </View>
      <Text style={styles.desc}>{desc}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingBottom: 28,
    borderBottomWidth: 1,
    borderBottomColor: '#F7F7FB',
    marginBottom: 28,
  },
  top: {flexDirection: 'row', alignItems: 'center', marginBottom: 16},
  image: {height: 50, width: 50, borderRadius: 50 / 2, marginRight: 16},
  name: {
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    color: '#525464',
    marginBottom: 6,
  },
  profession: {fontSize: 14, fontFamily: 'Gilroy-Medium', color: '#838391'},
  desc: {
    fontSize: 14,
    fontFamily: 'Gilroy-Medium',
    color: '#616173',
    lineHeight: 24,
    letterSpacing: 0.35,
  },
});
