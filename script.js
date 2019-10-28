let submit= document.getElementById("submit");
submit.addEventListener("click", function(){

    male = document.getElementById("male");
    female = document.getElementById("female");
    dateOfBirth = document.getElementById("date").value

    dateOfBirth = new Date(dateOfBirth);

    let yearOfBirth = dateOfBirth.getFullYear();
    let birthMonth = dateOfBirth.getMonth() + 1;
    let dayOfBirth = dateOfBirth.getDate();

    CC = yearOfBirth.toString().substr(0, 2);
    YY = yearOfBirth.toString().substr(2, 2);
    MM = birthMonth
    DD = dayOfBirth

    dayOfTheWeek = (((CC / 4) - 2 * CC - 1) + ((5 * YY / 4)) + ((26 * (MM + 1) / 10)) + DD) % 7;

    dayOfTheWeek = parseInt(dayOfTheWeek);
    

    let akanName;

    femaleAkanNames = ["Ama", "Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua"];
    maleAkanNames = ["Kwame", "Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi"];

    let bornDay;

    if (dayOfTheWeek == 0 && female) {
        bornDay = "Sunday";
        akanName = femaleAkanNames[0];
    } else if (dayOfTheWeek == 0 && male) {
        bornDay = "Sunday";
        akanName = maleAkanNames[0];


    } else if (dayOfTheWeek == 1 && female) {
        bornDay = "Monday";
        akanName = femaleAkanNames[1];
    } else if (dayOfTheWeek == 1 && male) {
        bornDay = "MOnday";
        akanName = maleAkanNames[1];


    } else if (dayOfTheWeek == 2 && female) {
        bornDay = "Tuesday";
        akanName = femaleAkanNames[2];
    } else if (dayOfTheWeek == 2 && male) {
        bornDay = "Tuesday";
        akanName = maleAkanNames[2];


    } else if (dayOfTheWeek == 3 && female) {
        bornDay = "Wednesday";
        akanName = femaleAkanNames[3];
    } else if (dayOfTheWeek == 3 && male) {
        bornDay = "Wednesday";
        akanName = maleAkanNames[3];


    } else if (dayOfTheWeek == 4 && female) {
        bornDay = "Thursday";
        akanName = femaleAkanNames[4];
    } else if (dayOfTheWeek == 4 && male) {
        bornDay = "Thursday";
        akanName = maleAkanNames[4];


    } else if (dayOfTheWeek == 5 && female) {
        bornDay = "Friday";
        akanName = femaleAkanNames[5];
    } else if (dayOfTheWeek == 5 && male) {
        bornDay = "Friday";
        akanName = maleAkanNames[5];


    } else if (dayOfTheWeek == 6 && female) {
        bornDay = "Saturday";
        akanName = femaleAkanNames[6];
    } else if (dayOfTheWeek == 6 && male) {
        bornDay = "Saturday";
        akanName = maleAkanNames[6];
    }

    let result = document.getElementById("reveal-result").innerHTML = "It's your birthday" + bornDay + " and your akan name is " + akanName + "!"
    document.getElementById("akanForm").reset();
    
});
