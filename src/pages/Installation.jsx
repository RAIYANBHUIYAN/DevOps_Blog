import { useState } from 'react'
import InstallationCommands from '../components/InstallationCommands'

// Import images
import dockerIcon from '../assets/images/docker.png'
import kubernetesIcon from '../assets/images/kubernetes.png'
import jenkinsIcon from '../assets/images/jenkins.png'
import terraformIcon from '../assets/images/terraform.png'
import ansibleIcon from '../assets/images/ansible.png'
import prometheusIcon from '../assets/images/prometheus.png'
import grafanaIcon from '../assets/images/grafana.png'

const installationGuides = [
  {
    title: 'Docker',
    icon: dockerIcon,
    description: 'Install Docker to containerize your applications and streamline deployment.',
    prerequisites: [
      'A Linux-based system (Ubuntu/Debian recommended) or Windows 10/11',
      'Administrator/sudo privileges',
      'At least 2GB of free disk space',
      'Internet connection'
    ],
    steps: [
      {
        title: 'System Requirements Check',
        description: 'Before installing Docker, ensure your system meets the minimum requirements.',
        commands: [
          {
            command: '# Check system architecture\nuname -m\n\n# Check available disk space\ndf -h\n\n# Check system memory\nfree -h',
            description: 'Verify your system architecture, disk space, and memory'
          }
        ]
      },
      {
        title: 'Install Docker Engine',
        description: 'Install Docker Engine and Docker Compose on your system.',
        commands: [
          {
            command: '# Update package index\nsudo apt-get update\n\n# Install required packages\nsudo apt-get install -y \\\n    apt-transport-https \\\n    ca-certificates \\\n    curl \\\n    gnupg \\\n    lsb-release\n\n# Add Docker\'s official GPG key\ncurl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo gpg --dearmor -o /usr/share/keyrings/docker-archive-keyring.gpg\n\n# Set up the stable repository\necho \\\n  "deb [arch=$(dpkg --print-architecture) signed-by=/usr/share/keyrings/docker-archive-keyring.gpg] https://download.docker.com/linux/ubuntu \\\n  $(lsb_release -cs) stable" | sudo tee /etc/apt/sources.list.d/docker.list > /dev/null\n\n# Install Docker Engine\nsudo apt-get update\nsudo apt-get install -y docker-ce docker-ce-cli containerd.io docker-compose-plugin\n\n# Start and enable Docker service\nsudo systemctl start docker\nsudo systemctl enable docker\n\n# Verify installation\nsudo docker run hello-world',
            description: 'Complete Docker installation process for Ubuntu/Debian systems'
          },
          {
            command: '# For Windows:\n# 1. Download Docker Desktop from https://www.docker.com/products/docker-desktop\n# 2. Run the installer\n# 3. Follow the installation wizard\n# 4. Restart your computer\n# 5. Open Docker Desktop\n# 6. Verify installation by opening PowerShell and running:\ndocker run hello-world',
            description: 'Step-by-step Docker Desktop installation for Windows'
          }
        ]
      },
      {
        title: 'Post-Installation Steps',
        description: 'Configure Docker for better usability and security.',
        commands: [
          {
            command: '# Add your user to the docker group (Linux only)\nsudo usermod -aG docker $USER\n\n# Log out and log back in for the group changes to take effect\n\n# Verify you can run docker without sudo\ndocker run hello-world\n\n# Configure Docker to start on boot (Linux only)\nsudo systemctl enable docker',
            description: 'Configure Docker for regular user access and automatic startup'
          }
        ]
      }
    ]
  },
  {
    title: 'Kubernetes',
    icon: kubernetesIcon,
    description: 'Set up Kubernetes for container orchestration and management.',
    prerequisites: [
      'A Linux-based system (Ubuntu/Debian recommended)',
      'Docker installed and running',
      'At least 2GB of RAM',
      'At least 20GB of free disk space',
      'Administrator/sudo privileges'
    ],
    steps: [
      {
        title: 'Install kubectl',
        description: 'Install the Kubernetes command-line tool (kubectl) to interact with your cluster.',
        commands: [
          {
            command: '# Download the latest stable kubectl release\ncurl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"\n\n# Make the binary executable\nchmod +x kubectl\n\n# Move kubectl to a directory in your PATH\nsudo mv kubectl /usr/local/bin/\n\n# Verify installation\nkubectl version --client',
            description: 'Install kubectl CLI tool for managing Kubernetes clusters'
          }
        ]
      },
      {
        title: 'Install Minikube',
        description: 'Install Minikube for local Kubernetes development and testing.',
        commands: [
          {
            command: '# Download Minikube\ncurl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64\n\n# Install Minikube\nsudo install minikube-linux-amd64 /usr/local/bin/minikube\n\n# Start Minikube\nminikube start\n\n# Verify installation\nminikube status\nkubectl cluster-info',
            description: 'Install and start Minikube for local Kubernetes development'
          }
        ]
      },
      {
        title: 'Basic Kubernetes Setup',
        description: 'Configure your Kubernetes environment and verify the installation.',
        commands: [
          {
            command: '# Enable Kubernetes dashboard\nminikube addons enable dashboard\n\n# Start the dashboard\nminikube dashboard\n\n# Create a test deployment\nkubectl create deployment hello-minikube --image=k8s.gcr.io/echoserver:1.4\n\n# Expose the deployment\nkubectl expose deployment hello-minikube --type=NodePort --port=8080\n\n# Get the service URL\nminikube service hello-minikube --url',
            description: 'Set up and verify a basic Kubernetes deployment'
          }
        ]
      }
    ]
  },
  {
    title: 'Jenkins',
    icon: jenkinsIcon,
    description: 'Set up Jenkins for continuous integration and continuous delivery.',
    prerequisites: [
      'Java Runtime Environment (JRE) 8 or 11',
      'Ubuntu/Debian system',
      'At least 4GB of RAM',
      'At least 10GB of free disk space',
      'Administrator/sudo privileges'
    ],
    steps: [
      {
        title: 'Install Java',
        description: 'Install Java Runtime Environment, which is required for Jenkins.',
        commands: [
          {
            command: '# Update package list\nsudo apt update\n\n# Install Java 11\nsudo apt install -y openjdk-11-jdk\n\n# Verify Java installation\njava -version',
            description: 'Install Java Runtime Environment for Jenkins'
          }
        ]
      },
      {
        title: 'Install Jenkins',
        description: 'Install and configure Jenkins CI/CD server.',
        commands: [
          {
            command: '# Add Jenkins repository key\nwget -q -O - https://pkg.jenkins.io/debian-stable/jenkins.io.key | sudo apt-key add -\n\n# Add Jenkins repository\nsudo sh -c \'echo deb https://pkg.jenkins.io/debian-stable binary/ > /etc/apt/sources.list.d/jenkins.list\'\n\n# Update package list\nsudo apt update\n\n# Install Jenkins\nsudo apt install -y jenkins\n\n# Start Jenkins service\nsudo systemctl start jenkins\n\n# Enable Jenkins to start on boot\nsudo systemctl enable jenkins\n\n# Check Jenkins status\nsudo systemctl status jenkins',
            description: 'Install and start Jenkins CI/CD server'
          }
        ]
      },
      {
        title: 'Initial Jenkins Setup',
        description: 'Complete the initial Jenkins setup and security configuration.',
        commands: [
          {
            command: '# Get the initial admin password\nsudo cat /var/lib/jenkins/secrets/initialAdminPassword\n\n# Access Jenkins in your browser at:\n# http://localhost:8080\n\n# Follow the setup wizard to:\n# 1. Enter the initial admin password\n# 2. Install recommended plugins\n# 3. Create an admin user\n# 4. Configure Jenkins URL',
            description: 'Complete the initial Jenkins setup process'
          }
        ]
      }
    ]
  },
  {
    title: 'Terraform',
    icon: terraformIcon,
    description: 'Install Terraform for infrastructure as code.',
    prerequisites: [
      'Linux, macOS, or Windows system',
      'Administrator/sudo privileges',
      'At least 1GB of free disk space',
      'Internet connection'
    ],
    steps: [
      {
        title: 'Install Terraform',
        description: 'Install Terraform CLI for infrastructure management.',
        commands: [
          {
            command: '# Download Terraform\nwget https://releases.hashicorp.com/terraform/1.5.7/terraform_1.5.7_linux_amd64.zip\n\n# Install unzip if not already installed\nsudo apt install -y unzip\n\n# Unzip Terraform\nunzip terraform_1.5.7_linux_amd64.zip\n\n# Move Terraform to a directory in your PATH\nsudo mv terraform /usr/local/bin/\n\n# Verify installation\nterraform --version',
            description: 'Install Terraform CLI tool'
          }
        ]
      },
      {
        title: 'Configure Terraform',
        description: 'Set up your first Terraform project and provider configuration.',
        commands: [
          {
            command: '# Create a new directory for your Terraform project\nmkdir terraform-project\ncd terraform-project\n\n# Create a new Terraform configuration file\ncat > main.tf << EOF\nprovider "aws" {\n  region = "us-west-2"\n}\n\nresource "aws_instance" "example" {\n  ami           = "ami-0c55b159cbfafe1f0"\n  instance_type = "t2.micro"\n  tags = {\n    Name = "example-instance"\n  }\n}\nEOF\n\n# Initialize Terraform\nterraform init\n\n# Verify the configuration\nterraform plan',
            description: 'Create and initialize a basic Terraform project'
          }
        ]
      }
    ]
  },
  {
    title: 'Ansible',
    icon: ansibleIcon,
    description: 'Set up Ansible for configuration management and automation.',
    prerequisites: [
      'Ubuntu/Debian system',
      'Python 3.6 or later',
      'Administrator/sudo privileges',
      'At least 1GB of free disk space'
    ],
    steps: [
      {
        title: 'Install Ansible',
        description: 'Install Ansible and its dependencies.',
        commands: [
          {
            command: '# Update package list\nsudo apt update\n\n# Install required packages\nsudo apt install -y software-properties-common\n\n# Add Ansible repository\nsudo apt-add-repository --yes --update ppa:ansible/ansible\n\n# Install Ansible\nsudo apt install -y ansible\n\n# Verify installation\nansible --version',
            description: 'Install Ansible and its dependencies'
          }
        ]
      },
      {
        title: 'Configure Ansible',
        description: 'Set up your first Ansible inventory and playbook.',
        commands: [
          {
            command: '# Create Ansible directory structure\nmkdir -p ~/ansible-project/{inventory,playbooks}\n\n# Create a sample inventory file\ncat > ~/ansible-project/inventory/hosts << EOF\n[webservers]\nweb1 ansible_host=192.168.1.10\nweb2 ansible_host=192.168.1.11\n\n[dbservers]\ndb1 ansible_host=192.168.1.20\nEOF\n\n# Create a sample playbook\ncat > ~/ansible-project/playbooks/webserver.yml << EOF\n---\n- name: Configure web servers\n  hosts: webservers\n  become: yes\n  tasks:\n    - name: Install nginx\n      apt:\n        name: nginx\n        state: present\n        update_cache: yes\n\n    - name: Start nginx service\n      service:\n        name: nginx\n        state: started\n        enabled: yes\nEOF\n\n# Test the playbook\nansible-playbook -i ~/ansible-project/inventory/hosts ~/ansible-project/playbooks/webserver.yml --check',
            description: 'Create basic Ansible inventory and playbook structure'
          }
        ]
      }
    ]
  },
  {
    title: 'Prometheus & Grafana',
    icon: prometheusIcon,
    description: 'Install monitoring and visualization tools.',
    prerequisites: [
      'Linux system (Ubuntu/Debian recommended)',
      'At least 4GB of RAM',
      'At least 20GB of free disk space',
      'Administrator/sudo privileges',
      'Port 9090 (Prometheus) and 3000 (Grafana) available'
    ],
    steps: [
      {
        title: 'Install Prometheus',
        description: 'Install and configure Prometheus monitoring system.',
        commands: [
          {
            command: '# Create a system user for Prometheus\nsudo useradd --no-create-home --shell /bin/false prometheus\n\n# Create necessary directories\nsudo mkdir /etc/prometheus\nsudo mkdir /var/lib/prometheus\n\n# Download Prometheus\nwget https://github.com/prometheus/prometheus/releases/download/v2.45.0/prometheus-2.45.0.linux-amd64.tar.gz\n\n# Extract Prometheus\ntar xvfz prometheus-2.45.0.linux-amd64.tar.gz\n\n# Move Prometheus files\nsudo cp prometheus-2.45.0.linux-amd64/prometheus /usr/local/bin/\nsudo cp prometheus-2.45.0.linux-amd64/promtool /usr/local/bin/\nsudo cp -r prometheus-2.45.0.linux-amd64/consoles /etc/prometheus/\nsudo cp -r prometheus-2.45.0.linux-amd64/console_libraries /etc/prometheus/\n\n# Create Prometheus configuration\nsudo cat > /etc/prometheus/prometheus.yml << EOF\nglobal:\n  scrape_interval: 15s\n\nscrape_configs:\n  - job_name: \'prometheus\'\n    static_configs:\n      - targets: [\'localhost:9090\']\nEOF\n\n# Set ownership\nsudo chown -R prometheus:prometheus /etc/prometheus\nsudo chown -R prometheus:prometheus /var/lib/prometheus\n\n# Create systemd service\nsudo cat > /etc/systemd/system/prometheus.service << EOF\n[Unit]\nDescription=Prometheus\nWants=network-online.target\nAfter=network-online.target\n\n[Service]\nUser=prometheus\nGroup=prometheus\nType=simple\nExecStart=/usr/local/bin/prometheus \\\n    --config.file /etc/prometheus/prometheus.yml \\\n    --storage.tsdb.path /var/lib/prometheus/ \\\n    --web.console.templates=/etc/prometheus/consoles \\\n    --web.console.libraries=/etc/prometheus/console_libraries\n\n[Install]\nWantedBy=multi-user.target\nEOF\n\n# Start Prometheus\nsudo systemctl daemon-reload\nsudo systemctl start prometheus\nsudo systemctl enable prometheus\n\n# Verify Prometheus is running\nsudo systemctl status prometheus',
            description: 'Complete Prometheus installation and configuration'
          }
        ]
      },
      {
        title: 'Install Grafana',
        description: 'Install and configure Grafana for visualization.',
        commands: [
          {
            command: '# Install required packages\nsudo apt install -y software-properties-common wget apt-transport-https\n\n# Add Grafana repository\nwget -q -O - https://packages.grafana.com/gpg.key | sudo apt-key add -\necho "deb https://packages.grafana.com/oss/deb stable main" | sudo tee /etc/apt/sources.list.d/grafana.list\n\n# Update package list\nsudo apt update\n\n# Install Grafana\nsudo apt install -y grafana\n\n# Start Grafana\nsudo systemctl start grafana-server\nsudo systemctl enable grafana-server\n\n# Verify Grafana is running\nsudo systemctl status grafana-server\n\n# Access Grafana at http://localhost:3000\n# Default credentials:\n# Username: admin\n# Password: admin',
            description: 'Install and start Grafana server'
          }
        ]
      },
      {
        title: 'Configure Grafana with Prometheus',
        description: 'Connect Grafana to Prometheus as a data source.',
        commands: [
          {
            command: '# After logging into Grafana (http://localhost:3000):\n# 1. Go to Configuration > Data Sources\n# 2. Click "Add data source"\n# 3. Select "Prometheus"\n# 4. Set URL to: http://localhost:9090\n# 5. Click "Save & Test"\n\n# Import a sample dashboard:\n# 1. Go to Dashboards > Import\n# 2. Enter dashboard ID: 1860\n# 3. Select Prometheus as the data source\n# 4. Click "Import"',
            description: 'Connect Grafana to Prometheus and import a sample dashboard'
          }
        ]
      }
    ]
  }
]

