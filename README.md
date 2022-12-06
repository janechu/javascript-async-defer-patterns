# JavaScript loading patterns

This project seeks to demonstrate the different methods by which scripts may be loaded onto a web site/application and where this may be beneficial to getting critical functionality to the user sooner and lazy loading non-critical functionality.

The `webpack-examples/` folder will show the implementation of an example using `webpack`.

These examples seek to inform how loading patterns are best optimized.

## Examples

| Name | Description |
|-|-|
| Defer | Using the typical webpack setup the entry point script is deferred until the page content is loaded and any scripts specified to be lazy loaded are delayed |
| On Demand | Lazy loaded scripts are only loaded once a user action has been achieved |
| Common Bundles | Bundling shared dependencies together and lazy loading them |
| Common Bundles Eager | Bundling shared dependencies together and eagerly loading them |
| Deduplicate | Bundling shared dependencies to de-duplicate any that might be eagerly or lazy loaded and force them to be eagerly loaded, this is done automatically by webpack |
| Deduplicate Common Bundles | Bundling multiple lazy loaded bundles and deduplicating dependencies shared between them |