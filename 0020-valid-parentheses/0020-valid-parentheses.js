/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = []

  for(let i = 0; i < s.length; i++){
    if(s[i] == '(' || s[i] == '[' || s[i] == '{'){
        map.push(s[i])
    }else {
        let data = map.pop();
        let compValue = '';
        switch(s[i]){
          case ')' :
            compValue = '(';
            break;
          case '}' :
             compValue = '{';
             break
          case ']' :
             compValue = '[';
             break
        }
        if(data !== compValue){
            return false;
        }

    }
  }
   return map.length === 0;
};