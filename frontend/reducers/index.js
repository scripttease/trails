// A reducing function (aka reducer) takes an accumulation and a value (being accumulated) and returns a new accumulation.
// In Redux, the accumulated value is the state object, and the values being accumulated are actions. Reducers calculate a new state given the previous state and an action. They must be pure fns.
// Different reducers handle different parts of the global state.
// The state parameter is different for every reducer, and corresponds to the part of the state it manages.

import { combineReducers }  from 'redux';
import { routeReducer }     from 'redux-simple-router';
import session              from './session';

// The combineReducers helper function turns an object whose values are different reducing functions into a single reducing function you can pass to createStore.
// The resulting reducer calls every child reducer, and gathers their results into a single state object. The shape of the state object matches the keys of the passed reducers
export default combineReducers({
  routing: routeReducer,
  session: session,
});
