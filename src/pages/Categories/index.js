import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, Gap, Header} from '../../components';
import CategoryItem from '../../components/molecules/CategoryItem';

export default function Categories({navigation}) {
  return (
    <View style={styles.page}>
      <Header label="Categories" />
      <View style={styles.content}>
        <View style={styles.input}>
          <TextInput
            placeholder="Search by category"
            style={styles.inputText}
          />
        </View>
        <CategoryItem icon="furniture" label="Furniture works" />
        <CategoryItem icon="sapu" label="Cleaning services" />
        <CategoryItem icon="tools" label="Equipment repair" />
        <CategoryItem icon="box" label="Courier services" />
        <CategoryItem icon="interior" label="Interior design" />
        <View style={styles.btn}>
          <Button secondary double label="Back" style={styles.btnback} />
          <Gap width={15} />
          <Button
            double
            label="Next"
            onPress={() => navigation.navigate('Profile')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
  content: {marginHorizontal: 30, paddingTop: 21},
  input: {
    backgroundColor: '#F7F7F7',
    paddingVertical: 21,
    paddingHorizontal: 22,
    marginBottom: 42,
  },
  inputText: {fontSize: 16, fontFamily: 'Gilroy-Medium', color: '#B0B0C3'},
  btn: {
    flexDirection: 'row',
    marginTop: 42,
  },
});
