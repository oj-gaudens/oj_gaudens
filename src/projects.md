---
layout: layout.njk
title: Projets
---

# Mes Projets Cybersécurité & Tech

<p style="font-size: 1.1rem; color: var(--text-secondary); margin-bottom: 2rem;">
Tous mes projets sont réalisés dans un cadre <strong>pédagogique, contrôlé et légal</strong>.<br>
Le but n'est jamais de nuire, mais d'apprendre et de comprendre les mécanismes de sécurité.
</p>

---

## 🗜 Étude d'une zip bomb

<div class="card">

### Objectifs du projet

J'ai étudié le principe d'une zip bomb pour comprendre les mécanismes de déni de service basés sur la décompression.

### Ce que j'ai appris

- **Surcharge de ressources** : Comment un petit fichier peut consommer énormément de mémoire
- **Risques pour les systèmes** : Impact potentiel sur les serveurs et applications
- **Limites de décompression** : Importance des protections et limitations

### Résultat

Cela m'a permis de comprendre comment des fichiers apparemment inoffensifs peuvent provoquer un déni de service et comment s'en protéger.

</div>

---

## 🔐 Étude des attaques par force brute (Hydra)

<div class="card">

### Contexte d'apprentissage

Utilisation d'Hydra en environnement de laboratoire contrôlé pour comprendre les attaques par dictionnaire.

### Connaissances acquises

- **Fonctionnement des attaques** : Processus automatisé de test de mots de passe
- **Importance des mots de passe robustes** : Complexité, longueur, caractères spéciaux
- **Mécanismes de protection** : Rate limiting, verrouillage de compte, captcha

### Application pratique

Cette expérience m'a permis de comprendre concrètement pourquoi la sécurité des mots de passe est cruciale.

</div>

---

## 🌐 Analyse réseau avec Wireshark

<div class="card">

### Découverte de l'analyse réseau

Wireshark m'a ouvert les portes de l'analyse de trafic réseau en temps réel.

### Compétences développées

- **Capture de paquets** : Interception et analyse du trafic réseau
- **Protocoles TCP/IP** : Compréhension approfondie des communications
- **Analyse HTTP et DNS** : Observation des requêtes et réponses
- **Visualisation** : Représentation graphique des flux de communication

### Bénéfice

Cette pratique me permet de visualiser concrètement ce qui se passe "sous le capot" d'Internet.

</div>

---

## 🧪 Sécurité web et vulnérabilités

<div class="card">

### Vulnérabilités étudiées

- **XSS (Cross-Site Scripting)** : Injection de scripts malveillants
- **Injections SQL** : Manipulation de bases de données
- **NoSQL injections** : Exploitation de bases NoSQL

### Objectifs pédagogiques

- Comprendre **comment fonctionnent** ces attaques
- Mesurer les **dégâts potentiels** sur les systèmes
- Apprendre **comment les développeurs** peuvent s'en protéger

### Vision

Cette formation me prépare à devenir un développeur conscient des enjeux de sécurité.

</div>

---

## 💉 Étude approfondie des injections SQL

<div class="card">

### Vue d'ensemble

Les injections SQL (SQLi) représentent l'une des vulnérabilités les plus critiques dans la sécurité web. J'ai étudié ces failles en profondeur pour comprendre leurs mécanismes et apprendre à m'en protéger en tant que futur développeur.

### Classification des failles (du plus simple au plus complexe)

#### 1. Injection de base (Simple String Injection)
**Niveau de complexité : Faible**

La plus fondamentale des failles SQL. L'attaquant insère directement du code SQL dans une entrée utilisateur non sécurisée.

- **Principe** : Modification d'une requête pour altérer son comportement
- **Exemple type** : Sur `SELECT * FROM users WHERE username = 'user_input'`, l'injection `' OR '1'='1` permet de contourner l'authentification
- **Apprentissage** : Nécessite peu de connaissances techniques mais illustre parfaitement pourquoi la validation des entrées est cruciale

#### 2. Injection UNION-based
**Niveau de complexité : Moyen**

Utilisation de l'opérateur UNION pour combiner des requêtes et extraire des données supplémentaires.

- **Principe** : Fusion de la requête originale avec une requête malveillante
- **Exemple** : Sur `SELECT username FROM users WHERE id = 'user_input'`, l'injection `1 UNION SELECT username, password FROM admin_table` expose des données sensibles
- **Prérequis** : Compréhension des schémas de base de données et correspondance des structures de colonnes

#### 3. Injection Error-based
**Niveau de complexité : Moyen**

Exploitation des messages d'erreur SQL pour extraire des informations sur la structure de la base de données.

