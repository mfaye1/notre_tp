/**
 * Created by gpnissar on 2016-11-07.
 */
"use strict";

var P86_TP_categories = ['vacances_soleil','croisiere','vacances_hiver','romantique','dans_la_nature'];

var P86_TP_forfaits = [
    {
        nom: "Malibu",
        categorie: "croisiere",
        description: "Le produit 1 bla bla bla...",
        duree: 14,
        debut_saison: "2016-09-01",
        fin_saison: "2017-05-31",
        mois_basse_saison: "septembre et mai",
        prix_basse_saison: 6890,
        mois_moy_saison: "octobre et avril",
        prix_moy_saison: 7660,
        mois_haute_saison: "décembre, janvier, février,mars",
        prix_haute_saison: 9280,
        places_dispo: 98,
        nbr_max_animaux_admis: 2,
        prix_animal: 99,
        photo: "croisiere/1.jpg",
        photo_cat: "images/categorie/nature.jpg"
    },
    {
        nom: "Les Maldives",
        categorie: "romantique",
        description: "Le produit 1 bla bla bla...",
        duree: 18,
        debut_saison: "2016-04-01",
        fin_saison: "2016-10-31",
        mois_basse_saison: "avril et octobre",
        prix_basse_saison: 7920,
        mois_moy_saison: "mai et septembret",
        prix_moy_saison: 8920,
        mois_haute_saison: "juin juillet aout",
        prix_haute_saison: 9280,
        places_dispo: 105,
        nbr_max_animaux_admis: 2,
        prix_animal: 156,
        photo: "romantique/1.jpg",
        photo_cat: "images/categorie/croisiere_01.jpg"
    },
    {
        nom: "Miami Beach",
        categorie: "croisiere",
        description: "Le produit 1 bla bla bla...",
        duree: 16,
        debut_saison: "2016-04-01",
        fin_saison: "2016-12-31",
        mois_basse_saison: "avril et décembre",
        prix_basse_saison: 7830,
        mois_moy_saison: "mai et novembre",
        prix_moy_saison: 9230,
        mois_haute_saison: "juin, juillet, août, septembre, octobre",
        prix_haute_saison: 9230,
        places_dispo: 56,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        photo: "croisiere/1.jpg",
        photo_cat: "images/categorie/croisiere_02.jpg"
    },
    {
        nom: "Seychelles",
        categorie: "romantique",
        description: "Le produit 1 bla bla bla...",
        duree: 12,
        debut_saison: "2016-05-01",
        fin_saison: "2016-11-30",
        mois_basse_saison: "mai et novembre",
        prix_basse_saison: 8560,
        mois_moy_saison: "octobre",
        prix_moy_saison: 9230,
        mois_haute_saison: "juin, juillet, août, septmbre",
        prix_haute_saison: 10960,
        places_dispo: 322,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        photo: "romantique/3.jpg",
        photo_cat: "images/categorie/ours_02.jpg"
    },
    {
        nom: "Paris",
        categorie: "vacances_soleil",
        description: "Le produit 1 bla bla bla...",
        duree: 1,
        debut_saison: "2016-12-01",
        fin_saison: "2017-04-30",
        mois_basse_saison: "décembre",
        prix_basse_saison: 179,
        mois_moy_saison: "avril",
        prix_moy_saison: 199,
        mois_haute_saison: "janvier, février,mars",
        prix_haute_saison: 239,
        places_dispo: 450,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        photo: "vacances_soleil/2.jpg",
        photo_cat: "images/categorie/tente.jpg"
    },
    {
        nom: "Senegal",
        categorie: "vacances_soleil",
        description: "Le produit 1 bla bla bla...",
        duree: 1,
        debut_saison: "2016-12-01",
        fin_saison: "2017-04-30",
        mois_basse_saison: "décembre",
        prix_basse_saison: 195,
        mois_moy_saison: "avril",
        prix_moy_saison: 215,
        mois_haute_saison: "janvier, février,mars",
        prix_haute_saison: 239,
        places_dispo: 341,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        photo: "vacances_soleil/4.jpg",
        photo_cat: "/categorie/station_ski.jpg"
    },
    {
        nom: "Bali",
        categorie: "romantique",
        description: "Le produit 1 bla bla bla...",
        duree: 15,
        debut_saison: "2016-06-15",
        fin_saison: "2016-09-15",
        mois_basse_saison: "juin",
        prix_basse_saison: 5770,
        mois_moy_saison: "septembre",
        prix_moy_saison: 5990,
        mois_haute_saison: "juillet,août",
        prix_haute_saison: 6380,
        places_dispo: 34,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        photo: "romantique/5.jpg",
        photo_cat: "images/categorie/iceberg_02.jpg"
    },
    {
        nom: "Canada",
        categorie: "vacances_hiver",
        description: "Le produit 1 bla bla bla...",
        duree: 1,
        debut_saison: "2016-12-01",
        fin_saison: "2017-04-30",
        mois_basse_saison: "décembre",
        prix_basse_saison: 225,
        mois_moy_saison: "avril",
        prix_moy_saison: 255,
        mois_haute_saison: "janvier, février,mars",
        prix_haute_saison: 289,
        places_dispo: 256,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        photo: "hiver/2.jpg",
        photo_cat: "images/categorie/ski.jpg"
    },
    {
        nom: "Tallin",
        categorie: "vacances_hiver",
        description: "Le produit 1 bla bla bla...",
        duree: 1,
        debut_saison: "2017-01-01",
        fin_saison: "2017-03-31",
        mois_basse_saison: "janvier",
        prix_basse_saison: 355,
        mois_moy_saison: "mars",
        prix_moy_saison: 389,
        mois_haute_saison: "février",
        prix_haute_saison: 445,
        places_dispo: 268,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        photo: "hiver/4.jpg",
        photo_cat: "images/categorie/lac_louise.jpg"
    },
    {
        nom: "Russie",
        categorie: "dans_la_nature",
        description: "Le produit 1 bla bla bla...",
        duree: 8,
        debut_saison: "2016-07-15",
        fin_saison: "2016-09-15",
        mois_basse_saison: "Du 15 au 31 juillet",
        prix_basse_saison: 2680,
        mois_moy_saison: "Du 25 août au 15 septembre",
        prix_moy_saison: 3240,
        mois_haute_saison: "Du 1 au 25 août",
        prix_haute_saison: 3899,
        places_dispo: 82,
        nbr_max_animaux_admis: 2,
        prix_animal: 176,
        photo: "dans la nature/3.jpg",
        photo_cat: "images/categorie/lac_moraine.jpg"
    },
    {
        nom: "Tel Aviv",
        categorie: "dans_la_nature",
        description: "Le produit 1 bla bla bla...",
        duree: 7,
        debut_saison: "2016-10-01",
        fin_saison: "2017-05-31",
        mois_basse_saison: "octobre et avril",
        prix_basse_saison: 1890,
        mois_moy_saison: "novembre",
        prix_moy_saison: 2099,
        mois_haute_saison: "décembre, janvier, février,mars",
        prix_haute_saison: 2389,
        places_dispo: 102,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        photo: "dans la nature/1.jpg",
        photo_cat: "images/categorie/Caribou.jpg"
    },
    {
        nom: "Seville",
        categorie: "dans_la_nature",
        description: "Le produit 1 bla bla bla...",
        duree: 69,
        debut_saison: "2016-01-01",
        fin_saison: "2016-12-31",
        mois_basse_saison: "décembre et janvier",
        prix_basse_saison: 10690,
        mois_moy_saison: "novembre et février",
        prix_moy_saison: 12150,
        mois_haute_saison: "mars à octobre",
        prix_haute_saison: 13890,
        places_dispo: 65,
        nbr_max_animaux_admis: 0,
        prix_animal: 0,
        photo: "dans la nature/2.jpg",
        photo_cat: "images/categorie/aventure_01.jpg"
    }
];
