import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {DummyPayment1, DummyPayment2, DummyPayment3} from '../../assets';
import {Button, Header, Link, ServiceItem} from '../../components';

export default function PaymentService({navigation}) {
  return (
    <View style={styles.page}>
      <Header label="Payment for services" />
      <View style={styles.container}>
        <View style={styles.content}>
          <ServiceItem
            image={DummyPayment1}
            label="Welding works"
            price="$40"
          />
          <ServiceItem
            image={DummyPayment2}
            label="Foundation works"
            price="$55"
          />
          <ServiceItem
            image={DummyPayment3}
            label="Waterproofing"
            price="$20"
          />
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.text}>Total</Text>
          <Text style={styles.price}>$105</Text>
        </View>
      </View>
      <View style={styles.footer}>
        <Button
          label="Checkout"
          onPress={() => navigation.navigate('CustomerInfo')}
        />
        <View style={styles.link}>
          <Link
            active
            label="Continue Shopping"
            onPress={() => navigation.replace('ConstructionWorks')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
  container: {
    marginHorizontal: 30,
    paddingTop: 30,
    flex: 1,
  },
  content: {borderBottomWidth: 1, borderColor: '#F7F6F5'},
  wrapperText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
  },
  text: {fontSize: 16, fontFamily: 'Gilroy-SemiBold', color: '#525464'},
  price: {fontSize: 24, fontFamily: 'Ubuntu-Medium', color: '#525464'},
  footer: {marginHorizontal: 30, marginBottom: 40},
  link: {marginTop: 18, alignItems: 'center'},
});
