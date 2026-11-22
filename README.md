# Oz – Maquettes de jeux

Site de test des maquettes de jeux, publié avec GitHub Pages.

**Adresse :** https://ozvitrine.github.io/Oz-Space-Invaders-Defis-Nature/

| Dossier | Jeu | Statut |
|---|---|---|
| `pixel-invaders/` | Pixel Invaders : rétro arcade + Défis Nature street art (caractéristiques : carreaux, taille, points, année) | jouable |

## Pages du site

| Page | Contenu |
|---|---|
| `index.html` | Accueil : liste des maquettes |
| `notice.html` | Mode d'emploi de Pixel Invaders |
| `evolutions.html` | Historique des versions |
| `confidentialite.html` | Politique de confidentialité |
| `conditions.html` | Conditions d'utilisation et mentions légales |

## Ajouter une maquette

1. Crée un dossier (ex. `mon-jeu/`) contenant le fichier `index.html` du jeu.
2. Dans le `index.html` de la racine, ajoute une ligne dans la liste `MAQUETTES`.

## Crédits

Données des invaders : [Space Invaders World Database](https://github.com/goguelnikov/SpaceInvaders), licence MIT, © 2024 goguelnikov.

Maquettes de fan non officielles, sans lien avec l'artiste Invader ni avec l'application Flash Invaders. Les mosaïques affichées dans les jeux sont générées et ne reproduisent pas les œuvres de l'artiste.

## Mise à jour automatique de la base

À l'ouverture (au plus une fois toutes les 12 h), Pixel Invaders vérifie sur GitHub si le dépôt [goguelnikov/SpaceInvaders](https://github.com/goguelnikov/SpaceInvaders) contient une version plus récente (V07, V08…) ou une version modifiée. Si oui, elle est **téléchargée et appliquée automatiquement**, sans recharger la page ; un message résume les changements. Hors connexion, la dernière base connue est utilisée. Le bouton « 🔄 Vérifier maintenant » force la vérification.

Le bouton **📜 Historique des mises à jour** (menu et en-tête) liste chaque version : date, invaders ajoutés par ville, nouvelles villes, changements d'état (ex. OK → Détruit), invaders retirés et positions corrigées. L'historique est prérempli avec les versions V01 à V06 du dépôt.

Les villes absentes de la liste du jeu apparaissent avec leur code et le pays « Autre » jusqu'à la prochaine mise à jour du fichier.

## Import depuis Flash Invaders

« ⚡ Mes flashs → 📱 Importer depuis Flash Invaders » : on enregistre l'écran en faisant défiler lentement sa galerie Flash Invaders (ou on fait des captures), puis on choisit la vidéo. Le jeu lit les codes affichés sous chaque vignette (police 5×7 de l'appli), les vérifie avec la base, et ajoute les invaders à la collection.

- Tout est analysé dans le navigateur : la vidéo n'est jamais envoyée.
- Option « Garder la vignette » : chaque carte flashée affiche la vignette de sa galerie. Les vignettes sont enregistrées **uniquement dans le navigateur de l'appareil** (IndexedDB), jamais dans ce dépôt.
- Les invaders trop récents pour la base sont gardés en attente et ajoutés automatiquement à la prochaine mise à jour de la base.

Carreaux, taille et année sont des estimations (seuls les points sont réels).

## Invaders flashés mais indiqués « détruits »

Après chaque import, le jeu liste les invaders flashés que la base indique détruits, avec la date depuis laquelle la base les donne détruits (d'après l'historique des versions). Pour chacun, le joueur répond : flashé **avant** la destruction (la carte affiche « 🏆 Détruit après ton flash ») ou **après** (la carte passe « vu intact »). Les corrections peuvent être envoyées en un clic à l'auteur de la base : une demande (issue GitHub) pré-remplie s'ouvre, le joueur n'a qu'à la valider.

## Filmer la galerie

Sur téléphone, l'enregistreur d'écran du système filme la galerie Flash Invaders ; le jeu guide les étapes et reprend la main au retour. Sur PC (téléphone affiché à l'écran), le bouton « Filmer une fenêtre » enregistre directement la fenêtre et lance l'analyse.

### Décision automatique avant / après

Le jeu mémorise la date de chaque import et, pour chaque flash, l'import où il apparaît pour la première fois. Il compare avec la fenêtre de destruction donnée par l'historique de la base (dernière version où l'invader était en place → première version où il est indiqué détruit) :
- flash apparu dans un import postérieur à la date où la base le donne détruit → **erreur de la base** (Flash Invaders ne valide un flash que si la mosaïque est en place) : correction automatique, proposée au signalement ;
- flash déjà présent avant la fenêtre de destruction → **🏆 détruit après ton flash** ;
- fenêtres qui se chevauchent (ou premier import, date de flash inconnue) → la question est posée au joueur.
