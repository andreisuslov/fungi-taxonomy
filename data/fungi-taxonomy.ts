/**
 * Fungi Taxonomy Implementation with Frames, Instance Attributes,
 * Taxonomic Relationships, and Inheritance Demonstration.
 *
 * This implementation defines a hierarchical taxonomy for fungi.
 * It uses "frames" (objects) for each taxonomic level and for specific
 * instances (e.g., the genus *Chytridium*), and it explicitly demonstrates
 * inheritance of properties from higher levels via JavaScript’s prototype chain.
 */

/**
 * Creates a new taxon frame. If a parent frame is provided, the new frame will inherit
 * properties from it (demonstrating taxonomic inheritance).
 *
 * @param {Object} options - Configuration for the taxon frame.
 * @param {string} options.name - The name of the taxon.
 * @param {string} options.rank - The taxonomic rank (e.g., Kingdom, Phylum, Class, Order, Genus).
 * @param {string} options.description - A description of the taxon.
 * @param {Object} [options.attributes={}] - Instance-specific attributes.
 * @returns {Object} The newly created taxon frame.
 */
function createTaxonFrame({ name, rank, description, attributes = {} }, parentFrame = null) {
  // Create a plain object
  const frame = {
    name,
    rank,
    description,
    attributes,
    children: {}
  }

  // If you want some “inheritance-like” behavior, you can copy or store
  // some parent properties explicitly. For example:
  if (parentFrame) {
    // We could store a reference to the parent's domain to illustrate the concept
    if (parentFrame.domain) {
      frame.inheritedDomain = parentFrame.domain
    }

    // Or do a shallow merge, etc.
    // Object.assign(frame.attributes, parentFrame.attributes)
  }

  return frame
}

// =============================================================================
// Define the Taxonomic Hierarchy with Inheritance and Instance Attributes
// (Existing definitions from the file)
// =============================================================================

// Kingdom: Fungi
const kingdomFungi = createTaxonFrame({
  name: 'Fungi',
  rank: 'Kingdom',
  description:
    "Eukaryotic (with true nuclei); acellular, unicellular, or multicellular with hyphae; cell walls composed of chitin and/or polysaccharides; at least 99,000 species described.",
  attributes: {}
});
// Add a property at the kingdom level to illustrate inheritance (e.g., domain).
kingdomFungi.domain = "Eukaryota";

// Phylum: Chytridiomycota (child of Kingdom Fungi)
const phylumChytridiomycota = createTaxonFrame(
  {
    name: 'Chytridiomycota',
    rank: 'Phylum',
    description:
      "Mainly aquatic, some are parasitic or saprotrophic; unicellular or filamentous; chitin and glucan cell wall; primarily asexual reproduction by motile spores (zoospores); contains 2 classes.",
    attributes: {}
  },
  kingdomFungi
);

// Class: Chytridiomycetes (child of Phylum Chytridiomycota)
const classChytridiomycetes = createTaxonFrame(
  {
    name: 'Chytridiomycetes',
    rank: 'Class',
    description:
      "Aquatic parasitic (on algae, fungi, or flowering plants) or saprotrophic; unicellular or filamentous; motile cells characterized by a single posterior flagellum; monocentric thallus or polycentric rhizomycelial; contains 3 orders.",
    attributes: {}
  },
  phylumChytridiomycota
);

// Order: Chytridiales (child of Class Chytridiomycetes)
const orderChytridiales = createTaxonFrame(
  {
    name: 'Chytridiales',
    rank: 'Order',
    description:
      "Mainly found in soil; examples of genera include Chytridium, Chytriomyces, and Nowakowskiella.",
    attributes: {}
  },
  classChytridiomycetes
);

// Specific Instance: Genus Chytridium (child of Order Chytridiales)
const genusChytridium = createTaxonFrame(
  {
    name: 'Chytridium',
    rank: 'Genus',
    description:
      "A genus of chytrids found in soil, characterized by its unique motile spores.",
    attributes: {
      habitat: 'Soil',
      reproduction: 'Asexual reproduction via motile zoospores',
      cellStructure: 'Unicellular or simple filamentous structures'
    }
  },
  orderChytridiales
);

