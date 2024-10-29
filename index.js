countEl = document.getElementById("count-el")
countEl.innerText = 0
document.title = "counter"
function increment() {
    countEl.innerText = parseInt(countEl.innerText) + 1
    console.log(countEl.innerText)
}
function save(){
     document.getElementById("save").innerHTML = document.getElementById("save").innerHTML + countEl.innerText + " - "
}
