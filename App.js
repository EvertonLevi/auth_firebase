
import React, { Component } from 'react';
import {
 Alert,
 Platform,
 StyleSheet,
 Text,
 TextInput,
 View,
 TouchableOpacity
} from 'react-native';
import {
 Contatiner,
 Item,
 Form,
 Input,
 Button,
 Label,
 Container
} from 'native-base'
import * as firebase from 'firebase'
// import console = require('console');
import fidelidade from './src/fidelidade'
import consultarAgenda from './src/consultarAgenda'
import { createAppContainer, createStackNavigator } from 'react-navigation'

//rotas navigation
const Routes = createAppContainer(
 createStackNavigator({
  consultarAgenda: consultarAgenda,
  fidelidade: fidelidade
 })
)

// Your web app's Firebase configuration
var firebaseConfig = {
 apiKey: "AIzaSyB5Bs-V9DlLxFYFTJ9USE7J2JV4MTf7nKU",
 authDomain: "authentication-c1a3c.firebaseapp.com",
 databaseURL: "https://authentication-c1a3c.firebaseio.com",
 projectId: "authentication-c1a3c",
 storageBucket: "",
 messagingSenderId: "281951285600",
 appId: "1:281951285600:web:730c7b7a468129e0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


export default class App extends Component {

 constructor(props) {
  super(props);
  this.state = {
   email: "",
   password: ""
  };
 }
 SignUp = (email, password) => {
  try {
   firebase.auth().createUserWithEmailAndPassword(email,
    password);
  } catch (error) {
   console.log(error.toString(error));
  }
 }
 SignIn = (email, password) => {
  try {
   firebase.auth().signInWithEmailAndPassword(email, password);
   firebase.auth().onAuthStateChanged(user => {
    alert(user.email);
    //aqui ele vai pra outra tela se logado
   })
  } catch (error) {
   console.log(error.toString(error));
  }
 }

 render() {
  return (
   <Container style={styles.container}>
    <Form>
     <Item floatingLabel>
      <Label>Email</Label>
      <Input autoCapitalize="none"
       autoCorrect={false}
       onChangeText={email => this.setState({ email })}></Input>
     </Item>
     <Item floatingLabel>
      <Label>Password</Label>
      <Input secureTextEntry={true}
       autoCapitalize="none"
       autoCorrect={false}
       onChangeText={password => this.setState({ password })}></Input>
     </Item>
     <Button full
      rounded
      onPress={() => this.SignIn(this.state.email, this.state.password)}>
      <Text>SignIn</Text>
     </Button>
     <Button full
      rounded
      success
      style={{ marginTop: 20 }}
      onPress={() => this.SignUp(this.state.email, this.state.password)}
     >
      <Text>SignUp</Text>
     </Button>
    </Form>
   </Container>

  )
 }
}

const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: 'center',
  backgroundColor: '#fff',
  padding: 20,
  // alignItems: 'center',
 },
 // input: {
 // 	height: 45,
 // 	backgroundColor: '#FFF',
 // 	alignSelf: 'stretch',
 // 	borderWidth: 1,
 // 	borderColor: '#EEE',
 // 	paddingHorizontal: 20,
 // 	marginBottom: 10,
 // },
 // button: {
 // 	height: 45,
 // 	backgroundColor: '#069',
 // 	alignSelf: 'stretch',
 // 	paddingHorizontal: 20,
 // 	justifyContent: 'center',
 // 	alignItems: 'center',
 // },
 // buttonText: {
 // 	color: '#FFF',
 // 	fontWeight: 'bold',
 // },
});
