import React from 'react'
import {View,Text, TouchableWithoutFeedback,} from 'react-native'

export default function Angka({props}) {
    const {count,setCount} = props
    // console.warn(props)

    return(
        <>
            <View style={{justifyContent:'center', alignItems:'center', marginBottom: 20,}}>
                <Text style={{color:'black', fontWeight:'bold', fontSize: 34,}}>{count}</Text>
            </View>
            <TouchableWithoutFeedback onPress={()=>setCount(count+1)}>
                <View style={{justifyContent:'center', alignItems:'center', marginBottom: 20,}}>
                    <Text style={{color:'red', fontWeight:'bold', fontSize: 34,}}>Tambah 1</Text>
                </View>
            </TouchableWithoutFeedback>
        </>
    )
}

