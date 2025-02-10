import { fungiTaxonomy } from "../data/fungi-taxonomy"
import TaxonomyLevel from "./components/TaxonomyLevel"

export default function Home() {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-6 text-white text-center">Fungi Taxonomy</h1>
      <div className="text-center text-white mb-6">
        <p className="text-lg">Author: Andrei Suslov</p>
        <p className="text-lg">References:</p>
        <div className="mt-2 p-4 rounded-xl bg-white/10 backdrop-blur-lg shadow-lg">
          <p className="text-sm">
            Ahmadjian, V., Moore, D., & Alexopoulos, C. J. (2025, January 9). <i>Fungus</i>. Encyclopedia Britannica. 
            <a 
              href="https://www.britannica.com/science/fungus" 
              className="text-green-400 hover:text-green-300 transition-colors duration-300 underline"
            >
              {" "}https://www.britannica.com/science/fungus
            </a>. Accessed February 4, 2025.
          </p>
        </div>
      </div>
      {/* Render the root taxon node. The TaxonomyLevel component will display the root and recursively render its children. */}
      <TaxonomyLevel data={fungiTaxonomy} level={0} />
    </div>
  )
}

