import Hasnainimg from '../../assets/images/UpdatedDP.png';
import HurraliImg from '../../assets/images/Hurrali photo.png';
function Team() {
  const teamMembers = [
        {
      id: 1,
      name: "Hasnain Narsandawala",
      title: "Owner & Founder",
      image: Hasnainimg,
    },
    {
      id: 2,
      name: "Hurrali Ghasia",
      title: "Owner & Co-Founder",
      image: HurraliImg,
      
    },
    // {
    //   id: 3,
    //   name: "Michael Rodriguez",
    //   title: "Technical Specialist",
    //   image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
      
    // },
    // {
    //   id: 4,
    //   name: "Emily Thompson",
    //   title: "Customer Relations",
    //   image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face",
      
    // }
];
  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Meet Our <span className="bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent">Team</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The skilled professionals behind our exceptional powder coating services
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <div key={member.id} className="group text-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="relative mb-6">
                    <img 
                      src={member.image}
                      alt={member.name}
                      className="w-42 h-42 rounded-full mx-auto object-cover ring-4 ring-white shadow-xl group-hover:ring-grey-200 transition-all duration-300"
                    />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-t from-teal-600/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{member.name}</h3>
                  <p className="text-teal-600 font-medium mb-3">{member.title}</p>
            
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  )
}

export default Team
