import { View, Text, StyleSheet,  } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import { Image } from 'react-native'
import { Pressable } from 'react-native'


const ProfileHeader = () => {
   
  return (
    <View>
     <View style={styles.headerTitle}>
    <Text style={{flex:1, alignItems:'flex-start', fontSize:22, fontWeight:'bold'}}>Empire</Text>
      <Icon 
        name="add-circle-outline"
        type="ionicons"
        color="#000"
        size={30}
        style={{marginRight:10}}
      />
        <Icon
          name="menu"
          type="ionicon"
          color="#000"
          size={32}
        />
    </View>


    <View style={styles.profileInfoContainer}>
      <View>
        <Image source={require('../../assets/images/img-7.jpg')} 
        style={{width: 100, height: 100, borderRadius: 50, borderWidth: 4, borderColor: "#e5625c"}}
        />
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 10, alignItems:'center',}}>
        <View style={{alignItems: 'center', marginRight:40}}>
          <Text style={{fontWeight: 'bold', fontSize: 20}}>210</Text>
          <Text style={{fontSize: 12, color: 'gray'}}>Designs</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Text style={{fontWeight: 'bold', fontSize: 18}}>2,000</Text>
          <Text style={{fontSize: 12, color: 'gray', fontWeight:'400'}}>Following</Text>
          </View>
        </View>  
    </View>
    <View>
      <Text style={{fontWeight: 'bold', fontSize: 18, marginTop: 10}}>Empire</Text>
      <Text style={{fontSize: 12, color: 'gray', fontWeight:'400'}}>
      Empire is a design studio based in New York City. We create beautiful,
       functional websites and mobile apps.</Text>
    </View>
    <View>
      <Pressable style={styles.button}>
        <Text style={{color: '#000', fontWeight: 'bold', fontSize: 16}}>Edit Profile</Text>
      </Pressable>
    </View>
   
    </View>
  )
}

const styles = StyleSheet.create({

    headerTitle: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
      },
      profileInfoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 20,
      },
      button: {
        borderWidth: 1,
        borderColor: "#ddd",
        alignItems: "center",
        padding: 10,
        borderRadius: 5,
        marginTop: 10,
      },
      



})
export default ProfileHeader