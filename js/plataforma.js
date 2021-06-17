const user = "user123";
const pass = "pass123";
document.addEventListener("DOMContentLoaded", function protegeruta(){ 
    //Se obtienen los parámetros de la URL
    let url = window.location.search;
    console.log (url);
    //Se crea un objeto de tipo URL searchparams con los parámetros que se obtuvieron
    let urlparams = new URLSearchParams (url);
    console.log (urlparams);
    //Se obtiene el parámetro User
    let usuario = urlparams.get("user");
    let password = urlparams.get("pass");
    console.log (usuario);
    console.log (password);
    
    if ((user!= usuario && pass!= password) || (user!= usuario) || (pass!=password) ){
        let loc = window.location;
            let pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
            
            pathName = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
            
        window.location.href= `${pathName}index.html`;
    }
    
}, false);
