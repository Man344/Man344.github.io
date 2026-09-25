// ================================================================
//  GALERIE PHOTOS
//  ================================================================
//  C'est LE seul fichier à modifier pour gérer la galerie.
//
//  COMMENT AJOUTER UNE PHOTO ?
//  ----------------------------
//  1. Copiez votre photo dans le dossier  images/galerie/
//  2. Copiez un bloc { ... } existant et collez-le où vous voulez
//  3. Modifiez les champs
//
//  COMMENT SUPPRIMER UNE PHOTO ?
//  --------------------------------
//  Supprimez le bloc { ... },  correspondant
//
//  ORDRE D'AFFICHAGE : la première photo dans la liste
//  s'affiche en premier dans la galerie.
//
//  CHAMPS DISPONIBLES :
//  - image       : chemin de la photo (obligatoire)
//  - titre       : titre affiché dans la lightbox (obligatoire)
//  - categorie   : étiquette courte (Paysage, Portrait, etc.)
//  - description : texte de présentation de la photo
//  - exif        : données techniques optionnelles (appareil, focale...)
// ================================================================

const PHOTOS = [

  {
    image:       "images/galerie/image1.jpg",
    titre:       "Brume matinale",
    categorie:   "Paysage",
    description: "Lever de soleil sur les collines du Vercors. La lumière rasante traverse la brume encore épaisse, révélant les reliefs dans un dégradé de gris presque abstrait.",
    exif:        "Nikon Z6 II — 85mm — f/4 — 1/125s — ISO 200"
  },
  {
    image:       "images/galerie/image3.jpg",
    titre:       "Architecture silencieuse",
    categorie:   "Architecture",
    description: "Façade industrielle abandonnée en banlieue lyonnaise. La géométrie des structures raconte une histoire sans mots.",
    exif:        "Nikon Z6 II — 24mm — f/8 — 1/60s — ISO 100"
  },

  {
    image:       "images/galerie/image4.jpg",
    titre:       "L'attente",
    categorie:   "Reportage",
    description: "Photographie de rue, gare de la Part-Dieu. Les gens qui attendent révèlent souvent ce que le mouvement efface.",
    exif:        "Fujifilm X-T5 — 35mm — f/2 — 1/500s — ISO 800"
  },

  {
    image:       "images/galerie/image5.jpg",
    titre:       "Forêt bleue",
    categorie:   "Paysage",
    description: "Sous-bois des Vosges en hiver. La neige efface les détails et transforme le familier en étrange.",
    exif:        "Nikon Z6 II — 35mm — f/5.6 — 1/80s — ISO 640"
  },

  {
    image:       "images/galerie/image6.jpg",
    titre:       "Reflet #3",
    categorie:   "Abstrait",
    description: "Série de recherches sur le reflet et la distorsion. La surface de l'eau comme miroir imparfait du ciel.",
    exif:        "Sony A7 IV — 90mm macro — f/11 — 1/250s — ISO 200"
  },

  {
    image:       "images/galerie/image7.jpg",
    titre:       "Portraits de rue",
    categorie:   "Portrait",
    description: "Rencontres éphémères dans le marché du Vieux-Lyon. Chaque visage est une géographie.",
    exif:        "Fujifilm X-T5 — 23mm — f/2.8 — 1/320s — ISO 1600"
  }

  // Pas de virgule après le dernier bloc !

];
