import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

const PostHeader = ({post}) => {
  return (
    <View style={styles.postHeader}>

       <View style={styles.container}>

           <Image source={post.profile} style={styles.image} />
            <Text style={styles.username}>{ post.user}</Text>
       </View>
        <View>
            <Icon
                name="ellipsis-horizontal"
                type="ionicon"
                color="#000"
                size={30}
            />    

        </View>

        </View>
  )
}

const styles = StyleSheet.create({
    postHeader: {
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5,
        alignItems:'center',
    },
    container: {
        flexDirection:'row',
        alignItems:'center',
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: "#e5625c",
    },
    username: {
        marginLeft: 5,
        fontWeight: "bold",
    },
    more: {
        fontWeight: "bold",
        fontSize: 20,
    },
});
export default PostHeader