import { View, Text, StyleSheet, Image, ScrollView } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React from 'react'
 import { Users } from '../../Data/Data'
import { Icon } from 'react-native-elements'


const Stories = () => {
  return (
    <View>
      <View style={styles.labels} >
        <Text style={styles.label}>Top Labels</Text>
        <Text style={styles.label}>See All Labels
        
        </Text>
        
      </View>

        <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
         style={styles.stories} >
            {
                Users.map((story, index) => (
                    <View key={index} style={styles.story}>
                    
                    <Image
                        source={story.image}
                        style={styles.image} />
                       
                    <Text style={styles.name}>{
                        story.name.length > 11 ? story.name.slice(0,10).toUpperCase() + "..." : story.name.toUpperCase()  
                    }</Text>
                    </View>
                ))
            }

        
        </ScrollView>

    </View>
  )
}



const styles = StyleSheet.create({
    labels: {
        flexDirection: "row",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 10,
    
    },
    label: {
        fontWeight: "bold",
        fontSize: 14,
    },
    stories: {
        flexDirection: "row",
        paddingHorizontal: 15,
    },
    story: {
        alignItems: "center",
        marginRight: 20,
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 50,
        borderWidth: 3,
        borderColor: "#e74b97",
    },
    name: {
        marginTop: 5,
        fontSize: 12,
        color: "#555",
    },
   


});
export default Stories