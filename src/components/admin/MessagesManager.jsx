import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Mail, MailOpen, Trash2, Calendar } from 'lucide-react'
import { contactService } from '@services/supabase'
import Card from '@components/common/Card'
import Button from '@components/common/Button'
import { formatDate } from '@utils/helpers'
import toast from 'react-hot-toast'

const MessagesManager = () => {
  const [messages, setMessages] = useState([])
  const [selectedMessage, setSelectedMessage] = useState(null)

  useEffect(() => {
    loadMessages()
  }, [])

  const loadMessages = async () => {
    try {
      const { data, error } = await contactService.getAll()
      if (error) throw error
      if (data) {
        setMessages(data)
      }
    } catch (error) {
      console.error('Error loading messages:', error)
    }
  }

  const handleMarkAsRead = async (id) => {
    try {
      const { error } = await contactService.markAsRead(id)
      if (error) throw error
      
      setMessages(messages.map(m => 
        m.id === id ? { ...m, read: true } : m
      ))
      toast.success('Message marqué comme lu')
    } catch (error) {
      toast.error('Erreur')
    }
  }

  const handleDelete = async (id) => {
    if (!confirm('Supprimer ce message ?')) return

    try {
      const { error } = await contactService.delete(id)
      if (error) throw error
      
      setMessages(messages.filter(m => m.id !== id))
      setSelectedMessage(null)
      toast.success('Message supprimé')
    } catch (error) {
      toast.error('Erreur lors de la suppression')
    }
  }

  const unreadCount = messages.filter(m => !m.read).length

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-dark-900 dark:text-white mb-2">
          Messages reçus
        </h1>
        <p className="text-dark-600 dark:text-dark-400">
          {unreadCount} message(s) non lu(s) sur {messages.length}
        </p>
      </div>

      {messages.length === 0 ? (
        <Card className="p-12 text-center">
          <Mail className="w-16 h-16 text-dark-300 mx-auto mb-4" />
          <p className="text-dark-600 dark:text-dark-400">
            Aucun message pour le moment
          </p>
        </Card>
      ) : (
        <div className="grid lg:grid-cols-2 gap-6">
          {/* Messages List */}
          <div className="space-y-4">
            {messages.map((message) => (
              <motion.div
                key={message.id}
                whileHover={{ x: 5 }}
                onClick={() => {
                  setSelectedMessage(message)
                  if (!message.read) {
                    handleMarkAsRead(message.id)
                  }
                }}
              >
                <Card 
                  className={`p-4 cursor-pointer ${
                    selectedMessage?.id === message.id 
                      ? 'ring-2 ring-primary-500' 
                      : ''
                  } ${
                    !message.read 
                      ? 'bg-primary-50 dark:bg-primary-900/20' 
                      : ''
                  }`}
                >
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex items-center gap-2">
                      {message.read ? (
                        <MailOpen className="w-5 h-5 text-dark-400" />
                      ) : (
                        <Mail className="w-5 h-5 text-primary-600" />
                      )}
                      <h3 className="font-bold text-dark-900 dark:text-white">
                        {message.name}
                      </h3>
                    </div>
                    {!message.read && (
                      <span className="px-2 py-1 bg-primary-600 text-white text-xs font-semibold rounded-full">
                        New
                      </span>
                    )}
                  </div>
                  
                  <p className="text-sm text-dark-600 dark:text-dark-400 mb-2">
                    {message.email}
                  </p>
                  
                  <p className="text-sm font-semibold text-dark-900 dark:text-white mb-2">
                    {message.subject}
                  </p>
                  
                  <p className="text-sm text-dark-600 dark:text-dark-400 line-clamp-2">
                    {message.message}
                  </p>
                  
                  <div className="flex items-center gap-2 mt-3 text-xs text-dark-500">
                    <Calendar className="w-3 h-3" />
                    {formatDate(message.created_at)}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Message Detail */}
          <div className="lg:sticky lg:top-8">
            {selectedMessage ? (
              <Card className="p-6">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h2 className="text-2xl font-bold text-dark-900 dark:text-white mb-2">
                      {selectedMessage.subject}
                    </h2>
                    <p className="text-dark-600 dark:text-dark-400">
                      De: {selectedMessage.name}
                    </p>
                    <p className="text-sm text-dark-500">
                      {selectedMessage.email}
                    </p>
                  </div>
                  <Button
                    onClick={() => handleDelete(selectedMessage.id)}
                    variant="outline"
                    size="sm"
                    className="text-red-600 border-red-600"
                    icon={<Trash2 className="w-4 h-4" />}
                  />
                </div>

                <div className="mb-4 text-sm text-dark-500">
                  {formatDate(selectedMessage.created_at)}
                </div>

                <div className="prose dark:prose-invert max-w-none">
                  <p className="text-dark-700 dark:text-dark-300 whitespace-pre-wrap">
                    {selectedMessage.message}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-dark-200 dark:border-dark-700">
                  <Button
                    as="a"
                    href={`mailto:${selectedMessage.email}?subject=Re: ${selectedMessage.subject}`}
                    variant="primary"
                    className="w-full"
                  >
                    Répondre par email
                  </Button>
                </div>
              </Card>
            ) : (
              <Card className="p-12 text-center">
                <Mail className="w-16 h-16 text-dark-300 mx-auto mb-4" />
                <p className="text-dark-600 dark:text-dark-400">
                  Sélectionnez un message pour le lire
                </p>
              </Card>
            )}
          </div>
        </div>
      )}
    </div>
  )
}

export default MessagesManager
