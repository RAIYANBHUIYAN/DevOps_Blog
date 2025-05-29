import { useState } from 'react'
import { 
  BriefcaseIcon,
  BuildingOfficeIcon,
  MapPinIcon,
  CurrencyDollarIcon,
  ClockIcon,
  ChartBarIcon,
  ArrowTrendingUpIcon,
  ComputerDesktopIcon
} from '@heroicons/react/24/outline'

// Sample job data based on real Bangladesh market
const jobs = [
  {
    id: 1,
    title: 'Senior DevOps Engineer',
    company: 'Brain Station 23',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    salary: '৳180,000 - ৳250,000',
    experience: '5+ years',
    skills: ['Kubernetes', 'AWS', 'Terraform', 'CI/CD', 'Python', 'Docker'],
    description: 'We are looking for a Senior DevOps Engineer to help build and maintain our cloud infrastructure. The ideal candidate will have experience with containerization, orchestration, and cloud platforms.',
    posted: '2024-03-15',
    benefits: ['Health Insurance', 'Yearly Bonus', 'Remote Work', 'Learning Budget', 'Festival Bonus']
  },
  {
    id: 2,
    title: 'DevOps Lead',
    company: 'BJIT Group',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    salary: '৳250,000 - ৳350,000',
    experience: '7+ years',
    skills: ['Docker', 'Azure', 'Jenkins', 'Ansible', 'Go', 'Kubernetes'],
    description: 'Lead our DevOps team in implementing and maintaining our cloud infrastructure. Experience with large-scale distributed systems and team leadership required.',
    posted: '2024-03-14',
    benefits: ['Health Insurance', 'Provident Fund', 'Gym Membership', 'Learning Budget', 'Yearly Bonus']
  },
  {
    id: 3,
    title: 'Cloud Infrastructure Engineer',
    company: 'SSL Wireless',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    salary: '৳150,000 - ৳220,000',
    experience: '4+ years',
    skills: ['AWS', 'Terraform', 'Kubernetes', 'Prometheus', 'Grafana', 'Linux'],
    description: 'Join our team to design and implement scalable cloud infrastructure. Experience with monitoring and automation tools required.',
    posted: '2024-03-13',
    benefits: ['Health Insurance', 'Provident Fund', 'Remote Work', 'Conference Budget', 'Festival Bonus']
  },
  {
    id: 4,
    title: 'DevOps Engineer',
    company: 'Kaz Software',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    salary: '৳120,000 - ৳180,000',
    experience: '3+ years',
    skills: ['Docker', 'Jenkins', 'AWS', 'Linux', 'Shell Scripting', 'Git'],
    description: 'Looking for a DevOps Engineer to help automate our deployment processes and maintain our infrastructure.',
    posted: '2024-03-12',
    benefits: ['Health Insurance', 'Yearly Bonus', 'Learning Budget', 'Festival Bonus']
  },
  {
    id: 5,
    title: 'Site Reliability Engineer',
    company: 'Enosis Solutions',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    salary: '৳200,000 - ৳280,000',
    experience: '5+ years',
    skills: ['Kubernetes', 'Prometheus', 'ELK Stack', 'Python', 'AWS', 'Terraform'],
    description: 'Join our SRE team to ensure high availability and performance of our critical systems.',
    posted: '2024-03-11',
    benefits: ['Health Insurance', 'Provident Fund', 'Remote Work', 'Learning Budget', 'Yearly Bonus']
  },
  {
    id: 6,
    title: 'DevOps Automation Engineer',
    company: 'Aamra Technologies',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    salary: '৳160,000 - ৳230,000',
    experience: '4+ years',
    skills: ['RPA', 'Power Automate', 'Python', 'Docker', 'CI/CD', 'Azure DevOps'],
    description: 'Join our automation team to design and implement business process automation solutions. Experience with RPA tools and business process optimization required.',
    posted: '2024-03-10',
    benefits: ['Health Insurance', 'Yearly Bonus', 'Remote Work', 'Learning Budget', 'Festival Bonus', 'Performance Bonus']
  },
  {
    id: 7,
    title: 'Senior DevOps & Automation Specialist',
    company: 'DataSoft Systems',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    salary: '৳220,000 - ৳300,000',
    experience: '6+ years',
    skills: ['Kubernetes', 'Jenkins', 'Python', 'PowerShell', 'Azure', 'Business Process Automation'],
    description: 'Lead our DevOps and automation initiatives. Experience with both infrastructure automation and business process automation required.',
    posted: '2024-03-09',
    benefits: ['Health Insurance', 'Provident Fund', 'Remote Work', 'Learning Budget', 'Yearly Bonus', 'Project Bonus']
  },
  {
    id: 8,
    title: 'DevOps & RPA Engineer',
    company: 'TechnoNext',
    location: 'Dhaka, Bangladesh',
    type: 'Full-time',
    salary: '৳140,000 - ৳200,000',
    experience: '3+ years',
    skills: ['UiPath', 'Power Automate', 'Docker', 'AWS', 'Python', 'CI/CD'],
    description: 'Looking for a DevOps engineer with experience in Robotic Process Automation (RPA) to help automate both infrastructure and business processes.',
    posted: '2024-03-08',
    benefits: ['Health Insurance', 'Yearly Bonus', 'Learning Budget', 'Festival Bonus', 'Remote Work']
  }
]

