/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React from 'react';
 import {StyleSheet, Text, Button, View} from 'react-native';
 import ImagePicker from 'react-native-image-picker';
 
 const App = () => {
   const pickImage = () => {
     const options = {
       title: 'Select Avatar',
       customButtions: [{name: 'fb', title: 'Choose Photo from Facebook'}],
       storageOptions: {
         skipBackup: true,
         path: 'images',
       },
     };
 
     ImagePicker.showImagePicker(options, response => {
       console.log('Response = ', response);
 
       if (response.didCancel) {
         console.log('User canccelled image picker.');
       } else if (response.error) {
         console.log('ImagePicker Error: ', response.error);
       } else if (response.customButton) {
         console.log('User tapped custom button: ', response.customButton);
       } else {
         console.log(response.uri);
       }
     });
   };
 
   return (
     <View>
       <Button title="Take Image" onPress={pickImage} />
     </View>
   );
 };
 
 const styles = StyleSheet.create({});
 
 export default App;
 