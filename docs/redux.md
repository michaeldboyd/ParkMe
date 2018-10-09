# Redux

This app uses Redux as a single source of truth for state management.
There are 3 main parts of Redux: `actions`, `reducers`, and `state`.

`state` is the source of truth, the actual data being manipulated.
By convention, it's read-only and should never be mutated directly.
`state` can be defined all in one file, or in different parts spread
throughout the reducers. This makes it easy to separate concerns or
different types of state.

`actions` are the only part of the store that get called directly
by other code. They contain an action type, and an optional payload.
These events are immutable and happen in a defined order.

`reducers` are how `state` gets mutated. Every time an action is 
dispatched, every single defined reducer is called with the current
`state` and the `action` and its type. It's up to the reducer to decide
if it cares about mutating the state based on the action, or if it
would rather ignore it and pass the current state through.

There are more tutorials and better ways of explaining things [here](https://redux.js.org/basics).

There are also helpful comments in the example store files. I recommend
beginning with `exampleActions.js` and then continuing with 
`exampleReducer.js`. Come back here when you've read those.

## Integration with React

It's possible to just pass the store's current state, actions, and the
dispatch function to the main `<App />` and then pass them to every 
component that needs it. 

```javascript
//const state = store.getState()
//store.dispatch(actions.anAction)

export default () => {
  return <App actions={actions} store={store} />
}
```

That's totally okay, but it means that basically
every part of the component tree re-renders any time any of the state 
changes. It's easy to reason about, but not ideal.

`react-redux` provides an easy connector between React components
and the Redux store, without having to manually pass the store and the
actions to every component. This is the `connect` function, which is
wrapped around a component. This is an example of a higher-order
component, which is a similar concept to thunks.

```javascript
class Thing extends React.Component { ... }
export default connect(Thing)
```

This doesn't just happen automagically, though. `connect` needs two
functions passed to it that describes how to turn the current
state into props for the component, and which actions should be 
accessible to the component through it's props.

`mapStateToProps` receives the state and the component's own props
as its arguments, and returns an object that is merged into the 
component's properties. 

`mapDispatchToProps` receives the dispatch function and the component's
own props as its arguments, and returns an object of functions that
can be called as component properties that trigger actions.

See the `react-redux` [docs](https://redux.js.org/basics/usagewithreact) for more.

Also, check out `<App />`, `toggleReducer`, and `toggleActions.js` for
a working example!
