import React, {useEffect} from 'react';
import {Image, StatusBar, Text, View, StyleSheet} from 'react-native';
import Bmi from '../bmi';
import {Ilogo} from '../../assets';

const SpalshScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('Home');
    }, 3000);
  }, []);
  return (
    <View style={style.container}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#80cbc4'} />
      <Text style={style.textUtama}>Healty Calculator</Text>
      <Text style={style.TextContainer}>
        Hitung BB Anda untuk hidup yang lebih sehat
      </Text>
      <Text style={style.Footer}>Ayooo Cek Berkala Idealmu</Text>
      <Image
        source={require('../../assets/imb.png')}
        style={style.imageContainer}
      />
    </View>
  );
};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#80cbc4',
  },
  textUtama: {
    fontFamily: 'RubikDoodleShadow-Regular',
    color: 'black',
    fontWeight: '650',
    fontSize: 28,
    marginTop: -140,
  },
  TextContainer: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginTop: 10,
  },
  imageContainer: {
    width: 120,
    height: 120,
    bottom: 0,
    position: 'absolute',
  },
  Footer: {
    marginTop: 100,
    color: 'black',
    fontSize: 16,
    fontWeight: '300',
  },
});

export default SpalshScreen;
