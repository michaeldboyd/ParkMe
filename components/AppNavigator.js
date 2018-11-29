import { createStackNavigator } from 'react-navigation';
import MapMarkerView from "./MapMarkerView"
import OtherPage from './OtherPage';
import ListingListView from './ListingsListView';
import DetailsView from './DetailsView';
import AddListingView from './AddListingView';

const AppNavigator = createStackNavigator({

  MapMarkerView: { screen: MapMarkerView,
    navigationOptions: {
      headerTitle: "ParkME",
      headerStyle: {
        backgroundColor: "#3D6DCC"
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 20
      },
      headerBackTitle: "Map",
    }
  },
  ListView: {
    screen: ListingListView,
    navigationOptions: {
      headerTitle: "ParkME",
      headerStyle: {
        backgroundColor: "#3D6DCC"
      },
      headerTitleStyle: {
        color: 'white',
        fontSize: 20
      },
      headerBackTitle: "List View",
      headerBackTitleStyle: {
        color: 'white'
      },
      headerTintColor: 'white',
    }
  },
  OtherPag: { screen: OtherPage },
  Details: { screen: DetailsView },
  Add: { screen: AddListingView }
});

export default AppNavigator;
