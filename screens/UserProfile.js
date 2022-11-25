import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import HeaderProfile from '../components/UserProfile/HeaderProfile'
import FooterScreen from './FooterScreen'

const UserProfile = () => {
  return (
    <SafeAreaView>
      <HeaderProfile />
      <FooterScreen />
    </SafeAreaView>
  )
}

export default UserProfile