import React, { Component } from 'react'
import { Text, View,Image,StyleSheet, AsyncStorage, TouchableOpacity} from 'react-native'
import Swiper from 'react-native-swiper';
const styles = StyleSheet.create({
    slide:{
        flex:1,
        alignItems:'center'
    }
})

export default class SwiperPage extends Component {
    start = ()=>{
        AsyncStorage.setItem('isInstall','true',()=>{
        });
        this.props.afterInstall();
    }
    render() {
        return (
            <Swiper style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide}>
                    <Image source={require('../../assets/slide.png')}/>
                </View>
                <View style={styles.slide}>
                    <Image source={require('../../assets/slide.png')}/>
                </View>
                <View style={styles.slide}>
                    <Image style={{
                        width:'100%',
                        height:'100%'
                    }} source={require('../../assets/slide.png')}/>
                    <TouchableOpacity onPress={this.start} style={{
                        bottom:200,
                        width:150,
                        height:40,
                        justifyContent: 'center',
                        alignItems:'center',
                        backgroundColor:'black',
                        borderRadius:50,
                    }}>
                        <Text style={{color:'#fff'}}>开始体验</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>
        )
    }
}
