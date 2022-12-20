
import { StyleSheet , View , Text , Pressable } from 'react-native';

import { FontAwesome } from '@expo/vector-icons'; 

function CircleButton({ icon , size , color , onPress }){


    return(
        <Pressable 
            onPress={onPress} 
            style={({pressed}) => pressed && styles.pressed}
        >
            <View style={styles.buttonContainer}>
                <FontAwesome 
                    name={icon}
                    size={size}
                    color={color}
                />
            </View>
        </Pressable>
    );

}

export default CircleButton;

const styles = StyleSheet.create({

    buttonContainer:{
        borderRadius: 24,
        padding: 6,
        marginHorizontal: 8,
        marginVertical: 2,
        alignItems: 'center'
    },
    pressed:{
        opacity: 0.75
    }
});