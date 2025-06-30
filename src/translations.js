// src/translations.js
export const translations = {
  en: {
    aboutHeading: "About Me",
    aboutText: `Hi! I'm Micheal, a Data Science & AI student passionate about cloud computing,
    simulation, and modern web development. I'm building my career path towards becoming a
    certified Cloud Engineer and Azure expert. This website is part of that journey 🚀`,
    skillsHeading: "Skills & Technologies",
    certificationsHeading: "Certifications",


    heroTitle: "Hi, I am Micheal and this is my website about me",
    visits: "Visits",
    loadingVisits: "Loading visits...",
    copyEmail: "Copy email to clipboard",
    emailCopied: "Email copied!",

    contactHeading: "Contact Me",
    contactName: "Your Name",
    contactEmail: "Your Email",
    contactMessage: "Your Message",
    contactSend: "Send",
    contactSuccess: "Message sent successfully!",
    contactError: "Error sending message.",
    contactServerError: "Server error.",


    projectsHeading: "Projects",
    showMore: "Show more",
    hide: "Hide",
    tasks: "Tasks:",
    myTasks: "My contributions:",
    skills: "Skills:",
    viewOnGitHub: "View on GitHub",

    projectsList: [
      {
        id: 1,
        title: "Solar System Simulation",
        shortDesc: "A 2.5D JavaFX simulation of the Solar System using NASA data.",
        fullDesc: "A space simulation written in JavaFX with gravitational physics, custom probe trajectory planning, and Titan landing scenario. Used evolutionary algorithms and Hill Climbing for optimization.",
        image: "/solar_project.jpeg",
        github: "https://github.com/MLu2005/SolarSystem",
        tasks: [
          "Gravity-based motion simulation",
          "Custom Genetic Algorithm for pathfinding",
          "JavaFX GUI + physics engine"
        ],
        myTasks: [
          "Wrote JUnit tests for gravitational model and ODE solvers",
          "Created an ODE plotter for probe trajectories",
          "Implemented a Genetic Algorithm for optimization",
          "Modeled Titan terrain using Perlin noise",
          "Simulated atmospheric forces during descent"
        ],
        skills: ["Java", "JavaFX", "Math modeling", "AI"]
      },
      {
        id: 2,
        title: "This Very Website",
        shortDesc: "You’re literally looking at it right now.",
        fullDesc: "Yes, this portfolio site is one of my projects. It’s built with React, styled with inline CSS (for now), and deployed to Azure Static Web Apps with CI/CD from GitHub. Even the “Download CV” button works. Hopefully.",
        image: "/cv_project.png",
        github: "https://github.com/MLu2005/cv-website-final",
        tasks: [
          "Built in React with Vite",
          "Deployed to Azure with GitHub Actions",
          "Config wars with workflows",
          "Documented everything, cried a little"
        ],
        myTasks: [
          "Built entire UI in React",
          "Configured CI/CD with GitHub Actions to Azure",
          "Implemented language switcher and view counter",
          "Debugged deployment issues and GitHub workflows"
        ],
        skills: ["React", "Azure Static Web Apps", "GitHub Actions", "CI/CD", "Strong Google-Fu"]
      },
      {
        id: 3,
        title: "Student Performance Predictor",
        shortDesc: "Our first ever Java-based AI project at uni.",
        fullDesc: "This was our first big team project (7 people) at university – built entirely in Java without additional libraries (just JavaFX for visualizations). We analyzed student grades, visualized them in a GUI, and created a Random Forest model to predict missing or future scores. Sadly, Git was a mystery back then, so documentation is... creative.",
        image: "/student_project.png",
        github: "",
        tasks: [
          "Explored and cleaned real-world student datasets",
          "Created JavaFX/Swing GUI with charts and visuals",
          "Implemented custom Random Forest algorithm",
          "Tuned parameters like leaf size and evaluated splits"
        ],
        myTasks: [
          "Implemented data preprocessing: joins, medians etc.",
          "Created custom box plot visualizations in JavaFX",
          "Tuned Random Forest parameters (leaf/node size)",
          "Added weighted variance to splitting function",
          "Analyzed feature importance and result impact"
        ],
        skills: [
          "Java",
          "Data Analysis",
          "Data Visualization (JavaFX)",
          "Random Forests",
          "Team Collaboration",
          "Debugging without Git 😅"
        ]
      }
    ]
  },

  pl: {
    aboutHeading: "O mnie",
    aboutText: `Cześć! Jestem Michał, student Data Science & AI, pasjonat chmury obliczeniowej,
    symulacji i nowoczesnego web developmentu. Buduję swoją karierę jako Cloud Engineer i ekspert Azure.
    Ta strona jest częścią tej drogi 🚀`,
    skillsHeading: "Umiejętności i Technologie",
    certificationsHeading: "Certyfikaty",

    projectsHeading: "Projekty",
    showMore: "Pokaż więcej",
    hide: "Ukryj",
    tasks: "Zadania zespołu:",
    myTasks: "Moje zadania:",
    skills: "Umiejętności:",
    viewOnGitHub: "Zobacz na GitHubie",

    heroTitle: "Cześć, jestem Michał i to moja strona o mnie",
    visits: "Odwiedziny",
    loadingVisits: "Ładowanie liczby odwiedzin...",
    copyEmail: "Skopiuj adres e-mail",
    emailCopied: "Skopiowano e-mail!",

    contactHeading: "Kontakt",
    contactName: "Twoje imię",
    contactEmail: "Twój email",
    contactMessage: "Twoja wiadomość",
    contactSend: "Wyślij",
    contactSuccess: "Wiadomość wysłana pomyślnie!",
    contactError: "Błąd wysyłania wiadomości.",
    contactServerError: "Błąd serwera.",



    projectsList: [
      {
        id: 1,
        title: "Symulacja Układu Słonecznego",
        shortDesc: "Symulacja 2.5D Układu Słonecznego w JavaFX z danymi z NASA.",
        fullDesc: "Symulacja przestrzenna w JavaFX z fizyką grawitacyjną, planowaniem trajektorii sondy i lądowaniem na Tytanie. Użyto algorytmów ewolucyjnych i wspinaczki górskiej do optymalizacji.",
        image: "/solar_project.jpeg",
        github: "https://github.com/MLu2005/SolarSystem",
        tasks: [
          "Symulacja ruchu oparta na grawitacji",
          "Własny algorytm genetyczny do planowania trajektorii",
          "Interfejs JavaFX + silnik fizyczny"
        ],
        myTasks: [
          "Testy JUnit modelu grawitacyjnego i solverów ODE",
          "Wykresy trajektorii ODE",
          "Wdrożenie algorytmu genetycznego",
          "Modelowanie powierzchni Tytana (Perlin noise)",
          "Symulacja sił atmosferycznych podczas lądowania"
        ],
        skills: ["Java", "JavaFX", "Modelowanie matematyczne", "Sztuczna inteligencja"]
      },
      {
        id: 2,
        title: "Ta właśnie strona",
        shortDesc: "Patrzysz na nią właśnie teraz.",
        fullDesc: "Tak, ta strona to też projekt! Zbudowana w React, wystylizowana (jeszcze) inline, wdrożona do Azure Static Web Apps z CI/CD z GitHuba. Nawet przycisk „Pobierz CV” działa. Chyba.",
        image: "/cv_project.png",
        github: "https://github.com/MLu2005/cv-website-final",
        tasks: [
          "Zbudowana w React + Vite",
          "Wdrożenie do Azure przez GitHub Actions",
          "Wojna z configiem workflowów",
          "Dokumentacja + trochę łez"
        ],
        myTasks: [
          "Cały UI w React",
          "Konfiguracja CI/CD do Azure",
          "Przycisk języka i licznik odwiedzin",
          "Debugowanie wdrożenia i workflowów"
        ],
        skills: ["React", "Azure Static Web Apps", "GitHub Actions", "CI/CD", "Mistrz Google"]
      },
      {
        id: 3,
        title: "Predykcja wyników studentów",
        shortDesc: "Pierwszy większy projekt AI na studiach.",
        fullDesc: "Pierwszy duży projekt zespołowy (7 osób) na uczelni – w czystej Javie, bez zewnętrznych bibliotek (poza JavaFX do wizualizacji). Analizowaliśmy oceny studentów, tworzyliśmy GUI, trenowaliśmy Random Forest do predykcji. Git był wtedy magią, więc dokumentacja to przygoda.",
        image: "/student_project.png",
        github: "",
        tasks: [
          "Eksploracja i czyszczenie danych studentów",
          "GUI JavaFX/Swing z wykresami",
          "Random Forest od zera",
          "Dobór parametrów (leaf size, splits)"
        ],
        myTasks: [
          "Preprocessing: joiny, mediany, itd.",
          "Wizualizacja boxplot w JavaFX",
          "Strojenie parametrów Random Forest",
          "Ważenie wariancji przy podziałach",
          "Analiza wpływu cech na wynik"
        ],
        skills: [
          "Java",
          "Analiza danych",
          "Wizualizacja (JavaFX)",
          "Random Forest",
          "Praca zespołowa",
          "Debugowanie bez Gita 😅"
        ]
      }
    ]
  }
};