// Order: Rhizophydiales (child of Class Chytridiomycetes)
const orderRhizophydiales = createTaxonFrame(
  {
    name: 'Rhizophydiales',
    rank: 'Order',
    description:
      "Aquatic parasitic (on algae) or saprotrophic (in soil or on pollen, keratin, or chitin); sporangia spherical or angular; rhizoids branched; example genus is Rhizophydium.",
    attributes: {}
  },
  classChytridiomycetes
);

// Order: Spizellomycetales (child of Class Chytridiomycetes)
const orderSpizellomycetales = createTaxonFrame(
  {
    name: 'Spizellomycetales',
    rank: 'Order',
    description:
      "Parasitic on soil organisms and plants; holocarpic or eucarpic; example genera include Spizellomyces and Powellomyces.",
    attributes: {}
  },
  classChytridiomycetes
);

// Class: Monoblepharidomycetes (child of Phylum Chytridiomycota)
const classMonoblepharidomycetes = createTaxonFrame(
  {
    name: 'Monoblepharidomycetes',
    rank: 'Class',
    description:
      "Asexual reproduction by zoospores or autospores; filamentous, branched or unbranched thallus; contains 1 order.",
    attributes: {}
  },
  phylumChytridiomycota
);

// Order: Monoblepharidales (child of Class Monoblepharidomycetes)
const orderMonoblepharidales = createTaxonFrame(
  {
    name: 'Monoblepharidales',
    rank: 'Order',
    description:
      "Sexual reproduction by motile gamete (antherozoid) fertilizing nonmotile egg, resulting in thick-walled oospore; example genus is Monoblepharis.",
    attributes: {}
  },
  classMonoblepharidomycetes
);

// Phylum: Neocallimastigomycota (child of Kingdom Fungi)
const phylumNeocallimastigomycota = createTaxonFrame(
  {
    name: 'Neocallimastigomycota',
    rank: 'Phylum',
    description:
      "Found in digestive tracts of herbivores; anaerobic; zoospores with one or more posterior flagella; lacks mitochondria but contains hydrogenosomes (hydrogen-producing, membrane-bound organelles).",
    attributes: {}
  },
  kingdomFungi
);

// Class: Neocallimastigomycetes (child of Phylum Neocallimastigomycota)
const classNeocallimastigomycetes = createTaxonFrame(
  {
    name: 'Neocallimastigomycetes',
    rank: 'Class',
    description: "Contains 1 order.",
    attributes: {}
  },
  phylumNeocallimastigomycota
);

// Order: Neocallimastigales (child of Class Neocallimastigomycetes)
const orderNeocallimastigales = createTaxonFrame(
  {
    name: 'Neocallimastigales',
    rank: 'Order',
    description:
      "Digest cellulose; example genus is Neocallimastix.",
    attributes: {}
  },
  classNeocallimastigomycetes
);

// Phylum: Blastocladiomycota (child of Kingdom Fungi)
const phylumBlastocladiomycota = createTaxonFrame(
  {
    name: 'Blastocladiomycota',
    rank: 'Phylum',
    description:
      "Parasitic on plants and animals, some are saprotrophic; aquatic and terrestrial; flagellated; alternates between haploid and diploid generations (zygotic meiosis).",
    attributes: {}
  },
  kingdomFungi
);

// Class: Blastocladiomycetes (child of Phylum Blastocladiomycota)
const classBlastocladiomycetes = createTaxonFrame(
  {
    name: 'Blastocladiomycetes',
    rank: 'Class',
    description: "Parasitic or saprotrophic; contains 1 order.",
    attributes: {}
  },
  phylumBlastocladiomycota
);

