# slide-engine-react-ts

 Purpose of project:
 create wizard slide engine that separates redux state and sequence logic from steps itself.
 
all store related (mappers and reducers) and sequence related (next slide evaluators) features are injected from configuration. Concrete slides are unaware of any wizard logic, but only executes injected methods.

