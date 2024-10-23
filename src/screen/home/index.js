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
          marginLeft: 15,
          marginRight: 15,
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
          activeOpacity={0.75}
          onPress={() => PindahBroca()}>
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
                marginLeft: 60,
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
      <View style={{margin: 15, padding: 5}}>
        <Text style={{color: 'black', marginTop: 10, textAlign: 'center'}}>
          Kedua alat diatas ini memiliki peran masing-masing dalam membantu
          individu memahami dan mengelola berat badan mereka. Sementara BMI
          memberikan gambaran lebih menyeluruh tentang status berat badan
          relatif terhadap kesehatan, kalkulator Broca menawarkan panduan yang
          lebih sederhana untuk menetapkan target berat badan. Namun, penting
          untuk diingat bahwa kedua metode ini tidak sempurna dan sebaiknya
          digunakan bersama dengan penilaian kesehatan yang lebih komprehensif,
          termasuk pemeriksaan fisik dan penilaian komposisi tubuh, untuk
          mendapatkan gambaran yang lebih akurat tentang kesehatan seseorang.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  Title: {
    color: '#2c2c54',
    textAlign: 'center',
    marginTop: 50,
    fontSize: 22,
    fontWeight: 'bold',
    fontFamily: 'Roboto-Italic',
  },
});

export default Home;
