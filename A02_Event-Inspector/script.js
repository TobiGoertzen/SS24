"use strict";
window.addEventListener("load", handleLoad);
function handleLoad(_event) {
    document.addEventListener("mousemove", setInfoBox);
    document.addEventListener("click", logInfo);
    document.addEventListener("keyup", logInfo);
    document.body.addEventListener("click", logInfo);
    document.body.addEventListener("keyup", logInfo);
    let div0 = document.getElementById("div0");
    let div1 = document.getElementById("div1");
    div0.addEventListener("click", logInfo);
    div1.addEventListener("keyup", logInfo);
    let button = document.querySelector("button");
    button.addEventListener("click", customEvent);
}
function customEvent() {
    let customEvent = new CustomEvent("hallo");
    let button = document.querySelector("button");
    button.dispatchEvent(customEvent);
    document.addEventListener("hallo", newFunction);
}
function newFunction(_event) {
    console.log(_event);
}
function setInfoBox(_event) {
    let x = _event.pageX;
    let y = _event.pageY;
    let span = document.querySelector("span");
    span.style.left = x + 10 + "px";
    span.style.top = y + 10 + "px";
    span.innerHTML = "mouseposition: " + x + "" + y + "" + "target" + _event.target;
}
function logInfo(_event) {
    console.log(_event.type);
    console.log(_event.target);
    console.log(_event.currentTarget);
    console.log(_event);
}
//# sourceMappingURL=script.js.map