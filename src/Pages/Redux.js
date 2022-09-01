// * import React
import React from "react";
// * import Redux
import Redux from "redux";
const { createStore } = Redux;

// export default function Redux() {
// * membuat initialState
const initialState = {
  counter: 0,
};

// * membuat "reducer" // Reducer
const counter = (state = initialState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { counter: state.counter + 1 };
    case "DECREMENT":
      return { counter: state.counter - 1 };

    default:
      return state;
  }
};

// * panggil function createStore // createStore()
let store = createStore(counter);

// * panggil function "subscribe" // Subscribe()
store.subscribe(() => console.log(store.getState()));

// * panggil function "dispatch" // Dispatch()
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DECREMENT" });
store.dispatch({ type: "DECREMENT" });

//   return (
//     <div className="redux-counter-page">
//       <h1>Redux</h1>
//     </div>
//   );
// }
