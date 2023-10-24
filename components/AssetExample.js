import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>I AM GROOT</Text>
       <Text  style={styles.text}>TRANSLATION: HAPPY BIRTHDAY</Text>
      <View style={styles.img}><Image source={require('../assets/GROOT.png')} style={styles.groot}/></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop:95,
    paddingBottom:100,
   borderWidth:2,
    padding: 32,
  },
 
  title: {
    fontSize:50,
    color: '#441505',
    fontWeight:900,
    marginTop:-30,
    fontFamily:'Bradley Hand, cursive',
   
  },


 groot: {
   marginBottom:-98,
   marginLeft:15,
   justifyContent: 'center',
 },

 img: {
   marginTop:145,
   borderWidth:2,
   marginLeft:-10,
   paddingBottom:100
 },

 text: {
   paddingTop:37,
   marginBottom:-57,
   fontSize:25,
   fontWeight:700,
   color:'#441505',
   fontFamily:'URW Chancery L, cursive',
 },
});
