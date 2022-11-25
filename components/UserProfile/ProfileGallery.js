import { View, Text,Pressable, StyleSheet } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements'
import UserGallery from './UserGallery'


const ProfileGallery = () => {
    const [showGallery, setShowGallery] = React.useState(<View></View>)
    
  return (
    <View style={styles.container} >
    <View style={{flexDirection:'row', justifyContent:'space-around', alignItems:'center'}}>
        <Icon
        name='grid-outline'
       type='ionicon'
       color='#000'
       size={30}
       onPress={() => setShowGallery(<UserGallery />)}
       />         
        <Icon
        name='list-outline'
         type='ionicon'
            color='#000'
            size={30}
            onPress={() => setShowGallery(<UserGallery />)}
            />
    </View>
        {showGallery}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        flex: 1,
        },
        galleryContainer: {
        flex: 1,
        },
    
    });  
export default ProfileGallery