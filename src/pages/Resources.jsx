import { useState } from 'react'
import { 
  BookOpenIcon,
  CommandLineIcon,
  CloudIcon,
  ServerIcon,
  ShieldCheckIcon,
  BeakerIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon,
  UserGroupIcon,
  GlobeAltIcon,
  CubeTransparentIcon,
  DocumentTextIcon,
  ChevronDownIcon,
  ChevronUpIcon
} from '@heroicons/react/24/outline'
import InstallationCommands from '../components/InstallationCommands'

const resources = [
  {
    category: 'Community & Foundations',
    icon: UserGroupIcon,
    color: 'bg-emerald-100 text-emerald-800',
    items: [
      {
        name: 'Cloud Native Computing Foundation (CNCF)',
        description: 'Home of Kubernetes and cloud native technologies',
        url: 'https://www.cncf.io',
        tags: ['kubernetes', 'cloud-native', 'foundation']
      },
      {
        name: 'Linux Foundation',
        description: 'Home of Linux and open source projects',
        url: 'https://www.linuxfoundation.org',
        tags: ['linux', 'open-source', 'foundation']
      },
      {
        name: 'Docker Hub',
        description: 'Container registry and community platform',
        url: 'https://hub.docker.com',
        tags: ['docker', 'containers', 'registry']
      },
      {
        name: 'GitHub',
        description: 'Code hosting and collaboration platform',
        url: 'https://github.com',
        tags: ['git', 'collaboration', 'open-source']
      },
      {
        name: 'Open Container Initiative (OCI)',
        description: 'Open standards for container formats and runtime',
        url: 'https://opencontainers.org',
        tags: ['containers', 'standards', 'foundation']
      },
      {
        name: 'DevOps Institute',
        description: 'Professional association for DevOps practitioners',
        url: 'https://devopsinstitute.com',
        tags: ['devops', 'certification', 'community']
      }
    ]
  },
  {
    category: 'Official Documentation',
    icon: GlobeAltIcon,
    color: 'bg-cyan-100 text-cyan-800',
    items: [
      {
        name: 'Kubernetes Documentation',
        description: 'Official Kubernetes documentation and guides',
        url: 'https://kubernetes.io/docs',
        tags: ['kubernetes', 'documentation', 'official']
      },
      {
        name: 'Docker Documentation',
        description: 'Official Docker documentation and tutorials',
        url: 'https://docs.docker.com',
        tags: ['docker', 'documentation', 'official']
      },
      {
        name: 'Linux Kernel Documentation',
        description: 'Official Linux kernel documentation',
        url: 'https://www.kernel.org/doc/html/latest',
        tags: ['linux', 'kernel', 'documentation']
      },
      {
        name: 'Git Documentation',
        description: 'Official Git documentation and reference',
        url: 'https://git-scm.com/doc',
        tags: ['git', 'documentation', 'official']
      },
      {
        name: 'CNCF Projects',
        description: 'List of all CNCF hosted and incubated projects',
        url: 'https://www.cncf.io/projects',
        tags: ['cncf', 'projects', 'cloud-native']
      }
    ]
  },
  {
    category: 'Learning Resources',
    icon: BookOpenIcon,
    color: 'bg-blue-100 text-blue-800',
    items: [
      {
        name: 'Docker Documentation',
        description: 'Official Docker documentation and tutorials',
        url: 'https://docs.docker.com',
        tags: ['docker', 'containers', 'documentation']
      },
      {
        name: 'Kubernetes.io',
        description: 'Official Kubernetes documentation and guides',
        url: 'https://kubernetes.io/docs',
        tags: ['kubernetes', 'orchestration', 'documentation']
      },
      {
        name: 'DevOps Roadmap',
        description: 'Comprehensive DevOps learning path',
        url: 'https://roadmap.sh/devops',
        tags: ['learning', 'roadmap', 'guide']
      }
    ]
  },
  {
    category: 'Cloud Platforms',
    icon: CloudIcon,
    color: 'bg-indigo-100 text-indigo-800',
    items: [
      {
        name: 'AWS DevOps',
        description: 'AWS DevOps tools and services',
        url: 'https://aws.amazon.com/devops',
        tags: ['aws', 'cloud', 'devops']
      },
      {
        name: 'Azure DevOps',
        description: 'Microsoft Azure DevOps services',
        url: 'https://azure.microsoft.com/services/devops',
        tags: ['azure', 'cloud', 'devops']
      },
      {
        name: 'Google Cloud DevOps',
        description: 'Google Cloud DevOps solutions',
        url: 'https://cloud.google.com/devops',
        tags: ['gcp', 'cloud', 'devops']
      }
    ]
  },
  {
    category: 'Monitoring & Observability',
    icon: ChartBarIcon,
    color: 'bg-green-100 text-green-800',
    items: [
      {
        name: 'Prometheus',
        description: 'Open-source monitoring and alerting',
        url: 'https://prometheus.io',
        tags: ['monitoring', 'metrics', 'alerting']
      },
      {
        name: 'Grafana',
        description: 'Open-source analytics and monitoring',
        url: 'https://grafana.com',
        tags: ['visualization', 'dashboards', 'monitoring']
      },
      {
        name: 'Datadog',
        description: 'Cloud monitoring and analytics platform',
        url: 'https://www.datadoghq.com',
        tags: ['monitoring', 'apm', 'logs']
      }
    ]
  },
  {
    category: 'Security Tools',
    icon: ShieldCheckIcon,
    color: 'bg-red-100 text-red-800',
    items: [
      {
        name: 'OWASP',
        description: 'Open Web Application Security Project',
        url: 'https://owasp.org',
        tags: ['security', 'web', 'best-practices']
      },
      {
        name: 'SonarQube',
        description: 'Code quality and security platform',
        url: 'https://www.sonarqube.org',
        tags: ['code-quality', 'security', 'analysis']
      },
      {
        name: 'HashiCorp Vault',
        description: 'Secrets management and encryption',
        url: 'https://www.vaultproject.io',
        tags: ['secrets', 'security', 'encryption']
      }
    ]
  },
  {
    category: 'CI/CD Tools',
    icon: CommandLineIcon,
    color: 'bg-yellow-100 text-yellow-800',
    items: [
      {
        name: 'Jenkins',
        description: 'Open-source automation server',
        url: 'https://www.jenkins.io',
        tags: ['ci-cd', 'automation', 'integration']
      },
      {
        name: 'GitHub Actions',
        description: 'CI/CD platform by GitHub',
        url: 'https://github.com/features/actions',
        tags: ['ci-cd', 'github', 'automation']
      },
      {
        name: 'GitLab CI/CD',
        description: 'CI/CD platform by GitLab',
        url: 'https://docs.gitlab.com/ee/ci',
        tags: ['ci-cd', 'gitlab', 'automation']
      }
    ]
  },
  {
    category: 'Testing Tools',
    icon: BeakerIcon,
    color: 'bg-purple-100 text-purple-800',
    items: [
      {
        name: 'Selenium',
        description: 'Web browser automation',
        url: 'https://www.selenium.dev',
        tags: ['testing', 'automation', 'web']
      },
      {
        name: 'JUnit',
        description: 'Unit testing framework for Java',
        url: 'https://junit.org',
        tags: ['testing', 'java', 'unit-testing']
      },
      {
        name: 'Postman',
        description: 'API testing and development',
        url: 'https://www.postman.com',
        tags: ['api', 'testing', 'development']
      }
    ]
  },
  {
    category: 'Official Container Images',
    icon: CubeTransparentIcon,
    color: 'bg-blue-100 text-blue-800',
    items: [
      {
        name: 'Docker Official Images',
        description: 'Official Docker images for popular software',
        url: 'https://hub.docker.com/search?q=&type=image&image_filter=official',
        tags: ['docker', 'containers', 'official'],
        icon: '🐳',
        installation: {
          commands: [
            {
              command: 'docker pull nginx:latest',
              description: 'Pull the latest NGINX image'
            },
            {
              command: 'docker run -d -p 80:80 --name my-nginx nginx:latest',
              description: 'Run NGINX container in detached mode'
            }
          ]
        }
      },
      {
        name: 'NGINX Official Image',
        description: 'Official NGINX web server image',
        url: 'https://hub.docker.com/_/nginx',
        tags: ['nginx', 'web-server', 'official'],
        icon: '🌐'
      },
      {
        name: 'PostgreSQL Official Image',
        description: 'Official PostgreSQL database image',
        url: 'https://hub.docker.com/_/postgres',
        tags: ['postgresql', 'database', 'official'],
        icon: '🐘',
        installation: {
          commands: [
            {
              command: 'docker pull postgres:latest',
              description: 'Pull the latest PostgreSQL image'
            },
            {
              command: 'docker run -d \\\n  --name my-postgres \\\n  -e POSTGRES_PASSWORD=mysecretpassword \\\n  -p 5432:5432 \\\n  postgres:latest',
              description: 'Run PostgreSQL container with password and port mapping'
            }
          ]
        }
      },
      {
        name: 'Redis Official Image',
        description: 'Official Redis in-memory database image',
        url: 'https://hub.docker.com/_/redis',
        tags: ['redis', 'cache', 'official'],
        icon: '🔴',
        installation: {
          commands: [
            {
              command: 'docker pull redis:latest',
              description: 'Pull the latest Redis image'
            },
            {
              command: 'docker run -d \\\n  --name my-redis \\\n  -p 6379:6379 \\\n  redis:latest',
              description: 'Run Redis container with port mapping'
            }
          ]
        }
      },
      {
        name: 'Node.js Official Image',
        description: 'Official Node.js runtime image',
        url: 'https://hub.docker.com/_/node',
        tags: ['nodejs', 'javascript', 'official'],
        icon: '🟢',
        installation: {
          commands: [
            {
              command: 'docker pull node:latest',
              description: 'Pull the latest Node.js image'
            },
            {
              command: 'docker run -it --rm \\\n  --name my-node-app \\\n  -v "$(pwd)":/usr/src/app \\\n  -w /usr/src/app \\\n  node:latest \\\n  npm init -y',
              description: 'Create a new Node.js project in a container'
            }
          ]
        }
      },
      {
        name: 'Python Official Image',
        description: 'Official Python runtime image',
        url: 'https://hub.docker.com/_/python',
        tags: ['python', 'runtime', 'official'],
        icon: '🐍'
      }
    ]
  },
  {
    category: 'Container Documentation',
    icon: DocumentTextIcon,
    color: 'bg-indigo-100 text-indigo-800',
    items: [
      {
        name: 'Docker Best Practices',
        description: 'Official Docker best practices guide',
        url: 'https://docs.docker.com/develop/dev-best-practices',
        tags: ['docker', 'best-practices', 'guide'],
        icon: '📚'
      },
      {
        name: 'Docker Security',
        description: 'Docker security best practices and guidelines',
        url: 'https://docs.docker.com/engine/security',
        tags: ['docker', 'security', 'guide'],
        icon: '🔒'
      },
      {
        name: 'Docker Compose',
        description: 'Multi-container Docker applications',
        url: 'https://docs.docker.com/compose',
        tags: ['docker-compose', 'orchestration', 'guide'],
        icon: '🎵',
        installation: {
          commands: [
            {
              command: 'curl -SL https://github.com/docker/compose/releases/download/v2.24.5/docker-compose-linux-x86_64 -o /usr/local/bin/docker-compose',
              description: 'Download Docker Compose binary'
            },
            {
              command: 'chmod +x /usr/local/bin/docker-compose',
              description: 'Make Docker Compose executable'
            },
            {
              command: 'docker-compose --version',
              description: 'Verify installation'
            }
          ]
        }
      },
      {
        name: 'Docker Swarm',
        description: 'Native clustering for Docker',
        url: 'https://docs.docker.com/engine/swarm',
        tags: ['docker-swarm', 'orchestration', 'guide'],
        icon: '🐝'
      }
    ]
  }
]

