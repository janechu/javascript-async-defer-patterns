function exec() {
    const reachableDiv = document.getElementById("reachable");
    console.log("lazy", reachableDiv);
}

module.exports = {
    exec
};