function Installation() {
  const [selectedTool, setSelectedTool] = useState(null)
  const [selectedStep, setSelectedStep] = useState(null)

  return (
    <div className="container py-8">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">DevOps Tools Installation Guide</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {installationGuides.map((tool) => (
          <div
            key={tool.title}
            className={`bg-white rounded-lg shadow-sm p-6 cursor-pointer transition-all hover:shadow-md ${
              selectedTool === tool.title ? 'ring-2 ring-primary' : ''
            }`}
            onClick={() => {
              setSelectedTool(tool.title === selectedTool ? null : tool.title)
              setSelectedStep(null)
            }}
          >
            <div className="flex items-center space-x-4 mb-4">
              <img 
                src={tool.icon} 
                alt={`${tool.title} icon`} 
                className="h-8 w-8 object-contain"
              />
              <h2 className="text-xl font-semibold text-gray-900">{tool.title}</h2>
            </div>
            <p className="text-gray-600 mb-4">{tool.description}</p>
            
            {selectedTool === tool.title && (
              <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="font-semibold text-gray-900 mb-2">Prerequisites:</h3>
                  <ul className="list-disc list-inside space-y-1 text-gray-600">
                    {tool.prerequisites.map((prereq, index) => (
                      <li key={index}>{prereq}</li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-4">
                  {tool.steps.map((step, index) => (
                    <div key={index} className="border-t pt-4">
                      <button
                        onClick={(e) => {
                          e.stopPropagation()
                          setSelectedStep(selectedStep === index ? null : index)
                        }}
                        className="w-full text-left"
                      >
                        <h3 className="font-semibold text-gray-900 flex items-center justify-between">
                          <span>{index + 1}. {step.title}</span>
                          <span className="text-primary">
                            {selectedStep === index ? '▼' : '▶'}
                          </span>
                        </h3>
                        <p className="text-gray-600 mt-1">{step.description}</p>
                      </button>
                      
                      {selectedStep === index && (
                        <div className="mt-4">
                          <InstallationCommands commands={step.commands} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Installation 