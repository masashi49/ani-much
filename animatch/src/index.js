import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { combineReducers, createStore } from "redux"; //storeを使用する

const seasonRecucer = (state = "", action) => {
  // stateを変化させるreducer
  switch (action.type) {
    case "CHANGE_SEASON": //actionのtypeを指定してどのように変化させるか決める
      console.log(1);
      return (state = action.payload.newState);
    default:
      return state;
  }
};

const userReducer = (state = "", action) => {
  switch (action.type) {
    case "CHANGE_USER":
      console.log(3);
      return (state = action.payload.newState);
    case "CHANGE_SEASON": //actionのtypeを指定してどのように変化させるか決める
      console.log(2);
      return (state = action.payload.newState);
    default:
      return state;
  }
};

const allReducers = combineReducers({
  //ここに並べたものから順番にreducerのifやswithを全て読んでいく
  season: seasonRecucer,
  user: userReducer
});

const store = createStore(allReducers, {
  product: [{ name: "iphone" }],
  user: "masashi"
}); //store設置 reducerは必須

const changeSeason = {
  type: "CHANGE_SEASON", //typeはうっかり同じ名前をつけないよう、別ファイルでjsonやconstで管理するのがよさそう。
  payload: {
    newState: "summer"
  }
};

const changeUser = {
  type: "CHANGE_USER",
  payload: {
    newState: "MASASHI"
  }
};

store.dispatch(changeSeason); // actionを実行し、reducerに渡す
store.dispatch(changeUser);

console.log(store.getState());

ReactDOM.render(<App />, document.getElementById("root"));
serviceWorker.unregister();
