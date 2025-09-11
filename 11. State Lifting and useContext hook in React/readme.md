**When the props is passed from parent to few level down the hierarchy, it is called props drilling. In other words, passing props through components that don’t even use them is called props drilling.**

### Problems with props drilling:

1. It makes the code messy.
2. Code becomes harder to read and debug.
3. If the structure of props changes then we have change the props at every level.
4. If the value of a state variable changes then it will cause every middle Components to re-render again. Middle components that have nothing to do with these state variables are also being re-rendered.

If we somehow find a way to pass props directly to Fourth component without disturbing Second and Third then how good would it be. So to solve all this problem we have useContext() hook.

### Ques: Can't we directly attach Fourth Component with First?

> No, because third is already attached to fourth and if we attach the fourth with first then fourth functionality will appear twice in the UI. And any further components attached to fourth will also get attached to First. It will destroy the UI.
> We should not render Fourth directly in Main because it breaks the intended component hierarchy and UI flow. Fourth is logically part of Third, so pulling it up into Main will duplicate it on the UI and mix responsibilities. If we just want to avoid prop drilling, the correct solution is to use Context, not to break the hierarchy.

**Suppose if we have a global file where we can store all the state variables and all the components have access to these state variables then there will be no need to pass props to any component because every component will have access to the global file. This is the idea behind useContext.**

This global file is called context.
First we have to create a context using createContext named import from react library which can take any value you want to store. Then we can use this anywhere in the code by using useContext() hook.

`const data = useContext(GlobalContext);` _useContext extracts the stored value from the GlobalContext object._

`<GlobalContext.Provider value={{count:count, setCount:setCount}}>`

> We can supply values like this when key and values are different but when both key and value are same then we can just pass the values.
> `<GlobalContext.Provider value={{count, setCount}}>`
> When we supply new values, old values disappers. You no longer can access the old values.
> value attribute of GlobalContext.Provider can take only one value that's why while inserting two values we have passed it like object.
> these values will only be accessible to those components which are wrapped inside <Context.Provider value={}></Context.Provider>

> The new prop values will only replace old values inside <Context.Provider value={}></Context.Provider>
> Outside this wrapper you still has the access to old values.
