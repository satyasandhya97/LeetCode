/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let i = 0;
  let stack = [];
  while(i < tokens.length){
    if(["+", "-","/","*"].includes(tokens[i])){
        let b = Number(stack.pop())
        let a = Number(stack.pop())
        if(tokens[i] === '+'){
            let value = a + b;
            stack.push(value);
        }else if(tokens[i] === '-'){
            let value = a - b;
            stack.push(value);
        }else if(tokens[i] === '*'){
            let value = a * b;
            stack.push(value);
        }else if(tokens[i] === '/'){
            let value = Math.trunc(a / b);
            stack.push(value);
        }
    }else{
        stack.push(Number(tokens[i]))
    }
    i++;
  }

  return stack.pop()
};