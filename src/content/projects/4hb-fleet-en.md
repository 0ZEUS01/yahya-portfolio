---
title: "Fleet Management System"
shortDescription: "A native vehicle-to-cloud ecosystem for real-time tracking and centralized logistics management."
tech: "Android Studio, Java, Angular, Spring Boot, SQL Server"
type: "Web & Mobile"
github: "https://github.com/0ZEUS01/Car_Fleet_Management"
featured: true
---

### Overview
Developed during a professional internship at HB Tech Services, this project is a comprehensive logistics solution designed to streamline fleet operations. The system consists of a native Android application designed for in-car deployment and a centralized administrative web portal for real-time monitoring.

### Vehicle-to-Admin Architecture
The system is built on a specialized architecture to bridge the gap between field assets and management. I developed the **native Android application** to be installed directly in the vehicles, functioning as a dedicated tracking and resource reporting hub. Simultaneously, the **Angular web portal** serves as a command center, allowing administrators to monitor vehicle locations, manage resource allocation, and oversee fleet health from a single interface.

### Technical Implementation
The platform utilizes a **Spring Boot** backend to process data coming directly from the vehicle-mounted Android units. By avoiding cross-platform frameworks and building natively in **Android Studio**, I ensured the application remains robust and reliable for the hardware constraints typically found in automotive environments. This setup enables automated maintenance scheduling and optimized routing based on live fleet data.

### Key Features
* **Native In-Car Application:** Developed in Android Studio for reliable tracking and driver reporting directly from the vehicle.
* **Centralized Admin Portal:** Angular web interface for comprehensive fleet monitoring and resource management.
* **Automated Maintenance:** Intelligent scheduling of vehicle services based on usage metrics and time intervals.
* **Real-Time Synchronization:** Seamless communication between mobile vehicle units and the administrative backend via a Spring Boot API.