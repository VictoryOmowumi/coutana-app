import { View, StyleSheet, Image, FlatList } from 'react-native'
import React from 'react'
import Data from '../../Data/images'
const UserGallery = () => {
  return (
    <View style={styles.container} >
      <View style={styles.galleryContainer}>
        <FlatList
            numColumns={3}
            horizontal={false}
            data={Data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              
                <Image style={styles.image} source={item.image} />
               
            )}
        />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        },
      galleryContainer: {
        flex: 1,            
      },
      
        image: {
            flex: 1,
            aspectRatio: 4/4,
            margin: 1,
            
        },
        
  
});
export default UserGallery