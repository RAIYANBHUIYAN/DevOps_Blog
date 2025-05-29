function About() {
  return (
    <div className="container py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8">About DevOps Blog</h1>
        <div className="prose prose-lg">
          <p className="mb-6">
            Welcome to DevOps Blog, your go-to resource for insights, tutorials, and best practices
            in the world of DevOps, cloud computing, and modern software development.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="mb-6">
            Our mission is to help developers, operations teams, and technology enthusiasts
            navigate the complex world of DevOps and cloud technologies. We believe in sharing
            knowledge and experiences to build a stronger, more efficient tech community.
          </p>
          <h2 className="text-2xl font-semibold mb-4">What We Cover</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>Containerization and Orchestration (Docker, Kubernetes)</li>
            <li>Continuous Integration and Deployment (CI/CD)</li>
            <li>Cloud Platforms (AWS, Azure, GCP)</li>
            <li>Infrastructure as Code</li>
            <li>Monitoring and Observability</li>
            <li>DevOps Best Practices</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-4">Get Involved</h2>
          <p className="mb-6">
            We welcome contributions from the community! Whether you're a seasoned DevOps
            professional or just starting your journey, your insights and experiences can
            help others learn and grow.
          </p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <p className="mb-4">
              Have questions or suggestions? We'd love to hear from you! Reach out to us at:
            </p>
            <ul className="space-y-2">
              <li>Email: contact@devopsblog.com</li>
              <li>GitHub: github.com/devopsblog</li>
              <li>Twitter: @devopsblog</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About 