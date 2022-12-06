// lazy-load - this is the default webpack mode
import(
    /* webpackChunkName: "lazy" */
    "defer-lazy"
).then((value) => {
    value.exec();
});
import(
    /* webpackChunkName: "lazy" */
    "defer-eager"
).then((value) => {
    value.exec();
});