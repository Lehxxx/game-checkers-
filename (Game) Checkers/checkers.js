
//  left();
//  right();
//  bLeft();
//  bRight();
//  leftJump();
//  rightJump();
//  bLeftJump();
//  bRightJump();
//  switchTurns();
//  startGame();
//  endGame();
//  illegalMove();
//  changeKing();
//  getGame();
//  execute();
// play()
//CONST AND VARIABLES 
const redChecker = document.getElementById("red-checker-piece");
const blackChecker = document.getElementById("black-checker-piece");
const playBtn = document.getElementById("plyBtn");
const ChooseColorText = document.getElementById("chooseClrTxt");
const redChkr = document.getElementById('red-checker-piece');
const BlkChkr = document.getElementById('black-checker-piece');
const red = document.getElementsByClassName('red-checker');
const Blk = document.getElementsByClassName('black-checker');
 checker = document.getElementsByClassName('checker');



 document.getElementsByClassName('checker').onclick = Piece_Click;




















//play button that starts the game, then 
   

function playFunction(){
    ChooseColorText.style.display ='block';
    console.log("show");
    
    }

   
    


//"choose a color" :blacks or reds (highlight every on of their pieces on the board)

    


    

      chosenColor = "null";
     

    function chooseRed(){


      




         chosenColor = "Reddd";
         console.log(chosenColor);

          for (let i = 0; i < red.length; i++) {
              Blk[i].style.animation = "block";
              console.log(red[i].style.animation);
              red[i].style.animation = "checker 4s infinite";
              console.log(red[i].style.animation);
                      

            }
         console.log(red);

         if(chosenColor === "Reddd"){

    }
    
      }

      function chooseBlk(){           
        chosenColor = "Blackk";
        console.log(chosenColor);
        for (let i = 0; i < Blk.length; i++) {
         red[i].style.animation = "block";
         console.log(Blk[i].style.animation);
         Blk[i].style.animation = "checker 4s infinite";
         console.log(Blk[i].style.animation);                     
          }          
          console.log(Blk);

       }

      


//allow user to select their first piece 

/* cell 3-2, 3-4, 3-6, 3-8
 document.querySelectorAll('div').forEach(occurence => {
     let ID = occurence.getAttribute('ID');
     occurence.addEventListener('click', function() {
       console.log( ID ) 
       let clickedPiece = ID;
     } );
   }); */


  nextMove ="";
  clickedPiece ="";
  clickedCell ="";

  newCell1X = "";
  newCell1Y = "";

  newCell2X = "";
  newCell2Y = "";

  newCell3X = "";
  newCell3Y = "";

  newCell4X = "";
  newCell4Y = "";

  newCell1 = "";
  newCell2 = "";
  newCell3 = "";
  newCell4 = "";

  newHiglightedCell1 = "";
  newHiglightedCell2 = "";

  availableMove1 = ""; 
  availableMove2 = ""; 
  availableMove3 = ""; 
  availableMove4 = ""; 

  charX = "";
  charY = "";


function Piece_Click(clicked){

clickedPiece = this.id;
console.log("checker clicked: " + clickedPiece);


}


//allow user to chose their position on the board (highlight a legal space)
currentPiece =  "null";

   

  


function Redpiece(className){
  for (let i = 0; i < Blk.length; i++) {
   red[i].style.animation = "block";
                   
 } 
 
  
 currentPiece = className;
 currentPieceDiv = document.getElementById(currentPiece);
 console.log(currentPieceDiv);
 console.log("clicked checker: \n" + currentPiece + "\n var = currentPiece");
}


function Blkpiece(className){
 for (let i = 0; i < red.length; i++) {
   Blk[i].style.animation = "block";
                   
 }
 
 currentPiece = className;
 currentPieceDiv = document.getElementById(currentPiece);
 console.log(currentPieceDiv);
 console.log("clicked checker: \n" + currentPiece + "\n var = currentPiece");
}








