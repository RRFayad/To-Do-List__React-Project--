/*
    React Context Review
    0. Setup
        - create the store folder
        - create the xpto-context.js file;

    1. Creating the AuthContext    
    - I use Capital letter for the AuthCOntext, because it will contain a React component;
    - The value is the first value for my context (usually an object);

    2. Create the Provider
    * The provider is regular React COmponent responsible for providing the value to all the components that need values from the Context AND to update the context values;
    - This component will return the context.Provider, and we will wrap all our app with it (in the index.js file);
        - We can then accept props and return props.children;
        - So that we can now wrap our Provider component around an other component, and those will be wrapped by context automatically;
    
    3. Manage the context data in the provider
        - Inside our component, we create our const 'contextValue' object;
        - And we provide it's latest values as the 'value' prop in the Provider
            * Thats when we need to work with useState;
        - We then set our initial states (including the methods) and feed our context Value, which will be an object with the same properties and methods as our first Context
            *Remembering that we don't only want to manage the state values in the other components, but also  functions that will change those values, exposing pointers

    4. Export
        - export the ContextProvider (by it's name);
        - export default the Context;

    5. Wrap the Context Provider around all components we want to interact
        - Probably it's easier to wrap the <App/> in the index file;
        - Import and wrap the Provider component

    6. Make the Component Interact with the Context
        - import useContext (in the component we want the context);
        - use useContext with our context object as an arg e.g.:
            const authCtx = useContext(AuthContext);
    
    7. Now it's just about creating the logic with the values in the ctx object!
*/

const ToDoListContext = React.createContext({
    toDos:[],
    addTodo:() => {},
    checkDone:() => {},
    removeTodo:() => {},
})