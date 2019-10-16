import { createStackNavigator, createAppContainer } from 'react-navigation';

import Angka from '../app/Angka';
import Splash from '../app/Splash';
import Home from '../app/Home';
import {NewsHome} from '../app/News'

const AppNavigator = createStackNavigator({
  Home          : { screen: Home },
  Splash        : { screen: Splash },
  NewsHome      : { screen: NewsHome },
}, {
  initialRouteName: 'Splash',
  headerMode      : 'none'
})

export default Router = createAppContainer(AppNavigator);

