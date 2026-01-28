export default function InsightMenu() {
  return (
    <div className="grid grid-cols-2 gap-12">
      <div>
        <h3 className="text-xl font-semibold mb-4">
          Application Services
        </h3>
        <p className="text-white/70 mb-6">
          Tailored software solutions from development to QA.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          Data & Integration
        </h3>
        <p className="text-white/70">
          Managing complex data and seamless connectivity.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-semibold mb-4">
          Cloud & Infrastructure
        </h3>
        <p className="text-white/70 mb-6">
          Secure, scalable cloud architectures.
        </p>

        <h3 className="text-xl font-semibold mb-4">
          Innovation & R&D
        </h3>
        <p className="text-white/70">
          Rapid validation of new ideas and products.
        </p>
      </div>
    </div>
  );
}
