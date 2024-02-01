import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert, Image, TouchableOpacity,ScrollView} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Encabezado />
      <Encabezado2 />
      <Encabezado3 />
      <Cuerpo />
      <Pie2 />
      <Pie />
      <Pie3 />
    </View>
  );
}

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [keepMeSignedIn, setKeepMeSignedIn] = useState(false);
  const handleLogin = () => {
    if (username && password) {
      Alert.alert('Logeo exitoso');
    } else {
      Alert.alert('Por favor, introduce todos los campos');
    }
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleKeepMeSignedIn = () => {
    setKeepMeSignedIn(!keepMeSignedIn);
  };


  return (
    <ScrollView contentContainerStyle={styles.loginContainer}>
      <TextInput
        placeholder='Email (phone for mobile accounts)'
        autoCapitalize='none'
        value={username}
        style={styles.textInput}
        onChangeText={setUsername}
      />
      <TextInput
        placeholder='Amazon password'
        secureTextEntry
        value={password}
        style={styles.textInput}
        onChangeText={setPassword}
      />
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={toggleShowPassword}>
          <Text style={styles.checkbox}>{showPassword ? '☑' : '☐'}</Text>
        </TouchableOpacity>
        <Text>Show Password</Text>
      </View>
      <View style={styles.checkboxContainer}>
        <TouchableOpacity onPress={toggleKeepMeSignedIn}>
          <Text style={styles.checkbox}>{keepMeSignedIn ? '☑' : '☐'}</Text>
        </TouchableOpacity>
        <Text>Keep me signed in</Text>
      </View>
      <View style={styles.botonContenedor}>
        <Button title='Sign in' onPress={handleLogin} color="#ffde72" />
      </View>
      </ScrollView>
  );
};


export const Encabezado = () => {
  return (
    <View style={styles.encabezado}>
      <Text style={styles.texto}></Text>
      <Image
        source={require('./assets/amazon.png')}
        style={styles.logo}
      />
      <Text style={styles.texto}></Text>
    </View>
  );
};
export const Encabezado2 = () => {
  return (
    <View style={styles.encabezado}>
      <Text>Sing in to Zappos.com using your Amazon account</Text>
    </View>
  );
};
export function Cuerpo() {
  return (
    <View style={styles.cuerpo}>
      <Login />
    </View>
  )
}

export const Pie = () => {
  return (
    <View style={styles.pie}>
      <View style={styles.botonContenedor}>
        <Button title='Create a new Amazon account' color="#d0d0d0"/>
      </View>
    </View>
  )
};

export const Pie2 = () => {
  return (
    <View style={styles.pie}>
      <Text>_____________________New to amazon?_____________________</Text>
    </View>
  )
}

export const Pie3 = () => {
  return (
    <View style={styles.pie1}>
      <Text style={styles.enlaceTexto}>Conditions of Use & Privacy Notice</Text>
      <Text>© 1996-2024, Amazon.com, Inc. or its affiliates</Text>
    </View>
  )
}

export const Encabezado3 = () => {
  return (
    <View style={styles.pie}>
      <Text style={styles.texto}>Sing in</Text>
      <Text></Text>
      <Text style={styles.enlaceTexto}>Forgot password?</Text>
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 10,
    backgroundColor: '#fff6',
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'stretch'
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    marginRight: 8,
    fontSize: 18,
  },
  encabezado: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fff6',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  enlaceTexto: {
    color: '#1e90ff', 
    marginTop: 10, 
  },
  logoContainer: {
    backgroundColor: '#fff6',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 100, 
    height: 100, 
    resizeMode: 'contain', 
  },
  contenido: {
    flex: 8,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botonContenedor: {
    width: '100%', 
  },
  pie: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff6',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  pie1: {
    flex: 1,
    backgroundColor: '#fff6',
    justifyContent: 'center',
    backgroundColor: '#F5F1EF',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  texto: {
    color: "#000000",
    fontSize: 30
  },
  loginContainer: {
    backgroundColor: '#fff6',
    flexGrow: 1,
    justifyContent: 'center', 
    padding: 20, 
  },
  textInput: {
    height: 50, 
    fontSize: 18, 
    borderWidth: 1, 
    borderColor: 'grey', 
    paddingLeft: 10, 
    marginVertical: 5,
    width: '100%', 
  },
});
