import React from 'react';
import {Dimensions, Image, StyleSheet, Text, View} from 'react-native';
import {
  DummyOP1,
  DummyOP2,
  DummyOP3,
  DummyOP4,
  DummyOP5,
  DummyOP6,
} from '../../assets';
import {
  Button,
  Gap,
  Header,
  ImageContent,
  ImageContentSmall,
} from '../../components';

export default function OrderInProgress({navigation}) {
  return (
    <View style={styles.page}>
      <Header label="Orders in progress" />
      <View style={styles.wrapperImage}>
        <View style={styles.image}>
          <ImageContent image={DummyOP1} label="Balcony repair" price="$24" />
          <ImageContentSmall
            image={DummyOP2}
            label="Painting works"
            price="$42"
          />
          <ImageContent image={DummyOP5} label="Balcony repair" price="$24" />
        </View>
        <View style={styles.image}>
          <ImageContentSmall
            image={DummyOP3}
            label="Redecorating"
            price="$60"
          />
          <ImageContent image={DummyOP4} label="Interior design" price="$54" />
          <ImageContent image={DummyOP6} label="Balcony repair" price="$24" />
        </View>
      </View>
      <View style={styles.btn}>
        <Button secondary double label="Archive" />
        <Gap width={15} />
        <Button
          double
          label="In Work"
          onPress={() => navigation.navigate('ConstructionWorks')}
        />
      </View>
    </View>
  );
}

const windowHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'space-between',
  },
  wrapperImage: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingTop: 40,
  },
  btn: {
    paddingHorizontal: 30,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingBottom: 40,
    paddingTop: 5,
    shadowColor: '#ffffff',
    shadowOpacity: 1,
    shadowRadius: 20,
    shadowOffset: {
      height: 1,
      width: 0,
    },
  },

  // page2: {justifyContent: 'space-between'},
  // containerImage: {
  //   flexDirection: 'row',
  //   marginHorizontal: 30,
  //   justifyContent: 'space-between',
  //   marginTop: 40,
  // },
  // containerImage2: {
  //   flexDirection: 'row',
  //   marginHorizontal: 30,
  //   justifyContent: 'space-between',
  // },
  // wrapperImg: {
  //   width: 170,
  // },
  // container: {marginBottom: 15},
  // imageLarge: {width: '100%', height: windowHeight * 0.241},
  // imageSmall: {width: '100%', height: windowHeight * 0.148},
  // label: {
  //   fontSize: 16,
  //   fontFamily: 'Gilroy-SemiBold',
  //   color: '#525464',
  //   textAlign: 'center',
  //   marginTop: 10,
  //   marginBottom: 6,
  // },
  // price: {
  //   fontSize: 14,
  //   fontFamily: 'Gilroy-Medium',
  //   color: '#B0B0C3',
  //   textAlign: 'center',
  // },
});
