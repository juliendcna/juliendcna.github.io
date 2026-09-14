import type { Dictionary } from './index';

const fr: Dictionary = {
  meta: {
    title: 'Julien Da Cunha — Ingénieur Cloud & DevOps | Genève, Suisse',
    description:
      'Julien Da Cunha — Ingénieur Cloud & DevOps basé à Genève, Suisse. Spécialisé en Kubernetes, Terraform, GCP et infrastructures réseau.',
  },
  nav: {
    about: 'À propos',
    experience: 'Expérience',
    education: 'Formation',
    skills: 'Stack',
    contact: 'Contact',
  },
  hero: {
    statusAvailable: 'status: joignable',
    statusLocation: 'genève, suisse · 46.20°N 6.14°E',
    intro: 'Ingénieur Cloud & DevOps —',
    roles: ['passionné !', 'ingénieur système', 'ingénieur réseau', 'ingénieur cloud & devops'],
    ctaContact: 'Envoyez-moi un message',
    ctaResume: 'Voir mon parcours',
    scrollHint: 'défiler',
  },
  about: {
    key: 'a-propos',
    heading: 'À propos de moi',
    body: "Ingénieur Cloud, passionné par les infrastructures informatiques et les systèmes qui font tourner Internet.",
    factName: 'Nom',
    factAge: 'Âge',
    factAgeUnit: 'ans',
    factLocation: 'Localisation',
    factEmail: 'Email',
    uptimeLabel: 'disponibilité du lab',
    cvNote: 'Le CV public arrive bientôt',
  },
  experience: {
    key: 'experience',
    heading: 'Expérience',
    items: [
      {
        dates: 'Sept. 2023 — aujourd’hui',
        title: 'Cloud & DevOps Engineer',
        org: 'Alpian',
        orgUrl: 'https://alpian.com',
        points: ['Ingénierie de plateforme : Kubernetes, Terraform et GCP.'],
      },
      {
        dates: 'Sept. 2022 — août 2023',
        title: 'Responsable Technique, plateformes de services VOIP',
        org: 'Orange France',
        orgUrl: 'https://orange.com',
      },
      {
        dates: 'Sept. 2019 — août 2022',
        title: 'Apprenti Ingénieur d’Exploitation & Expertise des Plateformes de Service Voice and Messaging',
        org: 'Orange France',
        orgUrl: 'https://orange.com',
        points: [
          'Intégration d’une plateforme VOIP en Cloud Privé (IaaS).',
          'Architecture des réseaux virtuels.',
          'Provisionnement automatisé avec l’API vRA & le provider Terraform.',
          'Orchestration de l’installation & configuration de l’applicatif via Consul.',
          'Mise en place d’un pipeline CI/CD.',
        ],
      },
      {
        dates: 'Juin 2019 — juillet 2019',
        title: 'Administrateur Système Junior',
        org: 'Ilem Group',
        orgUrl: 'https://new.ilemgroup.com',
        points: [
          'Migration de serveur de monitoring.',
          'Projet de migration du système d’hypervision & migration de domaine Active Directory pour un client.',
        ],
      },
      {
        dates: 'Avril 2019 — juin 2019',
        title: 'Stage Administrateur Système',
        org: 'Ilem Group',
        orgUrl: 'https://new.ilemgroup.com',
        points: [
          'Modernisation du système de monitoring de l’entreprise et de ses clients.',
          'Migration automatisée vers Centreon 19.04.',
          'Automatisation de l’export de configuration.',
          'Déploiement automatisé d’un serveur de monitoring.',
        ],
      },
    ],
  },
  education: {
    key: 'formation',
    heading: 'Formation',
    items: [
      {
        dates: '2019 — 2022',
        title: 'Ingénieur en informatique et réseaux de communication',
        org: 'CPE Lyon',
        orgUrl: 'https://www.cpe.fr/',
      },
      {
        dates: '2017 — 2019',
        title: 'D.U.T Réseaux & Télécommunications',
        org: "IUT d'Annecy | Université Savoie Mont-Blanc",
        orgUrl: 'https://www.iut-acy.univ-smb.fr/',
        points: ['Formation dans les télécommunications et en administration système & réseaux informatiques.'],
      },
      {
        dates: '2015 — 2017',
        title: 'Baccalauréat STI2D (SIN)',
        org: 'Lycée Benjamin Franklin | Orléans, France',
        orgUrl: 'http://www.lycee-benjamin-franklin.fr/',
        points: ['Spécialisation : Systèmes d’Information et Numérique (SIN). Mention Bien.'],
      },
    ],
  },
  certifications: {
    key: 'certifications',
    heading: 'Certifications',
    view: 'Voir la certification',
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
        note: 'Obtenue dans le cadre de ma formation DUT R&T.',
      },
    ],
  },
  skills: {
    key: 'competences',
    heading: 'Stack',
    groups: [
      {
        name: 'Cloud & plateforme',
        items: [
          { label: 'Google Cloud Platform', icon: 'googlecloud' },
          { label: 'AWS', icon: 'aws' },
          { label: 'Azure', icon: 'azure' },
          { label: 'Kubernetes', icon: 'kubernetes' },
          { label: 'Docker', icon: 'docker' },
          { label: 'Terraform', icon: 'terraform' },
          { label: 'Ansible', icon: 'ansible' },
          { label: 'Consul', icon: 'consul' },
        ],
      },
      {
        name: 'Réseau',
        items: [
          { label: 'Cisco CLI', icon: 'cisco' },
          { label: 'Mikrotik CLI', icon: 'mikrotik' },
          { label: 'pfSense', icon: 'pfsense' },
          { label: 'Fortinet', icon: 'fortinet' },
          { label: 'Plateformes VOIP', icon: 'asterisk' },
        ],
      },
      {
        name: 'CI/CD & automatisation',
        items: [
          { label: 'GitHub Actions', icon: 'githubactions' },
          { label: 'GitLab CI', icon: 'gitlab' },
          { label: 'ArgoCD', icon: 'argo' },
          { label: 'Renovate', icon: 'renovate' },
        ],
      },
      {
        name: 'Passerelles API & serveurs web',
        items: [
          { label: 'Kong', icon: 'kong' },
          { label: 'Istio', icon: 'istio' },
          { label: 'Traefik', icon: 'traefikproxy' },
          { label: 'NGINX', icon: 'nginx' },
          { label: 'Apache', icon: 'apache' },
          { label: 'Tomcat', icon: 'apachetomcat' },
        ],
      },
      {
        name: 'Données & messagerie',
        items: [
          { label: 'PostgreSQL', icon: 'postgresql' },
          { label: 'MariaDB Galera', icon: 'mariadb' },
          { label: 'MongoDB Atlas', icon: 'mongodb' },
          { label: 'InfluxDB', icon: 'influxdb' },
          { label: 'Elasticsearch', icon: 'elasticsearch' },
          { label: 'Kafka', icon: 'apachekafka' },
          { label: 'Google Pub/Sub', icon: 'googlepubsub' },
          { label: 'RabbitMQ', icon: 'rabbitmq' },
          { label: 'MQTT', icon: 'mqtt' },
        ],
      },
      {
        name: 'Systèmes & observabilité',
        items: [
          { label: 'Administration Linux', icon: 'linux' },
          { label: 'Administration Windows', icon: 'windows' },
          { label: 'VMware ESXi & vCenter', icon: 'vmware' },
          { label: 'Python', icon: 'python' },
          { label: 'Bash', icon: 'gnubash' },
          { label: 'Prometheus', icon: 'prometheus' },
          { label: 'Grafana', icon: 'grafana' },
          { label: 'OpenTelemetry', icon: 'opentelemetry' },
          { label: 'Monitoring Centreon', icon: 'centreon' },
        ],
      },
    ],
  },
  contact: {
    key: 'contact',
    heading: 'Me contacter',
    body: 'Besoin d’un conseil IT ? Ou tout simplement discuter ?',
    button: 'Envoyez-moi un message',
    locationLabel: 'Localisation',
    emailLabel: 'Email',
    githubLabel: 'GitHub',
    linkedinLabel: 'LinkedIn',
  },
  footer: {
    madeWith: 'Fait avec',
  },
  a11y: {
    skipToContent: 'Aller au contenu',
    languageMenu: 'Langue',
    openMenu: 'Ouvrir le menu',
  },
};

export default fr;
