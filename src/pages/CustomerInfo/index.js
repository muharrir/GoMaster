import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ICStar, ICStarDisable} from '../../assets';
import {CustomerItem, Gap, Header, Link} from '../../components';

export default function CustomerInfo({navigation}) {
  return (
    <View style={styles.page}>
      <Header label="Customer Info" />
      <View style={styles.wrapper}>
        <Text style={styles.label}>Portofolio</Text>
        <Text style={styles.info}>
          The last completed works of the contractor are shown below.
        </Text>
        <CustomerItem />
        <View style={styles.wrapperStar}>
          <ICStar />
          <Gap width={5} />
          <ICStar />
          <Gap width={5} />
          <ICStar />
          <Gap width={5} />
          <ICStar />
          <Gap width={5} />
          <ICStarDisable />
        </View>
        <View style={styles.wrapperText}>
          <Text style={styles.label}>Details</Text>
          <Text style={styles.info}>
            I have been working in this position for over 10 years! I have
            created many design solutions and I think my main best quality is
            creativity. If you liked my work, please contact me and see the
            professionalism and quality of my services.
          </Text>
        </View>
        <Link
          active
          label="Read more"
          onPress={() => navigation.navigate('Setting')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {backgroundColor: 'white', flex: 1},
  wrapper: {marginHorizontal: 30},
  label: {
    fontSize: 24,
    fontFamily: 'Ubuntu-Medium',
    color: '#525464',
    marginBottom: 17,
    marginTop: 25,
  },
  info: {
    fontSize: 14,
    fontFamily: 'Gilroy-Medium',
    color: '#616173',
    letterSpacing: 0.6,
    textAlign: 'justify',
    lineHeight: 24,
  },
  wrapperStar: {flexDirection: 'row', marginTop: 18},
  wrapperText: {marginTop: 32, marginBottom: 12},
});