function cellNum(cellId){
  if(clickedCell){
    
    

    if(cellId == one?.id || cellId == two?.id){

    currentPieceDiv.parentElement.setAttribute("name", "false");
    clickedCellDiv = document.getElementById(cellId);
    clickedCellDiv.appendChild(currentPieceDiv);


    document.getElementById(cellId).setAttribute("name", "true");

    // clickedCellDiv.setAttribute("isoccupied", "true" );
    // currentPieceDiv.parentElement.setAttribute("isoccupied", "false");

    
    }
    
      clickedCell = undefined;

      try {
      one.style.animation = "block";
      two.style.animation = "block";
      three.style.animation = "block";
      four.style.animation = "block";

      } catch ( e) {
        //TODO: handle exception
        console.log(e);

      }
      

      

    



  }
  else{
    try {
      one.style.animation = "block";
      two.style.animation = "block";
      three.style.animation = "block";
      four.style.animation = "block";

      } catch ( e) {
        //TODO: handle exception
        console.log(e);

      }
     

  clickedCell = cellId;
  console.log("clicked cell: \n" + clickedCell + "\n var = clickedCell");


    
  
    charX = clickedCell.charAt(5);
    charY = clickedCell.charAt(7);
  
  parseInt(charY);
  parseInt(charX);
  
 

    
    var placeHolder = null;

    // if(currentPiece == 
    // "checker red-checker 1" ||
    // "checker red-checker 2" ||
    // "checker red-checker 3" ||
    // "checker red-checker 4" ||
    // "checker red-checker 5" ||
    // "checker red-checker 6" ||
    // "checker red-checker 7" ||
    // "checker red-checker 8" ||
    // "checker red-checker 9" ||
    // "checker red-checker 10"||
    // "checker red-checker 11"||
    // "checker red-checker 12" 
    // ){

      console.log("alexa");




 //if red piece clicked 
 if(currentPiece.match(/(red)/)){
  console.log("piece is reddd")
//COMPUTE NEW CELL
newCell1X = (parseInt(charX) + parseInt(1));
newCell1Y = (charY - 1);

newCell2X = (1 + parseInt(charX));
newCell2Y = (1 + parseInt(charY));


newCell3X = (parseInt(charX) + parseInt(2));
newCell3Y = (Number(charY) - 2);

newCell4X = (2 + parseInt(charX));
newCell4Y = (2 + parseInt(charY));

newCell1 = ("cell-" + newCell1X + "-" + newCell1Y);


newCell2 = ("cell-" + newCell2X + "-" + newCell2Y);

newCell3 = ("cell-" + newCell3X + "-" + newCell3Y);


newCell4 = ("cell-" + newCell4X + "-" + newCell4Y);

console.log(newHiglightedCell1);
console.log("new cell 1 is \n" + newCell1 + "\n var = newCell1");

console.log("new cell 2 is \n" + newCell2 + "\n var = newCell2");

console.log("new cell 3 is \n" + newCell3 + "\n var = newCell3");

console.log("new cell 4 is \n" + newCell4 + "\n var = newCell4");

//SEE IF NEW CELLS ARE EMPTY
//IF EMPTY, HIGHLIGHT CELL AND GIVE TO "AVAILABLEMOVE"
}


//if black piece clicked
if(currentPiece.match(/((black))/)){
  console.log("piece is BLACK")

newCell1X = (parseInt(charX) - parseInt(1));
newCell1Y = (Number(charY) - 1);

newCell2X = (parseInt(charX) - 1);
newCell2Y = (1 + parseInt(charY));




newCell3X = (parseInt(charX) - parseInt(2));
newCell3Y = (Number(charY) - 2);

newCell4X = (parseInt(charX) - 2);
newCell4Y = (parseInt(charY) + 2);

newCell1 = ("cell-" + newCell1X + "-" + newCell1Y);


newCell2 = ("cell-" + newCell2X + "-" + newCell2Y);

newCell3 = ("cell-" + newCell3X + "-" + newCell3Y);


newCell4 = ("cell-" + newCell4X + "-" + newCell4Y);

console.log(newHiglightedCell1);
console.log("new cell 1 is \n" + newCell1 + "\n var = newCell1");

console.log("new cell 2 is \n" + newCell2 + "\n var = newCell2");

console.log("new cell 3 is \n" + newCell3 + "\n var = newCell3");

console.log("new cell 4 is \n" + newCell4 + "\n var = newCell4");

}

one = document.getElementById(newCell1);
two = document.getElementById(newCell2);
three = document.getElementById(newCell3);
four = document.getElementById(newCell4);

//console.log(one.getAttribute("isOccupied"));



if(one && one.getAttribute("name") == "false"){


try {
  one.style.animation = "checker 4s infinite";
  three.style.animation = "block";
} catch (e) {
  //TODO: handle exception
  console.log(e);
}


}
 else {
   
   try {
    three.style.animation = "checker 4s infinite";
    one.style.animation = "block";
  } catch (e) {
    //TODO: handle exception
    console.log(e);
  }
   
   
  
  }



if(two.getAttribute("name") == "false"){
  try {
    two.style.animation = "checker 4s infinite";
    four.style.animation = "block";
  } catch (e) {
    //TODO: handle exception
    console.log(e);
  }
  


}
 else{
  try {
    four.style.animation = "checker 4s infinite";
    two.style.animation = "block";
  } catch (e) {
    //TODO: handle exception
    console.log(e);
  }
   
 }







    
    
    
      

      

    

    console.log(chosenColor);
    
      if(chosenColor === "Reddd"){
        

        if(document.getElementsByClassName('checker').clicked = true){

          if(clickedCell === "cell-3-2"){

          }
      
        }

      }

      // "checker 4s infinite"
      




  }

    }//end of cellNum




  







  









if(chosenColor.innerText === "Reddd" ){

  console.log("runnnnnn");
  
/* if(cellId.innerText === "cell-1-2"){
  
 console.log("namesss");

} */
}

// function once() {

//   checker.removeEventListener("click", once);
  
  
//   }
//   checker.addEventListener("click", once);
//   







    
      
      

































// console.log(a,b)

//generallly speaking there is only o=ne java thread. and that can be a good yikes at sometimes.

// window.addEventListener('load',(event) =>{
// let a = 0;
// setInterval(() =>){
//     console.log('hi',a);
//     a+1;
// )

// }
// ]


// })


