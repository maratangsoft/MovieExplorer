import React,{useState} from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import InputComponent from '../components/InputComponent'
import TabComponent from '../components/TabComponent'

export default SignUp = (props)=>{
    //함수형 컴포넌트에서 화면에 영향을 주는 아주 특별한 변수 state 만들기 - 이 변수값이 변경되면 화면이 자동 갱신
    // 1) 탭버튼의 라벨글씨들 변수
    let [tabs, setTabs] = useState(["휴대폰 번호","이메일"]) //초기값 설정: 변수와 함수 만들기

    // 2) 현재 선택된 탭 번호를 저장하고 있을 변수
    let [tabIndex, setTabIndex] = useState(0) //초기값 0

    //회원가입 완료버튼 클릭했을 때
    const signUp = ()=>{
        //원래는 서버에 데이터를 보내 회원DB에 값을 저장해야 함
        //여기서는 그냥 서버 전송 없이 로그인화면으로 이동
        props.navigation.goBack()
    }

    return(
        <View style={style.root}>
            {/* 콘텐츠 영역 */}
            <View style={style.content}>
                {/* 전화번호와 이메일 중 원하는 정보로 회원가입할 수 있도록 탭으로 구성 */}
                <View style={style.tabContainer}>
                    {/* 탭버튼 2개를 옆으로 배치. 탭버튼은 여러 화면에 사용되기에 별도의 컴포넌트로 제작하여 재사용 */}
                    {/* <TabComponent label={tabs[0]} selected={true}></TabComponent>
                    <TabComponent label={tabs[1]} selected={false}></TabComponent> */}
                    {/* 탭버튼이 여러 개일 수도 있기에 배열의 반복기능 메소드를 이용하여 자동으로 여러 개의 탭버튼을 생성하도록 */}
                    {
                        //배열의 .map메소드: 배열의 요소 갯수만큼 파라미터로 전달되어 함수가 발동함
                        tabs.map((value,index)=>{
                            return <TabComponent label={value} onPress={()=>setTabIndex(index)} selected={index==tabIndex} key={"Tab"+index}></TabComponent>
                        })
                    }
                </View>

                {/* 정보 입력 */}
                <InputComponent placeholder={tabs[tabIndex]}></InputComponent>

                {/* 이메일 입력일때는 비밀번호 입력 컴포넌트도 필요 */}
                {
                    //JSX의 {}영역 안에서는 연산자,변수,함수,객체만 사용 가능 
                    //제어문 사용불가
                    //if(tabIndex==1){}
                    //대신 &&연산자를 통해 앞의 조건이 true일 때 &&다음 코드가 실행되도록 함
                    tabIndex == 1 && <InputComponent placeholder='비밀번호' secureTextEntry={true}></InputComponent>
                }

                {/* 전화번호, 이메일 탭에 따라 버튼의 글씨와 동작이 다름 */}
                {/* 전화번호일 때 버튼 */}
                {
                    tabIndex == 0 && <View style={{width:'100%', margin:16}}><Button title='다음' onPress={()=>setTabIndex(1)}></Button></View>
                }
                {/* 이메일일 때 버튼 */}
                {
                    tabIndex == 1 && <View style={{width:'100%', margin:16}}><Button title='다음' onPress={()=>signUp}></Button></View>
                }
                {/* 전화번호 탭일때 알려주는 메시지 글씨 */}
                {
                    tabIndex == 0 && <Text style={style.telMessage}>Movie Explorer의 업데이트 내용을 SMS로 수신할 수 있으며, 언제든 수신을 취소할 수 있습니다.</Text>
                }
                
            </View>

            {/* Footer 영역 */}
            <View style={style.footer}>
                <Text style={style.footerMsg}>이미 계정이 있으신가요?  <Text onPress={()=>props.navigation.goBack()} style={style.goBack}>로그인</Text></Text>
            </View>
        </View>
    )
}

const style = StyleSheet.create({
    root:{flex:1, backgroundColor:'#000000'},
    content:{
        flex:1,
        width:'100%',
        alignItems:'center',
        padding:32,
    },
    tabContainer:{
        flexDirection:'row',
        marginVertical:16,
    },
    telMessage:{
        textAlign:'center',
        fontSize:12,
        color:'#929292',
        marginHorizontal:8,
    },
    footer:{
        padding:8,
    },
    footerMsg:{
        color:'#929292',
        textAlign:'center',
    },
    goBack:{
        color:'#3796EF',
    }
})