/* 3. Longest Substring Without Repeating Characters
Medium

Given a string, find the length of the longest substring without repeating characters. */

var lengthOfLongestSubstring = function(s) {
    let map = new Set()
    let left = 0
    let right = 0
    let max = 0
    
    while (right < s.length){
           if (!map.has(s.charAt(right))){
               map.add(s.charAt(right))
               right++
               max = Math.max(max, right-left)
           } else {
               map.delete(s.charAt(left))
               left++
           }
        
    
    }
    return max
};
