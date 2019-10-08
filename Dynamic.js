//Dom elements 
const time = document.getElementById('time'),
 greeting = document.getElementById('greeting'),
 name = document.getElementById('name'),
 focus = document.getElementById('focus');

 //Show Time
 function showTime()
 {
     let today = new Date(),
     hour = today.getHours(),
     min = today.getMinutes(),
     sec = today.getSeconds();
    //Set am or pm 
    const ampm = hour >=12 ? 'PM' : 'AM'

    //12hour format 
    hour =  hour % 12 || 12 ;

    //output time 
    time.innerHTML =`${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)} ${ampm}`; 

    setTimeout(showTime,1000);
}
//Add zeroes 
function addZero (n)
{
    return (parseInt(n,10)<10 ? '0':'')+ n ;
}
//Set background and greeting 
function setBGreet()
{
    let today = new Date(),
    hour =today.getHours();

    if (hour <12){
        //morning
        document.body.style.backgroundImage = "url(https://karmony.com.au/wp-content/uploads/2016/06/morning.jpg)";
        greeting.textContent='Good Morning';
    }
    else if (hour <18)
    {
        //Afternoon
        document.body.style.backgroundImage ="url(https://www.pixelstalk.net/wp-content/uploads/2016/06/Download-Desktop-Grass-HD-Wallpapers-620x388.jpg)";
        greeting.textContent = 'Good Afternoon';
    }
    else {
        //night
        document.body.style.backgroundImage= "url(https://i2.wp.com/spacetourismguide.com/wp-content/uploads/2019/04/Zodiacal-Light-Willi-Winzig-via-Flickr.jpg?fit=862%2C573&ssl=1)";
        greeting.textContent="Good Evening";
        document.body.style.color ='white';
    }
}
const showAmPm = true ;
//Get Name 
function getName() {
if (localStorage.getItem('name') === null)
    {
        name.textContent = "(Enter name)" ; 
    }
    else 
    {
        name.textContent =localStorage.getItem('name') ;
    }
}
//get focus 
function getFocus() 
{
    if (localStorage.getItem('focus') === null)
    {
        focus.textContent = "(Enter focus)" ; 
    }
    else 
    {
        focus.textContent =localStorage.getItem('focus') ;
    }
}
    function setName (e)
{
    if (e.type === 'keypress')
    {
        //to make sure enter is pressed 
        if (e.which ==13 || e.keyCode ==13)
        {
            localStorage.setItem('name',e.target.innerText);
            name.blur();
        }
    }
    else 
    {
        localStorage.setItem('name',e.target.innerText);
    }
}

    function setFocus (r)
{
        if (r.type === 'keypress')
    {
        if (r.which == 13 || r.keyCode == 13)
        {
            localStorage.setItem('focus',r.target.inner);
            focus.blur();
        }
    }
    else 
    {
        localStorage.setItem('focus',r.target.innerText);
    }
}
    
    name.addEventListener('keypress', setName);
    name.addEventListener('blur',setName) ;
    focus.addEventListener('keypress',setFocus);
    focus.addEventListener('blur',setFocus);
  

function newFunction() 
{
    showTime();
    setBGreet();
    getName();
    getFocus();
    setName();
    setFocus();
    
}

newFunction();
