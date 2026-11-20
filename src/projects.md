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

<div id="agent-pentest"></div>

## Agent IA de pentest multi-rôles (Open WebUI / Ollama)

<div class="card">

J'ai conçu et déployé un système d'agents IA spécialisés pour l'assistance au pentest, basé sur **Qwen3-4B**, décensuré via **Heretic** ([p-e-w/heretic](https://github.com/p-e-w/heretic) sur GitHub) : un outil qui automatise la suppression de l'alignement de sécurité d'un modèle (« abliteration ») en combinant l'ablation directionnelle (méthode décrite par Arditi et al., 2024) avec un optimiseur de paramètres (TPE, via Optuna) qui tourne sans intervention humaine. Contrairement aux abliterations manuelles classiques, Heretic minimise simultanément le taux de refus du modèle et sa divergence (KL) par rapport au modèle d'origine, ce qui limite la perte de capacités tout en rendant le modèle coopératif pour un usage de test de sécurité **en environnement autorisé**.

Ce modèle tourne en local via **Ollama**, orchestré dans **Open WebUI**. L'architecture repose sur 4 presets du même modèle, chacun avec un rôle distinct :

- **pentest-lead** : chef d'orchestre. Il répartit les tâches entre les autres agents selon la méthodologie OWASP WSTG/ASVS (reconnaissance passive, cartographie, authentification, injections, logique métier), évalue leurs rapports de façon critique plutôt que de les exécuter aveuglément, et produit la synthèse finale (gravité, correctifs).
- **pentest-terminal** : exécution de commandes réseau/système via SSH sur la cible (reconnaissance, scan).
- **web-vuln-analyzer** : analyse live du HTML/JS d'une application web (XSS, failles DOM).
- **code-vuln-hunter** : audit statique de code source multi-langage (SQLi, NoSQLi, etc.).

La communication entre pentest-lead et les 3 agents spécialisés passe par un outil Python dédié (**Agent Orchestrator**) exposant des fonctions de délégation (`dispatch_terminal`, `dispatch_web`, `dispatch_code`), avec journalisation complète de chaque tâche envoyée et de chaque rapport reçu. Toute action active est **verrouillée par un fichier de périmètre** (`scope.json`) définissant la mission autorisée, son niveau d'autorisation et son expiration : aucun outil ne peut agir hors de ce cadre.

### Infrastructure

Le système s'appuie sur deux machines physiques sous **Kali Linux** : une tour principale (GTX 1660 SUPER, qui héberge Ollama et Open WebUI en conteneur Docker) et un ancien PC HP ProBook reconverti en serveur cible, relié à la tour par une liaison RJ45 directe et dédiée (adaptateur USB-Ethernet TP-Link), isolée du réseau domestique, avec partage NAT de la connexion Internet et accès SSH par clé. Un outil complémentaire (`hp_control.py`) permet aux agents de piloter ce second PC de bout en bout : réveil à distance (Wake-on-LAN), exécution de commandes, envoi de fichiers, vérification d'état et extinction.

### Accès à distance

J'ai mis en place un accès complet à la tour : VPN mesh **Tailscale** (WireGuard) reliant la tour et mon smartphone sur un réseau privé chiffré, quel que soit le réseau utilisé, couplé à un serveur VNC (x11vnc) pour piloter le bureau à distance, et un réveil à distance configuré au niveau système (ethtool/NetworkManager) et BIOS, avec une attribution stable des interfaces réseau via des règles **udev** (lien domestique + lien dédié vers le PC HP).

### Et ensuite ?

Ce système à 4 agents est la **première brique** d'un pipeline plus large que je compte développer, en m'inspirant des architectures de Bug Bounty automatisées à grande échelle : reconnaissance OSINT, énumération d'infrastructure, fuzzing web, validation hors-bande des failles aveugles, triage et reporting automatisé. L'objectif est de le faire évoluer vers un pipeline multi-agents couvrant tout le cycle de test (**piste de travail, pas encore réalisée**).

</div>

---

## SOSPro : application web full-stack sécurisée

<div class="card">

Projet personnel : un MVP fonctionnel et déployable.

- **Front** : Vanilla JS
- **Back** : Supabase (PostgreSQL)
- **Sécurité** : authentification JWT, messagerie chiffrée AES-256, politiques RLS (Row Level Security)
- **Fonctionnalité** : carte géolocalisée

 [Application en ligne](https://sos-pro-ebon.vercel.app) · [Code source](https://github.com/oj-gaudens/SOSPro)

</div>

---

## Studio Markdown DSFR (Stage DNUM)

<div class="card">

Éditeur Markdown dans le navigateur pour créer des pages au format du **Système de Design de l'État (DSFR)**. Déployé pour environ **5 000 agents** de la DNUM du Ministère de l'Écologie.

- Composants DSFR (alertes, cartes, tuiles, accordéons, grilles)
- Aperçu en direct, thèmes clair/sombre, sauvegarde automatique
- Export HTML / PDF, modèles de pages, diaporamas
- **Stack** : Eleventy, Nunjucks, Marked.js, CI/CD

 [Démo](https://oj-gaudens.github.io/siteAide/) · [Code source](https://github.com/oj-gaudens/siteAide)

</div>

---

## Guide OSINT (cadre légal et éthique)

<div class="card">

Guide en français, pas à pas, sur le renseignement d'origine sources ouvertes : méthode en 5 étapes (objectif, collecte, traitement, analyse, rapport), **cadre légal français** et checklist éthique, prise en main d'outils (Sherlock, Holehe, exiftool, Overpass Turbo, Maltego...), Google dorks, analyse EXIF, géolocalisation visuelle, études de cas, exercice d'**auto-audit de sa propre exposition** et conseils de protection contre le doxing.

 [Code source](https://github.com/oj-gaudens/osint)

</div>

---

## Ubuntu Network Rescue

<div class="card">

Guide de dépannage réseau en ligne de commande pour Ubuntu (filaire et Wi-Fi), avec un script Bash `fix-network.sh` qui automatise les étapes principales : diagnostic, redémarrage de NetworkManager, DHCP, DNS, pilotes, Netplan. Testé sur Ubuntu 20.04, 22.04 et 24.04.

**Technos** : Bash, NetworkManager (`nmcli`), systemd, iproute2, Netplan.

 [Code source](https://github.com/oj-gaudens/-Ubuntu-Network-Rescue)

</div>

---

## AntiVeille

<div class="card">

Petit utilitaire multiplateforme (Windows 11, Linux, macOS) qui empêche l'ordinateur de se mettre en veille pendant une durée choisie (`2h`, `1h24min`, `45min`...), puis rend la main au système. Rien à installer : un double-clic ou un script suffit.

- **Windows** : `SetThreadExecutionState` + léger mouvement de souris
- **Linux** : `systemd-inhibit`, `gnome-session-inhibit`, `xset`/`xdotool` sous X11
- **macOS** : `caffeinate`

**Technos** : Bash, batch Windows, API système. Licence MIT.

 [Code source](https://github.com/oj-gaudens/AntiVeille)

</div>

---

## Étude d'une zip bomb

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

## Étude des attaques par force brute (Hydra)

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

## Analyse réseau avec Wireshark

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

## Sécurité web et vulnérabilités

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

## Étude approfondie des injections SQL

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

## Développement de scripts Python

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
 <strong>Prochaines étapes :</strong> développer le pipeline multi-agents, approfondir le pentesting et obtenir des certifications en cybersécurité.
</p>
