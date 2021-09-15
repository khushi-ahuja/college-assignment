const buttons = document.querySelectorAll('button');
const screen = document.getElementById('screen');

for(let btn of buttons){
    btn.addEventListener('click', (e)=>{
        // console.log();
        const buttonText = e.target.innerText;
        if(buttonText === 'x'){
            screen.value += '*';
        }
        else if(buttonText === 'C'){
            screen.value = "";
        }
        else if(buttonText === '='){
            try{
                screen.value = eval(screen.value);
            }
            catch{
                screen.value="Invalid operation";
            }
        }
        else{
            screen.value += buttonText; 
        }
    })
}