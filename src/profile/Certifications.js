import React from "react";
import Fade from "react-reveal/Fade";
import { ArrowTopRightOnSquareIcon } from "@heroicons/react/24/outline";

const certifications = [
  {
    title: "Oracle AI Vector Search Certified Professional",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F7FCEBFA14E9B005F5DF87FF87DDDC1D10A470BD2B59CDB7915DA9A1D9EA8A54",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E1516F0085411E31DA79199BC1D08990C3B3FB2A0B6721803CCE221A06A7BC61",
  },
  {
    title: "HackerRank Software Engineer",
    link: "https://www.hackerrank.com/certificates/iframe/85f884a4a473",
  },
  {
    title: "HackerRank RestAPI",
    link: "https://www.hackerrank.com/certificates/iframe/2f065991ce17",
  },
  {
    title: "AWS Certified Developer Associate (DVA-C02, CloudGuru)",
  },
  {
    title: "Node.js Intermediate",
  },
  {
    title: "Frontend Developer",
  },
];

const Certifications = () => {
  return (
    <div id="certifications" className="relative py-24 bg-gradient-to-b from-slate-950 via-slate-900 to-black text-gray-200 overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-700/20 rounded-full filter blur-3xl animate-blob opacity-50 mix-blend-multiply"></div>
      <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-cyan-500/20 rounded-full filter blur-2xl animate-blob animation-delay-2000 opacity-50 mix-blend-multiply"></div>

      <div className="relative max-w-5xl mx-auto px-6 sm:px-12 space-y-16">
        <Fade top big>
          <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-indigo-400 to-fuchsia-400 font-bold text-4xl sm:text-5xl lg:text-6xl">
            Certifications
          </h2>
        </Fade>

        <Fade bottom distance="50px">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4 mt-12">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="relative p-6 bg-white/5 border border-cyan-500/20 backdrop-blur-md rounded-3xl shadow-lg hover:shadow-[0_0_30px_-5px_rgba(56,189,248,0.4)] transition-all duration-500 flex flex-col justify-between"
              >
                <h3 className="text-cyan-400 font-semibold text-lg sm:text-xl lg:text-2xl mb-4">
                  {cert.title}
                </h3>
                {cert.link ? (
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-cyan-300 hover:text-cyan-400 transition-colors mt-auto"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-1" />
                    Verify Certificate
                  </a>
                ) : (
                  <span className="text-sm text-gray-400 mt-auto">Listed on CV</span>
                )}
              </div>
            ))}
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Certifications;
