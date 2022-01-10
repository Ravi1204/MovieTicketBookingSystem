import { createStore, applyMiddleware, compose } from "redux";

import thunk from "redux-thunk";

import rootReducer from "./reducer";

const initialstate = {};

const middleware = [thunk];

let store;

if (window.navigator.userAgent.includes("chrome")) {

    store = createStore(

        rootReducer,

        compose(

            applyMiddleware(...middleware),

            window._REDUX_DEVTOOLS_EXTENSION_ &&

            Window._REDUX_DEVTOOLS_EXTENSION__()

        )

    );

} else {

    store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

}

export default store;