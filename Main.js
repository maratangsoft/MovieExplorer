// 앱 제작의 주요 작업 순서#####################################
// 1) 라이브러리 설치: react navigation(화면 전환), AsyncStorage(데이터 저장)
// 2) Intro 화면 컴포넌트 제작
// 3) Login 관련 화면 컴포넌트와 Navigator 제작 [screen_login 폴더]
// 4) 앱의 주요기능 및 서브기능 관련 작업
//   4.1) 앱의 주요기능(영화정보 제공) 화면 컴포넌트들과 Navigator 제작 [screen_movie 폴더]
//   4.2) 앱의 서브기능(커뮤니티 등) 화면 컴포넌트들과 Navigator 제작 [screen_community 폴더]
//############################################################

import React from 'react'
import {StyleSheet} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import Intro from './Intro'
import LoginNav from './navigators/LoginNav'

//앱 전체 화면을 전환하는 최상위 StackNavigator 객체
const RootStack = createStackNavigator()

export default Main = () => {
    return(
        <NavigationContainer>
            <RootStack.Navigator screenOptions={{headerShown:false}}>
                <RootStack.Screen name='Intro' component={Intro}></RootStack.Screen>
                <RootStack.Screen name='LoginNav' component={LoginNav}></RootStack.Screen>
            </RootStack.Navigator>
        </NavigationContainer>
    )
}