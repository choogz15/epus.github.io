let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox.jpg')
    {
        myImage.setAttribute('src', 'images/ie.png');
    }
    else
    {
        myImage.setAttribute('src', 'images/firefox.jpg');
    }
}

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

function setUserName()
{
    let myName = prompt('Please enter your name');
    if(!myName || myName === null)
    {
        setUserName();
    }
    else
    {
        localStorage.setItem('name', myName);
        myHeading.textContent = 'Hi ' + myName;
    }
}

if(!localStorage.getItem('name'))
{
    setUserName();
}
else
{
    let storedName = localStorage.getItem('name');
    myHeading.textContent = "Hi " + myName;
}

myButton.onclick = function ()
{
    setUserName();
}