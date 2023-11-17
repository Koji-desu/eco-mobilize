import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';


export default function Welcome(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>

            <View style={styles.containerLogo}>
                <Animatable.Image 
                    animation="flipInY"
                    source={require('../Welcome/carropng.png')}
                    style={{width: 250, height: 250}}
                    resizeMode="contain"
                />
            </View>

            <Animatable.View delay={600} animation="fadeInUp"  style={styles.containerForm}>
                <Text style={styles.title}>Alugue hoje mesmo seu carro na EcoMobilize</Text>
                <Text style={styles.text}>Acesse para começar</Text>

                <TouchableOpacity 
                style={styles.button}
                onPress={()=>{navigation.navigate('Home')}}
                >
                    <Text style={styles.buttonText}>Acessar</Text>
                </TouchableOpacity>
            </Animatable.View>

        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: '#4B7766'
    },
    containerLogo:{
        flex: 2,
        backgroundColor: '#4B7766',
        justifyContent: 'center',
        alignItems: 'center'
    },
    containerForm:{
        flex:1,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        paddingStart: '5%',
        paddingEnd: '5%',
        textAlign: 'center'
    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        textAlign: 'center'
        },
    text:{
        color: '#a1a1a1',
        textAlign: 'center'
    },
    button:{
        position: 'absolute',
        backgroundColor: '#4B7766',
        borderRadius: 50,
        paddingVertical: 8,
        width: '60%',
        alignSelf: 'center',
        bottom: '15%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText:{
        fontSize: 18,
        color: '#FFF',
        fontWeight: 'bold'
    }

})