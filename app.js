const hamburger=document.querySelector('#hamburger')
const menu=document.querySelector('#menu')

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('hidden')
    hamburger.classList.toggle('bg-white')
})


function sendMail() {
    var params={
        name:document.getElementById('name').value ,
        email:document.getElementById('email').value ,
        message:document.getElementById('message').value ,
    };
    const serviceID="service_r7ktlut";
const templateID="template_pwsm18c";

emailjs.send(serviceID,templateID,params)
.then(
    res=>{
        document.getElementById('name').value = "";
        document.getElementById('email').value = "";
        document.getElementById('message').value = "";
        console.log(res);
        alert('Your message send succesfully');
    }
)

.catch((res)=> console.log(err));
}

