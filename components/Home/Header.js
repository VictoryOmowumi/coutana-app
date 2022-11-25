import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

const Header = () => {
  const [iconName, setIconName] = React.useState('heart-outline');
  const [iconColor, setIconColor] = React.useState('#000');
  return (
    <View style={styles.container}>
        <TouchableOpacity>
      <Image
         style={styles.logo}
       source={require('../../assets/images/logo.png')} />
         </TouchableOpacity>
        <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => {
          setIconName(iconName === 'heart-outline' ? 'heart' : 'heart-outline')
          setIconColor(iconColor === '#000' ? '#ff0000' : '#000')
            }}>
            <Icon
            name={iconName}
            type="ionicon"
            color={iconColor}
            size={30}
            style={{marginRight:10}}
            />
            </TouchableOpacity>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        marginTop: 10,
        paddingHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: "#ddd",
    },
   logo: {
         width: 100,
        height: 50,
        resizeMode: "contain",

    },
    iconsContainer: {
        flexDirection: "row",
    },
    icon: {
        width: 25,
        height: 25,
        marginLeft: 10,
    },
});

export default Header