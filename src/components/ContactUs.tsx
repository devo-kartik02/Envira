// Contact.tsx
import React, { useState } from 'react';
import { Mail, User, MessageSquare } from 'lucide-react';
import toast from 'react-hot-toast';

const Contact: React.FC = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Message sent successfully!');
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-blue-600">Contact Us</h2>
        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
          <Input
            icon={<User size={20} className="text-gray-400" />}
            type="text"
            placeholder="Your Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
          />
          <Input
            icon={<Mail size={20} className="text-gray-400" />}
            type="email"
            placeholder="Your Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
          />
          <TextArea
            icon={<MessageSquare size={20} className="text-gray-400" />}
            placeholder="Your Message"
            value={form.message}
            onChange={(e) => setForm({ ...form, message: e.target.value })}
          />
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-medium"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

const Input = ({
  icon,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement> & { icon: React.ReactNode }) => (
  <div className="relative">
    <div className="absolute left-3 top-2.5">{icon}</div>
    <input
      {...props}
      className="w-full pl-10 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
);

const TextArea = ({
  icon,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement> & { icon: React.ReactNode }) => (
  <div className="relative">
    <div className="absolute left-3 top-3">{icon}</div>
    <textarea
      {...props}
      rows={4}
      className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:outline-none"
    />
  </div>
);

export default Contact;
