import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {Button, ConstructionItem, Gap, Header} from '../../components';
import {ICPlusBlack} from '../../assets';

export default function ConstructionWorks({navigation}) {
  return (
    <View style={styles.page}>
      <Header label="Construction works" />
      <View style={styles.content}>
        <View style={styles.input}>
          <TextInput
            placeholder="Search by category"
            style={styles.inputText}
          />
        </View>
        <View>
          <ConstructionItem label="Welding works" />
          <ConstructionItem label="Foundation works" />
          <ConstructionItem label="Roofing" disable type="disable" />
          <ConstructionItem label="Waterproofing" />
          <ConstructionItem label="Architecture" disable type="disable" />
          <ConstructionItem label="Design" disable type="disable" />
        </View>
      </View>
      <View style={styles.btn}>
        <Button secondary double label="Skip" />
        <Gap width={15} />
        <Button
          double
          label="Done"
          onPress={() => navigation.navigate('PaymentService')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  content: {
    marginHorizontal: 30,
    paddingTop: 21,
    flex: 1,
  },
  input: {
    backgroundColor: '#F7F7F7',
    paddingVertical: 21,
    paddingHorizontal: 22,
    marginBottom: 42,
  },
  inputText: {fontSize: 16, fontFamily: 'Gilroy-Medium', color: '#B0B0C3'},
  btn: {flexDirection: 'row', marginBottom: 40, paddingHorizontal: 30},
});
