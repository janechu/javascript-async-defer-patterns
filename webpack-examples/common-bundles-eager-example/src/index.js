// eager-load
import(
    /* webpackMode: "eager" */
    "defer-lazy"
).then((value) => {
    value.exec();
});
import(
    /* webpackMode: "eager" */
    "defer-eager"
).then((value) => {
    value.exec();
});