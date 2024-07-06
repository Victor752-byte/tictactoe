function requestName(){
    document.getElementById("annouceBox").style.visibility = "hidden"
    document.getElementById("xName").innerHTML= prompt('Enter Player "X"');
    document.getElementById("oName").innerHTML= prompt('Enter Player "O"');
}

function nextRound(){
    document.getElementById("b1").value = " ";
    document.getElementById("b1").disabled = false;
    document.getElementById("b1").style.backgroundColor="#1f3540";
    document.getElementById("b2").value = " ";
    document.getElementById("b2").disabled = false;
    document.getElementById("b2").style.backgroundColor="#1f3540";
    document.getElementById("b3").value = " ";
    document.getElementById("b3").disabled = false;
    document.getElementById("b3").style.backgroundColor="#1f3540";
    document.getElementById("b4").value = " ";
    document.getElementById("b4").disabled = false;
    document.getElementById("b4").style.backgroundColor="#1f3540";
    document.getElementById("b5").value = " ";
    document.getElementById("b5").disabled = false;
    document.getElementById("b5").style.backgroundColor="#1f3540";
    document.getElementById("b6").value = " ";
    document.getElementById("b6").disabled = false;
    document.getElementById("b6").style.backgroundColor="#1f3540";
    document.getElementById("b7").value = " ";
    document.getElementById("b7").disabled = false;
    document.getElementById("b7").style.backgroundColor="#1f3540";
    document.getElementById("b8").value = " ";
    document.getElementById("b8").disabled = false;
    document.getElementById("b8").style.backgroundColor="#1f3540";
    document.getElementById("b9").value = " ";
    document.getElementById("b9").disabled = false;
    document.getElementById("b9").style.backgroundColor="#1f3540";
    document.getElementById("annouceBox").style.visibility = "hidden";
    playCount=0;
    if(turn == 1){
        document.getElementById("turnAnnounce").innerHTML= "X";
    }else{
        document.getElementById("turnAnnounce").innerHTML= "O"; 
    }


 }

