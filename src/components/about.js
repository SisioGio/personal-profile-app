import Fade from "react-reveal/Fade";

import Picture from "./pexels-tara-winstead-8386365.jpg";
import ContactForm from "./contactForm";
import Services from "./services";
function About() {
  

  return (
    
    

      <section className="bg-gray-100 py-16" id="about">
          <div className="h-52"></div>
        <div className="container mx-auto px-6 md:px-12">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12">
            About Us
          </h2>

          {/* Content Row */}
          <div className="flex flex-col lg:flex-row items-center gap-10">
            {/* Image Section */}
            <div className="lg:w-1/2">
              <img
                src={Picture}
                alt="About Us"
                className="rounded-xl shadow-lg"
              />
            </div>

            {/* Text Section */}
            <div className="lg:w-1/2">
              <p className="text-lg text-gray-600 mb-6">
                We are dedicated to bringing the power of AI to your daily life
                by offering simple, intuitive tools that make your tasks easier
                and more efficient. Whether you're looking for creative
                solutions, personal assistance, or just a bit of help with
                routine activities, our tools are designed to fit seamlessly
                into your life.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Our mission is to make AI accessible to everyone. We believe in
                the transformative potential of technology, and we're committed
                to creating tools that are not only powerful but also easy to
                use.
              </p>
              <p className="text-lg text-gray-600">
                Our team is made up of tech enthusiasts, AI experts, and
                creative problem solvers who are passionate about leveraging the
                latest technologies to make life better. We are constantly
                innovating and looking for new ways to improve your experience.
              </p>
            </div>
          </div>

          {/* Our Mission Section */}
          <div className="mt-16 text-center">
            <h3 className="text-3xl font-semibold text-blue-600 mb-4">
              Our Mission
            </h3>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto">
              To empower individuals and businesses by providing accessible AI
              tools that enhance productivity, foster creativity, and improve
              everyday life. We aim to bridge the gap between technology and
              people, ensuring that everyone can benefit from the advancements
              of AI.
            </p>
          </div>
        </div>
      </section>

  );
}

export default About;
