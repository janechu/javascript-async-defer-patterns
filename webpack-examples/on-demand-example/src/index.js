const onDemandLoadButton = document.getElementById("on-demand-load");

// eager-load
import(
    /* webpackMode: "eager" */
    "defer-eager"
).then((value) => {
    value.exec();
});

// lazy-load - this is the default webpack mode
onDemandLoadButton.addEventListener("click", () => {
    import(
        /* webpackChunkName: "lazy" */
        "defer-lazy"
    ).then((value) => {
        value.exec();
    });
});
