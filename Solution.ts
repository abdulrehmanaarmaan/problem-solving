
/**
 * STN-7 Problem Solving Assessment
 * All 20 solutions are implemented in this single TypeScript file.
 *
 * Run with:
 *   npx tsx solutions.ts
 */

// Problem 1: Staircase
function staircase(n: number): string {
    const rows: string[] = [];

    for (let i = 1; i <= n; i++) {
        rows.push(" ".repeat(n - i) + "#".repeat(i));
    }

    return rows.join("\n");
}

// Problem 2: Grading Students
function gradingStudents(grades: number[]): number[] {
    return grades.map((grade) => {
        if (grade < 38) {
            return grade;
        }

        const nextMultipleOfFive = Math.ceil(grade / 5) * 5;

        return nextMultipleOfFive - grade < 3
            ? nextMultipleOfFive
            : grade;
    });
}

// Problem 3: Time Conversion
function timeConversion(s: string): string {
    const period = s.slice(-2);
    const [hourText, minutes, seconds] = s.slice(0, -2).split(":");

    let hour = Number(hourText);

    if (period === "AM") {
        if (hour === 12) {
            hour = 0;
        }
    } else if (period === "PM" && hour !== 12) {
        hour += 12;
    }

    return `${String(hour).padStart(2, "0")}:${minutes}:${seconds}`;
}

// Problem 4: String Repeat
function repeatStr(n: number, s: string): string {
    return s.repeat(n);
}

// Problem 5: Reversed Strings
function solution(str: string): string {
    return str.split("").reverse().join("");
}

// Problem 6: Sum of Positive
function positiveSum(arr: number[]): number {
    return arr.reduce(
        (sum, value) => sum + (value > 0 ? value : 0),
        0
    );
}

// Problem 7: Grasshopper — Summation
function summation(num: number): number {
    return (num * (num + 1)) / 2;
}

// Problem 8: Convert a Boolean to a String
function booleanToString(b: boolean): string {
    return String(b);
}

// Problem 9: Fizz Buzz
function fizzBuzz(n: number): string[] {
    const result: string[] = [];

    for (let i = 1; i <= n; i++) {
        if (i % 15 === 0) {
            result.push("FizzBuzz");
        } else if (i % 3 === 0) {
            result.push("Fizz");
        } else if (i % 5 === 0) {
            result.push("Buzz");
        } else {
            result.push(String(i));
        }
    }

    return result;
}

// Problem 10: Running Sum of 1D Array
function runningSum(nums: number[]): number[] {
    const result: number[] = [];
    let sum = 0;

    for (const num of nums) {
        sum += num;
        result.push(sum);
    }

    return result;
}

// Problem 11: Richest Customer Wealth
function maximumWealth(accounts: number[][]): number {
    let maximum = 0;

    for (const account of accounts) {
        const wealth = account.reduce(
            (sum, amount) => sum + amount,
            0
        );

        maximum = Math.max(maximum, wealth);
    }

    return maximum;
}

// Problem 12: Remove Duplicates from Sorted Array
function removeDuplicates(nums: number[]): number {
    if (nums.length === 0) {
        return 0;
    }

    let uniqueIndex = 1;

    for (let readIndex = 1; readIndex < nums.length; readIndex++) {
        if (nums[readIndex] !== nums[uniqueIndex - 1]) {
            nums[uniqueIndex] = nums[readIndex];
            uniqueIndex++;
        }
    }

    return uniqueIndex;
}

// Problem 13: Contains Duplicate
function containsDuplicate(nums: number[]): boolean {
    const seen = new Set<number>();

    for (const num of nums) {
        if (seen.has(num)) {
            return true;
        }

        seen.add(num);
    }

    return false;
}

// Problem 14: Move Zeroes
// Modifies nums in-place and returns nothing.
function moveZeroes(nums: number[]): void {
    let writeIndex = 0;

    for (const num of nums) {
        if (num !== 0) {
            nums[writeIndex] = num;
            writeIndex++;
        }
    }

    while (writeIndex < nums.length) {
        nums[writeIndex] = 0;
        writeIndex++;
    }
}

