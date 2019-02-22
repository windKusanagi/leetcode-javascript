/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(s.length <= 1) return s.length;
    const hash = {};
    let maxLen = 0;
    let head = 0;
    for (var i = 0, len = s.length; i < len; i++) {
      if(hash[s[i]]!==undefined){
        head = Math.max(head, hash[s[i]]+1);
      }
      hash[s[i]] = i;
      maxLen = Math.max(maxLen, i-head+1);
    }
    return maxLen;
  };