import { createStackNavigator } from 'react-navigation';
import Home from "./Home"
import OtherPage from './OtherPage';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  OtherPage: { screen: OtherPage},
});

export default AppNavigator;
