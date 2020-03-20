/* Given an array of integers, return indices of the two numbers such that they add up to a specific target.
You may assume that each input would have exactly one solution, and you may not use the same element twice.*/
var twoSum = function(nums, target) {
    dict = {}
    /// 1 pass with hashtable, problem asking to return INDICES of complement
    for (let i = 0; i< nums.length; i++){
        let com = target - nums[i]
        if (com in dict){
                return [dict[com], i]
        }
        dict[nums[i]] = i
        //first you set up hashtable with numbers and index, and as it goes through the list, you check in the hashtable if the complement is already in there (O(n)). Since (0(n)) for hashtable lookup, it's O(n) overall.
    }
};