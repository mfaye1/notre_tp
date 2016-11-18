/**
 * Created by mfaye1 on 2016-11-17.
 */
var forfait;
"use strict";
$(function(){
    console.log('DOM Construit');
    // Au chargement de la page, on crée le catalogue (liste des forfaits)

    for (var i = 0 ; i < P86_TP_forfaits.length;  i++) {

        forfait = P86_TP_forfaits[i]; // Le forfait considéré
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
        $('<a href="#forfait_' + i + '"></a>')
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
/*----------------------------------------------------------------------------------------------------------------------*/
    $('.mb_background').on('click', function(){
        $(this)
            .parent()
            .fadeOut(1000, function(){
                // à la fin du fadeout, on cache l'élément mb_item
                $(this).find('mb_item').hide();
            });
    });

    // Écouter au clic sur le bouton detail (adapter ici)
    $('.forfait_detail').on('click', function() {
        // L.attribut href du a est au format forfait_xx
        var forfait_id = $(this).attr("href").split('_')[1];
        console.log(forfait_id);
        forfait = P86_TP_forfaits[forfait_id];
        console.log(forfait);

        //montrer tout les forfait faite ce vendredi

        var modal=$('#reserver');
        console.log(modal);
            var ul_du_box = $('#box');
            var li_du_box=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Nom :  '+forfait.nom);
            var li_du_box_2=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Categorie  :  '+forfait.categorie);
            var li_du_box_3=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Description  :  '+forfait.description);
            var li_du_box_4=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Duree  :  '+forfait.duree);
            var li_du_box_5=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Debut Saison  :  '+forfait.debut_saison);
            var li_du_box_6=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Fin Saison  :  '+forfait.fin_saison);
            var li_du_box_7=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Mois Basse Saison  :  '+forfait.mois_basse_saison);
            var li_du_box_8=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Prix Basse Saison : '+forfait.prix_basse_saison);
            var li_du_box_9=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Mois Moyen Saison : '+forfait.mois_moy_saison);
            var li_du_box_10=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Prix Moy Saison :  '+forfait.prix_moy_saison);
            var li_du_box_11=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Mois Haute Saison : ' +forfait.mois_haute_saison);
            var li_du_box_12=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Prix Haute Saison : '+forfait.prix_haute_saison);
            var li_du_box_13=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Place Disponoble :  '+forfait.places_dispo);
            var li_du_box_14=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Nombre Maximum D\'animal : '+forfait.nbr_max_animaux_admis);
            var li_du_box_15=$('<li>')
                    .appendTo(ul_du_box)
                    .text('Prix Animal : '+forfait.prix_animal);
            var le_reserver= $('<button><a href="formulaire.html">Resever</a></button>')
                    .appendTo(ul_du_box);

        // Assurer la fermeture sur le click sur les deux hyperliens du div.controls
        modal
            .find('.controls a')
            .on('click', function(){
                $('.mb_container')
                    .fadeOut(1000, function(){
                        // à la fin du fadeout, on cache l'élément mb_item
                        $(this).find('mb_item').hide();
                    });
            });
        // Montrer la mb_box et son contenu
        modal
            .addClass('mb_item')
            .show()
            .parent()
            .fadeIn();

    });

});

/*-----------------------------------------------creation du modal box-----------------------------------------------*/


