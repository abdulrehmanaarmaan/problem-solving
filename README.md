# Problem-Solving

Solutions for the 20 problems in the STN-7 Problem Solving Assessment, implemented in TypeScript in a single file: [`solution.ts`](./solution.ts).

## Requirements

- Node.js 18 or later
- The development dependencies listed in `package.json`: `tsx` and `typescript`

## Setup and run

Install the development dependencies and execute the solutions:

```bash
npm install
npx tsx solution.ts
```

The `solution.ts` file contains all 20 function implementations and sample runs. Executing it prints the results of those sample runs to the terminal. The sample cases are included for basic verification; additional edge cases should also be tested where applicable.

## Problems included

| # | Problem | Function |
|---:|---|---|
| 1 | Staircase | `staircase(n)` |
| 2 | Grading Students | `gradingStudents(grades)` |
| 3 | Time Conversion | `timeConversion(s)` |
| 4 | String Repeat | `repeatStr(n, s)` |
| 5 | Reversed Strings | `solution(str)` |
| 6 | Sum of Positive | `positiveSum(arr)` |
| 7 | Grasshopper — Summation | `summation(num)` |
| 8 | Convert a Boolean to a String | `booleanToString(b)` |
| 9 | Fizz Buzz | `fizzBuzz(n)` |
| 10 | Running Sum of 1D Array | `runningSum(nums)` |
| 11 | Richest Customer Wealth | `maximumWealth(accounts)` |
| 12 | Remove Duplicates from Sorted Array | `removeDuplicates(nums)` |
| 13 | Contains Duplicate | `containsDuplicate(nums)` |
| 14 | Move Zeroes | `moveZeroes(nums)` |
| 15 | Merge Sorted Array | `merge(nums1, m, nums2, n)` |
| 16 | 3Sum | `threeSum(nums)` |
| 17 | Plus One | `plusOne(digits)` |
| 18 | Reverse String (in-place) | `reverseString(s)` |
| 19 | Length of Last Word | `lengthOfLastWord(s)` |
| 20 | Longest Common Prefix | `longestCommonPrefix(strs)` |

## Notes

- Each solution is identified by a problem-number comment in `solution.ts`.
- Problems 12, 14, 15, and 18 modify the specified input array in place.
- Problem 5 uses the required function name `solution`; problem 18 uses `reverseString` for its separate in-place array operation.
- The functions are declared in one file and are not exported as a module.
