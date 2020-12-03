import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DummyProfile2, DummyProfile3, DummyProfile4} from '../../assets';
import {Button, Header} from '../../components';
import NotificationItem from '../../components/molecules/NotificationItem';

export default function Notification({navigation}) {
  return (
    <View style={styles.page}>
      <Header
        label="Notification"
        onPress={() => navigation.replace('Profile')}
      />
      <View style={styles.item}>
        <NotificationItem
          image={DummyProfile2}
          name="Joel Rowe"
          profession="Bitrow Company"
          desc="Sorry, all the artists in the Interior Design category are busy right now. If your task is still relevant - go to the task details page and click Extend task "
        />
        <NotificationItem
          image={DummyProfile3}
          name="Cole Payne"
          profession="Corporation Kraton"
          desc="We have found a contractor for your task Cleaning-Services. Please see the details."
        />
        <NotificationItem
          image={DummyProfile4}
          name="Elva Stone"
          profession="Grand Service Company"
          desc="David Coleman is ready to complete your assignment and get started soon! View David's profile and carefully review the order details. Then confirm the order."
        />
        <View style={styles.btn}>
          <Button label="View All" />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  item: {marginHorizontal: 30, paddingTop: 20},
  btn: {marginTop: 28},
});
