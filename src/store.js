import { createStore, combineReducers, compose } from 'redux';
import firebase from  'firebase';
import 'firebase/firestore';
import { reactReduxFirebase, firebaseReducer} from 'react-redux-firebase';
import { reduxFirestore, firestoreReducer} from 'redux-firestore';

// Reducers 

const firebaseConfig = {
    apiKey: "AIzaSyDkcybMDzMKrlUfC3_N13YCQEB9dr5wgCM",
    authDomain: "reactclientpanel-d7269.firebaseapp.com",
    databaseURL: "https://reactclientpanel-d7269.firebaseio.com",
    projectId: "reactclientpanel-d7269",
    storageBucket: "reactclientpanel-d7269.appspot.com",
    messagingSenderId: "852138308135"
};


//react-redux-firebase config

const rrfConfig = {
    userProfile: 'users',
    useFirestoreForProfile: true 
}

// init firebase

firebase.initializeApp(firebaseConfig);

//init firestore

const firestore = firebase.firestore();
const settings = { timestampsInSnapshots: true};
firestore.settings(settings);

const  createStoreWithFirebase = compose(
    reactReduxFirebase(firebase, rrfConfig),
    reduxFirestore(firebase)
)(createStore);

const rootReducer = combineReducers({
    firebase: firebaseReducer, 
    firestore: firestoreReducer
});

//inital state

const initialState = {};


//create store
const store = createStoreWithFirebase(rootReducer, initialState, compose(reactReduxFirebase(firebase),
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;