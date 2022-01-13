

function addingEventListener(){
    const input = document.getElementById('input');
    input.addEventListener("click",e => {
        alert("I have been clicked")
    });
}


addingEventListener()