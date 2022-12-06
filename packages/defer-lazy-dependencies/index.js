const uniqueId = require("lodash-es").uniqueId;

function exec() {
    const reachableDiv = document.getElementById("reachable");
    console.log("lazy", reachableDiv, uniqueId());
}

module.exports = {
    exec
};