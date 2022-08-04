document.addEventListener('DOMContentLoaded', (e) => {
   intervalID = setInterval(counter, 1000);
   let getlist = document.getElementById("list")


  let count = 0;
function counter(){
    count += 1
    //console.log(count)
    let get_counter = document.getElementById("counter")
    get_counter.innerText = count
   
}

function pause(event){
    console.log(event)
    let individual_pause = (event.target)
    console.log(individual_pause)
    console.log(get_pause.innerText)
  if (get_pause.innerText === "pause"){
    get_increase.disabled = true
    get_heart.disabled = true
    get_button.disabled = true
    get_pause.innerText = " resume "

    
    clearInterval(intervalID)
  }else { 
    get_increase.disabled = false
    get_heart.disabled = false
    get_button.disabled = false
    intervalID = setInterval(counter, 1000);
    get_pause.innerText = "pause";

    
    
}

//disable the buttons
    let grab_buttons = document.getElementsByTagName("button")
    console.log(grab_buttons)
    
    
}

let get_pause = document.getElementById("pause");
get_pause.addEventListener('click', pause)



function decrement(){ 
  count -= 1
  console.log(count)
  let get_counter = document.getElementById("counter")
    get_counter.innerText = count
}


let get_button = document.getElementById("minus");
get_button.addEventListener('click', decrement)


function increment(){
    count += 1
    console.log(count)
    let get_counter = document.getElementById("counter")
    get_counter.innerText = count
}

let get_increase = document.getElementById("plus");
get_increase.addEventListener('click', increment )

function like(){
    let get_ul = document.querySelector(".likes");
    let li = document.getElementById(count)
    if (li){
        li.textContent = `You liked ${count} ${++li.dataset.like_count} times`
        console.log("found", li)
    }else{
     
    console.log("likeul", get_ul)
    let li = document.createElement("li");
    // li.appendChild(document.createTextNode("you just liked" + count));
    li.textContent = `You liked ${count} 1 time`
    li.dataset.like_count = 1
    li.dataset.test = "test"
    li.id = count
    console.log("likeli", li)
    get_ul.appendChild(li);
}
}

let get_heart = document.getElementById("heart");
get_heart.addEventListener('click', like)

//Leave Comments

let addComment = function (event){
    event.preventDefault()
    console.log(event)
    const taskInput = document.getElementById("comment-input")
    const comment = taskInput.value;
     console.log('comment', comment)
    let li = document.createElement('li');
    li.textContent = comment;
    getlist.appendChild(li)
    //taskInput.value = ""
    event.target.reset()
}
const form = document.getElementById("comment-form")

console.log("list", getlist)
form.addEventListener('submit',addComment)

})
 