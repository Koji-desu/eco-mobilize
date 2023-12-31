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
                    source={require('../../../assets/carrologo.png')}
                    style={{width: 75, height: 75}}
                    resizeMede="contain"
                    
                />
                <Text style={styles.title}>EcoMobilize</Text>
            </View>
            <Text style={styles.title} >Veículos disponíveis para aluguel: </Text>
            <Animatable.View animation="fadeInUp" delay={500} style={styles.containerOptions} >
            
                <Animatable.View animation="fadeInLeft" delay={500} style={styles.containerCars}>
            <TouchableOpacity onPress={()=>{navigation.navigate('carBYDTan')}}>
            <Image 
                    source={require('../../../assets/BYDTan.png')}
                    style={styles.imageCar}
                    resizeMode="contain"     
                    
            />
            <Text style={styles.text}>BYD Tan</Text>
            
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('carNissanLeaf')}}>
            <Image
                    source={require('../../../assets/NissanLeaf.png')}
                    style={styles.imageCar} 
                    resizeMode="contain"               
            />
            
            <Text style={styles.text}>Nissan Leaf</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={()=>{navigation.navigate('carExpert')}}>
            <Image
            source={require('../../../assets/e-Expert.png')}
            style={styles.imageCar} 
            resizeMode="contain"
            />
            
            <Text style={styles.text}>e-Expert</Text>
            </TouchableOpacity>
                </Animatable.View>

                <Animatable.View animation="fadeInRight" delay={500} style={styles.containerCars}>
                <TouchableOpacity onPress={()=>{navigation.navigate('carMiniCooper')}}>
                    <Image 
                    source={require('../../../assets/Cooper.png')}
                    style={styles.imageCar}
                    resizeMode="contain"    
                    />
                    
                    <Text style={styles.text}>Mini Cooper</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('carKangoo')}}>
                    <Image
                    source={require('../../../assets/Kangoo.png')}
                    style={styles.imageCar}
                    resizeMode="contain"    
                    />
                    
                    <Text style={styles.text}>Kangoo</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>{navigation.navigate('carJumpy')}}>
                    <Image
                    source={require('../../../assets/e-Jumpy.png')}
                    style={styles.imageCar}
                    resizeMode="contain"    
                    />
                    
                    <Text style={styles.text}>e-Jumpy</Text>
                </TouchableOpacity>
                </Animatable.View>
            
            </Animatable.View>

            <Text style={styles.title} >Clique para saber mais sobre! </Text>

            <Animatable.View animation="fadeInUp" delay={100} style={styles.containerNavigatorMenu}>
                <TouchableOpacity onPress={()=>{navigation.navigate('Welcome')}}>
                    <Image
                        source={require('../../../assets/voltar.png')}
                        style={styles.buttonsMenu}
                        resizeMode="contain"
                        
                    />
                    <Text style={styles.buttonTextMenu}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        source={require('../../../assets/abastecer.png')}
                        style={styles.buttonsMenu}
                        resizeMode="contain"
                    
                    />
                    <Text style={styles.buttonTextMenu}>Onde Carregar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../../assets/localizacao.png')}
                        style={styles.buttonsMenu}
                        resizeMode="contain" 
                    
                    />
                    <Text style={styles.buttonTextMenu}>Lojas</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        source={require('../../../assets/perfil.png')}
                        style={styles.buttonsMenu}
                        resizeMode="contain"
                    />
                    <Text style={styles.buttonTextMenu}>Perfil</Text>
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
        alignItems: 'center',
        flexDirection: 'row'
    },
    containerOptions:{
        flex:10,
        backgroundColor: '#4B7766',
        paddingStart: '5%',
        paddingEnd: '5%',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignSelf: 'center',
        

    },
    containerCars:{
        padding: 25
    },
    containerNavigatorMenu:{
        height: 100,
        backgroundColor: '#95D6A4',
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
        

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
        width: 150,
        height: 150,
        paddingLeft: 5,
        paddingRight: 5,
    },
    buttonsMenu:{
        marginBottom: 10,
        marginTop: 10,
        width: 35,
        height: 35,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
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
    },
    buttonTextMenu:{
        fontSize: 18,
        color: 'black',
        fontWeight: 'bold'
    }

})