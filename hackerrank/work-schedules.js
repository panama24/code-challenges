/*You just got a new job where you have to work exactly as many hours as you are told each week, working no more than a daily maximum number of hours per day.
 * Some of the days, they tell you how many hours you will work.
 * You get to choose the remainder of your schedule, within the limits.

 * A completed schedule consists of exactly 7 digits in the range 0 to 8 representing each day's hours to be worked.
 * You will get a pattern string similar to the schedule, but with some of the digits replaced by a question mark, ?, (ascii 63 decimal).
 * Given a maximum number of hours you can work in a day, replace the question marks with digits so that the sum of the scheduled hours is exactly the hours you must work in a week. Return a string array with all possible schedules you can create, ordered lexicographically.

 * For example, your partial schedule, pattern = 08??840, your required hours, work_hours = 24, and you can only work, at most, day_hours = 4 hours per day during the two days in question.
 * You have two days on which you must work 24 - 20 = 4 more hours for the week.
 * All of your possible schedules are listed below:
 *
 * 0804840
 * 0813840
 * 0822840
 * 0831840
 * 0840840
 *
 * Your function must return an array of strings that represents all possible valid schedules.
 * String must be ordered lexicographically.
 *
 * findSchedules() has the following params:
 * work_hours: an integer representing the hours you must work/week
 * day_hours: an integer representing the max hours you may work in a day
 * pattern: a string representing the partially completed schedule
 *
 * Sample Input 1
 * 3 => work_hours
 * 2 => day_hours
 * ??2??00 => pattern
 *
 * Sample Output 1
 * 0020100
 * 0021000
 * 0120000
 * 1020000
 */

const findSchedules = (work_hours, day_hours, pattern) => {
  const split = pattern.split('');
  const hoursWorked = split
    .filter(c => c.charCodeAt(0) !== 63)
    .reduce((acc, curr) => {
      return acc += Number(curr)
    }, 0);

  const remainingHours = work_hours - hoursWorked;
  const openSlots = split.filter(c => c.charCodeAt(0) === 63).length;
  console.log(openSlots, remainingHours);

  // insertion must be >= 1 && <= remainingHours
  // fill with num >= 1 && <= remainingHours
  // check if remainingHours
  // if none, done
  // else keep filling
  // keep reference to previosuly made arrays and see if pattern is same,
  // so don't create same patter

  // results must be ordered
};

console.log(findSchedules(6, 2, '??2??00'));

var permute = function(nums) {
    let results = [];
    if (nums.length === 1) {
        results.push(nums);
        return results;
    }

    for (let i = 0; i < nums.length; i++) {
        // pull first letter
        const first = [nums[i]];
        // slice to get remaining
        const rest = nums.slice(0, i).concat(nums.slice(i+1))
        const subPermutations = permute(rest);

        // recurse through remaining to get all possible combos
        for (let j = 0; j < subPermutations.length; j++) {
            results.push(first.concat(subPermutations[j]));
        }
    }

    return results;
};
