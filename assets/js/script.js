//Faz aparecer as opções do MENU após clicar no MENU sanduiche em resolução <= 600px.
window.onload = function() {
    document.querySelector(".menu_mobile").addEventListener("click", function() {
        if (document.querySelector(".menu nav ul").style.display == 'flex') {
            document.querySelector(".menu nav ul").style.display = 'none';
        } 
        else {
            document.querySelector(".menu nav ul").style.display = 'flex';
        }
    });
};

//Faz aparecer de volta as opções do MENU normal após clicar no MENU sanduiche em resolução > 600px.
window.onresize = function(){
    if(document.body.clientWidth > 600){
        document.querySelector(".menu nav ul").style.display="flex";
        document.querySelector(".menu_mobile").style.display="none";
    }
    else{
        document.querySelector(".menu nav ul").style.display="none";
        document.querySelector(".menu_mobile").style.display="flex";
    }   
}