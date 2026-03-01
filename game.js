function creategameboard(){
     let board=[" "," "," "," "," "," "," "," "," "];
     
   function mark(ind,symbol){
      if(board[ind]==" "){
         board[ind]=symbol;
         return true;
      }
      return false;
      
   }
   function getboard(){
    let boardcpy=board.slice(0,9);
 
    return boardcpy;
   }
   function iswin(symbol){
       const brd=getboard();
       if((brd[0]==symbol&&brd[1]==symbol)&&(brd[2]==symbol)){
               return true;
       }
       if((brd[0]==symbol&&brd[3]==symbol)&&(brd[6]==symbol)){
               return true;
       }
       if((brd[3]==symbol&&brd[4]==symbol)&&(brd[5]==symbol)){
               return true;
       }
       if((brd[6]==symbol&&brd[7]==symbol)&&(brd[8]==symbol)){
               return true;
       }
       if((brd[2]==symbol&&brd[5]==symbol)&&(brd[8]==symbol)){
               return true;
       }
       if((brd[1]==symbol&&brd[4]==symbol)&&(brd[7]==symbol)){
               return true;
       }
       if((brd[0]==symbol&&brd[4]==symbol)&&(brd[8]==symbol)){
               return true;
       }
       if((brd[2]==symbol&&brd[4]==symbol)&&(brd[6]==symbol)){
               return true;
       }

       
       return false;
   }
     return {mark,getboard,iswin}

}

function createplayer(name,symbol){
  
    return {
        name,symbol
    }
}
function Gamecontroller(playerone,playertwo){
   
   const cb=creategameboard();
   let flagwinner=false;
   let playerlist=[];
    playerlist.push(createplayer(playerone,"X"));
    playerlist.push(createplayer(playertwo,"O"));
   let currplayer=playerlist[0];
       function makemove(index,element){
        if(flagwinner){
            return;
        }
         let imgx=document.createElement('img');
        imgx.src="./x.png";
         let imgo=document.createElement('img');
        imgo.src="./o.png";
        let temp=currplayer;
        if(cb.mark(index,currplayer.symbol)){
            
            if(currplayer==playerlist[0]){
                    element.appendChild(imgx);
                    currplayer=playerlist[1];

                }
                else{
                    element.appendChild(imgo);
                    currplayer=playerlist[0];
                }
              
                }else{
            alert("invalid move")
        }
         if(cb.iswin(temp.symbol)){
                alert(`${temp.name} is the winner`);
                flagwinner=true;
              } 

        console.log(cb.getboard());
                
       }
       function getplayer(){
        return currplayer;
       }
       return {makemove,getplayer}
}
function displaycontroller(player1,player2){
   const main=Gamecontroller(player1,player2);
   
   let curplayer=document.getElementById("turn");
   curplayer.textContent="To play-"+main.getplayer().name;
   let cell=document.querySelectorAll(".cell");
  cell.forEach(element => {
          element.addEventListener('click',()=>{
           
            main.makemove(element.dataset.index,element);
            
            curplayer.textContent="To play-"+main.getplayer().name;
          })
   });
}
 

let button=document.getElementById("start-btn");
button.addEventListener('click',function(){
    let player1=document.getElementById("player1").value;
let player2=document.getElementById("player2").value;
   displaycontroller(player1,player2);
})
