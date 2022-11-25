import { View, Text } from 'react-native'
import React from 'react'

const PostComments = ({post}) => {
  return (
    <View>
      <Text style={{fontSize:22, fontWeight:'600'}}>{post.caption}</Text>
      <View style={{flexDirection:'row', marginTop:10, justifyContent:'space-between', marginBottom:10,}}>
        <Text style={{fontWeight:'bold'}}>{post.likes} Likes</Text>
        <Text style={{fontWeight:'bold'}}>{post.edition} Limited Edition</Text>
        </View>
        <Text >
            <Text style={{fontWeight:'bold', fontSize:14, }}>{post.user}
            </Text>  Fashion is a religion in one sense. Once upon a time, 
            our brand was considered the sanctum sanctorum of fashion.
        </Text>
    </View>
  )
}

export default PostComments