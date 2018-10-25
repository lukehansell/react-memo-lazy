# React 16.6 memo and lazy

Using lazy loading and suspense to dynamically load a component
(see loading of `Counter.js` in `index.js`)
- allows for better dynamic loading of components and bundle splitting


Using memo with functional components to prevent re-render when parent's
state changes.
(`Hello.js` and `Counter.js` implementations)
- performance improvements as components aren't re-rendered if the props
  don't change when the parent re-renders.