import AsyncStorage from "@react-native-async-storage/async-storage"
import { ActivityIndicator, Button, StyleSheet, Text, View } from "react-native"

export default Intro = (props)=>{
    //AsyncStorage에 저장된 로그인 정보(이메일 정보)가 있는지 확인
    //비동기 방식으로 읽어오기에 바로 값을 리턴받지 않고 promise기법[.then()메소드]을 사용한다
    AsyncStorage.getItem('email').then((value)=>{
        //로그인한 적이 있다면 메인화면으로, 없다면 로그인 화면으로 이동
        if(value) props.navigation.replace('MainDrawerNav')
        else props.navigation.replace('LoginNav')
    })

    return(
        // 프로그레스바 돌아가는 화면
        <View style={style.root}>
            <ActivityIndicator color='green' size='large'></ActivityIndicator>
        </View>
    )
}
const style = StyleSheet.create({
    root:{
        flex:1,
        backgroundColor:'#000000',
        justifyContent:'center',
        alignItems:"center",
    }
})