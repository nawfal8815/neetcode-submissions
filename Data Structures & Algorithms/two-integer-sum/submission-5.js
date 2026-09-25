class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
    let map = new Map();
    for (let i = 0; i < nums.length; i++){
        let missing = target - nums[i];
        if (map.get(nums[i]) !== undefined && nums[i] * 2 === target) return [map.get(nums[i]), i];
        else if (map.get(missing) !== undefined && map.get(missing) != i) {
            return map.get(missing) > i ? [i, map.get(missing)] : [map.get(missing), i]; 
        }
        map.set(nums[i], i);
        
    }
    return [];
}
}
