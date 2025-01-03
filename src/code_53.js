"use strict";
let nothingInGivesString;
let nothingInGivesString_let;
const songs = ["cookie party", "A to Z", "Click"];
function runOnSongs(getSongAt) {
    for (let i = 0; i < songs.length; i++) {
        console.log(getSongAt(i));
    }
}
function getSongAt(aaa) {
    return `${songs[aaa]}`;
}
runOnSongs(getSongAt);
// 動く！
