# Déploiement d'un Site Web Next.js avec Git

## Table des Matières
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Développement Local](#développement-local)
- [Déploiement](#déploiement)
- [Débogage](#débogage)
- [Ressources Supplémentaires](#ressources-supplémentaires)

## Prérequis
- [Node.js](https://nodejs.org/en/download/)
- [npm](https://www.npmjs.com/get-npm) ou [Yarn](https://yarnpkg.com/getting-started/install)
- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)
- Compte sur une plateforme de déploiement comme [Vercel](https://vercel.com/) (recommandé pour Next.js)

## Installation
1. Clonez le dépôt :
    ```bash
    git clone https://github.com/warkozz/zoo-app
    cd votre-repo
    ```

2. Installez les dépendances :
    ```bash
    npm install
    ```
    ou si vous utilisez Yarn :
    ```bash
    yarn install
    ```

## Développement Local
1. Lancez le serveur de développement :
    ```bash
    npm run dev
    ```
    ou avec Yarn :
    ```bash
    yarn dev
    ```

2. Ouvrez votre navigateur et accédez à [http://localhost:3000](http://localhost:3000) pour voir votre application.

## Déploiement
### Avec Vercel
1. Si vous n'avez pas encore de compte Vercel, inscrivez-vous sur [Vercel](https://vercel.com/).
2. Installez l'outil de ligne de commande Vercel :
    ```bash
    npm install -g vercel
    ```
3. Déployez votre application :
    ```bash
    vercel
    ```
    Suivez les instructions à l'écran pour lier votre projet à votre compte Vercel et configurer les options de déploiement.

### Avec d'autres plateformes (comme Netlify ou AWS)
1. Suivez les instructions spécifiques de la plateforme pour déployer une application Next.js. Généralement, vous devrez :
    - Configurer le projet sur la plateforme.
    - Lier votre dépôt Git.
    - Définir les variables d'environnement nécessaires.
    - Configurer les scripts de build (`npm run build`).

## Débogage
- Utilisez les outils de développement de votre navigateur pour identifier les erreurs JavaScript.
- Vérifiez les logs du serveur en production pour des erreurs spécifiques au serveur.
- Assurez-vous que toutes les variables d'environnement nécessaires sont correctement définies.

## Ressources Supplémentaires
- [Documentation Next.js](https://nextjs.org/docs)
- [Documentation Vercel](https://vercel.com/docs)
- [Documentation Git](https://git-scm.com/doc)
- [Next.js Examples](https://github.com/vercel/next.js/tree/canary/examples)

## Licence
Ce projet est sous licence MIT. Voir le fichier [LICENSE](LICENSE) pour plus de détails.
