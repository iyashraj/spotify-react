import {SET_USER, SET_TOKEN, SET_PLAYLISTS, SET_DISCOVER_WEEKLY} from './Actions'

const initialState= {
    user: null,
    token: null,
    playlists: [],
    playing:false,
    discover_weekly: []
}

// const state = initialState
const reducers = (state=initialState, action) => {
    switch(action.type){
        case SET_USER:
            return {
                ...state,
                user: action.user,
            }
        case SET_TOKEN: 
            return {
                ...state,
                token: action.token,
            }
        case SET_PLAYLISTS:
            return {
                playlists : action.playlists,
            }
        case SET_DISCOVER_WEEKLY:
            return {
                discover_weekly: action.discover_weekly,
            }
        default : 
            return state;
    }
}

export default reducers