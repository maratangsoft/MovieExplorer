import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'

export default InputComponent = (props)=>{
    return (
        <View style={style.container}>
            <TextInput
            style={style.input}
            placeholder={props.placeholder} //컴포넌트 사용하는 곳에서 지정된 property속성
            secureTextEntry={props.secureTextEntry}
            onChangeText={props.onChangeText} //글씨가 변경될때마다 실행될 메소드
            > 
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
        backgroundColor:'#343434',
        marginVertical:8,
    },
    input:{
        flex:1,
        color:"#929292"
    }
})