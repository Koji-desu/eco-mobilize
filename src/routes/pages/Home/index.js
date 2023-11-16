import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function Home(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                
                <Animatable.Image 
                    animation="flipInY"
                    source={require('../../../assets/carropng 2.png')}
                    style={{width: '100px', height: '100px'}}
                    resizeMode="contain"
                />
                <Text style={styles.title}>EcoMobilize</Text>
            </View>
        <Animatable.View animation="fadeInUp" delay={500} style={styles.containerOptions} >
            <Text style={styles.title} >Veículos disponíveis para aluguel: </Text>

            <TouchableOpacity>
            <Image 
                    source={require('../../../assets/BYD Tan 2.png')}
                    style={styles.imageCar}
                    resizeMode="contain"     
                    
            />
            <Text style={styles.text}>BYD Tan</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image
                    source={require('../../../assets/Nissan Leaf.png')}
                    style={styles.imageCar} 
                    resizeMode="contain"               
            />
            <Text style={styles.text}>Nissan Leaf</Text>
            </TouchableOpacity>

            <TouchableOpacity>
            <Image
            source={require('../../../assets/e-Expert.png')}
            style={styles.imageCar} 
            resizeMode="contain"
            />
            <Text style={styles.text}>e-Expert</Text>
            </TouchableOpacity>
            <Image />
            <Image />
            <Image />
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
        alignItems: 'center',
        flexDirection: 'row'
    },
    containerOptions:{
        flex:10,
        backgroundColor: '#7DC6AA',
        paddingStart: '5%',
        paddingEnd: '5%',
        textAlign: 'center',
        alignItems: 'center',

    },
    title:{
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 28,
        marginBottom: 12,
        textAlign: 'center',
        color: '#FFF'
        },
    text:{
        color: '#FFF',
        textAlign: 'center',
        fontWeight: 'bold'
    },

    imageCar:{
        marginBottom: 10,
        marginTop: 10,
        width: '150px',
        height: '150px',
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