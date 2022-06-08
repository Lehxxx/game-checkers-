
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
 whosTurn = document.getElementById('whosTurn');
const kingImg = document.getElementsByClassName('kingImg');
whoWon = document.getElementById('whoWon');



 document.getElementsByClassName('checker').onclick = Piece_Click;







//  && onesPiece.match(/((black))/) && currentPiece.match(/((red))/)









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

              whosTurn.innerText = "RED'S MOVE";
                      

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
         
         whosTurn.innerText = "BLACK'S MOVE";
          }          
          console.log(Blk);

       }

       

       if(chosenColor == "Reddd"){
        whosTurn.innerText = "RED'S MOVE";



       }
       if(chosenColor == "Blackk"){
        whosTurn.innerText = "BLACK'S MOVE";



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

  // RED BACKWARDS
  BnewCell1X = "";
  BnewCell1Y = "";

  BnewCell2X = "";
  BnewCell2Y = "";

  BnewCell3X = "";
  BnewCell3Y = "";

  BnewCell4X = "";
  BnewCell4Y = "";

  BnewCell1 = "";
  BnewCell2 = "";
  BnewCell3 = "";
  BnewCell4 = "";

  // BLACK BACKWARDS
  BBnewCell1X = "";
  BBnewCell1Y = "";

  BBnewCell2X = "";
  BBnewCell2Y = "";

  BBnewCell3X = "";
  BBnewCell3Y = "";

  BBnewCell4X = "";
  BBnewCell4Y = "";

  BBnewCell1 = "";
  BBnewCell2 = "";
  BBnewCell3 = "";
  BBnewCell4 = "";


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
    try {
      
   
   red[i].style.animation = "block";

  } catch ( e) {
    //TODO: handle exception
    console.log(e);
  }
                   
 } 
 
  
 currentPiece = className;
 currentPieceDiv = document.getElementById(currentPiece);
 console.log(currentPieceDiv);
 console.log("clicked checker: \n" + currentPiece + "\n var = currentPiece");
}


function Blkpiece(className){
 for (let i = 0; i < red.length; i++) {
   try {
     
   
   Blk[i].style.animation = "block";

  } catch ( e) {
    //TODO: handle exception
    console.log(e);
  }
                   
 }
 
 currentPiece = className;
 currentPieceDiv = document.getElementById(currentPiece);
 console.log(currentPieceDiv);
 console.log("clicked checker: \n" + currentPiece + "\n var = currentPiece");
}




try {
  currentKing = currentPiece.getAttribute("data-isking");
} catch ( e) {
  //TODO: handle exception
  console.log(e)
}



