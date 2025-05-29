import { useParams, Link } from 'react-router-dom'
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
  TagIcon
} from '@heroicons/react/24/outline'

// Technology icons mapping
const techIcons = {
  'Docker': CubeIcon,
  'CI/CD': ArrowPathIcon,
  'Kubernetes': ServerIcon,
  'Cloud': CloudIcon,
  'DevOps': CodeBracketIcon,
  'Security': ShieldCheckIcon
}

// Sample blog post data (in a real app, this would come from an API)
const blogPosts = {
  1: {
    title: 'Getting Started with Docker',
    content: `
      Docker has revolutionized the way we develop, ship, and run applications. In this comprehensive guide, we'll explore the fundamentals of Docker and containerization.

      ## What is Docker?

      Docker is a platform for developing, shipping, and running applications in containers. Containers are lightweight, portable, and self-contained units that can run anywhere Docker is installed.

      ## Key Benefits

      1. **Consistency**: Docker ensures that your application runs the same way across different environments.
      2. **Isolation**: Each container runs in isolation, preventing conflicts between dependencies.
      3. **Portability**: Containers can run on any system that has Docker installed.
      4. **Scalability**: Easy to scale applications up or down based on demand.

      ## Getting Started

      To begin using Docker, you'll need to:

      1. Install Docker on your system
      2. Create a Dockerfile
      3. Build your first container
      4. Run and manage containers

      ## Best Practices

      - Use official base images
      - Keep images small
      - Use multi-stage builds
      - Implement proper security measures
      - Follow the principle of least privilege

      ## Conclusion

      Docker is an essential tool in modern DevOps practices. By containerizing your applications, you can achieve greater consistency, portability, and scalability in your development workflow.
    `,
    date: '2024-03-15',
    category: 'Docker',
    author: 'John Doe',
    readTime: '5 min read',
    tags: ['containers', 'devops', 'docker'],
    relatedPosts: [2, 3]
  },
  // Add more blog posts as needed
}

function BlogPost() {
  const { id } = useParams()
  const post = blogPosts[id]
  const Icon = post ? techIcons[post.category] || CodeBracketIcon : null

  if (!post) {
    return (
      <div className="container py-12 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
        <Link to="/" className="btn btn-primary inline-flex items-center">
          <CodeBracketIcon className="h-5 w-5 mr-2" />
          Back to Home
        </Link>
      </div>
    )
  }

  return (
    <article className="container py-12">
      <div className="max-w-4xl mx-auto">
        <header className="mb-12">
          <div className="flex items-center space-x-2 mb-4">
            <Icon className="h-6 w-6 text-primary" />
            <span className="text-sm font-medium text-primary">{post.category}</span>
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-6">{post.title}</h1>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center">
              <UserIcon className="h-5 w-5 mr-2" />
              <span>{post.author}</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="h-5 w-5 mr-2" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center">
              <TagIcon className="h-5 w-5 mr-2" />
              <div className="flex flex-wrap gap-2">
                {post.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="px-2 py-1 bg-gray-100 text-gray-600 rounded-full"
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </header>

        <div className="prose prose-lg max-w-none">
          {post.content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('##')) {
              return (
                <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                  {paragraph.replace('##', '').trim()}
                </h2>
              )
            }
            if (paragraph.startsWith('1.') || paragraph.startsWith('-')) {
              return (
                <ul key={index} className="list-disc pl-6 mb-4 space-y-2">
                  {paragraph.split('\n').map((item, i) => (
                    <li key={i} className="text-gray-700">
                      {item.replace(/^[0-9]+\.\s*|^-\s*/, '')}
                    </li>
                  ))}
                </ul>
              )
            }
            return (
              <p key={index} className="mb-4 text-gray-700 leading-relaxed">
                {paragraph}
              </p>
            )
          })}
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Articles</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {post.relatedPosts.map((relatedId) => {
              const relatedPost = blogPosts[relatedId]
              const RelatedIcon = techIcons[relatedPost.category] || CodeBracketIcon
              return (
                <Link
                  key={relatedId}
                  to={`/post/${relatedId}`}
                  className="block p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center space-x-2 mb-3">
                    <RelatedIcon className="h-5 w-5 text-primary" />
                    <span className="text-sm font-medium text-primary">{relatedPost.category}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{relatedPost.title}</h3>
                  <p className="text-gray-600 text-sm">{relatedPost.readTime}</p>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </article>
  )
}

export default BlogPost 