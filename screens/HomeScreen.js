import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import Header from '../components/Home/Header';
import Stories from '../components/Home/Stories';
import Post from '../components/Home/Post';
import { ScrollView } from 'react-native';
import { Posts } from '../Data/Posts';
import FooterScreen from './FooterScreen';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <Stories />
      <ScrollView>
        {
            Posts.map((post, index) => (
                <Post key={index} post={post} />
            ))
        }
      </ScrollView>
      <FooterScreen />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#fff",
        flex: 1,
    },
});

export default HomeScreen