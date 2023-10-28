import React from "react";

export default function Team() {
  return (
    <>
      <div className="py-20 bg-gray-50 ">
        <div className="container mx-auto px-6 md:px-12 xl:px-32 ">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-center text-2xl text-gray-900 font-bold md:text-4xl">
              {" "}
              Meet the LetzKhelo Team
            </h2>
            <p className="text-gray-600 lg:w-8/12 lg:mx-auto">
              At LetzKhelo, we are a passionate and dedicated team of
              individuals who are committed to bringing you the best sports and
              gaming experience possible. Meet the people behind LetzKhelo who
              work tirelessly to make your gaming dreams come true.
            </p>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-3">

          <div className="space-y-4 text-center">
            <img
              className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
              src="/rj.png"
              alt="Fouder"
              loading="lazy"
              width="1000"
              height="667"
            />
            <div>
              <h4 className="text-2xl">Rishabh Jha</h4>
              <span className="block text-sm text-gray-500">
                Founder(Chief Technology Officer)
              </span>
            </div>
          </div>
            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="/an.png"
                alt="Co-Founder"
                loading="lazy"
                width="640"
                height="805"
              />
              <div>
                <h4 className="text-2xl">Anshuman Negi</h4>
                <span className="block text-sm text-gray-500">
                  Co-Founder(Tech Lead)
                </span>
              </div>
            </div>

            <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="/ps.png"
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl">Prerna Sharma</h4>
                <span className="block text-sm text-gray-500">
                  Head of Marketing
                </span>
              </div>
            </div>
          </div>
          <div className="grid gap-12 items-center md:grid-cols-3 mt-4">
            <div className="space-y-4 text-center mt-4">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="/pc.png"
                alt="man"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl">Prakash Chand</h4>
                <span className="block text-sm text-gray-500">
                  Software Engineer(founding team)
                </span>
              </div>
            </div>
            {/* <div className="space-y-4 text-center">
              <img
                className="w-64 h-64 mx-auto object-cover rounded-xl md:w-40 md:h-40 lg:w-64 lg:h-64"
                src="/nonu.jpeg"
                alt="woman"
                loading="lazy"
                width="1000"
                height="667"
              />
              <div>
                <h4 className="text-2xl">Pranvi Dixit</h4>
                <span className="block text-sm text-gray-500">
                  Design(intern)
                </span>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
export function generateMetadata() {
  return {
    title: "Our Team",
    description: "Founder,CoFounder",
    keywords: "Founder, Team, Cofounder, CTO",
    robots: "index, follow",
    language: "EN",
  };
}
