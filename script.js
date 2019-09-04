//Skapa ett if statement för att se om en användare har rätt ålder.

var okBtn = document.getElementById("ok-button");
var isOld = 66;
var isYoung = 18;

//När knappen klickas, spara inputen och konvertera till en integer.
okBtn.addEventListener("click", function(){
    let t = document.getElementById("input-field").value;
    let b = parseInt(t, 10);

        //Se om användaren är för gammal, för ung, eller har rätt ålder. Skriv ut resultatet i en paragraf.
        if(b < isYoung){
            document.getElementById("age-result").innerHTML = "Sorry, du är för ung."   
        }
        else if(b > isOld){
            document.getElementById("age-result").innerHTML = "Sorry, du är för gammal."  
        }
        else{
            document.getElementById("age-result").innerHTML = "Du har rätt ålder, Välkommen!"
        }
});