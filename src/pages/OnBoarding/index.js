import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import Swiper from 'react-native-swiper';
import {Button, ButtonCircle} from '../../components';
import {
  ILOnboarding1,
  ILOnboarding2,
  ILOnboarding3,
  ILOnboarding4,
} from '../../assets';

export default function OnBoarding({navigation}) {
  return (
    <Swiper
      index={0}
      loop={false}
      style={styles.wrapper}
      dotStyle={{
        backgroundColor: '#CBD3D5',
        width: 8,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: windowHeight * 0.123,
      }}
      activeDotStyle={{
        backgroundColor: '#B5C3C7',
        width: 17,
        height: 8,
        borderRadius: 4,
        marginLeft: 3,
        marginRight: 3,
        marginTop: 3,
        marginBottom: windowHeight * 0.123,
      }}>
      <View style={styles.slide1}>
        <View style={styles.wrapperContent}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Proven specialists</Text>
          </View>
          <View style={styles.img}>
            <ILOnboarding1 />
          </View>
          <Text style={styles.text2}>
            We check each specialist before he starts work
          </Text>
        </View>
        <View style={styles.btn}>
          <Button label="Next" />
        </View>
      </View>

      <View style={styles.slide2}>
        <View style={styles.wrapperContent}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Honest ratings</Text>
          </View>
          <View style={styles.img}>
            <ILOnboarding2 />
          </View>
          <Text style={styles.text2}>
            We carefully check each specialist and put honest ratings
          </Text>
        </View>
        <View style={styles.btn}>
          <Button label="Next" />
        </View>
      </View>

      <View style={styles.slide3}>
        <View style={styles.wrapperContent}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Insured orders</Text>
          </View>
          <View style={styles.img}>
            <ILOnboarding3 />
          </View>
          <Text style={styles.text2}>
            We insure each order for the amount of $500
          </Text>
        </View>
        <View style={styles.btn}>
          <Button label="Next" />
        </View>
      </View>

      <View style={styles.slide4}>
        <View style={styles.wrapperContent}>
          <View style={styles.textWrapper}>
            <Text style={styles.text}>Create order</Text>
          </View>
          <View style={styles.img}>
            <ILOnboarding4 />
          </View>
          <Text style={styles.text2}>It's easy, just click on the plus </Text>
        </View>
        <View style={styles.btnCircle}>
          <ButtonCircle onPress={() => navigation.replace('SignIn')} />
        </View>
      </View>
    </Swiper>
  );
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  wrapper: {},
  slide1: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  wrapperContent: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginBottom: windowHeight * 0.106,
  },
  img: {
    marginTop: windowHeight * 0.0837,
    marginBottom: windowHeight * 0.086,
    height: 350,
    width: 256,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {marginBottom: windowHeight * 0.049, paddingHorizontal: 30},
  btnCircle: {alignItems: 'center', marginBottom: 30},

  slide2: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  slide3: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },
  slide4: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
  },

  text: {
    color: '#525464',
    fontSize: 40,
    fontFamily: 'Ubuntu-Medium',
    textAlign: 'center',
  },
  textWrapper: {
    width: 231,
    paddingTop: windowHeight * 0.0739,
  },
  text2: {
    color: '#838391',
    fontSize: 16,
    fontFamily: 'Gilroy-Medium',
    textAlign: 'center',
    marginHorizontal: 50,
  },
});
