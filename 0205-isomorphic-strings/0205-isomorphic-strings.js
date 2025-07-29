/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function(s, t) {
    if(s.length !== t.length) return false;
    let mapS = {};
    let mapT = {};

    for(let i = 0; i < s.length; i++){
        if(!mapS[s[i]] && !mapT[t[i]]){
            mapS[s[i]] = t[i];
            mapT[t[i]] = s[i];
        }

        else if(mapS[s[i]] !== t[i] || mapT[t[i]] !== s[i]){
            return false;
        }
    }

    return true;
};