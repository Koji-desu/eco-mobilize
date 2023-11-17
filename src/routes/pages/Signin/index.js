import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';

import { useState } from 'react';

import * as Animatable from 'react-native-animatable'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const Login = ({setUser}) =>{
    const [email, setEmail] = useState("");
    const [password, setpassword] = useState("");

    const handleLogin = ()=>{
        createUserWithEmailAndPassword(auth, email, password)
        .then(userCredential =>{
            console.log('user', userCredential);
            const user = userCredential.user
            setUser(user)
    })
        .catch(error =>{
        if(error.code === 'auth/email-already-in-use'){
      console.log("Email já existe")
        }
        if(error.code === 'auth/invalid-email'){
            console.log("Email inválido")}
  })
    }

}


function signUp(){
  auth().createUserWithEmailAndPassword(auth, email, password)
  .then(userCredential =>{
    console.log('user', userCredential);
  })
  .catch(error =>{
    if(error.code === 'auth/email-already-in-use'){
      console.log("Email já existe")
    }
    if(error.code === 'auth/invalid-email'){
      console.log("Email inválido")}
  })
}

function signIn() {
  auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {
      console.log('user is authenticated');
    })
    .catch(error => {
      console.error(error);
    });
}

export default function App() {
  return (
    <View style={styles.container}>
        <Animatable.View animation="fadeInLeft" delay={100}>
      <Text style={styles.titulo}>EcoMobilize</Text>
      <Image 
       style={styles.logo}
       source={require('../../../assets/carrologo.png')}/>
        </Animatable.View>
      <Animatable.View animation="fadeInRight" delay={100}>
        <Text style={styles.textoPadrao}>Email:</Text>
        <TextInput
          style={styles.inputPadrao}
        />

        <Text style={styles.textoPadrao}>Senha:</Text>
        <TextInput
          style={styles.inputPadrao}
          secureTextEntry
        />

                <TouchableOpacity 
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Entrar</Text>
                </TouchableOpacity>
      <Text style={styles.linkCadastro}>Não possui cadastro?</Text>
          

      </Animatable.View>

    </View>

    
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor: '#4B7766',
    borderRadius: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo:{
    marginBottom: 60,
    width: 200,
    height: 200
  },
  titulo:{
    color: '#FFFFFF',
    fontSize: '27px'
  },
  textoPadrao:{
    color: '#FFFFFF',
    fontSize: '15px'
  },
  inputPadrao:{
    backgroundColor: '#FFFFFF',
    marginBottom: 10,
    borderRadius: 50
  },
  buttonLogin:{
    backgroundColor: '#218760',
    width: 158,
    height: 57,
    color: "#FFF"
    
  },
  linkCadastro:{
    marginTop: 5,   
    color: '#FFFFFF',
    fontSize: '10px',
    textAlign: 'center'
  },
  button:{
    backgroundColor: '#218760',
    borderRadius: 50,
    paddingVertical: 8,
    width: '60%',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center'
},
buttonText:{
    fontSize: 18,
    color: '#FFF',
    fontWeight: 'bold'
}
})