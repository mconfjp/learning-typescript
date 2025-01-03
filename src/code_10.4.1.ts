type Result<Data> = FailureResult | SuccessfulResult<Data>;

interface FailureResult {
    succeeded: false;
    error: Error;
    }

interface SuccessfulResult<Data> {
    succeeded: true;
    data: Data;
}

// type Datum = string[];

// type Result<Data> = FailureResult<Datum> | SuccessfulResult<Data>;
// 名前 'Datum' が見つかりません。ts(2304)
// これは、型パラメータの宣言がされていなくて、そこを通して型を指定できないから怒られている。普通の関数でパラメータないのに関数内で使ってるようなもん

// interface FailureResult<Datum> {
//     succeeded: false;
//     error: Error;
//     data: Datum;
//     }

// interface SuccessfulResult<Data> {
//     succeeded: true;
//     data: Data;
// }

function handleResult<Data>(result: Result<Data>) {
    // if (result.succeeded) {
    //     console.log("Data:", result.data);
    // } else {
    //     console.error("Error:", result.error);
    // }

    console.log(typeof result);

}

const result: Result<string> = {
    succeeded: true,
    data: "あんころもち"
};

handleResult(result);