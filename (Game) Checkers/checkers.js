
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

  newCell1 = "";
  newCell2 = "";

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








function cellNum(cellId){
  
  clickedCell = cellId;
  console.log("clicked cell: \n" + clickedCell + "\n var = clickedCell");


    
  
    charX = clickedCell.charAt(5);
    charY = clickedCell.charAt(7);
  
  parseInt(charY);
  parseInt(charX);
  
 

    var one = 1;
    var placeHolder = null;

    if(currentPiece = 
    "checker red-checker 1" ||
    "checker red-checker 2" ||
    "checker red-checker 3" ||
    "checker red-checker 4" ||
    "checker red-checker 5" ||
    "checker red-checker 6" ||
    "checker red-checker 7" ||
    "checker red-checker 8" ||
    "checker red-checker 9" ||
    "checker red-checker 10"||
    "checker red-checker 11"||
    "checker red-checker 12" 
    ){

      console.log("alexa");

    
    
    
      

      newCell1X = (parseInt(charX) + parseInt(1));
      newCell1Y = (charY - 1);

      newCell2X = (1 + parseInt(charX));
      newCell2Y = (1 + parseInt(charY));

      newCell1 = ("cell-" + newCell1X + "-" + newCell1Y);
     

      newCell2 = ("cell-" + newCell2X + "-" + newCell2Y);
      


      console.log(newHiglightedCell1);
      console.log("new cell 1 is \n" + newCell1 + "\n var = newCell1");

      console.log("new cell 2 is \n" + newCell2 + "\n var = newCell2");


    
      if(chosenColor = "Reddd"){

        if(document.getElementsByClassName('checker').clicked = true){

          if(clickedCell = "cell-3-2"){

          }
      
        }

      }

      // "checker 4s infinite"
      
    }




  

















if(chosenColor.innerText === "Reddd" ){

  console.log("runnnnnn");
  
/* if(cellId.innerText === "cell-1-2"){
  
 console.log("namesss");

} */
}






//allow user to chose their position on the board (highlight a legal space)
   currentPiece =  "null";


  


       function Redpiece(className){
         for (let i = 0; i < Blk.length; i++) {
          red[i].style.animation = "block";
                          
        } 
  
         
        currentPiece = className;
        console.log("clicked checker: \n" + currentPiece + "\n var = currentPiece");
      }

       
  
  
      
      function Blkpiece(className){
        for (let i = 0; i < red.length; i++) {
          Blk[i].style.animation = "block";
                          
        }
        
        currentPiece = className;
        console.log("clicked checker: \n" + currentPiece + "\n var = currentPiece");
      }
      
      

































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


