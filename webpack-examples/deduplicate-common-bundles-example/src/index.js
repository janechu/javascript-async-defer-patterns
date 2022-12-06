// eager-load
import(
    /* webpackChunkName: "lazy-1" */
    "defer-eager-dependencies"
).then((value) => {
    value.exec();
});

// lazy-load - this is the default webpack mode
import(
    /* webpackChunkName: "lazy-2" */
    "defer-lazy-dependencies"
).then((value) => {
    value.exec();
});