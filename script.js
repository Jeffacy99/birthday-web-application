let submit= document.getElementById("submit");
submit.addEventListener("click", function(){

   let male = document.getElementById("male");
   let female = document.getElementById("female");

    let dateOfBirth = document.getElementById("date").value

    dateOfBirth = new Date(dateOfBirth);

    let yearOfBirth = dateOfBirth.getFullYear();
    let birthMonth = dateOfBirth.getMonth()+ 1;
    let dayOfBirth = dateOfBirth.getDate () -1;
    let CC = yearOfBirth.toString().substr(0, 2);
    let YY = yearOfBirth.toString().substr(2, 2);


    
   let femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua","Ama"];
   let maleAkanNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi","Kwame"];

    let dayOfTheWeek = Math.floor((((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (birthMonth + 1) / 10)) + dayOfBirth) % 7);

    dayOfTheWeek = parseInt(dayOfTheWeek);
    dayOfBirth=parseInt(dayOfBirth);

  





    if (dayOfTheWeek == 0 && female) {
        bornDay = "Sunday";
        akanName = femaleAkanNames[0];
     } 
     else if (dayOfTheWeek == 0 && male) {
        bornDay = "Sunday";
        akanName = maleAkanNames[0];
    } 
    else if (dayOfTheWeek == 1 && female) {
        bornDay = "Monday";
        akanName = femaleAkanNames[1];
    } 
    else if (dayOfTheWeek == 1 && male) {
        bornDay = "Monday";
        akanName = maleAkanNames[1];
    } 
    else if (dayOfTheWeek == 2 && female) {
        bornDay = "Tuesday";
        akanName = femaleAkanNames[2];
    } 
    else if (dayOfTheWeek == 2 && male) {
        bornDay = "Tuesday";
        akanName = maleAkanNames[2];
    } 
    else if (dayOfTheWeek == 3 && female) {
        bornDay = "Wednesday";
        akanName = femaleAkanNames[3];
    }
     else if (dayOfTheWeek == 3 && male) {
        bornDay = "Wednesday";
        akanName = maleAkanNames[3];
    } 
    else if (dayOfTheWeek == 4 && female) {
        bornDay = "Thursday";
        akanName = femaleAkanNames[4];
    } 
    else if (dayOfTheWeek == 4 && male) {
        bornDay = "Thursday";
        akanName = maleAkanNames[4];
    } 
    else if (dayOfTheWeek == 5 && female) {
        bornDay = "Friday";
        akanName = femaleAkanNames[5];
    } 
    else if (dayOfTheWeek == 5 && male) {
        bornDay = "Friday";
        akanName = maleAkanNames[5];
    } 
    else if (dayOfTheWeek == 6 && female) {
        bornDay = "Saturday";
        akanName = femaleAkanNames[6];
    } 
    else if (dayOfTheWeek == 6 && male) {
        bornDay = "Saturday";
        akanName = maleAkanNames[6];
    }
    let result = document.getElementById("reveal-result").innerHTML = "It's your birthday on " + bornDay + "  your akan name is " + akanName + "!"
    

    
});
