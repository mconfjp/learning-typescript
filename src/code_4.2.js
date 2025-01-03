"use strict";
const soySauce = {
    name: '醤油',
    amount: '大さじ１'
};
const soySauceWithSatisfies = {
    name: '醤油',
    amount: '大さじ１'
};
let soySauceWithTypeAnnotation = {
    name: '醤油',
    amount: '大さじ１'
};
//   soySauceWithTypeAnnotation.amount.length;
const amount = '大さじ１';
amount.length;
let amount_let;
amount_let = Math.random() > 0.5
    ? "大さじ１"
    : 1;
//   amount_let.length;
amount_let = '大さじ１';
amount_let.length;
const amount_type = '大さじ１';
amount.length;
//   過剰プロパティを初期値以外で渡すやつ
const existingObject = {
    name: '醤油',
    amount: '大さじ１',
    aji: '美味しい'
};
const extraObjectButOk = existingObject;
// extraObjectButOk.aji;
// 味なくなるんや！
