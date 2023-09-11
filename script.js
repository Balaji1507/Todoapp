let myForm = document.getElementById("myForm")
let myInput = document.getElementById("myInput")
let myList = document.getElementById("myList") //

myForm.addEventListener('submit', (Data)=>
        {
            Data.preventDefault()
            CreateItem(myInput.value)
        })

CreateItem =(d)=>{
    let template = `<li>${d}<button onclick="deletefunc(this)">Clear</button></li>`
    myList.insertAdjacentHTML("beforeend", template)
    myInput,value=""
    myInput.focus()
}

function deletefunc(x){
    x.parentElement.remove()
}