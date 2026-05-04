---
title: "Système de Gestion de Flotte"
shortDescription: "Un écosystème natif véhicule-vers-cloud pour le suivi en temps réel et la gestion logistique centralisée."
tech: "Android Studio, Java, Angular, Spring Boot, SQL Server"
type: "Web & Mobile"
github: "https://github.com/0ZEUS01/Car_Fleet_Management"
featured: true
---

### Vue d'ensemble
Développé lors d'un stage professionnel chez HB Tech Services, ce projet est une solution logistique complète conçue pour optimiser les opérations de flotte. Le système se compose d'une application Android native conçue pour être embarquée dans les véhicules et d'un portail web administratif centralisé pour une surveillance en temps réel.

### Architecture Véhicule-vers-Admin
Le système repose sur une architecture spécialisée pour faire le lien entre les actifs sur le terrain et la direction. J'ai développé l'**application Android native** pour être installée directement dans les véhicules, fonctionnant comme un hub dédié au suivi et au rapport de ressources. Parallèlement, le **portail web Angular** sert de centre de commande, permettant aux administrateurs de surveiller l'emplacement des véhicules et de gérer l'allocation des ressources.

### Implémentation Technique
La plateforme utilise un backend **Spring Boot** pour traiter les données provenant directement des unités Android embarquées. En choisissant un développement natif avec **Android Studio**, j'ai garanti une application robuste et fiable, adaptée aux contraintes matérielles des environnements automobiles. Cette configuration permet l'automatisation de la maintenance et l'optimisation des itinéraires.

### Fonctionnalités Clés
* **Application Embarquée Native :** Développée avec Android Studio pour un suivi fiable et des rapports conducteurs directement depuis le véhicule.
* **Portail Admin Centralisé :** Interface web Angular pour une surveillance complète de la flotte et la gestion des ressources.
* **Maintenance Automatisée :** Planification intelligente de l'entretien des véhicules selon les métriques d'utilisation.
* **Synchronisation Temps Réel :** Communication fluide entre les unités mobiles et le backend administratif via une API Spring Boot.