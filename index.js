function addingEventListener() {
    const input = document.getElementById('button');

    function clickAlert() {
        alert('I was CLICKED!');
    }

    input.addEventListener('click', clickAlert);
}

addingEventListener()