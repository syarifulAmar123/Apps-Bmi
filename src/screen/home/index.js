import React from 'react';
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {LogoBmi, LogoBroca, Woman} from '../../assets';

const Home = ({navigation}) => {
  const Pindahbmi = () => {
    navigation.navigate('Bmi');
  };
  const PindahBroca = () => {
    navigation.navigate('Broca');
  };
  return (
    <View style={{flex: 1, backgroundColor: '#80cbc4'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#80cbc4'} />
      <Text style={styles.Title}>Silahkan Pilih Cara penghitungan</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginLeft: 10,
          marginRight: 10,
          marginTop: 70,
        }}>
        <TouchableOpacity
          style={{
            width: 180,
            height: 250,
            backgroundColor: '#00cec9',
            alignItems: 'center',
            borderRadius: 10,
            elevation: 1,
            // marginLeft: 30,
          }}
          activeOpacity={0.75}>
          <Image
            source={LogoBroca}
            style={{
              width: 70,
              height: 70,
              marginTop: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <View style={{padding: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 18,
                fontFamily: 'Roboto-Medium',
                marginTop: 10,
                marginLeft: 50,
                alignItems: 'flex-start',
              }}>
              BROCA
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 8,
                  fontSize: 11,
                  textAlign: 'center',
                }}>
                Rumus Broca adalah metode yang digunakan untuk menghitung berat
                badan ideal berdasarkan tinggi badan. Rumus ini berbeda untuk
                pria dan wanita,
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 180,
            height: 250,
            backgroundColor: '#45aaf2',
            alignItems: 'center',
            borderRadius: 10,
            elevation: 1,
            // marginLeft: 30,
          }}
          activeOpacity={0.75}
          onPress={() => Pindahbmi()}>
          <Image
            source={LogoBmi}
            style={{
              width: 70,
              height: 70,
              marginTop: 10,
              borderTopLeftRadius: 10,
              borderTopRightRadius: 10,
            }}
          />
          <View style={{padding: 10}}>
            <Text
              style={{
                color: 'black',
                fontSize: 21,
                fontFamily: 'Roboto-Medium',
                marginTop: -1,
                marginLeft: 55,
                alignItems: 'flex-start',
              }}>
              BMI
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 10,
              }}>
              <Text
                style={{
                  color: 'black',
                  marginTop: -5,
                  marginLeft: 8,
                  fontSize: 10,
                  textAlign: 'center',
                }}>
                BMI adalah metode yang digunakan untuk menghitung indeks massa
                tubuh, yang merupakan ukuran yang digunakan untuk menentukan
                apakah berat badan seseorang ideal atau tidak , tidak ada
                perbedaan antara laki-laki dan perempuan
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    color: '#2c2c54',
    marginLeft: 50,
    marginTop: 50,
    fontSize: 21,
    fontWeight: '600',
  },
});

export default Home;
