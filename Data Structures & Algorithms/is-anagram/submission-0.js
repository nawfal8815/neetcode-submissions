class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
    if (t.length != s.length) return false;
    let maps = new Map(), mapt = new Map();
    for (let i = 0; i < s.length; i++){
        if (maps.get(s[i]) == undefined) maps.set(s[i], 1)
        else maps.set(s[i], maps.get(s[i])+1);

        if (mapt.get(t[i]) == undefined) mapt.set(t[i], 1)
        else mapt.set(t[i], mapt.get(t[i])+1);
    }
    let compareTwoMaps = (map1, map2) => {
        if (map1.size !== map2.size) return false;
        for (let key of map1.keys()) {
            if (!map2.has(key) || map1.get(key) !== map2.get(key)) return false;
        }
        return true;
    }
    return compareTwoMaps(maps, mapt);
}
}
