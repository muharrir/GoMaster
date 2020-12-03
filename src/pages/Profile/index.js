import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyProfile} from '../../assets';
import {Button, Dot, Gap, Header, Link, ProfileItem} from '../../components';

export default function Profile({navigation}) {
  return (
    <View style={styles.page}>
      <Header />
      <View style={styles.wrapperContent}>
        <Image source={DummyProfile} style={styles.image} />
        <Text style={styles.name}>Jeremías del Pozo</Text>
        <View style={styles.wrapperText}>
          <Text style={styles.text}>New York</Text>
          <Dot />
          <Text style={styles.text}>ID: 1120611</Text>
        </View>
        <Link active label="Edit" />
      </View>
      <View style={styles.btn}>
        <Button secondary double label="About Me" />
        <Gap width={15} />
        <Button
          double
          label="Reviews"
          onPress={() => navigation.navigate('Notification')}
        />
      </View>
      <View style={styles.wrapperItem}>
        <ProfileItem icon="telpon" label="Phone number" desc="+3746589923" />
        <ProfileItem icon="mail" label="Email" desc="conrad@gmail.com" />
        <ProfileItem icon="circle" label="Completed projects" desc="248" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
  wrapperContent: {
    alignItems: 'center',
    paddingTop: 21,
  },
  image: {height: 114, width: 114, borderRadius: 114 / 2, marginBottom: 26},
  name: {
    fontSize: 24,
    fontFamily: 'Ubuntu-Medium',
    color: '#525464',
    marginBottom: 6,
  },
  wrapperText: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 17,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Gilroy-Medium',
    color: '#838391',
  },
  btn: {
    flexDirection: 'row',
    paddingHorizontal: 30,
    marginBottom: 40,
    marginTop: 24,
  },
  wrapperItem: {
    paddingHorizontal: 30,
    paddingVertical: 40,
    backgroundColor: '#525464',
    flex: 1,
  },
});
