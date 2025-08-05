/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  const map = []

  for(let i = 0; i < s.length; i++){
    switch(s[i]){
        case '(' :
        case '[' :
        case '{' :
            map.push(s[i]);
            break;
        case ')' :
        if(map.pop() !== '(')
            return false;
            break;
        case '}' :
            if(map.pop() !== '{')
            return false;
            break
        case ']' :
            if(map.pop() !== '[')
            return false;
            break
    }

  }
   return map.length === 0;
};