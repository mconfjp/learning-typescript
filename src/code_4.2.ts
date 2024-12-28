// どうやらオブジェクト型になると絞り込みが効かない...？
type Ingredient = {
    name: string;
    amount: string | number;
  };
  
  const soySauce = {
    name: '醤油',
    amount: '大さじ１'
  }
  
  const soySauceWithSatisfies = {
    name: '醤油',
    amount: '大さじ１'
  } satisfies Ingredient;
  
  let soySauceWithTypeAnnotation: Ingredient = {
    name: '醤油',
    amount: '大さじ１'
  }
  
  soySauceWithTypeAnnotation.amount.length;
  
  
  
  
  const amount: string | number = '大さじ１';
  amount.length;
  
  
  let amount_let: string | number;
  amount_let = Math.random() > 0.5
    ? "大さじ１"
    : 1;
  amount_let.length;
  
  amount_let = '大さじ１';
  amount_let.length;
  
  type amountType = string | number;
  
  const amount_type: amountType = '大さじ１'
  amount.length;