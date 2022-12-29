let container = document.querySelector(".container")
let loading = document.querySelector(".loading")
let boolean 
function imageAdd(imageNum=10,position=3){
    let i = 0
    while(i<imageNum){
        fetch("https://dog.ceo/api/breeds/image/random")
        .then((response)=>response.json())
        .then((data)=>{
            let img = document.createElement("img")
            img.src = data.message
            container.appendChild(img)
            window.scrollTo(0,position)
        })    
        
        i++
    } 
    boolean = true   
}

function addHidden(){
    loading.classList.add("hidden")
}

imageAdd()

console.log(window.innerHeight)
console.log(document.documentElement.scrollHeight)

window.addEventListener("scroll",()=>{
    
// console.log(document.documentElement.scrollHeight) 
    if((window.scrollY + window.innerHeight)+1>=document.documentElement.scrollHeight && boolean){
        boolean = false        
        loading.classList.remove("hidden")        
        setTimeout(()=>imageAdd(10,window.scrollY),5000)
        // window.scrollTo(0,0)
        
    }
    else if(boolean){
        // setTimeout(
        //     loading.classList.add("hidden")
        // ,2000)
        setTimeout(addHidden,6000)
    }
})