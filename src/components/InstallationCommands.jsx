import { useState } from 'react'
import { ClipboardDocumentIcon, ClipboardDocumentCheckIcon } from '@heroicons/react/24/outline'

function InstallationCommands({ commands }) {
  const [copiedCommand, setCopiedCommand] = useState(null)

  const copyToClipboard = async (command, index) => {
    try {
      await navigator.clipboard.writeText(command)
      setCopiedCommand(index)
      setTimeout(() => setCopiedCommand(null), 2000)
    } catch (err) {
      console.error('Failed to copy command:', err)
    }
  }

  return (
    <div className="mt-4 space-y-4">
      <h3 className="text-lg font-semibold text-gray-900">Installation Commands</h3>
      <div className="space-y-3">
        {commands.map((cmd, index) => (
          <div key={index} className="relative">
            <div className="bg-gray-800 rounded-lg p-4">
              <div className="flex items-center justify-between">
                <code className="text-gray-100 font-mono text-sm whitespace-pre-wrap break-all">
                  {cmd.command}
                </code>
                <button
                  onClick={() => copyToClipboard(cmd.command, index)}
                  className="ml-4 p-2 text-gray-400 hover:text-white transition-colors"
                  title="Copy to clipboard"
                >
                  {copiedCommand === index ? (
                    <ClipboardDocumentCheckIcon className="h-5 w-5 text-green-400" />
                  ) : (
                    <ClipboardDocumentIcon className="h-5 w-5" />
                  )}
                </button>
              </div>
              {cmd.description && (
                <p className="mt-2 text-sm text-gray-400">{cmd.description}</p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default InstallationCommands 