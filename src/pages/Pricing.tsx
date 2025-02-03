import React from 'react';
import { Link } from 'react-router-dom';
import { Check } from 'lucide-react';

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Choose Your Learning Plan</h1>
          <p className="text-xl text-gray-600">Flexible plans to meet your learning needs</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Basic Plan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Basic</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$9.99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {basicFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/payment?plan=basic"
                className="block w-full text-center bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform scale-105 border-2 border-indigo-600">
            <div className="bg-indigo-600 text-white text-center py-2">
              <span className="text-sm font-semibold">MOST POPULAR</span>
            </div>
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Pro</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$19.99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {proFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/payment?plan=pro"
                className="block w-full text-center bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="p-8">
              <h3 className="text-2xl font-bold mb-2">Premium</h3>
              <div className="mb-6">
                <span className="text-4xl font-bold">$29.99</span>
                <span className="text-gray-600">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {premiumFeatures.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <Link
                to="/payment?plan=premium"
                className="block w-full text-center bg-indigo-600 text-white py-3 rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center mb-8">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const basicFeatures = [
  'Access to 10 courses',
  'Basic course materials',
  'Community forum access',
  'Email support',
  '720p video quality'
];

const proFeatures = [
  'Access to 50 courses',
  'Premium course materials',
  'Priority community support',
  '24/7 email & chat support',
  '1080p video quality',
  'Downloadable resources'
];

const premiumFeatures = [
  'Access to all courses',
  'Premium course materials',
  'One-on-one mentoring',
  'Priority support',
  '4K video quality',
  'Offline access',
  'Certificate of completion'
];

const faqs = [
  {
    question: 'Can I switch plans later?',
    answer: 'Yes, you can upgrade or downgrade your plan at any time. Changes will be reflected in your next billing cycle.'
  },
  {
    question: 'Is there a refund policy?',
    answer: "We offer a 30-day money-back guarantee for all our plans. If you're not satisfied, we'll provide a full refund."
  },
  {
    question: 'Do the courses have an expiration date?',
    answer: 'No, once you enroll in a course, you have lifetime access to it as long as your subscription is active.'
  },
  {
    question: 'Can I share my account?',
    answer: 'Our accounts are for individual use only. We offer special team and enterprise plans for organizations.'
  }
];

export default Pricing;