// Order: Blastocladiales (child of Class Blastocladiomycetes)
const orderBlastocladiales = createTaxonFrame(
  {
    name: 'Blastocladiales',
    rank: 'Order',
    description:
      "Parasitic on many different substrates, including decaying fruits; example genera include Allomyces and Coelomomyces.",
    attributes: {}
  },
  classBlastocladiomycetes
);

// =============================================================================
// NEW TAXA IMPLEMENTATION (Microsporidia, Glomeromycota, Mucoromycotina (incertae sedis),
// Entomophthoromycotina (incertae sedis), Zoopagomycotina (incertae sedis))
// =============================================================================

// Phylum: Microsporidia (child of Kingdom Fungi)
const phylumMicrosporidia = createTaxonFrame(
  {
    name: 'Microsporidia',
    rank: 'Phylum',
    description:
      "Parasitic on animals and protists; unicellular; highly reduced mitochondria; phylum not subdivided due to lack of well-defined phylogenetic relationships within the group.",
    attributes: {}
  },
  kingdomFungi
);

// Phylum: Glomeromycota (child of Kingdom Fungi)
const phylumGlomeromycota = createTaxonFrame(
  {
    name: 'Glomeromycota',
    rank: 'Phylum',
    description:
      "Forms obligate, mutualistic, symbiotic relationships in which hyphae penetrate into the cells of roots of plants and trees (arbuscular mycorrhizal associations); coenocytic hyphae; reproduces asexually; cell walls composed primarily of chitin.",
    attributes: {}
  },
  kingdomFungi
);

// Class: Archaeosporomycetes (child of Phylum Glomeromycota)
const classArchaeosporomycetes = createTaxonFrame(
  {
    name: 'Archaeosporomycetes',
    rank: 'Class',
    description:
      "Arbuscular mycorrhizal; spores form singly or in loose clusters.",
    attributes: {}
  },
  phylumGlomeromycota
);

// Order: Archaeosporales (child of Class Archaeosporomycetes)
const orderArchaeosporales = createTaxonFrame(
  {
    name: 'Archaeosporales',
    rank: 'Order',
    description:
      "Arbuscular mycorrhizal; example genera include Archaeospora and Geosiphon.",
    attributes: {}
  },
  classArchaeosporomycetes
);

// Class: Glomeromycetes (child of Phylum Glomeromycota)
const classGlomeromycetes = createTaxonFrame(
  {
    name: 'Glomeromycetes',
    rank: 'Class',
    description:
      "Arbuscular mycorrhizal; single or clustered spores; contains 4 orders.",
    attributes: {}
  },
  phylumGlomeromycota
);

// Orders under Class Glomeromycetes
const orderDiversisporales = createTaxonFrame(
  {
    name: 'Diversisporales',
    rank: 'Order',
    description:
      "Arbuscular mycorrhizal; forms complexes of spores; example genera include Acaulospora, Diversispora, and Pacispora.",
    attributes: {}
  },
  classGlomeromycetes
);

const orderGigasporales = createTaxonFrame(
  {
    name: 'Gigasporales',
    rank: 'Order',
    description:
      "Arbuscular mycorrhizal; uses extra-radical auxiliary cells instead of vesicles in plant roots.",
    attributes: {}
  },
  classGlomeromycetes
);

const orderGlomerales = createTaxonFrame(
  {
    name: 'Glomerales',
    rank: 'Order',
    description:
      "Arbuscular mycorrhizal; forms single spores, loose clusters of spores, or compact sporocarps (fruiting bodies); example genus is Glomus.",
    attributes: {}
  },
  classGlomeromycetes
);

// Class: Paraglomeromycetes (child of Phylum Glomeromycota)
const classParaglomeromycetes = createTaxonFrame(
  {
    name: 'Paraglomeromycetes',
    rank: 'Class',
    description: "Arbuscular mycorrhizal; forms complexes of spores.",
    attributes: {}
  },
  phylumGlomeromycota
);

