import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import { format } from 'date-fns'
import { 
  CubeIcon, 
  ArrowPathIcon, 
  ServerIcon,
  CloudIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  ClockIcon,
  UserIcon,
  TagIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon
} from '@heroicons/react/24/outline'

// Import custom icons
import dockerIcon from '../assets/images/docker.png'
import kubernetesIcon from '../assets/images/kubernetes.png'
import ansibleIcon from '../assets/images/ansible.png'
import grafanaIcon from '../assets/images/grafana.png'
import harborIcon from '../assets/images/harbor.png'
import jenkinsIcon from '../assets/images/jenkins.png'
import prometheusIcon from '../assets/images/prometheus.png'
import terraformIcon from '../assets/images/terraform.png'

// Technology icons mapping
const techIcons = {
  'Docker': CubeIcon,
  'CI/CD': ArrowPathIcon,
  'Kubernetes': ServerIcon,
  'Cloud': CloudIcon,
  'DevOps': CodeBracketIcon,
  'Security': ShieldCheckIcon
}

// Sample blog posts data (in a real app, this would come from an API)
const blogPosts = [
  {
    id: 1,
    title: 'Getting Started with Docker',
    excerpt: 'Learn the basics of Docker and containerization for your applications.',
    date: '2024-03-15',
    category: 'Docker',
    readTime: '5 min read',
    tags: ['containers', 'devops', 'docker'],
    author: 'Jane Doe'
  },
  {
    id: 2,
    title: 'CI/CD Best Practices',
    excerpt: 'Essential practices for implementing continuous integration and deployment.',
    date: '2024-03-14',
    category: 'CI/CD',
    readTime: '7 min read',
    tags: ['cicd', 'automation', 'best-practices'],
    author: 'John Smith'
  },
  {
    id: 3,
    title: 'Kubernetes Orchestration',
    excerpt: 'Understanding Kubernetes and container orchestration at scale.',
    date: '2024-03-13',
    category: 'Kubernetes',
    readTime: '10 min read',
    tags: ['kubernetes', 'orchestration', 'cloud-native'],
    author: 'Jane Doe'
  },
  {
    id: 4,
    title: 'AWS Cloud Infrastructure for DevOps',
    excerpt: 'Setting up scalable and reliable infrastructure on Amazon Web Services.',
    date: '2024-03-12',
    category: 'Cloud',
    readTime: '10 min read',
    tags: ['AWS', 'Cloud', 'Infrastructure'],
    author: 'John Smith'
  },
  {
    id: 5,
    title: 'DevOps Best Practices',
    excerpt: 'Essential practices for a successful DevOps culture and workflow.',
    date: '2024-03-11',
    category: 'DevOps',
    readTime: '7 min read',
    tags: ['DevOps', 'Culture', 'Practices'],
    author: 'Jane Doe'
  },
  {
    id: 6,
    title: 'Enhancing Container Security',
    excerpt: 'Key strategies and tools for securing your Docker and Kubernetes environments.',
    date: '2024-03-10',
    category: 'Security',
    readTime: '9 min read',
    tags: ['Security', 'Docker', 'Kubernetes'],
    author: 'John Smith'
  }
]

// Sample data for the scrollable section
const featuredProjects = [
  { id: 1, name: 'Kubernetes', icon: kubernetesIcon, type: 'image' },
  { id: 2, name: 'Docker', icon: dockerIcon, type: 'image' },
  { id: 3, name: 'Jenkins', icon: jenkinsIcon, type: 'image' },
  { id: 4, name: 'Terraform', icon: terraformIcon, type: 'image' },
  { id: 5, name: 'Ansible', icon: ansibleIcon, type: 'image' },
  { id: 6, name: 'Prometheus', icon: prometheusIcon, type: 'image' },
  { id: 7, name: 'Grafana', icon: grafanaIcon, type: 'image' },
  { id: 8, name: 'Harbor', icon: harborIcon, type: 'image' },
  { id: 9, name: 'Falco', icon: ShieldCheckIcon },
  { id: 10, name: 'Flux CD', icon: ArrowPathIcon }
]

function Home() {
  const [selectedRole, setSelectedRole] = useState('DevOps Engineer')
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('')

  const scrollContainerRef = useRef(null)

  useEffect(() => {
    const scrollSpeed = 50 // milliseconds per step
    const step = 1 // pixels per step
    let animationFrameId

    const scroll = () => {
      if (scrollContainerRef.current) {
        scrollContainerRef.current.scrollLeft += step

        // Reset scroll position if it reaches the end
        if (scrollContainerRef.current.scrollLeft >= scrollContainerRef.current.scrollWidth - scrollContainerRef.current.clientWidth) {
          scrollContainerRef.current.scrollLeft = 0
        }
      }
      animationFrameId = requestAnimationFrame(scroll)
    }

    animationFrameId = requestAnimationFrame(scroll)

    return () => cancelAnimationFrame(animationFrameId)
  }, []) // Empty dependency array means this effect runs once on mount and cleans up on unmount

  return (
    <div className="container mx-auto py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to the DevOps Blog</h1>
        <p className="text-lg text-gray-600">
          Your go-to source for articles on Kubernetes, Docker, CI/CD, Cloud, Security, and more.
        </p>
      </div>

      <div className="mb-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured DevOps Projects</h2>
        <div 
          ref={scrollContainerRef} 
          className="flex overflow-x-auto space-x-6 pb-4 scrollbar-none"
          style={{
            msOverflowStyle: 'none',  /* IE and Edge */
            scrollbarWidth: 'none'    /* Firefox */
          }}
        >
          {featuredProjects.map(project => (
            <div key={project.id} className="flex-shrink-0 w-48 p-4 bg-white rounded-lg shadow hover:shadow-md transition-shadow flex items-center">
              {project.type === 'image' ? (
                <img src={project.icon} alt={project.name} className="h-8 w-8 mr-3" />
              ) : (
                <project.icon className="h-8 w-8 text-primary mr-3" />
              )}
              <p className="text-sm font-semibold text-gray-700">{project.name}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => {
          const IconComponent = techIcons[post.category] || CodeBracketIcon
          return (
            <Link key={post.id} to={`/post/${post.id}`} className="block">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden h-full flex flex-col hover:shadow-md transition-shadow">
                <div className="p-6 flex-grow">
                  <div className="flex items-center text-sm font-medium text-primary mb-2">
                    {IconComponent && <IconComponent className="h-5 w-5 mr-2" />}
                    {post.category}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                  <p className="mt-3 text-base text-gray-600">{post.excerpt}</p>
                </div>
                <div className="p-6 bg-gray-50 text-sm text-gray-600 flex items-center justify-between">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <ClockIcon className="h-4 w-4 mr-1" />
                    {post.readTime}
                  </div>
                </div>
                <div className="p-6 bg-gray-50 text-sm text-gray-600 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map(tag => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Link>
          )
        })}
      </div>

      <div className="mt-12 text-center">
        <button className="btn btn-primary inline-flex items-center">
          <CodeBracketIcon className="h-5 w-5 mr-2" />
          View All Articles
        </button>
      </div>
    </div>
  )
}

export default Home 