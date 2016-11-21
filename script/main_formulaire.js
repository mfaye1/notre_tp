/**
 * Created by mfaye1 on 2016-11-16.
 */
"use strict";
const MIN_NB_CAR = 1; // Nombre minimum de caractères dans les champs input de type text

$(function(){
    console.log('DOM construit');

    // Brancher un listener sur l'événement 'submit' sur l'élément <form>
    var formulaire = $('#form_resa');
    formulaire.on('submit', valider_formulaire);
    // Ecouter chaque changement significatif
    formulaire.find(':input').on('change', gerer_changement);
    formulaire.find('select[name="sports"]').on('change', gerer_changement_sports);

    // Préparer le date picker pour le champ #date_commande
    $('#date_commande').datepicker({
        showOn: 'both',
        buttonText: 'Choisir Date',
        buttonImage: 'image/calendar.png',
        buttonImageOnly: true,
        numberOfMonths: 2,
        minDate: new Date(2016, 11 - 1, 15),//'11/15/16',
        maxDate: new Date(2017, 1 - 1, 7),//'01/07/17',
        showButtonPanel: true
    });

});

/* Gestionnaire d'événement avec le parametre event pour pouvoir empécher le submit (au besoin) */
function valider_formulaire(event) {
    console.log('tentative de soumission');
    console.log('this:' , this);
    console.log('event:' , event);
    console.log('event.target:' , event.target);
    var formulaire_valide = true; // Arbritraire, on le met à false dès qu'on rencontre un champ invalide

    /**
     * Valider les champs input de type text (première passe pas fine)
     */
    // Pseudo-classe jQuery pour tous les champs input de type text
    $(':text').each(function(){
        if ($(this).val().trim().length < MIN_NB_CAR) {
            // Ajouter la classe error à l'élément input
            $(this).addClass('error');
            // Ajouter un paragraphe de message après l'élément input (si il n'y en a pas déjà)
            if ($(this).parent().find('.error_msg').length == 0) {
                $(this).after('<p class="error_msg">Le champ contient moins de 1 caractères.</p>');
            }
            formulaire_valide = false;
        } else { // Valide (il faut retirer la class error et un éventuel p de classe error_msg
            $(this).removeClass('error');
            $(this).parent().find('.error_msg').remove();
        }
    });

    /**
     * Validation du champ nom : Le nom doit commencer par un caractère alphabétique français
     *
     */
    // Créer un objet expression rationnelle (RegExp)
    console.log('Seconde validation pour le champ nom');
    var reg_exp_nom = new RegExp( '^[A-Za-zéèëùôç]{1,}$' , ''); // 1er paramètre : expression (pattern), 2ième parametre : flags : '', 'g', 'i', 'gi'
    var champ_nom = $('input[name="nom"]'); // Le champ de saisie (input) du nom
    var val_champ_nom = champ_nom.val(); // Valeur saisie dans le champ nom
    if ( reg_exp_nom.test(val_champ_nom) == false ) { // Valeur saisie ne correspond pas au critère: Erreur saisie
        console.log('Le champ nom ne correspond pas à l\'expression rationelle.');
        formulaire_valide = false;
        champ_nom.addClass('error');
        // S'occuper du message de feedback :
        if ( ! champ_nom.next().is('p.error_msg')) { // Il n'y a pas de champ p.error_msg
            // On le crée et on l'insère après le input
            console.log('Création d\'un élément p après le input');
            champ_nom.after('<p class="error_msg"></p>');
        }
        console.log('Vérifier que le input est suivi d\'un élément< p.error_msg:', champ_nom.next().is('p.error_msg'));
        champ_nom.next().text('Le nom doit contenir au moins un caractère (eventuellement accentué).');
    } else { // Pas d'erreur de saisie
        champ_nom.removeClass('error');
        champ_nom.parent().find('.error_msg').remove();
    }

    /**
     * Select ville (une ville doit être sélectionnée)
     */
    // Rechercher parmi les enfants du select l'option qui est sélectionnée et prendre sa valeur
    var champ_ville = $('select[name="ville"]');
    if (champ_ville.children('option:selected').val() == '-1') {
        formulaire_valide = false;
        champ_ville.addClass('error');
        if ( ! champ_ville.next().is('p.error_msg')) { // Il n'y a pas de champ p.error_msg
            // On le crée et on l'insère après le input
            console.log('Création d\'un élément p après le input');
            champ_ville.after('<p class="error_msg"></p>');
        }
        champ_ville.next().text('Veuillez sélectionner une ville.');
    } else {
        // Si il y a un message erreur après, on le supprime
        if ( champ_ville.next().is('p.error_msg')) { // Il n'y a pas de champ p.error_msg
            champ_ville.next().remove();
        }
        champ_ville.removeClass('error');
    }

    /**
     * Select sport (deux sports sélectionnés)
     */
    var champ_sports = $('select[name="sports"]');
    console.log('Valeur du premier des sports sélectionnés : ', champ_sports.find('option:selected').val());
    if (champ_sports.find('option:selected').length < 2 ) { // Il y en a mois de 2 de sélectionnées
        formulaire_valide = false;
        champ_sports.addClass('error');
        if ( ! champ_sports.next().is('p.error_msg')) { // Il n'y a pas de champ p.error_msg
            // On le crée et on l'insère après le input
            console.log('Création d\'un élément p après le input');
            champ_sports.after('<p class="error_msg"></p>');
        }
        champ_sports.next().text('Veuillez sélectionner au moins deux sports.');
    } else {
        // Si il y a un message erreur après, on le supprime
        if ( champ_sports.next().is('p.error_msg')) { // Il n'y a pas de champ p.error_msg
            champ_sports.next().remove();
        }
        champ_sports.removeClass('error');
    }

    // Validation du champ date avec expression rationnelle
    /*
     var exp_reg_date = new RegExp('^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$', 'g');
     var champ_date = $('#date_commande');
     var valeur_champ_date = champ_date.val();
     console.log("Validation date :" ,valeur_champ_date);
     if ( false == exp_reg_date.test(valeur_champ_date)) { // .test() renvoie true ou false
     champ_date.addClass('error');
     }
     */

    /**
     * Validation des champs radio du sexe
     */
    var champ_sexe = $('input[name="sexe"]');
    var champ_sexe_coche = champ_sexe.filter(':checked');
    console.log('Les champs sexe cochés sont : ', champ_sexe_coche);
    if (0 == champ_sexe_coche.length ) { // Il n'y a pas de sexe coché
        formulaire_valide = false;
        champ_sexe.parent().addClass('error'); // Les deux case à cocher sont en classe error
        if ( ! champ_sexe.parent().next().is('p.error_msg')) { // Il n'y a pas de champ p.error_msg
            // On le crée et on l'insère après le input
            console.log('Création d\'un élément p après le input');
            champ_sexe.parent().after('<p class="error_msg"></p>');
        }
        champ_sexe.parent().next().text('Veuillez choisir le sexe.');
    } else {
        // Si il y a un message erreur après, on le supprime
        if ( champ_sexe.parent().next().is('p.error_msg')) { // Il n'y a pas de champ p.error_msg
            champ_sexe.parent().next().remove();
        }
        champ_sexe.removeClass('error');
    }


    // Pour le textarea utiliser .val() comme pour les autres champs de saisie (exiger entre 10 et 100 caractères)

    // Le champ "J'accepte les conditions" doit être coché
    if ( ! $('#accepte').is(':checked')) {
        formulaire_valide = false;
        $('#accepte').addClass('error');
    } else {
        $('#accepte').removeClass('error');
    }


    // En conclusion on soumet ou on soumet pas
    if ( ! formulaire_valide) {
        event.preventDefault();
    }

}

/**
 * Fonction pour prendre en charge un changement dans le formulaire (sans qu'il soit question  de soumission)
 */
function gerer_changement() {
    console.log('Une valeur a changé pour cet élément :', this);
}

/**
 * Fonction pour prendre en charge un changement quelcoinque dans le select des sports
 */
function gerer_changement_sports() {
    console.log('Le choix des sports à changé :', $(this).val());
}

