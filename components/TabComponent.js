import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default TabComponent = (props)=>{
    //선택된 탭에 따라 글씨 색상이 변경되므로...
    let color = props.selected ? 'red' : '#929292'

    //선택된 탭에 따라 아래 경계선의 색상도 변경
    style.container.borderBottomColor = color

    return(
        <TouchableOpacity style={style.container} onPress={props.onPress}>
            <Text style={{color:color}}>{props.label}</Text>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    container:{
        flex:1,
        borderBottomWidth:1,
        borderBottomColor:'#929292',
        paddingBottom:8,
        alignItems:'center',
        justifyContent:'center',
    }
})