function task1(cities) {
    return cities.join(", ") + ".";
}
function task2(number) {
    let intNum = Math.round(number);
    const strNum = "" + intNum;
    const lastDigit = parseInt(strNum.substring(strNum.length - 1));
    if (lastDigit < 3)
        intNum -= lastDigit;
    else if (lastDigit < 8)
        intNum += 5 - lastDigit;
    else
        intNum += 10 - lastDigit;
    return intNum;
}
function task3(number) {
    let result = "компьютер";
    const strNum = "" + number;
    const lastTwoDigits = parseInt(strNum.substring(strNum.length - 2));
    const lastDigit = parseInt(strNum.substring(strNum.length - 1));
    let checkNumber;
    if (lastTwoDigits < 21)
        checkNumber = lastTwoDigits;
    else
        checkNumber = lastDigit;
    if (checkNumber > 1 && checkNumber < 5)
        result = `${number} ${result}а`;
    else if (checkNumber > 4 || checkNumber == 0)
        result = `${number} ${result}ов`;
    else
        result = `${number} ${result}`;
    return result;
}
function task4(number) {
    if (number < 2)
        return false;
    for (let i = 2; i < number; i++) {
        if (number % i == 0)
            return false;
    }
    return true;
}
function task5(nums1, nums2) {
    nums1 = getDoubleNumbers(nums1);
    nums2 = getDoubleNumbers(nums2);
    return getDoubleNumbers(nums1.concat(nums2));
    function getDoubleNumbers(nums) {
        let result = [];
        while (nums.length) {
            const num = nums.shift();
            if (nums.includes(num) && !result.includes(num)) {
                result.push(num);
            }
        }
        return result;
    }
}
function task6(number) {
    let result = "";
    let line = "";
    for (let i = 0; i <= number; i++) {
        for (let j = 0; j <= number; j++) {
            let spaces = j == 0 && i == 0
                ? `${number}`.length - 1
                : (" " + j * number).length;
            let num;
            let subStr;
            if (i == 0 && j == 0)
                num = "";
            else if (i == 0)
                num = j;
            else if (j < 2)
                num = i;
            else
                num = i * j;
            subStr = `${num}`.padStart(spaces);
            line += subStr;
        }
        result += line + "\n";
        line = "";
    }
    return result;
}
const cities = ["Москва", "Санкт-Петербург", "Воронеж"];
const task1Result = task1(cities);
console.log("Task 1, result:", task1Result);
const task2Result = task2(41.7);
console.log("Task 2, result:", task2Result);
const task3Result = task3(1);
console.log("Task 3, result:", task3Result);
const task4Result = task4(2);
console.log("Task 4, result:", task4Result);
const nums1 = [7, 17, 1, 9, 1, 17, 56, 56, 23];
const nums2 = [56, 17, 17, 1, 23, 34, 23, 1, 8, 1];
const task5Result = task5(nums1, nums2);
console.log("Task 5, result:", task5Result);
const task6Result = task6(45);
console.log("task 6, result:\n", task6Result);
