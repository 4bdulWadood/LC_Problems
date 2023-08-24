var closeStrings = function(word1, word2) {
    /*
        If the characters are the same, and the sum of the frequencies of the characters is 
        the same, then the words are close!

        Create hashmap, and compare keys and sum of values.

        [a:1,b:1,c:1] = [b:1, c:1, a:1]

        [a:1] =/= [a:2]

        [c:1, a:2, b:3] = [a:1, b:2, c:3]
        total is 6
        and keys are same


        Creating hashmap has O(n) time complexity.
        .sort() has O(n*logN) time complexity

        Worse Case time complexity is O(n*LogN)
        Space Complexity O(2N), where N represents the length of word1 and word2.

        Algorithm beats 77.46% of Users with JS
        Beats 73% of users with JS
    */

    if (word1.length !== word2.length) return false;

    const map1 = new Map();
    const map2 = new Map();

    for (const char of word1) {
        map1.set(char, (map1.get(char) || 0) + 1);
    }

    for (const char of word2) {
        map2.set(char, (map2.get(char) || 0) + 1);
    }

    const set1 = new Set(map1.keys());
    const set2 = new Set(map2.keys());

    if (set1.size !== set2.size || !([...set1].every(char => set2.has(char)))) {
        return false;
    }

    const freq1 = [...map1.values()];
    const freq2 = [...map2.values()];

    return freq1.sort().toString() === freq2.sort().toString();
};
