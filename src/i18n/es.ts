import type { Dictionary } from './index';

const es: Dictionary = {
  meta: {
    title: 'Julien Da Cunha — Ingeniero Cloud y DevOps | Ginebra, Suiza',
    description:
      'Julien Da Cunha — Ingeniero Cloud y DevOps con base en Ginebra, Suiza. Especializado en Kubernetes, Terraform, GCP e infraestructuras de red.',
  },
  nav: {
    about: 'Sobre mí',
    experience: 'Experiencia',
    education: 'Formación',
    skills: 'Habilidades',
    contact: 'Contacto',
  },
  hero: {
    statusAvailable: 'status: disponible',
    statusLocation: 'ginebra, suiza · 46.20°N 6.14°E',
    intro: 'Ingeniero Cloud y DevOps —',
    roles: ['¡apasionado!', 'ingeniero de sistemas', 'ingeniero de redes', 'ingeniero cloud y devops'],
    ctaContact: 'Envíame un mensaje',
    ctaResume: 'Ver mi trayectoria',
    scrollHint: 'desplazar',
  },
  about: {
    key: 'sobre-mi',
    heading: 'Sobre mí',
    body: 'Ingeniero de redes y cloud con un profundo interés por las infraestructuras, la virtualización y los sistemas que mantienen Internet en funcionamiento.',
    factName: 'Nombre',
    factAge: 'Edad',
    factAgeUnit: 'años',
    factLocation: 'Ubicación',
    factEmail: 'Correo',
    uptimeLabel: 'disponibilidad del lab',
    cvNote: 'El CV público llegará pronto',
  },
  experience: {
    key: 'experiencia',
    heading: 'Experiencia',
    items: [
      {
        dates: 'Sept. 2023 — actualidad',
        title: 'Ingeniero Cloud y DevOps',
        org: 'Alpian',
        orgUrl: 'https://alpian.com',
        points: ['Ingeniería de plataforma: Kubernetes, Terraform y GCP.'],
      },
      {
        dates: 'Sept. 2022 — agosto 2023',
        title: 'Responsable Técnico de Plataformas de Servicios VOIP',
        org: 'Orange France',
        orgUrl: 'https://orange.com',
      },
      {
        dates: 'Sept. 2019 — agosto 2022',
        title: 'Aprendiz de Ingeniero de Operaciones y Experiencia en Plataformas de Servicios de Voz y Mensajería',
        org: 'Orange France',
        orgUrl: 'https://orange.com',
        points: [
          'Integración de una plataforma VOIP en Nube Privada (IaaS).',
          'Arquitectura de redes virtuales.',
          'Aprovisionamiento automatizado con la API de vRA y el provider de Terraform.',
          'Orquestación de la instalación y configuración de la aplicación vía Consul.',
          'Implementación de un pipeline CI/CD.',
        ],
      },
      {
        dates: 'Junio 2019 — julio 2019',
        title: 'Administrador de Sistemas Junior',
        org: 'Ilem Group',
        orgUrl: 'https://new.ilemgroup.com',
        points: [
          'Migración de servidor de monitoreo.',
          'Proyecto de migración del sistema de hipervisión y migración de dominio Active Directory para un cliente.',
        ],
      },
      {
        dates: 'Abril 2019 — junio 2019',
        title: 'Pasante Administrador de Sistemas',
        org: 'Ilem Group',
        orgUrl: 'https://new.ilemgroup.com',
        points: [
          'Modernización del sistema de monitoreo de la empresa y sus clientes.',
          'Migración automatizada a Centreon 19.04.',
          'Automatización de la exportación de configuración.',
          'Despliegue automatizado de un servidor de monitoreo.',
        ],
      },
    ],
  },
  education: {
    key: 'formacion',
    heading: 'Formación',
    items: [
      {
        dates: '2019 — 2022',
        title: 'Ingeniero en Informática y Redes de Comunicación',
        org: 'CPE Lyon',
        orgUrl: 'https://www.cpe.fr/',
      },
      {
        dates: '2017 — 2019',
        title: 'D.U.T Redes y Telecomunicaciones',
        org: "IUT d'Annecy | Université Savoie Mont-Blanc",
        orgUrl: 'https://www.iut-acy.univ-smb.fr/',
        points: ['Formación en telecomunicaciones y administración de sistemas y redes informáticas.'],
      },
      {
        dates: '2015 — 2017',
        title: 'Bachillerato STI2D (SIN)',
        org: 'Lycée Benjamin Franklin | Orléans, Francia',
        orgUrl: 'http://www.lycee-benjamin-franklin.fr/',
        points: ['Especialización: Sistemas de Información y Digital (SIN). Mención Bien.'],
      },
    ],
  },
  certifications: {
    key: 'certificaciones',
    heading: 'Certificaciones',
    view: 'Ver certificación',
    items: [
      {
        year: '2026',
        title: 'HashiCorp Certified: Terraform Associate',
        org: 'HashiCorp',
        url: 'https://www.credly.com/badges/9d726f5b-a9e0-4454-896e-ee3b6fb15e32/linked_in?t=t8ee83',
      },
      {
        year: '2023',
        title: 'Google Cloud Certified: Professional Cloud Architect',
        org: 'Google Cloud',
        url: 'https://www.credly.com/badges/911a7f65-2b9a-43f6-ba63-d3852a549969',
      },
      {
        year: '2022',
        title: 'Microsoft Certified: Azure Fundamentals (AZ-900)',
        org: 'Microsoft',
        url: 'https://www.credly.com/badges/15a0481d-6578-4d26-87e4-b6eae713b92c?source=linked_in_profile',
      },
      {
        year: '2019',
        title: 'Cisco CCNA2 Routing & Switching',
        org: "IUT d'Annecy",
        url: 'https://www.iut-acy.univ-smb.fr/',
        note: 'Obtenida como parte de mi formación DUT R&T.',
      },
    ],
  },
  skills: {
    key: 'habilidades',
    heading: 'Habilidades',
    groups: [
      {
        name: 'Cloud y plataforma',
        items: ['Google Cloud Platform', 'Kubernetes', 'Terraform', 'Ansible', 'Pipelines CI/CD'],
      },
      {
        name: 'Redes',
        items: ['Cisco CLI', 'Mikrotik CLI', 'pfSense', 'Plataformas VOIP'],
      },
      {
        name: 'Pasarelas API y service mesh',
        items: ['Kong', 'Istio', 'Traefik', 'NGINX'],
      },
      {
        name: 'Sistemas y observabilidad',
        items: [
          'Administración Linux',
          'Administración Windows',
          'VMware ESXi & vCenter',
          'Prometheus & Grafana',
          'OpenTelemetry',
          'Monitoreo Centreon',
        ],
      },
    ],
  },
  contact: {
    key: 'contacto',
    heading: 'Contactarme',
    body: '¿Necesitas consejo informático? ¿O simplemente charlar?',
    button: 'Envíame un mensaje',
    locationLabel: 'Ubicación',
    emailLabel: 'Correo',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
  },
  footer: {
    linksTitle: 'Enlaces',
    statusLink: 'Status — GoneIX',
    questionsTitle: '¿Preguntas?',
    madeWith: 'Hecho con',
  },
  a11y: {
    skipToContent: 'Saltar al contenido',
    languageMenu: 'Idioma',
    openMenu: 'Abrir el menú',
  },
};

export default es;
