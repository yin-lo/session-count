# Exercice

## Objectif

L'objectif est de manipuler les données d'une session.

## Énoncé

Les dépendances sont précisées dans le `package.json`, vous n'avez quàa installer les dépendances et lancez le serveur.

```bash
npm install
npm run dev
```

La session est déjà configurée.

Il y a deux pages :
- `/` : la page d'accueil qui affiche le nombre actuel
- `/add` : la page avec un formulaire pour ajouter un nombre

### Étape 1

Il va falloir stocker un nombre en session et l'afficher sur la page `/`.
Si le nombre n'est pas en session, il faut l'initialiser à 0.

### Étape 2

Lorsqu'on soumet le formulaire de la page `/add`, il faut ajouter le nombre soumis au nombre en session.
