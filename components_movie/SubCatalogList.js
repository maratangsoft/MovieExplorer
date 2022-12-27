import React, { useEffect, useState } from 'react'
import {View, Text, StyleSheet, FlatList, Image, TouchableOpacity} from 'react-native'

export default SubCatalogList = (props)=>{

    //영화목록들을 가진 대량의 데이터 배열 변수: state변수
    let [movies, setMovies] = useState([]) //빈 배열로 초기값 설정

    useEffect(()=>{
        //영화리스트들 가져와서 텍스트로 출력 테스트
        // fetch(props.url)
        // .then((response)=>{return response.text()})
        // .then((text)=>alert(text))

        fetch(props.url)
        .then((response)=>response.json())
        .then(json=>setMovies(json.data.movies))
    })

    return(
        <View>
            {/* 서브타이틀 글씨 */}
            <Text style={style.title}>{props.title}</Text>
            {/* 대량의 영화 리스트를 가로스크롤 배치 */}
            <FlatList
            horizontal={true}
            data={movies}
            renderItem={(obj)=>{
                return (
                    <TouchableOpacity
                    onPress={()=>{props.onPress(obj.item.id)}}
                    activeOpacity={0.8}
                    style={{paddingHorizontal:4}}>
                        <Image 
                        source={{uri:obj.item.large_cover_image}}
                        style={{width:140, height:200}}></Image>
                    </TouchableOpacity>
                )
            }}>

            </FlatList>
        </View>
    )
}

const style = StyleSheet.create({
    title:{
        fontSize:18, 
        fontWeight:'bold',
        color:'#cccccc', 
        padding:8, 
        marginTop:8,
    },
})