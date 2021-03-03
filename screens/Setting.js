import React, { useState } from 'react';
import { Button, Text, View, Alert, TouchableOpacity } from 'react-native';
import * as Facebook from 'expo-facebook';


export default Setting = () => {
    const [authed, setAuthed] = useState(false);
    facebookLogIn = async () => {
        Facebook.initializeAsync({appId: '785136862133419'})
        try {
          const {
            type,
            token,
            expires,
            permissions,
            declinedPermissions,
          } = await Facebook.logInWithReadPermissionsAsync({
            permissions: ['public_profile'],
          });
          if (type === 'success') {
            // Get the user's name using Facebook's Graph API
            fetch(`https://graph.facebook.com/me?access_token=${token}&fields=id,name,email,picture.height(500)`)
              .then(response => response.json())
              .then(data => {
                setAuthed(true);
              })
              .catch(e => console.log(e))
          } else {
            // type === 'cancel'
          }
        } catch ({ message }) {
          alert(`Facebook Login Error: ${message}`);
        }
      }
    
      logout = () => {
        setAuthed(false);
      }
    
    return <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        {authed ?
            <TouchableOpacity onPress={logout}><Text>Log out</Text></TouchableOpacity>
            : <TouchableOpacity onPress={facebookLogIn}><Text>Login facebook</Text></TouchableOpacity>
        }
    </View>
}