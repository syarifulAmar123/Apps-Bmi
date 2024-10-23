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
  const [gender, setGender] = useState(false);
  const [pria, setPria] = useState(false);
  const [perempuan, setperempuan] = useState(false);
  const [cm, setCm] = useState(0);
  const [kg, setKg] = useState(0);
  const [kategori, setKategori] = useState('');
  const [visible, setVisible] = useState(false);
  const [hasil, setHasil] = useState('');

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
        Alert.alert('Makan Yang Banyak');
      } else if (hasilDesimal > 18.5 && hasilDesimal < 24.9) {
        setKategori(' Normal weight');
        Alert.alert('Congratsss 🤖🤖');
      } else if (hasilDesimal > 25 && hasilDesimal < 29.9) {
        setKategori(' Overweight');
        Alert.alert('Jaga Pola Makan');
      } else {
        setKategori(' obesity');
        Alert.alert('Kurangi makan , Perbanyak Olahraga');
      }
      setVisible(true);
      setHasil(hasilDesimal);
    } else {
      Alert.alert('Data yang Anda Masukan tidak Valid');
    }
  };

  const ulang = () => {
    setCm('');
    setKg('');
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
        <TouchableOpacity
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
        </TouchableOpacity>
        <TouchableOpacity
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
        </TouchableOpacity>
      </View>
      <View style={stylis.InputCm}>
        <TextInput
          placeholder="Masukan Tinggi Anda (cm)*"
          placeholderTextColor={'#34495e'}
          value={cm}
          onChangeText={text => setCm(text)}
          style={{color: 'black', fontSize: 14, fontWeight: '400'}}
        />
      </View>
      <View style={[stylis.InputCm, {marginTop: -5}]}>
        <TextInput
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
          <Text style={{color: 'white', fontSize: 21, textAlign: 'center'}}>
            Berat badan anda adalah {hasil} kg maka anda termasuk
            {kategori}
          </Text>
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
            onPress={() => setVisible(false)}>
            <Text style={{color: 'white'}}>Close</Text>
          </TouchableOpacity>
        </View>
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
