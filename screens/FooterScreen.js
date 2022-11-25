import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

const FooterScreen = () => {
  
  return (
    <View style={styles.footerContainer}>
      
      <TouchableOpacity style={styles.footerNav}>
        <Image style={styles.footerIcon} source={require('../assets/images/homeIcon.png')} />
        <Text style={styles.footerText}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerNav}>
        <Image style={styles.footerIcon} source={require('../assets/images/measureIcon.png')} />
        <Text style={styles.footerText}>Measure</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerNav}>
        <Icon 
        name="infinite-outline"
        type="ionicon"
        color="#000"
        size={30}
        
        />
        <Text style={styles.footerText}>Explore</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerNav}>
      <Icon   
            name="cart-outline"
            type="ionicon"
            color="#000"
            size={30}
            
           />
        <Text style={styles.footerText}>Cart</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.footerNav}>
      <Icon   
            name="person-outline"
            type="ionicon"
            color="#000"
            size={30}
            style={{marginRight:5}}
           />
        <Text style={styles.footerText}>Profile</Text>
      </TouchableOpacity>

    </View>
  )
}


const styles = StyleSheet.create({
    footerContainer: {
        position: "absolute",
        bottom: 0,
        width: "100%",
        backgroundColor: "#fff",
        height: 50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#ddd",
        paddingHorizontal: 20,
    },
    footerText: {
        color: "#1f1f1f",
        fontSize: 12,
    },
    footerNav: {
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
    },
    footerIcon: {
        width: 25,
        height: 25,
    },

});

export default FooterScreen