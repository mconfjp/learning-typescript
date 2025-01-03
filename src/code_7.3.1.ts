interface someInterface {
    someProperty: string | null;
    someMethod(): number;
}

// interface someExtendsInterface extends someInterface {
//     someProperty: "カス";
// }

interface someInterface {
    someProperty: string | null;
    someMethod(): string;
}


let someMethodA: someInterface = {
    someProperty: "カス",
    someMethod(): string {
        return "カス";
    } 
};