/**
 * Created by mfaye1 on 2016-11-17.
 */

"use strict";
$(function(){
    // Au chargement de la page, on crée le catalogue (liste des forfaits)

    for (var i = 0 ; i <= categories_p86.forfaits.length - 1;  i++) {

        var forfait = categories_p86.forfaits[i]; // Le forfait considéré
        console.log(forfait);

        // Créer et accrocher un nouveau li

        var nouveau_li = $('<li>')
            .appendTo($('#categories_p86.categories').children('ul.forfaits'))
            .addClass('li_du_catalogue');
        // Créer et accrocher un nouveau h2
        $('<h2>')
            .appendTo(nouveau_li)
            .text(forfait.name);
        // Créer et accrocher un nouveau img
        $('<img>')
            .appendTo(nouveau_li)
            .prop('src', 'images/' + 'hiver/'+1+'.jpg')
            .prop('alt', 'hiver');
        $('<p>')
            .appendTo(new_li)
            .html(forfait.description);
        $('<a href="#">')
            .appendTo(new_li)
            .addClass('forfait_detail')
            .text('Détails');
        $('<ul>')
            .appendTo(new_li)
            .append('<li>'+forfait.prix_moy_saison+'</li>')
            .append('<li>'+forfait.categorie+'</li>')
            .append('<li>'+forfait.duree+'</li>')
            .append('<li>'+forfait.debut_saison+'</li>')
            .append('<li>'+forfait.fin_saison+'</li>')
    }