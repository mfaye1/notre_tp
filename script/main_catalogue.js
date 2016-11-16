/**
 * Created by mfaye1 on 2016-11-10.
 */
"use strict";

/*------------------------------pour la page catalogue---------*/
var button_menu=document.getElementById('menu_cata'); //l'id du menu catalogue des button

function clique_des_bouton() {

}

/*---------------------- les paragraphes-----------------------------------------*/
var les_paragraphes= getElementsByClassName('intro');
function survol(){
    les_paragraphes.style.backgroundColor="#4ecaed";
}

les_paragraphes.onmouseover=survol();
