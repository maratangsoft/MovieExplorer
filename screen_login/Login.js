import React from 'react'
import { Alert, Button, StyleSheet, Text, View } from 'react-native'
import InputComponent from '../components/InputComponent'
import AsyncStorage from '@react-native-async-storage/async-storage'

export default Login = (props)=>{
    let email=""
    let password=""

    //로그인버튼 클릭시 실행될 콜백메소드
    const onClickLogin = ()=>{
        alert(email+", "+password)

        //원래는 서버에 전송하여 로그인여부를 확인
        //이 예제에서는 연습목적으로 단순히 AsyncStorage에 이메일, 비번 저장만 하고 메인화면으로 이동
        //AsyncStorage: 안드로이드의 SharedPreferences와 같은 역할의 데이터 저장용 라이브러리
        AsyncStorage.setItem('email', email).then(()=>{
            Alert.alert('로그인 성공', '환영합니다, '+email+'님.')

            //로그인 후 Movie List로 이동
            props.navigation.replace('MainDrawerNav')
        })
    }

    return(
        <View style={style.root}>
            {/* 로그인 콘텐츠 영역 */}
            <View style={style.content}>
                {/* 로고 */}
                <Text style={style.logo}>MOVIE EXPLORER</Text>

                {/* 이메일, 비밀번호 입력박스 */}
                {/* TextInput은 로그인, 회원가입, 비밀번호리셋 모두 사용되므로 사용빈도가 높음. 일일이 스타일링하기 어려우므로 별도의 컴포넌트로 제작하여 재사용하기 */}
                <InputComponent onChangeText={(value) => {email=value}} placeholder='이메일' secureTextEntry={false}></InputComponent>
                <InputComponent onChangeText={value => password=value} placeholder='비밀번호' secureTextEntry={true}></InputComponent>

                {/* 비밀번호 재설정 링크 */}
                <Text onPress={()=>props.navigation.navigate('ResetPassword')} style={style.resetPW}>비밀번호 재설정</Text>

                {/* 로그인 버튼 */}
                <View style={{width:'100%', marginBottom:24}}>
                    <Button title='로그인' color='#3796EF' onPress={onClickLogin}></Button>
                </View>

                {/* 회원가입 링크 */}
                <Text style={style.signup}>
                    계정이 없으신가요?  <Text onPress={()=>props.navigation.navigate('SignUp')} style={style.signupLink}>회원가입</Text>
                </Text>
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
    logo:{
        color:'#cccccc',
        fontSize:40,
        fontWeight:'bold',
        marginBottom:32,
        textAlign:'center',
    },
    resetPW:{
        width:'100%',
        textAlign:'right',
        marginTop:8,
        marginBottom:16,
        marginRight:8,
        color:'#3796EF'
    },
    signup:{
        color:'#929292',
    },
    signupLink:{
        color:'#3796EF',
    },
    footer:{
        padding:8,
    },
    footerCopyright:{
        color:'#929292',
        textAlign:'center',
    },
    
})