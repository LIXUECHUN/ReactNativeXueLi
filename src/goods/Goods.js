import React, { Component } from 'react'
import {
    StyleSheet,
    SafeAreaView,
    View,
    Text,
    Image,
    TextInput,
    ScrollView
} from 'react-native';

const styles = StyleSheet.create({
    box:{
        backgroundColor:"#ffffff",
        color:'grey',
        width:"20%",
        height:60,
        fontSize:18,
        borderBottomWidth:1,
        borderBottomColor:'lightgrey',
        paddingTop:'3%',
        paddingLeft:"6%"
    },
    box1:{
        backgroundColor:"#ffffff",
        color:'orange',
        width:"20%",
        height:60,
        fontSize:18,
        borderBottomWidth:1,
        borderBottomColor:'lightgrey',
        paddingTop:'3%',
        paddingLeft:"6%"
    },
    box2:{
        height:30,
        color:"red",
        paddingTop:10
    }

});
export default class ListXL extends Component {
    render() {
    return (
        <ScrollView>
            <SafeAreaView>
                {/* 导航栏 */}
                <View style={{
                    backgroundColor:"ffffff"
                }}>
                    {/* 搜索栏 */}
                    <View style={{
                        flexDirection:'row',
                        height:50,
                        paddingBottom:5,
                        borderBottomWidth:1,
                        border: 'solid',
                        borderBottomColor:'lightgrey'
                    }}>
                        <View style={{
                            position:'relative',
                            width:'90%',
                            marginLeft:'5%',
                            marginTop:"1%",
                            flexDirection:'row',
                            borderRadius:5,
                            backgroundColor:'#eeeeee'
                        }}>
                            <TextInput style={{
                            paddingLeft:10,
                            color:"grey"
                            }}
                            placeholder="请输入商品名称"
                            placeholderTextColor="grey"
                            />
                            <Image style={{
                                position:'absolute',
                                width:"5%",
                                height:"20%",
                                marginTop:"3%",
                                right:20
                                }} 
                                resizeMode="stretch" 
                                source={require('../../assets/sousuo.png')} 
                            />
                            
                        </View>
                    </View>
                    {/* tab栏*/}
                    <View style={{
                        flexDirection:'row',
                    }}>
                        <Text style={styles.box1}>综合</Text>
                        <Text style={styles.box} >销量</Text>
                        <Text style={styles.box}>新品</Text>
                        <Text style={styles.box}>价格</Text>
                        <Text style={styles.box}>信用</Text>
                    </View>
                </View>
                
                {/* 内容 */}
                <View style={{
                    height:1000
                }}>
                    <View style={{
                        flexDirection:'row',
                        marginTop:15
                    }}>
                        <View style={{
                            backgroundColor:'#ffffff',
                            width:220,
                            height:280,
                            paddingLeft:15,
                            paddingRight:5,
                            marginLeft:13,
                            marginRight:13,
                        }}>
                            <Image style={{
                                width:200,
                                height:200
                                }} 
                                resizeMode="stretch" 
                                source={require('../../assets/green.png')} 
                            />
                            <Text >oishi/上好佳玉米卷20包鹏华休闲食品Oishi/上好佳</Text>
                            <Text style={styles.box2}>36.00</Text>
                        </View>
                        <View style={{
                            backgroundColor:'#ffffff',
                            width:220,
                            height:280,
                            paddingLeft:15,
                            paddingRight:5
                        }}>
                            <Image style={{
                                width:200,
                                height:200
                                }} 
                                resizeMode="stretch" 
                                source={require('../../assets/yellow.png')} 
                            />
                            <Text >oishi/上好佳玉米卷20包鹏华休闲食品Oishi/上好佳</Text>
                            <Text style={styles.box2}>36.00</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        marginTop:15
                    }}>
                        <View style={{
                            backgroundColor:'#ffffff',
                            width:220,
                            height:280,
                            paddingLeft:15,
                            paddingRight:5,
                            marginLeft:13,
                            marginRight:13,
                        }}>
                            <Image style={{
                                width:200,
                                height:200
                                }} 
                                resizeMode="stretch" 
                                source={require('../../assets/green.png')} 
                            />
                            <Text >oishi/上好佳玉米卷20包鹏华休闲食品Oishi/上好佳</Text>
                            <Text style={styles.box2}>36.00</Text>
                        </View>
                        <View style={{
                            backgroundColor:'#ffffff',
                            width:220,
                            height:280,
                            paddingLeft:15,
                            paddingRight:5
                        }}>
                            <Image style={{
                                width:200,
                                height:200
                                }} 
                                resizeMode="stretch" 
                                source={require('../../assets/yellow.png')} 
                            />
                            <Text >oishi/上好佳玉米卷20包鹏华休闲食品Oishi/上好佳</Text>
                            <Text style={styles.box2}>36.00</Text>
                        </View>
                    </View>
                    <View style={{
                        flexDirection:'row',
                        marginTop:15,
                    }}>
                        <View style={{
                            backgroundColor:'#ffffff',
                            width:220,
                            height:280,
                            paddingLeft:15,
                            paddingRight:5,
                            marginLeft:13,
                            marginRight:13,
                        }}>
                            <Image style={{
                                width:200,
                                height:200
                                }} 
                                resizeMode="stretch" 
                                source={require('../../assets/green.png')} 
                            />
                            <Text >oishi/上好佳玉米卷20包鹏华休闲食品Oishi/上好佳</Text>
                            <Text style={styles.box2}>36.00</Text>
                        </View>
                        <View style={{
                            backgroundColor:'#ffffff',
                            width:220,
                            height:280,
                            paddingLeft:15,
                            paddingRight:5
                        }}>
                            <Image style={{
                                width:200,
                                height:200
                                }} 
                                resizeMode="stretch" 
                                source={require('../../assets/yellow.png')} 
                            />
                            <Text >oishi/上好佳玉米卷20包鹏华休闲食品Oishi/上好佳</Text>
                            <Text style={styles.box2}>36.00</Text>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
}}
