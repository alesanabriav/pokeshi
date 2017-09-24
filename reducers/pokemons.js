const TYPE = 'POKEMON';
const initialState = {
  items: [],
  next: '',
  prev: '',
  item: {},
  loading: false,
};

function pokemonsReducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case `FETCH_${TYPE}`:
      return {
        ...state,
        items: [...state.items, ...payload.results],
        next: payload.next,
        prev: payload.prev,
        loading: false,
      };
    case `GET_${TYPE}`:
      return {
        ...state,
        item: payload,
        loading: false,
      };
    case `LOADING_${TYPE}`:
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export default pokemonsReducer;
