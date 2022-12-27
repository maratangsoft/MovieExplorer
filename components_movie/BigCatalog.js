import React from 'react'
import {View, Text, Image, TouchableOpacity, StyleSheet, Dimensions} from 'react-native'

export default BigCatalog = (props)=>{
    return(
        <TouchableOpacity
        activeOpacity={0.8}
        onPress={()=>{props.onPress(props.movie.id)}}>
            <Image 
            source={{uri: props.movie.large_cover_image}}
            style={{width:Dimensions.get('window').width, height:300}}></Image>
            {/* 영화 제목, 장르, 개봉일 등의 정보 표시 */}
            <View style={style.infoContainer}>
                <Text style={style.labelYear}>{props.movie.year}년 개봉</Text>
                <View style={style.labelContainer}>
                    <Text style={style.labelTitle}>{props.movie.title}</Text>
                    {/* 장르정보는 배열임... JS는 배열을 출력하면 요소값들이 차례로 나열됨. 단 배열요소마다 구분자로 ,를 붙이도록 */}
                    <Text style={style.labelGenres}>{props.movie.genres.join(',')}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const style = StyleSheet.create({
    infoContainer:{
        position:'absolute',
        bottom:0,
        width:'100%',
        alignItems:'flex-start',
    },
    labelYear:{
        color:'white',
        fontWeight:'bold',
        backgroundColor:'#e70915',
        padding:8,
        marginLeft:4,
    },
    labelContainer:{
        backgroundColor:'#141414',
        width:'100%',
        padding:8,
        opacity:0.8,
    },
    labelTitle:{
        fontSize:18,
        color:'white',
        fontWeight:'bold',
        padding:8,
    },
    labelGenres:{
        marginLeft:8
    }
})