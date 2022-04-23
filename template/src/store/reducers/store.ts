import { createStore, applyMiddleware, combineReducers } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage
import thunk from 'redux-thunk'
import data from './data'

const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['data'], // elements that will be persisted
    blacklist: [] // elements that will not be persisted
}

const rootReducer = combineReducers({
    data
})

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = createStore(persistedReducer, applyMiddleware(thunk))
const persistor = persistStore(store)

export { store, persistor }