// Order: Paraglomerales (child of Class Paraglomeromycetes)
const orderParaglomerales = createTaxonFrame(
  {
    name: 'Paraglomerales',
    rank: 'Order',
    description:
      "Arbuscular mycorrhizal; example genus is Paraglomus.",
    attributes: {}
  },
  classParaglomeromycetes
);

// Subphylum: Mucoromycotina (incertae sedis) (child of Kingdom Fungi)
const subphylumMucoromycotina = createTaxonFrame(
  {
    name: 'Mucoromycotina (incertae sedis)',
    rank: 'Subphylum',
    description:
      "Parasitic, saprotrophic, or ectomycorrhizal; asexual or sexual reproduction; branched mycelium; contains 3 orders that represent the traditional Zygomycota.",
    attributes: {}
  },
  kingdomFungi
);

// Orders under Subphylum Mucoromycotina (incertae sedis)
const orderMucorales = createTaxonFrame(
  {
    name: 'Mucorales',
    rank: 'Order',
    description:
      "Parasitic or saprotrophic; filamentous; nonmotile spores (aplanospores); coenocytic mycelium; asexual reproduction by formation of sporangiospores; example genera include Mucor, Parasitella, Phycomyces, Pilobolus, and Rhizopus.",
    attributes: {}
  },
  subphylumMucoromycotina
);

const orderEndogonales = createTaxonFrame(
  {
    name: 'Endogonales',
    rank: 'Order',
    description:
      "Saprotrophic or mycorrhizal; filamentous; coenocytic mycelium; underground sporocarp; example genera include Endogone, Peridiospora, Sclerogone, and Youngiomyces.",
    attributes: {}
  },
  subphylumMucoromycotina
);

const orderMortierellales = createTaxonFrame(
  {
    name: 'Mortierellales',
    rank: 'Order',
    description:
      "Parasitic or saprotrophic; fine mycelium, branched (arachnoid); sporangia with 1 or many spores; may form chlamydospores; produces garliclike odor; example genera include Mortierella, Dissophora, and Modicella.",
    attributes: {}
  },
  subphylumMucoromycotina
);

// Subphylum: Entomophthoromycotina (incertae sedis) (child of Kingdom Fungi)
const subphylumEntomophthoromycotina = createTaxonFrame(
  {
    name: 'Entomophthoromycotina (incertae sedis)',
    rank: 'Subphylum',
    description:
      "Pathogenic, saprotrophic, or parasitic; coenocytic or septate mycelium; rhizoids formed by some species; conidiophore branched or unbranched; conidia forcibly discharged; contains 1 order.",
    attributes: {}
  },
  kingdomFungi
);

// Order: Entomophthorales (child of Subphylum Entomophthoromycotina)
const orderEntomophthorales = createTaxonFrame(
  {
    name: 'Entomophthorales',
    rank: 'Order',
    description:
      "Primarily parasitic on insects, some may be saprotrophic in soil; coenocytic mycelium, may become septate; example genera include Entomophthora, Ballocephala, Conidiobolus, Entomophaga, and Neozygites.",
    attributes: {}
  },
  subphylumEntomophthoromycotina
);

// Subphylum: Zoopagomycotina (incertae sedis) (child of Kingdom Fungi)
const subphylumZoopagomycotina = createTaxonFrame(
  {
    name: 'Zoopagomycotina (incertae sedis)',
    rank: 'Subphylum',
    description:
      "Endoparasitic (lives in the body) or ectoparasitic (lives on the body) on nematodes, protozoa, and fungi; thallus branched or unbranched; asexual and sexual reproduction; contains 1 order.",
    attributes: {}
  },
  kingdomFungi
);

// Order: Zoopagales (child of Subphylum Zoopagomycotina)
const orderZoopagales = createTaxonFrame(
  {
    name: 'Zoopagales',
    rank: 'Order',
    description:
      "Parasitic on amoebas, rotifers, nematodes, and other protozoa; asexual reproduction by conidia borne singly or in chains, not forcibly discharged; example genera include Cochlonema, Rhopalomyces, Piptocephalis, Sigmoideomyces, Syncephalis, and Zoopage.",
    attributes: {}
  },
  subphylumZoopagomycotina
);

