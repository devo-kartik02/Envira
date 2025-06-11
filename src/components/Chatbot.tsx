import React, { useState } from 'react';
import { MessageCircle, X, Send, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface ChatMessage {
  text: string;
  isBot: boolean;
  image?: string | null;
  source?: string | null;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<ChatMessage[]>([
    { text: "Hello! I'm Enviro. How can I help you today?", isBot: true }
  ]);
  const [isTyping, setIsTyping] = useState(false);

  const API_KEY = 'AIzaSyCbKe2Cy4JZTELJQLN0_-YcS41KBhe_xDs';
  const SEARCH_ENGINE_ID = 'c601888d1caf04531';

  const getBotReply = async (input: string): Promise<string> => {
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-pro:generateContent?key=${API_KEY}`;
    const body = { contents: [{ role: 'user', parts: [{ text: input }] }] };

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Sorry, I couldn't understand that.";
    } catch (error) {
      console.error('Gemini Error:', error);
      return "Oops! Something went wrong with the AI.";
    }
  };

  const getImageResults = async (query: string): Promise<{ imageUrl: string; source: string } | null> => {
    const url = `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${SEARCH_ENGINE_ID}&q=${encodeURIComponent(query)}&searchType=image&num=1`;

    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data?.items && data.items.length > 0) {
        return { imageUrl: data.items[0].link, source: data.items[0].image.contextLink };
      }
      return null;
    } catch (error) {
      console.error('Image API Error:', error);
      return null;
    }
  };

  const handleSend = async () => {
    if (!message.trim()) return;

    const userMsg: ChatMessage = { text: message, isBot: false };
    setMessages(prev => [...prev, userMsg]);
    setIsTyping(true);

    const [replyText, imageData] = await Promise.all([
      getBotReply(message),
      getImageResults(message)
    ]);

    const botMsg: ChatMessage = {
      text: replyText,
      isBot: true,
      image: imageData?.imageUrl || null,
      source: imageData?.source || null,
    };

    setMessages(prev => [...prev, botMsg]);
    setIsTyping(false);
  };

  return (
    <div className="fixed bottom-4 right-4 z-50">
      {!isOpen && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: 'spring', stiffness: 300 }}
          onClick={() => setIsOpen(true)}
          className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        >
          <MessageCircle size={24} />
        </motion.button>
      )}

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.9 }}
            transition={{ type: 'spring', stiffness: 100, damping: 12 }}
            className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col"
          >
            <div className="bg-blue-600 text-white p-4 rounded-t-lg flex justify-between items-center">
              <h3 className="font-semibold">Enviro</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      msg.isBot ? 'bg-gray-100 text-gray-800' : 'bg-blue-600 text-white'
                    }`}
                  >
                    {msg.text}
                    {msg.image && (
                      <div className="mt-2">
                        <img
                          src={msg.image}
                          alt="Related visual"
                          className="rounded-md max-h-40 object-cover"
                        />
                        {msg.source && (
                          <div className="text-xs mt-1">
                            <a
                              href={msg.source}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-blue-500 underline"
                            >
                              Image Source
                            </a>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}

              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 5 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex justify-start"
                >
                  <div className="bg-gray-100 text-gray-800 p-3 rounded-lg flex items-center gap-2">
                    <Loader2 className="animate-spin" size={16} />
                    Enviro is typing...
                  </div>
                </motion.div>
              )}
            </div>

            <div className="p-4 border-t">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  className="flex-1 p-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                />
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  onClick={handleSend}
                  className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700"
                >
                  {isTyping ? <Loader2 className="animate-spin" size={20} /> : <Send size={20} />}
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Chatbot;
