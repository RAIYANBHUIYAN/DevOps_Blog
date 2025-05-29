# DevOps Blog

A modern React-based blog website focused on DevOps topics, built with React, Vite, and Tailwind CSS.

## Features

- Modern, responsive design
- Blog post listing and individual post pages
- About page
- Docker support for easy deployment
- Optimized for production

## Prerequisites

- Node.js (v18 or later)
- npm (v8 or later)
- Docker (optional, for containerized deployment)

## Development

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd devops-blog
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Building for Production

1. Build the application:
   ```bash
   npm run build
   ```

2. Preview the production build:
   ```bash
   npm run preview
   ```

## Docker Deployment

1. Build the Docker image:
   ```bash
   docker build -t devops-blog .
   ```

2. Run the container:
   ```bash
   docker run -p 80:80 devops-blog
   ```

3. Access the application at [http://localhost](http://localhost)

## Project Structure

```
devops-blog/
├── src/
│   ├── components/     # Reusable components
│   ├── pages/         # Page components
│   ├── App.jsx        # Main application component
│   └── main.jsx       # Application entry point
├── public/            # Static assets
├── Dockerfile         # Docker configuration
├── nginx.conf         # Nginx configuration
└── package.json       # Project dependencies and scripts
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 