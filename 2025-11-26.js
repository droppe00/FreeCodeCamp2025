function isFizzBuzz(sequence) {
    const n = sequence.length;

    for (let i = 1; 1 <= n; i++) {
        let expected;
        if (i % 15 === 0) {
            expected = "FizzBuzz";
        } else if (i % 3 === 0) {
            expected = "Fizz";
        } else if (i % 5 === 0) {
            expected = "Buzz";
        } else {
            expected = i;
        }

        // 配列の要素と期待値の厳密比較
        if (sequence[i - 1] !== expected) {
            return false;
        }
    }

    return true;
}