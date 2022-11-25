import { View, StyleSheet } from 'react-native'
import React from 'react'
import { Divider } from 'react-native-elements'
import PostHeader from './PostHeader'
import PostImage from './PostImage'
import PostFooter from './PostFooter'
import PostComments from './PostComments'

const Post = ({post}) => {
  return (
    <View style={{marginBottom:30, marginHorizontal:5}}>
    
    <Divider width={1} orientation="vertical" />
      <PostHeader post={post} />
      <PostImage post={post} />
      <PostFooter />
      <PostComments post={post} />
    </View>
  )
}


const styles = StyleSheet.create({
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderWidth: 1.5,
        borderColor: "#e5625c",
    },
});

export default Post