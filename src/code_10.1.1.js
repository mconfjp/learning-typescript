"use strict";
function logWrapper(callback) {
    return (input) => {
        console.log("Input:", input);
        callback(input);
    };
}
const func = logWrapper((input) => {
    console.log(input.length);
});
func("カスなんて言わないよ...");
