import React from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import { SiOracle, SiHackerrank, SiAmazonwebservices } from "react-icons/si";

const certifications = [
  {
    title: "Oracle AI Vector Search Certified Professional",
    Icon: SiOracle,
    color: "#F80000",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=F7FCEBFA14E9B005F5DF87FF87DDDC1D10A470BD2B59CDB7915DA9A1D9EA8A54",
  },
  {
    title: "Oracle Cloud Infrastructure 2025 Certified Generative AI Professional",
    Icon: SiOracle,
    color: "#F80000",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=E1516F0085411E31DA79199BC1D08990C3B3FB2A0B6721803CCE221A06A7BC61",
  },
  {
    title: "HackerRank Software Engineer",
    Icon: SiHackerrank,
    color: "#00EA64",
    link: "https://www.hackerrank.com/certificates/iframe/85f884a4a473",
  },
  {
    title: "HackerRank REST API",
    Icon: SiHackerrank,
    color: "#00EA64",
    link: "https://www.hackerrank.com/certificates/iframe/2f065991ce17",
  },
  {
    title: "AWS Certified Developer Associate (DVA-C02, CloudGuru)",
    Icon: SiAmazonwebservices,
    color: "#FF9900",
  },
  { title: "Node.js Intermediate" },
  { title: "Frontend Developer" },
];

const Certifications = () => (
  <section id="certifications" className="border-t border-line bg-surface py-24 sm:py-32">
    <div className="wrap">
      <p className="eyebrow">Certifications</p>
      <h2 className="h2 mt-4 max-w-3xl">Seven certifications, four you can verify.</h2>

      <ul className="mt-16 divide-y divide-line border-y border-line">
        {certifications.map((cert) => (
          <li
            key={cert.title}
            className="flex flex-wrap items-center gap-x-6 gap-y-2 py-5"
          >
            <span className="flex h-8 w-8 shrink-0 items-center justify-center" aria-hidden="true">
              {cert.Icon && <cert.Icon size={24} color={cert.color} />}
            </span>
            <span className="min-w-0 flex-1 text-lg">{cert.title}</span>
            {cert.link ? (
              <a
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="link-draw inline-flex min-h-[44px] items-center gap-1 text-sm font-medium text-accent"
              >
                Verify certificate
                <ArrowUpRightIcon className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : (
              <span className="text-sm text-muted">Listed on CV</span>
            )}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default Certifications;
