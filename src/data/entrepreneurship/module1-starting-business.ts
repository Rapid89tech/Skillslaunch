import type { Module } from '@/types/course';

export const module1StartingBusiness: Module = {
  id: 1,
  title: 'Market Research',
  description: 'Market research is the foundation of any successful entrepreneurial venture, enabling you to identify your target customers, understand their needs, and validate your business idea. This module explores the critical steps of defining your audience, assessing demand, analyzing competitors, and gathering feedback to ensure your product or service aligns with market realities. Through practical tools like surveys, focus groups, and Minimum Viable Products (MVPs), you\'ll learn to make data-driven decisions that maximize your chances of success.',
  lessons: [
    {
      id: 1,
      title: 'Why Identifying Target Customers Is Important',
      type: 'video',
      duration: '45 minutes',
      content: {
        videoUrl: 'https://www.youtube.com/watch?v=IyQQxkyQ1Hk',
        textContent: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border-l-4 border-blue-500">
              <h3 class="text-2xl font-bold mb-4 text-blue-900 flex items-center">
                🎯 Why Identifying Target Customers Is Important
              </h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Think of target customers as your business compass 🧭 - they guide every decision you make, from product features to marketing messages. Without this direction, you're shooting arrows in the dark! 🏹
              </p>
            </div>
            
            <div class="grid gap-6 md:grid-cols-2 lg:grid-cols-1">
              <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-shadow duration-300">
                <h4 class="font-bold text-xl text-green-800 mb-3 flex items-center">
                  🎨 Tailor Your Product for the Specific Market
                </h4>
                <div class="space-y-3">
                  <p class="text-gray-700 leading-relaxed">
                    🔍 <strong>The Power of Precision:</strong> Identifying a specific target market allows you to customize your product or service to meet the unique needs of a defined group, increasing its appeal and effectiveness.
                  </p>
                  <div class="bg-white p-4 rounded-lg border border-green-200">
                    <p class="text-sm text-green-700">
                      💡 <strong>Real Example:</strong> A fitness app targeting busy professionals might prioritize quick, 15-minute workouts over lengthy gym sessions - perfectly tailored! ⏰
                    </p>
                  </div>
                  <p class="text-gray-700">
                    ✨ This tailored approach ensures your offering feels relevant and valuable, fostering stronger customer connections and higher satisfaction. Without a clear target, you risk creating a generic product that fails to stand out in a crowded market! 🌊
                  </p>
                </div>
              </div>

              <div class="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-shadow duration-300">
                <h4 class="font-bold text-xl text-purple-800 mb-3 flex items-center">
                  📢 Focus Marketing to a Specific Group
                </h4>
                <div class="space-y-3">
                  <p class="text-gray-700 leading-relaxed">
                    💰 <strong>Save Money & Boost Results:</strong> Focusing marketing efforts on a specific group saves time, money, and resources by avoiding broad, ineffective campaigns.
                  </p>
                  <div class="bg-white p-4 rounded-lg border border-purple-200">
                    <p class="text-sm text-purple-700">
                      🎯 <strong>Smart Strategy:</strong> Target young professionals for a meal delivery service? Use Instagram ads! Target seniors? Facebook might be better! 📱
                    </p>
                  </div>
                  <p class="text-gray-700">
                    📈 Targeted marketing enhances campaign performance, as tailored messages resonate more, leading to higher engagement and conversion rates. Your marketing budget works harder! 💪
                  </p>
                </div>
              </div>

              <div class="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 hover:shadow-lg transition-shadow duration-300">
                <h4 class="font-bold text-xl text-orange-800 mb-3 flex items-center">
                  🎯 Pitch Sales to the Right People
                </h4>
                <div class="space-y-3">
                  <p class="text-gray-700 leading-relaxed">
                    🚗 <strong>Location Matters:</strong> Pitching sales to the right audience ensures your efforts are directed toward those most likely to buy, avoiding wasted resources on uninterested groups.
                  </p>
                  <div class="bg-white p-4 rounded-lg border border-orange-200">
                    <p class="text-sm text-orange-700">
                      ⚠️ <strong>Avoid This Mistake:</strong> Opening a motor vehicle repair shop in an area with few vehicles = low demand and poor returns! 📉
                    </p>
                  </div>
                  <p class="text-gray-700">
                    🤝 This focus enhances sales efficiency and builds credibility, as customers feel you understand their specific needs, increasing trust and purchase likelihood! 
                  </p>
                </div>
              </div>

              <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-shadow duration-300">
                <h4 class="font-bold text-xl text-red-800 mb-3 flex items-center">
                  💸 Save Money and Resources
                </h4>
                <div class="space-y-3">
                  <p class="text-gray-700 leading-relaxed">
                    🎪 <strong>Avoid the "Everyone" Trap:</strong> Targeting a specific audience prevents the costly mistake of trying to appeal to everyone, which often leads to diluted messaging and wasted resources.
                  </p>
                  <div class="bg-white p-4 rounded-lg border border-red-200">
                    <p class="text-sm text-red-700">
                      🍰 <strong>Smart Example:</strong> A small bakery targeting health-conscious urbanites can focus on organic ingredients and local delivery, avoiding unnecessary mass-market advertising costs! 🌱
                    </p>
                  </div>
                  <p class="text-gray-700">
                    📊 This efficiency strengthens your financial position and supports sustainable growth through focused resource allocation.
                  </p>
                </div>
              </div>

              <div class="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500 hover:shadow-lg transition-shadow duration-300">
                <h4 class="font-bold text-xl text-teal-800 mb-3 flex items-center">
                  😊 Improve Customer Satisfaction
                </h4>
                <div class="space-y-3">
                  <p class="text-gray-700 leading-relaxed">
                    🎁 <strong>Feel Like It's Made for Them:</strong> Meeting the specific needs of your target customers significantly enhances their satisfaction, as your product or service feels designed for them.
                  </p>
                  <div class="bg-white p-4 rounded-lg border border-teal-200">
                    <p class="text-sm text-teal-700">
                      💻 <strong>Win-Win Scenario:</strong> Software company learns users want simpler interfaces → prioritizes user-friendly design → happier customers! 🎉
                    </p>
                  </div>
                  <p class="text-gray-700">
                    🔄 Satisfied customers become loyal advocates, leaving positive reviews and recommending your business, driving organic growth!
                  </p>
                </div>
              </div>

              <div class="bg-indigo-50 p-6 rounded-xl border-l-4 border-indigo-500 hover:shadow-lg transition-shadow duration-300">
                <h4 class="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                  ⭐ Create a Unique Value Proposition
                </h4>
                <div class="space-y-3">
                  <p class="text-gray-700 leading-relaxed">
                    🚀 <strong>Stand Out from the Crowd:</strong> A unique value proposition (UVP) clearly communicates why your product or service is the best choice for your target customers, setting you apart from competitors.
                  </p>
                  <div class="bg-white p-4 rounded-lg border border-indigo-200">
                    <p class="text-sm text-indigo-700">
                      🐕 <strong>Perfect Positioning:</strong> Pet grooming service targeting busy pet owners? Emphasize mobile, on-demand appointments - convenience wins! 📱
                    </p>
                  </div>
                  <p class="text-gray-700">
                    💡 A well-defined UVP, rooted in customer insights, drives engagement and loyalty, ensuring your business stands out in a competitive market!
                  </p>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-300">
              <h4 class="font-bold text-xl text-orange-800 mb-3 flex items-center">
                🎯 Key Takeaway
              </h4>
              <p class="text-gray-700 text-lg">
                Remember: <strong>A rifle approach beats a shotgun approach every time!</strong> 🔫 Focus your efforts, save resources, and watch your business hit the bullseye! 🎯
              </p>
            </div>
          </div>
        `
      }
    },
    {
      id: 2,
      title: 'Who Are Your Target Customers?',
      type: 'video',
      duration: '45 minutes',
      content: {
        videoUrl: 'https://youtu.be/4FtU5Se2kx0?si=8_nz_PJUGVi96Dfa',
        textContent: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-l-4 border-purple-500">
              <h3 class="text-2xl font-bold mb-4 text-purple-900 flex items-center">
                👥 Who Are Your Target Customers?
              </h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Think of customer identification like creating a dating profile - the more specific details you know, the better your match! 💕 Let's explore the four key dimensions that define your ideal customers.
              </p>
            </div>
            
            <div class="grid gap-6">
              <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
                <h4 class="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  📊 Demographic Factors - The Hard Facts
                </h4>
                <div class="space-y-4">
                  <div class="bg-white p-4 rounded-lg border border-blue-200">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      <div class="flex items-center"><span class="mr-2">👤</span> Age</div>
                      <div class="flex items-center"><span class="mr-2">⚥</span> Gender</div>
                      <div class="flex items-center"><span class="mr-2">💰</span> Income</div>
                      <div class="flex items-center"><span class="mr-2">🎓</span> Education</div>
                      <div class="flex items-center"><span class="mr-2">💼</span> Occupation</div>
                      <div class="flex items-center"><span class="mr-2">👨‍👩‍👧‍👦</span> Family Status</div>
                    </div>
                  </div>
                  <p class="text-gray-700 leading-relaxed">
                    📈 <strong>Why Demographics Matter:</strong> These provide a factual foundation for identifying your target customers, focusing on measurable characteristics that directly impact buying behavior.
                  </p>
                  <div class="bg-blue-100 p-4 rounded-lg">
                    <p class="text-blue-800 text-sm">
                      💎 <strong>Luxury Example:</strong> A luxury skincare brand might target women aged 30–50 with high incomes - they're more likely to afford premium products and value quality skincare! ✨
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-all duration-300">
                <h4 class="text-xl font-bold text-green-800 mb-4 flex items-center">
                  🌍 Geographic Factors - Location, Location, Location!
                </h4>
                <div class="space-y-4">
                  <div class="bg-white p-4 rounded-lg border border-green-200">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      <div class="flex items-center"><span class="mr-2">🏳️</span> Country</div>
                      <div class="flex items-center"><span class="mr-2">📍</span> Region</div>
                      <div class="flex items-center"><span class="mr-2">🏙️</span> City</div>
                      <div class="flex items-center"><span class="mr-2">🌾</span> Urban/Rural</div>
                      <div class="flex items-center"><span class="mr-2">🌡️</span> Climate</div>
                      <div class="flex items-center"><span class="mr-2">🏢</span> Work Location</div>
                    </div>
                  </div>
                  <p class="text-gray-700 leading-relaxed">
                    🎯 <strong>Geographic Precision:</strong> Where your customers live or work directly impacts their needs, preferences, and accessibility to your product or service.
                  </p>
                  <div class="bg-green-100 p-4 rounded-lg">
                    <p class="text-green-800 text-sm">
                      ❄️ <strong>Climate Example:</strong> A snow gear retailer should target customers in cold, inland regions rather than tropical coastal areas - makes perfect sense! 🏔️
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300">
                <h4 class="text-xl font-bold text-purple-800 mb-4 flex items-center">
                  🧠 Psychographic Factors - What Makes Them Tick?
                </h4>
                <div class="space-y-4">
                  <div class="bg-white p-4 rounded-lg border border-purple-200">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      <div class="flex items-center"><span class="mr-2">💭</span> Values</div>
                      <div class="flex items-center"><span class="mr-2">⛪</span> Beliefs</div>
                      <div class="flex items-center"><span class="mr-2">🏄‍♂️</span> Lifestyle</div>
                      <div class="flex items-center"><span class="mr-2">🎭</span> Personality</div>
                      <div class="flex items-center"><span class="mr-2">🎨</span> Interests</div>
                      <div class="flex items-center"><span class="mr-2">🏆</span> Motivations</div>
                    </div>
                  </div>
                  <p class="text-gray-700 leading-relaxed">
                    💡 <strong>The Emotional Connection:</strong> Psychographic factors delve into the internal drivers of your customers - what they care about, believe in, and aspire to become.
                  </p>
                  <div class="bg-purple-100 p-4 rounded-lg">
                    <p class="text-purple-800 text-sm">
                      🌱 <strong>Sustainability Example:</strong> A sustainable fashion brand targets eco-conscious consumers who prioritize environmental values and minimalist lifestyles - alignment is everything! ♻️
                    </p>
                  </div>
                </div>
              </div>

              <div class="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300">
                <h4 class="text-xl font-bold text-orange-800 mb-4 flex items-center">
                  🛒 Behavioral Factors - Actions Speak Louder!
                </h4>
                <div class="space-y-4">
                  <div class="bg-white p-4 rounded-lg border border-orange-200">
                    <div class="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
                      <div class="flex items-center"><span class="mr-2">🛍️</span> Buying Habits</div>
                      <div class="flex items-center"><span class="mr-2">❤️</span> Brand Loyalty</div>
                      <div class="flex items-center"><span class="mr-2">📈</span> Usage Rates</div>
                      <div class="flex items-center"><span class="mr-2">🎁</span> Benefits Sought</div>
                      <div class="flex items-center"><span class="mr-2">⚡</span> Adoption Speed</div>
                      <div class="flex items-center"><span class="mr-2">💳</span> Payment Preferences</div>
                    </div>
                  </div>
                  <p class="text-gray-700 leading-relaxed">
                    📱 <strong>Real Behavior Insights:</strong> How customers actually interact with products or services - their habits, preferences, and decision-making patterns.
                  </p>
                  <div class="bg-orange-100 p-4 rounded-lg">
                    <p class="text-orange-800 text-sm">
                      ☕ <strong>Coffee Shop Example:</strong> Target heavy caffeine users who value convenience and frequently order online - loyalty programs and mobile apps would be perfect! 📱
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-xl border-2 border-indigo-300">
              <h4 class="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                🎯 Pro Tip: The Perfect Customer Profile
              </h4>
              <p class="text-gray-700 text-lg mb-3">
                Combine all four factors to create a crystal-clear picture of your ideal customer! 🖼️
              </p>
              <div class="bg-white p-4 rounded-lg border border-indigo-200">
                <p class="text-indigo-800 font-medium text-sm">
                  Example: "Sarah, 32, Marketing Manager (Demo) in urban Chicago (Geo), values sustainability and convenience (Psycho), shops online weekly and seeks time-saving solutions (Behavioral)" 👩‍💼
                </p>
              </div>
            </div>
          </div>
        `
      }
    },
    {
      id: 3,
      title: 'Understanding Customer Needs',
      type: 'video',
      duration: '45 minutes',
      content: {
        videoUrl: '',
        textContent: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-emerald-50 to-teal-50 p-6 rounded-xl border-l-4 border-emerald-500">
              <h3 class="text-2xl font-bold mb-4 text-emerald-900 flex items-center">
                🔍 Understanding Customer Needs - The Detective Work
              </h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Think of yourself as a customer detective 🕵️‍♂️ - your job is to uncover what customers really want, need, and struggle with. The better you understand their world, the better you can serve them!
              </p>
            </div>
            
            <div class="grid gap-6">
              <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 class="text-xl font-bold text-red-800 mb-4 flex items-center">
                  🚨 Problem Identification - What's Keeping Them Up at Night?
                </h4>
                <div class="space-y-4">
                  <p class="text-gray-700 leading-relaxed">
                    🎯 <strong>The Pain Hunt:</strong> Identifying customer problems involves pinpointing the specific difficulties or frustrations they face, which your product or service can address.
                  </p>
                  <div class="bg-white p-4 rounded-lg border-l-4 border-red-200">
                    <p class="text-red-700 text-sm mb-2">
                      ⏰ <strong>Real Problem Example:</strong>
                    </p>
                    <p class="text-gray-600 text-sm">
                      "Customers express frustration with long wait times for customer support" → Opportunity for a chatbot or faster response system! 🤖
                    </p>
                  </div>
                  <div class="bg-red-100 p-4 rounded-lg">
                    <h5 class="font-semibold text-red-800 mb-2">🔍 How to Find Problems:</h5>
                    <ul class="text-sm text-red-700 space-y-1">
                      <li>• 📋 Survey customers directly</li>
                      <li>• 🎤 Conduct interviews</li>
                      <li>• 📱 Monitor social media complaints</li>
                      <li>• 📊 Analyze support tickets</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 class="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  🎯 Desired Outcomes - What Success Looks Like to Them
                </h4>
                <div class="space-y-4">
                  <p class="text-gray-700 leading-relaxed">
                    ✨ <strong>The Dream State:</strong> Desired outcomes are the improvements or results customers seek from a product or service - their definition of success!
                  </p>
                  <div class="bg-white p-4 rounded-lg border-l-4 border-blue-200">
                    <p class="text-blue-700 text-sm mb-2">
                      🌙 <strong>24/7 Support Example:</strong>
                    </p>
                    <p class="text-gray-600 text-sm">
                      "Customers want 24/7 access to support to fit their busy schedules" → Always-available chatbot or global support team! 🌍
                    </p>
                  </div>
                  <div class="bg-blue-100 p-4 rounded-lg">
                    <h5 class="font-semibold text-blue-800 mb-2">🎁 Common Desired Outcomes:</h5>
                    <div class="grid grid-cols-2 gap-2 text-sm text-blue-700">
                      <div>⚡ Faster service</div>
                      <div>💰 Cost savings</div>
                      <div>🎯 Better results</div>
                      <div>⏰ Time savings</div>
                      <div>🛡️ More security</div>
                      <div>😊 Better experience</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 class="text-xl font-bold text-yellow-800 mb-4 flex items-center">
                  🕳️ Unmet Needs / Market Gaps - The Golden Opportunities
                </h4>
                <div class="space-y-4">
                  <p class="text-gray-700 leading-relaxed">
                    💡 <strong>Hidden Opportunities:</strong> Unmet needs represent gaps in current market solutions where existing products or services fail to fully satisfy customer demands.
                  </p>
                  <div class="bg-white p-4 rounded-lg border-l-4 border-yellow-200">
                    <p class="text-yellow-700 text-sm mb-2">
                      💻 <strong>Software Gap Example:</strong>
                    </p>
                    <p class="text-gray-600 text-sm">
                      "Existing software is too expensive AND lacks adequate support" → Opportunity for affordable software with excellent support! 🎯
                    </p>
                  </div>
                  <div class="bg-yellow-100 p-4 rounded-lg">
                    <h5 class="font-semibold text-yellow-800 mb-2">🔍 How to Spot Gaps:</h5>
                    <ul class="text-sm text-yellow-700 space-y-1">
                      <li>• 📊 Analyze competitor reviews</li>
                      <li>• 🗣️ Listen to customer complaints</li>
                      <li>• 📈 Study market trends</li>
                      <li>• 💬 Join customer forums</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 class="text-xl font-bold text-purple-800 mb-4 flex items-center">
                  😤 Customer Pain Points - The Roadblocks to Success
                </h4>
                <div class="space-y-4">
                  <p class="text-gray-700 leading-relaxed">
                    🚧 <strong>Barrier Breakdown:</strong> Customer pain points are specific obstacles or barriers that prevent customers from achieving their goals.
                  </p>
                  <div class="bg-white p-4 rounded-lg border-l-4 border-purple-200">
                    <p class="text-purple-700 text-sm mb-2">
                      🖥️ <strong>Complex Interface Example:</strong>
                    </p>
                    <p class="text-gray-600 text-sm">
                      "Users struggle with software that's difficult to navigate" → Solution: Intuitive, user-friendly interface design! 🎨
                    </p>
                  </div>
                  <div class="bg-purple-100 p-4 rounded-lg">
                    <h5 class="font-semibold text-purple-800 mb-2">🔨 Common Pain Point Categories:</h5>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                      <div class="bg-white p-3 rounded border">
                        <div class="font-medium text-purple-700 mb-1">💸 Financial Pain</div>
                        <div class="text-gray-600">Too expensive, hidden costs</div>
                      </div>
                      <div class="bg-white p-3 rounded border">
                        <div class="font-medium text-purple-700 mb-1">⏱️ Time Pain</div>
                        <div class="text-gray-600">Too slow, complicated process</div>
                      </div>
                      <div class="bg-white p-3 rounded border">
                        <div class="font-medium text-purple-700 mb-1">🤝 Support Pain</div>
                        <div class="text-gray-600">Poor customer service</div>
                      </div>
                      <div class="bg-white p-3 rounded border">
                        <div class="font-medium text-purple-700 mb-1">🔧 Process Pain</div>
                        <div class="text-gray-600">Difficult to use, confusing</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-2 border-indigo-300">
              <h4 class="font-bold text-xl text-indigo-800 mb-3 flex items-center">
                🎯 The Customer Needs Formula
              </h4>
              <div class="bg-white p-4 rounded-lg border border-indigo-200">
                <p class="text-indigo-800 font-medium text-center text-lg">
                  Problems + Desired Outcomes - Current Gaps = Your Business Opportunity! 🚀
                </p>
              </div>
              <p class="text-gray-700 mt-3 text-center">
                Master this formula, and you'll never run out of business ideas! 💡
              </p>
            </div>
          </div>
        `
      }
    },
    {
      id: 4,
      title: 'Methods to Identify Customers and Their Needs',
      type: 'video',
      duration: '45 minutes',
      content: {
        videoUrl: '',
        textContent: `
          <div class="space-y-8">
            <div class="bg-gradient-to-r from-cyan-50 to-blue-50 p-6 rounded-xl border-l-4 border-cyan-500">
              <h3 class="text-2xl font-bold mb-4 text-cyan-900 flex items-center">
                🔬 Research Methods - Your Customer Discovery Toolkit
              </h3>
              <p class="text-gray-700 text-lg leading-relaxed">
                Time to put on your researcher hat! 🎓 These methods are your weapons of choice for uncovering customer insights. Each tool serves a different purpose - let's master them all! 🛠️
              </p>
            </div>
            
            <div class="grid gap-6">
              <div class="bg-green-50 p-6 rounded-xl border-l-4 border-green-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 class="text-xl font-bold text-green-800 mb-4 flex items-center">
                  📋 Surveys & Questionnaires - The Numbers Game
                </h4>
                <div class="space-y-4">
                  <p class="text-gray-700 leading-relaxed">
                    📊 <strong>Scale & Speed:</strong> Structured tools to gather preferences, satisfaction levels, and demographic data from potential customers quickly and cost-effectively.
                  </p>
                  <div class="bg-white p-4 rounded-lg border-l-4 border-green-200">
                    <div class="grid md:grid-cols-2 gap-4">
                      <div>
                        <h5 class="font-semibold text-green-700 mb-2">📈 Quantitative Insights:</h5>
                        <p class="text-sm text-gray-600">"70% prefer online shopping"</p>
                      </div>
                      <div>
                        <h5 class="font-semibold text-green-700 mb-2">💭 Qualitative Feedback:</h5>
                        <p class="text-sm text-gray-600">"Reasons for dissatisfaction"</p>
                      </div>
                    </div>
                  </div>
                  <div class="bg-green-100 p-4 rounded-lg">
                    <h5 class="font-semibold text-green-800 mb-2">🛠️ Best Tools:</h5>
                    <div class="flex flex-wrap gap-2 text-sm">
                      <span class="bg-white px-3 py-1 rounded-full border border-green-300">📝 Google Forms</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-green-300">⚡ Typeform</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-green-300">📊 SurveyMonkey</span>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-blue-50 p-6 rounded-xl border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 class="text-xl font-bold text-blue-800 mb-4 flex items-center">
                  🎤 Interviews - The Deep Dive
                </h4>
                <div class="space-y-4">
                  <p class="text-gray-700 leading-relaxed">
                    🔍 <strong>Go Deeper:</strong> One-on-one conversations that uncover the "why" behind customer behaviors, motivations, and challenges.
                  </p>
                  <div class="bg-white p-4 rounded-lg border-l-4 border-blue-200">
                    <p class="text-blue-700 text-sm mb-2">
                      💡 <strong>Power Question Example:</strong>
                    </p>
                    <p class="text-gray-600 text-sm italic">
                      "Tell me about the last time you struggled with [problem]. What was that experience like for you?" 🤔
                    </p>
                  </div>
                  <div class="bg-blue-100 p-4 rounded-lg">
                    <h5 class="font-semibold text-blue-800 mb-2">✨ Interview Superpowers:</h5>
                    <ul class="text-sm text-blue-700 space-y-1">
                      <li>• 🎯 Uncover emotional needs surveys miss</li>
                      <li>• 🤝 Build rapport and trust</li>
                      <li>• 🔄 Follow interesting threads with follow-up questions</li>
                      <li>• 📱 Record insights for later analysis (with permission!)</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div class="bg-purple-50 p-6 rounded-xl border-l-4 border-purple-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 class="text-xl font-bold text-purple-800 mb-4 flex items-center">
                  👥 Focus Groups - The Group Dynamic
                </h4>
                <div class="space-y-4">
                  <p class="text-gray-700 leading-relaxed">
                    🗨️ <strong>Collective Wisdom:</strong> Moderated discussions with 5–10 target customers to explore opinions, reactions, and needs through group interaction.
                  </p>
                  <div class="bg-white p-4 rounded-lg border-l-4 border-purple-200">
                    <p class="text-purple-700 text-sm mb-2">
                      🍽️ <strong>Meal Kit Example:</strong>
                    </p>
                   pele>
                    <p class="text-gray-600 text-sm">
                      Focus group reveals preferences for flexible subscriptions, weekend delivery options, and family-sized portions! 📦
                    </p>
                  </div>
                  <div class="bg-purple-100 p-4 rounded-lg">
                    <h5 class="font-semibold text-purple-800 mb-2">🎭 Group Magic:</h5>
                    <div class="grid md:grid-cols-2 gap-3 text-sm text-purple-700">
                      <div>✨ Ideas spark from other ideas</div>
                      <div>🎯 Reveal diverse perspectives</div>
                      <div>🚀 Test concepts in real-time</div>
                      <div>💡 Uncover new use cases</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-orange-50 p-6 rounded-xl border-l-4 border-orange-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 class="text-xl font-bold text-orange-800 mb-4 flex items-center">
                  👀 Observation - The Silent Watcher
                </h4>
                <div class="space-y-4">
                  <p class="text-gray-700 leading-relaxed">
                    🕵️ <strong>Actions Over Words:</strong> Watch customers in real settings to understand their actual behaviors, not just what they say they do!
                  </p>
                  <div class="bg-white p-4 rounded-lg border-l-4 border-orange-200">
                    <p class="text-orange-700 text-sm mb-2">
                      🛒 <strong>Shopping Behavior Example:</strong>
                    </p>
                    <p class="text-gray-600 text-sm">
                      Shoppers avoid complex products with too many options → Need for simplified, clear product presentation! 🎯
                    </p>
                  </div>
                  <div class="bg-orange-100 p-4 rounded-lg">
                    <h5 class="font-semibold text-orange-800 mb-2">👁️ Observation Opportunities:</h5>
                    <div class="grid md:grid-cols-2 gap-3 text-sm">
                      <div class="bg-white p-2 rounded border">🏪 In-store behavior</div>
                      <div class="bg-white p-2 rounded border">💻 Website interactions</div>
                      <div class="bg-white p-2 rounded border">📱 App usage patterns</div>
                      <div class="bg-white p-2 rounded border">🚗 Service interactions</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-red-50 p-6 rounded-xl border-l-4 border-red-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 class="text-xl font-bold text-red-800 mb-4 flex items-center">
                  💬 Customer Feedback Analysis - The Voice of Experience
                </h4>
                <div class="space-y-4">
                  <p class="text-gray-700 leading-relaxed">
                    🔍 <strong>Goldmine of Insights:</strong> Study reviews, support tickets, and social media comments to identify patterns, complaints, and praise.
                  </p>
                  <div class="bg-white p-4 rounded-lg border-l-4 border-red-200">
                    <p class="text-red-700 text-sm mb-2">
                      🛒 <strong>Amazon Reviews Strategy:</strong>
                    </p>
                    <p class="text-gray-600 text-sm">
                      Analyze competitor reviews → "Too expensive" appears frequently → Opportunity for budget-friendly alternative! 💰
                    </p>
                  </div>
                  <div class="bg-red-100 p-4 rounded-lg">
                    <h5 class="font-semibold text-red-800 mb-2">📊 Feedback Goldmines:</h5>
                    <div class="grid md:grid-cols-3 gap-2 text-sm">
                      <div class="bg-white p-2 rounded text-center border">⭐ Review Sites</div>
                      <div class="bg-white p-2 rounded text-center border">📱 Social Media</div>
                      <div class="bg-white p-2 rounded text-center border">🎫 Support Tickets</div>
                    </div>
                  </div>
                </div>
              </div>

              <div class="bg-teal-50 p-6 rounded-xl border-l-4 border-teal-500 hover:shadow-lg transition-all duration-300 hover:scale-105">
                <h4 class="text-xl font-bold text-teal-800 mb-4 flex items-center">
                  🏆 Competitor Analysis - Know Your Rivals
                </h4>
                <div class="space-y-4">
                  <p class="text-gray-700 leading-relaxed">
                    🎯 <strong>Learn from Others:</strong> Study direct, indirect, and replacement competitors to understand market gaps and differentiation opportunities.
                  </p>
                  <div class="bg-white p-4 rounded-lg border-l-4 border-teal-200">
                    <div class="grid md:grid-cols-3 gap-4 text-sm">
                      <div class="text-center">
                        <div class="font-semibold text-teal-700 mb-1">🎯 Direct</div>
                        <div class="text-gray-600">Same product/service</div>
                      </div>
                      <div class="text-center">
                        <div class="font-semibold text-teal-700 mb-1">🔄 Indirect</div>
                        <div class="text-gray-600">Different solution, same need</div>
                      </div>
                      <div class="text-center">
                        <div class="font-semibold text-teal-700 mb-1">🔄 Replacement</div>
                        <div class="text-gray-600">Alternative approaches</div>
                      </div>
                    </div>
                  </div>
                  <div class="bg-teal-100 p-4 rounded-lg">
                    <h5 class="font-semibold text-teal-800 mb-2">🔍 Analysis Tools:</h5>
                    <div class="flex flex-wrap gap-2 text-sm">
                      <span class="bg-white px-3 py-1 rounded-full border border-teal-300">🔍 Google Search</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-teal-300">⭐ Yelp Reviews</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-teal-300">🛡️ Trustpilot</span>
                      <span class="bg-white px-3 py-1 rounded-full border border-teal-300">📊 SWOT Analysis</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="bg-gradient-to-r from-yellow-50 to-orange-50 p-6 rounded-xl border-2 border-yellow-300">
              <h4 class="font-bold text-xl text-orange-800 mb-3 flex items-center">
                🎯 Research Method Selection Guide
              </h4>
              <div class="grid md:grid-cols-2 gap-4">
                <div class="bg-white p-4 rounded-lg border border-yellow-200">
                  <h5 class="font-semibold text-yellow-800 mb-2">🚀 Quick & Broad Insights:</h5>
                  <p class="text-sm text-gray-600">Use surveys, feedback analysis, and observation</p>
                </div>
                <div class="bg-white p-4 rounded-lg border border-yellow-200">
                  <h5 class="font-semibold text-yellow-800 mb-2">🔍 Deep & Detailed Insights:</h5>
                  <p class="text-sm text-gray-600">Use interviews and focus groups</p>
                </div>
              </div>
              <p class="text-gray-700 mt-3 text-center font-medium">
                💡 Pro Tip: Mix multiple methods for the complete picture! 🖼️
              </p>
            </div>
          </div>
        `
      }
    }
  ],
  quiz: {
    title: 'Market Research Quiz',
    sections: [
      {
        type: 'multiple-choice',
        questions: [
          {
            question: 'What is the primary purpose of market research?',
            options: [
              'A) To increase product price',
              'B) To identify and understand customer needs',
              'C) To hire more staff',
              'D) To reduce taxes'
            ],
            answer: 'B) To identify and understand customer needs',
            explanation: 'Market research focuses on understanding customer needs to ensure your product or service meets market demands.'
          },
          {
            question: 'A “target market” refers to:',
            options: [
              'A) Everyone in your city',
              'B) People with the highest income',
              'C) A specific group most likely to buy your product',
              'D) Your competitors'
            ],
            answer: 'C) A specific group most likely to buy your product',
            explanation: 'A target market is a defined group of potential customers most likely to benefit from and purchase your offering.'
          },
          {
            question: 'Which of the following is NOT a method of validating a business idea?',
            options: [
              'A) Creating a landing page',
              'B) Building a full product with all features',
              'C) Conducting surveys',
              'D) Running a small test campaign'
            ],
            answer: 'B) Building a full product with all features',
            explanation: 'Validating a business idea involves testing with minimal resources, not building a complete product.'
          },
          {
            question: 'What is the main purpose of an MVP (Minimum Viable Product)?',
            options: [
              'A) To impress investors',
              'B) To test your idea with minimal resources',
              'C) To make the final version of the product',
              'D) To copy a competitor’s product'
            ],
            answer: 'B) To test your idea with minimal resources',
            explanation: 'An MVP tests the core concept efficiently, gathering feedback without extensive investment.'
          },
          {
            question: 'Which of the following best describes a focus group?',
            options: [
              'A) A one-on-one interview with an investor',
              'B) A group of random people in a public space',
              'C) A selected group discussing your product to give feedback',
              'D) An online advertisement group'
            ],
            answer: 'C) A selected group discussing your product to give feedback',
            explanation: 'A focus group involves a targeted group providing insights on your product or idea.'
          }
        ]
      },
      {
        type: 'true-false',
        questions: [
          {
            question: 'Competitor analysis helps you avoid copying other businesses.',
            answer: true,
            explanation: 'Competitor analysis helps you understand what others offer, allowing you to differentiate rather than copy.'
          },
          {
            question: 'The feedback collected during the MVP stage should only come from friends and family.',
            answer: false,
            explanation: 'Feedback during the MVP stage should come from your target audience, not just friends and family, to ensure objectivity.'
          },
          {
            question: 'A good business idea should always solve a real problem.',
            answer: true,
            explanation: 'A good business idea must address a real problem to attract customers and achieve market fit.'
          }
        ]
      },
      {
        type: 'short-answer',
        questions: [
          {
            question: 'Give two examples of tools you can use to build an MVP without coding.',
            answer: 'Examples of tools: Carrd, Google Forms',
            explanation: 'Carrd allows you to create simple landing pages to test interest, while Google Forms collects sign-ups or feedback without coding. Other examples include Canva (for mockups) or Typeform (for surveys).'
          },
          {
            question: 'Briefly explain why it is important to gather feedback from your target customers before launching the full product.',
            answer: 'Gathering feedback before launching ensures your product aligns with customer needs, reducing the risk of failure. It helps identify what customers value, dislike, or find confusing, allowing you to refine features, pricing, or marketing. This saves time and money, builds trust with early users, and uncovers opportunities to improve, ensuring a stronger market fit.',
            explanation: 'Feedback aligns the product with market demands, minimizes risks, and enhances market fit.'
          }
        ]
      }
    ]
  }
};