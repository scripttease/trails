const initialState = {
  currentUser: null,
// Rails can't do sockets really because it doesn't have paralelism/threading... you could use actioncable but we will just use http requests and ignore this line
  // socket: null,
  error: null,
};

// This is our reducer which takes the initial state as defined above.
export default function reducer(state = initialState, action = {}) {
  return state;
}
