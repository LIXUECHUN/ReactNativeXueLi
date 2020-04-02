import React, {useState, useEffect, Component } from 'react'
import { Text, 
    View,
    StyleSheet ,
    TouchableWithoutFeedback,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native'
import { Grid, Icon, WhiteSpace} from '@ant-design/react-native';
import ImagePicker from 'react-native-image-picker';
import Button from 'react-native-button';
import { Actions } from 'react-native-router-flux';

const data1 = [
    {icon:<Icon name="setting" />,text:'账户管理'},
    {icon:<Icon name="environment"  />,text:'收货管理'},
    {icon:<Icon name="eye"  />,text:'我的信息'},
    {icon:<Icon name="exception"  />,text:'我的订单'},
    {icon:<Icon name="qrcode"  />,text:'我的二维码'},
    {icon:<Icon name="edit"  />,text:'我的积分'},
    {icon:<Icon name="paper-clip"  />,text:'我的收藏'},
]
const data2 = [
    {icon:<Icon name="home" />,text:'居家维修保养'},
    {icon:<Icon name="heart"  />,text:'出行接送'},
    {icon:<Icon name="gift"  />,text:'我的受赠人'},
    {icon:<Icon name="heart"  />,text:'我的住宿优惠'},
    {icon:<Icon name="flag"  />,text:'我的活动'},
]
// 拍照
const options = {
    title: 'Select Avatar',
    customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
    storageOptions: {
        skipBackup: true,
        path: 'images',
    },
};
export default class Userinfor extends Component{
    constructor(){
        super();
        this.state = {
            imgUrl : require("../../assets/icon/user.png")
        }
    }
    storeData=(uri)=>{
        AsyncStorage.setItem('data','uri',
            ()=>{console.log('store success')}
        )
    }
    getData=()=>{
        AsyncStorage.getItem('data')
        .then((value) => {
            setImgUrl(value);
        });
    }
    takephoto=()=>{
        ImagePicker.showImagePicker(options, (response) => {
            if (response.didCancel) {
                return;
            } else if (response.error) {
                console.log('Error:', response.error);
            } else if (response.customButton) {
                console.log('custom:', response.customButton);
            } else {

            const source = { uri: response.uri };
                this.setState({
                imgUrl: source,
                });
            }
        });
    }
    render() {
        return (
            <ScrollView>
                <View>
                    {/* 头像 */}
                    <View style={styles.redview}>
                        <View 
                        style={styles.cirred}
                        ></View>
                    </View>
                    {/* <TouchableWithoutFeedback
                        onPress={()=>{this.takephoto()}}
                    >
                        <Image
                        source={this.state.imgUrl}
                        style={{width:100,height:100}}
                        />
                    </TouchableWithoutFeedback> */}
                    {/* 个人中心 */}
                    <View style={styles.list}>
                        <Icon 
                            name="right-circle" 
                            color = 'grey'
                            size="md"  
                            style={{marginRight:10}}
                        />
                        <Text>我的个人中心</Text>
                    </View>
                    <Grid
                    data={data1}
                    columnNum={3}
                    itemStyle={{ height: 80, backgroundColor: '#ffffff' }}
                    />

                    {/* 活动 */}
                    <View style={styles.list}>
                        <Icon 
                            name="safety" 
                            color = 'grey'
                            size="md"  
                            style={{marginRight:10}}
                        />
                        <Text>E族活动</Text>
                    </View>
                    <Grid
                    data={data2}
                    columnNum={3}
                    itemStyle={{ height: 80, backgroundColor: '#ffffff' }}
                    />
                    <View style={{
                        height:40,
                        width:'80%',
                        marginLeft:'10%',
                        marginBottom:50,
                        paddingLeft:169,
                        marginTop:20,
                        paddingTop:8,
                        borderRadius:50,
                        color:'white',
                        fontSize:20,
                        backgroundColor:'red'
                    }}>
                        <TouchableOpacity onPress={() => Actions.publish()}>
                            <Text>我的发布</Text>
                        </TouchableOpacity>
                    </View>
                    
                </View>
            </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    list:{
        marginTop:10,
        padding: 10,
        flexDirection:'row' ,
        backgroundColor:'#ffffff'
    },
    redview:{
        backgroundColor:'#f23030',
        height:250
    },
    cirred:{
        backgroundColor:'white',
        height:100,
        width:100,
        borderRadius:100,
        marginTop:80,
        marginLeft:190,
        opacity:0.6
    }
})
