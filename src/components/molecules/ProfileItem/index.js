import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICCircle, ICMail, ICTelpon} from '../../../assets';

export default function ProfileItem({icon, desc, label}) {
  const Icon = () => {
    if (icon === 'telpon') {
      return <ICTelpon />;
    }
    if (icon === 'mail') {
      return <ICMail />;
    }
    if (icon === 'circle') {
      return <ICCircle />;
    }
    return <ICTelpon />;
  };
  return (
    <View style={styles.container}>
      <View style={styles.wrapperIcon}>
        <Icon />
      </View>
      <View style={styles.wrapperText}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.desc}>{desc}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderColor: '#E2E2E0',
    marginBottom: 16,
    flexDirection: 'row',
  },
  wrapperIcon: {width: 72, alignItems: 'center', justifyContent: 'center'},
  wrapperText: {
    marginVertical: 18,
    paddingLeft: 22,
    borderLeftColor: '#E2E2E0',
    borderLeftWidth: 1,
  },
  label: {
    fontSize: 14,
    fontFamily: 'Gilroy-Medium',
    color: '#E2E2E0',
    marginBottom: 6,
  },
  desc: {fontSize: 16, fontFamily: 'Gilroy-Medium', color: '#ffffff'},
});
