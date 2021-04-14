class Quiz {
  constructor(){}

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })

  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  async start(){
    if(gameState === 0){
      contestant = new Contestant();
      var contestantCountRef = await database.ref('contestantCount').once("value");
      if(contestantCountRef.exists()){
        contestantCount = contestantCountRef.val();
        contestant.getCount();
      }
      question = new Question()
      question.display();
    }
  }

  play(){
    //write code here to hide question elements
    /*this.title.hide()
    this.question.hide()
    this.option1.hide()
    this.option2.hide()
    this.option3.hide()
    this.option4.hide()
    this.input1.hide()
    this.input2.hide()
    this.button.hide()
    */
   //question.hide()


    //write code to change the background color here
    background("yellow")

    //write code to show a heading for showing the result of Quiz
    textSize(50)
    text("Result", 400, 50)


    //call getContestantInfo( ) here
    Contestant.getPlayerInfo()


    //write condition to check if contestantInfor is not undefined
    if(allContestants !== undefined){
      fill("blue")
      textSize(20)
      text("note: Contestant who answered correct are highlight in green color", 130, 230)
    }
    


    //write code to add a note here
    for(var plr in allContestants){
      var correctAns = "2"
      if(correctAns === allContestants[plr].answer){
        fill("green")
      }
      else{
        fill("red")
        
      }
      text(allPlayers[plr].name, 120, 400)
    }
    


    //write code to highlight contest who answered correctly
    
  }

}
