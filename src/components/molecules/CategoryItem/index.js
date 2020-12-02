import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {
  ICBox,
  ICFurniture,
  ICInterior,
  ICNext,
  ICSapu,
  ICTools,
} from '../../../assets';

export default function CategoryItem({label, icon}) {
  const Icon = () => {
    if (icon === 'furniture') {
      return <ICFurniture />;
    }
    if (icon === 'sapu') {
      return <ICSapu />;
    }
    if (icon === 'tools') {
      return <ICTools />;
    }
    if (icon === 'box') {
      return <ICBox />;
    }
    if (icon === 'interior') {
      return <ICInterior />;
    }
    return <ICFurniture />;
  };
  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.columnBox}>
        <Icon />
      </View>
      <View style={styles.wrapperContent}>
        <Text style={styles.text}>{label}</Text>
        <ICNext />
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#F7F7F7',
    marginBottom: 16,
  },
  columnBox: {
    backgroundColor: '#F7F7F7',
    height: 80,
    width: 80,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapperContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    flex: 1,
    paddingLeft: 16,
    paddingRight: 22,
  },
  text: {
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    color: '#838391',
  },
});
