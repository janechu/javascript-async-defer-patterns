// eager-load
import(
    /* webpackMode: "eager" */
    "defer-eager"
).then((value) => {
    value.exec();
});

// lazy-load - this is the default webpack mode
import(
    /* webpackChunkName: "lazy" */
    "defer-lazy"
).then((value) => {
    value.exec();
});