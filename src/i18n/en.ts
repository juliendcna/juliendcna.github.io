import type { Dictionary } from './index';

const en: Dictionary = {
  meta: {
    title: 'Julien Da Cunha — Cloud & DevOps Engineer | Geneva, Switzerland',
    description:
      'Julien Da Cunha — Cloud & DevOps Engineer based in Geneva, Switzerland. Specialising in Kubernetes, Terraform, GCP, and network infrastructure.',
  },
  nav: {
    about: 'About',
    experience: 'Experience',
    education: 'Education',
    skills: 'Skills',
    contact: 'Contact',
  },
  hero: {
    statusAvailable: 'status: reachable',
    statusLocation: 'geneva, switzerland · 46.20°N 6.14°E',
    intro: 'Cloud & DevOps engineer —',
    roles: ['passionate!', 'system engineer', 'network engineer', 'cloud & devops engineer'],
    ctaContact: 'Send me a message',
    ctaResume: 'See experience',
    scrollHint: 'scroll',
  },
  about: {
    key: 'about',
    heading: 'About me',
    body: 'Network and cloud engineer with a deep interest in infrastructure, virtualization, and the systems that keep the internet running.',
    factName: 'Name',
    factAge: 'Age',
    factAgeUnit: 'years',
    factLocation: 'Location',
    factEmail: 'Email',
    uptimeLabel: 'lab uptime',
    cvNote: 'Public CV coming soon',
  },
  experience: {
    key: 'experience',
    heading: 'Experience',
    items: [
      {
        dates: 'Sept. 2023 — present',
        title: 'Cloud & DevOps Engineer',
        org: 'Alpian',
        orgUrl: 'https://alpian.com',
        points: ['Kubernetes, Terraform and GCP platform engineering.'],
      },
      {
        dates: 'Sept. 2022 — Aug. 2023',
        title: 'Technical Manager, VOIP Service Platforms',
        org: 'Orange France',
        orgUrl: 'https://orange.com',
      },
      {
        dates: 'Sept. 2019 — Aug. 2022',
        title: 'Apprentice Operations & Expertise Engineer, Voice and Messaging Service Platforms',
        org: 'Orange France',
        orgUrl: 'https://orange.com',
        points: [
          'Integration of a VOIP platform in a private cloud (IaaS).',
          'Virtual network architecture.',
          'Automated provisioning with the vRA API & Terraform provider.',
          'Orchestration of application installation & configuration via Consul.',
          'Implementation of a CI/CD pipeline.',
        ],
      },
      {
        dates: 'June 2019 — July 2019',
        title: 'Junior System Administrator',
        org: 'Ilem Group',
        orgUrl: 'https://new.ilemgroup.com',
        points: [
          'Monitoring server migration.',
          'Hypervision system migration project & Active Directory domain migration for a client.',
        ],
      },
      {
        dates: 'April 2019 — June 2019',
        title: 'System Administrator Intern',
        org: 'Ilem Group',
        orgUrl: 'https://new.ilemgroup.com',
        points: [
          'Modernized the monitoring system of the company and its clients.',
          'Automated migration to Centreon 19.04.',
          'Automation of configuration export.',
          'Automated deployment of a monitoring server.',
        ],
      },
    ],
  },
  education: {
    key: 'education',
    heading: 'Education',
    items: [
      {
        dates: '2019 — 2022',
        title: 'Computer Science and Communication Networks Engineer',
        org: 'CPE Lyon',
        orgUrl: 'https://www.cpe.fr/',
      },
      {
        dates: '2017 — 2019',
        title: 'University Diploma in Networks & Telecommunications',
        org: "IUT d'Annecy | Université Savoie Mont-Blanc",
        orgUrl: 'https://www.iut-acy.univ-smb.fr/',
        points: ['Training in telecommunications and system & network administration.'],
      },
      {
        dates: '2015 — 2017',
        title: 'Baccalaureate STI2D (SIN)',
        org: 'Lycée Benjamin Franklin | Orléans, France',
        orgUrl: 'http://www.lycee-benjamin-franklin.fr/',
        points: ['Specialization: Information Systems and Digital (SIN). With honors.'],
      },
    ],
  },
  certifications: {
    key: 'certifications',
    heading: 'Certifications',
    view: 'View certification',
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
        note: 'Obtained as part of my DUT R&T training.',
      },
    ],
  },
  skills: {
    key: 'skills',
    heading: 'Skills',
    groups: [
      {
        name: 'Cloud & platform',
        items: ['Google Cloud Platform', 'Kubernetes', 'Terraform', 'Ansible', 'CI/CD pipelines'],
      },
      {
        name: 'Network',
        items: ['Cisco CLI', 'Mikrotik CLI', 'pfSense', 'VOIP platforms'],
      },
      {
        name: 'API gateways & service mesh',
        items: ['Kong', 'Istio', 'Traefik', 'NGINX'],
      },
      {
        name: 'Systems & observability',
        items: [
          'Linux administration',
          'Windows administration',
          'VMware ESXi & vCenter',
          'Prometheus & Grafana',
          'OpenTelemetry',
          'Centreon monitoring',
        ],
      },
    ],
  },
  contact: {
    key: 'contact',
    heading: 'Contact me',
    body: 'Need IT advice? Or just want to chat?',
    button: 'Send me a message',
    locationLabel: 'Location',
    emailLabel: 'Email',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
  },
  footer: {
    linksTitle: 'Links',
    statusLink: 'Status — GoneIX',
    questionsTitle: 'Questions?',
    madeWith: 'Made with',
  },
  a11y: {
    skipToContent: 'Skip to content',
    languageMenu: 'Language',
    openMenu: 'Open menu',
  },
};

export default en;
