const TOTAL_WORKING_HOURS =100;
const TOTAL_WORKING_DAYS = 20;
const PART_TIME =1;
const FULL_TIME =2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS =8;
const WAGES_PER_HOUR = 20;
empHours = 0;
let totalHrs = 0;
let totalDays = 0;
let totalEmpHours = 0;
let empDailyWageArr = new Array();
let empDailyWageMap = new Map();
let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();
// let employeeWageArr = new Array();
// let empDailyWageMap = new Map();
// let empDailyHrsMap = new Map();
function getWorkingHours(empCheck){
    switch(empCheck){
        case PART_TIME:
            return PART_TIME_HOURS;
        case FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}



function calcDailyWage(empHours){
    return  empHours * WAGES_PER_HOUR;
}

while(totalHrs <= TOTAL_WORKING_HOURS && totalDays < TOTAL_WORKING_DAYS)
{
    totalDays++;
    empCheck = Math.floor(Math.random() * 10) % 3;
    empHours = getWorkingHours(empCheck);
    // totalEmpHours += empHours;
    // console.log("Total hours of Day ", totalDays, " is ", empHours);
    let totalEmpWageCalc = calcDailyWage(empHours);
    empDailyWageArr.push(totalEmpWageCalc);
    empDailyWageMap.set(totalDays,calcDailyWage(empHours));
}

console.log(empDailyWageMap)

function totalWagesMap(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("Emp wage map from totalHrs " + Array.from(empDailyWageMap.values()).reduce(totalWagesMap,0));
// let totalWages = calcDailyWage(totalEmpHours);
//Array Helper Function
//Calc total wage uing Array forEach Traversal or reduce method
let totalEmpWage = 0;
function sum(dailyWage){
    totalEmpWage += dailyWage;
}
empDailyWageArr.forEach(sum);
console.log("Total Wages of a person is", totalEmpWage);
console.log(empDailyWageArr);

function totalWages(totalWage, dailyWage){
    return totalWage + dailyWage;
}
console.log("Emp Wage with reduce " + empDailyWageArr.reduce(totalWages,0));

//Show the day along with daily wage using array map helper function
let dailyCntr = 0;
function mapDailyWithWage(dailyWage){
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}

let mapDayWithArray = empDailyWageArr.map(mapDailyWithWage)
console.log(mapDayWithArray);

//show days when full time wage of 160 were earned
function fullTimeWage(dailyWage){
    return dailyWage.includes("160");
}

let fullTimeWageArr = mapDayWithArray.filter(fullTimeWage);
console.log(fullTimeWageArr);


console.log("First Time full time wage earned on day: "+mapDayWithArray.find(fullTimeWage));

console.log("Check all elemnts have full time wage " + fullTimeWageArr.every(fullTimeWage));

//check if there is any part time wage
function partTimeWage(dailyWage){
    return dailyWage.includes("80");
}

console.log("Check if any part time wage: " + mapDayWithArray.some(partTimeWage));

//Find number of days employee worked
function totalDaysWorked(numOfDays , dailyWage){
    if(dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}

console.log("Number OF Days Employee Worked: " + empDailyWageArr.reduce(totalDaysWorked , 0));

empDailyWageMap.forEach((values,key,map) => {
    if(values == 80 ) fullWorkingDays.push(key);
    else if(values == 160) partWorkingDays.push(key);
    else nonWorkingDays.push(key);
});
console.log("Full Working Days :"+ fullWorkingDays);
console.log("Part Working Days :"+ partWorkingDays);
console.log("Non Working Days :"+ nonWorkingDays);

//Arrow function to calculate daily wages


function findTotal(totalVal,dailyWage){
    return totalVal + dailyWage;
}
let count = 0;
let totalHours = Array.from(empDailyWageMap.values()).reduce(findTotal,0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0).reduce(findTotal,0);
console.log("Emp Wage with Arrow " + "Total Hours : " + totalHours + " Total Wages : "+ totalSalary);

const findTotalWage = (totalWage, dailyWage) => { return totalWage + dailyWage};
let totalWageArrow = empDailyWageArr.reduce(findTotalWage , 0);

