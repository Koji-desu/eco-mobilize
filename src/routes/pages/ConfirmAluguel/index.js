import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-web';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';
import moment from 'moment/moment';

export default function ConfirmAluguel(){
    const navigation = useNavigation();
    let momentNow = moment().format('DDMMyyyyHHmmss')
    console.log(momentNow)
    return(
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                
                <Animatable.Image 
                    animation="flipInY"
                    source={require('../../../assets/carrologo.png')}
                    style={{width: 75, height: 75}}
                    resizeMode="contain"
                    
                />
                <Text style={styles.title}>EcoMobilize</Text>
            </View>

            <View style={styles.containerMain}>
                <View style={styles.containerSucess}>
                    <Animatable.Image
                    animation="flipInX"
                        source={require('../../../assets/imgsucess.png')}
                        style={{width: 300, height: 300}}
                        resizeMode='contain'
                    />
                    <Text style={styles.textSucess}>Tudo Pronto !!!</Text>
                    <Text style={styles.textSucess}>Seu aluguel foi finalizado!!</Text>
                </View>

                <View style={styles.containerCode}>
                    <Text style={styles.textCode}>Esse é seu código para retirada do veículo</Text>
                    <Text style={{fontSize: 22, marginBottom: 10, marginTop: 10, color: '#FFF'}} >#{momentNow}</Text>
                    <Text style={styles.textCode}>Também pode ser visto na parte do perfil</Text>
                </View>
            </View>

            <Animatable.View animation="fadeInUp" delay={100} style={styles.containerNavigatorMenu}>
                <TouchableOpacity>
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
        containerMain:{
        flex:10,
        backgroundColor: '#4B7766',
        paddingStart: '5%',
        paddingEnd: '5%',
        textAlign: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        alignSelf: 'center',
        width: '100%',
        justifyContent: 'space-between'
        

    },
    containerCars:{
        padding: 25
    },
    containerSucess:{
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
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
    containerCode:{
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
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
        fontWeight: 'bold',
        color: '#95D6A4'
    },
    textSucess:{
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '#95D6A4'
    },
    textCode:{
        color: '#FFF',
        fontSize: 18
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