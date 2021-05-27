

const buttons = document.querySelectorAll(".btn");

const counter = document.querySelector("#counter");



let count = 0;

counter.innerHTML = `${count}`

buttons.forEach((button)=>{
    button.addEventListener("click", (event)=>{ 
        const currentBtnClass = event.currentTarget.classList;
    
        if(currentBtnClass.contains("btnDecrease")){
            count = count -1
            counter.innerHTML =count;
        }
        if(currentBtnClass.contains("btnIncrease")){
            count = count + 1
            counter.innerHTML =count;
        }
        if(currentBtnClass.contains("btnReset")){
            count = 0
            counter.innerHTML = count;
        }

        if(count < 0 ){
            counter.style.color = "red"
        }
        else if(count > 0){
            counter.style.color = "green"
        }
        else {
            counter.style.color= "black"
        }

        // testing random stuff

        // function even(count){
        //   if(count % 2 === 0){
        //       console.log("even");
        //   }else {
        //       console.log("odd")
        //   } 
        // }

        // even(count)
    
    });


});


