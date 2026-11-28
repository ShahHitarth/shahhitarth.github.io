/* ==========================================================
   ALL YOUR CONTENT LIVES HERE.
   To add a certificate, blog, publication, project or achievement,
   copy one of the objects in the matching list, paste it, edit the text.
   Leave a list empty ( [] ) and the site shows a tidy "coming soon" card.
   ========================================================== */

window.SITE_DATA = {

  config: {
    // Contact form (Web3Forms). The access key is meant to be public; it can only send mail to your inbox.
    web3formsKey: "79602669-37a0-47cf-8ee4-d3a35ee1a595",
    contactEmail: "hitarths27@gmail.com",
    // Résumé PDF (button appears in the hero when this is set)
    resume: "assets/Hitarth-Shah-Resume.pdf"
  },

  /* ---------------- CURRENT FOCUS (About section) ---------------- */
  focus: [
    "Open-source RTL-to-GDS flow: Yosys · OpenLane · SkyWater 130 nm",
    "Building a Verilog RTL project portfolio",
    "Embedded & IoT systems"
  ],

  /* ---------------- SKILLS ----------------
     items can be plain text, or { name, note } to show a small caption. */
  skills: {
    technical: [
      { group: "Digital design & VLSI", items: ["Verilog HDL", "RTL design", "Logic synthesis", "Waveform analysis"] },
      { group: "EDA tools", items: [
        { name: "EasyEDA", note: "schematics & PCB layout" },
        { name: "Ansys HFSS", note: "basics · antenna simulation" },
        { name: "EDA Playground", note: "online HDL simulation" }
      ] },
      { group: "Embedded & IoT", items: ["Embedded C", "ATmega32", "ESP32", "Arduino", "Sensor interfacing", "Serial communication", "Sinric Pro · Google Home", "MIT App Inventor"] },
      { group: "Hardware & web", items: ["Analog circuits (op-amps)", "Soldering & prototyping", "HTML · CSS"] },
      { group: "Currently exploring", soft: true, items: ["OpenLane / LibreLane", "Yosys", "OpenSTA", "SkyWater 130 nm PDK"] }
    ],
    nontechnical: ["Teamwork & Collaboration", "Technical Communication", "Presentation & Public Speaking", "Technical Writing", "Creative Problem Solving", "Project Coordination"],
    creative: ["Photography", "Videography & video editing", "Reels & short-form content", "Acting & stage performance", "Script writing"],
    languages: [
      { name: "English", level: "Listen · understand · speak · write" },
      { name: "Hindi", level: "Understand · speak · basic writing" },
      { name: "Gujarati", level: "Mother tongue · understand · speak · some writing" }
    ]
  },

  /* ---------------- ACHIEVEMENTS (oldest first) ---------------- */
  achievements: {
    technical: [
      { label: "Oct 2023 · NASA International Space Apps Challenge", title: "Secured 4th rank with “Fire Safe Now”", text: "My first hackathon. Designed and built the multi-page website, pitch deck and live demo for a community-based fire detection and response system, in 48 hours." },
      { label: "Sep 2025 · Smart India Hackathon", title: "Took part in the VGEC internal round", text: "Participated in the college's internal hackathon for Smart India Hackathon 2025." },
      { label: "Oct 2025 · IEEE CASS SBC, CHARUSAT", title: "Cleared all rounds of iChip 3.0 — Code2Chip FPGA Innovation Hackathon", text: "An FPGA-focused innovation hackathon held as part of CASS Convergence 2025." },
      { label: "2026 · GTU × SAC ISRO", title: "Presented SATYA to ISRO scientists; selected for the Nano-Satellite Technical Club (Payload Design)", text: "Joined the GTU × ISRO nanosatellite-making workshop and presented SATYA, an in-situ orbital-debris characterisation payload concept, which the ISRO scientists appreciated. Afterwards I was selected for the club's Payload Design section." },
      { label: "Jul 2026 · GTU × eInfochips", title: "Completed the “RTL to GDS-II” industry internship", text: "Two weeks at the GTU Centre of Excellence in Semiconductor Chip Design with eInfochips, covering the full path from digital design to silicon." },
      { label: "Jul 2026 · Indian Patent Office", title: "Patent application filed and published: “Living Logic”", text: "Documented my Design Engineering project as a patent application for a deterministic distributed control system (No. 202621081255 A). Filed 1 July, published 21 August 2026." },
      { label: "Jul 2026 · SAC ISRO Hindi Technical Seminar", title: "SATYA paper: 2nd best paper of the room, and published", text: "Turned the SATYA concept into a Hindi research paper, presented it at the seminar and was named 2nd best paper of the room. It is published in the seminar proceedings." },
      { label: "2026 · Design Office, India", title: "Antenna design officially registered for 10 years", text: "My Antenna & Wave Propagation project impressed our faculty, and together with my partner we filed a design application for it. The design is now registered and the Certificate of Design has been generated, valid for 10 years." }
    ],
    nontechnical: [
      { label: "Since first year · Boson Institute for Physics", title: "Physics tutor", text: "Teaching physics at a tuition institute alongside my degree." },
      { label: "VGEC clubs", title: "Coordinator of the Advanature and Drama clubs", text: "Also a very active member of the Photography Club, where I coordinated a Photo Walk and a photography workshop." },
      { label: "Advanature Club", title: "Won Meghdhanush twice", text: "Won the drawing competition as a first-year student, and again in second year while also serving as its coordinator." },
      { label: "Drama Club · 2024", title: "National-level one-act competition and campus productions", text: "Performed at the 1st Sanjeev Kumar Open One Act Competition in Surat. On campus I acted in, and helped write, a street play (Nukkad Natak) for the Voter Awareness Program, and took part in the Teacher's Day drama and a skit competition." },
      { label: "Mission English", title: "Participant, then lecturer", text: "Joined the student-driven English-fluency initiative and later took sessions for my peers." },
      { label: "Campus Connect · Media Team", title: "Made news reels", text: "For a month or two, produced reels on the latest technical and non-technical news." },
      { label: "ECE Department", title: "Newsletter coordinator", text: "Coordinated and produced three editions of the department newsletter, published on the college website." }
    ]
  },

  /* ---------------- PROJECTS ----------------
     category: "digital" | "embedded" | "rf" | "web"
     images: files in assets/img/ (first one is the card cover). Leave [] for a placeholder.
     videos: [{ label, id }]  — YouTube video IDs (unlisted is fine), shown inside the project pop-up.
     links: [{ label, url, type: "code" | "video" | "live" | "download" }]
     hidden: true  — keeps a project in this file but off the site. Set to false (or delete the line) to show it.
  ------------------------------------------- */
  categories: [
    { id: "all", label: "All" },
    { id: "digital", label: "VLSI & RTL", soon: "RTL and digital-design projects are in progress and will be added here soon." },
    { id: "embedded", label: "Embedded & IoT" },
    { id: "rf", label: "RF & Antenna", soon: "Antenna and RF projects are in progress and will be added here soon." },
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
      videos: [{ label: "Demo", id: "hASzJ1ynFu0" }],
      summary: "A solar-powered smart-home prototype with manual, Bluetooth, Google Home and sensor control, built on a deterministic control architecture covered by an Indian patent application.",
      overview: "Developed for the Design Engineering subject in second year, Living Logic simulates a smart home on a cardboard model. An ESP32 coordinates several control paths (physical buttons, a custom Bluetooth app, cloud voice control and sensor automation) with clear priority rules so the system always behaves predictably. The underlying executor-and-supervisor control architecture is the subject of an Indian patent application.",
      highlights: [
        "Bluetooth control through an HC-05 module and a custom MIT App Inventor app",
        "4-channel relay module switching 12 LEDs; 4 manual push buttons with top priority",
        "PIR motion sensor for automatic on/off, plus a clap switch using a sound sensor",
        "Google Home voice control and scheduling through Sinric Pro",
        "Flame sensor that triggers a red LED and buzzer alert",
        "Solar panel + TP4056 charger + Li-ion cell + boost converter as the power path"
      ],
      stack: ["ESP32", "HC-05", "Sinric Pro", "MIT App Inventor", "Arduino IDE", "Relays", "PIR / sound / flame sensors"],
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
      id: "fire-safe-now",
      title: "Fire Safe Now",
      subtitle: "NASA Space Apps Challenge 2023 · 4th rank",
      category: "web",
      badge: "4th rank",
      images: ["pr2.webp", "pr21.webp"],
      videos: [{ label: "Demo", id: "LAzZS_ViuHc" }],
      summary: "A community-based fire detection and response website with live maps, built in 48 hours at NASA's Space Apps hackathon.",
      overview: "SpaceCyborgs was our team's entry to the NASA Space Apps Challenge 2023, tackling fire detection and response with machine learning, mapping and alerts. I designed and built the entire multi-page frontend and delivered the pitch deck and demo; teammates built the detection model, Firebase backend and mapping. As a first hackathon with a two-day deadline, the backend and frontend weren't fully integrated, but the team still placed 4th.",
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
        { label: "Live website", url: "https://shahhitarth.github.io/SpaceCyborgs/", type: "live" }
      ]
    },
    {
      id: "passcode-system",
      title: "ATmega32 Passcode System",
      subtitle: "Embedded access control in C, on a bare IC",
      category: "embedded",
      badge: "Bare-IC build",
      images: ["pr5.webp", "pr51.webp"],
      videos: [{ label: "Demo", id: "N0Fmha79CGY" }],
      summary: "A keypad-and-LCD security system built around a bare ATmega32 IC, with LED indicators, a buzzer and a timed lock-out after three failed attempts.",
      overview: "Built for the Microprocessor & Microcontroller subject in 4th semester, this team project mimics a real access-control module. The whole system is built on a bare ATmega32 IC, with no Arduino or ready-made microcontroller board. Users enter a code on a 4×4 keypad, a 16×2 LCD guides them, and the system grants or denies access with LED and buzzer feedback. All logic (keypad scanning, debouncing, attempt counting and timed alerts) is written in structured, interrupt-free C.",
      highlights: [
        "Built on a bare ATmega32 IC rather than a development board",
        "4×4 matrix keypad input with debouncing",
        "16×2 LCD prompts — “Enter the Pass”, “Access Granted”, “Access Denied”",
        "Green / red LED status and buzzer alert",
        "Locks the system for 5 seconds after 3 failed attempts"
      ],
      stack: ["ATmega32 (bare IC)", "Embedded C", "Atmel Studio", "4×4 keypad", "16×2 LCD", "LEDs & buzzer"],
      learned: [
        "Wiring and programming a microcontroller IC from scratch, without a dev board",
        "Interfacing LCD, keypad, LEDs and buzzer with the ATmega32",
        "Structured embedded C and timed outputs"
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
      videos: [{ label: "Demo", id: "oiQjUIo2ZLU" }],
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
      videos: [{ label: "Differentiator", id: "TFoOkbEmfRE" }, { label: "Integrator", id: "k5pC7aVL6HE" }],
      summary: "A dual-function analog kit built on zero PCB with custom BNC and banana connectors, housed in a wooden box.",
      overview: "An academic electronics project demonstrating integration and differentiation with the 741 op-amp. Everything was made by hand: the circuit soldered on zero PCB, the wooden enclosure, labelled panel connectors, and custom BNC-to-BNC and banana-to-banana cables, so it can be used safely and quickly in the lab.",
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
      links: []
    },
    {
      id: "obstacle-alert",
      title: "Obstacle Alert System",
      subtitle: "Ultrasonic proximity warning",
      category: "embedded",
      badge: "",
      images: ["pr3.webp", "pr32.webp"],
      videos: [{ label: "Demo", id: "PX0wAxANSOw" }],
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
        { label: "Arduino code", url: "assets/code/obstacle-alert.ino", type: "code" }
      ]
    },

    /* ---- Hidden for now: set hidden to false when the details are ready ---- */
    {
      id: "verilog-rtl",
      hidden: true,
      title: "Verilog RTL Designs — ALU & UART",
      subtitle: "Digital design portfolio",
      category: "digital",
      badge: "",
      images: [],
      summary: "Synthesizable digital building blocks written in Verilog — an ALU and a UART.",
      overview: "A growing collection of RTL designs. Current projects are an arithmetic-logic unit and a UART; more are being added.",
      highlights: ["ALU in Verilog", "UART in Verilog"],
      stack: ["Verilog HDL", "RTL design"],
      learned: [],
      links: []
    },
    {
      id: "fractal-antenna",
      title: "Fractal Microstrip Patch Antenna",
      subtitle: "Three-phase design study in HFSS",
      category: "rf",
      badge: "Registered design",
      images: ["antenna-design-status.webp"],
      summary: "A 2.4 GHz antenna study progressing from a rectangular patch to a Minkowski fractal patch and finally a CSRR-loaded fractal patch on FR4.",
      overview: "A structured simulation study in Ansys HFSS: start with a baseline rectangular patch, then apply Minkowski fractal geometry, and finally load the design with complementary split-ring resonators (CSRR), each phase targeting 2.4 GHz on an FR4 substrate.",
      highlights: ["Phase 1 — rectangular patch baseline", "Phase 2 — Minkowski fractal patch", "Phase 3 — CSRR-loaded fractal patch", "Target: 2.4 GHz on FR4 substrate"],
      stack: ["Ansys HFSS", "Microstrip patch antennas", "Fractal geometry", "CSRR", "FR4"],
      learned: [],
      links: []
    },
    {
      id: "carelink",
      title: "CareLink — A Smart Patient Support System",
      subtitle: "Patient monitoring and automated medicine assistance",
      category: "embedded",
      badge: "",
      images: ["carelink-box.webp", "carelink-pcb.webp"],
      videos: [],   // e.g. [{ label: "Demo", id: "YOUTUBE_ID" }]
      summary: "An ESP32-based patient support system combining vital-sign monitoring, emergency assistance, and scheduled medicine dispensing.",
      overview: "CareLink integrates a MAX30102 sensor for pulse-rate and SpO₂ monitoring, an OLED display for real-time readings, and an automated medicine dispenser controlled through scheduled reminders. The dispenser uses a servo mechanism and IR sensors to detect medicine collection, while audio prompts provide reminders and feedback. An SOS button adds an emergency-assistance feature.",
      highlights: [
        "Real-time pulse-rate and SpO₂ monitoring",
        "Scheduled medicine dispensing",
        "IR-based medicine collection detection",
        "Audio reminders and status feedback",
        "SOS emergency assistance",
        "Bluetooth-based communication"
      ],
      highlightsTitle: "Highlights",
      stack: ["ESP32", "Embedded C", "MAX30102", "OLED", "DS3231 RTC", "Servo Motor", "IR Sensors", "DFPlayer Mini", "Bluetooth"],
      learned: [],
      links: []     // e.g. [{ label: "GitHub", url: "https://github.com/ShahHitarth/CareLink", type: "code" }]
    },
    {
      id: "bus-port-management",
      title: "Bus Port Management System",
      subtitle: "AI/ML-Enabled IoT Smart Bus Management and Predictive Transportation",
      category: "embedded",
      badge: "",
      images: ["busport-bus-unit.webp", "busport-dashboard-map.webp", "busport-dashboard-log.webp"],
      videos: [],   // e.g. [{ label: "Demo", id: "YOUTUBE_ID" }]
      summary: "An integrated smart transportation system combining IoT-based bus monitoring, machine-learning predictions, automated platform allocation and passenger information management.",
      overview: "The system consists of two interconnected units: a bus-side monitoring unit and a bus-port management controller.\n\nThe bus-side ESP32 collects telemetry using two IR sensors for bidirectional passenger counting, a NEO-6M GPS module for live location tracking, an MPU6050 for driving-condition monitoring, a DS1307 RTC for time information and an RFID card for unique bus identification. The two IR sensors determine passenger entry and exit based on their triggering sequence. The collected telemetry is transmitted wirelessly to an ESP32-S3-based M5Stack AtomS3 controller at the bus port.\n\nAt the bus port, the AtomS3 uses an RFID reader to identify arriving buses and checks platform availability to automatically assign an empty station. An OLED provides local information, while an HC-05 Bluetooth module connects to a custom MIT App Inventor application for passenger announcements.\n\nA web-based dashboard integrates the system by displaying live bus locations on a map, speed, passenger count, multiple telemetry graphs and machine-learning predictions. It also supports manual passenger announcements and manual input-based execution of both ML models.",
      highlights: [
        "Live GPS-based bus tracking and telemetry monitoring",
        "Bidirectional passenger counting using dual IR sensors",
        "Driver-condition monitoring using MPU6050 acceleration features",
        "RFID-based bus identification and arrival detection",
        "Automatic allocation of available bus platforms",
        "Wireless communication between bus-side and bus-port controllers",
        "OLED-based local information display",
        "Bluetooth passenger announcements through a custom mobile application",
        "Live dashboard with map, speed, passenger count and parameter graphs",
        "Travel-time prediction and driver-behaviour classification",
        "Manual input and computation interface for both ML models",
        "Manual passenger announcements through the dashboard"
      ],
      highlightsTitle: "Key features",
      sections: [
        { title: "Machine learning", items: [
          "Driver-behaviour classification using engineered MPU6050 acceleration features, including three-axis acceleration measurements, mean and standard deviation",
          "Reported driver-behaviour model test accuracy: 80.12%",
          "Travel-time prediction model developed using transportation-related data"
        ] }
      ],
      stack: ["ESP32", "ESP32-S3", "M5Stack AtomS3", "NEO-6M GPS", "MPU6050", "DS1307 RTC", "IR Sensors", "RFID", "HC-05 Bluetooth", "OLED", "Embedded C", "MIT App Inventor", "Python", "Machine Learning", "Backend Development", "Web Dashboard"],
      learned: [],
      links: []     // e.g. [{ label: "GitHub", url: "https://github.com/ShahHitarth/Bus-Port-Management", type: "code" }]
    }
  ],

  /* ---------------- CERTIFICATIONS ----------------
     group: "tech" | "beyond"      image: file in assets/certs/
  ------------------------------------------------- */
  certGroups: [
    { id: "all", label: "All" },
    { id: "tech", label: "Technical" },
    { id: "beyond", label: "Beyond the lab" }
  ],

  /* featured: true  -> shown up front.  Others sit behind the "More certificates" button. */
  certifications: [
    { featured: true, group: "tech", title: "RTL to GDS-II: From Digital Design to Silicon Chip", issuer: "GTU × eInfochips", date: "Jul 2026", description: "Two-week industry-based summer internship.", image: "internship-gtu-einfochips.webp" },
    { featured: true, group: "tech", title: "VLSI Design Flow: RTL to GDS", issuer: "NPTEL · IIIT Delhi", date: "Jul–Oct 2026", description: "12-week Elite course, 75% consolidated score.", image: "nptel-vlsi-rtl-to-gds.webp" },
    { featured: true, group: "tech", title: "Hindi Technical Seminar 2026", issuer: "Space Applications Centre, ISRO", date: "Jul 2026", description: "Presented the SATYA research paper.", image: "isro-hindi-seminar.webp" },
    { featured: true, group: "tech", title: "VLSI for Beginners", issuer: "NIELIT Calicut (MeitY)", date: "Feb 2026", description: "CMOS technology and digital IC design fundamentals.", image: "nielit-vlsi-beginners.webp" },
    { featured: true, group: "tech", title: "Workshop on Semiconductor Design & Applications", issuer: "GUJCOST × Indus University", date: "Jan 2026", description: "Two-day national workshop.", image: "gujcost-semiconductor.webp" },
    { featured: true, group: "tech", title: "VLSI System-on-Chip Design — Overview", issuer: "Maven Silicon", date: "Jan 2026", description: "RTL design, CMOS fundamentals and SoC concepts.", image: "maven-silicon-soc.webp" },
    { featured: true, group: "tech", title: "iChip 3.0 — Code2Chip FPGA Innovation Hackathon", issuer: "IEEE CASS SBC · CHARUSAT", date: "Oct 2025", description: "Secured all rounds.", image: "ichip-3-hackathon.webp" },
    { featured: true, group: "tech", title: "Smart India Hackathon 2025 — Internal Round", issuer: "Vishwakarma Government Engineering College", date: "Sep 2025", description: "Certificate of appreciation.", image: "sih-internal-2025.webp" },
    { featured: true, group: "tech", title: "Patent Your Innovation — Awareness Workshop", issuer: "VGEC E-Cell × Institution's Innovation Council", date: "Jul 2025", description: "Workshop on protecting engineering innovations.", image: "patent-awareness-ecell.webp" },
    { featured: true, group: "tech", title: "Galactic Problem Solver", issuer: "NASA International Space Apps Challenge", date: "Oct 2023", description: "Recognition for solving challenges on Earth and in space.", image: "nasa-space-apps-2023.webp" },
    { featured: true, group: "beyond", title: "Brief Introduction to Psychology", issuer: "NPTEL · IIT Kanpur", date: "Jul–Aug 2026", description: "4-week Elite course, 75% consolidated score.", image: "nptel-psychology.webp" },
    { featured: true, group: "beyond", title: "Videography Course", issuer: "Paraatpar Institute of Media Studies", date: "", description: "Completed with a skill assessment.", image: "videography-workshop.webp" },
    { featured: true, group: "beyond", title: "1st Sanjeev Kumar Open One Act Competition", issuer: "Sanjeev Kumar Foundation · SBV, Surat", date: "May–Jun 2024", description: "National-level drama competition.", image: "sanjeev-kumar-one-act.webp" },
    { featured: true, group: "beyond", title: "Voter Awareness Street Play", issuer: "VGEC Drama Team", date: "Apr 2024", description: "Lok Sabha Election 2024 awareness.", image: "voter-awareness-street-play.webp" },

    /* ---- More certificates ---- */
    { group: "tech", title: "VLSI Interconnects", issuer: "NPTEL · IIT Kharagpur", date: "Jul–Sep 2026", description: "8-week course, 3 credits recommended.", image: "nptel-vlsi-interconnects.webp" },
    { group: "beyond", title: "Media Team Appreciation", issuer: "VGEC Media Cell · Campus Connect", date: "Jan 2026", description: "Reels and technical content, 2024–25.", image: "media-team-appreciation.webp" },
    { group: "beyond", title: "Mission English", issuer: "Vishwakarma Government Engineering College", date: "Jul–Oct 2024", description: "Outstanding contribution and performance.", image: "mission-english.webp" },
    { group: "beyond", title: "Skit Competition", issuer: "VGEC Drama Team", date: "Sep 2024", description: "Participation in the college skit competition.", image: "skit-competition.webp" },
    { group: "beyond", title: "Teacher's Day Drama", issuer: "VGEC Drama Team", date: "Sep 2024", description: "A dramatic tribute to the teachers.", image: "teachers-day-drama.webp" },
    { group: "beyond", title: "Nature's Canvas Workshop", issuer: "Skyblue Stationery Mart", date: "Jun 2024", description: "Outstanding performance in the drawing workshop.", image: "natures-canvas-workshop.webp" },
    { group: "beyond", title: "Mobile Photography Workshop", issuer: "VGEC, Chandkheda", date: "Mar 2024", description: "Hands-on workshop on photography with a phone.", image: "mobile-photography-workshop.webp" },
    { group: "beyond", title: "World Earth Day Quiz", issuer: "Indian Biodiversity Conservation Society", date: "Apr 2024", description: "Online quiz on World Earth Day.", image: "world-earth-day-quiz.webp" },
    { group: "beyond", title: "Heritage Quiz", issuer: "MyGov · Archaeological Survey of India", date: "", description: "Certificate of participation.", image: "heritage-quiz.webp" },
    { group: "beyond", title: "Quiz on India's Democracy", issuer: "MyGov · Government of India", date: "", description: "Certificate of appreciation.", image: "india-democracy-quiz.webp" },
    { group: "beyond", title: "Pariksha Pe Charcha 2024 Quiz", issuer: "Ministry of Education · MyGov", date: "2024", description: "Certificate of participation.", image: "pariksha-pe-charcha-quiz.webp" },
    { group: "beyond", title: "Sardar Unity Trinity Quiz", issuer: "MyGov", date: "", description: "Swabhimani Bharat quiz.", image: "sardar-unity-quiz.webp" }
  ],

  /* ---------------- PUBLICATIONS & PATENTS ----------------
     images: files in assets/docs/ (first is the thumbnail; all open in the viewer)
  ---------------------------------------------------------- */
  publications: [
    {
      kind: "paper",
      type: "Research paper · Hindi",
      title: "SATYA: Active Payload based on Time-of-Flight and Dual-Parameter Analysis for In-Situ Characterisation of Orbital Micro-Debris",
      native: "सत्या (SATYA): कक्षीय सूक्ष्म-मलबे के इन-सिटू लक्षण वर्णन हेतु टाइम-ऑफ-फ्लाइट एवं ड्युअल-पैरामीटर विश्लेषण आधारित सक्रिय नीतभार",
      venue: "Hindi Technical Seminar 2026, Space Applications Centre (SAC), ISRO, Ahmedabad · 9–10 July 2026 · Proceedings, p. 303 · ISBN 978-93-82760-58-0",
      authors: "Hitarth Shah, Prof. Gautam D. Makwana",
      badge: "2nd best paper of the room",
      images: ["satya-paper-1.webp", "satya-paper-2.webp", "satya-cover.webp"],
      links: [{ label: "Read the paper (PDF)", url: "assets/docs/SATYA-paper.pdf" }]
    },
    {
      kind: "patent",
      type: "Patent application · India",
      title: "Living Logic: A Deterministic Distributed Control System for Smart Automation",
      venue: "Application No. 202621081255 A · Filed 1 July 2026 · Published 21 August 2026",
      authors: "Shahid S. Modasiya, Hitarth D. Shah, Mahi A. Thakor, Riddhi H. Patel",
      badge: "Published",
      images: ["living-logic-patent.webp"],
      links: [{ label: "Publication (PDF)", url: "assets/docs/Living-Logic-patent.pdf" }]
    },
    {
      kind: "patent",
      type: "Registered design · India",
      // TODO: replace with the exact title of the design as filed.
      title: "Fractal Microstrip Patch Antenna — Design",
      venue: "Design Application No. 515851-001 · Application accepted, Certificate of Design generated · Registered for 10 years · Office of the Controller General of Patents, Designs & Trade Marks",
      authors: "Dr. Balvant J. Makwana, Dr. Shahid S. Modasiya, Khushi Dipesh Shah, Hitarth Shah",
      badge: "Registered · 10 years",
      images: ["antenna-design-status.webp"],
      links: []
    }
  ],

  /* ---------------- BLOGS ----------------
     { title: "Post title", date: "Nov 2026", summary: "Two lines about the post.", tag: "VLSI", url: "https://link-to-post" }
  ---------------------------------------- */
  blogs: []
};
