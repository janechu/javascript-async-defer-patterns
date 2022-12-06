// eager-load
import(
    /* webpackMode: "eager" */
    "defer-eager-dependencies"
).then((value) => {
    value.exec();
});

// lazy-load - this is the default webpack mode
import(
    /* webpackChunkName: "lazy" */
    "defer-lazy-dependencies"
).then((value) => {
    value.exec();
});