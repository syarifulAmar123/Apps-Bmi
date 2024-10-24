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
          flexDirection: 'column',
          justifyContent: 'space-between',
          marginLeft: 40,
          marginRight: 15,
          marginTop: 50,
        }}>
        <View
          style={{
            width: 330,
            height: 330,
            backgroundColor: '#00cec9',
            alignItems: 'center',
            borderRadius: 10,
            elevation: 1,
            // marginLeft: 30,
          }}>
          <Image
            source={LogoBroca}
            style={{
              width: 70,
              height: 70,
              marginTop: 30,
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
                marginTop: 5,
                marginLeft: 123,
                alignItems: 'flex-start',
              }}>
              BROCA
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 15,
              }}>
              <Text
                style={{
                  color: 'black',
                  marginLeft: 8,
                  fontSize: 16,
                  textAlign: 'center',
                }}>
                Rumus Broca adalah metode yang digunakan untuk menghitung berat
                badan ideal berdasarkan tinggi badan. Rumus ini berbeda untuk
                pria dan wanita,
              </Text>
            </View>
            <TouchableOpacity
              style={{
                width: 100,
                height: 35,
                backgroundColor: '#44aaf2',
                justifyContent: 'center',
                borderRadius: 10,
                marginTop: 50,
                marginLeft: 200,
              }}
              activeOpacity={0.75}
              onPress={() => PindahBroca()}>
              <Text style={{textAlign: 'center', color: 'white'}}>
                GoTo Screen
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            width: 330,
            height: 330,
            backgroundColor: '#45aaf2',
            alignItems: 'center',
            borderRadius: 10,
            elevation: 1,
            marginTop: 30,
            // marginLeft: 30,
          }}>
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
                marginLeft: 130,
                alignItems: 'flex-start',
              }}>
              BMI
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginTop: 20,
              }}>
              <Text
                style={{
                  color: 'black',
                  marginTop: -5,
                  marginLeft: 8,
                  fontSize: 14,
                  textAlign: 'center',
                }}>
                BMI adalah metode yang digunakan untuk menghitung indeks massa
                tubuh, yang merupakan ukuran yang digunakan untuk menentukan
                apakah berat badan seseorang ideal atau tidak , tidak ada
                perbedaan antara laki-laki dan perempuan
              </Text>
            </View>
          </View>
          <TouchableOpacity
            style={{
              width: 100,
              height: 35,
              backgroundColor: '#00cec9',
              justifyContent: 'center',
              borderRadius: 10,
              marginTop: 40,
              marginLeft: 200,
            }}
            activeOpacity={0.75}
            onPress={() => Pindahbmi()}>
            <Text style={{textAlign: 'center', color: 'white'}}>
              GoTo Screen
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    color: '#2c2c54',
    textAlign: 'center',
    marginTop: 20,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Italic',
  },
});

export default Home;
