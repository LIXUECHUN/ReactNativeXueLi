import React, { Component } from 'react'
import { Grid, Icon,SearchBar,Carousel} from '@ant-design/react-native';
import { Text, View ,Image,StyleSheet,TextInput,TextStyle, ViewStyle ,ScrollView} from 'react-native'
import Input from '@ant-design/react-native/lib/input-item/Input';

export default class Home extends Component{

    render() {
        return (
            <ScrollView>
            <View>
                {/* 导航栏 */}
                <View style={styles.dhview}>  
                    <View style={styles.dhview_input}>
                        <Icon 
                            name="search" 
                            color = 'white'
                            style={styles.dh_input_icon}
                            size="sm"  
                        />
                        <TextInput 
                            style={{
                                marginTop:4,
                                fontSize:12,
                                color:"white",
                            }}
                            placeholderTextColor="white"
                            placeholder="请输入您要搜索的关键字"
                        />
                    </View>
                    <Icon 
                        name="shopping-cart" 
                        color = '#ffffff'
                        style={styles.dh_cart}
                        size="sm" 
                    />
                </View> 
                
                {/* 轮播图 */}
                <View>
                    <Carousel
                    style={styles.Carouselbox}
                    selectedIndex={2}
                    autoplay
                    infinite
                    >
                    <View style={[styles.containerHorizontalbox, { backgroundColor: 'blue' }]}>
                        <Text>Carousel 1</Text>
                    </View>
                    <View style={[styles.containerHorizontalbox, { backgroundColor: 'yellow' }]}>
                        <Text>Carousel 2</Text>
                    </View>
                    <View style={[styles.containerHorizontalbox]}>
                        <Image 
                            style={styles.horiimg}
                            resizeMode="stretch"
                            source={require('../../assets/lunbo.png')} 
                        />
                    </View>
                    
                    </Carousel>
                </View>

                {/* 列表  */}
                <View style={styles.lists}>
                    <Image 
                        resizeMode="stretch"
                        source={require('../../assets/sy-1.png')
                    } 
                    />
                    <Text style={styles.listtext}>居家维修保养</Text>
                    <Icon 
                    style={styles.listicon}
                    name="arrow-right" 
                    color = 'lightgrey'
                    size="lg"  />
                </View>
                <View style={styles.lists}>
                    <Image 
                        resizeMode="stretch"
                        source={require('../../assets/sy-2.png')
                    } 
                    />
                    <Text style={styles.listtext}>住宿优惠        </Text>
                    <Icon 
                    style={styles.listicon}
                    name="arrow-right" 
                    color = 'lightgrey'
                    size="lg"  />
                </View>
                <View style={styles.lists}>
                    <Image 
                        resizeMode="stretch"
                        source={require('../../assets/sy-3.png')
                    } 
                    />
                    <Text style={styles.listtext}>出行接送        </Text>
                    <Icon 
                    style={styles.listicon}
                    name="arrow-right" 
                    color = 'lightgrey'
                    size="lg"  />
                </View>
                <View style={styles.lists}>
                    <Image 
                        resizeMode="stretch"
                        source={require('../../assets/sy-4.png')
                    } 
                    />
                    <Text style={styles.listtext}>E族活动          </Text>
                    <Icon 
                    style={styles.listicon}
                    name="arrow-right" 
                    color = 'lightgrey'
                    size="lg"  />
                </View>
                
                {/* 按钮 */}
                <View style={styles.buttonv}>
                    <Text style={styles.butte}>发布需求</Text>
                </View>
            </View>
        </ScrollView>
        )
    }
}
const styles = StyleSheet.create({
    //导航栏
    dhview:{
        flexDirection:'row',
        backgroundColor:"#f23030" ,
        height:60,
    },
    dh_input_icon:{
        marginTop:4,
        marginLeft:15,
        marginRight:15
    },
    dhview_input:{
        width:'80%',
        borderRadius:50,
        flexDirection:'row',
        height:40,
        backgroundColor:'white',
        opacity:0.4,
        marginTop:10,
        marginLeft:15
    },
    dh_cart:{
        marginTop:10,
        marginLeft:15,
        marginRight:15
    },
    //轮播图
    Carouselbox:{
        backgroundColor: '#fff',
    },
    containerHorizontalbox:{
        flexGrow: 1,
        alignItems: 'center',
        justifyContent: 'center',
        height: 260,
    },
    horiimg:{
        marginTop:-10,
        height:270,
        width:480
    },
    // 列表
    lists:{
        marginTop:5,
        marginLeft:5,
        marginRight:5,
        flexDirection:'row',
        height:80,
        backgroundColor:"white"
    },
    listtext:{
        fontSize:20,
        color:'grey',
        paddingTop:25,
        paddingRight:180
    },
    listicon:{
        marginTop:20
    },
    //按钮
    buttonv:{
        height:60,
        marginTop:15,
        marginLeft:15,
        marginRight:15,
        backgroundColor:'#f23030',
        borderRadius:5
    },
    butte:{
        color:'white',
        paddingTop:15,
        fontSize:20,
        paddingLeft:180
    }
})