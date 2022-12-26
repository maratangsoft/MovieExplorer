import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import InputComponent from '../components/InputComponent'

export default Login = ()=>{
    return(
        <View style={style.root}>
            {/* 로그인 콘텐츠 영역 */}
            <View style={style.content}>
                {/* 로고 */}
                <Text style={style.logo}>MOVIE EXPLORER</Text>
                {/* 이메일, 비밀번호 입력박스 */}
                {/* TextInput은 로그인, 회원가입, 비밀번호리셋 모두 사용되므로 사용빈도가 높음. 일일이 스타일링하기 어려우므로 별도의 컴포넌트로 제작하여 재사용하기 */}
                <InputComponent></InputComponent>
                <InputComponent></InputComponent>
            </View>

            {/* Footer 영역 */}
            <View style={style.footer}>
                <Text style={style.footerCopyright}>MovieExplorer by MaratangSoft</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1,backgroundColor:'#000000'},
    content:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        padding:32,
    },
    footer:{
        borderTopWidth:1,
        borderTopColor:'#d3d3d3',
        padding:8,
    },
    footerCopyright:{
        color:'#929292',
        textAlign:'center',
    },
    logo:{
        color:'#cccccc',
        fontSize:40,
        fontWeight:'bold',
        marginBottom:32,
        textAlign:'center',
    }
})