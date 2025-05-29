import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { 
  ArrowLeftIcon,
  CalendarIcon,
  UserIcon,
  TagIcon
} from '@heroicons/react/24/outline'

// This would typically come from your backend/API
const posts = [
  {
    id: 1,
    title: 'Getting Started with Kubernetes',
    excerpt: 'Learn the basics of Kubernetes and how to deploy your first containerized application.',
    category: 'kubernetes',
    author: 'John Doe',
    date: '2024-03-15',
    tags: ['kubernetes', 'containers', 'devops']
  },
  {
    id: 2,
    title: 'Docker Best Practices',
    excerpt: 'Essential tips and best practices for working with Docker containers in production.',
    category: 'docker',
    author: 'Jane Smith',
    date: '2024-03-14',
    tags: ['docker', 'containers', 'best-practices']
  },
  // Add more posts as needed
]

function CategoryPage() {
  const { category } = useParams()
  const categoryPosts = posts.filter(post => post.category === category)

  const getCategoryTitle = (category) => {
    const titles = {
      kubernetes: 'Kubernetes',
      docker: 'Docker',
      // Add more category titles as needed
    }
    return titles[category] || category.charAt(0).toUpperCase() + category.slice(1)
  }

  return (
    <div className="container py-12">
      <div className="mb-8">
        <Link
          to="/categories"
          className="inline-flex items-center text-primary hover:text-primary-dark transition-colors"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Back to Categories
        </Link>
      </div>

      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          {getCategoryTitle(category)} Articles
        </h1>
        <p className="text-lg text-gray-600">
          Explore our collection of articles about {getCategoryTitle(category).toLowerCase()}
        </p>
      </div>

      {categoryPosts.length > 0 ? (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {categoryPosts.map((post) => (
            <article
              key={post.id}
              className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow"
            >
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">
                  <Link
                    to={`/post/${post.id}`}
                    className="hover:text-primary transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center text-sm text-gray-500 space-x-4">
                  <div className="flex items-center">
                    <UserIcon className="h-4 w-4 mr-1" />
                    {post.author}
                  </div>
                  <div className="flex items-center">
                    <CalendarIcon className="h-4 w-4 mr-1" />
                    {new Date(post.date).toLocaleDateString()}
                  </div>
                </div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full"
                    >
                      <TagIcon className="h-3 w-3 mr-1" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">
            No articles found for this category yet. Check back soon!
          </p>
        </div>
      )}
    </div>
  )
}

export default CategoryPage 