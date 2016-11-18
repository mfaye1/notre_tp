/**
 * Created by mfaye1 on 2016-11-17.
 */

"use strict";
$(function(){
    // Au chargement de la page, on crée le catalogue (liste des forfaits)

    for (var i = 0 ; i < P86_TP_forfaits.length;  i++) {

        var forfait = P86_TP_forfaits[i]; // Le forfait considéré
        console.log('Forfait : ' , forfait.nom);

        // Créer et accrocher un nouveau li
        var ul_du_forfait = $('ul#' + forfait.categorie);
        console.log('Le ul ou le forfait va être accroché : ', ul_du_forfait);

        var nouveau_li = $('<li>')
            .appendTo(ul_du_forfait)
            .addClass('li_du_catalogue');
        // Créer et accrocher un nouveau h2
        $('<h2>')
            .appendTo(nouveau_li)
            .text(forfait.nom)
            .css({
                'text_align': 'center'
            });
        // Créer et accrocher un nouveau img
        $('<img>')
            .appendTo(nouveau_li)
            .prop('src', 'images/' + forfait.photo)
            .prop('alt', 'hiver')
            .css({
                display: 'inline-block',
                width : '200px',
                height : '250px',
                'text-align': 'center',
                border :'solid 2px darkgray',
                'border-radius': '10px'
            });
        $('<button><a href="#"></a></button>')
            .appendTo(nouveau_li)
            .addClass('forfait_detail')
            .text('Détails')
            .css({
                'border-radius': '6px',
                cursor: 'pointer',
                height: '20px',
                display: 'block',
                width: '75px',
                'text-align': 'center'
            });

    }
});
// crrer notre modal box
var modal=$('#reserver');
console.log(modal);
//creer d'abord les titres a afficher
var nouveau_h=$('<h3>')
    .appendTo(modal)
    .text('Ce Forfait est composé');
//ajouter un p
$('<p>')
    .text(forfait[i]);
var control=$('.control');
$('<button><a href="formulaire.html"></a></button>')
    .appendTo(control)
    .text(Reserver)

