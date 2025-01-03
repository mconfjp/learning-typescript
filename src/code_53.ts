
let nothingInGivesString: () => string;
type nothingInGivesString =  () => string;

let nothingInGivesString_let: nothingInGivesString;


const songs = ["cookie party", "A to Z", "Click"];

function runOnSongs(getSongAt: (index:number) => string) {
    for (let i = 0; i < songs.length; i++) {
        console.log(getSongAt(i));
    }
}

function getSongAt(aaa: number) {
    return `${songs[aaa]}`;
}

runOnSongs(getSongAt);
// 動く！


