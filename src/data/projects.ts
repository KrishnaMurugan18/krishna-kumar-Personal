import type { ProjectItem } from '@/types'

export const projects: ProjectItem[] = [
  {
    id: 'employee-management',
    title: 'Employee Management System',
    tag: 'Full-Stack',
    description:
      'A role-based internal tool for managing employee records, departments and attendance, built to mirror real enterprise HR workflows.',
    tech: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'React'],
    features: [
      'CRUD operations for employees, departments and roles with server-side validation',
      'Role-based access control distinguishing Admin and Employee views',
      'Paginated, searchable employee directory with REST-backed filtering',
    ],
    challenges:
      'Designing a clean Hibernate entity model with the correct cascade and fetch strategies to avoid N+1 query issues at scale.',
    outcome:
      'Reduced manual record lookup time in testing scenarios and established a reusable Spring Boot + React template for future internal tools.',
    githubUrl: 'https://github.com/krishnakumar/employee-management-system',
  },
  {
    id: 'spring-rest-api',
    title: 'Spring Boot REST API',
    tag: 'Backend',
    description:
      'A production-style REST API showcasing layered architecture, JWT authentication and structured exception handling.',
    tech: ['Java', 'Spring Boot', 'Spring Security', 'JWT', 'PostgreSQL'],
    features: [
      'Stateless JWT authentication with refresh-token rotation',
      'Global exception handler returning consistent, machine-readable error payloads',
      'Versioned endpoints with OpenAPI/Swagger documentation',
    ],
    challenges:
      'Implementing secure JWT refresh-token rotation without introducing race conditions under concurrent requests.',
    outcome:
      'Delivered a documented, test-covered API template reused as the backend foundation for two later personal projects.',
    githubUrl: 'https://github.com/krishnakumar/spring-boot-rest-api',
  },
  {
    id: 'cloud-infra-automation',
    title: 'Cloud Infrastructure Automation',
    tag: 'Cloud / DevOps',
    description:
      'Infrastructure-as-code scripts to provision a small GCP environment: a Compute Engine instance, a Cloud Storage bucket and locked-down IAM roles.',
    tech: ['GCP', 'Terraform', 'IAM', 'Compute Engine', 'Linux'],
    features: [
      'Repeatable Terraform modules for compute, storage and networking resources',
      'Least-privilege IAM roles scoped per service account',
      'Startup scripts to auto-configure the instance on first boot',
    ],
    challenges:
      'Getting IAM permission scoping precise enough to follow least-privilege without breaking automated provisioning steps.',
    outcome:
      'Cut manual environment setup from a half-day task to a single `terraform apply`, directly applying ACE certification knowledge.',
    githubUrl: 'https://github.com/krishnakumar/cloud-infra-automation',
  },
  {
    id: 'portfolio-website',
    title: 'Portfolio Website',
    tag: 'Frontend',
    description:
      'This site — a performance-tuned, accessible React and TypeScript portfolio with motion design and a dark-mode-first interface.',
    tech: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Vite'],
    features: [
      'Component-driven architecture with reusable UI primitives',
      'Scroll-triggered reveal animations and an IDE-inspired hero sequence',
      'Full SEO setup: structured data, sitemap, Open Graph and Twitter cards',
    ],
    challenges:
      'Balancing rich motion design against Lighthouse performance budgets on lower-end mobile devices.',
    outcome:
      'A fast, fully responsive portfolio used as the primary link in job applications and recruiter outreach.',
    githubUrl: 'https://github.com/KrishnaMurugan18/Portfolio',
    liveUrl: 'https://krishnakumar-personelportfolio.netlify.app/',
  },
  {
    id: 'student-management',
    title: 'Student Management Application',
    tag: 'Full-Stack',
    description:
      'A college-project-turned-reference build for managing student records, grades and course enrolment.',
    tech: ['Java', 'Spring MVC', 'Hibernate', 'MySQL', 'JSP'],
    features: [
      'Enrolment workflow with course-capacity validation',
      'Grade entry with automatic GPA calculation',
      'Exportable academic transcripts as PDF',
    ],
    challenges:
      'Modelling many-to-many student-course enrolment relationships cleanly in Hibernate without duplicate join-table records.',
    outcome:
      'Served as the foundation project that built the Java and Spring fundamentals used in every later project.',
    githubUrl: 'https://github.com/krishnakumar/student-management-app',
  },
]
