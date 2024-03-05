const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", this.window.scrollY > 100);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};

let lastScrollTop = 0;
window.addEventListener("wheel", function() {
    let st = window.scrollY || document.documentElement.scrollTop;
    if (st > lastScrollTop) {
        
        window.scrollBy(0, 10); 
    } else {
        
        window.scrollBy(0, -10); 
    }
    lastScrollTop = st;
});

function sendEmail(){
    (function(){
        emailjs.init("nP8VDnxPEKE4IkMOD")
    })();

    var params = {
        sendername: document.querySelector("#sendername").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value
    };
    var serviceId = "service_jzqy8zi";
    var templateId = "template_ual2u1s";

    emailjs.send(serviceId, templateId, params)
    .then(res =>{
        document.getElementById("sendername").value ="";
        document.getElementById("email").value ="";
        document.getElementById("subject").value ="";
        document.getElementById("message").value ="";
        alert( "Seu email foi enviado com sucesso!")
    })
    .catch();
}