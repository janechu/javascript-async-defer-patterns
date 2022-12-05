function exec() {
    const reachableDiv = document.getElementById("reachable");
    console.log("eager", reachableDiv);
}

module.exports = {
    exec
};