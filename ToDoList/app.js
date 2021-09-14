const inp = document.querySelector('input');
const list = document.getElementById('list');

inp.addEventListener('keypress', (e)=>{
    if(e.which === 13 && inp.value !== "" ){

        const todoText = inp.value;

        const li = document.createElement('li');
        const span = document.createElement('span');
        const input = document.createElement('input');
        const del = document.createElement('button');
        const update = document.createElement('button');
        const up = document.createElement('button');
        const down = document.createElement('button');

        span.innerText = todoText;
        input.classList = "disable";
        del.innerHTML = "<i class='fas fa-trash'></i>";
        update.innerHTML = "<i class=\"fas fa-pen\"></i>";
        up.innerHTML = "<i class=\"fas fa-arrow-up\"></i>";
        down.innerHTML = "<i class=\"fas fa-arrow-down\"></i>";

        li.append(span,input,down,up,update,del);
        
        del.addEventListener('click', ()=>{
            li.remove();
        })

        up.addEventListener('click', ()=>{
            if(li.previousElementSibling !== null ){
                // console.log("working");
                const preElement = li.previousElementSibling;
                const preSpan = preElement.children[0];
                let preText = preSpan.textContent;
                let text = span.textContent;
                span.innerText = preText;
                preSpan.innerText = text;
            }
        })

        down.addEventListener('click', ()=>{
            if(li.nextElementSibling !== null ){
                // console.log("working");
                const nextElement = li.nextElementSibling;
                const nextSpan = nextElement.children[0];
                let nextText = nextSpan.textContent;
                let text = span.textContent;
                span.innerText = nextText;
                nextSpan.innerText = text;
            }
        })

        input.value = span.innerText;
        
        input.addEventListener('keypress', (event)=>{
            if(event.which === 13 ){
                span.innerText = input.value;
                input.classList.toggle('disable');
                span.classList.toggle('disable');
            }
        })

        update.addEventListener('click', (event)=>{
            input.value = span.innerText
            if(input.classList.contains('disable')){
                span.innerText = input.value;
            }
            input.classList.toggle('disable');
            span.classList.toggle('disable');
        })

        list.append(li);
        inp.value = ""; 
    }
})