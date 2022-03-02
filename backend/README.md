# PROJET 7 - OPENCLASSROOMS - DEVELOPPEUR WEB

## Groupomania - Réseau social d'entreprise

<h3>- les Pack utilisé pour le backend :</h3>
<ul>
    <li>NodeJS</li>
    <li>Express</li>
    <li>SQL</li>
    <li>Bcrypt</li>
    <li>Jsonwebtoken</li>
    <li>multer</li>
</ul>

## MySQL
Dans le fichier groupomania/backend/.env ,mettre le mot de passe d'accès à votre base de donnée et votre nom d'utilisateur si besoin (root par défaut)
```
DB_USER=root
DB_PASS=
```
Ouvrir MySql command Line client puis effectuer ces deux lignes de commandes :
```
CREATE DATABASE groupomania;
USE groupomania;
```
Importer le fichier groupomania.sql (qui ce trouve a la racine du projet) : 
```
source (chemin vers le fichier groupomania.sql);
```


## BACK END
Ouvrir un terminal dans le dossier backend puis effectuer les lignes de commandes suivantes :
```
npm install
node server
```
## FRONT END
Ouvrir un autre terminal dans le dossier frontend puis effectuer les lignes de commandes suivantes :
```
npm install
npm run serve
```