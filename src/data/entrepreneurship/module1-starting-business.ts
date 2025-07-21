import type { Module } from '@/types/course';

export const module1StartingBusiness: Module = {
  id: 1,
  title: 'Starting Your Own Business',
  description: 'Learn the fundamentals of identifying business opportunities, conducting market research, and validating your business ideas.',
  lessons: [
    {
      id: 1,
      title: 'Introduction to Entrepreneurship',
      type: 'video',
      duration: '45 minutes',
      content: {
        videoUrl: 'https://www.youtube.com/watch?v=uBV-UAkxDNQ',
        textContent: `
          <div class="space-y-6">
            <div class="bg-blue-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">What is Entrepreneurship?</h3>
              <p class="text-gray-700">Entrepreneurship is the process of identifying a business opportunity, developing a plan, and taking the necessary steps to establish a successful venture. This lecture will explore the key aspects of starting a business, from idea generation to execution.</p>
            </div>
            
            <div class="bg-green-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">Key Learning Outcomes</h3>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Identify and understand the mind of the entrepreneur</li>
                <li>Identify the common characteristics of an entrepreneur</li>
                <li>Recognize and gain knowledge of the development process and planning process involved in launching a new product</li>
                <li>Examine the business ecosystem and knowledge of successful business models</li>
              </ul>
            </div>
          </div>
        `
      }
    },
    {
      id: 2,
      title: 'Identifying Business Opportunities',
      type: 'video',
      duration: '60 minutes',
      content: {
        videoUrl: 'https://youtu.be/4FtU5Se2kx0',
        textContent: `
          <div class="space-y-6">
            <div class="bg-yellow-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">Key Questions to Ask</h3>
              <div class="space-y-3">
                <p class="font-medium">Before starting your business, consider:</p>
                <ul class="list-disc list-inside space-y-2 text-gray-700">
                  <li>Is my business/product/service going to solve or satisfy a market need?</li>
                  <li>Is there enough demand to make the business solution profitable?</li>
                </ul>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">Conducting a Simple Feasibility Study</h3>
              <p class="text-gray-700 mb-4">Take a walk around your community and observe what people need:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Is there a cell phone repair shop, plumbing service, hair dresser, nail technician, or electrician?</li>
                <li>If there is, is it enough to service everybody?</li>
                <li>Is the quality provided satisfactory to consumers?</li>
                <li>Talk to a cross section of the population (young, middle-aged, old, male, female)</li>
              </ul>
            </div>

            <div class="bg-red-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">Important Note</h3>
              <p class="text-gray-700">Before you select your study programme, please do this simple FEASIBILITY Study so that you can choose the right profession and skills required to satisfy the needs. Complete this course first before selecting your course of study to ensure your business success.</p>
            </div>
          </div>
        `
      }
    },
    {
      id: 3,
      title: 'Market Research and Target Customers',
      type: 'video',
      duration: '75 minutes',
      content: {
        videoUrl: 'https://youtu.be/uBV-UAkxDNQ',
        textContent: `
          <div class="space-y-6">
            <div class="bg-green-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">Why Identifying Target Customers is Important</h3>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Allows you to tailor your product for the specific market</li>
                <li>Helps focus your marketing to a specific group instead of everyone</li>
                <li>Enables targeted sales efforts (e.g., vehicle repair shop near vehicles)</li>
                <li>Saves money and resources by avoiding appeal to "everyone"</li>
                <li>Improves customer satisfaction by meeting specific needs</li>
                <li>Creates a unique value proposition for your ideal customers</li>
              </ul>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">Four Key Customer Characteristics</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded">
                  <h4 class="font-semibold mb-2">Demographic Factors</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Age groups</li>
                    <li>• Gender</li>
                    <li>• Income level</li>
                    <li>• Education level</li>
                    <li>• Occupation</li>
                    <li>• Family status</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded">
                  <h4 class="font-semibold mb-2">Geographic Factors</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Country, region, city</li>
                    <li>• Urban vs. rural</li>
                    <li>• Climate/environment</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded">
                  <h4 class="font-semibold mb-2">Psychographic Factors</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Values and beliefs</li>
                    <li>• Lifestyle choices</li>
                    <li>• Personality traits</li>
                    <li>• Interests and hobbies</li>
                  </ul>
                </div>
                <div class="bg-white p-4 rounded">
                  <h4 class="font-semibold mb-2">Behavioral Factors</h4>
                  <ul class="text-sm text-gray-600 space-y-1">
                    <li>• Buying habits</li>
                    <li>• Brand loyalty</li>
                    <li>• Usage rate</li>
                    <li>• Benefits sought</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        `
      }
    },
    {
      id: 4,
      title: 'Competitor Analysis and Industry Trends',
      type: 'video',
      duration: '60 minutes',
      content: {
        videoUrl: 'https://youtu.be/0KyCAcV_y7o',
        textContent: `
          <div class="space-y-6">
            <div class="bg-purple-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">Why Competitor Analysis Matters</h3>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Helps you understand what already exists in the market</li>
                <li>Reveals opportunities for differentiation</li>
                <li>Informs your pricing, marketing, and product strategy</li>
                <li>Allows you to anticipate market shifts and emerge as a leader</li>
              </ul>
            </div>

            <div class="bg-gray-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">Types of Competitors</h3>
              <div class="space-y-4">
                <div class="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h4 class="font-semibold">Direct Competitors</h4>
                  <p class="text-gray-600">Offer similar products/services to the same customers</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-green-500">
                  <h4 class="font-semibold">Indirect Competitors</h4>
                  <p class="text-gray-600">Offer different products/services that satisfy the same need</p>
                </div>
                <div class="bg-white p-4 rounded border-l-4 border-yellow-500">
                  <h4 class="font-semibold">Replacement Competitors</h4>
                  <p class="text-gray-600">Non-commercial alternatives (e.g., DIY solutions)</p>
                </div>
              </div>
            </div>

            <div class="bg-blue-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">Key Industry Trends to Watch</h3>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li><strong>Consumer Behavior:</strong> Preferences, values, buying habits</li>
                <li><strong>Technology:</strong> Automation, AI, blockchain, mobile apps</li>
                <li><strong>Economic Shifts:</strong> Inflation, recessions, currency trends</li>
                <li><strong>Regulatory Changes:</strong> Laws, taxes, safety regulations</li>
                <li><strong>Cultural/Social Trends:</strong> Values or lifestyle shifts</li>
              </ul>
            </div>
          </div>
        `
      }
    },
    {
      id: 5,
      title: 'Demand Assessment and Idea Validation',
      type: 'video',
      duration: '90 minutes',
      content: {
        videoUrl: 'https://www.youtube.com/watch?v=vlgN6KJJgXg',
        textContent: `
          <div class="space-y-6">
            <div class="bg-red-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">Why Demand Assessment is Crucial</h3>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Avoids investing in ideas that won't sell</li>
                <li>Helps determine the right pricing and positioning</li>
                <li>Informs marketing and sales strategies</li>
                <li>Attracts investors with proof of market potential</li>
                <li>Identifies minimum viable product (MVP) features</li>
              </ul>
            </div>

            <div class="bg-green-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">Market Size Estimation</h3>
              <div class="space-y-3">
                <div class="bg-white p-4 rounded">
                  <h4 class="font-semibold text-blue-600">TAM - Total Addressable Market</h4>
                  <p class="text-gray-600">Everyone who could possibly buy your product</p>
                </div>
                <div class="bg-white p-4 rounded">
                  <h4 class="font-semibold text-green-600">SAM - Serviceable Available Market</h4>
                  <p class="text-gray-600">People you can realistically serve (by location, income)</p>
                </div>
                <div class="bg-white p-4 rounded">
                  <h4 class="font-semibold text-purple-600">SOM - Serviceable Obtainable Market</h4>
                  <p class="text-gray-600">Your first reachable audience (early adopters)</p>
                </div>
              </div>
            </div>
          </div>
        `
      }
    },
    {
      id: 6,
      title: 'Creating Your MVP',
      type: 'video',
      duration: '75 minutes',
      content: {
        videoUrl: 'https://youtu.be/YwEEV0wHnaA',
        textContent: `
          <div class="space-y-6">
            <div class="bg-blue-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">What is an MVP?</h3>
              <p class="text-gray-700 mb-4">An MVP is the simplest version of your product or service that:</p>
              <ul class="list-disc list-inside space-y-2 text-gray-700">
                <li>Solves the core problem</li>
                <li>Delivers enough value to attract early users</li>
                <li>Allows you to test key assumptions</li>
                <li>Collects feedback for future development</li>
              </ul>
            </div>

            <div class="bg-yellow-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">MVP Types and Examples</h3>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded">
                  <h4 class="font-semibold mb-2">Landing Page</h4>
                  <p class="text-sm text-gray-600">Single webpage with call to action for email sign-ups or pre-orders</p>
                </div>
                <div class="bg-white p-4 rounded">
                  <h4 class="font-semibold mb-2">Explainer Video</h4>
                  <p class="text-sm text-gray-600">Short video showing how your product works (like Dropbox MVP)</p>
                </div>
                <div class="bg-white p-4 rounded">
                  <h4 class="font-semibold mb-2">Prototype/Mockup</h4>
                  <p class="text-sm text-gray-600">Visual demo using Figma mockups or wireframes</p>
                </div>
                <div class="bg-white p-4 rounded">
                  <h4 class="font-semibold mb-2">Manual Service</h4>
                  <p class="text-sm text-gray-600">Do the work manually while appearing automated</p>
                </div>
              </div>
            </div>

            <div class="bg-green-50 p-6 rounded-lg">
              <h3 class="text-xl font-semibold mb-4">Tools to Build MVPs</h3>
              <div class="grid md:grid-cols-3 gap-4">
                <div class="bg-white p-3 rounded text-center">
                  <h4 class="font-semibold">Carrd</h4>
                  <p class="text-xs text-gray-600">Quick landing pages</p>
                </div>
                <div class="bg-white p-3 rounded text-center">
                  <h4 class="font-semibold">Bubble</h4>
                  <p class="text-xs text-gray-600">Build web apps</p>
                </div>
                <div class="bg-white p-3 rounded text-center">
                  <h4 class="font-semibold">Glide</h4>
                  <p class="text-xs text-gray-600">Mobile apps from sheets</p>
                </div>
              </div>
            </div>
          </div>
        `
      }
    },
    {
      id: 7,
      title: 'Module 1 Assessment: Starting a Business',
      type: 'quiz',
      duration: '30 minutes',
      content: {
        questions: [
          {
            question: "What is the primary purpose of market research?",
            options: [
              "To increase product price",
              "To identify and understand customer needs",
              "To hire more staff",
              "To reduce taxes"
            ],
            correct: 1,
            explanation: "Market research helps you understand your customers' needs, preferences, and behaviors, which is essential for creating products that solve real problems."
          },
          {
            question: "A 'target market' refers to:",
            options: [
              "Everyone in your city",
              "People with the highest income",
              "A specific group most likely to buy your product",
              "Your competitors"
            ],
            correct: 2,
            explanation: "A target market is a clearly defined group of potential customers who are most likely to be interested in and purchase your product or service."
          },
          {
            question: "Which of the following is NOT a method of validating a business idea?",
            options: [
              "Creating a landing page",
              "Building a full product with all features",
              "Conducting surveys",
              "Running a small test campaign"
            ],
            correct: 1,
            explanation: "Building a full product with all features is expensive and risky. Validation should be done with minimal resources through MVPs, surveys, and small tests first."
          },
          {
            question: "What is the main purpose of an MVP (Minimum Viable Product)?",
            options: [
              "To impress investors",
              "To test your idea with minimal resources",
              "To make the final version of the product",
              "To copy a competitor's product"
            ],
            correct: 1,
            explanation: "An MVP allows you to test your core business assumptions and gather feedback from real users with minimal time and money investment."
          },
          {
            question: "Which of the following best describes a focus group?",
            options: [
              "A one-on-one interview with an investor",
              "A group of random people in a public space",
              "A selected group discussing your product to give feedback",
              "An online advertisement group"
            ],
            correct: 2,
            explanation: "A focus group is a small, carefully selected group of people from your target market who discuss and provide feedback about your product or idea."
          },
          {
            question: "Competitor analysis helps you avoid copying other businesses.",
            options: ["True", "False"],
            correct: 1,
            explanation: "False. Competitor analysis helps you understand the market, identify opportunities for differentiation, and learn from others' successes and failures, not to avoid copying them entirely."
          },
          {
            question: "The feedback collected during the MVP stage should only come from friends and family.",
            options: ["True", "False"],
            correct: 1,
            explanation: "False. Feedback should come from your actual target customers, not just friends and family who may be biased or not represent your real market."
          },
          {
            question: "A good business idea should always solve a real problem.",
            options: ["True", "False"],
            correct: 0,
            explanation: "True. Successful businesses typically solve real problems or fulfill genuine needs in the market. This ensures there's demand for your solution."
          }
        ]
      }
    }
  ]
};