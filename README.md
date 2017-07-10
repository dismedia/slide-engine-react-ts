# slide-engine-react-ts

Project is an implementation of a generic slider/wiazrd mechanism that separates redux state and sequence logic from steps itself.
 
All store related (mappers and reducers) and slide-order related (next slide evaluators) features are injected from configuration. Concrete slides are unaware of any wizard logic, but only execute injected methods.