function Resources() {
  const [expandedItems, setExpandedItems] = useState({})

  const toggleItem = (itemId) => {
    setExpandedItems(prev => ({
      ...prev,
      [itemId]: !prev[itemId]
    }))
  }

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">DevOps Resources</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          A curated collection of essential tools, platforms, and learning resources for DevOps professionals
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {resources.map((category) => (
          <div key={category.category} className="bg-white rounded-lg shadow-sm overflow-hidden">
            <div className={`p-6 ${category.color}`}>
              <div className="flex items-center space-x-3">
                <category.icon className="h-6 w-6" />
                <h2 className="text-xl font-semibold">{category.category}</h2>
              </div>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {category.items.map((item, index) => (
                  <div key={item.name} className="border-b border-gray-200 last:border-0 pb-6 last:pb-0">
                    <div className="group">
                      <div className="flex items-start space-x-3">
                        <span className="text-2xl">{item.icon}</span>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-lg font-medium text-gray-900 group-hover:text-primary transition-colors"
                            >
                              {item.name}
                            </a>
                            {item.installation && (
                              <button
                                onClick={() => toggleItem(`${category.category}-${index}`)}
                                className="p-1 text-gray-400 hover:text-primary transition-colors"
                              >
                                {expandedItems[`${category.category}-${index}`] ? (
                                  <ChevronUpIcon className="h-5 w-5" />
                                ) : (
                                  <ChevronDownIcon className="h-5 w-5" />
                                )}
                              </button>
                            )}
                          </div>
                          <p className="mt-1 text-gray-600">{item.description}</p>
                          <div className="mt-2 flex flex-wrap gap-2">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                              >
                                #{tag}
                              </span>
                            ))}
                          </div>
                          {item.installation && expandedItems[`${category.category}-${index}`] && (
                            <InstallationCommands commands={item.installation.commands} />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Have a Resource to Share?
        </h2>
        <p className="text-gray-600 mb-6">
          Know a great DevOps tool or resource that should be listed here? Let us know!
        </p>
        <button className="btn btn-primary inline-flex items-center">
          <WrenchScrewdriverIcon className="h-5 w-5 mr-2" />
          Suggest a Resource
        </button>
      </div>
    </div>
  )
}

export default Resources 