var turn=1;
var playCount = 0;
function box1(){
    playCount++;
    if(turn == 1){
        document.getElementById("turnAnnounce").innerHTML= "O";
        document.getElementById("b1").value = "X";
        document.getElementById("b1").style.color = "#31c3be";
        document.getElementById("b1").disabled = true;
        turn = 0;
    }else{
        document.getElementById("turnAnnounce").innerHTML= "X";
        document.getElementById("b1").value = "O"
        document.getElementById("b1").style.color = "#eeb341";
        document.getElementById("b1").disabled = true;
        turn = 1;
    }
}
function box2(){
    playCount++;
    if(turn == 1){
        document.getElementById("turnAnnounce").innerHTML= "O";
        document.getElementById("b2").value = "X";
        document.getElementById("b2").style.color = "#31c3be";
        document.getElementById("b2").disabled = true;
        turn = 0;
    }else{
        document.getElementById("turnAnnounce").innerHTML= "X";
        document.getElementById("b2").value = "O"
        document.getElementById("b2").style.color = "#eeb341";
        document.getElementById("b2").disabled = true;
        turn = 1;
    }
}
function box3(){
    playCount++;
    if(turn == 1){
        document.getElementById("turnAnnounce").innerHTML= "O";
        document.getElementById("b3").value = "X";
        document.getElementById("b3").style.color = "#31c3be";
        document.getElementById("b3").disabled = true;
        turn = 0;
    }else{
        document.getElementById("turnAnnounce").innerHTML= "X";
        document.getElementById("b3").value = "O"
        document.getElementById("b3").style.color = "#eeb341";
        document.getElementById("b3").disabled = true;
        turn = 1;
    }
}
function box4(){
    playCount++;
    if(turn == 1){
        document.getElementById("turnAnnounce").innerHTML= "O";
        document.getElementById("b4").value = "X";
        document.getElementById("b4").style.color = "#31c3be";
        document.getElementById("b4").disabled = true;
        turn = 0;
    }else{
        document.getElementById("turnAnnounce").innerHTML= "X";
        document.getElementById("b4").value = "O"
        document.getElementById("b4").style.color = "#eeb341";
        document.getElementById("b4").disabled = true;
        turn = 1;
    }
}
function box5(){
    playCount++;
    if(turn == 1){
        document.getElementById("turnAnnounce").innerHTML= "O";
        document.getElementById("b5").value = "X";
        document.getElementById("b5").style.color = "#31c3be";
        document.getElementById("b5").disabled = true;
        turn = 0;
    }else{
        document.getElementById("turnAnnounce").innerHTML= "X";
        document.getElementById("b5").value = "O"
        document.getElementById("b5").style.color = "#eeb341";
        document.getElementById("b5").disabled = true;
        turn = 1;
    }
}
function box6(){
    playCount++;
    if(turn == 1){
        document.getElementById("turnAnnounce").innerHTML= "O";
        document.getElementById("b6").value = "X";
        document.getElementById("b6").style.color = "#31c3be";
        document.getElementById("b6").disabled = true;
        turn = 0;
    }else{
        document.getElementById("turnAnnounce").innerHTML= "X";
        document.getElementById("b6").value = "O"
        document.getElementById("b6").style.color = "#eeb341";
        document.getElementById("b6").disabled = true;
        turn = 1;
    }
}
function box7(){
    playCount++;
    if(turn == 1){
        document.getElementById("turnAnnounce").innerHTML= "O";
        document.getElementById("b7").value = "X";
        document.getElementById("b7").style.color = "#31c3be";
        document.getElementById("b7").disabled = true;
        turn = 0;
    }else{
        document.getElementById("turnAnnounce").innerHTML= "X";
        document.getElementById("b7").value = "O"
        document.getElementById("b7").style.color = "#eeb341";
        document.getElementById("b7").disabled = true;
        turn = 1;
    }
}
function box8(){
    playCount++;
    if(turn == 1){
        document.getElementById("turnAnnounce").innerHTML= "O";
        document.getElementById("b8").value = "X";
        document.getElementById("b8").style.color = "#31c3be";
        document.getElementById("b8").disabled = true;
        turn = 0;
    }else{
        document.getElementById("turnAnnounce").innerHTML= "X";
        document.getElementById("b8").value = "O"
        document.getElementById("b8").style.color = "#eeb341";
        document.getElementById("b8").disabled = true;
        turn = 1;
    }
}
var xWinCount = 0;
function box9(){
    playCount++;
    if(turn == 1){
        document.getElementById("turnAnnounce").innerHTML= "O";
        document.getElementById("b9").value = "X";
        document.getElementById("b9").style.color = "#31c3be";
        document.getElementById("b9").disabled = true;
        turn = 0;
    }else{
        document.getElementById("turnAnnounce").innerHTML= "X";
        document.getElementById("b9").value = "O"
        document.getElementById("b9").style.color = "#eeb341";
        document.getElementById("b9").disabled = true;
        turn = 1;
    }
}
var yWinCount = 0;
var noWinCount = 0;

