import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

import ProfileHeader from './ProfileHeader'
import ProfileGallery from './ProfileGallery'

const HeaderProfile = () => {
  return (
    <View style={styles.container}>
    <ProfileHeader />
    <ProfileGallery />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    paddingTop: 20,
    paddingHorizontal: 10,
  },
 
});


export default HeaderProfile