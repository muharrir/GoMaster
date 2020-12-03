import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICCheck, ICPlusBlack} from '../../../assets';

export default function ConstructionItem({type, disable, label}) {
  const Icon = () => {
    if (type === 'disable') {
      return <ICPlusBlack />;
    }
    return <ICCheck />;
  };
  return (
    <View style={styles.container(disable)}>
      <View>
        <Text style={styles.text(disable)}>{label}</Text>
      </View>
      <View style={styles.box(disable)}>
        <Icon />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: (disable) => ({
    borderWidth: 1,
    borderColor: disable ? '#F7F7F7' : '#FFB19D',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  }),
  text: (disable) => ({
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    color: disable ? '#838391' : '#525464',
    paddingVertical: 19,
    paddingHorizontal: 20,
  }),
  box: (disable) => ({
    backgroundColor: disable ? '#F7F7F7' : '#FFB19D',
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  }),
});
