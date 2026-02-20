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
   let playerlist=[];
    playerlist.push(createplayer(playerone,"X"));
    playerlist.push(createplayer(playertwo,"O"));
   let currplayer=playerlist[0];
       function makemove(index){
        if(cb.mark(index,currplayer.symbol)){
            if(cb.iswin(currplayer.symbol)){
                console.log(`${currplayer.name} is the winner`)
            }
            else{
                if(currplayer==playerlist[0]){
                    currplayer=playerlist[1];
                }
                else{
                    currplayer=playerlist[0];
                }
            }
        }else{
            console.log("Invalid move");
        }

        console.log(cb.getboard());
                
       }
       return {makemove}
}
const gc=Gamecontroller("Adithya","Rahul");
gc.makemove(1);
gc.makemove(2);
gc.makemove(0);
gc.makemove(4);
gc.makemove(8);
gc.makemove(6);