import React, { Component } from 'react'
import { Text, View,ToastAndroid,TextInput,TouchableOpacity,StyleSheet,AsyncStorage, Alert } from 'react-native'
import { Actions } from 'react-native-router-flux'
import { Icon } from '@ant-design/react-native';
import {myFetch} from '../utils/index'

export default class Register extends Component {
    constructor(){
        super();
        this.state = {
            username:'',
            pwd:'',
        }
    }
    userfun=(text)=>{
        this.setState({username:text})
    }
    pwdfun=(text)=>{
        this.setState({pwd:text})
    }
    register=()=>{
        
        if(this.state.username != '' && this.state.pwd != '' ){
            ToastAndroid.show('注册成功',ToastAndroid.SHORT)
            myFetch.post('/register',{
                username:this.state.username,
                pwd:this.state.pwd
            }).then(res=>{
                console.log(res.data.status)
                if(res.data.status == '00000'){
                    ToastAndroid.show('账户已存在', ToastAndroid.SHORT)
                }else{
                    AsyncStorage.setItem('user',JSON.stringify(res.data)).then(()=>{
                            ToastAndroid.show('注册成功',ToastAndroid.SHORT)
                            Actions.login();
                        })
                }
            })
        }else{
            ToastAndroid.show('请正确输入',ToastAndroid.SHORT)
        }
    }
    render() {
        return (
            <View style={{flex:1,justifyContent:'center'}}>
                
                <View style={{alignItems:'center'}}>
                    <Text style={{fontSize:20,marginBottom:40}}>注册</Text>
                    <View style={{
                        width:'80%',
                        marginRight:10,
                        borderBottomColor:'#ccc',
                        borderBottomWidth:1,
                        flexDirection:'row',
                        alignItems:'center',
                        paddingLeft:20
                    }}>
                        <Icon name="user" color='red'/>
                        <TextInput placeholder="用户名"
                            onChangeText={this.userfun}
                        />
                    </View>
                    <View style={{
                        width:'80%',
                        marginRight:10,
                        borderBottomColor:'#ccc',
                        borderBottomWidth:1,
                        flexDirection:'row',
                        alignItems:'center',
                        paddingLeft:20
                    }}>
                        <Icon name="user" color='red'/>
                        <TextInput 
                            placeholder="密码"
                            onChangeText={this.pwdfun}
                            secureTextEntry={true}
                        />
                    </View>
                    <TouchableOpacity 
                        style={{
                            width:'80%',
                            height:40,
                            backgroundColor:'#ccc',
                            marginTop:30,
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                        onPress={this.register}>
                        <Text>注册</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            width:'80%',
                            height:40,
                            backgroundColor:'#ccc',
                            marginTop:30,
                            alignItems:'center',
                            justifyContent:'center'
                        }}
                        onPress={()=>Actions.login()}>
                        <Text>返回登录</Text>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}