// =============================================================================
// Assemble the Taxonomy Tree by Linking Child Frames to Their Parents
// (Existing links)
// =============================================================================

// Link children for Kingdom Fungi
kingdomFungi.children.Chytridiomycota = phylumChytridiomycota;
kingdomFungi.children.Neocallimastigomycota = phylumNeocallimastigomycota;
kingdomFungi.children.Blastocladiomycota = phylumBlastocladiomycota;

// Now link the NEW children for Kingdom Fungi
kingdomFungi.children.Microsporidia = phylumMicrosporidia;
kingdomFungi.children.Glomeromycota = phylumGlomeromycota;
kingdomFungi.children["Mucoromycotina (incertae sedis)"] = subphylumMucoromycotina;
kingdomFungi.children["Entomophthoromycotina (incertae sedis)"] = subphylumEntomophthoromycotina;
kingdomFungi.children["Zoopagomycotina (incertae sedis)"] = subphylumZoopagomycotina;

// Link children for Phylum Chytridiomycota
phylumChytridiomycota.children.Chytridiomycetes = classChytridiomycetes;
phylumChytridiomycota.children.Monoblepharidomycetes = classMonoblepharidomycetes;

// Link children for Class Chytridiomycetes
classChytridiomycetes.children.Chytridiales = orderChytridiales;
classChytridiomycetes.children.Rhizophydiales = orderRhizophydiales;
classChytridiomycetes.children.Spizellomycetales = orderSpizellomycetales;

// Link children for Order Chytridiales
orderChytridiales.children.Chytridium = genusChytridium;

// Link children for Class Monoblepharidomycetes
classMonoblepharidomycetes.children.Monoblepharidales = orderMonoblepharidales;

// Link children for Phylum Neocallimastigomycota
phylumNeocallimastigomycota.children.Neocallimastigomycetes = classNeocallimastigomycetes;
classNeocallimastigomycetes.children.Neocallimastigales = orderNeocallimastigales;

// Link children for Phylum Blastocladiomycota
phylumBlastocladiomycota.children.Blastocladiomycetes = classBlastocladiomycetes;
classBlastocladiomycetes.children.Blastocladiales = orderBlastocladiales;

// Link children for Phylum Glomeromycota
phylumGlomeromycota.children.Archaeosporomycetes = classArchaeosporomycetes;
phylumGlomeromycota.children.Glomeromycetes = classGlomeromycetes;
phylumGlomeromycota.children.Paraglomeromycetes = classParaglomeromycetes;

// Link children for Class Archaeosporomycetes
classArchaeosporomycetes.children.Archaeosporales = orderArchaeosporales;

// Link children for Class Glomeromycetes
classGlomeromycetes.children.Diversisporales = orderDiversisporales;
classGlomeromycetes.children.Gigasporales = orderGigasporales;
classGlomeromycetes.children.Glomerales = orderGlomerales;

// Link children for Class Paraglomeromycetes
classParaglomeromycetes.children.Paraglomerales = orderParaglomerales;

// Link children for Subphylum Mucoromycotina (incertae sedis)
subphylumMucoromycotina.children.Mucorales = orderMucorales;
subphylumMucoromycotina.children.Endogonales = orderEndogonales;
subphylumMucoromycotina.children.Mortierellales = orderMortierellales;

// Link children for Subphylum Entomophthoromycotina (incertae sedis)
subphylumEntomophthoromycotina.children.Entomophthorales = orderEntomophthorales;

// Link children for Subphylum Zoopagomycotina (incertae sedis)
subphylumZoopagomycotina.children.Zoopagales = orderZoopagales;

// =============================================================================
// Final Export: The Full Fungi Taxonomy
// =============================================================================

export const fungiTaxonomy = kingdomFungi;

