import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import {ICFacebook, ICLinked, ICTwitter} from '../../../assets';

export default function IconSocial({icon}) {
  const Icon = () => {
    if (icon === 'facebook') {
      return <ICFacebook />;
    }
    if (icon === 'twitter') {
      return <ICTwitter />;
    }
    if (icon === 'linked') {
      return <ICLinked />;
    }
    return <ICFacebook />;
  };

  return (
    <View style={styles.container}>
      <Icon />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 23,
    borderWidth: 1,
    width: 110,
    borderColor: '#E2E2E0',
    alignItems: 'center',
  },
});
