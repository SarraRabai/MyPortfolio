import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      nav: {
        about: "About",
        experience: "Experience",
        projects: "Projects",
        skills: "Skills",
        education: "Education",
        contact: "Contact",
        resume: "Resume"
      },
      hero: {
        greeting: "Hello, I'm",
        title: "Full Stack Developer & AI Engineer",
        subtitle: "Specializing in JavaScript, React, Node.js, and AI-driven web & mobile solutions.",
        contactBtn: "Get in Touch",
        downloadResume: "Download CV"
      },
      about: {
        title: "About Me",
        description: "Full Stack Developer with over 2 years of experience specializing in JavaScript, React, and Node.js. Passionate about building modern, scalable web applications with exceptional user experiences. Strong interest in AI and its application within software development—having built computer vision pipelines (YOLOv8, Detectron2) and integrated AI into full-stack platforms.",
        location: "Tunis, Tunisia",
        phone: "+216 29 197 606",
        email: "sarrarabai87@gmail.com"
      },
      experience: {
        title: "Professional Experience",
        roles: [
          {
            company: "KidCare",
            role: "Full Stack Freelance Developer (Remote)",
            period: "02/2026 – 07/2026",
            points: [
              "Designed and built a parental control mobile application with React Native and Node.js, focusing on intuitive UX and real-time functionality.",
              "Integrated backend APIs using Fastify with TypeScript, ensuring high-performance data handling.",
              "Containerized the application with Docker for streamlined development and deployment."
            ]
          },
          {
            company: "Nexaura Technologies",
            role: "Full Stack Developer (Remote - Canada)",
            period: "07/2025 – 01/2026",
            points: [
              "Developed responsive web and mobile applications with React, delivering seamless user experiences across devices.",
              "Designed and built modular APIs using Node.js and NestJS, with PostgreSQL for efficient data persistence.",
              "Optimized frontend performance with lazy loading and code splitting, achieving a 35% reduction in bundle size.",
              "Collaborated with cross-functional teams in an Agile environment, ensuring timely delivery of high-quality features."
            ]
          },
          {
            company: "Assurances CTAMA",
            role: "AI & Full Stack Developer Intern",
            period: "01/2025 – 06/2025",
            points: [
              "Architected a full-stack accident declaration platform (MERN stack) with real-time chat, delivering an intuitive user experience for insurance claims.",
              "Developed REST APIs and responsive React interfaces, ensuring smooth data flow and accessibility.",
              "Built a computer vision fraud detection pipeline using YOLOv8 and Detectron2—integrating AI directly into a customer-facing platform."
            ]
          },
          {
            company: "iMaxeam",
            role: "Full Stack Developer Intern",
            period: "06/2024 – 08/2024",
            points: [
              "Created a marketplace mobile application with React Native and JWT authentication, delivering a polished, user-friendly interface.",
              "Built REST APIs with Node.js and Express.js, and integrated SQL (MySQL) databases for scalable data management."
            ]
          },
          {
            company: "EPI Digital School",
            role: "Full Stack Developer Intern",
            period: "02/2024 – 05/2024",
            points: [
              "Created Business Management Application with React and GraphQL for efficient data fetching.",
              "Implemented GraphQL schema with resolvers and Apollo Client for state management.",
              "Deployed on AWS using serverless technologies."
            ]
          }
        ]
      },
      projects: {
        title: "Featured Projects",
        list: [
          {
            name: "Sales & Transport Analytics Dashboard",
            period: "11/2024 – 01/2025",
            description: "Designed Power BI dashboards with ETL pipelines, SQL analytics, and DAX measures for data-driven business reporting.",
            tech: ["Power BI", "SQL", "ETL", "DAX", "Data Analytics"]
          },
          {
            name: "AI Accident Declaration & Fraud Detection Platform",
            period: "01/2025 – 06/2025",
            description: "Full-stack MERN insurance claim platform featuring real-time chat and an automated computer vision pipeline (YOLOv8 & Detectron2).",
            tech: ["React", "Node.js", "MongoDB", "Python", "YOLOv8", "Detectron2"]
          },
          {
            name: "KidCare Parental Control Mobile App",
            period: "02/2026 – 07/2026",
            description: "Cross-platform mobile app with real-time monitoring, Fastify TypeScript backend, and Docker containerization.",
            tech: ["React Native", "Node.js", "Fastify", "TypeScript", "Docker"]
          }
        ]
      },
      skills: {
        title: "Technical Skills",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          database: "Database",
          ai: "AI & ML",
          devops: "Cloud & DevOps",
          methods: "Methodologies"
        }
      },
      education: {
        title: "Education & Awards",
        degrees: [
          {
            school: "EPI School - International Higher Private Polytechnic School of Sousse",
            degree: "Engineering Degree in Software Engineering",
            period: "2022 – 2025"
          },
          {
            school: "ISET Mahdia - Higher Institute of Technological Studies of Mahdia",
            degree: "Bachelor's Degree in Automation and Industrial Computing",
            period: "2019 – 2022"
          }
        ],
        awardTitle: "Awards & Recognitions",
        awards: [
          "Financially recognized by Assurances CTAMA for outstanding delivery of an AI-based fraud detection and accident reporting system."
        ],
        languagesTitle: "Languages",
        languages: "Arabic (Native) • English (Fluent - Professional) • French (Fluent) • German (Intermediate)"
      },
      contact: {
        title: "Get In Touch",
        subtitle: "Have a project in mind or want to collaborate? Feel free to reach out!",
        name: "Your Name",
        email: "Your Email",
        message: "Your Message",
        send: "Send Message",
        success: "Thank you! Your message has been sent successfully."
      }
    }
  },
  fr: {
    translation: {
      nav: {
        about: "À propos",
        experience: "Expérience",
        projects: "Projets",
        skills: "Compétences",
        education: "Formation",
        contact: "Contact",
        resume: "CV"
      },
      hero: {
        greeting: "Bonjour, je suis",
        title: "Développeuse Full Stack & Ingénieure IA",
        subtitle: "Spécialisée en JavaScript, React, Node.js et solutions web & mobiles alimentées par l'IA.",
        contactBtn: "Me contacter",
        downloadResume: "Télécharger CV"
      },
      about: {
        title: "À propos de moi",
        description: "Développeuse Full Stack avec plus de 2 ans d'expérience spécialisée en JavaScript, React et Node.js. Passionnée par la création d'applications web modernes et évolutives offrant des expériences utilisateur exceptionnelles. Fort intérêt pour l'IA et son application dans le développement logiciel — avec la conception de pipelines de vision par ordinateur (YOLOv8, Detectron2) et l'intégration de l'IA dans des plateformes full-stack.",
        location: "Tunis, Tunisie",
        phone: "+216 29 197 606",
        email: "sarrarabai87@gmail.com"
      },
      experience: {
        title: "Expérience Professionnelle",
        roles: [
          {
            company: "KidCare",
            role: "Développeuse Full Stack Freelance (À distance)",
            period: "02/2026 – 07/2026",
            points: [
              "Conception et développement d'une application mobile de contrôle parental avec React Native et Node.js, axée sur une UX intuitive et des fonctionnalités en temps réel.",
              "Intégration d'API backend utilisant Fastify avec TypeScript, garantissant un traitement des données haute performance.",
              "Conteneurisation de l'application avec Docker pour rationaliser le développement et le déploiement."
            ]
          },
          {
            company: "Nexaura Technologies",
            role: "Développeuse Full Stack (À distance - Canada)",
            period: "07/2025 – 01/2026",
            points: [
              "Développement d'applications web et mobiles réactives avec React, offrant des expériences utilisateur fluides sur tous les appareils.",
              "Conception et construction d'API modulaires avec Node.js et NestJS, avec PostgreSQL pour une persistance efficace des données.",
              "Optimisation des performances frontend avec le chargement paresseux et la division du code, réalisant une réduction de 35% de la taille du bundle.",
              "Collaboration avec des équipes pluridisciplinaires dans un environnement Agile, garantissant la livraison en temps voulu de fonctionnalités de haute qualité."
            ]
          },
          {
            company: "Assurances CTAMA",
            role: "Stagiaire Développeuse IA & Full Stack",
            period: "01/2025 – 06/2025",
            points: [
              "Architecture d'une plateforme de déclaration d'accidents full-stack (pile MERN) avec chat en temps réel, offrant une expérience utilisateur intuitive pour les réclamations d'assurance.",
              "Développement d'API REST et d'interfaces React réactives, assurant un flux de données fluide et l'accessibilité.",
              "Création d'un pipeline de détection de fraude par vision par ordinateur utilisant YOLOv8 et Detectron2 — intégrant l'IA directement dans une plateforme destinée aux clients."
            ]
          },
          {
            company: "iMaxeam",
            role: "Stagiaire Développeuse Full Stack",
            period: "06/2024 – 08/2024",
            points: [
              "Création d'une application mobile de type marketplace avec React Native et authentification JWT, offrant une interface soignée et conviviale.",
              "Construction d'API REST avec Node.js et Express.js, et intégration de bases de données SQL (MySQL) pour une gestion évolutive des données."
            ]
          },
          {
            company: "EPI Digital School",
            role: "Stagiaire Développeuse Full Stack",
            period: "02/2024 – 05/2024",
            points: [
              "Création d'une application de gestion d'entreprise avec React et GraphQL pour une récupération efficace des données.",
              "Mise en œuvre du schéma GraphQL avec des résolveurs et Apollo Client pour la gestion des états.",
              "Déploiement sur AWS en utilisant des technologies sans serveur (serverless)."
            ]
          }
        ]
      },
      projects: {
        title: "Projets Phares",
        list: [
          {
            name: "Tableau de bord analytique des ventes et du transport",
            period: "11/2024 – 01/2025",
            description: "Conception de tableaux de bord Power BI avec pipelines ETL, analyses SQL et mesures DAX pour le reporting commercial.",
            tech: ["Power BI", "SQL", "ETL", "DAX", "Data Analytics"]
          },
          {
            name: "Plateforme IA de déclaration d'accidents et de détection de fraude",
            period: "01/2025 – 06/2025",
            description: "Plateforme d'assurance MERN full-stack avec chat en temps réel et pipeline de vision par ordinateur automatisé (YOLOv8 & Detectron2).",
            tech: ["React", "Node.js", "MongoDB", "Python", "YOLOv8", "Detectron2"]
          },
          {
            name: "Application mobile de contrôle parental KidCare",
            period: "02/2026 – 07/2026",
            description: "Application mobile multiplateforme avec surveillance en temps réel, backend Fastify TypeScript et conteneurisation Docker.",
            tech: ["React Native", "Node.js", "Fastify", "TypeScript", "Docker"]
          }
        ]
      },
      skills: {
        title: "Compétences Techniques",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          database: "Base de données",
          ai: "IA & ML",
          devops: "Cloud & DevOps",
          methods: "Méthodologies"
        }
      },
      education: {
        title: "Formation & Distinctions",
        degrees: [
          {
            school: "EPI School - École Polytechnique Internationale Privée de Sousse",
            degree: "Diplôme d'Ingénieur en Génie Logiciel",
            period: "2022 – 2025"
          },
          {
            school: "ISET Mahdia - Institut Supérieur des Études Technologiques de Mahdia",
            degree: "Licence en Automatismes et Informatique Industrielle",
            period: "2019 – 2022"
          }
        ],
        awardTitle: "Distinctions & Récompenses",
        awards: [
          "Récompensée financièrement par Assurances CTAMA pour la livraison exceptionnelle d'un système de détection de fraude et de déclaration d'accidents basé sur l'IA."
        ],
        languagesTitle: "Langues",
        languages: "Arabe (Natif) • Anglais (Courant - Professionnel) • Français (Courant) • Allemand (Intermédiaire)"
      },
      contact: {
        title: "Me Contacter",
        subtitle: "Vous avez un projet en tête ou souhaitez collaborer ? N'hésitez pas à me contacter !",
        name: "Votre Nom",
        email: "Votre Email",
        message: "Votre Message",
        send: "Envoyer le message",
        success: "Merci ! Votre message a été envoyé avec succès."
      }
    }
  },
  ar: {
    translation: {
      nav: {
        about: "عني",
        experience: "الخبرة",
        projects: "المشاريع",
        skills: "المهارات",
        education: "التعليم",
        contact: "اتصل بي",
        resume: "السيرة الذاتية"
      },
      hero: {
        greeting: "مرحباً، أنا",
        title: "مطور برمجيات شامل ومهندسة ذكاء اصطناعي",
        subtitle: "متخصصة في JavaScript و React و Node.js وحلول الويب والموبايل المدعومة بالذكاء الاصطناعي.",
        contactBtn: "تواصل معي",
        downloadResume: "تحميل السيرة الذاتية"
      },
      about: {
        title: "نبذة عني",
        description: "مطور برمجيات شامل (Full Stack) مع أكثر من عامين من الخبرة المتخصصة في JavaScript و React و Node.js. شغوفة بناء تطبيقات ويب حديثة وقابلة للتطوير مع تجارب مستخدم استثنائية. اهتمام قوي بالذكاء الاصطناعي وتطبيقاته في هندسة البرمجيات - حيث قمت بنوعية خطوط رؤية حاسوبية (YOLOv8, Detectron2) ودمج الذكاء الاصطناعي في منصات متكاملة.",
        location: "تونس، تونس",
        phone: "+216 29 197 606",
        email: "sarrarabai87@gmail.com"
      },
      experience: {
        title: "الخبرة المهنية",
        roles: [
          {
            company: "KidCare",
            role: "مطور برمجيات شامل حر (عن بعد)",
            period: "02/2026 – 07/2026",
            points: [
              "تصميم وتطوير تطبيق موبايل للرقابة الأبوية باستخدام React Native و Node.js، مع التركيز على تجربة مستخدم بديهية ووظائف في الوقت الفعلي.",
              "دمج واجهات برمجة التطبيقات الخلفية باستخدام Fastify مع TypeScript، مما يضمن معالجة بيانات عالية الأداء.",
              "حاويات التطبيق باستخدام Docker لتسهيل التطوير والنشر."
            ]
          },
          {
            company: "Nexaura Technologies",
            role: "مطور برمجيات شامل (عن بعد - كندا)",
            period: "07/2025 – 01/2026",
            points: [
              "تطوير تطبيقات ويب وموبايل متجاوبة باستخدام React، مما يوفر تجارب مستخدم سلسة عبر الأجهزة.",
              "تصميم وبناء واجهات برمجة تطبيقات نموذجية باستخدام Node.js و NestJS، مع PostgreSQL لاستمرار البيانات بكفاءة.",
              "تحسين أداء الواجهة الأمامية باستخدام التحميل البطيء وتقسيم الكود، مما حقق تخفيضاً بنسبة 35% في حجم الحزمة.",
              "التعاون مع فرق متعددة التخصصات في بيئة Agile، مما يضمن التسليم في الوقت المناسب لميزات عالية الجودة."
            ]
          },
          {
            company: "Assurances CTAMA",
            role: "متدربة تطوير ذكاء اصطناعي وبرمجيات شاملة",
            period: "01/2025 – 06/2025",
            points: [
              "هندسة منصة تصريح بالحوادث متكاملة (مكدس MERN) مع محادثة في الوقت الفعلي، مما يوفر تجربة مستخدم بديهية لمطالبات التأمين.",
              "تطوير واجهات برمجة تطبيقات REST وواجهات React متجاوبة، مما يضمن تدفق البيانات السلس وسهولة الوصول.",
              "بناء خط أنابيب الكشف عن الاحتيال برؤية حاسوبية باستخدام YOLOv8 و Detectron2 - دمج الذكاء الاصطناعي مباشرة في منصة العملاء."
            ]
          },
          {
            company: "iMaxeam",
            role: "متدربة تطوير برمجيات شاملة",
            period: "06/2024 – 08/2024",
            points: [
              "إنشاء تطبيق موبايل للسوق (Marketplace) باستخدام React Native ومصادقة JWT، مما يوفر واجهة مصقولة وسهلة الاستخدام.",
              "بناء واجهات برمجة تطبيقات REST باستخدام Node.js و Express.js، ودمج قواعد بيانات SQL (MySQL) لإدارة البيانات القابلة للتطوير."
            ]
          },
          {
            company: "EPI Digital School",
            role: "متدربة تطوير برمجيات شاملة",
            period: "02/2024 – 05/2024",
            points: [
              "إنشاء تطبيق إدارة الأعمال باستخدام React و GraphQL لجلب البيانات بكفاءة.",
              "تنفيذ مخطط GraphQL مع المحولات (resolvers) و Apollo Client لإدارة الحالة.",
              "النشر على AWS باستخدام التقنيات بدون خادم (serverless)."
            ]
          }
        ]
      },
      projects: {
        title: "المشاريع البارزة",
        list: [
          {
            name: "لوحة تحليلات المبيعات والنقل",
            period: "11/2024 – 01/2025",
            description: "تصميم لوحات تحكم Power BI مع خطوط أنابيب ETL وتحليلات SQL ومقاييس DAX لإعداد التقارير التجارية المستندة إلى البيانات.",
            tech: ["Power BI", "SQL", "ETL", "DAX", "تحليلات البيانات"]
          },
          {
            name: "منصة الذكاء الاصطناعي لتصريح الحوادث وكشف الاحتيال",
            period: "01/2025 – 06/2025",
            description: "منصة تأمين MERN متكاملة تتميز بمحادثة في الوقت الفعلي وخط رؤية حاسوبية تلقائي (YOLOv8 & Detectron2).",
            tech: ["React", "Node.js", "MongoDB", "Python", "YOLOv8", "Detectron2"]
          },
          {
            name: "تطبيق KidCare للرقابة الأبوية للموبايل",
            period: "02/2026 – 07/2026",
            description: "تطبيق موبايل متعدد المنصات مع مراقبة في الوقت الفعلي، وخلفية Fastify TypeScript، وحاويات Docker.",
            tech: ["React Native", "Node.js", "Fastify", "TypeScript", "Docker"]
          }
        ]
      },
      skills: {
        title: "المهارات التقنية",
        categories: {
          frontend: "الواجهة الأمامية",
          backend: "الواجهة الخلفية",
          database: "قواعد البيانات",
          ai: "الذكاء الاصطناعي والتعلم الآلي",
          devops: "السحابة و DevOps",
          methods: "منهجيات العمل"
        }
      },
      education: {
        title: "التعليم والجوائز",
        degrees: [
          {
            school: "مدرسة EPI - المدرسة العليا الخاصة المتعددة التقنيات بسوسة",
            degree: "شهادة مهندس في هندسة البرمجيات",
            period: "2022 – 2025"
          },
          {
            school: "المعهد العالي للدراسات التكنولوجية بالمهدية",
            degree: "شهادة الإجازة التطبيقية في الأتمتة والاعلامية الصناعية",
            period: "2019 – 2022"
          }
        ],
        awardTitle: "الجوائز والتقديرات",
        awards: [
          "تم تكريمها مالياً من قبل Assurances CTAMA لتسليمها المتميز لنظام الكشف عن الاحتيال والإبلاغ عن الحوادث القائم على الذكاء الاصطناعي."
        ],
        languagesTitle: "اللغات",
        languages: "العربية (اللغة الأم) • الإنجليزية (طلاقة - مهنية) • الفرنسية (طلاقة) • الألمانية (متوسط)"
      },
      contact: {
        title: "تواصل معي",
        subtitle: "هل لديك مشروع في ذهنك أو تريد التعاون؟ لا تتردد في التواصل!",
        name: "اسمك",
        email: "بريدك الإلكتروني",
        message: "رسالتك",
        send: "إرسال الرسالة",
        success: "شكراً لك! تم إرسال رسالتك بنجاح."
      }
    }
  },
  de: {
    translation: {
      nav: {
        about: "Über mich",
        experience: "Berufserfahrung",
        projects: "Projekte",
        skills: "Fähigkeiten",
        education: "Ausbildung",
        contact: "Kontakt",
        resume: "Lebenslauf"
      },
      hero: {
        greeting: "Hallo, ich bin",
        title: "Full Stack Entwicklerin & KI-Ingenieurin",
        subtitle: "Spezialisiert auf JavaScript, React, Node.js und KI-gestützte Web- & Mobil-Lösungen.",
        contactBtn: "Kontakt aufnehmen",
        downloadResume: "Lebenslauf herunterladen"
      },
      about: {
        title: "Über mich",
        description: "Full Stack Entwicklerin mit über 2 Jahren Erfahrung, spezialisiert auf JavaScript, React und Node.js. Leidenschaftlich beim Erstellen moderner, skalierbarer Webanwendungen mit außergewöhnlicher UX. Starkes Interesse an KI und deren Anwendung in der Softwareentwicklung — Erstellung von Computer-Vision-Pipelines (YOLOv8, Detectron2) und Integration von KI in Full-Stack-Plattformen.",
        location: "Tunis, Tunesien",
        phone: "+216 29 197 606",
        email: "sarrarabai87@gmail.com"
      },
      experience: {
        title: "Berufserfahrung",
        roles: [
          {
            company: "KidCare",
            role: "Full Stack Freelance Entwicklerin (Remote)",
            period: "02/2026 – 07/2026",
            points: [
              "Entwurf und Entwicklung einer mobilen Kindersicherungs-App mit React Native und Node.js mit Fokus auf intuitive UX und Echtzeitfunktionen.",
              "Integration von Backend-APIs mit Fastify und TypeScript für eine hochperformante Datenverarbeitung.",
              "Containerisierung der Anwendung mit Docker für optimierte Entwicklung und Bereitstellung."
            ]
          },
          {
            company: "Nexaura Technologies",
            role: "Full Stack Entwicklerin (Remote - Kanada)",
            period: "07/2025 – 01/2026",
            points: [
              "Entwicklung responsiver Web- und Mobilanwendungen mit React für nahtlose Benutzererlebnisse auf allen Geräten.",
              "Entwurf und Erstellung modularer APIs mit Node.js und NestJS sowie PostgreSQL für effiziente Datenspeicherung.",
              "Optimierung der Frontend-Leistung durch Lazy Loading und Code Splitting, wodurch eine Bundle-Größenreduzierung von 35% erreicht wurde.",
              "Zusammenarbeit mit funktionsübergreifenden Teams in einer agilen Umgebung zur termingerechten Lieferung hochwertiger Funktionen."
            ]
          },
          {
            company: "Assurances CTAMA",
            role: "KI & Full Stack Entwicklerin (Praktikum)",
            period: "01/2025 – 06/2025",
            points: [
              "Architektur einer Full-Stack-Unfallmeldeplattform (MERN-Stack) mit Echtzeit-Chat für ein intuitives Nutzererlebnis bei Versicherungsansprüchen.",
              "Entwicklung von REST-APIs und responsiven React-Schnittstellen zur Gewährleistung eines reibungslosen Datenflusses.",
              "Aufbau einer Computer-Vision-Betrugserkennungspipeline mit YOLOv8 und Detectron2 — direkte Integration von KI in eine kundenorientierte Plattform."
            ]
          },
          {
            company: "iMaxeam",
            role: "Full Stack Entwicklerin (Praktikum)",
            period: "06/2024 – 08/2024",
            points: [
              "Erstellung einer mobilen Marktplatz-App mit React Native und JWT-Authentifizierung für eine benutzerfreundliche Oberfläche.",
              "Erstellung von REST-APIs mit Node.js und Express.js sowie Integration von SQL-Datenbanken (MySQL)."
            ]
          },
          {
            company: "EPI Digital School",
            role: "Full Stack Entwicklerin (Praktikum)",
            period: "02/2024 – 05/2024",
            points: [
              "Erstellung einer Unternehmensverwaltungsanwendung mit React und GraphQL für effizientes Datenfetching.",
              "Implementierung des GraphQL-Schemas mit Resolvern und Apollo Client für das State Management.",
              "Bereitstellung auf AWS unter Verwendung von Serverless-Technologien."
            ]
          }
        ]
      },
      projects: {
        title: "Ausgewählte Projekte",
        list: [
          {
            name: "Vertriebs- & Transport-Analytik-Dashboard",
            period: "11/2024 – 01/2025",
            description: "Entwurf von Power BI-Dashboards mit ETL-Pipelines, SQL-Analysen und DAX-Maßnahmen für datengestützte Geschäftsberichte.",
            tech: ["Power BI", "SQL", "ETL", "DAX", "Data Analytics"]
          },
          {
            name: "KI-Unfallmelde- & Betrugserkennungsplattform",
            period: "01/2025 – 06/2025",
            description: "Full-Stack MERN-Versicherungsplattform mit Echtzeit-Chat und automatisierter Computer-Vision-Pipeline (YOLOv8 & Detectron2).",
            tech: ["React", "Node.js", "MongoDB", "Python", "YOLOv8", "Detectron2"]
          },
          {
            name: "KidCare Kindersicherungs-App",
            period: "02/2026 – 07/2026",
            description: "Plattformübergreifende Mobil-App mit Echtzeitüberwachung, Fastify TypeScript Backend und Docker.",
            tech: ["React Native", "Node.js", "Fastify", "TypeScript", "Docker"]
          }
        ]
      },
      skills: {
        title: "Technische Fähigkeiten",
        categories: {
          frontend: "Frontend",
          backend: "Backend",
          database: "Datenbanken",
          ai: "KI & ML",
          devops: "Cloud & DevOps",
          methods: "Methodologien"
        }
      },
      education: {
        title: "Ausbildung & Auszeichnungen",
        degrees: [
          {
            school: "EPI School - International Higher Private Polytechnic School of Sousse",
            degree: "Ingenieurabschluss in Softwaretechnik",
            period: "2022 – 2025"
          },
          {
            school: "ISET Mahdia - Höheres Institut für TECHNOLOGISCHE Studien von Mahdia",
            degree: "Bachelor in Automatisierungs- und Industrietechnik",
            period: "2019 – 2022"
          }
        ],
        awardTitle: "Auszeichnungen & Anerkennungen",
        awards: [
          "Finanziell ausgezeichnet von Assurances CTAMA für herausragende Leistungen bei der Bereitstellung eines KI-basierten Betrugserkennungs- und Unfallmeldesystems."
        ],
        languagesTitle: "Sprachen",
        languages: "Arabisch (Muttersprache) • Englisch (Fließend - Professionell) • Französisch (Fließend) • Deutsch (Mittelstufe)"
      },
      contact: {
        title: "Kontaktieren Sie mich",
        subtitle: "Haben Sie ein Projekt im Kopf oder möchten Sie zusammenarbeiten? Melten Sie sich gerne!",
        name: "Ihr Name",
        email: "Ihre E-Mail",
        message: "Ihre Nachricht",
        send: "Nachricht senden",
        success: "Vielen Dank! Ihre Nachricht wurde erfolgreich gesendet."
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
