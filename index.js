const items =[ "✂️", "📃", "🪨"]; 

const [cisor, paper, rock] = items; 
 
var itemPTwo =  document.getElementById("pTwo").innerText;

var randomNumber2 = 0; 

var scorePlayerOne = 0;
var scorePlayerTwo = 0; 


function RockPaperCisor (a, b) {
    if ( a == b ) { console.log ("nada")}
    else if (a == paper) { switch (b) {
        case rock : { scorePlayerOne++; 
            document.getElementById("PlusOnePOne").setAttribute("class","notHidden"); 
            document.getElementById("PlusOnePTwo").setAttribute("class","hidden"); 
            document.getElementById("designPOne").setAttribute("class","hidden"); 
            document.getElementById("designPTwo").setAttribute("class","notHidden design"); 
        } ; break ; 
        case cisor : { scorePlayerTwo++; 
            document.getElementById("PlusOnePOne").setAttribute("class","hidden"); 
            document.getElementById("PlusOnePTwo").setAttribute("class","notHidden"); 
            document.getElementById("designPOne").setAttribute("class","notHidden design"); 
            document.getElementById("designPTwo").setAttribute("class","hidden"); 
        } ; break ;
    }}
    else if (a == cisor ) { switch (b) {
         case rock : { scorePlayerTwo++; 
            document.getElementById("PlusOnePOne").setAttribute("class","hidden"); 
            document.getElementById("PlusOnePTwo").setAttribute("class","notHidden"); 
            document.getElementById("designPOne").setAttribute("class","notHidden design"); 
            document.getElementById("designPTwo").setAttribute("class","hidden"); 
        } ; break ; 
         case paper : { scorePlayerOne++; 
            document.getElementById("PlusOnePOne").setAttribute("class","notHidden"); 
            document.getElementById("PlusOnePTwo").setAttribute("class","hidden"); 
            document.getElementById("designPOne").setAttribute("class","hidden"); 
            document.getElementById("designPTwo").setAttribute("class","notHidden design"); 
        } ; break ;
    }}
    else if (a == rock ) {switch (b) {
         case cisor : { scorePlayerOne++;
            document.getElementById("PlusOnePOne").setAttribute("class","notHidden"); 
            document.getElementById("PlusOnePTwo").setAttribute("class","hidden"); 
            document.getElementById("designPOne").setAttribute("class","hidden"); 
            document.getElementById("designPTwo").setAttribute("class","notHidden design"); 
        } ; break ; 
         case paper : { scorePlayerTwo++; 
            document.getElementById("PlusOnePOne").setAttribute("class","hidden"); 
            document.getElementById("PlusOnePTwo").setAttribute("class","notHidden"); 
            document.getElementById("designPOne").setAttribute("class","notHidden"); 
            document.getElementById("designPTwo").setAttribute("class","hidden design"); 
        } ; break ;
    }}
}

document.getElementById("paper").addEventListener("click", function() {
    document.getElementById("pOne").innerText= paper; 
    randomNumber2 = Math.floor(Math.random() * 3); 
    document.getElementById("pTwo").innerText= items[randomNumber2]; 
   
    RockPaperCisor(document.getElementById("pOne").innerText, document.getElementById("pTwo").innerText) ;
    
    document.getElementById("scorePlayerOne").innerText= scorePlayerOne; 
    document.getElementById("scorePlayerTwo").innerText= scorePlayerTwo; 


});

document.getElementById("cisor").addEventListener("click", function() {
    
    document.getElementById("pOne").innerText= cisor; 

    randomNumber2 = Math.floor(Math.random() * 3); 
    document.getElementById("pTwo").innerText= items[randomNumber2]; 

    RockPaperCisor(document.getElementById("pOne").innerText, document.getElementById("pTwo").innerText) ;
    document.getElementById("scorePlayerOne").innerText= scorePlayerOne; 
    document.getElementById("scorePlayerTwo").innerText= scorePlayerTwo; 
    
    
});

document.getElementById("rock").addEventListener("click", function() {
    document.getElementById("pOne").innerText= rock; 

    randomNumber2 = Math.floor(Math.random() * 3); 
    document.getElementById("pTwo").innerText= items[randomNumber2]; 

    RockPaperCisor(document.getElementById("pOne").innerText, document.getElementById("pTwo").innerText) ;
    
    document.getElementById("scorePlayerOne").innerText= scorePlayerOne; 
    document.getElementById("scorePlayerTwo").innerText= scorePlayerTwo; 

    
});


document.getElementById("start").addEventListener("click", function() {
    scorePlayerOne = 0;
    scorePlayerTwo = 0; 
    document.getElementById("scorePlayerOne").innerText= scorePlayerOne; 
    document.getElementById("scorePlayerTwo").innerText= scorePlayerTwo;
    document.getElementById("pOne").innerText= "/"; 
    document.getElementById("pTwo").innerText = "/"; 
    document.getElementById("PlusOnePOne").setAttribute("class","hidden"); 
    document.getElementById("PlusOnePTwo").setAttribute("class","hidden"); 
    document.getElementById("designPOne").setAttribute("class","hidden"); 
    document.getElementById("designPTwo").setAttribute("class","hidden");

})



  