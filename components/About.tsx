import React from "react";

const About: React.FC = () => {
  return (
    <div className=" w-full flex justify-center p-2">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-primary-light md:text-left">Get to Know Me</h2>
        <div className="mt-5 grid md:grid-cols-3 gap-6 md:gap-10">
          <div className="md:col-span-2 space-y-4 text-lg md:text-xl text-text-primary leading-relaxed">
            <p>
              I am a recent Software Engineering graduate based in Canada. I design and build
              delightful, accessible user experiences across web, mobile, and data products.
            </p>
            <p>
              I thrive in Agile, cross‑functional teams, collaborate closely with designers and PMs,
              and ship maintainable, well‑tested features. My interests include full‑stack product
              work and applied ML.
            </p>
          </div>

          <aside className="bg-surface rounded-xl p-4 md:p-5 shadow-md text-primary-light shadow-primary">
            <h3 className="text-3xl font-bold mb-2">Education</h3>
            <p className="text-text-primary  text-lg font-semibold">Concordia University</p>
            <p className="text-text-primary text-lg">B.Eng. – Software Engineering</p>
            <p className="text-text-primary text-lg mt-1">Graduated: 2025</p>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default About;
