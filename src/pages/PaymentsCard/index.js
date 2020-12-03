import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ILCard1, ILCard2, ILMastercard, ILVisa} from '../../assets';
import {Button, Header, PaymentItems} from '../../components';

export default function PaymentsCard({navigation}) {
  return (
    <View style={styles.page}>
      <Header label="Payment cards" />
      <View style={styles.content}>
        <PaymentItems
          bg={ILCard1}
          amount="$ 25,388"
          code="**** **** **** 3872"
          exp="17/2020"
          logo={ILVisa}
        />
        <PaymentItems
          bg={ILCard1}
          amount="$ 34,880"
          code="**** **** **** 2873"
          exp="07/2022"
          logo={ILVisa}
        />
        <PaymentItems
          bg={ILCard2}
          amount="$ 9,568"
          code="**** **** **** 3212"
          exp="10/2024"
          logo={ILMastercard}
        />
        <PaymentItems
          bg={ILCard1}
          amount="$ 41,563"
          code="**** **** **** 3412"
          exp="12/2024"
          logo={ILVisa}
        />
      </View>
      <View style={styles.btn}>
        <Button
          label="Add new card"
          onPress={() => navigation.navigate('PaymentsCard2')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  content: {marginHorizontal: 30, marginTop: 25, flex: 1},
  btn: {marginBottom: 40, marginHorizontal: 30},
});
