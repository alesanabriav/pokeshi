import { StackNavigator } from 'react-navigation';
import Home from './screens/home';
import Pokemon from './screens/pokemon';

const navigator = StackNavigator({
  Home: {
    screen: Home,
  },
  Pokemon: {
    screen: Pokemon,
  },
});

export default navigator;
