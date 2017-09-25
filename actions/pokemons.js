import axios from 'axios';
import { AsyncStorage } from 'react-native';

const TYPE = 'POKEMON';

export function getAllPokemons(url = 'http://pokeapi.co/api/v2/pokemon') {
  return async (dispatch) => {
    dispatch({ type: `LOADING_${TYPE}` });
    try {
      const data = await AsyncStorage.getItem(url);
      if (data !== null) {
        return dispatch({ type: `FETCH_${TYPE}`, payload: JSON.parse(data) });
      }

      const request = await axios.get(url);
      await AsyncStorage.setItem(url, JSON.stringify(request.data));
      return dispatch({ type: `FETCH_${TYPE}`, payload: request.data });
    } catch (e) {
      return dispatch({ type: `FAIL_${TYPE}`, payload: e });
    }
  };
}

export function getOnePokemon(url) {
  return async (dispatch) => {
    dispatch({ type: `LOADING_${TYPE}` });
    try {
      const data = await AsyncStorage.getItem(url);

      if (data !== null) {
        return dispatch({ type: `GET_${TYPE}`, payload: JSON.parse(data) });
      }

      const pokemon = await axios.get(url);
      await AsyncStorage.setItem(url, JSON.stringify(pokemon.data));
      return dispatch({ type: `GET_${TYPE}`, payload: pokemon.data });
    } catch (e) {
      return dispatch({ type: `FAIL_${TYPE}`, payload: e });
    }
  };
}