function checkWins(){

    var a, b, c, d, e, f, g, h, i;
    a=document.getElementById("b1").value;
    b=document.getElementById("b2").value;
    c=document.getElementById("b3").value;
    d=document.getElementById("b4").value;
    e=document.getElementById("b5").value;
    f=document.getElementById("b6").value;
    g=document.getElementById("b7").value;
    h=document.getElementById("b8").value;
    i=document.getElementById("b9").value;

    // for X WINS
    if(a=="X" && b=="X" && c=="X"){
        document.getElementById("winner").innerHTML= "X";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        xWinCount++;
        document.getElementById("xWon").innerHTML = xWinCount;
        document.getElementById("b1").style.backgroundColor="#31c3be";
        document.getElementById("b1").style.color="#1f3540";
        document.getElementById("b2").style.backgroundColor="#31c3be";
        document.getElementById("b2").style.color="#1f3540";
        document.getElementById("b3").style.backgroundColor="#31c3be";
        document.getElementById("b3").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=0;
        turn = 1;
    }else if(d=="X" && e=="X" && f=="X"){
        document.getElementById("winner").innerHTML= "X";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        xWinCount++;
        document.getElementById("xWon").innerHTML = xWinCount;
        document.getElementById("b4").style.backgroundColor="#31c3be";
        document.getElementById("b4").style.color="#1f3540";
        document.getElementById("b5").style.backgroundColor="#31c3be";
        document.getElementById("b5").style.color="#1f3540";
        document.getElementById("b6").style.backgroundColor="#31c3be";
        document.getElementById("b6").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=0;
        turn = 1;
    }else if(g=="X" && h=="X" && i=="X"){
        document.getElementById("winner").innerHTML= "X";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        xWinCount++;
        document.getElementById("xWon").innerHTML = xWinCount;
        document.getElementById("b7").style.backgroundColor="#31c3be";
        document.getElementById("b7").style.color="#1f3540";
        document.getElementById("b8").style.backgroundColor="#31c3be";
        document.getElementById("b8").style.color="#1f3540";
        document.getElementById("b9").style.backgroundColor="#31c3be";
        document.getElementById("b9").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=0;
        turn = 1;
    }else if(a=="X" && d=="X" && g=="X"){
        document.getElementById("winner").innerHTML= "X";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        xWinCount++;
        document.getElementById("xWon").innerHTML = xWinCount;
        document.getElementById("b1").style.backgroundColor="#31c3be";
        document.getElementById("b1").style.color="#1f3540";
        document.getElementById("b4").style.backgroundColor="#31c3be";
        document.getElementById("b4").style.color="#1f3540";
        document.getElementById("b7").style.backgroundColor="#31c3be";
        document.getElementById("b7").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=0;
        turn = 1;
    }else if(b=="X" && e=="X" && h=="X"){
        document.getElementById("winner").innerHTML= "X";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        xWinCount++;
        document.getElementById("xWon").innerHTML = xWinCount;
        document.getElementById("b2").style.backgroundColor="#31c3be";
        document.getElementById("b2").style.color="#1f3540";
        document.getElementById("b5").style.backgroundColor="#31c3be";
        document.getElementById("b5").style.color="#1f3540";
        document.getElementById("b8").style.backgroundColor="#31c3be";
        document.getElementById("b8").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=0;
        turn = 1;
    }else if(c=="X" && f=="X" && i=="X"){
        document.getElementById("winner").innerHTML= "X";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        xWinCount++;
        document.getElementById("xWon").innerHTML = xWinCount;
        document.getElementById("b3").style.backgroundColor="#31c3be";
        document.getElementById("b3").style.color="#1f3540";
        document.getElementById("b6").style.backgroundColor="#31c3be";
        document.getElementById("b6").style.color="#1f3540";
        document.getElementById("b9").style.backgroundColor="#31c3be";
        document.getElementById("b9").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=0;
        turn = 1;
    }else if(a=="X" && e=="X" && i=="X"){
        document.getElementById("winner").innerHTML= "X";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        xWinCount++;
        document.getElementById("xWon").innerHTML = xWinCount;
        document.getElementById("b1").style.backgroundColor="#31c3be";
        document.getElementById("b1").style.color="#1f3540";
        document.getElementById("b5").style.backgroundColor="#31c3be";
        document.getElementById("b5").style.color="#1f3540";
        document.getElementById("b9").style.backgroundColor="#31c3be";
        document.getElementById("b9").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=0;
        turn = 1;
    }else if(c=="X" && e=="X" && g=="X"){
        document.getElementById("winner").innerHTML= "X";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        xWinCount++;
        document.getElementById("xWon").innerHTML = xWinCount;
        document.getElementById("b3").style.backgroundColor="#31c3be";
        document.getElementById("b3").style.color="#1f3540";
        document.getElementById("b5").style.backgroundColor="#31c3be";
        document.getElementById("b5").style.color="#1f3540";
        document.getElementById("b7").style.backgroundColor="#31c3be";
        document.getElementById("b7").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=0;
        turn = 1;
    }

    // for O wins
    else if(a=="O" && b=="O" && c=="O"){
        document.getElementById("winner").innerHTML= "O";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        yWinCount++;
        document.getElementById("oWon").innerHTML = yWinCount;
        document.getElementById("b1").style.backgroundColor="#eeb341";
        document.getElementById("b1").style.color="#1f3540";
        document.getElementById("b2").style.backgroundColor="#eeb341";
        document.getElementById("b2").style.color="#1f3540";
        document.getElementById("b3").style.backgroundColor="#eeb341";
        document.getElementById("b3").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=1;
        turn = 0;
    }else if(d=="O" && e=="O" && f=="O"){
        document.getElementById("winner").innerHTML= "O";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        yWinCount++;
        document.getElementById("oWon").innerHTML = yWinCount;
        document.getElementById("b4").style.backgroundColor="#eeb341";
        document.getElementById("b4").style.color="#1f3540";
        document.getElementById("b5").style.backgroundColor="#eeb341";
        document.getElementById("b5").style.color="#1f3540";
        document.getElementById("b6").style.backgroundColor="#eeb341";
        document.getElementById("b6").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=1;
        turn = 0;
    }else if(g=="O" && h=="O" && i=="O"){
        document.getElementById("winner").innerHTML= "O";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        yWinCount++;
        document.getElementById("oWon").innerHTML = yWinCount;
        document.getElementById("b7").style.backgroundColor="#eeb341";
        document.getElementById("b7").style.color="#1f3540";
        document.getElementById("b8").style.backgroundColor="#eeb341";
        document.getElementById("b8").style.color="#1f3540";
        document.getElementById("b9").style.backgroundColor="#eeb341";
        document.getElementById("b9").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=1;
        turn = 0;
    }else if(a=="O" && d=="O" && g=="O"){
        document.getElementById("winner").innerHTML= "O";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        yWinCount++;
        document.getElementById("oWon").innerHTML = yWinCount;
        document.getElementById("b1").style.backgroundColor="#eeb341";
        document.getElementById("b1").style.color="#1f3540";
        document.getElementById("b4").style.backgroundColor="#eeb341";
        document.getElementById("b4").style.color="#1f3540";
        document.getElementById("b7").style.backgroundColor="#eeb341";
        document.getElementById("b7").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=1;
        turn = 0;
    }else if(b=="O" && e=="O" && h=="O"){
        document.getElementById("winner").innerHTML= "O";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        yWinCount++;
        document.getElementById("oWon").innerHTML = yWinCount;
        document.getElementById("b2").style.backgroundColor="#eeb341";
        document.getElementById("b2").style.color="#1f3540";
        document.getElementById("b5").style.backgroundColor="#eeb341";
        document.getElementById("b5").style.color="#1f3540";
        document.getElementById("b8").style.backgroundColor="#eeb341";
        document.getElementById("b8").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=1;
        turn = 0;
    }else if(c=="O" && f=="O" && i=="O"){
        document.getElementById("winner").innerHTML= "O";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        yWinCount++;
        document.getElementById("oWon").innerHTML = yWinCount;
        document.getElementById("b3").style.backgroundColor="#eeb341";
        document.getElementById("b3").style.color="#1f3540";
        document.getElementById("b6").style.backgroundColor="#eeb341";
        document.getElementById("b6").style.color="#1f3540";
        document.getElementById("b9").style.backgroundColor="#eeb341";
        document.getElementById("b9").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=1;
        turn = 0;
    }else if(a=="O" && e=="O" && i=="O"){
        document.getElementById("winner").innerHTML= "O";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        yWinCount++;
        document.getElementById("oWon").innerHTML = yWinCount;
        document.getElementById("b1").style.backgroundColor="#eeb341";
        document.getElementById("b1").style.color="#1f3540";
        document.getElementById("b5").style.backgroundColor="#eeb341";
        document.getElementById("b5").style.color="#1f3540";
        document.getElementById("b9").style.backgroundColor="#eeb341";
        document.getElementById("b9").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=1;
        turn = 0;
    }else if(c=="O" && e=="O" && g=="O"){
        document.getElementById("winner").innerHTML= "O";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        yWinCount++;
        document.getElementById("oWon").innerHTML = yWinCount;
        document.getElementById("b3").style.backgroundColor="#eeb341";
        document.getElementById("b3").style.color="#1f3540";
        document.getElementById("b5").style.backgroundColor="#eeb341";
        document.getElementById("b5").style.color="#1f3540";
        document.getElementById("b7").style.backgroundColor="#eeb341";
        document.getElementById("b7").style.color="#1f3540";
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        playCount=1;
        turn = 0;
    }

    // for TIES (draws)
    else if(playCount==9){
        document.getElementById("winner").innerHTML= "Nobody";
        document.getElementById("turnAnnounce").innerHTML= "NO";
        document.getElementById("annouceBox").style.visibility = "visible";
        noWinCount++;
        document.getElementById("noWins").innerHTML = noWinCount;
        document.getElementById("b1").disabled = true;
        document.getElementById("b2").disabled = true;
        document.getElementById("b3").disabled = true;
        document.getElementById("b4").disabled = true;
        document.getElementById("b5").disabled = true;
        document.getElementById("b6").disabled = true;
        document.getElementById("b7").disabled = true;
        document.getElementById("b8").disabled = true;
        document.getElementById("b9").disabled = true;
        turn=1;

    }

}