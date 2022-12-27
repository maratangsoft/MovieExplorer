import React, { useEffect,useState } from 'react'
import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from 'react-native'
import BigCatalog from '../components_movie/BigCatalog'

export default MovieDetail = (props)=>{
    //영화 상세정보를 저장할 객체 변수 - state변수로
    let [movie, setMovie] = useState(null)

    useEffect(()=>{
        const id = props.route.params.id
        //전달받은 id로 영화상세정보를 fetch하여 제대로 받아왔는지 text로 테스트
        // fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        // .then((response)=>{return response.text()})
        // .then((text)=>{alert(text)})

        //전달받은 id로 영화 상세정보를 fetch하여 json분석 및 객체로 변환
        fetch('https://yts.lt/api/v2/movie_details.json?movie_id='+id+'&with_image=true&with_cast=true')
        .then((response)=>{return response.json()})
        .then((json)=>{setMovie(json.data.movie)})
    })

    return(
        //fetch된 영화 데이터가 있는지 검사
        movie? (
            <ScrollView style={style.root}>
                {/* 큰 타이틀이미지는 기존 컴포넌트를 재사용 */}
                <BigCatalog movie={movie}></BigCatalog>

                {/* 영화정보 출력 */}
                <View>
                    <Text style={style.title}>영화정보</Text>
                    <View style={style.infoContainer}>
                        <Text>{movie.runtime}분</Text>
                        <Text>평점: {movie.rating}</Text>
                        <Text>좋아요: {movie.like_count}</Text>
                    </View>
                </View>

                {/* 줄거리 정보 */}
                <View>
                    <Text style={style.title}>줄거리</Text>
                    <Text style={style.desc}>{movie.description_full}</Text>
                </View>
            </ScrollView>
        ):(
            <View style={{flex:1,justifyContent:'center',alignItems:'center', backgroundColor:'black'}}>
                <ActivityIndicator size='large' color='#E70915'></ActivityIndicator>
            </View>
        )
    )
}

const style = StyleSheet.create({
    root:{flex:1,backgroundColor:'black'},
    title:{
        fontSize:18,
        fontWeight:'bold',
        padding:16,
        color:'#cccccc',
    },
    infoContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        paddingHorizontal:16,
    },
    desc:{
        paddingHorizontal:16,
    }
})