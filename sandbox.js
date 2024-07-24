const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]')

let lastChecked
function handleCheck(e) {
// check if shift key down
//and check that they are checking it
let inBetween = false
if (e.shiftKey && this.checked){
    checkboxes.forEach(checkbox => {
    console.log(checkbox)
    if(checkbox === this || checkbox === lastChecked){
        inBetween = !inBetween
        console.log('this is in between elements')
    }
    if(inBetween){
        checkbox.checked = true
    }
    })
}
lastChecked = this
}
checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck))