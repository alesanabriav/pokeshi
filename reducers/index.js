import { combineReducers } from 'redux';
import pokemons from './pokemons';

const reducers = combineReducers({
  pokemons,
});

export default reducers;
