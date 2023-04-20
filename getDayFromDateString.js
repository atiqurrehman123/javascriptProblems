// Given a date string, , in the format MM / DD / YYYY, find and return the day name for that date.Each day name must be one of the following strings: Sunday, Monday, Tuesday, Wednesday, Thursday, Friday, or Saturday.For example, the day name for the date 12 / 07 / 2016 is Wednesday.
//function 
function getDay(dateString) {
    // checking date is valid or not;
    const isValid = isValidDate(dateString);
    console.log(isValid)
    if (!isValid) return "Date is not Valid"
    //week days
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // declare dayname for storing day
    let dayName;
    dayName = days[new Date(dateString).getDay()];
    console.log(dayName)
    return dayName;

}
//function checking date is valid or not
const isValidDate = (dateString) => {
    let timestamp = Date.parse(dateString);
    return !isNaN(timestamp);
}
// function call
getDay(new Date())
