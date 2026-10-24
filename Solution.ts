/* ===== Problem 1: Staircase ===== */
const staircase = (n: number): string => {
    const rows: string[] = [];
    for (let i = 1; i <= n; i++) rows.push(" ".repeat(n - i) + "#".repeat(i));
    return rows.join("\n");
};

/* ===== Problem 2: Grading Students ===== */
const gradingStudents = (grades: number[]): number[] => grades.map((grade) => {
    if (grade < 38) return grade;
    const nextMultipleOfFive = Math.ceil(grade / 5) * 5;
    return nextMultipleOfFive - grade < 3 ? nextMultipleOfFive : grade;
});

/* ===== Problem 3: Time Conversion ===== */
const timeConversion = (s: string): string => {
    const period = s.slice(-2);
    const [hourText, minutes, seconds] = s.slice(0, -2).split(":");
    let hour = Number(hourText);
    if (period === "AM") hour = hour === 12 ? 0 : hour;
    else if (hour !== 12) hour += 12;
    return `${String(hour).padStart(2, "0")}:${minutes}:${seconds}`;
};

/* ===== Problem 4: String Repeat ===== */
const repeatStr = (n: number, s: string): string => s.repeat(n);

/* ===== Problem 5: Reversed Strings ===== */
const solution = (str: string): string => str.split("").reverse().join("");

/* ===== Problem 6: Sum of Positive ===== */
const positiveSum = (arr: number[]): number => arr.reduce((sum, value) => sum + (value > 0 ? value : 0), 0);

/* ===== Problem 7: Grasshopper — Summation ===== */
const summation = (num: number): number => num * (num + 1) / 2;

/* ===== Problem 8: Convert a Boolean to a String ===== */
const booleanToString = (b: boolean): string => String(b);

/* ===== Problem 9: Fizz Buzz ===== */
const fizzBuzz = (n: number): string[] => {
    const result: string[] = [];
    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) result.push("FizzBuzz");
        else if (i % 3 === 0) result.push("Fizz");
        else if (i % 5 === 0) result.push("Buzz");
        else result.push(String(i));
    }
    return result;
};

/* ===== Problem 10: Running Sum of 1D Array ===== */
const runningSum = (nums: number[]): number[] => {
    const result: number[] = [];
    let total = 0;
    for (const num of nums) {
        total += num;
        result.push(total);
    }
    return result;
};

/* ===== Problem 11: Richest Customer Wealth ===== */
const maximumWealth = (accounts: number[][]): number =>
    accounts.reduce((maximum, customer) => Math.max(maximum, customer.reduce((sum, amount) => sum + amount, 0)), 0);

/* ===== Problem 12: Remove Duplicates from Sorted Array ===== */
const removeDuplicates = (nums: number[]): number => {
    if (nums.length === 0) return 0;
    let write = 1;
    for (let read = 1; read < nums.length; read++) {
        if (nums[read] !== nums[write - 1]) nums[write++] = nums[read];
    }
    return write;
};

/* ===== Problem 13: Contains Duplicate ===== */
const containsDuplicate = (nums: number[]): boolean => new Set(nums).size !== nums.length;

/* ===== Problem 14: Move Zeroes ===== */
const moveZeroes = (nums: number[]): void => {
    let write = 0;
    for (const value of nums) {
        if (value !== 0) nums[write++] = value;
    }
    while (write < nums.length) nums[write++] = 0;
};

/* ===== Problem 15: Merge Sorted Array ===== */
const merge = (nums1: number[], m: number, nums2: number[], n: number): void => {
    let i = m - 1;
    let j = n - 1;
    let write = m + n - 1;
    while (j >= 0) {
        if (i >= 0 && nums1[i] > nums2[j]) nums1[write--] = nums1[i--];
        else nums1[write--] = nums2[j--];
    }
};

/* ===== Problem 16: 3Sum ===== */
const threeSum = (nums: number[]): number[][] => {
    const values = [...nums].sort((a, b) => a - b);
    const result: number[][] = [];
    for (let i = 0; i < values.length - 2; i++) {
        if (i > 0 && values[i] === values[i - 1]) continue;
        let left = i + 1;
        let right = values.length - 1;
        while (left < right) {
            const sum = values[i] + values[left] + values[right];
            if (sum === 0) {
                result.push([values[i], values[left], values[right]]);
                left++;
                right--;
                while (left < right && values[left] === values[left - 1]) left++;
                while (left < right && values[right] === values[right + 1]) right--;
            } else if (sum < 0) left++;
            else right--;
        }
    }
    return result;
};

/* ===== Problem 17: Plus One ===== */
const plusOne = (digits: number[]): number[] => {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }
        digits[i] = 0;
    }
    return [1, ...digits];
};

/* ===== Problem 18: Reverse String (in-place) ===== */
const reverseString = (s: string[]): void => {
    let left = 0;
    let right = s.length - 1;
    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
};

/* ===== Problem 19: Length of Last Word ===== */
const lengthOfLastWord = (s: string): number => {
    let i = s.length - 1;
    while (i >= 0 && s[i] === " ") i--;
    let length = 0;
    while (i >= 0 && s[i] !== " ") {
        length++;
        i--;
    }
    return length;
};

/* ===== Problem 20: Longest Common Prefix ===== */
const longestCommonPrefix = (strs: string[]): string => {
    if (strs.length === 0) return "";
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) prefix = prefix.slice(0, -1);
        if (prefix === "") return "";
    }
    return prefix;
};

/* ===== Sample runs for all 20 problems ===== */
console.log("Problem 1:", staircase(4));
console.log("Problem 2:", gradingStudents([73, 67, 38, 33]));
console.log("Problem 3:", timeConversion("07:05:45PM"));
console.log("Problem 4:", repeatStr(3, "ha"));
console.log("Problem 5:", solution("world"));
console.log("Problem 6:", positiveSum([1, -4, 7, 12]));
console.log("Problem 7:", summation(8));
console.log("Problem 8:", booleanToString(true));
console.log("Problem 9:", fizzBuzz(15));
console.log("Problem 10:", runningSum([1, 2, 3, 4]));
console.log("Problem 11:", maximumWealth([[1, 2, 3], [3, 2, 1]]));

const duplicateRemovalInput = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const uniqueCount = removeDuplicates(duplicateRemovalInput);
console.log("Problem 12:", { k: uniqueCount, nums: duplicateRemovalInput.slice(0, uniqueCount) });

console.log("Problem 13:", containsDuplicate([1, 2, 3, 1]));

const zeroMovementInput = [0, 1, 0, 3, 12];
moveZeroes(zeroMovementInput);
console.log("Problem 14:", zeroMovementInput);

const mergeInput = [1, 2, 3, 0, 0, 0];
merge(mergeInput, 3, [2, 5, 6], 3);
console.log("Problem 15:", mergeInput);

console.log("Problem 16:", threeSum([-1, 0, 1, 2, -1, -4]));
console.log("Problem 17:", plusOne([1, 2, 9]));

const reverseStringInput = ["h", "e", "l", "l", "o"];
reverseString(reverseStringInput);
console.log("Problem 18:", reverseStringInput);

console.log("Problem 19:", lengthOfLastWord("   fly me   to   the moon  "));
console.log("Problem 20:", longestCommonPrefix(["flower", "flow", "flight"]));
