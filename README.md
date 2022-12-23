# fresh project

## Installation

### Deno

- Installer Deno selon les directives de la documentation : https://deno.land/manual@v1.29.1/getting_started/installation

### SurrealDB

- Installer SurrealDB selon les directives de la documentatioon : https://surrealdb.com/docs/start/installation

### Variables d'environnements

- Créer le fichier .env à la racine du site web à partir du fichier .env.example et remplir les champs avec les valeurs appriopriées.

## Se connecter à la base de données

surreal start --log debug --user root --pass root --bind 0.0.0.0:1000 memory

## Démarrer le site web

```
deno task start
```
