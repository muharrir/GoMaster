import React from 'react';
import {
  StyleSheet,
  TextInput,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import {ILSignup} from '../../assets';
import {Button, Header, Link} from '../../components';
import IconSocial from '../../components/atoms/IconSocial';

export default function SignUp({navigation}) {
  return (
    <View style={styles.page}>
      <Header label="Sign Up" onPress={() => navigation.navigate('SignIn')} />
      <View style={styles.content}>
        <View style={styles.img}>
          <ILSignup />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Enter Email" style={styles.inputText} />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Enter Password" style={styles.inputText} />
        </View>
        <View style={styles.input}>
          <TextInput placeholder="Confirm Password" style={styles.inputText} />
        </View>
        <Button
          label="Sign Up"
          onPress={() => navigation.replace('Categories')}
        />
        <Text style={styles.text}>or</Text>
        <View style={styles.icon}>
          <IconSocial />
          <IconSocial icon="twitter" />
          <IconSocial icon="linked" />
        </View>
        <View style={styles.signup}>
          <Text style={styles.text1}>Don't have an account?</Text>
          <Link
            active
            label="Sign In"
            onPress={() => navigation.navigate('SignIn')}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {flex: 1, backgroundColor: 'white'},
  content: {marginHorizontal: 30},
  img: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 58,
    marginBottom: 48,
  },
  input: {
    backgroundColor: '#F7F7F7',
    paddingVertical: 21,
    paddingHorizontal: 22,
    marginBottom: 16,
  },
  inputText: {fontSize: 16, fontFamily: 'Gilroy-Medium', color: '#B0B0C3'},
  text: {
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    color: '#838391',
    textAlign: 'center',
    marginVertical: 16,
  },
  icon: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 50,
  },
  signup: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  text1: {
    fontSize: 16,
    fontFamily: 'Gilroy-SemiBold',
    color: '#838391',
    textAlign: 'center',
    marginRight: 6,
  },
  direct: {marginLeft: 6, textDecorationLine: 'underline'},
});
