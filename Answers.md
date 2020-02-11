1. What problem does the context API help solve?

    A: It is a way to pass "Props" around "easier" and "cleaner" , Context provides a way to share values between components without "prop drilling" to every component.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

    A: ACTIONS - packets of information that contain the "type" and "payload", it tells redux what to do and what to use and do it with.

    A: REDUCERS - describe how the state data changes when the action is carried out

    A: STORE - the store is a javascript object that contains all the state data for an application, we never re-write the store data, it is immutable


3. What is the difference between Application state and Component state? When would be a good time to use one over the other?

    A: Application state is global (redux store) for the app and Component state is local for just the component (state = "" , this.setState)
     global state would be good for user name, login inormation, while component state is used for simple rendering items like title of a component


4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

    A: redux-thunk is a middleware that allows us to use redux asynchronously for API calls, it goes instead directly from (action -> reducers) to (action -> thunk-middleware -> reducer )


5. What is your favorite state management system you've learned and this sprint? Please explain why!

    A: redux

    context api seems like it has limitations
