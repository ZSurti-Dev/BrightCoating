import {Award, Shield, Zap, Users, Heart, Target} from 'lucide-react'; // Added Shield to imports

function CoreValues() {

    const coreValues = [
        {
          id: 1,
          icon: <Award className="w-8 h-8" />,
          title: "Quality Excellence",
          description: "We maintain the highest standards in every coating application, ensuring superior finish and long-lasting protection."
        },
        {
          id: 2,
          icon: <Shield className="w-8 h-8" />, // Now properly imported
          title: "Integrity & Trust",
          description: "Honest communication, transparent processes, and reliable service delivery form the foundation of our relationships."
        },
        {
          id: 3,
          icon: <Zap className="w-8 h-8" />,
          title: "Innovation",
          description: "Continuously investing in cutting-edge technology and techniques to deliver superior coating solutions."
        },
        {
          id: 4,
          icon: <Users className="w-8 h-8" />,
          title: "Customer Focus",
          description: "Understanding unique needs and delivering customized solutions that exceed expectations every time."
        },
        {
          id: 5,
          icon: <Heart className="w-8 h-8" />,
          title: "Environmental Responsibility",
          description: "Committed to eco-friendly practices and sustainable coating solutions that protect both surfaces and environment."
        },
        {
          id: 6,
          icon: <Target className="w-8 h-8" />,
          title: "Precision & Accuracy",
          description: "Meticulous attention to detail ensures perfect coating application and consistent, flawless results."
        }
      ];
  return (
    <>     
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Our Core <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The principles that guide every aspect of our powder coating services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreValues.map((value) => (
              <div key={value.id} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 transform hover:-translate-y-1">
                  <div className="flex items-center mb-6">
                    <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                      {value.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default CoreValues;