'use strict';

$(function() {
    console.log('DOM Construit');
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
