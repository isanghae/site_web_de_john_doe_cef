# ReadME : instructions d'installation et objectif du projet
## Copyright 2025

Ce repository contient le fichier nommé site_web_de_john_doe_cef comportant l’application React.JS. 
Pour visionner les données vous aurez besoin :
- D’une connexion internet
- D’un éditeur de code comme VisualStudio disponible gratuitement sur le site officiel : https://code.visualstudio.com/
- De Node.JS

### Installer Node.JS :
Node.js est un environnement d'exécution JavaScript gratuit, open-source et multiplateforme qui permet aux développeurs de créer des serveurs, des applications web, des outils de ligne de commande et des scripts.
Vous pouvez l’installer sur le site officiel de Node.Js disponible à l’adresse suivante : https://nodejs.org/en

### Créer un projet REACT.JS : 
1.	Pour créer votre application, ouvrez votre terminal, naviguez jusqu'au répertoire où vous souhaitez que votre projet soit installé, et exécutez la commande suivante : npm create vite@latest nom-du-projet -- --template react
2.	Remplacez nom-du-projet par le nom que vous souhaitez donner à votre nouveau projet. Cette commande met en place un nouveau projet React avec une bonne configuration par défaut. Une fois l'installation terminée, naviguez dans le dossier de votre projet : cd nom-du-projet
3.	Vous pouvez ensuite ouvrir votre application en local avec : npm start
Cette commande démarre un serveur de développement et ouvre votre navigateur web par défaut sur http://localhost:3000, où vous pouvez voir votre nouvelle application React s'exécuter. Si tout est configuré correctement, vous devriez voir la page de bienvenue par défaut de React. Pour arrêter le serveur, un simple Ctrl + C dans votre terminal fera l'affaire.
Pour plus d’informations, vous pouvez vous rendre sur le site web de REACT.JS à l’adresse suivante : https://react.dev/

### Objectifs du devoir : 
Grâce à ce devoir, vous serez capable de : 
- Intégrer dans une page web des scripts événementiels avec un langage de script client, en suivant les principes de qualité et de sécurisation des clients web
- Programmer avec un framework de script client - Publier l'application développée sur un serveur web
- Rendre visible le site sur les moteurs de recherche avec les techniques de référencement naturel
  
Consignes complémentaires : 
Le livrable attendu est un lien repository GitHub du projet. Vous penserez à créer un fichier README.md à la racine du projet avec les prérequis du projet ainsi que les instructions d’installation et de lancement. Vous fournirez des captures d’écrans des résultats des validateurs W3C pour votre code. Le site devra être hébergé.


### React + Vite
Cette partie contient les instructions minimales pour ouvrir React dans Vite avec HMR et quelques règles ESLint.
Actuellment, deux plugins sont disponibles:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

