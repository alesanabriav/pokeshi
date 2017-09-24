import fetch from '../lib/fetch';
import axios from 'axios';

const TYPE = 'POKEMON';

export function getAllPokemons(url = 'http://pokeapi.co/api/v2/pokemon') {
  return async (dispatch) => {
    dispatch({ type: `LOADING_${TYPE}` });
    try {
      const request = await axios.get(url);
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
      const pokemon = await axios.get(url);
      return dispatch({ type: `GET_${TYPE}`, payload: pokemon.data });
    } catch (e) {
      return dispatch({ type: `FAIL_${TYPE}`, payload: e });
    }
  };
}
