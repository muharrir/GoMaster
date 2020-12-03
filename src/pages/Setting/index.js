import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Header, Link, SettingItem} from '../../components';

export default function Setting({navigation}) {
  return (
    <View style={styles.page}>
      <Header label="Settings" />
      <View style={styles.wrapperItem}>
        <SettingItem
          label="Payment cards"
          onPress={() => navigation.navigate('PaymentsCard')}
        />
        <SettingItem label="Write to us" />
        <SettingItem label="Rate us on app store" />
        <SettingItem label="About Us" />
      </View>
      <View style={styles.link}>
        <Link
          active
          label="Log Out"
          onPress={() => navigation.replace('SignIn')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
  wrapperItem: {marginHorizontal: 30, marginTop: 25},
  link: {marginHorizontal: 30, marginTop: 14},
});
