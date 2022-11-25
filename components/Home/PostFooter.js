import { View, Text, Image, StyleSheet, Pressable } from "react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import LinearGradient from "react-native-linear-gradient";
import { Icon } from "react-native-elements";


const PostFooter = () => {
  const [iconName, setIconName] = React.useState('heart-outline');
  const [iconColor, setIconColor] = React.useState('#000');
  return (
    <View style={styles.footerContainer}>
        <View style={styles.likebtn}>
        <TouchableOpacity onPress={() => {
          setIconName(iconName === 'heart-outline' ? 'heart' : 'heart-outline')
          setIconColor(iconColor === '#000' ? '#ff0000' : '#000')
        }} >
        <Icon
        name={iconName}
        type="ionicon"
        color={iconColor}
        size={30}
        style={{marginRight:10}}
        />
        </TouchableOpacity>

        <TouchableOpacity>
        <Icon 
        name="paper-plane-outline"
        type="ionicon"
        color="#000"
        size={30}
        />
        </TouchableOpacity>
        </View>
      


      <View>
        <Pressable style={styles.cartBtn}>
          <Icon   
            name="cart"
            type="ionicon"
            color="#fff"
            size={20}
            style={{marginRight:5}}
           />
          <Text style={{color:'#fff', fontSize:14, fontWeight:'500'}}>Order</Text>
        </Pressable>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    backgroundColor: "#fff",
    width: "100%",
    height: 70,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#ddd",
    paddingHorizontal: 10,
  },
  likebtn: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    
  },
  
  cartBtn: {
    backgroundColor: "#e74b97",
    width: 100,
    height: 40,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
});
export default PostFooter;
