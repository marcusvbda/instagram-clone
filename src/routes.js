import React from 'react';
import { Image } from 'react-native';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Feed from './pages/feed';
import Logo from '../assets/images/instagram.png';

const Routes = createAppContainer(
    createStackNavigator({
        Feed
    },{
        headerLayoutPreset : 'center',
        defaultNavigationOptions : {
            headerTitle : <Image source={Logo} style={{width: 99, height: 28}} />,
            headerStyle : {
                backgroundColor : "#f5f5f5"
            }
        }
    })
);
export default Routes;