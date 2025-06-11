import React from 'react';
import { Users, Globe, ShieldCheck } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="pt-24 pb-12 px-4 sm:px-8 lg:px-32 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-blue-700 text-center mb-4">About Envira</h1>
      <p className="text-center text-gray-600 text-lg mb-10 max-w-2xl mx-auto">
        At Envira, our mission is to protect and preserve the environment by leveraging technology to raise awareness, empower communities, and take meaningful action.
      </p>

      <div className="grid gap-10 md:grid-cols-3 mt-12">
        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
          <Globe size={40} className="mx-auto text-green-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Global Impact</h3>
          <p className="text-gray-600">
            Our platform connects people across the world to work toward a greener planet, one step at a time.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
          <Users size={40} className="mx-auto text-blue-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Community First</h3>
          <p className="text-gray-600">
            We empower local communities with resources and tools to monitor, report, and act on environmental issues.
          </p>
        </div>

        <div className="bg-white p-6 rounded-2xl shadow-md text-center hover:shadow-xl transition">
          <ShieldCheck size={40} className="mx-auto text-purple-600 mb-4" />
          <h3 className="text-xl font-semibold mb-2">Data-Driven</h3>
          <p className="text-gray-600">
            Our platform uses accurate pollution data and smart insights to guide meaningful environmental decisions.
          </p>
        </div>
      </div>

      <div className="mt-16 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-3">Join Our Mission</h2>
        <p className="text-gray-600 max-w-xl mx-auto mb-6">
          Whether you're an individual, a student, or an organization, your contribution can make a difference. Join us and be a part of the change.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md text-lg transition"
        >
          Contact Us
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
