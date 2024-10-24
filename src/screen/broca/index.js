import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  StatusBar,
  Alert,
  Image,
} from 'react-native';
import {Balik} from '../../assets';

const Broca = ({navigation}) => {
  const [cm, setCm] = useState(0);
  const [visible, setVisible] = useState(false);
  const [Hasil, setHasil] = useState('');
  const BrocaCowo = () => {
    if (cm == 0) {
      Alert.alert('Isikan terlebih Dahulu');
    } else {
      let awalBroca = cm - 100;
      let AkhirBroca = awalBroca * (10 / 100);
      let hasil = awalBroca - AkhirBroca;
      setHasil(hasil.toFixed(1));
      setVisible(true);
      setTimeout(() => {
        setCm(0);
      }, 500);
    }
  };
  const BrocaCewe = () => {
    if (cm == 0) {
      Alert.alert('Isikan terlebih Dahulu');
    } else {
      let awalBroca = cm - 104;
      let AkhirBroca = awalBroca * (10 / 100);
      let hasil = awalBroca - AkhirBroca;
      setHasil(hasil.toFixed(1));
      setVisible(true);
      setTimeout(() => {
        setCm(0);
      }, 500);
    }
  };
  return (
    <View style={{flex: 1, backgroundColor: '#80cbc4'}}>
      <View style={{flexDirection: 'row', alignItems: 'center', marginTop: 20}}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={Balik}
            style={{width: 35, height: 35, marginLeft: 10}}
          />
        </TouchableOpacity>
        <Text
          style={{
            textAlign: 'center',
            marginLeft: 40,
            fontSize: 35,
            color: '#2c3e50',
            fontWeight: '600',
          }}>
          Broca Calculator
        </Text>
      </View>
      <View style={[stylis.InputCm, {marginTop: 200}]}>
        <TextInput
          placeholder="Masukan Tinggi Anda (cm)*"
          placeholderTextColor={'#34495e'}
          value={cm}
          onChangeText={text => setCm(text)}
          style={{color: 'black', fontSize: 14, fontWeight: '400'}}
        />
      </View>
      <TouchableOpacity style={stylis.Buttons} onPress={() => BrocaCowo()}>
        <Text style={stylis.TextButtons}>Hitung Cowo</Text>
      </TouchableOpacity>
      <TouchableOpacity style={stylis.Buttons} onPress={() => BrocaCewe()}>
        <Text style={stylis.TextButtons}>Hitung Cewe</Text>
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
            Berat badan ideal anda adalah {Hasil}
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
};

export default Broca;

const stylis = StyleSheet.create({
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
    textAlign: 'center',
  },
});
