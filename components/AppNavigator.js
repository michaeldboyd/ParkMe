import { createStackNavigator } from 'react-navigation';
import Home from "./Home"
import OtherPage from './OtherPage';
import ListingListView from './ListingsListView';
import DetailsView from './DetailsView';

const AppNavigator = createStackNavigator({
  Home: { screen: ListingListView},
  OtherPag: { screen: OtherPage},
  Details: {screen: DetailsView}
});

export default AppNavigator;
