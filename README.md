# NARI CARE 
*“The universe assigned you an angelic body, but forgot to include a user manual. We wrote it.”*

---

### Project Links & Resources
| Resource | Status / Link |
| :--- | :--- |
| **Deployed App** | [Click here to view live deployment](#) *(Insert Deployed Link Here)* |
| **Architecture Diagram** | [![Architecture diagram](https://gitdiagram.com/diagram-badge.svg)](https://gitdiagram.com/tu-lasizzzz/nari-care?utm_source=readme&utm_medium=badge) |
| **Google Docs** | [https://docs.google.com/document/d/1_rmpQiaYQOLvrewDG7KkJJL9kUfoDHYx3snhC1vea1o/edit?usp=sharing](#)|
| **Google Drive** | [https://drive.google.com/drive/folders/14r3TmnfC7gQeX0kBpmDLuGeOHvxZ4gSQ?usp=sharing](#)|
| **Final YouTube Demo** | [Watch 3-Minute Walkthrough Video](#)  |
|**First draft**   |[https://youtu.be/C3MCqfCTRh0](#)|
|**ppt**   |[https://docs.google.com/presentation/d/1Nzc05PPsflgrja-rCZqPOkRmHP9BZkbe/edit?usp=sharing&ouid=100891964871094881017&rtpof=true&sd=true](#)|
---

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=flat-square&logo=spring-boot&logoColor=white)](https://spring.io/)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=flat-square&logo=postgresql&logoColor=white)](https://www.postgresql.org/)

---

## Overview

**Nari Care Pass** is a privacy-first, clinical menstrual history organizer designed specifically to bridge the diagnostic gap in women's healthcare across three critical life stages: **Menarche**, **Active Reproductive Years**, and **Perimenopause**. 

Unlike lifestyle trackers or generic fertility apps, Nari Care Pass focuses strictly on **clinical diagnostics, evidence-based metrics, and proprietary algorithmic risk scoring** to cut down the average 7-to-10-year diagnosis timeline for conditions like endometriosis and secondary dysmenorrhea.

---

## Key Proprietary Innovations

| Engine / Feature | Description | Clinical Impact |
| :--- | :--- | :--- |
| **Pain & Functional Impairment (PFE / TFI) Engine** | Evaluates pain scale (>= 7), medication dosage, and time-to-relief (<= 30% reduction at 120 mins) alongside daily disruption. | Flags analgesic refractoriness and high endometriosis risk. |
| **Volumetric PBAC-to-Anemia Engine** | Converts fast pictorial pad/tampon saturation taps into volumetric blood loss (1 pt ≈ 1 mL). | Computes longitudinal iron depletion and predicts menorrhagia before fatigue sets in. |
| **1-Minute Doctor Handover Engine** | Synthesizes multi-cycle metrics, PFE/PBAC scores, and FIGO red flags into a structured clinician brief. | Bridges the communication gap during high-pressure gynecological appointments. |
| **3-Tier Life Stage Adaptation** | Dynamically adapts clinical algorithms across Menarche, Active Reproductive Years, and Perimenopause. | Ensures relevant threshold tracking tailored to changing hormonal realities. |

---

## The 4-Planet Celestial UI Architecture

The user interface immerses the patient in a serene, celestial sanctuary mapped to four core system pillars:

* **Planet 1 (The Foundation):** Life Stage Mode Switcher (Menarche, Reproductive, Perimenopause).
* **Planet 2 (The Pain Core):** PFE & Therapeutic Failure Index Engine.
* **Planet 3 (The Flow Core):** Volumetric PBAC-to-Anemia Blood Loss Engine.
* **Planet 4 (The Synthesis Bridge):** 1-Minute Doctor Handover Generator.

---

## Repository Directory Structure

```text
tu-lasizzzz-nari-care/
├── index.html
├── package.json
├── tsconfig.json
├── vite.config.ts
└── src/
    ├── App.tsx
    ├── index.css
    ├── main.tsx
    └── components/
        ├── AboutUsOrb.tsx
        ├── AngelWingsHero.tsx
        ├── CelestialPlanets.tsx
        ├── ContactUsModal.tsx
        ├── ContinuousScrollCanvas.tsx
        ├── CosmicBackground.tsx
        ├── CosmicParticles.tsx
        ├── DataPrivacySection.tsx
        ├── DownloadModal.tsx
        ├── DownloadSection.tsx
        ├── FeatureStopsCarousel.tsx
        ├── Footer.tsx
        ├── Navbar.tsx
        ├── OverviewSection.tsx
        ├── PhoneMockup.tsx
        ├── ScrollAnimationCanvas.tsx
        └── WingsSanctuarySection.tsx

Tech Stack
Frontend: React, Vite, TypeScript, Tailwind CSS, GSAP (GreenSock Animation Platform) for buttery-smooth scroll and wing animations.

Backend: Spring Boot 3.x, Java, Hibernate/JPA, PostgreSQL RESTful architecture.

Security & Privacy: Client-side local encryption patterns and strict zero-knowledge telemetry design.

Getting Started & Local Setup
1. Clone the Repository
Bash
git clone [https://github.com/tu-lasizzzz/nari-care.git](https://github.com/tu-lasizzzz/nari-care.git)
cd nari-care
2. Install Frontend Dependencies
Bash
npm install
3. Run the Development Server
Bash
npm run dev
4. Configure Backend
Ensure your Spring Boot backend service is running locally on port 8080 with the /api/v1 endpoints exposed for symptom logging, PBAC calculation, and doctor handover summaries.

License & Acknowledgments
Built with passion for transforming women's healthcare diagnostics. Distributed under the MIT License.
