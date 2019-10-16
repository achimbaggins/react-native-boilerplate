import React, {useEffect} from 'react'
import {
    View,Text, TouchableWithoutFeedback,Image,Dimensions,
    ActivityIndicator,ImageBackground
} from 'react-native'
import {images} from '../../assets'

export default function Splash(props) {
    const {width,heigth} = Dimensions.get('window')
    useEffect(()=>{
        setTimeout(() => {
            props.navigation.navigate('NewsHome')
        }, 3500);
    },[])

    return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
            <Image resizeMode='cover' source={images.logo} style={{width:50,height:50}}/>
            <View style={{height:10}}/>
            <Image resizeMode='cover' source={images.logotype} style={{width:241,height:36}}/>
            <View style={{height:10}}/>
            <Image resizeMode='cover' source={images.logotag} style={{width:143,height:17}}/>
            <View style={{height:10}}/>
            <TouchableWithoutFeedback onPress={()=>props.navigation.navigate('NewsHome')}>
                <ActivityIndicator size='small' color='#399939'/>
            </TouchableWithoutFeedback>
            <ImageBackground
                resizeMode='contain'
                source={images.building}
                style={{justifyContent:'center', alignItems:'center',height:250,width:'100%',position:'absolute',bottom:0}}
            />
        </View>
    )
}

