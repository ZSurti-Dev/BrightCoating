
import Navbar from '../components/layouts/Navbar';
import CompanyHistory from '../components/sections/CompanyHistory';
import Gallery from '../components/sections/Gallery';
import CoreValues from '../components/sections/CoreValues';
import Team from '../components/sections/Team';
import Footer from '../components/layouts/Footer';

function About() {
  return (
    <>
    <Navbar />

    {/* Page Header */}
    <section className='pt-24 pb-12 bg-graident-to-br from-gray-50 to-blue-50'>
        <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'>
            <h1 className='text-5xl md:text-6xl font-bold text-gray-800 mb-6'>
                About <span className='bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent'> Us</span>
            </h1>
            <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
                Welcome to Bright Coating, your trusted partner in premium powder coating solutions. With over 25 years of experience, we specialize in delivering high-quality, durable finishes for a wide range of applications. Our commitment to excellence and customer satisfaction sets us apart in the industry.
            </p>
        </div>
    </section>

    {/* Company History Section */}
    <CompanyHistory />

    {/* Gallery Section */}
    <Gallery />

    {/* Core Values Section */}
    <CoreValues />

    {/* Our Team Section */}
    <Team />

    {/*  Footer section */}
    < Footer />  
    
    </>
  )
}

export default About;