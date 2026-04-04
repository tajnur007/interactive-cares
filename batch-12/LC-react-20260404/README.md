# Performance optimization with “useMemo” and “useCallback” hooks.

The golden rule is: "Don't optimize until you need to."


## The useMemo Hook

### Why?

To avoid expensive, time-consuming calculations on every single render.

### When & Where?

**When**: You have a function that takes a lot of CPU power (e.g., filtering a huge list, complex math).

**Where**: Wrap the calculation inside the component so it only runs when its specific inputs change.



## The useCallback Hook

### Why?

In JavaScript, functions are objects. Every time a component re-renders, any function defined inside it is re-created (it gets a new spot in memory). This causes child components to think their "props" changed, triggering unnecessary re-renders.

### When & Where?

**When**: You are passing a function down to a child component that is wrapped in React.memo.

**Where**: Wrap the event handler or callback in the parent component.



