function showAlert(){
    alert('hello! this is a javasript alert.');
}
function changetext(){
  document.getElementById('text').innerHTML ="text changed";

}
function handleClick(){
    document.getElementById('ClickMessage').innerHTML ='ButtonClicke!';

}
function validateForm(){
    let name = document.getElementById('name').value;
    if(name == ''){
        alert('please enter your name.');
        return false;
    }
    return true;
}
function checkAge(){
    let age = parseInt(document.getElementById('ageInput').value);
    if(age >= 18) {
        document.getElementById('ageResult').innerHTML = 'You are a adult';
  } else{
        document.getElementById('ageResult').innerHTML = 'You are a minor';
    }
}

function displayArrayIteam(){
    let iteam = ['apple','banana','cherry','date','elderberry'];
    let index = parseInt(document.getElementById('arrayIndex').value);
    let result = iteam[index] || 'Invalid index';
    document.getElementById('arrayResult').innerHTML = result;
}