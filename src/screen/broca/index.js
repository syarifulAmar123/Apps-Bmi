import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Modal,
  StatusBar,
} from 'react-native';

const Broca = () => {
  const [cm, setCm] = useState(0);
  const [visible, setVisible] = useState(false);
  const [Hasil, setHasil] = useState('');
  const BrocaCowo = () => {
    let awalBroca = cm - 100;
    setHasil(awalBroca);
    setVisible(true);
  };
  const BrocaCewe = () => {
    let awalBroca = cm - 104;
    setHasil(awalBroca);
    setVisible(true);
  };
  return (
    <View style={{flex: 1, backgroundColor: '#80cbc4'}}>
      <Text
        style={{
          textAlign: 'center',
          marginTop: 50,
          fontSize: 30,
          color: '#e74c3c',
        }}>
        Broca Calculator
      </Text>
      <View style={[stylis.InputCm, {marginTop: 200}]}>
        <TextInput
          placeholder="Masukan Tinggi Anda (cm)*"
          placeholderTextColor={'#34495e'}
          value={cm}
          onChangeText={text => setCm(text)}
          style={{color: 'black', fontSize: 14, fontWeight: '400'}}
        />
      </View>
      {/* <View style={[stylis.InputCm, {marginTop: 10}]}>
        <TextInput
          placeholder="Masukan Tinggi Anda (cm)*"
          placeholderTextColor={'#34495e'}
          value={kg}
          onChangeText={text => setKg(text)}
          style={{color: 'black', fontSize: 14, fontWeight: '400'}}
        />
      </View> */}
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
