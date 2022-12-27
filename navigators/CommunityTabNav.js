import React from 'react'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Community from '../screen_community/Community'
import Favorite from '../screen_community/Favorite'
import MapTab from '../screen_community/MapTab'

//MaterialTopTabNavigator 객체 생성
const TopTab = createMaterialTopTabNavigator()

export default CommunityTabNav = ()=>{
    return(
        <TopTab.Navigator>
            <TopTab.Screen name='Community' component={Community}></TopTab.Screen>
            <TopTab.Screen name='Favorite' component={Favorite}></TopTab.Screen>
            <TopTab.Screen name='MapTab' component={MapTab}></TopTab.Screen>
        </TopTab.Navigator>
    )
}