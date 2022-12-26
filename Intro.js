import { Button, StyleSheet, Text, View } from "react-native"

export default Intro = (props)=>{
    return(
        //원래는 이곳에 프로그레스바를 배치할 것임 (데이터 로딩하는 동안...)
        //우선 테스트 목적으로.. 월요일에 이 부분을 수정할 것임
        <View style={style.root}>
            <Text>Intro</Text>
            <Button title='button' onPress={()=>props.navigation.navigate('LoginNav')}></Button>
        </View>
    )
}
const style = StyleSheet.create({
    root:{flex:1, backgroundColor:'#000000',}
})