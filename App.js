/*Crie um conversor de temperatura que permita aos usuários converter entre Celsius, Fahrenheit e Kelvin.*/


import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image } from 'react-native';
import { TouchableOpacity } from 'react-native';

export default function App() {

  const [celsius, setCelsius]= useState('');
  const [fahrenheit, setFahrenheit]= useState('');
  const [kelvin, setKelvin]=useState('');
  
  const insertTemp = () => {
    if (celsius !== '') {
      const celsiusValue = parseFloat(celsius);

      const fahrenheitValue = (celsiusValue * 9/5)+32;
      const kelvinValue= celsiusValue + 273.15;

      setFahrenheit(fahrenheitValue.toFixed(2).toString());
      setKelvin(kelvinValue.toFixed(2).toString());
    }
  };

  return (
    <View style={styles.container}>
    <View style={styles.tituloContainer}>
      <Image
        source={require('./imagens/TituloConversor.png')}
        style={styles.titulo}
      />
    </View>

    <View>   
     <TextInput style= {styles.inputInsert}
      placeholder='Celsius'
      value={celsius}
      onChangeText={(text) => setCelsius(text)}
      />

      <TouchableOpacity 
        style={styles.botaoContainer}
        onPress={insertTemp}>
          <Image 
          source={require('./imagens/Termometro.png')}
          style={styles.botaoTermometro} />
        </TouchableOpacity>
      </View>

        <View>   
            <TextInput 
            style= {styles.inputFahrenheit }
            placeholder='Fahrenheit'
            value={fahrenheit}
            editable={false}/>
        </View> 

        <View>   
            <TextInput 
            style= {styles.inputKelvin }
            placeholder='Kelvin'
            value={kelvin}
            editable={false}/>
        </View> 

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2E4053',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tituloContainer:{
    flex: 1,
    justifyContent: 'top',
    marginTop: 70
  },
  titulo:{
    width: 300,
    height:80,
    resizeMode: 'contain'
  },
  inputInsert:{
    width: 80,
    height: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    fontWeight: 'bold',
    marginTop: -375,
  },
  botaoContainer:{
    width:20,
    height:50,
    marginLeft: 30
  },
  botaoTermometro:{
    width:20,
    height:50,
    marginTop:10,
    justifyContent: 'center'
    
  },
  inputFahrenheit :{
    width: 80,
    height: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    fontWeight: 'bold',
    marginTop: -280,
  },
  
  inputKelvin :{
    width: 80,
    height: 30,
    textAlign: 'center',
    borderWidth: 1,
    borderColor: 'gray',
    fontWeight: 'bold',
    marginTop: -240,
  }
});
