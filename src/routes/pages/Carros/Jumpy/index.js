import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TouchableOpacity, Button } from 'react-native';
import { TextInput } from 'react-native-web';
import * as Animatable from 'react-native-animatable'
import { useNavigation } from '@react-navigation/native';

export default function carJumpy(){
    const navigation = useNavigation();
    return(
        <View style={styles.container}>
            
            <View style={styles.containerLogo}>
                
                <Animatable.Image 
                    animation="flipInY"
                    source={require('../../../../assets/carrologo.png')}
                    style={{width: '80px', height: '80px'}}
                    resizeMode="contain"
                />
                <Text style={styles.title}>EcoMobilize</Text>
            </View>
        
        <Animatable.View animation="fadeInUp" delay={500} style={styles.containerOptions} >
            <TouchableOpacity>
            <Image  style={styles.imageCarro}
                    source={require('../../../../assets/BYDTan.png')}
                    resizeMode="contain"                         
            />
            <Text style={styles.text}>BYD Tan</Text>
            </TouchableOpacity>             
            <View style={styles.containerSobre1}>
                <View style={styles.containerSobre3}>

                
                <Text style ={styles.sobre}>
                   Sobre:
                </Text>
                </View>

                <View style ={styles.containerEspec}>

                <View>
                <Text style ={styles.informações}>
                    * Câmbio Automático
                </Text>
                <Text style ={styles.informações}>
                    * Multimídia
                </Text>
                <Text style ={styles.informações}>
                    * Direção Elétrica
                </Text>
                </View>

                <View>

                <Text style ={styles.informações}>
                    * Seguro
                </Text>
                <Text style ={styles.informações}>
                    * Insufilm
                </Text>
                <Text style ={styles.informações}>
                    * Ar-Condicionado
                </Text>
                </View>
                </View>
             </View>
            <View style={styles.containerSobre2}>
                <Text style ={styles.textporapenas}>
                    Por Apenas: R$ 3.699,99
                <TouchableOpacity style = {styles.button}>
                <Text style ={styles.textbutton}>
                    Quero Alugar !
                </Text>
                </TouchableOpacity>
                </Text>
                
            </View>
            
            <Image />

                 
        </Animatable.View>
        <View style={styles.containerNavigatorMenu}>
                <TouchableOpacity>
                    <Image
                        source={require('../../../../assets/voltar.png')}
                        style={styles.buttonsMenu}
                        resizeMode="contain"

                    />
                    <Text style={styles.buttonTextMenu}>Voltar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        source={require('../../../../assets/abastecer.png')}
                        style={styles.buttonsMenu}
                        resizeMode="contain"

                    />
                    <Text style={styles.buttonTextMenu}>Onde Carregar</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image
                        source={require('../../../../assets/localizacao.png')}
                        style={styles.buttonsMenu}
                        resizeMode="contain" 

                    />
                    <Text style={styles.buttonTextMenu}>Lojas</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                    <Image 
                        source={require('../../../../assets/perfil.png')}
                        style={styles.buttonsMenu}
                        resizeMode="contain"
                    />
                    <Text style={styles.buttonTextMenu}>Perfil</Text>
                </TouchableOpacity>
            </View> 
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
        backgroundColor: '#7DC6AA',
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
    containerSobre1:{
        flexDirection: 'column',
        padding: 10,
        borderColor:'black',
        borderWidth:1,
        width: '100%',
        height: 150,
        marginTop: 10,
        borderColor:'#4B7766',
    },
    containerSobre2:{       
        borderColor:'#4B7766',
        borderWidth:1,
        width: '100%',
        height: 200,
        marginTop: 10,
    },
    containerSobre3:{       
        flex: 1,       
    },
    containerEspec:{
        flex:2,
        flexDirection: 'row',  
        justifyContent:'space-around',
    },
    textporapenas:{
        marginTop: 30,
        width: '100%',
        textAlign: 'center', 
        fontWeight: 'bold',  
        fontSize:30, 
        color: 'white',   
    },    
    title:{
        fontSize: 40,
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
        fontSize:20,
    },
    imageCarro:{
        marginBottom: 10,
        marginTop: 10,
        width: 200,   
        height: 200,     
    },
    button:{        
        width: 250,
        height: 100,
        backgroundColor: '#95D6A4',
        borderRadius: 100,
        textAlign: 'center',
        alignItems: 'center',
    },
    textbutton:{
        fontSize: 40,
        color: 'black',
        fontWeight: 'bold',
        textAlign: 'center',
        alignItems: 'center',
        fontWeight:'bold' ,
    },
    sobre:{
        fontSize: 30,
        fontWeight:'bold',
        color: 'white',
    },
    informações:{
        marginTop:5,
        fontSize: 18,
        color: 'white',
        fontWeight:'bold',
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
    containerNavigatorMenu:{
        flex:1,
        backgroundColor: '#95D6A4',
        justifyContent: 'space-around',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        width: '100%',
    },
})