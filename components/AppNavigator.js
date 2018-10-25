import { createStackNavigator } from 'react-navigation';
import Home from "./Home"
import OtherPage from './OtherPage';
import ListingListView from './ListingsListView';
import DetailsView from './DetailsView';

const AppNavigator = createStackNavigator({
  Home: {
    screen: ListingListView,
    navigationOptions: {
      headerTitle: "Listings",
      headerStyle: {
        backgroundColor: "#3D6DCC"
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 20
      }


    }
  },
  OtherPag: { screen: OtherPage },
  Details: { screen: DetailsView }
});

export default AppNavigator;
