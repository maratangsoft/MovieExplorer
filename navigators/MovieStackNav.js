import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'
import MovieList from '../screen_movie/MovieList'
import MovieDetail from '../screen_movie/MovieDetail'

const Stack = createStackNavigator()

export default MovieStackNav = ()=>{
    return(
        <Stack.Navigator>
            <Stack.Screen name='MovieList' component={MovieList}></Stack.Screen>
            <Stack.Screen name='MovieDetail' component={MovieDetail}></Stack.Screen>
        </Stack.Navigator>
    )
}