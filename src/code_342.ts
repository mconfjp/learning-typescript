


let geneticist = Math.random() > 0.5
    ? "brandom"
    : undefined;

if (!geneticist) {
    // let geneticist: string | undefined って表示される。 undefinedは取れないっぽい。真値性による絞り込みは真の時だけきくっぽい
    console.log(typeof geneticist);
} else {
    console.log(typeof geneticist);
}

// geneticist.toUpperCase();