function cellNum(cellId){
  
  
  if(clickedCell){
    console.log(red);

    
    

    try {
      
    
    console.log(clickedCellDiv.id);
    console.log(currentPieceDiv.id);
    console.log(onesPiece);
    console.log(currentPiece);
  } catch (error) {
      console.log(error);
  }

    try {
      
    //tURN RED PIECE TO A KING 
    if(clickedCellDiv.id.match(/(cell-7)/) && currentPiece.match(/(red)/) ){

      console.log("RED KINGGGGG");

      //find the current piece's img tag ('king' logo)
    //piece's child element is the img tag
    pieceChild = document.getElementById(currentPiece).children;
    //get the specific element html by putting the piece's child into kingPiece
    kingPiece = pieceChild.item(0);
    //clicked king's ID
    king = kingPiece.id;
    console.log(king);
    //MAKE THE LOGO VISIBLE 
    kingPiece.style.visibility = "visible";
    //dataset either false or king-- King
    kingPiece.parentElement.setAttribute("data-isking", "king");
      
      
    }
    
    
    

  } catch (e) {
      console.log(e);
  }

  try {
      
    //tURN BLACK PIECE TO A KING 
    if(clickedCellDiv.id.match(/(cell-2)/) && currentPiece.match(/(black)/) ){

      console.log("BLACK KINGGGGG");

      //find the current piece's img tag ('king' logo)
    //piece's child element is the img tag
    pieceChild = document.getElementById(currentPiece).children;
    //get the specific element html by putting the piece's child into kingPiece
    kingPiece = pieceChild.item(0);
    //clicked king's ID
    king = kingPiece.id;
    console.log(king);
    //MAKE THE LOGO VISIBLE 
    kingPiece.style.visibility = "visible";
    //dataset either false or king-- King
    kingPiece.parentElement.setAttribute("data-isking", "king");
      

    }
    
    

  } catch (e) {
      console.log(e);
  }
    
    
  //move clicked piece into clicked cell if one or two is clicked (making it so the piece only moves is cell one or two is clicked )
  try {
    
  
    if(cellId == one?.id || cellId == two?.id){
      //set occupied to false 
    currentPieceDiv.parentElement.setAttribute("name", "false");

    //move selected piece to selected cell
    clickedCellDiv = document.getElementById(cellId);
    clickedCellDiv.appendChild(currentPieceDiv);

      //set occupied to true
    document.getElementById(cellId).setAttribute("name", "true");

    // clickedCellDiv.setAttribute("isoccupied", "true" );
    // currentPieceDiv.parentElement.setAttribute("isoccupied", "false");


    //change whos turn it is 
    if(currentPiece.match(/(red)/)){
      whosTurn.innerText = "Black's Turn";

    }
    if(currentPiece.match(/(black)/)){
      whosTurn.innerText = "Red's Turn";

    }
    

    
    }
  } catch (e) {
    console.log(e);
  }

    try {

      if(onesPiece.id.match(/(black)/) && currentPiece.match(/(red)/) || onesPiece.id.match(/(red)/) && currentPiece.match(/(black)/) ){
    
        console.log("works");
        
   

  try {
//if one is occupied and three is empty, then give the option to click three
    if(one && one.getAttribute("name") == "true" && three.getAttribute("name") == "false"){

      if(cellId == three?.id){
        //set occupied to false
        currentPieceDiv.parentElement.setAttribute("name", "false");

        //move selected piece to selected cell
        clickedCellDiv = document.getElementById(cellId);
        clickedCellDiv.appendChild(currentPieceDiv);

        //remove black piece
        one.innerText = ""; 

        //set occupied to false       
        document.getElementById(newCell1).setAttribute("name", "false");
    
        //set occupied to true
        document.getElementById(cellId).setAttribute("name", "true");
    
        // clickedCellDiv.setAttribute("isoccupied", "true" );
        // currentPieceDiv.parentElement.setAttribute("isoccupied", "false");

        
    
        }
    }

  
  } catch ( e) {
    //TODO: handle exception
    console.log(e);
    
  }



}
      
} catch (e) {
  //TODO: handle exception
  console.log(e);

}

  
try {

  if(twosPiece.id.match(/(black)/) && currentPiece.match(/(red)/) || twosPiece.id.match(/(red)/) && currentPiece.match(/(black)/) ){

    


    try {
    if(two && two.getAttribute("name") == "true" && four.getAttribute("name") == "false"){

      if(cellId == four?.id){
        //set occupied to false
        currentPieceDiv.parentElement.setAttribute("name", "false");

        //move selected piece to selected cell
        clickedCellDiv = document.getElementById(cellId);
        clickedCellDiv.appendChild(currentPieceDiv);

        //remove red piece
        two.innerText = "";
        
        //set occupied to false
        document.getElementById(newCell2).setAttribute("name", "false");
    
        //set occupied to true
        document.getElementById(cellId).setAttribute("name", "true");
    
        // clickedCellDiv.setAttribute("isoccupied", "true" );
        // currentPieceDiv.parentElement.setAttribute("isoccupied", "false");


        
    
        }
    }
      } catch ( e) {
        //TODO: handle exception
        console.log(e);

      }



    }
      
  } catch (e) {
    //TODO: handle exception
    console.log(e);
  
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
      

 

    // RED BACKWARDS---------------------------------------------------------------------------------------------------------------------------------------------------
  
      
    try {
      
    
    
    if(currentPiece.dataset.isking == "king"){

      console.log("THE KING HAS RISEN");
    
    
    try {
    
  
      if(cellId == Bone?.id || cellId == Btwo?.id){
        //set occupied to false 
      currentPieceDiv.parentElement.setAttribute("name", "false");
  
      //move selected piece to selected cell
      clickedCellDiv = document.getElementById(cellId);
      clickedCellDiv.appendChild(currentPieceDiv);
  
        //set occupied to true
      document.getElementById(cellId).setAttribute("name", "true");
  
      // clickedCellDiv.setAttribute("isoccupied", "true" );
      // currentPieceDiv.parentElement.setAttribute("isoccupied", "false");
  
  
      //change whos turn it is 
      if(currentPiece.match(/(red)/)){
        whosTurn.innerText = "Black's Turn";
  
      }
      if(currentPiece.match(/(black)/)){
        whosTurn.innerText = "Red's Turn";
  
      }
      
  
      
      }
    } catch (e) {
      console.log(e);
    }
  
      try {
  
        if(BonesPiece.id.match(/(black)/) && currentPiece.match(/(red)/) || BonesPiece.id.match(/(red)/) && currentPiece.match(/(black)/) ){
      
          console.log("works");
          
     
  
    try {
  //if one is occupied and three is empty, then give the option to click three
      if(Bone && Bone.getAttribute("name") == "true" && Bthree.getAttribute("name") == "false"){
  
        if(cellId == Bthree?.id){
          //set occupied to false
          currentPieceDiv.parentElement.setAttribute("name", "false");
  
          //move selected piece to selected cell
          clickedCellDiv = document.getElementById(cellId);
          clickedCellDiv.appendChild(currentPieceDiv);
  
          //remove black piece
          Bone.innerText = ""; 
  
          //set occupied to false       
          document.getElementById(BnewCell1).setAttribute("name", "false");
      
          //set occupied to true
          document.getElementById(cellId).setAttribute("name", "true");
      
          // clickedCellDiv.setAttribute("isoccupied", "true" );
          // currentPieceDiv.parentElement.setAttribute("isoccupied", "false");
  
          
      
          }
      }
  
    
    } catch ( e) {
      //TODO: handle exception
      console.log(e);
      
    }
  
  
  
  }
        
  } catch (e) {
    //TODO: handle exception
    console.log(e);
  
  }
  
    
  try {
  
    if(BtwosPiece.id.match(/(black)/) && currentPiece.match(/(red)/) || BtwosPiece.id.match(/(red)/) && currentPiece.match(/(black)/) ){
  
      
  
  
      try {
      if(Btwo && Btwo.getAttribute("name") == "true" && Bfour.getAttribute("name") == "false"){
  
        if(cellId == Bfour?.id){
          //set occupied to false
          currentPieceDiv.parentElement.setAttribute("name", "false");
  
          //move selected piece to selected cell
          clickedCellDiv = document.getElementById(cellId);
          clickedCellDiv.appendChild(currentPieceDiv);
  
          //remove red piece
          Btwo.innerText = "";
          
          //set occupied to false
          document.getElementById(BnewCell2).setAttribute("name", "false");
      
          //set occupied to true
          document.getElementById(cellId).setAttribute("name", "true");
      
          // clickedCellDiv.setAttribute("isoccupied", "true" );
          // currentPieceDiv.parentElement.setAttribute("isoccupied", "false");
  
  
          
      
          }
      }
        } catch ( e) {
          //TODO: handle exception
          console.log(e);
  
        }
  
  
  
      }
        
    } catch (e) {
      //TODO: handle exception
      console.log(e);
    
    }
  
      
        clickedCell = undefined;
  
        try {
  
        Bone.style.animation = "block";
        Btwo.style.animation = "block";
        Bthree.style.animation = "block";
        Bfour.style.animation = "block";
  
        } catch ( e) {
          //TODO: handle exception
          console.log(e);
  
        }
      }
    
    } catch ( e) {
      //TODO: handle exception
      console.log(e);

    }

        // BLACK BACKWARDS---------------------------------------------------------------------------------------------------------------------------------------------------
      
        try {
          
        
        if(currentPiece.dataset.isking == "king"){

          console.log("THE KING HAS RISEN");
    
        try {

      
    
  
      if(cellId == BBone?.id || cellId == BBtwo?.id){
        //set occupied to false 
      currentPieceDiv.parentElement.setAttribute("name", "false");
  
      //move selected piece to selected cell
      clickedCellDiv = document.getElementById(cellId);
      clickedCellDiv.appendChild(currentPieceDiv);
  
        //set occupied to true
      document.getElementById(cellId).setAttribute("name", "true");
  
      // clickedCellDiv.setAttribute("isoccupied", "true" );
      // currentPieceDiv.parentElement.setAttribute("isoccupied", "false");
  
  
      //change whos turn it is 
      if(currentPiece.match(/(red)/)){
        whosTurn.innerText = "Black's Turn";
  
      }
      if(currentPiece.match(/(black)/)){
        whosTurn.innerText = "Red's Turn";
  
      }
      
  
      
      }
    } catch (e) {
      console.log(e);
    }
  
      try {
  
        if(BBonesPiece.id.match(/(black)/) && currentPiece.match(/(red)/) || BBonesPiece.id.match(/(red)/) && currentPiece.match(/(black)/) ){
      
          console.log("works");
          
     
  
    try {
  //if one is occupied and three is empty, then give the option to click three
      if(BBone && BBone.getAttribute("name") == "true" && BBthree.getAttribute("name") == "false"){
  
        if(cellId == BBthree?.id){
          //set occupied to false
          currentPieceDiv.parentElement.setAttribute("name", "false");
  
          //move selected piece to selected cell
          clickedCellDiv = document.getElementById(cellId);
          clickedCellDiv.appendChild(currentPieceDiv);
  
          //remove black piece
          BBone.innerText = ""; 
  
          //set occupied to false       
          document.getElementById(BBnewCell1).setAttribute("name", "false");
      
          //set occupied to true
          document.getElementById(cellId).setAttribute("name", "true");
      
          // clickedCellDiv.setAttribute("isoccupied", "true" );
          // currentPieceDiv.parentElement.setAttribute("isoccupied", "false");
  
          
      
          }
      }
  
    
    } catch ( e) {
      //TODO: handle exception
      console.log(e);
      
    }
  
  
  
  }
        
  } catch (e) {
    //TODO: handle exception
    console.log(e);
  
  }
  
    
  try {
  
    if(BBtwosPiece.id.match(/(black)/) && currentPiece.match(/(red)/) || BBtwosPiece.id.match(/(red)/) && currentPiece.match(/(black)/) ){
  
      
  
  
      try {
      if(BBtwo && BBtwo.getAttribute("name") == "true" && BBfour.getAttribute("name") == "false"){
  
        if(cellId == BBfour?.id){
          //set occupied to false
          currentPieceDiv.parentElement.setAttribute("name", "false");
  
          //move selected piece to selected cell
          clickedCellDiv = document.getElementById(cellId);
          clickedCellDiv.appendChild(currentPieceDiv);
  
          //remove red piece
          BBtwo.innerText = "";
          
          //set occupied to false
          document.getElementById(BBnewCell2).setAttribute("name", "false");
      
          //set occupied to true
          document.getElementById(cellId).setAttribute("name", "true");
      
          // clickedCellDiv.setAttribute("isoccupied", "true" );
          // currentPieceDiv.parentElement.setAttribute("isoccupied", "false");
  
  
          
      
          }
      }
        } catch ( e) {
          //TODO: handle exception
          console.log(e);
  
        }
  
  
  
      }
        
    } catch (e) {
      //TODO: handle exception
      console.log(e);
    
    }
  
      
        clickedCell = undefined;
  
        try {
  
        BBone.style.animation = "block";
        BBtwo.style.animation = "block";
        BBthree.style.animation = "block";
        BBfour.style.animation = "block";
  
        } catch ( e) {
          //TODO: handle exception
          console.log(e);
  
        }
        
  
   
  

      }
    } catch ( e) {
      //TODO: handle exception
      console.log(e);

    }
   
  }
  else{


    if(red.length == 0 ){
      whoWon.innerText = "Black Wins!";
      console.log("black wins");
    }
    if(Blk.length == 0 ){
      whoWon.innerText = "Red Wins!";
      console.log("red wins");
    }
    

    try {

      

      one.style.animation = "block";
      two.style.animation = "block";
      three.style.animation = "block";
      four.style.animation = "block";

      Bone.style.animation = "block";
      Btwo.style.animation = "block";
      Bthree.style.animation = "block";
      Bfour.style.animation = "block";

      BBone.style.animation = "block";
      BBtwo.style.animation = "block";
      BBthree.style.animation = "block";
      BBfour.style.animation = "block";

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

// RED BACKWARDS-------------------------------------------
BnewCell1X = (parseInt(charX) - parseInt(1) );
BnewCell1Y = (parseInt(charY) - parseInt(1) );

BnewCell2X = (parseInt(charX) - parseInt(1) );
BnewCell2Y = (parseInt(charY) + parseInt(1) );


BnewCell3X = (parseInt(charX) - parseInt(2) );
BnewCell3Y = (Number(charY) - parseInt(2) );

BnewCell4X = (parseInt(charX) - parseInt(2));
BnewCell4Y = (parseInt(charY) + parseInt(2) );

// BLACK BACKWARDS-------------------------------------------
BBnewCell1X = (parseInt(charX) + parseInt(1) );
BBnewCell1Y = (parseInt(charY) - parseInt(1) );

BBnewCell2X = (parseInt(charX) + parseInt(1) );
BBnewCell2Y = (parseInt(charY) + parseInt(1) );


BBnewCell3X = (parseInt(charX) + parseInt(2) );
BBnewCell3Y = (Number(charY) - parseInt(2) );

BBnewCell4X = (parseInt(charX) + parseInt(2));
BBnewCell4Y = (parseInt(charY) + parseInt(2) );


//concatenate to create new cell id as string
newCell1 = ("cell-" + newCell1X + "-" + newCell1Y);


newCell2 = ("cell-" + newCell2X + "-" + newCell2Y);

newCell3 = ("cell-" + newCell3X + "-" + newCell3Y);


newCell4 = ("cell-" + newCell4X + "-" + newCell4Y);

//RED BACKWARDS----------------------------------------------
BnewCell1 = ("cell-" + BnewCell1X + "-" + BnewCell1Y);


BnewCell2 = ("cell-" + BnewCell2X + "-" + BnewCell2Y);

BnewCell3 = ("cell-" + BnewCell3X + "-" + BnewCell3Y);


BnewCell4 = ("cell-" + BnewCell4X + "-" + BnewCell4Y);

//BLACK BACKWARDS----------------------------------------------
BBnewCell1 = ("cell-" + BBnewCell1X + "-" + BBnewCell1Y);


BBnewCell2 = ("cell-" + BBnewCell2X + "-" + BBnewCell2Y);

BBnewCell3 = ("cell-" + BBnewCell3X + "-" + BBnewCell3Y);


BBnewCell4 = ("cell-" + BBnewCell4X + "-" + BBnewCell4Y);

console.log(newHiglightedCell1);
console.log("new cell 1 is \n" + newCell1 + "\n var = newCell1");

console.log("new cell 2 is \n" + newCell2 + "\n var = newCell2");

console.log("new cell 3 is \n" + newCell3 + "\n var = newCell3");

console.log("new cell 4 is \n" + newCell4 + "\n var = newCell4");

//RED BACKWARDS========================================================

console.log("new RED cell 1B is \n" + BnewCell1 + "\n var = BnewCell1");

console.log("new RED cell 2B is \n" + BnewCell2 + "\n var = BnewCell2");

console.log("new RED cell 3B is \n" + BnewCell3 + "\n var = BnewCell3");

console.log("new RED cell 4B is \n" + BnewCell4 + "\n var = BnewCell4");

//BLACK BACKWARDS========================================================

console.log("new BLACK cell 1BB is \n" + BBnewCell1 + "\n var = BBnewCell1");

console.log("new BLACK cell 2BB is \n" + BBnewCell2 + "\n var = BBnewCell2");

console.log("new BLACK cell 3BB is \n" + BBnewCell3 + "\n var = BBnewCell3");

console.log("new BLACK cell 4BB is \n" + BBnewCell4 + "\n var = BBnewCell4");

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

//RED BACKWARDS-------------------------------------------
BnewCell1X = (parseInt(charX) - parseInt(1) );
BnewCell1Y = (parseInt(charY) - parseInt(1) );

BnewCell2X = (parseInt(charX) - parseInt(1) );
BnewCell2Y = (parseInt(charY) + parseInt(1) );


BnewCell3X = (parseInt(charX) - parseInt(2) );
BnewCell3Y = (Number(charY) - parseInt(2) );

BnewCell4X = (parseInt(charX) - parseInt(2));
BnewCell4Y = (parseInt(charY) + parseInt(2) );

// BLACK BACKWARDS-------------------------------------------
BBnewCell1X = (parseInt(charX) + parseInt(1) );
BBnewCell1Y = (parseInt(charY) - parseInt(1) );

BBnewCell2X = (parseInt(charX) + parseInt(1) );
BBnewCell2Y = (parseInt(charY) + parseInt(1) );


BBnewCell3X = (parseInt(charX) + parseInt(2) );
BBnewCell3Y = (Number(charY) - parseInt(2) );

BBnewCell4X = (parseInt(charX) + parseInt(2));
BBnewCell4Y = (parseInt(charY) + parseInt(2) );




newCell1 = ("cell-" + newCell1X + "-" + newCell1Y);


newCell2 = ("cell-" + newCell2X + "-" + newCell2Y);

newCell3 = ("cell-" + newCell3X + "-" + newCell3Y);


newCell4 = ("cell-" + newCell4X + "-" + newCell4Y);

//RED BAKWARDS----------------------------------------------
BnewCell1 = ("cell-" + BnewCell1X + "-" + BnewCell1Y);


BnewCell2 = ("cell-" + BnewCell2X + "-" + BnewCell2Y);

BnewCell3 = ("cell-" + BnewCell3X + "-" + BnewCell3Y);


BnewCell4 = ("cell-" + BnewCell4X + "-" + BnewCell4Y);

//BLACK BACKWARDS----------------------------------------------
BBnewCell1 = ("cell-" + BBnewCell1X + "-" + BBnewCell1Y);


BBnewCell2 = ("cell-" + BBnewCell2X + "-" + BBnewCell2Y);

BBnewCell3 = ("cell-" + BBnewCell3X + "-" + BBnewCell3Y);


BBnewCell4 = ("cell-" + BBnewCell4X + "-" + BBnewCell4Y);

console.log(newHiglightedCell1);
console.log("new cell 1 is \n" + newCell1 + "\n var = newCell1");

console.log("new cell 2 is \n" + newCell2 + "\n var = newCell2");

console.log("new cell 3 is \n" + newCell3 + "\n var = newCell3");

console.log("new cell 4 is \n" + newCell4 + "\n var = newCell4");

//RED BACKWARDS========================================================

console.log("new cell 1B is \n" + BnewCell1 + "\n var = BnewCell1");

console.log("new cell 2B is \n" + BnewCell2 + "\n var = BnewCell2");

console.log("new cell 3B is \n" + BnewCell3 + "\n var = BnewCell3");

console.log("new cell 4B is \n" + BnewCell4 + "\n var = BnewCell4");

//BLACK BACKWARDS========================================================

console.log("new BLACK cell 1BB is \n" + BBnewCell1 + "\n var = BBnewCell1");

console.log("new BLACK cell 2BB is \n" + BBnewCell2 + "\n var = BBnewCell2");

console.log("new BLACK cell 3BB is \n" + BBnewCell3 + "\n var = BBnewCell3");

console.log("new BLACK cell 4BB is \n" + BBnewCell4 + "\n var = BBnewCell4");

}

try {
  


one = document.getElementById(newCell1);
two = document.getElementById(newCell2);
three = document.getElementById(newCell3);
four = document.getElementById(newCell4);

//RED BACKWARDS--------------------------------------
Bone = document.getElementById(BnewCell1);
Btwo = document.getElementById(BnewCell2);
Bthree = document.getElementById(BnewCell3);
Bfour = document.getElementById(BnewCell4);

//BLACK BACKWARDS--------------------------------------
BBone = document.getElementById(BBnewCell1);
BBtwo = document.getElementById(BBnewCell2);
BBthree = document.getElementById(BBnewCell3);
BBfour = document.getElementById(BBnewCell4);

//--------------------------------------------------------
onesPiece = document.getElementById(newCell1).children[0];
twosPiece = document.getElementById(newCell2).children[0];
onesPieceId = document.getElementById(onesPiece);


//RED BACKWARDS-------------------------------------------------
BonesPiece = document.getElementById(BnewCell1).children[0];
BtwosPiece = document.getElementById(BnewCell2).children[0];
BonesPieceId = document.getElementById(BonesPiece);

//BLACK BACKWARDS-------------------------------------------------
BBonesPiece = document.getElementById(BBnewCell1).children[0];
BBtwosPiece = document.getElementById(BBnewCell2).children[0];
BBonesPieceId = document.getElementById(BBonesPiece);



console.log(twosPiece);
console.log(onesPieceId);

//RED BACKWARDS
console.log(BtwosPiece);
console.log(BonesPieceId);

//BLACK BACKWARDS
console.log(BBtwosPiece);
console.log(BBonesPieceId);


// const theAttribute = link.getAttribute('data-colorpiece');
const div = document.querySelector("div[data-colorpiece]");

  wordRed = 'red';


} catch ( e) {
  //TODO: handle exception
  console.log(e);
}




  

    

      


      
  




//console.log(one.getAttribute("isOccupied"));
console.log(one);
console.log(two);
console.log(three);
console.log(four);
console.log(Bone);
console.log(Btwo);
console.log(Bthree);
console.log(Bfour);
console.log(BBone);
console.log(BBtwo);
console.log(BBthree);
console.log(BBfour);


try {
  

if(one && one.getAttribute("name") == "false"){


try {
  one.style.animation = "checker 4s infinite";
  three.style.animation = "block";
} catch (e) {
  //TODO: handle exception
  console.log(e);
}


}
 else if( three.getAttribute("name") == "false" && currentPiece.match(/(black)/) && onesPiece.id.match(/(red)/)) {
   
   try {
    three.style.animation = "checker 4s infinite";
    one.style.animation = "block";
  } catch (e) {
    //TODO: handle exception
    console.log(e);
  }
   
   
  
  }
  else if( three.getAttribute("name") == "false" && currentPiece.match(/(red)/) && onesPiece.id.match(/(black)/)) {
   
    try {
     three.style.animation = "checker 4s infinite";
     one.style.animation = "block";
   } catch (e) {
     //TODO: handle exception
     console.log(e);
   }
    
    
   
   }


  } catch ( e) {
    //TODO: handle exception
    console.log(e);
  }

try {
  

if(two && two.getAttribute("name") == "false"){
  try {
    two.style.animation = "checker 4s infinite";
    four.style.animation = "block";
  } catch (e) {
    //TODO: handle exception
    console.log(e);
  }
  


}


 else if(four.getAttribute("name") == "false" && currentPiece.match(/(red)/) && twosPiece.id.match(/(black)/)){
  try {
    four.style.animation = "checker 4s infinite";
    two.style.animation = "block";
  } catch (e) {
    //TODO: handle exception
    console.log(e);
  }
   
 }



 
 else if( four.getAttribute("name") == "false" && currentPiece.match(/(black)/) && twosPiece.id.match(/(red)/)){
  try {
    four.style.animation = "checker 4s infinite";
    two.style.animation = "block";
  } catch (e) {
    //TODO: handle exception
    console.log(e);
  }
   
 }
} catch (error) {
  console.log(error);
}



//RED BACKWARDS HIGHLIGHTING NEXT PIECE----------------------------------------------------------------------------------------------

  
//check if the piece is a king
try {
  




if(currentKing == "king"){

  console.log("THE KING HAS RISEN");




try {
  

  if(Bone && Bone.getAttribute("name") == "false"){
  
  
  try {
    Bone.style.animation = "checker 4s infinite";
    Bthree.style.animation = "block";
  } catch (e) {
    //TODO: handle exception
    console.log(e);
  }
  
  
  }
   else if( Bthree.getAttribute("name") == "false" && currentPiece.match(/(black)/) && BonesPiece.id.match(/(red)/)) {
     
     try {
      Bthree.style.animation = "checker 4s infinite";
      Bone.style.animation = "block";
    } catch (e) {
      //TODO: handle exception
      console.log(e);
    }
     
     
    
    }
    else if( Bthree.getAttribute("name") == "false" && currentPiece.match(/(red)/) && BonesPiece.id.match(/(black)/)) {
     
      try {
       Bthree.style.animation = "checker 4s infinite";
       Bone.style.animation = "block";
     } catch (e) {
       //TODO: handle exception
       console.log(e);
     }
      
      
     
     }
  
  
    } catch ( e) {
      //TODO: handle exception
      console.log(e);
    }
  
  try {
    
  
  if(Btwo && Btwo.getAttribute("name") == "false"){
    try {
      Btwo.style.animation = "checker 4s infinite";
      Bfour.style.animation = "block";
    } catch (e) {
      //TODO: handle exception
      console.log(e);
    }
    
  
  
  }
  
  
   else if(Bfour.getAttribute("name") == "false" && currentPiece.match(/(red)/) && BtwosPiece.id.match(/(black)/)){
    try {
      Bfour.style.animation = "checker 4s infinite";
      Btwo.style.animation = "block";
    } catch (e) {
      //TODO: handle exception
      console.log(e);
    }
     
   }
  
  
  
   
   else if( Bfour.getAttribute("name") == "false" && currentPiece.match(/(black)/) && BtwosPiece.id.match(/(red)/)){
    try {
      Bfour.style.animation = "checker 4s infinite";
      Btwo.style.animation = "block";
    } catch (e) {
      //TODO: handle exception
      console.log(e);
    }
     
   }
   
  } catch (error) {
    console.log(error);
  }

}

} catch ( e) {
  //TODO: handle exception
  console.log(e);

}

  //BLACK BACKWARDS HIGHLIGHTING NEXT PIECE----------------------------------------------------------------------------------------------
try {

  

  if(currentKing == "king"){

    console.log("THE KING HAS RISEN");
  
  
  try {
    
  
    if(BBone && BBone.getAttribute("name") == "false"){
    
    
    try {
      BBone.style.animation = "checker 4s infinite";
      BBthree.style.animation = "block";
    } catch (e) {
      //TODO: handle exception
      console.log(e);
    }
    
    
    }
     else if( BBthree.getAttribute("name") == "false" && currentPiece.match(/(black)/) && BBonesPiece.id.match(/(red)/)) {
       
       try {
        BBthree.style.animation = "checker 4s infinite";
        BBone.style.animation = "block";
      } catch (e) {
        //TODO: handle exception
        console.log(e);
      }
       
       
      
      }
      else if( BBthree.getAttribute("name") == "false" && currentPiece.match(/(red)/) && BBonesPiece.id.match(/(black)/)) {
       
        try {
         BBthree.style.animation = "checker 4s infinite";
         BBone.style.animation = "block";
       } catch (e) {
         //TODO: handle exception
         console.log(e);
       }
        
        
       
       }
    
    
      } catch ( e) {
        //TODO: handle exception
        console.log(e);
      }
    
    try {
      
    
    if(BBtwo && BBtwo.getAttribute("name") == "false"){
      try {
        BBtwo.style.animation = "checker 4s infinite";
        BBfour.style.animation = "block";
      } catch (e) {
        //TODO: handle exception
        console.log(e);
      }
      
    
    
    }
    
    
     else if(BBfour.getAttribute("name") == "false" && currentPiece.match(/(red)/) && BBtwosPiece.id.match(/(black)/)){
      try {
        BBfour.style.animation = "checker 4s infinite";
        BBtwo.style.animation = "block";
      } catch (e) {
        //TODO: handle exception
        console.log(e);
      }
       
     }
    
    
    
     
     else if( BBfour.getAttribute("name") == "false" && currentPiece.match(/(black)/) && BBtwosPiece.id.match(/(red)/)){
      try {
        BBfour.style.animation = "checker 4s infinite";
        BBtwo.style.animation = "block";
      } catch (e) {
        //TODO: handle exception
        console.log(e);
      }
       
     }
     
    } catch (error) {
      console.log(error);
    }
  



      }
      
    } catch ( e) {
      //TODO: handle exception
      console.log(e);

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