- **Principe** : Provoquer délibérément des erreurs pour que le serveur révèle des détails sensibles
- **Exemple** : `' AND 1=CONVERT(int, (SELECT password FROM users))--` génère une erreur qui peut exposer des données
- **Conditions** : Dépend de la configuration du serveur pour afficher les erreurs

#### 4. Injection Blind (Boolean-based)
**Niveau de complexité : Élevé**

Aucune donnée n'est retournée directement. L'attaquant infère les informations en posant des questions vraies ou fausses.

- **Principe** : Extraction d'informations bit par bit via des conditions logiques
- **Exemple** : `AND (SELECT COUNT(*) FROM secret_table) > 5` permet de déterminer l'existence d'une table
- **Méthode** : Nécessite des tests itératifs et souvent des scripts automatisés

#### 5. Injection Blind (Time-based)
**Niveau de complexité : Très élevé**

Variante utilisant des fonctions de délai pour mesurer le temps de réponse et déduire si une condition est vraie.

- **Principe** : Mesure du temps de réponse via des fonctions comme SLEEP (MySQL)
- **Exemple** : `AND IF(1=1, SLEEP(5), 0)` - un délai de 5 secondes confirme que la condition est vraie
- **Contraintes** : Attaques lentes, répétées, sensibles à la latence réseau

#### 6. Injection Out-of-band
**Niveau de complexité : Très élevé**

Forcer la base de données à envoyer des données via un canal externe (DNS, email) quand les canaux normaux sont bloqués.

- **Principe** : Exfiltration de données via des protocoles alternatifs
- **Exemple** : Utilisation de `LOAD_FILE` ou `xp_dirtree` pour extraire vers un serveur contrôlé par l'attaquant
- **Prérequis** : Contrôle sur des serveurs externes et configurations réseau spécifiques

#### 7. Injection Stacked Queries
**Niveau de complexité : Très élevé**

Enchaînement de plusieurs requêtes dans une seule injection pour exécuter des commandes multiples.

- **Principe** : Exécution séquentielle de commandes SQL distinctes
- **Exemple** : `SELECT * FROM users; DROP TABLE secrets;` exécute les deux instructions
- **Limitation** : Dépend fortement de si le backend autorise l'exécution multiple

#### 8. Injection Second-order
**Niveau de complexité : Extrêmement élevé**

La plus sophistiquée : l'injection n'est pas immédiate mais se produit via des données stockées réutilisées ultérieurement.

- **Principe** : Injection différée via des données persistées qui sont réutilisées dans d'autres requêtes
- **Exemple** : Une chaîne malveillante insérée dans un profil utilisateur, puis exploitée lors d'une requête admin
- **Exigences** : Planification à long terme, compréhension approfondie des flux applicatifs

### Protections étudiées

Dans le cadre de mon apprentissage, j'ai également étudié les contre-mesures essentielles :

- **Prepared Statements** : Séparation du code SQL et des données
- **Échappement des entrées** : Neutralisation des caractères spéciaux
- **Validation stricte** : Vérification des types et formats d'entrée
- **Principe du moindre privilège** : Limitation des droits des comptes de base de données
- **Web Application Firewalls (WAF)** : Détection et blocage des tentatives d'injection

### Impact sur ma formation

Cette étude approfondie des injections SQL me permet de :
- Comprendre les vulnérabilités du point de vue de l'attaquant
- Développer avec une mentalité "security-first"
- Identifier et corriger les failles potentielles dans mon propre code
- Me préparer aux certifications en cybersécurité

</div>

---

## 🐍 Développement de scripts Python

<div class="card">

### Projets réalisés

**Scripts de cryptographie**
- Algorithmes de chiffrement/déchiffrement
- Implémentation de méthodes classiques (César, Vigenère, etc.)

**Simulations d'attaques**
- Scripts pédagogiques de force brute
- Analyse de mots de passe faibles

**Scanner de ports TCP**
- Inspiration du fonctionnement de Nmap
- Détection de services actifs sur un réseau

### Compétences acquises

- **Algorithmique** : Logique de programmation et optimisation
- **Réseau** : Manipulation de sockets et protocoles
- **Sécurité** : Compréhension pratique des outils de pentesting

### Objectif professionnel

Ces projets nourrissent mon ambition de devenir **pentester** ou **ingénieur sécurité**.

</div>

---

<p style="text-align: center; margin-top: 3rem; font-size: 1.1rem;">
🎯 <strong>Prochaines étapes :</strong> Approfondir mes connaissances en pentesting et obtenir des certifications en cybersécurité.
</p>
