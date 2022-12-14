import { createStore, combineReducers, applyMiddleware } from "redux";
import thunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
// import { persistStore, persistReducer,autoRehydrate } from 'redux-persist';
import { persistStore, persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

// import rootReducer from "./reducers";
import { todoReducer } from "./todo/reducers";
import { authReducer } from "./auth/reducers";
import { categoryReducer } from "./category/reducers";
import { blogReducer } from "./blog/reducers.js";
import { groupReducer } from "./group/reducers";
import { contactReducer } from "./contact/reducers";

const rootReducer = combineReducers({
  todo: todoReducer,
  auth: authReducer,
  category: categoryReducer,
  blog: blogReducer,
  group: groupReducer,
  contact: contactReducer,
});
const persistConfig = {
  // Root
  key: "root",
  // Storage Method
  storage,
  // Merge two-levels deep.
  stateReconciler: autoMergeLevel2,
  // Whitelist (Save Specific Reducers)
  whitelist: ["auth"],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const middlewares = [thunkMiddleware];
  const middleWareEnhancer = applyMiddleware(...middlewares);
  let store = createStore(
    persistedReducer,
    composeWithDevTools(middleWareEnhancer)
  );
  let persistor = persistStore(store);
  return { store, persistor };
};
