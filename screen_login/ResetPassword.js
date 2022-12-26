import React,{useState} from 'react'
import { Alert, Button, Image, StyleSheet, Text, View } from 'react-native'
import InputComponent from '../components/InputComponent'
import TabComponent from '../components/TabComponent'

export default ResetPassword = (props)=>{
    //화면에 영향을 주는 아주 특별한 멤버변수 state로 만들기
    //탭 버튼에 보여질 라벨 글씨들을 가진 멤버변수(배열)
    let [tabs, setTabs] = useState(['이메일','휴대폰 번호'])
    let [tabIndex, setTabIndex] = useState(0)
    //탭에 따라 보여질 메시지 글씨들을 가진 일반 배열변수
    const messages=[
        "이메일을 입력하면 임시 비밀번호를 보내드립니다.",
        "휴대폰 번호를 입력하면 임시 비밀번호를 보내드립니다."
    ]

    return(
        <View style={style.root}>
            {/* content영역 */}
            <View style={style.content}>
                {/* 자물쇠 이미지 */}
                <View style={style.lockImageContainer}>
                    <Image style={style.lockImage} source={require('../image/lock.png')}></Image>
                </View>

                {/* 타이틀 */}
                <Text style={style.title}>로그인에 문제가 있나요?</Text>

                {/* 탭에 따라 메시지가 다르게 노출됨 */}
                <Text style={style.message}>{messages[tabIndex]}</Text>
                
                {/* 탭 만들기: 이미 만들어놓은 TabComponent */}
                <View style={style.tabContainer}>
                    {
                        tabs.map((value,index)=>{
                            return <TabComponent label={value} onPress={()=>setTabIndex(index)} selected={index==tabIndex} key={"Tab"+index}></TabComponent>
                        })
                    }
                </View>

                {/* 입력상자 만들기: 미리 만들어놓은 입력상자 컴포넌트를 재사용 */}
                <InputComponent placeholder={tabs[tabIndex]}></InputComponent>

                {/* 다음 버튼 */}
                <View style={{width:'100%',margin:16,}}>
                    <Button title='다음' onPress={()=>{Alert.alert('임시비밀번호가 발송되었습니다.','로그인 후 정보수정을 통해 안전한 비밀번호로 변경하세요.')}}></Button>
                </View>
            </View>

            {/* footer 영역 */}
            <View style={style.footer}>
                <Text style={style.goBack} onPress={()=>props.navigation.goBack()}>로그인화면으로 돌아가기</Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1, backgroundColor:"#000000"},
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32,
    },
    lockImageContainer:{
        padding:24,
        borderWidth:2,
        borderColor:'#cccccc',
        borderRadius:100,
        margin:16,
    },
    lockImage:{
        tintColor:'#cccccc'
    },
    title:{
        color:'#cccccc',
        marginBottom:16,
    },
    message:{
        textAlign:'center',
        color:'#cccccc',
        marginBottom:16,
    },
    tabContainer:{
        flexDirection:'row',
        marginBottom:16,
    },
    footer:{
        padding:8,
    },
    goBack:{
        color:'#3796EF',
        textAlign:'center',
    }
})