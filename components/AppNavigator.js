import { createStackNavigator } from 'react-navigation';
import Home from "./Home"
import OtherPage from './OtherPage';
import ListingListView from './ListingsListView';
import DetailsView from './DetailsView';
import AddListingView from './AddListingView';

const AppNavigator = createStackNavigator({
  Home: { screen: Home },
  OtherPag: { screen: OtherPage },
  Details: { screen: DetailsView },
  Add: { screen: AddListingView }
});

export default AppNavigator;
