import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

const PostImage = ({post}) => {
  return (
    <View >
      <Image source={post.image} style={{ width: "100%",height:450, resizeMode:'cover'}} />
      
      <View style={styles.postInfoCon}>
      <View style={{ flexDirection:'row', alignItems:'center'}}>
       <Icon
        name="time-outline"
        type="ionicon"
        color="#fff"
        size={15}
        style={{marginRight:10}}
        />
        <Text style={styles.postInfo}>12 Days Proceesing - made to fit</Text>
      </View>
        
        <Text style={styles.postInfo}>Launched 15 days ago</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    postInfoCon: {
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 5,
        alignItems: "center",
        backgroundColor: "#000",
    },
    postInfo: {
        color: "#fff",
        margin: 5,
        fontSize: 10,
    },
    });
export default PostImage