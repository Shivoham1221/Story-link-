import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  Button,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
  Platform,
  TextInput,
  ScrollView,
  ImageBackground

} from 'react-native';

const SigninScreen = ({ navigation }) => {

  const [user, setUser] = useState([]);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
  });
  const textInputChange = (val) => {
    if (val.length >= 10) {
      setData({
        ...data,
        email: val,
        check_textInputChange: true
      });
    } else {
      setData({
        ...data,
        email: val,
        check_textInputChange: false
      });
    }
  }

  const handlePassword = (val) => {
    setData({
      ...data,
      password: val
    });
  }

  const updateSecureText = () => {
    setData({
      secureTextEntry: !data.secureTextEntry
    });
  }

 



  return (
    <View style={[styles.container]}>
      
      <View>
        
      <ImageBackground source={require('../assets/bgback.png')} style={{width: 200, height: 180,resizeMode:'contain',}}>
      <Text style={styles.gobgarrow}>⬅</Text>
    <Text style={styles.gobg}>Back</Text>
    <Text style={styles.gobacktxt}>Login</Text>
  </ImageBackground>
      </View>
      <View style={styles.header}>
       

      </View>
      <View style={styles.footer}>
      <Text style={styles.text_header}>Login</Text>
      <Text style={{textAlign:'center',color:'white',fontSize:20}}>LogIn To Continue</Text>


        <View style={styles.action}>
          
          
          <TextInput
            placeholder="xyz@xyz.com"
            placeholderTextColor="white" 
            style={styles.textInput}
            autoCapitalize="none"
            keyboardType='email-address'
            value={email}
            onChangeText={setEmail}
            style={{ alignItems: 'center', fontSize: 20, textAlign: 'auto',color:'white' }}

          />
        </View>

        <View style={styles.action}>
          <TextInput
            placeholder="*****"
            placeholderTextColor="white" 
            secureTextEntry={data.secureTextEntry ? true : false}
            style={styles.textInput}
            autoCapitalize="none"
            value={password}
            onChangeText={setPassword}
            style={{ alignItems: 'center', fontSize: 20, textAlign: 'auto', }}
          />
            <TouchableOpacity
                      onPress={updateSecureText}
                      style={{width:30,height:30,backgroundColor:'#3F60A0',borderRadius:20,alignItems:'center',justifyContent:'center'}}
                  >
                      {data.secureTextEntry ? 
                      <Text>✓</Text>
                      :
                      <Text>✕</Text>
                      } 
                  </TouchableOpacity>

        </View>


        <TouchableOpacity
          onPress={() => userSignin()}
          style={[styles.signIn]}
        >

          <Text style={[styles.textSign, {
            color: 'white',
            fontSize:30
          }]}> Log in </Text>

        </TouchableOpacity>
        <View style={{ marginTop: 10, alignItems: 'center' }}>
          
          <TouchableOpacity onPress={() => navigation.push('Signup')}><Text style={styles.text_footer}>Forget Password</Text></TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.push('Signup')}><Text style={styles.text_footer}>Don't Have Account? Register Now</Text></TouchableOpacity>
       
        </View>
        <View style={{ marginTop: 10, alignItems: 'center' }}>
         </View>
      </View>

    </View>
  );
};

export default SigninScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;


const styles = StyleSheet.create({


  container: {
    flex: 1,
   
  },
  header: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingBottom: 10,
    alignItems: 'center'
  },
  footer: {
    flex: 20,
    backgroundColor: '#22263F',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 30
  },
  text_header: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 60,
    textAlign:'center'


  },
  text_footer: {
    color: 'white',
    fontSize: 15
  },
  title: {
    color: '#05375a',
    fontSize: 14,
    fontWeight: 'bold'
  },
  headerTitle: {
    paddingTop: 5,
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold'
  },
  action: {
    flexDirection: 'row',
    marginTop: 50,
    borderBottomWidth: 1,
    borderBottomColor: '#4B4D5C',
    paddingBottom: 5,
    backgroundColor: '#4B4D5C',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#4B4D5C',
    shadowRadius: 50,
    shadowOpacity: 1,


  },
  textInput: {
    flex: 1,
    marginTop: Platform.OS === 'ios' ? 0 : -12,
    paddingLeft: 10,
    color: 'white',
  },
  button: {
    alignItems: 'center',
    marginTop: 50,
   

  },
  signIn: {
   
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
    marginTop:30,
    backgroundColor:'#4942CE'
    
  },
  textSign: {
    
    fontSize: 18,
    fontWeight: 'bold'
  },
  gobg:{
   paddingTop:10,
    paddingLeft:50,
    fontSize:30,
    color:'white'
  },
  gobgarrow:{
    position:'absolute',
    fontSize:40,
    color:'white'
  },
  gobacktxt:{
    color:'white',
    paddingLeft:30,
    fontSize:60
  }


})
