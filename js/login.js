const user = "user123";
const pass = "pass123";
    function login(){ 
    let userinput = document.getElementById ("user");
    let passinput = document.getElementById ("pass");
    if (userinput.value && passinput.value) {
        if ((user!= userinput.value && pass!= passinput.value) || (user!= userinput.value) || (pass!=passinput.value)) {
            console.log (userinput.value, passinput.value) 
            document.getElementById ("mensajeid").classList.remove ("mensaje")
            document.getElementById ("mensajeid").classList.add ("error")

        } else {
            console.log ("hola")
            let loc = window.location;
            let pathName = loc.pathname.substring(0, loc.pathname.lastIndexOf('/') + 1);
            
            pathName = loc.href.substring(0, loc.href.length - ((loc.pathname + loc.search + loc.hash).length - pathName.length));
            
            window.location.href= `${pathName}Plataforma.html?user=${user}&pass=${pass}`;
        }
        
    }
    
    
}