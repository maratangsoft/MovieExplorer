import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default InputComponent = ()=>{
    return (
        <View style={style.container}>
            <TextInput
            style={style.input}>

            </TextInput>
        </View>
    )
}

const style = StyleSheet.create({
    container:{
        width:'100%',
        height:40,
        paddingHorizontal:16,
        borderWidth:1,
        borderColor:'#D3D3D3',
        borderRadius:4,
        backgroundColor:'#FAFAFA',
        marginVertical:8,
    },
    input:{
        flex:1,
    }
})