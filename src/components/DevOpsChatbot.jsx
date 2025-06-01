import { useState, useRef, useEffect } from 'react'
import { 
  ChatBubbleLeftIcon,
  PaperAirplaneIcon,
  XMarkIcon,
  ArrowPathIcon
} from '@heroicons/react/24/outline'

// Sample responses for different DevOps topics
const responses = {
  kubernetes: [
    'Kubernetes is an open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications.',
    'To get started with Kubernetes, you\'ll need to understand pods, deployments, services, and namespaces. Would you like to know more about any of these concepts?',
    'Some popular Kubernetes tools include kubectl (CLI), Helm (package manager), and Lens (GUI).'
  ],
  docker: [
    'Docker is a platform for developing, shipping, and running applications in containers. It helps ensure consistency across different environments.',
    'Docker Compose is great for managing multi-container applications. It uses a YAML file to configure your application\'s services.',
    'Best practices for Docker include using official images, implementing proper security measures, and optimizing your Dockerfile layers.'
  ],
  ci_cd: [
    'CI/CD stands for Continuous Integration and Continuous Deployment. It\'s a method to frequently deliver apps to customers by introducing automation.',
    'Popular CI/CD tools include Jenkins, GitHub Actions, GitLab CI, and CircleCI.',
    'A typical CI/CD pipeline includes stages for building, testing, and deploying your application.'
  ],
  monitoring: [
    'Monitoring in DevOps involves tracking the performance and health of your applications and infrastructure.',
    'Popular monitoring tools include Prometheus, Grafana, and Datadog.',
    'Key metrics to monitor include CPU usage, memory consumption, response times, and error rates.'
  ],
  default: [
    'I\'m a DevOps assistant! I can help you with topics like Kubernetes, Docker, CI/CD, monitoring, and more. What would you like to learn about?',
    'DevOps combines software development (Dev) and IT operations (Ops) to shorten the development lifecycle and provide continuous delivery.',
    'Would you like to know more about any specific DevOps tool or practice?'
  ]
}

function DevOpsChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'assistant', content: 'Hello! I\'m your DevOps assistant. How can I help you today?' }
  ])
  const [input, setInput] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const getResponse = (message) => {
    const lowerMessage = message.toLowerCase()
    let category = 'default'

    if (lowerMessage.includes('kubernetes') || lowerMessage.includes('k8s')) {
      category = 'kubernetes'
    } else if (lowerMessage.includes('docker') || lowerMessage.includes('container')) {
      category = 'docker'
    } else if (lowerMessage.includes('ci') || lowerMessage.includes('cd') || lowerMessage.includes('pipeline')) {
      category = 'ci_cd'
    } else if (lowerMessage.includes('monitor') || lowerMessage.includes('observability')) {
      category = 'monitoring'
    }

    const categoryResponses = responses[category]
    return categoryResponses[Math.floor(Math.random() * categoryResponses.length)]
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage = { role: 'user', content: input }
    setMessages(prev => [...prev, userMessage])
    setInput('')
    setIsTyping(true)

    // Simulate AI thinking
    await new Promise(resolve => setTimeout(resolve, 1000))

    // Get and add AI response
    const response = getResponse(input)
    setMessages(prev => [...prev, { role: 'assistant', content: response }])
    setIsTyping(false)
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 bg-primary text-white p-4 rounded-full shadow-lg hover:bg-primary-dark transition-colors z-50"
      >
        <ChatBubbleLeftIcon className="h-6 w-6" />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 w-96 h-[600px] bg-white rounded-lg shadow-xl flex flex-col z-50">
          {/* Header */}
          <div className="p-4 border-b flex justify-between items-center bg-primary text-white rounded-t-lg">
            <h3 className="font-semibold">DevOps Assistant</h3>
            <button
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-gray-200 transition-colors"
            >
              <XMarkIcon className="h-5 w-5" />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.role === 'user'
                      ? 'bg-primary text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.content}
                </div>
              </div>
            ))}
            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 rounded-lg p-3">
                  <ArrowPathIcon className="h-5 w-5 animate-spin" />
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <form onSubmit={handleSubmit} className="p-4 border-t">
            <div className="flex space-x-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask about DevOps..."
                className="flex-1 border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                disabled={!input.trim() || isTyping}
                className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-colors disabled:opacity-50"
              >
                <PaperAirplaneIcon className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  )
}

export default DevOpsChatbot 