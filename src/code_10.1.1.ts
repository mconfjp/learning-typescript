

function logWrapper<Input>(callback: (input: Input) => void) {
    return (input: Input) => {
        console.log("Input:", input);
        callback(input);
    }
}

const func = logWrapper((input: string) => {
    console.log(input.length)

});


func("カスなんて言わないよ...");

