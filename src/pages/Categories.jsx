import { Link } from 'react-router-dom'
import { 
  CubeIcon, 
  ArrowPathIcon, 
  ServerIcon,
  CloudIcon,
  CodeBracketIcon,
  ShieldCheckIcon,
  CommandLineIcon,
  BeakerIcon,
  ChartBarIcon,
  WrenchScrewdriverIcon
} from '@heroicons/react/24/outline'

const categories = [
  {
    id: 'docker',
    name: 'Docker',
    icon: CubeIcon,
    description: 'Containerization and Docker best practices',
    postCount: 12,
    color: 'bg-blue-100 text-blue-800'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    icon: ServerIcon,
    description: 'Container orchestration and management',
    postCount: 8,
    color: 'bg-indigo-100 text-indigo-800'
  },
  {
    id: 'cicd',
    name: 'CI/CD',
    icon: ArrowPathIcon,
    description: 'Continuous Integration and Deployment',
    postCount: 15,
    color: 'bg-green-100 text-green-800'
  },
  {
    id: 'cloud',
    name: 'Cloud',
    icon: CloudIcon,
    description: 'Cloud platforms and services',
    postCount: 10,
    color: 'bg-sky-100 text-sky-800'
  },
  {
    id: 'devops',
    name: 'DevOps',
    icon: CodeBracketIcon,
    description: 'DevOps practices and culture',
    postCount: 20,
    color: 'bg-purple-100 text-purple-800'
  },
  {
    id: 'security',
    name: 'Security',
    icon: ShieldCheckIcon,
    description: 'DevOps security and compliance',
    postCount: 7,
    color: 'bg-red-100 text-red-800'
  },
  {
    id: 'automation',
    name: 'Automation',
    icon: CommandLineIcon,
    description: 'Infrastructure and process automation',
    postCount: 9,
    color: 'bg-yellow-100 text-yellow-800'
  },
  {
    id: 'monitoring',
    name: 'Monitoring',
    icon: ChartBarIcon,
    description: 'Observability and monitoring tools',
    postCount: 6,
    color: 'bg-pink-100 text-pink-800'
  },
  {
    id: 'testing',
    name: 'Testing',
    icon: BeakerIcon,
    description: 'Testing strategies and tools',
    postCount: 5,
    color: 'bg-orange-100 text-orange-800'
  },
  {
    id: 'tools',
    name: 'Tools',
    icon: WrenchScrewdriverIcon,
    description: 'Essential DevOps tools and utilities',
    postCount: 14,
    color: 'bg-teal-100 text-teal-800'
  }
]

function Categories() {
  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Categories</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Explore our comprehensive collection of DevOps topics and resources
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link
            key={category.id}
            to={`/category/${category.id}`}
            className="group block"
          >
            <div className="bg-white rounded-lg shadow-sm p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <div className="flex items-start space-x-4">
                <div className={`p-3 rounded-lg ${category.color}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <h2 className="text-xl font-semibold text-gray-900 group-hover:text-primary transition-colors">
                    {category.name}
                  </h2>
                  <p className="text-gray-600 mt-1">{category.description}</p>
                  <div className="mt-4 flex items-center text-sm text-gray-500">
                    <span>{category.postCount} articles</span>
                    <svg
                      className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      <div className="mt-12 bg-gray-50 rounded-lg p-8 text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Can't find what you're looking for?
        </h2>
        <p className="text-gray-600 mb-6">
          Suggest a new category or topic you'd like to see covered on our blog.
        </p>
        <button className="btn btn-primary inline-flex items-center">
          <CodeBracketIcon className="h-5 w-5 mr-2" />
          Suggest a Topic
        </button>
      </div>
    </div>
  )
}

export default Categories 