// Salary data by role and experience (in BDT)
const salaryData = {
  'DevOps Engineer': {
    'Entry Level (0-2 years)': '৳80,000 - ৳120,000',
    'Mid Level (2-5 years)': '৳120,000 - ৳180,000',
    'Senior Level (5-8 years)': '৳180,000 - ৳250,000',
    'Lead/Manager (8+ years)': '৳250,000 - ৳350,000'
  },
  'Site Reliability Engineer': {
    'Entry Level (0-2 years)': '৳90,000 - ৳130,000',
    'Mid Level (2-5 years)': '৳130,000 - ৳200,000',
    'Senior Level (5-8 years)': '৳200,000 - ৳280,000',
    'Lead/Manager (8+ years)': '৳280,000 - ৳400,000'
  },
  'Cloud Engineer': {
    'Entry Level (0-2 years)': '৳70,000 - ৳110,000',
    'Mid Level (2-5 years)': '৳110,000 - ৳170,000',
    'Senior Level (5-8 years)': '৳170,000 - ৳240,000',
    'Lead/Manager (8+ years)': '৳240,000 - ৳320,000'
  }
}

// Market trends specific to Bangladesh
const marketTrends = {
  'Most In-Demand Skills': [
    'Kubernetes & Container Orchestration',
    'AWS & Cloud Platforms',
    'Infrastructure as Code (Terraform)',
    'CI/CD Pipeline Automation',
    'Business Process Automation (RPA)',
    'Monitoring & Observability'
  ],
  'Top Certifications': [
    'AWS Certified DevOps Engineer',
    'Certified Kubernetes Administrator',
    'HashiCorp Certified Terraform Associate',
    'UiPath RPA Developer',
    'Microsoft Power Platform Developer',
    'Google Cloud Professional DevOps Engineer'
  ],
  'Growth Areas': [
    'FinTech DevOps',
    'E-commerce Infrastructure',
    'Healthcare Cloud Solutions',
    'Government Digital Services',
    'Business Process Automation',
    'Startup Tech Infrastructure'
  ]
}

function Jobs() {
  const [selectedRole, setSelectedRole] = useState('DevOps Engineer')
  const [searchTerm, setSearchTerm] = useState('')
  const [locationFilter, setLocationFilter] = useState('')

  const filteredJobs = jobs.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesLocation = !locationFilter || job.location.toLowerCase().includes(locationFilter.toLowerCase())
    return matchesSearch && matchesLocation
  })

  return (
    <div className="container py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">DevOps Jobs & Salaries in Bangladesh</h1>
        <p className="text-lg text-gray-600">
          Find your next DevOps role and understand market compensation in Bangladesh
        </p>
      </div>

      {/* Search and Filters */}
      <div className="mb-8 grid gap-4 md:grid-cols-2">
        <div className="relative">
          <input
            type="text"
            placeholder="Search jobs, companies, or skills..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <BriefcaseIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" />
        </div>
        <div className="relative">
          <input
            type="text"
            placeholder="Filter by location (e.g., Dhaka)..."
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <MapPinIcon className="h-5 w-5 text-gray-400 absolute right-3 top-2.5" />
        </div>
      </div>

      {/* Salary Estimation Section */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <CurrencyDollarIcon className="h-6 w-6 mr-2 text-primary" />
          Salary Estimator (BDT)
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Select Role
            </label>
            <select
              value={selectedRole}
              onChange={(e) => setSelectedRole(e.target.value)}
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {Object.keys(salaryData).map(role => (
                <option key={role} value={role}>{role}</option>
              ))}
            </select>
          </div>
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-semibold text-gray-900 mb-3">Salary Ranges (BDT)</h3>
            {Object.entries(salaryData[selectedRole]).map(([level, range]) => (
              <div key={level} className="mb-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">{level}</span>
                  <span className="text-sm font-medium text-primary">{range}</span>
                </div>
                <div className="h-1 bg-gray-200 rounded-full mt-1">
                  <div 
                    className="h-1 bg-primary rounded-full"
                    style={{ width: `${(parseInt(range.split('-')[0].replace(/[^0-9]/g, '')) / 400) * 100}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-6">
        {filteredJobs.map(job => (
          <div key={job.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                  <div className="flex items-center text-gray-600 mt-1">
                    <BuildingOfficeIcon className="h-4 w-4 mr-1" />
                    {job.company}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-primary font-semibold">{job.salary}</div>
                  <div className="text-sm text-gray-500">{job.type}</div>
                </div>
              </div>

              <div className="mt-4 flex flex-wrap gap-4 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPinIcon className="h-4 w-4 mr-1" />
                  {job.location}
                </div>
                <div className="flex items-center">
                  <ClockIcon className="h-4 w-4 mr-1" />
                  {job.experience}
                </div>
                <div className="flex items-center">
                  <ChartBarIcon className="h-4 w-4 mr-1" />
                  Posted {new Date(job.posted).toLocaleDateString()}
                </div>
              </div>

              <p className="mt-4 text-gray-600">{job.description}</p>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Required Skills:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.skills.map(skill => (
                    <span
                      key={skill}
                      className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-4">
                <h4 className="text-sm font-medium text-gray-900 mb-2">Benefits:</h4>
                <div className="flex flex-wrap gap-2">
                  {job.benefits.map(benefit => (
                    <span
                      key={benefit}
                      className="px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full"
                    >
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-6">
                <button className="btn btn-primary w-full">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Market Trends Section */}
      <div className="mt-12 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <ArrowTrendingUpIcon className="h-6 w-6 mr-2 text-primary" />
          DevOps Market Trends in Bangladesh
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {Object.entries(marketTrends).map(([category, items]) => (
            <div key={category} className="bg-gray-50 rounded-lg p-4">
              <h3 className="font-semibold text-gray-900 mb-2">{category}</h3>
              <ul className="space-y-2">
                {items.map((item, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <ComputerDesktopIcon className="h-4 w-4 mr-2 text-primary" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Jobs 