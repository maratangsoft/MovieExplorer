import React, { useEffect } from 'react'
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import AsyncStorage from '@react-native-async-storage/async-storage'
import BigCatalogList from '../components_movie/BigCatalogList'
import SubCatalogList from '../components_movie/SubCatalogList'

export default MovieList = (props)=>{
    //이 함수형 컴포넌트가 화면에 보여질 때 자동실행된ㄴ 함수 등록
    //라이프사이클 메소드용으로 만들어진 HOOK기술 함수
    useEffect(()=>{
        //헤더바(액션바)를 제어
        props.navigation.setOptions({
            headerTitleAlign:'center',
            headerRight: ()=>{
                return(
                    <TouchableOpacity 
                    style={{marginRight:16}} 
                    onPress={()=>props.navigation.openDrawer()}>
                        <Image source={require('../image/ic_menu.png')}></Image>
                    </TouchableOpacity>
                )
            },
            headerLeft: ()=>{
                return(
                    <TouchableOpacity 
                    style={{flexDirection:'row', marginLeft:16, alignItems:'center'}} 
                    onPress={()=>{
                        //디바이스에 저장된 사용자 로그인 정보 삭제
                        AsyncStorage.removeItem('email').then(()=>{
                            props.navigation.replace('Intro')
                        })
                    }}>
                        <Image source={require('../image/ic_profile.png')}></Image>
                        <Text style={{marginLeft:4,color:'black'}}>로그아웃</Text>
                    </TouchableOpacity>
                )
            }
        })
    })

    //인기 영화 정보 불러오는 url [get방식]
    const bigUrl="https://yts.lt/api/v2/list_movies.json?sort_by=like_count&order_by=desc&limit=5";
    // 최신등록순 영화 정보 불러오는 url 
    const recentUrl="https://yts.lt/api/v2/list_movies.json?sort_by=date_added&order_by=desc&limit=10";
    // 평점순 영화 정보 불러오는 url 
    const ratingUrl="https://yts.lt/api/v2/list_movies.json?sort_by=rating&order_by=desc&limit=10";
    // 다운로드순 영화 정보 불러오는 url 
    const downloadUrl="https://yts.lt/api/v2/list_movies.json?sort_by=download_count&order_by=desc&limit=10";

    return(
        <ScrollView style={style.root}>
            {/* 큰 이미지로 가장 높은 선호도를 가진 영화들을 가로 스크롤(페이징)로 보여주기 */}
            {/* fetch작업을 하기엔 코드가 너무 복잡하므로 별도의 component로 분리하여 작업 [components_movie폴더에 제작] */}
            <BigCatalogList
            url={bigUrl}
            onPress={(id)=>{
                props.navigation.navigate('MovieDetail',{id:id})
            }}></BigCatalogList>

            {/* 최신순, 평점순, 다운로드순 영화목록 보여주는 작은 사이즈의 가로스크롤 리스트 */}
            {/* 3종류의 영화목록이 모두 같은 디자인이어서 별도의 컴포넌트로 제작 */}
            <SubCatalogList 
            title='최신등록순' 
            url={recentUrl} 
            onPress={(id)=>{props.navigation.navigate('MovieDetail', {id:id})}}></SubCatalogList>
            <SubCatalogList 
            title='평점순' 
            url={ratingUrl} 
            onPress={(id)=>{props.navigation.navigate('MovieDetail', {id:id})}}></SubCatalogList>
            <SubCatalogList 
            title='다운로드순' 
            url={downloadUrl} 
            onPress={(id)=>{props.navigation.navigate('MovieDetail', {id:id})}}></SubCatalogList>

        </ScrollView>
    )
}

const style = StyleSheet.create({
    root:{flex:1,backgroundColor:'black'},
})