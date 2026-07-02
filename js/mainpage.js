var logvar = document.getElementById('logFrame')
var regvar = document.getElementById('regFrame')
var framevar1 = document.getElementById('divframe1')
var framevar1 = document.getElementById('divframe2')


function logreg(logorreg){

    if (logorreg == 'log'){
        logvar.style.cssText = ("visibility: visible;")
        regvar.style.cssText = ("visibility: hidden;")
        divframe1.style.cssText = ("visibility: visible;")
        divframe2.style.cssText = ("visibility: hidden;")

        logvar.style.marginTop = "10%";
        regvar.style.opacity = "1";
        divframe1.style.opacity = "1";



    }




    else if (logorreg == 'reg'){
        regvar.style.cssText = ("visibility: visible;");
        logvar.style.cssText = ("visibility: hidden;");
        divframe2.style.cssText = ("visibility: visible;");
        divframe1.style.cssText = ("visibility: hidden;");

        regvar.style.marginTop = "10%";
        regvar.style.opacity = "1";
        divframe2.style.opacity = "1";

    }



}





function closeforms(){
    logvar.style.cssText = ("visibility: hidden;")
    regvar.style.cssText = ("visibility: hidden;")
    divframe1.style.cssText = ("visibility: hidden;")
    divframe2.style.cssText = ("visibility: hidden;")


    
}

