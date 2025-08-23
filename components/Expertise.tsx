import React from "react";

const whatIOffer = [
  {
    title: "Full‑Stack Development",
    description:
      "React/Next.js, Node/Express, Spring Boot. I build fast, secure, maintainable apps.",
    icon: "/icons/dev.svg",
    alt: "Full‑stack icon",
  },
  {
    title: "Machine Learning",
    description:
      "TensorFlow/PyTorch, data wrangling, model tuning, evaluation, and deployment.",
    icon: "/icons/ml.svg",
    alt: "ML icon",
  },
  {
    title: "Product Development",
    description:
      "From UX to delivery: roadmapping, iterative design, testing, and CI/CD.",
    icon: "/icons/ui.svg",
    alt: "Product icon",
  },
];

const Expertise: React.FC = () => {
  return (
    <div className=" w-full flex justify-center p-2">
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold">What I Bring</h2>
        <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {whatIOffer.map((item) => (
            <div
              key={item.title}
              role="listitem"
              tabIndex={0}
              className="bg-gray-800/60 border border-white/10 rounded-2xl p-5 text-center hover:shadow-xl hover:scale-[1.01] transition-transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
            >
              <img src={item.icon} alt={item.alt} className="h-12 w-12 mx-auto mb-3" />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-300 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Expertise;