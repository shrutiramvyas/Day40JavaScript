let totalDays = 0;
let totalEmpHours = 0;
const TOTAL_WORKING_HOURS =100;
const TOTAL_WORKING_DAYS = 20;
const PART_TIME =1;
const FULL_TIME =2;
const PART_TIME_HOURS =4;
const FULL_TIME_HOURS =8;
const WAGES_PER_HOUR = 20;
let empDailyWageAndHrs = new Array();
while(totalEmpHours <= TOTAL_WORKING_HOURS && totalDays < TOTAL_WORKING_DAYS){
    totalDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHours += empHrs;
    empDailyWageAndHrs.push(
        {
            dayNum: totalDays,
            dailyHours : empHrs,
            dailyWage : calcDailyWage(empHrs),
            toString() {
                return '\n Day' + this.dayNum + ' => Working Hours is ' + this.dailyHours + ' And Wage Earned = ' + this.dailyWage
            },
    });
}

console.log(empDailyWageAndHrs);


function calcDailyWage(empHours){
    return  empHours * WAGES_PER_HOUR;
}

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

//Object Operation Using Arrow Function

//Find total Wages
let totalWagesEmp = empDailyWageAndHrs.filter(dailyHoursAndWage => dailyHoursAndWage.dailyWage > 0).reduce((totalWage ,dailyHoursAndWage) => totalWage += dailyHoursAndWage, 0);
let totalHoursEmp = empDailyWageAndHrs.filter(dailyHoursAndWage => dailyHoursAndWage.dailyWage > 0).reduce((totalHours,dailyHoursAndWage) => totalHours += dailyHoursAndWage, 0);
console.log("Total Hours : " + totalHoursEmp + "Total Wages :" + totalWagesEmp);

let partTimeWorkingHours = empDailyWageAndHrs.filter(dailyWageAndHours => dailyWageAndHours.dailyHours == 4).map(dailyHoursAndWage => dailyHoursAndWage.toString());
console.log(partTimeWorkingHours);