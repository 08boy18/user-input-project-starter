document.getElementById('title_input').addEventListener('input', function() {
    let titleInputValue = this.value;
    document.getElementById('main_title').innerText = titleInputValue;
});

let button = document.getElementById('submit_button');
button.onclick = function(){
    let nounElement = document.getElementById('noun');
    let nounInput = nounElement.value;

    let verbElement = document.getElementById('verb');
    let verbInput = verbElement.value;

    let adjectiveElement = document.getElementById('verb');
    let adjectiveInput = adjectiveElement.value;

    if (nounInput == '' || verbInput == '' || adjectiveInput == ''){
        javascript:(function(){alert('Please fill in all fields');})();
    } else {
        let container = document.getElementsByClassName('form_container')[0]
        container.innerText = 'Last night I ate ' + nounInput + ', and today I just had ' + verbInput + '. What a ' + adjectiveInput + ' day'
    }
}