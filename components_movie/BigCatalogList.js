import React, { useEffect,useState } from 'react'
import {View, FlatList, StyleSheet, Text} from 'react-native'
import BigCatalog from './BigCatalog'

export default BigCatalogList = (props)=>{
    //영화정보 데이터들을 가진 배열변수 (단, 화면에 영향을 주는 state로 만들기)
    //FlatList가 보여줄 대량의 데이터들
    let [movies, setMovies] = useState([]) //빈 배열로 초기화

    //영화정보를 받아오는 메소드
    useEffect(()=>{
        //영화정보 url을 통해 json데이터를 읽어오기
        //JS는 네트워크 작업을 쉽게 해주기 위해 fetch라는 라이브러리가 존재하며
        //RN에서는 이 fetch라이브러리가 기본 내장되어 있음
        //fetch()는 비동기 방식이기에 promise [.then()]기법 사용
        // //fetch결과를 text로 확인
        // fetch(props.url)
        // .then((response)=>{ return response.text()})
        // .then((text)=>{alert(text)})

        //fetch결과를 json분석하여 객체로 변환하여 받기
        fetch(props.url)
        .then((response)=>{return response.json()})
        .then((json)=>{setMovies(json.data.movies)})
    })

    return (
        <View style={style.container}>
            <FlatList
            horizontal={true}
            pagingEnabled={true}
            data={movies}
            renderItem={(obj)=>{
                //영화 1개의 정보를 보여주는 화면을 별도의 컴포넌트로 제작
                return <BigCatalog movie={obj.item} onPress={props.onPress}></BigCatalog>
            }}>
            </FlatList>
        </View>
    )
}

const style=StyleSheet.create({
    container:{height:300, marginBottom:8},
})