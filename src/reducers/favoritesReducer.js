import { ADD_FAVORITES, REMOVE_FAVORITES, TOGGLE_FAVORITES } from "../actions/movieActions";

const initialState = {
    favorites: [],
    displayFavorites: true
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        
        case TOGGLE_FAVORITES:
            return {
                ...state,
                displayFavorites: !state.displayFavorites
            }
        case ADD_FAVORITES:
            const newFavorite = {
                ...action.payload
            }
            return {
                ...state,
                favorites: [...state.favorites, newFavorite]
            }
        case REMOVE_FAVORITES:
            return {
                ...state,
                favorites: state.favorites.filter(item => (action.payload !== item.id))
            }
        default:
            return state
    }
}

export default reducer