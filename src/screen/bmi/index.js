import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  StatusBar,
  Image,
  TouchableOpacity,
  TextInput,
  Alert,
  Modal,
} from 'react-native';
import {Back, Balik, Man, Woman} from '../../assets';

export default function Bmi({navigation}) {
  const [cm, setCm] = useState(0);
  const [kg, setKg] = useState(0);
  const [kategori, setKategori] = useState('');
  const [visible, setVisible] = useState(false);
  const [hasil, setHasil] = useState('');
  const [Pesan, setPesan] = useState('');
  const [alert, setAlert] = useState(false);

  const Laki = () => {
    setGender(false);
  };

  const Cewe = () => {
    setGender(true);
  };

  const HitungUtama = () => {
    if (cm > 0 && kg > 0) {
      const cmKeM = cm / 100;
      const hasil = kg / cmKeM ** 2;
      let hasilDesimal = hasil.toFixed(1);
      if (hasilDesimal < 18.5) {
        setKategori(' Underweight');
        setPesan('Makan Yang Banyak');
      } else if (hasilDesimal < 24.9) {
        setKategori(' Normal weight');
        setPesan('Congratsss 🤖🤖');
      } else if (hasilDesimal >= 25 || hasilDesimal <= 29.9) {
        setKategori(' Overweight');
        setPesan('Jaga Pola Makan');
      } else if (hasilDesimal > 29.9) {
        setKategori(' Obesity');
        setPesan('Kurangi makan');
      }
      setVisible(true);
      setHasil(hasilDesimal);
      // setKategori(kategori);
    } else {
      Alert.alert('Data yang Anda Masukan tidak Valid');
    }
  };

  const ulang = () => {
    setCm('');
    setKg('');
  };

  const tutupModal = () => {
    setVisible(false);
    setTimeout(() => {
      setAlert(true);
    }, 1000);
  };

  return (
    <View style={{flex: 1, backgroundColor: '#a5d2cb'}}>
      <StatusBar barStyle={'dark-content'} backgroundColor={'#a5d2cb'} />
      <View style={stylis.containerheader}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={Balik}
            style={{width: 30, height: 30, marginTop: -1}}
          />
        </TouchableOpacity>
        <Text style={stylis.TextHeader}>BMI Calculator</Text>
        <TouchableOpacity activeOpacity={0.4} onPress={() => ulang()}>
          <Image source={Back} style={stylis.HeaderImage} />
        </TouchableOpacity>
      </View>
      <View style={stylis.containerContent}>
        <View
          style={stylis.BackgroundContent}
          activeOpacity={0.4}
          onPress={() => Laki()}
          ondblclick={() => {
            setPria(true);
          }}
          onBlur={() => {
            setPria(false);
          }}>
          <Image
            source={Man}
            style={[stylis.content, {marginHorizontal: 50}]}
          />
        </View>
        <View
          style={stylis.BackgroundContent}
          activeOpacity={0.4}
          onPress={() => Cewe()}
          ondblclick={() => {
            setperempuan(true);
          }}
          onBlur={() => {
            setperempuan(false);
          }}>
          <Image
            source={Woman}
            style={[stylis.content, {marginHorizontal: 50}]}
          />
        </View>
      </View>
      <View style={stylis.InputCm}>
        <TextInput
          keyboardType="numeric"
          placeholder="Masukan Tinggi Anda (cm)*"
          placeholderTextColor={'#34495e'}
          value={cm}
          onChangeText={text => setCm(text)}
          style={{color: 'black', fontSize: 14, fontWeight: '400'}}
        />
      </View>
      <View style={[stylis.InputCm, {marginTop: -5}]}>
        <TextInput
          keyboardType="numeric"
          placeholder="Masukan BeratBadan Anda (kg)*"
          placeholderTextColor={'#34495e'}
          value={kg}
          onChangeText={text => setKg(text)}
          style={{color: 'black', fontSize: 14, fontWeight: '400'}}
        />
      </View>
      <TouchableOpacity style={stylis.Buttons} onPress={() => HitungUtama()}>
        <Text style={stylis.TextButtons}>Hitung</Text>
      </TouchableOpacity>
      <Modal animationType="fade" visible={visible}>
        <View
          style={{
            flex: 1,
            backgroundColor: '#263238',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <StatusBar barStyle={'light-content'} backgroundColor={'#263238'} />
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 20,
            }}>
            <Text style={{color: 'white', fontSize: 21, textAlign: 'center'}}>
              Berat badan anda adalah {hasil} kg maka anda termasuk
              {kategori}
            </Text>
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: '#268981',
              marginTop: 40,
              width: 100,
              height: 30,
              borderRadius: 5,
              borderWidth: 1 / 2,
              //   position: 'absolute',
              borderColor: '#000000',
              justifyContent: 'center',
              alignItems: 'center',
            }}
            onPress={() => tutupModal()}>
            <Text style={{color: 'white'}}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
      <Modal transparent={true} visible={alert} animationType="slide">
        <TouchableOpacity style={{flex: 1}} onPress={() => setAlert(false)}>
          <View
            style={{
              alignSelf: 'center',
              backgroundColor: 'rgba(250, 177, 160, 0.9)',
              width: 270,
              height: 150,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginTop: 120,
            }}>
            <Text
              style={{
                position: 'absolute',
                top: 20,
                left: 30,
                color: 'black',
                fontSize: 23,
                fontWeight: '500',
              }}>
              Pesan :
            </Text>
            <Text style={{color: 'white', fontSize: 19, fontWeight: 'bold'}}>
              {Pesan}
            </Text>
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
}

const stylis = StyleSheet.create({
  containerheader: {
    flexDirection: 'row',
    marginTop: 20,
    marginLeft: 20,
    marginRight: 20,
    justifyContent: 'space-between',
  },
  TextHeader: {
    color: 'black',
    fontSize: 18,
    fontWeight: '500',
    marginLeft: -150,
  },
  HeaderImage: {
    width: 35,
    height: 35,
    marginTop: -3,
    // marginLeft: -30,
  },
  containerContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 120,
  },
  BackgroundContent: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'yellow',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 50,
  },
  content: {
    width: 50,
    height: 50,
  },
  InputCm: {
    margin: 50,
    marginTop: 100,
    borderBottomWidth: 1 / 2,
    borderBottomColor: 'black',
  },
  Buttons: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#35b1c6',
    borderRadius: 10,
    borderWidth: 1 / 2,
    borderColor: 'black',
    height: 40,
    marginHorizontal: 80,
    marginTop: 40,
  },
  TextButtons: {
    color: 'white',
  },
});
