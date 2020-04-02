import React, { Component } from 'react';
import {FlatList,ToastAndroid,View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import Button from 'react-native-button';
import { Actions} from 'react-native-router-flux';
import { Icon } from '@ant-design/react-native';

export default class Publish extends Component {
    constructor(){
        super();
        this.state = {
            getdata : [],
            page : 1
        }
    }
    componentDidMount(){
        this.getPage(this.state.page)
    }
    getPage=(page)=>{
        fetch('https://cnodejs.org/api/v1/topics?limit=15&page=' + page)
        .then((res) => res.json())
        .then((res)=>{
            res.data.forEach(item => item.huifu = Math.random() > 0.5 ? 1 : 0);
            this.setState({
                getdata : res.data
            })
        })
    }

    Prev=()=>{
        let page = this.state.page;
        if(page === 1){          
            ToastAndroid.show('已是第一页',1000);
        }else{
            this.setState({
                page : --this.state.page
            })
            this.getPage(this.state.page)
        }
    }
    Next=()=>{
        let page = this.state.page;
        this.setState({
            page : ++this.state.page
        })
        this.getPage(this.state.page)
    }
    render() {
        return (
            <View>
                <View style={styles.tab}>
                    <TouchableOpacity 
                    onPress={()=>{Actions.pop()}}>
                        <Icon 
                            name="left" 
                            color="white" 
                            style={{lineHeight:35}}
                        />
                    </TouchableOpacity>
                    <Text style={styles.tab_text}>我的发布</Text>
                    <Icon 
                        name="ellipsis" 
                        color="white" 
                        style={{lineHeight:35}}/>
                </View>

                <FlatList
                    data = {this.state.getdata}
                    renderItem={({item})=>(
                        <View 
                        key={item.id}
                        style={styles.data_title}>
                            <Text style={{
                                lineHeight:35,
                                paddingLeft:15}
                            }>
                                { item.title.length > 20 ? item.title.slice(0, 20) + "..." : item.title}
                            </Text>
                            <Text style={{
                                lineHeight:35,
                                position:"absolute",
                                right:90
                            }}>
                                {item.create_at.slice(0,10)}
                            </Text>
                            <Text style={[styles.huifu,item.huifu ? {color:'red'} : {}]}>
                                {item.huifu ? '已回复' : '待回复'}
                            </Text>
                        </View>
                    )}
                />

                <View style={styles.routerbtn}>
                    <Button 
                        style={[styles.rbtn]} 
                        onPress={()=>{this.Prev()}}
                    >上一页</Button> 
                    <Text style={styles.pages}>
                        第{this.state.page}页
                    </Text>
                    <Button 
                        style={[styles.rbtn]} 
                        onPress={()=>{this.Next()}}
                    >下一页</Button>              
                </View>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    huifu:{
        position:"absolute",
        right:25,
        lineHeight:35
    },
    tab:{
        height:35,
        backgroundColor:'red',
        justifyContent:"space-between",
        flexDirection:'row',
    },
    tab_text:{
        color:"white",
        fontSize:20,
        lineHeight:35,
        textAlign:"center",
    },
    data_title:{
        height:35,
        backgroundColor:'#fff',
        flexDirection:'row',
        borderBottomColor:"lightgray",
        borderBottomWidth:1
    },
    routerbtn:{
        height:70,
        backgroundColor:"#fff",
        flexDirection:"row",
        justifyContent:"space-around",
        alignItems:'center'
    },
    rbtn:{
        lineHeight:35,
        height:35,
        width:150,
        backgroundColor:"red",
        color:"white",
        borderRadius:23,
    },
    pages:{
        fontSize:20,
        lineHeight:35
    }
})
