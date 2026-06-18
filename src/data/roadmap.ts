import type { RoadmapItem } from '@/types'

export const roadmap: RoadmapItem[] = [
  {
    id: 'adv-java',
    title: 'Advanced Java',
    status: 'in-progress',
    detail: 'Deepening concurrency, streams and JVM internals beyond core fundamentals.',
  },
  {
    id: 'spring-security',
    title: 'Spring Security',
    status: 'in-progress',
    detail: 'OAuth2, JWT hardening, and method-level authorization patterns.',
  },
  {
    id: 'microservices',
    title: 'Microservices Architecture',
    status: 'planned',
    detail: 'Service decomposition, API gateways and inter-service communication patterns.',
  },
  {
    id: 'docker',
    title: 'Docker',
    status: 'in-progress',
    detail: 'Containerizing Spring Boot services for consistent local-to-production parity.',
  },
  {
    id: 'kubernetes',
    title: 'Kubernetes',
    status: 'planned',
    detail: 'Orchestrating containerized services with deployments, services and autoscaling.',
  },
  {
    id: 'gcp-pro',
    title: 'GCP Professional Certifications',
    status: 'planned',
    detail: 'Advancing from Associate Cloud Engineer toward Professional Cloud Architect.',
  },
]
