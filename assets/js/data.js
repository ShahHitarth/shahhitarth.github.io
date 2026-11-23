/* ==========================================================
   ALL YOUR CONTENT LIVES HERE.
   To add a certificate, blog, publication, project or achievement,
   copy one of the objects in the matching list, paste it, edit the text.
   Leave a list empty ( [] ) and the site shows a tidy "coming soon" card.
   ========================================================== */

window.SITE_DATA = {

  config: {
    // 1) Contact form: get a free key at https://web3forms.com (enter your email, key arrives instantly).
    //    Until you paste it, the form falls back to opening the visitor's email app.
    web3formsKey: "YOUR_ACCESS_KEY_HERE",
    contactEmail: "hitarthhitu27@gmail.com",

    // 2) Résumé: put your PDF in /assets/ and set the path, e.g. "assets/Hitarth-Shah-Resume.pdf".
    //    While this is empty the Résumé button stays hidden.
    resume: ""
  },

  /* ---------------- SKILLS ---------------- */
  skills: {
    technical: [
      { group: "Digital design & VLSI", items: ["Verilog HDL", "RTL design", "Logic synthesis", "Place & route (physical design)", "SDC constraints", "Static timing analysis", "DFT & scan chains"] },
      { group: "EDA tools", items: ["Synopsys Design Compiler", "Synopsys IC Compiler 2", "Ansys HFSS", "Linux (RHEL / WSL2)"] },
      { group: "Embedded & IoT", items: ["Embedded C", "ATmega32", "ESP32", "Arduino", "Sensor interfacing", "Serial communication", "Sinric Pro · Google Home", "MIT App Inventor"] },
      { group: "Hardware & web", items: ["Analog circuits (op-amps)", "Soldering & prototyping", "Git & GitHub", "HTML · CSS · JavaScript"] },
      { group: "Currently exploring", soft: true, items: ["OpenLane / LibreLane", "Yosys", "OpenSTA", "SkyWater 130 nm PDK"] }
    ],
    nontechnical: ["Teamwork & collaboration", "Presenting to experts", "Technical writing", "Editing & storytelling", "Videography & video editing", "Photography", "Working to deadlines", "Quick learner"],
    // Edit proficiency to match reality, and add any other languages you speak.
    languages: [
      { name: "English", level: "Professional" },
      { name: "Hindi", level: "Professional · research paper author" }
    ]
  },

  /* ---------------- ACHIEVEMENTS ---------------- */
  achievements: {
    technical: [
      { label: "NASA Space Apps Challenge 2023", title: "4th rank among all participants", text: "First hackathon. Built the Fire Safe Now interface and pitch in 48 hours." },
      { label: "SAC ISRO × GTU", title: "Selected for the NSTC nanosatellite team", text: "Chosen for the GTU × SAC ISRO Space Technology Club's nanosatellite team, working in collaboration with SAC ISRO." },
      { label: "SAC ISRO", title: "Presented the SATYA payload concept to ISRO scientists", text: "An acoustic time-of-flight approach to orbital-debris characterisation — received positive feedback from the scientists." },
      { label: "SAC ISRO Hindi Technical Seminar", title: "Research paper selected, presented and published", text: "Translated the SATYA proposal into a Hindi paper, presented it at the seminar (9–10 July) and published in the proceedings." },
      { label: "Patent", title: "Filed an Indian patent application — “Living Logic”", text: "A deterministic, distributed embedded control system built around an ATmega32 + ESP32 dual-controller architecture." },
      { label: "Academics", title: "CGPA 9.11 at VGEC", text: "Consistent top-tier performance in the B.E. Electronics & Communication programme (GTU)." }
    ],
    nontechnical: [
      { label: "Founder", title: "Ameliorate Yourself", text: "A platform of quizzes and brain games that makes learning engaging." },
      { label: "Lead editor", title: "ECE Department Newsletter", text: "Led editing of the department's official newsletter at VGEC." },
      { label: "Media team", title: "Campus Connect", text: "Produced news reels and creative reels for the campus media team." },
      { label: "Contributor", title: "Mission English", text: "Student-driven initiative to improve English fluency among peers." },
      { label: "Clubs", title: "Photography & Drama clubs", text: "Active member of both clubs." }
    ]
  },

  /* ---------------- PROJECTS ----------------
     category: "digital" | "embedded" | "rf" | "web"
     images: files in assets/img/ (first one is the card cover). Leave [] for a placeholder.
     links: [{ label, url, type: "code" | "video" | "live" | "download" }]  (leave url "" to skip)
  ------------------------------------------- */
  categories: [
    { id: "all", label: "All" },
    { id: "digital", label: "VLSI & RTL" },
    { id: "embedded", label: "Embedded & IoT" },
    { id: "rf", label: "RF & Antenna" },
    { id: "web", label: "Web" }
  ],

  projects: [
    {
      id: "living-logic",
      title: "Living Logic",
      subtitle: "Deterministic, multi-mode smart-home control",
      category: "embedded",
      badge: "Patent filed",
      images: ["pr6.webp"],
      summary: "A solar-powered smart-home prototype with manual, Bluetooth, Google Home and sensor control — built on a deterministic, distributed control architecture now covered by an Indian patent filing.",
      overview: "Developed for the Design Engineering subject in second year, Living Logic simulates a smart home on a cardboard model. An ESP32 coordinates several control paths — physical buttons, a custom Bluetooth app, cloud voice control and sensor automation — with clear priority rules so the system always behaves predictably. The underlying dual-controller (ATmega32 + ESP32) architecture is the subject of an Indian patent application.",
      highlights: [
        "Bluetooth control through an HC-05 module and a custom MIT App Inventor app",
        "4-channel relay module switching 12 LEDs; 4 manual push buttons with top priority",
        "PIR motion sensor for automatic on/off, plus a clap switch using a sound sensor",
        "Google Home voice control and scheduling through Sinric Pro",
        "Flame sensor that triggers a red LED and buzzer alert",
        "Solar panel + TP4056 charger + Li-ion cell + boost converter as the power path"
      ],
      stack: ["ESP32", "ATmega32", "HC-05", "Sinric Pro", "MIT App Inventor", "Arduino IDE", "Relays", "PIR / sound / flame sensors"],
      learned: [
        "Arbitrating several control sources with predictable priority",
        "Designing a solar-charged power path for embedded loads",
        "Integrating hardware, a mobile app and cloud voice control into one system"
      ],
      links: [
        { label: "Firmware code", url: "assets/code/living-logic-esp32.ino", type: "code" },
        { label: "Android app (APK)", url: "assets/downloads/Living-Logic.apk", type: "download" }
      ]
    },
    {
      id: "verilog-rtl",
      title: "Verilog RTL Designs — ALU & UART",
      subtitle: "Digital design portfolio",
      category: "digital",
      badge: "",
      images: [],
      summary: "Synthesizable digital building blocks written in Verilog — an ALU and a UART — documented as a clean GitHub portfolio.",
      overview: "A growing collection of RTL designs that I use to sharpen my front-end design skills alongside my physical-design internship work. Current projects are an arithmetic-logic unit and a UART; more are being added. In parallel, I'm exploring an open-source ASIC flow (Yosys, OpenSTA, OpenLane / LibreLane, SkyWater 130 nm) to complement the commercial tools I used in industry.",
      highlights: ["ALU in Verilog", "UART in Verilog", "Structured and documented for GitHub / LinkedIn", "Open-source RTL-to-GDS toolchain being explored in parallel"],
      stack: ["Verilog HDL", "RTL design", "Yosys", "OpenSTA", "OpenLane / LibreLane", "SkyWater 130 nm"],
      learned: [],
      links: [
        { label: "GitHub", url: "https://github.com/Suizaka", type: "code" }
      ]
    },
    {
      id: "fractal-antenna",
      title: "Fractal Microstrip Patch Antenna",
      subtitle: "Three-phase design study in HFSS",
      category: "rf",
      badge: "",
      images: [],
      summary: "A 2.4 GHz antenna study progressing from a rectangular patch to a Minkowski fractal patch and finally a CSRR-loaded fractal patch on FR4.",
      overview: "A structured simulation study in Ansys HFSS: start with a baseline rectangular patch, then apply Minkowski fractal geometry, and finally load the design with complementary split-ring resonators (CSRR) — each phase targeting 2.4 GHz on an FR4 substrate.",
      highlights: ["Phase 1 — rectangular patch baseline", "Phase 2 — Minkowski fractal patch", "Phase 3 — CSRR-loaded fractal patch", "Target: 2.4 GHz on FR4 substrate"],
      stack: ["Ansys HFSS", "Microstrip patch antennas", "Fractal geometry", "CSRR", "FR4"],
      learned: [],
      links: []
    },
    {
      id: "fire-safe-now",
      title: "Fire Safe Now",
      subtitle: "NASA Space Apps Challenge 2023 · 4th rank",
      category: "web",
      badge: "4th rank",
      images: ["pr2.webp", "pr21.webp"],
      summary: "A community-based fire detection and response website with live maps, built in 48 hours at NASA's Space Apps hackathon.",
      overview: "SpaceCyborgs was our team's entry to the NASA Space Apps Challenge 2023, tackling fire detection and response with machine learning, mapping and alerts. I designed and built the entire multi-page frontend and delivered the pitch deck and demo; teammates built the detection model, Firebase backend and mapping. As a first hackathon with a two-day deadline, the backend and frontend weren't fully integrated — but the team still placed 4th.",
      highlights: [
        "Custom multi-page website with section transitions — Home, Mission, Explore, Fire-Detection, About, Login (my part)",
        "ML-based fire detection from images and video, with Firebase for threat coordinates (teammates)",
        "Live mapping of threat zones with Google Maps",
        "Emergency-alert simulation driven by detection data",
        "Pitch slide deck and live demo (my part)"
      ],
      stack: ["HTML", "CSS", "JavaScript", "Firebase", "Python (ML)", "Google Maps API", "GitHub Pages"],
      learned: [
        "Building and deploying a complete multi-page site under a hard deadline",
        "Handling development, presentation and collaboration at the same time",
        "Adapting quickly under real-world pressure"
      ],
      links: [
        { label: "Live website", url: "https://suizaka.github.io/SpaceCyborgs/", type: "live" }
      ]
    },
    {
      id: "carelink",
      title: "CareLink",
      subtitle: "Health monitoring & medicine dispenser",
      category: "embedded",
      badge: "",
      images: [],
      summary: "An embedded / IoT health-monitoring system paired with an automated medicine dispenser.",
      overview: "CareLink combines patient health monitoring with an automated medicine-dispensing mechanism, built on the embedded and IoT stack I use across my hardware projects.",
      highlights: ["Health monitoring", "Automated medicine dispenser"],
      stack: ["Embedded C", "ESP32", "IoT"],
      learned: [],
      links: []
    },
    {
      id: "passcode-system",
      title: "ATmega32 Passcode System",
      subtitle: "Embedded access control in C",
      category: "embedded",
      badge: "",
      images: ["pr5.webp", "pr51.webp"],
      summary: "A keypad-and-LCD security system with LED indicators, a buzzer and a timed lock-out after three failed attempts.",
      overview: "Built for the Microprocessor & Microcontroller subject in 4th semester, this team project mimics a real access-control module: users enter a code on a 4×4 keypad, a 16×2 LCD guides them, and the system grants or denies access with LED and buzzer feedback. All logic — keypad scanning, debouncing, attempt counting and timed alerts — is written in structured, interrupt-free C.",
      highlights: [
        "4×4 matrix keypad input with debouncing",
        "16×2 LCD prompts — “Enter the Pass”, “Access Granted”, “Access Denied”",
        "Green / red LED status and buzzer alert",
        "Locks the system for 5 seconds after 3 failed attempts"
      ],
      stack: ["ATmega32", "Embedded C", "Atmel Studio", "4×4 keypad", "16×2 LCD", "LEDs & buzzer"],
      learned: [
        "Interfacing LCD, keypad, LEDs and buzzer with the ATmega32",
        "Structured embedded C and timed outputs",
        "Practical problem-solving on real hardware"
      ],
      links: [
        { label: "Source code", url: "assets/code/passcode-atmega32.c", type: "code" }
      ]
    },
    {
      id: "ultrasonic-radar",
      title: "Ultrasonic Radar",
      subtitle: "Live visualisation with Arduino + Processing",
      category: "embedded",
      badge: "",
      images: ["pr1.webp", "intro.webp"],
      summary: "A mini radar that sweeps an ultrasonic sensor on a servo and draws a live radar display on the PC.",
      overview: "A first-semester college project: an Arduino rotates a servo carrying an HC-SR04 ultrasonic sensor, sends angle and distance over serial, and a Processing sketch renders a real-time radar interface.",
      highlights: ["Live object detection up to 40 cm", "Servo sweep from 15° to 165°", "Real-time radar-style UI in Processing", "Smooth Arduino-to-PC serial communication"],
      stack: ["Arduino UNO", "HC-SR04", "SG90 servo", "Processing IDE", "Serial communication"],
      learned: [
        "Ultrasonic distance measurement and servo control",
        "Serial protocol design and real-time visualisation",
        "Debugging synchronisation issues between Arduino and Processing"
      ],
      links: [
        { label: "Demo video", url: "https://youtu.be/SvLObGL-5ZY", type: "video" },
        { label: "Arduino code", url: "assets/code/radar-arduino.ino", type: "code" },
        { label: "Processing code", url: "assets/code/radar-processing.pde", type: "code" }
      ]
    },
    {
      id: "opamp-kit",
      title: "Op-Amp Integrator & Differentiator Kit",
      subtitle: "Hand-built analog test kit",
      category: "embedded",
      badge: "",
      images: ["pr4.webp", "pr43.webp"],
      summary: "A dual-function analog kit built on zero PCB with custom BNC and banana connectors, housed in a wooden box.",
      overview: "An academic electronics project demonstrating integration and differentiation with the 741 op-amp. Everything was made by hand — the circuit soldered on zero PCB, the wooden enclosure, labelled panel connectors, and custom BNC-to-BNC and banana-to-banana cables — so it can be used safely and quickly in the lab.",
      highlights: [
        "Integrator: square wave → triangle wave",
        "Differentiator: square wave → sharp spikes",
        "±12 V supply via banana jacks; signals in and out via BNC to a function generator and CRO",
        "Fully hand-soldered, labelled and tested"
      ],
      stack: ["IC 741 ×2", "Zero PCB", "BNC & banana connectors", "Function generator", "CRO"],
      learned: [
        "Implementing analog functions on real hardware",
        "Building reusable, safe lab test equipment",
        "Debugging real-world electronics assembly"
      ],
      links: [
        { label: "Integrator demo", url: "https://youtu.be/1B4O5gy6A6U", type: "video" },
        { label: "Differentiator demo", url: "https://youtu.be/yI0MYJCKlwk", type: "video" }
      ]
    },
    {
      id: "obstacle-alert",
      title: "Obstacle Alert System",
      subtitle: "Ultrasonic proximity warning",
      category: "embedded",
      badge: "",
      images: ["pr3.webp", "pr32.webp"],
      summary: "An Arduino ultrasonic sensor that triggers a buzzer and LED when an object comes too close.",
      overview: "A first-semester project demonstrating proximity alerts: an HC-SR04 measures distance continuously, and if an object comes inside the unsafe range the Arduino sounds a buzzer and lights an LED.",
      highlights: ["Real-time distance measurement", "Buzzer and LED warning inside ~5 cm", "Low power, simple to assemble"],
      stack: ["Arduino UNO", "HC-SR04", "Buzzer", "LED", "Breadboard"],
      learned: [
        "Ultrasonic sensing and the pulseIn() timing function",
        "Calibrating safe-distance thresholds",
        "Turning real-world input into useful output"
      ],
      links: [
        { label: "Demo video", url: "https://youtu.be/pB49idXdPfY", type: "video" },
        { label: "Arduino code", url: "assets/code/obstacle-alert.ino", type: "code" }
      ]
    }
  ],

  /* ---------------- CERTIFICATIONS ----------------
     Add yours like this (copy the block, one per certificate):
     { title: "Certificate name", issuer: "Coursera / NPTEL / …", date: "Mar 2026", description: "One line on what it covers.", url: "https://link-to-certificate" }
  ------------------------------------------------- */
  certifications: [],

  /* ---------------- PUBLICATIONS & PATENTS ---------------- */
  publications: [
    {
      type: "Research paper · Hindi",
      // TODO: replace the title below with the exact title of your paper.
      title: "SATYA: Orbital Debris Characterisation using Acoustic Time-of-Flight",
      venue: "SAC ISRO Hindi Technical Seminar · 9–10 July · Published in the seminar proceedings",
      authors: "Hitarth Shah, Prof. Gautam D. Makwana",
      url: ""
    },
    {
      type: "Patent · India",
      title: "Living Logic — a deterministic distributed embedded control system",
      venue: "Indian patent application · Filed · ATmega32 + ESP32 dual-controller architecture",
      authors: "",
      url: ""
    },
    {
      type: "Editorial",
      title: "ECE Department Newsletter (July–December 2025)",
      venue: "Vishwakarma Government Engineering College · Lead editor",
      authors: "",
      url: ""
    }
  ],

  /* ---------------- BLOGS ----------------
     { title: "Post title", date: "Nov 2026", summary: "Two lines about the post.", tag: "VLSI", url: "https://link-to-post" }
  ---------------------------------------- */
  blogs: []
};
