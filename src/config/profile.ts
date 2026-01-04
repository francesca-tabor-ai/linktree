export interface Link {
  id: string;
  title: string;
  url: string;
}

export interface LinkSection {
  id: string;
  title: string;
  links: Link[];
}

export interface Profile {
  name: string;
  descriptor: string;
  avatar: string;
  primaryLinks: Link[];
  projectSections: LinkSection[];
  contact: {
    email: string;
    ukMobile: string;
    usMobile: string;
  };
  footer: {
    website: string;
    linkedin: string;
  };
}

export const profileData: Profile = {
  name: 'Francesca Tabor',
  descriptor: 'AI systems, automation, applied GenAI',
  avatar: '/profile.jpg', // Replace with your image path
  
  primaryLinks: [
    {
      id: 'portfolio',
      title: 'AI Portfolio & Research',
      url: 'https://notebooklm.google.com/notebook/3fd9d1e5-7a7f-44a8-a1dc-15212dc8788e',
    },
  ],

  projectSections: [
    {
      id: 'applied-ai',
      title: 'Applied AI — Live Systems',
      links: [
        {
          id: 'cancer-support',
          title: 'Cancer Patient Support Chatbot',
          url: 'https://github.com/francesca-tabor-ai/Cancer-Patient-Support-Chatbot',
        },
        {
          id: 'rig-agent',
          title: 'RIG Conversational Agent (Live Demo)',
          url: 'https://rigchatbot-ktfrufkx.manus.space',
        },
        {
          id: 'customer-service',
          title: 'Automated Customer Service Agent',
          url: 'https://github.com/francesca-tabor-ai/Automated-Customer-Service-Agent',
        },
      ],
    },
    {
      id: 'platforms',
      title: 'Platforms & Automation',
      links: [
        {
          id: 'predictive-maintenance',
          title: 'Predictive Maintenance & Anomaly Detection',
          url: 'https://github.com/francesca-tabor-ai/AI-Network-Anomaly-Detection-Predictive-Maintenance-Platform',
        },
        {
          id: 'financial-automation',
          title: 'Back-Office Financial Automation Platform',
          url: 'https://github.com/francesca-tabor-ai/Macros-Automated-Back-Office-Financial-Automation-Platform',
        },
        {
          id: 'data-cleaning',
          title: 'GenAI Data Cleaning Platform',
          url: 'https://github.com/francesca-tabor-ai/GenAI-Data-Cleaning-Consolidation-Platform',
        },
      ],
    },
    {
      id: 'product-tools',
      title: 'Product & Workflow Tools',
      links: [
        {
          id: 'project-mgmt',
          title: 'Project Management Tool (Live App)',
          url: 'https://simple-project-management-nk1ey2564-francesca-tabors-projects.vercel.app',
        },
        {
          id: 'prd-jira',
          title: 'PRD → Jira Automation (Live Tool)',
          url: 'https://prd-to-jira.replit.app/',
        },
      ],
    },
    {
      id: 'prompt-engineering',
      title: 'Prompt Engineering & Frameworks',
      links: [
        {
          id: 'spec-driven',
          title: 'Spec-Driven Development Framework',
          url: 'https://github.com/francesca-tabor-ai/Spec-Driven-Development',
        },
        {
          id: 'prompt-runner',
          title: 'Prompt Runner (Live App)',
          url: 'https://prompt-runner--francescatabora.replit.app/',
        },
        {
          id: 'prompt-architecture',
          title: 'Prompt Architecture Artifact',
          url: 'https://claude.ai/public/artifacts/c07272d9-0fcd-4c9a-a5e7-56eead62aff2',
        },
      ],
    },
    {
      id: 'governance',
      title: 'Governance & Compliance',
      links: [
        {
          id: 'compliance-governor',
          title: 'Automated Compliance Governor (Live Demo)',
          url: 'https://automated-compliance-governor.manus.space/',
        },
        {
          id: 'claims-governance',
          title: 'Claims Governance Logic Builder (Live Demo)',
          url: 'https://claims-governance-logic-builder.manus.space/',
        },
        {
          id: 'policy-transition',
          title: 'Policy Transition Logic Validator (Live Demo)',
          url: 'https://policy-transition-logic-validator.manus.space/',
        },
      ],
    },
  ],

  contact: {
    email: 'info@francescatabor.com',
    ukMobile: '+44 796 193 0316',
    usMobile: '+1 978-943-3744',
  },

  footer: {
    website: 'https://www.francescatabor.com/',
    linkedin: 'https://www.linkedin.com/in/francescatabor/',
  },
};
