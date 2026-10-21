let btn_ajoute, input ,con_ajoute;
btn_ajoute = document.getElementById("ajoute");
input = document.getElementById("input");
con_ajoute = document.getElementById("taskAjoute");

btn_ajoute.onclick = function () {
    //verifie si le input est vide 
    if (input.value.trim() != "") {
        // si n'est pas vide cree un elemnet
        var paragrahe = document.createElement("p");
        //valorise la paragraphe avec le contenu de input
        paragrahe.innerText = input.value;
        // style css
        paragrahe.classList.add('paragraphe-style');

        //insere la paragraphe dans continer d'ajoute
        con_ajoute.appendChild(paragrahe);
        //vide le inpute quand le continer est ajoute 
        input.value = "";
        // barre le text 
        paragrahe.addEventListener('click', function () {
            paragrahe.classList.add("click_par");
        })
        // suprime des taches avec le double click 
        paragrahe.addEventListener('dblclick', function () {
            con_ajoute.remove(paragrahe);
        })

    }

}
