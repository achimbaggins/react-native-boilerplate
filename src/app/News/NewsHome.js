import React, {useState, useContext,useEffect} from 'react'
import {
    View, Text, TouchableWithoutFeedback,Dimensions,
} from 'react-native'
import {Controller} from '../../controllers'

export default function NewsHome(props) {
    const [reload, setReload] = useState(false)
    const {width,heigth} = Dimensions.get('window')
    const {actions,newsReducer} = useContext(Controller)
    useEffect(()=>{ actions.get_news(1) },[])
    useEffect(()=>{ actions.get_news(1) },[reload])
    return(
            <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <TouchableWithoutFeedback onPress={()=>props.navigation.goBack()}>
                    <View style={{width, height: 60, backgroundColor: 'orange',padding:5, margin: 20, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>Hei It's Me</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>actions.get_news(1)}>
                    <View style={{width, height: 60, backgroundColor: '#399939',padding:5, margin: 20, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>GET NEWS</Text>
                    </View>
                </TouchableWithoutFeedback>

                <TouchableWithoutFeedback onPress={()=>setReload(!reload)}>
                    <View style={{width, height: 60, backgroundColor: 'red',padding:5, margin: 20, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'white'}}>RELOAD {reload ? 'TRUE' : 'FALSE'}</Text>
                    </View>
                </TouchableWithoutFeedback>
            </View>
    )
}

