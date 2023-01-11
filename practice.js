let count=0;
let buttons=['red','yellow','green','blue'];
let randomChosenColor=[];
let userChosenColor=[];
let started=false;

// Function to start the game
function startGame()
{
    count++;
    userChosenColor=[];
    document.querySelector('.heading').innerHTML='Level '+count;
    let randomVariable= Math.floor((Math.random())*4);
    let variable='#'+buttons[randomVariable];
    animate(variable);
    
    
    randomChosenColor.push(buttons[randomVariable]);
    playSound(buttons[randomVariable]);
}
function animate(variable)
{
    document.querySelector(variable).classList.add('pressed');
    setTimeout(function(){
        document.querySelector(variable).classList.remove('pressed');
    },100)
}
// Once Pressed a key to start the game
document.addEventListener('keydown',function(){
    if(!started){

    startGame();
    started=true;
}
});
//click function
let ans=document.querySelectorAll('.sub');
for(let i=0;i<ans.length;i++)
{
    ans[i].addEventListener('click',function(event){

        animate('#'+event.target.id);
        playSound(event.target.id);

        userChosenColor.push(event.target.id);
    
        check(userChosenColor.length-1);
        
            
    });
}
function check(index)
{
    
    let isCorrect=true;
    if(randomChosenColor.length===userChosenColor.length){
        for(let i=0;i<randomChosenColor.length;i++)
        {
            if(userChosenColor[i]!==randomChosenColor[i])
            {
                isCorrect=false;
                reset();
            }
        }
        if(isCorrect){
        document.querySelector('.heading').innerHTML='Well Played🔥'
            setTimeout(function(){
                startGame();
            },1000);
        }
    }
    if(randomChosenColor[index]!==userChosenColor[index]){
        reset();
    }    
}
function reset()
{
        document.querySelector('.heading').innerHTML="Lets laugh😂 at you"
        userChosenColor.length=0;
        randomChosenColor.length=0;
        playSound('wrong');
        count=0;
        started=false;
}
function playSound(nameOfId)
{
   let audio=new Audio('sounds/'+nameOfId+'.mp3');
   audio.play();
}