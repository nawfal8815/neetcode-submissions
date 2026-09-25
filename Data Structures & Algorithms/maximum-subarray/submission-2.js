class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    maxSubArray(nums) {
    let max = nums[0], sum = 0;
    for (let i = 0; i < nums.length; i++) {
        if (sum < 0) sum = 0
        sum+=nums[i]
        if (max < sum) max = sum
    }
    return max;
}
}