// Problem 15: Merge Sorted Array
// Modifies nums1 in-place and returns nothing.
function merge(
    nums1: number[],
    m: number,
    nums2: number[],
    n: number
): void {
    let firstIndex = m - 1;
    let secondIndex = n - 1;
    let writeIndex = m + n - 1;

    while (secondIndex >= 0) {
        if (
            firstIndex >= 0 &&
            nums1[firstIndex] > nums2[secondIndex]
        ) {
            nums1[writeIndex] = nums1[firstIndex];
            firstIndex--;
        } else {
            nums1[writeIndex] = nums2[secondIndex];
            secondIndex--;
        }

        writeIndex--;
    }
}

// Problem 16: 3Sum
function threeSum(nums: number[]): number[][] {
    // Sort a copy to preserve the original input array.
    const sorted = [...nums].sort((a, b) => a - b);
    const triplets: number[][] = [];

    for (let i = 0; i < sorted.length - 2; i++) {
        if (i > 0 && sorted[i] === sorted[i - 1]) {
            continue;
        }

        if (sorted[i] > 0) {
            break;
        }

        let left = i + 1;
        let right = sorted.length - 1;

        while (left < right) {
            const sum = sorted[i] + sorted[left] + sorted[right];

            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                triplets.push([
                    sorted[i],
                    sorted[left],
                    sorted[right]
                ]);

                left++;
                right--;

                while (
                    left < right &&
                    sorted[left] === sorted[left - 1]
                ) {
                    left++;
                }

                while (
                    left < right &&
                    sorted[right] === sorted[right + 1]
                ) {
                    right--;
                }
            }
        }
    }

    return triplets;
}

// Problem 17: Plus One
function plusOne(digits: number[]): number[] {
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 9) {
            digits[i]++;
            return digits;
        }

        digits[i] = 0;
    }

    // Every digit was 9, so an extra leading digit is needed.
    return [1, ...digits];
}

// Problem 18: Reverse String
// Modifies s in-place and returns nothing.
function reverseString(s: string[]): void {
    let left = 0;
    let right = s.length - 1;

    while (left < right) {
        [s[left], s[right]] = [s[right], s[left]];
        left++;
        right--;
    }
}

// Problem 19: Length of Last Word
function lengthOfLastWord(s: string): number {
    let index = s.length - 1;

    // Skip trailing spaces.
    while (index >= 0 && s[index] === " ") {
        index--;
    }

    let length = 0;

    // Count the characters in the last word.
    while (index >= 0 && s[index] !== " ") {
        length++;
        index--;
    }

    return length;
}

// Problem 20: Longest Common Prefix
function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) {
        return "";
    }

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (!strs[i].startsWith(prefix)) {
            prefix = prefix.slice(0, -1);

            if (prefix === "") {
                return "";
            }
        }
    }

    return prefix;
}

// ------------------------------------------------------------------
// Sample tests for all 20 problems
// These calls intentionally print results when the file is executed.
// ------------------------------------------------------------------

console.log("Problem 1:", JSON.stringify(staircase(4)));
console.log("Problem 2:", gradingStudents([73, 67, 38, 33]));
console.log("Problem 3:", timeConversion("07:05:45PM"));
console.log("Problem 4:", repeatStr(3, "ha"));
console.log("Problem 5:", solution("world"));
console.log("Problem 6:", positiveSum([1, -4, 7, 12]));
console.log("Problem 7:", summation(8));
console.log("Problem 8:", booleanToString(false));
console.log("Problem 9:", fizzBuzz(5));
console.log("Problem 10:", runningSum([1, 2, 3, 4]));
console.log("Problem 11:", maximumWealth([[1, 2, 3], [3, 2, 1]]));

const nums12 = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
const uniqueCount12 = removeDuplicates(nums12);
console.log("Problem 12:", uniqueCount12, nums12.slice(0, uniqueCount12));

console.log("Problem 13:", containsDuplicate([1, 2, 3, 1]));

const nums14 = [0, 1, 0, 3, 12];
moveZeroes(nums14);
console.log("Problem 14:", nums14);

const nums15 = [1, 2, 3, 0, 0, 0];
merge(nums15, 3, [2, 5, 6], 3);
console.log("Problem 15:", nums15);

console.log("Problem 16:", threeSum([-1, 0, 1, 2, -1, -4]));
console.log("Problem 17:", plusOne([9, 9, 9]));

const chars18 = ["h", "e", "l", "l", "o"];
reverseString(chars18);
console.log("Problem 18:", chars18);

console.log(
    "Problem 19:",
    lengthOfLastWord("   fly me   to   the moon  ")
);

console.log(
    "Problem 20:",
    longestCommonPrefix([
        "interspecies",
        "interstellar",
        "interstate"
    ])
);
