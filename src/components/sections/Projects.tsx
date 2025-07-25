export default function Projects() {
  return (
    <section className="py-20 px-6 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-12">Projects</h2>
      <div className="grid gap-6 md:grid-cols-2 max-w-5xl mx-auto">
        {/* Example Project Card */}
        <div className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-bold">Portfolio Website</h3>
          <p className="text-gray-600">A modern portfolio built with Next.js and Tailwind CSS.</p>
          <a href="#" className="text-blue-600 underline mt-2 inline-block">View Project</a>
        </div>
      </div>
    </section>
  );
}
