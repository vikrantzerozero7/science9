// configs/science-config.js
window.SCIENCE9_CONFIG = {
    id: "science9",
    title: {
        english: "🔬 Science - Exploration, Cells, Tissues, Motion, Mixtures & Forces",
        hindi: "🔬 विज्ञान - Exploration, Cells, Tissues, Motion, Mixtures और Forces"
    },
    chapters: [
        // ===== CHAPTER 1: EXPLORATION =====
        {
            id: "sci_ch1",
            display_name: {
                english: "🔭 Exploration - Models, Measurements & Scientific Thinking",
                hindi: "🔭 Exploration - Models, Measurements और Scientific Thinking"
            },
            color: "#FF6B6B",
            topics: [
                {
                    id: "sci_t1",
                    display_name: {
                        english: "📐 Scientific Models & Measurement",
                        hindi: "📐 Scientific Models और Measurement"
                    },
                    concepts: [
                        {
                            id: "sci_c1",
                            display_name: {
                                english: "Scientific Models & Assumptions",
                                hindi: "Scientific Models और Assumptions"
                            },
                            description: {
                                english: "1. Science uses models to simplify complex systems, focusing only on what is most important for a given question.\n\n2. In physics, a moving car may be represented as a single point; in chemistry, atoms and molecules are drawn as spheres and bonds.\n\n3. In biology, cells are shown as diagrams highlighting key parts; in earth science, the Earth may be treated as a smooth sphere layered into distinct regions.\n\n4. Building models involves making assumptions and deliberately ignoring certain details.\n\n5. Example: Studying a falling object — air resistance may be neglected to understand the basic effect of gravity.\n\n6. Example: Studying how the heart pumps blood — many individual cells are ignored so the organ can be understood as a functioning system.\n\n7. These choices are not mistakes; they are done on purpose to keep things simple enough while still allowing us to find answers.\n\n8. Meghnad Saha studied light from stars by treating star matter as a hot gas, ignoring complex processes, and focusing only on temperature, pressure, and ion formation.\n\n9. This simplification allowed him to explain how the colour of stars is deeply connected to their temperature.\n\n10. Example 1.1: Cricket shot — important details: mass of ball, speed and direction of hit; ignored details: brand of bat, colour of ball, grass on field, air resistance, spin, seam stitching.\n\n11. Activity 1.1: Bicycle ride from school to home — keep distance, route, speed; ignore traffic signals, weather, etc.",
                                hindi: "1. Science complex systems को simplify करने के लिए models का उपयोग करता है, केवल उन्हीं details पर focus करता है जो किसी given question के लिए सबसे important हैं।\n\n2. Physics में, moving car को single point के रूप में represent किया जा सकता है; chemistry में, atoms और molecules को spheres और bonds के रूप में draw किया जाता है।\n\n3. Biology में, cells को diagrams के रूप में दिखाया जाता है जो key parts को highlight करते हैं; earth science में, Earth को distinct regions में layered smooth sphere माना जा सकता है।\n\n4. Models बनाने में assumptions शामिल होते हैं और कुछ details को deliberately ignore किया जाता है।\n\n5. Example: Falling object का अध्ययन — gravity के basic effect को समझने के लिए air resistance को neglect किया जा सकता है।\n\n6. Example: Heart blood pumping का अध्ययन — organ को functioning system के रूप में समझने के लिए many individual cells को ignore किया जाता है।\n\n7. ये choices mistakes नहीं हैं; ये purposefully की जाती हैं ताकि things simple रहें और हमें answers मिल सकें।\n\n8. Meghnad Saha ने stars के light का अध्ययन करते समय star matter को hot gas माना, complex processes को ignore किया, और केवल temperature, pressure, और ion formation पर focus किया।\n\n9. इस simplification ने उन्हें explain करने में मदद की कि stars का colour उनके temperature से कैसे जुड़ा है।\n\n10. Example 1.1: Cricket shot — important details: ball का mass, hit की speed और direction; ignored details: bat का brand, ball का colour, field पर grass, air resistance, spin, seam stitching।\n\n11. Activity 1.1: School से home तक bicycle ride — distance, route, speed रखें; traffic signals, weather, etc. ignore करें।\nKeywords: models, assumptions, simplification, Meghnad Saha, star temperature, cricket shot, bicycle model"
                            },
                            diagrams: null
                        },
                        {
                            id: "sci_c2",
                            display_name: {
                                english: "Scientific Language, Units & Estimation",
                                hindi: "Scientific Language, Units और Estimation"
                            },
                            description: {
                                english: "1. Science uses language precisely — words like force, work, cell, reaction have specific meanings.\n\n2. Quantities such as mass, velocity, force, electric current are represented by symbols m, v, F, I with defined units.\n\n3. Mathematics in science is a language for thinking, not just a calculation tool. An equation is a compact statement about how things are related.\n\n4. Speed of light denoted by 'c' from Latin word celeritas meaning speed. Its value is exactly 299792458 m/s.\n\n5. Airplane fuel miscalculation incident: ground crew used density in pounds per litre instead of kilograms per litre, causing about 15,000 litres fuel shortage. Using SI units everywhere avoids errors.\n\n6. A kilogram is used everywhere for fair trade and comparable scientific results based on international standards.\n\n7. A law describes a regular pattern in nature, often expressed using words or mathematical relationships (e.g., Newton's laws of motion).\n\n8. A theory provides an explanation of why patterns occur, based on evidence (e.g., atomic theory).\n\n9. Principles are broad ideas that help make sense in a given situation (e.g., principle of conservation of energy).\n\n10. In science, a theory is not a guess — it is an explanation based on careful testing and critical examination.\n\n11. Prediction is a powerful tool: laws, theories, and models allow us to anticipate outcomes.\n\n12. Example 1.2: Varsha's prediction 'It will rain because clouds look dark' — Meghna could ask about humidity, wind speed, temperature drop, past patterns to make it scientifically testable.\n\n13. Weather forecasts go wrong because tiny differences in temperature, pressure, humidity, and wind can grow over time.\n\n14. When predictions do not match observations, scientists re-examine assumptions, models, or measurements based only on evidence.\n\n15. Example 1.3: Estimate air breathed in a day — 12-15 breaths/min, 1440 min/day → about 20,000 breaths; one breath ≈ 0.5 litre → about 10,000 litres/day.\n\n16. Estimation helps build intuition, detect errors, and develop confidence.\nKeywords: scientific language, units, SI, speed of light, celeritas, law, theory, principle, prediction, weather forecast, estimation, air breathed"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        },
        // ===== CHAPTER 2: CELL =====
        {
            id: "sci_ch2",
            display_name: {
                english: "🧫 Cell - The Building Block of Life",
                hindi: "🧫 Cell - The Building Block of Life"
            },
            color: "#4ECDC4",
            topics: [
                {
                    id: "sci_t2",
                    display_name: {
                        english: "🔬 Cell Structure & Organelles",
                        hindi: "🔬 Cell Structure और Organelles"
                    },
                    concepts: [
                        {
                            id: "sci_c3",
                            display_name: {
                                english: "Cell Membrane & Cell Wall",
                                hindi: "Cell Membrane और Cell Wall"
                            },
                            description: {
                                english: "1. The cell membrane is a thin boundary that surrounds a cell and protects its contents. It defines the individuality of a cell and is also called the plasma membrane.\n\n2. The cell membrane is selectively permeable — it allows some substances to pass through while blocking others.\n\n3. Structurally, the cell membrane is about 7 to 10 nanometres (nm) thick (1 nm = 0.000001 mm).\n\n4. It is made up of lipids (fats) and proteins. The fluid-mosaic model explains its structure.\n\n5. The membrane has a lipid bilayer (two layers of special fat molecules with water-attracting heads outwards and water-repelling tails inwards) with proteins embedded in them.\n\n6. The molecules can move sideways, flip and rotate within the membrane — hence it is fluid.\n\n7. Proteins in the membrane act like gatekeepers in helping substances pass through.\n\n8. Osmosis: movement of water through a selectively permeable membrane from an area with more water and less solute to an area with less water and more solute, until concentrations become equal.\n\n9. Diffusion: net movement of particles from a higher to a lower concentration (occurs even without a membrane).\n\n10. In plants, water from the soil enters root cells by osmosis.\n\n11. Activity 2.2: Potato piece in plain water swells (water enters); potato piece in 20% salt/sugar solution shrinks (water leaves).\n\n12. Plant, fungi, and bacteria cells have an additional layer around the cell membrane called the cell wall.\n\n13. The plant cell wall is primarily made of cellulose, a carbohydrate formed by many glucose units linked together.\n\n14. Cellulose in our diet acts as roughage, helping in digestion.\n\n15. The cell wall is rigid but permeable — water and some dissolved minerals can pass through it.\n\n16. When a plant cell is placed in concentrated sugar solution, the cell wall maintains its shape but the inner content shrinks (plasmolysis).\n\n17. Animal cells (e.g., cheek cells) do not have a cell wall; when placed in concentrated sugar solution, they lose water and shrink.\n\n18. Without a rigid cell wall, animal cells can change shape easily, supporting movement and functioning of animal tissues.\nKeywords: cell membrane, plasma membrane, selectively permeable, lipid bilayer, fluid-mosaic model, osmosis, diffusion, cell wall, cellulose, plasmolysis"
                            },
                            diagrams: [
                                {
                                    type: "svg",
                                    caption: {
                                        english: "Fluid-mosaic model of cell membrane",
                                        hindi: "Cell membrane का fluid-mosaic model"
                                    },
                                    svg: `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cell membrane lipid bilayer with proteins">
  <rect x="20" y="60" width="280" height="10" fill="#8E44AD" opacity="0.4"/>
  <rect x="20" y="90" width="280" height="10" fill="#8E44AD" opacity="0.4"/>
  ${Array.from({length:14}).map((_,i)=>{
    const x=30+i*20;
    return `<circle cx="${x}" cy="58" r="4" fill="#8E44AD"/>
            <line x1="${x}" y1="62" x2="${x}" y2="88" stroke="#8E44AD" stroke-width="2"/>
            <circle cx="${x}" cy="92" r="4" fill="#8E44AD"/>`;
  }).join('')}
  <rect x="100" y="45" width="25" height="70" rx="8" fill="#4ECDC4" opacity="0.9"/>
  <rect x="200" y="45" width="25" height="70" rx="8" fill="#4ECDC4" opacity="0.9"/>
  <text x="160" y="30" text-anchor="middle" font-size="11" fill="#333">Lipid bilayer + Proteins</text>
  <text x="160" y="140" text-anchor="middle" font-size="10" fill="#555">Hydrophilic heads outward, hydrophobic tails inward</text>
  <text x="112" y="160" text-anchor="middle" font-size="9" fill="#4ECDC4">Protein</text>
</svg>`
                                }
                            ]
                        },
                        {
                            id: "sci_c4",
                            display_name: {
                                english: "Cell Organelles & Functions",
                                hindi: "Cell Organelles और Functions"
                            },
                            description: {
                                english: "1. Nucleus: Has a double-layered nuclear membrane with pores for material transfer. Contains nucleolus (site of ribosomal subunit synthesis), chromosomes (visible during cell division), chromatin (DNA + proteins), and genes (functional segments of DNA).\n\n2. Prokaryotic cells lack a well-defined nucleus and membrane-bound organelles. DNA is present as a single circular molecule in the nucleoid region.\n\n3. Eukaryotic cells have a well-defined nucleus and several membrane-bound organelles.\n\n4. Ribosomes: Tiny structures either free in cytoplasm or attached to ER; sites of protein synthesis.\n\n5. Rough Endoplasmic Reticulum (RER): Has ribosomes attached; involved in protein synthesis and secretion (e.g., pancreatic cells).\n\n6. Smooth Endoplasmic Reticulum (SER): No ribosomes; involved in synthesis and storage of fats and hormones.\n\n7. Golgi apparatus: Stacks of flattened sac-like structures; modifies, sorts, and packages proteins/lipids into vesicles for transport, secretion, or lysosome formation.\n\n8. Lysosomes: Single membrane-bound sacs filled with enzymes; break down unwanted proteins, carbohydrates, fats, and damaged organelles. Known as 'clean-up system'.\n\n9. Mitochondria: 'Powerhouses of the cell'; double membrane, inner membrane folded into cristae; glucose broken down to release energy stored as ATP during cellular respiration.\n\n10. Plastids: Found in plant cells; chloroplasts (green, contain chlorophyll) for photosynthesis; chromoplasts (yellow/orange/red) for colour in flowers and fruits; leucoplasts (colourless) store starch, oils, or proteins.\n\n11. Vacuoles: In mature plant cells, one large central vacuole filled with cell sap; stores water, minerals, sugars, waste; maintains turgor pressure.\n\n12. Red Blood Cells (RBCs) lack a nucleus to provide more space for haemoglobin; lifespan about 120 days.\n\n13. Mitochondria and plastids have their own DNA and ribosomes, suggesting evolutionary history with bacteria.\n\n14. Cytoskeleton: Network of fine fibres providing structural support, maintaining cell shape, enabling movement and internal transport (visible only under electron microscope).\nKeywords: nucleus, nucleolus, chromatin, prokaryotic, eukaryotic, ribosome, ER, Golgi, lysosome, mitochondria, ATP, plastid, chloroplast, chromoplast, leucoplast, vacuole, cytoskeleton"
                            },
                            diagrams: null
                        },
                        {
                            id: "sci_c5",
                            display_name: {
                                english: "Cell Division & Cell Theory",
                                hindi: "Cell Division और Cell Theory"
                            },
                            description: {
                                english: "1. Cell division is the process by which new cells are formed from pre-existing cells. It allows growth, repair, and reproduction.\n\n2. Mitosis produces two genetically identical daughter cells from one parent cell. Each new cell gets the same DNA and same number of chromosomes. Important for growth, repair, maintenance, and asexual reproduction.\n\n3. Meiosis produces four daughter cells (gametes) with half the number of chromosomes. Occurs only in reproductive organs. Important for sexual reproduction and genetic diversity.\n\n4. In animals, meiosis occurs in testes (sperm) and ovaries (eggs). In plants, meiosis occurs in anthers (pollen grains) and ovaries (egg cells).\n\n5. Errors in mitosis lead to uncontrolled cell divisions, tumours, and abnormal chromosome numbers.\n\n6. Errors in meiosis may result in genetic disorders, developmental problems, early pregnancy loss, or reduced fertility.\n\n7. Cell Theory (classical): All living organisms are made up of one or more cells; the cell is the basic unit of structure and function; all cells arise from pre-existing cells.\n\n8. Matthias Schleiden (1838) — all plants are made up of cells.\n\n9. Theodor Schwann (1839) — all animals are made up of cells.\n\n10. Rudolf Virchow (1855) — new cells are formed only from pre-existing cells.\n\n11. Contact inhibition: In many animal cells, cell division stops when cells come in contact with neighbouring cells. Cancer cells lose this control and keep dividing.\n\n12. Programmed Cell Death (PCD): Genetically regulated process of selective cell destruction; essential for normal development (e.g., forming fingers by eliminating cells between digits).\n\n13. Totipotency: Ability of plant cells to develop into a complete plant (proposed by Gottlieb Haberlandt, 1902).\n\n14. Cell culture: Growing plant and animal cells outside the body in nutrient-rich medium under sterile conditions.\nKeywords: cell division, mitosis, meiosis, gametes, cell theory, Schleiden, Schwann, Virchow, contact inhibition, cancer, PCD, totipotency, cell culture"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        },
        // ===== CHAPTER 3: TISSUES =====
        {
            id: "sci_ch3",
            display_name: {
                english: "🫀 Tissues - Plant & Animal Tissues",
                hindi: "🫀 Tissues - Plant और Animal Tissues"
            },
            color: "#FFE66D",
            topics: [
                {
                    id: "sci_t3",
                    display_name: {
                        english: "🌱 Plant Tissues",
                        hindi: "🌱 Plant Tissues"
                    },
                    concepts: [
                        {
                            id: "sci_c6",
                            display_name: {
                                english: "Meristematic & Permanent Tissues",
                                hindi: "Meristematic और Permanent Tissues"
                            },
                            description: {
                                english: "1. Meristematic tissues: Actively dividing cells that form growth zones. Cells are small, thin-walled, have a large prominent nucleus, dense cytoplasm, and lack vacuoles.\n\n2. Apical meristem: Located at root and shoot tips; increases length (height of stem, depth of roots).\n\n3. Lateral meristem: Located along the circumference of stems; increases girth (thickness).\n\n4. Intercalary meristem: Located at the base of internodes or just above nodes (e.g., grasses); helps regrowth after cutting or grazing.\n\n5. Differentiation: Process by which meristematic tissue becomes specialised to perform specific functions (becomes permanent tissue).\n\n6. Permanent tissues: Cells that have lost the ability to divide and are specialised for specific functions. May be simple (one cell type) or complex (more than one cell type).\n\n7. Epidermis: Outermost layer of plant body; single layer of flat and rectangular cells; covered with waxy cuticle; protects against mechanical injury, water loss, microorganisms; contains stomata for gas exchange and transpiration.\n\n8. Parenchyma: Living cells with thin walls, loosely packed with intercellular spaces; stores food, performs photosynthesis, forms air spaces in aquatic plants.\n\n9. Collenchyma: Living cells with unevenly thickened corners due to pectin deposition; provides support and flexibility (e.g., stems, tendrils).\n\n10. Sclerenchyma: Thick walls due to lignin deposition; hard and strong; most cells dead; found in stems, leaf veins, seed/nut coverings (coconut husk, walnut shell).\n\n11. Xylem: Complex permanent tissue; transports water and minerals from roots; provides strength; consists of tracheids, vessels, xylem parenchyma (only living component), and xylem fibres.\n\n12. Phloem: Complex permanent tissue; mostly living cells; transports food from leaves; consists of sieve tubes, companion cells, phloem parenchyma, and phloem fibres.\n\n13. Plant tissue systems: Dermal (outer covering), Ground (main body between dermal and conducting tissues), Vascular (xylem and phloem).\nKeywords: meristematic, apical, lateral, intercalary, differentiation, permanent tissue, epidermis, cuticle, stomata, parenchyma, collenchyma, sclerenchyma, xylem, phloem, dermal, ground, vascular"
                            },
                            diagrams: null
                        }
                    ]
                },
                {
                    id: "sci_t4",
                    display_name: {
                        english: "🐾 Animal Tissues",
                        hindi: "🐾 Animal Tissues"
                    },
                    concepts: [
                        {
                            id: "sci_c7",
                            display_name: {
                                english: "Epithelial, Connective, Muscular & Nervous Tissues",
                                hindi: "Epithelial, Connective, Muscular और Nervous Tissues"
                            },
                            description: {
                                english: "1. Epithelial tissue: Forms outer covering (skin) and lines internal organs (mouth, lungs, blood vessels, intestine). Closely packed cells with little space between them.\n\n2. Types of epithelial tissue: Squamous (exchange — thin flat cells, lining of blood vessels and lungs), Stratified (protection — many layers, skin, mouth, oesophagus), Cuboidal/Columnar (secretion — salivary glands, sweat glands, stomach lining), Sensory (receptor cells with cilia — nostrils, taste buds, inner ear), Absorption (single layer of tall pillar-like cells — lining of small intestine).\n\n3. Connective tissue: Connects and supports other tissues. Matrix may be watery, soft, jelly-like (blood) or hard, solid, rigid (bone).\n\n4. Blood: Fluid connective tissue; plasma (55%), formed elements (45%) — RBCs, WBCs, platelets. RBCs contain haemoglobin; platelets help clotting; WBCs fight infection.\n\n5. Bone: Hard rigid matrix with calcium and phosphorus compounds; provides strength, support, protection.\n\n6. Cartilage: Soft jelly-like matrix; provides flexibility and cushions ends of bones (e.g., ear, nose, knee).\n\n7. Tendon: Connects muscle to bone; brings about movement.\n\n8. Ligament: Connects bone to bone; provides stability, limits movement, prevents dislocation.\n\n9. Muscular tissue: Skeletal (voluntary, striated, multinucleate, unbranched), Smooth (involuntary, spindle-shaped, single nucleus, non-striated), Cardiac (involuntary, cylindrical, branched, single nucleus, faint striations, works tirelessly).\n\n10. Nervous tissue: Neurons receive, process, and transmit messages. Parts: cell body (contains nucleus), dendrites (receive signals), axon (carries messages), axon terminals (transmit to other cells).\n\n11. Musculoskeletal system: Bones, muscles, joints, cartilage, tendons, ligaments; helps stand upright, move, maintain posture, protect organs; functions under nervous system control.\n\n12. Types of joints: Ball and socket (shoulder — forward, backward, sideways, circular), Hinge (elbow, knee — one direction), Pivot (neck — side to side), Fixed (skull — no movement).\n\n13. Skeletal system: Skull, vertebral column (spine), rib cage (12 pairs of ribs). Between vertebrae are cartilage discs for cushioning and flexibility.\n\n14. Rib cage expands and contracts during breathing due to flexible cartilage.\nKeywords: epithelial tissue, squamous, stratified, cuboidal, columnar, connective tissue, blood, bone, cartilage, tendon, ligament, skeletal muscle, smooth muscle, cardiac muscle, neuron, dendrite, axon, musculoskeletal system, ball and socket, hinge, pivot, fixed joint, rib cage"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        },
        // ===== CHAPTER 4: MOTION =====
        {
            id: "sci_ch4",
            display_name: {
                english: "🚗 Motion - Describing Motion Around Us",
                hindi: "🚗 Motion - Describing Motion Around Us"
            },
            color: "#A8E6CF",
            topics: [
                {
                    id: "sci_t5",
                    display_name: {
                        english: "📏 Motion in a Straight Line",
                        hindi: "📏 Motion in a Straight Line"
                    },
                    concepts: [
                        {
                            id: "sci_c8",
                            display_name: {
                                english: "Distance, Displacement, Speed & Velocity",
                                hindi: "Distance, Displacement, Speed और Velocity"
                            },
                            description: {
                                english: "1. Position: Described by distance and direction of the object with respect to a fixed reference point.\n\n2. Motion: If the position of the object with respect to the reference point changes with time, the object is in motion.\n\n3. Distance: Total length of the path travelled. It has only magnitude (no direction). SI unit: metre (m).\n\n4. Displacement: Net change in position between two instants. It has both magnitude and direction. SI unit: metre (m).\n\n5. The magnitude of displacement is the distance between the object's positions at two instants. The direction is from the first position towards the second.\n\n6. Total distance travelled and magnitude of displacement are equal if the object moves without turning back.\n\n7. Average speed = total distance travelled / time interval.\n\n8. Average velocity = change in position / time interval = displacement / time interval.\n\n9. SI unit of average speed and average velocity: metre per second (m s⁻¹ or m/s). Also commonly measured in kilometre per hour (km h⁻¹).\n\n10. Uniform motion in a straight line: Equal distances in equal intervals of time; constant speed.\n\n11. Non-uniform motion: Unequal distances in equal intervals of time.\n\n12. Average velocity is the average rate of change of position with respect to time.\n\n13. Example 4.2: Sarang swims 50 m in 50 s (one end to other and back). Total distance = 50 m; displacement = 0 m. Average speed = 1 m/s; average velocity = 0 m/s.\nKeywords: position, reference point, motion, distance, displacement, average speed, average velocity, uniform motion, non-uniform motion, SI unit"
                            },
                            diagrams: null
                        },
                        {
                            id: "sci_c9",
                            display_name: {
                                english: "Acceleration & Kinematic Equations",
                                hindi: "Acceleration और Kinematic Equations"
                            },
                            description: {
                                english: "1. Average acceleration = change in velocity / time interval = (final velocity - initial velocity) / time interval.\n\n2. Formula: a = (v - u) / (t₂ - t₁).\n\n3. SI unit of average acceleration: m s⁻² or m/s².\n\n4. If magnitude of velocity is increasing, acceleration is in the direction of velocity. If decreasing, acceleration is opposite to the direction of velocity.\n\n5. Acceleration can result from change in magnitude of velocity, change in direction, or both.\n\n6. Kinematic equations for motion in a straight line with constant acceleration:\n   (i) v = u + at\n   (ii) s = ut + ½ at²\n   (iii) v² = u² + 2as\n\n7. These equations relate displacement (s), time interval (t), initial velocity (u), final velocity (v), and acceleration (a).\n\n8. Note: Kinematic equations are valid only when acceleration is constant.\n\n9. Acceleration due to gravitational force by the Earth: g = 9.8 m s⁻² (approximately 10 m/s² for quick estimations).\n\n10. Example 4.3: Bus from 36 km/h to 54 km/h in 10 s → a = 0.5 m/s². Braking from 54 km/h to 0 in 5 s → a = -3 m/s².\n\n11. Example 4.8: Car braking with a = -4 m/s²; from 54 km/h (15 m/s) → distance 28.1 m; from 108 km/h (30 m/s) → distance 112.5 m.\nKeywords: acceleration, average acceleration, kinematic equations, v = u + at, s = ut + ½at², v² = u² + 2as, g = 9.8 m/s², braking distance"
                            },
                            diagrams: null
                        }
                    ]
                },
                {
                    id: "sci_t6",
                    display_name: {
                        english: "📊 Graphical Representation & Circular Motion",
                        hindi: "📊 Graphical Representation और Circular Motion"
                    },
                    concepts: [
                        {
                            id: "sci_c10",
                            display_name: {
                                english: "Graphs of Motion & Uniform Circular Motion",
                                hindi: "Motion के Graphs और Uniform Circular Motion"
                            },
                            description: {
                                english: "1. Position-time graph: Straight line indicates constant velocity; curved line indicates changing velocity (accelerated motion).\n\n2. Slope of position-time graph = velocity.\n\n3. Velocity-time graph: Straight line parallel to X-axis indicates constant velocity (zero acceleration); straight line inclined to X-axis indicates constant acceleration.\n\n4. Slope of velocity-time graph = acceleration.\n\n5. Area enclosed by velocity-time graph and time axis = displacement.\n\n6. Uniform circular motion: Object moves in a circular path with constant speed.\n\n7. In uniform circular motion, speed is constant but direction of velocity changes continuously, so the motion is accelerated.\n\n8. Distance travelled in one revolution = 2πR.\n\n9. Average speed for one revolution: v_av = 2πR / T, where T is the time period.\n\n10. Average velocity for one revolution = 0 (displacement is zero).\n\n11. The velocity at any point is along the tangent to the circle at that point.\n\n12. Example: Marble moving inside a ring — when the ring is lifted, the marble moves in a straight line along the tangent.\nKeywords: position-time graph, velocity-time graph, slope, displacement, uniform circular motion, tangent, 2πR, time period, accelerated motion"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        },
        // ===== CHAPTER 5: MIXTURES =====
        {
            id: "sci_ch5",
            display_name: {
                english: "🧪 Mixtures - Exploring Mixtures & Separation",
                hindi: "🧪 Mixtures - Exploring Mixtures और Separation"
            },
            color: "#FFB347",
            topics: [
                {
                    id: "sci_t7",
                    display_name: {
                        english: "⚗️ Solutions & Concentration",
                        hindi: "⚗️ Solutions और Concentration"
                    },
                    concepts: [
                        {
                            id: "sci_c11",
                            display_name: {
                                english: "Types of Mixtures & Concentration",
                                hindi: "Types of Mixtures और Concentration"
                            },
                            description: {
                                english: "1. Homogeneous mixture (solution): Uniform composition throughout. Examples: sugar in water, vinegar, aerated drinks.\n\n2. Heterogeneous mixture: Non-uniform composition. Examples: sand in water, oil in water.\n\n3. Solute: Substance that gets dissolved. Solvent: Substance that dissolves the solute.\n\n4. Concentration: Amount of solute dissolved in a given amount of solvent or solution.\n\n5. Mass by mass percentage (% m/m or % w/w) = (Mass of solute / Mass of solution) × 100.\n\n6. Mass by volume percentage (% m/v or % w/v) = (Mass of solute / Volume of solution) × 100.\n\n7. Volume by volume percentage (% v/v) = (Volume of solute / Volume of solution) × 100.\n\n8. Example 5.1: 10 g salt in 90 g water → total mass 100 g → 10% m/m.\n\n9. Example 5.2: 5 g glucose in 100 mL solution → 5% m/v.\n\n10. Example 5.3: 1 mL pesticide in 100 mL solution → 1% v/v.\n\n11. Solubility: Maximum amount of solute that dissolves in a fixed quantity of solvent (100 mL or 100 g) at a given temperature.\n\n12. Saturated solution: Cannot dissolve any more solute at that temperature.\n\n13. Solubility of a solid solute in a liquid solvent generally increases with temperature; solubility of gases in liquids generally decreases with increasing temperature.\n\n14. Solubility curve: Graph of solubility versus temperature.\nKeywords: homogeneous mixture, heterogeneous mixture, solute, solvent, concentration, mass by mass percentage, mass by volume percentage, volume by volume percentage, solubility, saturated solution, solubility curve"
                            },
                            diagrams: null
                        }
                    ]
                },
                {
                    id: "sci_t8",
                    display_name: {
                        english: "🔬 Separation Methods",
                        hindi: "🔬 Separation Methods"
                    },
                    concepts: [
                        {
                            id: "sci_c12",
                            display_name: {
                                english: "Crystallization, Distillation & Chromatography",
                                hindi: "Crystallization, Distillation और Chromatography"
                            },
                            description: {
                                english: "1. Crystallization: Process of forming crystals from a saturated solution. Based on differences in solubility at different temperatures. Used for purification of solids.\n\n2. Example: Saturated solution of compound B at 60°C (287 g/100 g water) cooled to 40°C (241 g/100 g water) → 46 g solid separates as crystals.\n\n3. Distillation: Separates two miscible liquids by heating until the liquid with lower boiling point vaporises; vapour is cooled and condensed. Used when boiling points differ by at least about 25°C. Also separates a liquid from a solution containing dissolved solids.\n\n4. Example: Acetone (boils at 56°C) and water (boils at 100°C) separated by distillation.\n\n5. Fractional distillation: Separates components with relatively small differences (less than 25°C) in boiling points. Used in petroleum refineries to separate crude oil into petroleum gas, petrol, kerosene, diesel, etc.\n\n6. Paper chromatography: Separates components based on differences in their interactions with the solvent and the paper. The liquid carries substances up the paper, separating them based on how fast they move.\n\n7. Separating funnel: Separates two immiscible liquids based on different densities (e.g., mustard oil and water).\n\n8. Sublimation: Solid changes directly to vapour without passing through liquid state (e.g., camphor, naphthalene). Deposition: Vapour cools and changes back to solid without becoming liquid.\n\n9. Centrifugation: Spinning a mixture at high speed; heavier particles settle at bottom, lighter liquid remains at top. Used to separate blood components (RBCs, plasma).\n\n10. Coagulation: Addition of a coagulant (e.g., alum) to make smaller particles clump together and settle down. Used in water purification.\n\n11. Tyndall effect: Scattering of light by particles in a colloid or suspension. Path of light beam is visible in colloid/suspension but not in transparent solution.\nKeywords: crystallization, distillation, fractional distillation, paper chromatography, separating funnel, sublimation, deposition, centrifugation, coagulation, Tyndall effect, colloid, suspension"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        },
        // ===== CHAPTER 6: FORCES =====
        {
            id: "sci_ch6",
            display_name: {
                english: "⚙️ Forces - How Forces Affect Motion",
                hindi: "⚙️ Forces - How Forces Affect Motion"
            },
            color: "#DDA0DD",
            topics: [
                {
                    id: "sci_t9",
                    display_name: {
                        english: "🧲 Force, Friction & Newton's Laws",
                        hindi: "🧲 Force, Friction और Newton's Laws"
                    },
                    concepts: [
                        {
                            id: "sci_c13",
                            display_name: {
                                english: "Concept of Force & Friction",
                                hindi: "Concept of Force और Friction"
                            },
                            description: {
                                english: "1. Force can make an object move from rest, change speed and direction of motion, or change shape of an object.\n\n2. Force is a vector quantity — requires magnitude and direction. SI unit: newton (N).\n\n3. A spring balance measures the magnitude of force (e.g., weight = gravitational force).\n\n4. Multiple forces may act on an object; motion depends only on the net force.\n\n5. Friction: Force arising between surfaces in contact, acting opposite to the direction of applied force.\n\n6. An object starts moving when the applied force is larger than the force of friction, so a net force acts in the direction of motion.\n\n7. Once moving, if the applied force is removed, friction slows the object down and brings it to rest.\n\n8. Force of friction depends on the nature of the surfaces in contact. Smaller friction → velocity decreases more slowly → object travels larger distance before stopping.\n\n9. Activity 6.2: Spring balance reading when block just starts moving gives an approximate measure of the force of friction.\n\n10. Galileo's thought experiment: If a body moves along a horizontal plane and all impediments are removed, it will continue to move indefinitely.\n\n11. Newton used the word 'inertia' to describe the tendency of objects to resist change in their state of rest or uniform motion.\n\n12. Normal force: Force exerted by the surface on the object, perpendicular to the surface, balancing the gravitational force (weight) in the vertical direction.\nKeywords: force, newton, spring balance, net force, friction, inertia, Galileo, normal force, weight, gravitational force"
                            },
                            diagrams: null
                        },
                        {
                            id: "sci_c14",
                            display_name: {
                                english: "Newton's Three Laws of Motion",
                                hindi: "Newton के Three Laws of Motion"
                            },
                            description: {
                                english: "1. Newton's First Law: An object at rest remains at rest, and an object in motion continues to move with a constant velocity, unless a net force acts upon the object. (Law of inertia)\n\n2. Newton's Second Law: When a net force acts on an object, the object accelerates in the direction of the net force. The magnitude of acceleration is proportional to the net force and inversely proportional to the mass of the object.\n\n3. Formula: a = F/m or F = ma.\n\n4. One newton is the force that produces an acceleration of 1 m/s² on an object of mass 1 kg.\n\n5. Gravitational force on an object of mass m: F = mg, where g = 9.8 m/s².\n\n6. Newton's Third Law: Whenever one object exerts a force on a second object, the second object simultaneously exerts an equal and opposite force on the first object. Forces always occur in pairs and act on two different objects.\n\n7. The pair of equal and opposite forces do not balance each other because they act on different objects.\n\n8. Example 6.4: Weightlifter holding barbell of 30 kg applies 294 N upward force.\n\n9. Example 6.5: Block of 25 kg, max friction 50 N. With applied force 50 N → net force zero → block stationary. With 55 N → net force 5 N → a = 0.2 m/s² → s = 0.4 m in 2 s.\n\n10. Example 6.6: Sports car of 1500 kg — accelerating (0-5 s): F = 3000 N east; constant velocity (5-10 s): F = 0; braking (10-15 s): F = -3000 N (west).\n\n11. Example 6.7: Earth and fruit apply equal and opposite gravitational forces, but Earth's acceleration is negligible due to its huge mass.\n\n12. Example 6.8: Bullet (0.1 kg) fired from gun (5 kg) with force 2 N → bullet acceleration 20 m/s², gun acceleration 0.4 m/s².\n\n13. System of objects: For two boxes connected by a string and pulled by force F, acceleration a = F/(m₁ + m₂).\nKeywords: Newton's first law, inertia, Newton's second law, F = ma, newton, g = 9.8 m/s², Newton's third law, action-reaction, system of objects"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        },
		
		{
            id: "es_ch7",
            display_name: {
                english: "⚙️ Work, Energy, and Simple Machines",
                hindi: "⚙️ Work, Energy, और Simple Machines"
            },
            color: "#FF6B6B",
            topics: [
                {
                    id: "es_t7",
                    display_name: {
                        english: "💪 Work, Energy & Power",
                        hindi: "💪 Work, Energy और Power"
                    },
                    concepts: [
                        {
                            id: "es_c1",
                            display_name: {
                                english: "Work Done by a Constant Force",
                                hindi: "Constant Force द्वारा Work Done"
                            },
                            description: {
                                english: "1. Work done on an object by a constant force = force applied × displacement in the direction of the force.\n\n2. W = F × s.\n\n3. SI unit of work is joule (J). 1 J = 1 N × 1 m = 1 kg m² s⁻².\n\n4. Work done is zero if: (i) force is zero, (ii) displacement is zero (e.g., pushing a rigid wall), (iii) force acts perpendicular to displacement (e.g., carrying a box while walking).\n\n5. Positive work: displacement is in the same direction as the applied force (e.g., pushing a wheelchair).\n\n6. Negative work: displacement is opposite to the direction of force (e.g., goalkeeper stopping a ball).\n\n7. In force-displacement graph, work done = area under the graph.\n\n8. Example 7.2: Goalkeeper applies 200 N force, ball moves back 15 cm → Work = 200 N × (-0.15 m) = -30 J.",
                                hindi: "1. किसी object पर constant force द्वारा Work done = force applied × force की direction में displacement.\n\n2. W = F × s.\n\n3. Work का SI unit joule (J) है। 1 J = 1 N × 1 m = 1 kg m² s⁻².\n\n4. Work done zero होता है यदि: (i) force zero है, (ii) displacement zero है (जैसे rigid wall को push करना), (iii) force displacement के perpendicular हो (जैसे box लेकर चलना).\n\n5. Positive work: displacement applied force की direction में हो (जैसे wheelchair push करना).\n\n6. Negative work: displacement force की opposite direction में हो (जैसे goalkeeper द्वारा ball रोकना).\n\n7. Force-displacement graph में, work done = graph के नीचे का area.\n\n8. Example 7.2: Goalkeeper 200 N force apply करता है, ball 15 cm पीछे जाती है → Work = 200 N × (-0.15 m) = -30 J.\nKeywords: work, joule, positive work, negative work, force-displacement graph, zero work"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c2",
                            display_name: {
                                english: "Work-Energy Theorem & Forms of Energy",
                                hindi: "Work-Energy Theorem और Energy के Forms"
                            },
                            description: {
                                english: "1. Work-Energy Theorem: Work done on an object = change in its energy.\n\n2. SI unit of energy is the same as work, the joule (J).\n\n3. Forms of energy: Mechanical, Thermal, Light, Sound, Electrical, Nuclear, Chemical.\n\n4. Mechanical energy: Energy due to motion or position.\n\n5. Kinetic energy: Energy possessed by an object due to its motion. K = ½ mv².\n\n6. Potential energy: Energy stored due to deformation or relative positions. Gravitational potential energy: U = mgh.\n\n7. Conservation of mechanical energy: Mechanical energy remains constant if no external forces act (e.g., free fall, pendulum).\n\n8. Example 7.4: If velocity doubles, kinetic energy becomes 4 times.\n\n9. Example 7.5: Cricket ball of 0.2 kg at 43 m/s → K = ½ × 0.2 × (43)² = 184.9 J.\n\n10. Example 7.8: Velocity at bottom of slide = √(2gh).",
                                hindi: "1. Work-Energy Theorem: किसी object पर Work done = उसकी energy में change.\n\n2. Energy का SI unit work के समान joule (J) है।\n\n3. Energy के forms: Mechanical, Thermal, Light, Sound, Electrical, Nuclear, Chemical.\n\n4. Mechanical energy: Motion या position के कारण energy.\n\n5. Kinetic energy: Motion के कारण object की energy. K = ½ mv².\n\n6. Potential energy: Deformation या relative positions के कारण stored energy. Gravitational potential energy: U = mgh.\n\n7. Conservation of mechanical energy: यदि कोई external force काम न करे तो mechanical energy constant रहती है (जैसे free fall, pendulum).\n\n8. Example 7.4: यदि velocity double हो जाए, kinetic energy 4 गुना हो जाती है.\n\n9. Example 7.5: 0.2 kg की cricket ball 43 m/s पर → K = ½ × 0.2 × (43)² = 184.9 J.\n\n10. Example 7.8: Slide के bottom पर velocity = √(2gh).\nKeywords: work-energy theorem, kinetic energy, potential energy, conservation of energy, mechanical energy, K = ½mv², U = mgh"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c3",
                            display_name: {
                                english: "Power & Simple Machines",
                                hindi: "Power और Simple Machines"
                            },
                            description: {
                                english: "1. Power is the rate at which work is done. P = W/t.\n\n2. SI unit of power is watt (W). 1 W = 1 J s⁻¹. 1 horsepower (hp) = 746 W.\n\n3. Simple machines: Devices that help do work by changing magnitude or direction of force.\n\n4. Mechanical advantage = load / effort.\n\n5. Pulley: A fixed pulley changes direction of force but does not reduce magnitude (MA = 1). Movable pulleys can have MA > 1.\n\n6. Inclined plane: Mechanical advantage = L/h, where L is length of incline and h is height. F′ × L = mgh.\n\n7. Lever: A rigid bar rotating about a fulcrum. Effort × effort arm = Load × load arm. Mechanical advantage = effort arm / load arm.\n\n8. Classes of levers: Class I (fulcrum between load and effort), Class II (load between fulcrum and effort), Class III (effort between fulcrum and load).\n\n9. Example 7.10: Weightlifter lifts 75 kg by 2 m in 5 s → Work = 1500 J, Power = 300 W.\n\n10. Example 7.13: Seesaw with 15 kg at 2 m balances 30 kg at 1 m.",
                                hindi: "1. Power work करने की rate है. P = W/t.\n\n2. Power का SI unit watt (W) है. 1 W = 1 J s⁻¹. 1 horsepower (hp) = 746 W.\n\n3. Simple machines: ऐसे devices जो force की magnitude या direction बदलकर work करना आसान बनाते हैं.\n\n4. Mechanical advantage = load / effort.\n\n5. Pulley: Fixed pulley force की direction बदलता है पर magnitude कम नहीं करता (MA = 1). Movable pulleys का MA > 1 हो सकता है.\n\n6. Inclined plane: Mechanical advantage = L/h, जहाँ L incline की length और h height है. F′ × L = mgh.\n\n7. Lever: Fulcrum के चारों ओर घूमने वाली rigid bar. Effort × effort arm = Load × load arm. Mechanical advantage = effort arm / load arm.\n\n8. Levers के classes: Class I (fulcrum load और effort के बीच), Class II (load fulcrum और effort के बीच), Class III (effort fulcrum और load के बीच).\n\n9. Example 7.10: Weightlifter 5 s में 75 kg को 2 m उठाता है → Work = 1500 J, Power = 300 W.\n\n10. Example 7.13: Seesaw में 15 kg at 2 m, 30 kg at 1 m को balance करता है.\nKeywords: power, watt, horsepower, simple machine, mechanical advantage, pulley, inclined plane, lever, fulcrum"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        },
        // ===== CHAPTER 8: JOURNEY INSIDE THE ATOM =====
        {
            id: "es_ch8",
            display_name: {
                english: "⚛️ Journey Inside the Atom",
                hindi: "⚛️ Journey Inside the Atom"
            },
            color: "#4ECDC4",
            topics: [
                {
                    id: "es_t8",
                    display_name: {
                        english: "🔬 Atomic Models & Subatomic Particles",
                        hindi: "🔬 Atomic Models और Subatomic Particles"
                    },
                    concepts: [
                        {
                            id: "es_c4",
                            display_name: {
                                english: "Historical Atomic Models",
                                hindi: "Historical Atomic Models"
                            },
                            description: {
                                english: "1. Acharya Kanada proposed parmanus (smallest indivisible particles) in Vaisesika Sutras.\n\n2. Greek philosophers Leucippus and Democritus called indivisible particles atomos.\n\n3. John Dalton (1808) proposed atomic theory: all matter is composed of indivisible atoms.\n\n4. J. J. Thomson (1897) discovered electrons using cathode rays. Proposed plum pudding model: sphere of positive charge with electrons embedded.\n\n5. Rutherford's gold foil experiment (1911): Alpha particles fired at thin gold foil. Most passed through undeflected, some deflected at large angles, a few bounced back.\n\n6. Rutherford's nuclear model: Positive charge concentrated in a tiny nucleus, most of atom is empty space, electrons revolve around nucleus like planets.\n\n7. Nucleus diameter ≈ 10⁻¹⁵ m; atom diameter ≈ 10⁻¹⁰ m.\n\n8. Niels Bohr (1913) proposed electrons move in fixed circular paths (orbits/shells) called stationary states: K, L, M, N... or n = 1, 2, 3, 4...\n\n9. Each shell has definite energy. Electrons do not lose energy while in a fixed shell.\n\n10. Energy increases as we move away from nucleus.",
                                hindi: "1. Acharya Kanada ने Vaisesika Sutras में parmanus (सबसे छोटे अविभाज्य particles) propose किए.\n\n2. Greek philosophers Leucippus और Democritus ने अविभाज्य particles को atomos कहा.\n\n3. John Dalton (1808) ने atomic theory propose की: सभी matter अविभाज्य atoms से बना है.\n\n4. J. J. Thomson (1897) ने cathode rays से electrons discover किए. Plum pudding model propose किया: positive charge के sphere में electrons embedded.\n\n5. Rutherford का gold foil experiment (1911): Thin gold foil पर alpha particles fired किए. अधिकतर undeflected pass हुए, कुछ large angles पर deflect हुए, कुछ bounce back हुए.\n\n6. Rutherford का nuclear model: Positive charge tiny nucleus में concentrated, atom का अधिकतर भाग empty space, electrons nucleus के चारों ओर planets की तरह revolve करते हैं.\n\n7. Nucleus diameter ≈ 10⁻¹⁵ m; atom diameter ≈ 10⁻¹⁰ m.\n\n8. Niels Bohr (1913) ने propose किया कि electrons fixed circular paths (orbits/shells) में चलते हैं जिन्हें stationary states कहते हैं: K, L, M, N... या n = 1, 2, 3, 4...\n\n9. प्रत्येक shell की definite energy होती है. Fixed shell में electrons energy नहीं खोते.\n\n10. Nucleus से दूर जाने पर energy बढ़ती है.\nKeywords: parmanu, atomos, Dalton, Thomson, plum pudding, Rutherford, gold foil, alpha particles, nucleus, Bohr, stationary states, K L M N shells"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c5",
                            display_name: {
                                english: "Subatomic Particles, Atomic Number & Mass Number",
                                hindi: "Subatomic Particles, Atomic Number और Mass Number"
                            },
                            description: {
                                english: "1. Electron (e⁻): Relative charge -1, mass negligible.\n\n2. Proton (p⁺): Relative charge +1, mass ≈ 1 u.\n\n3. Neutron (n⁰): Relative charge 0, mass ≈ 1 u. Discovered by James Chadwick (1932).\n\n4. Atomic number (Z) = number of protons in nucleus. Determines identity of element.\n\n5. For neutral atom, number of protons = number of electrons.\n\n6. Mass number (A) = number of protons + number of neutrons (nucleons).\n\n7. Notation: ᴬᶻX, e.g., ¹²₆C.\n\n8. Isotopes: Atoms of same element with same atomic number but different mass numbers (different neutrons). E.g., ¹₁H (protium), ²₁H (deuterium), ³₁H (tritium).\n\n9. Isobars: Atoms of different elements with same mass number but different atomic numbers. E.g., ⁴⁰₂₀Ca, ⁴⁰₁₉K, ⁴⁰₁₈Ar.\n\n10. Chemical properties of isotopes are similar because they have same number of valence electrons.\n\n11. Uses of isotopes: ²³⁵U in nuclear reactors; ⁶⁰Co in cancer treatment; ¹³¹I for thyroid; ¹⁴C for dating fossils.\n\n12. Average atomic mass = weighted average of isotopic masses based on natural abundance. E.g., Chlorine = (35 × 75/100) + (37 × 25/100) = 35.5 u.",
                                hindi: "1. Electron (e⁻): Relative charge -1, mass negligible.\n\n2. Proton (p⁺): Relative charge +1, mass ≈ 1 u.\n\n3. Neutron (n⁰): Relative charge 0, mass ≈ 1 u. James Chadwick (1932) ने discover किया.\n\n4. Atomic number (Z) = nucleus में protons की संख्या. Element की identity determine करता है.\n\n5. Neutral atom के लिए, protons की संख्या = electrons की संख्या.\n\n6. Mass number (A) = protons + neutrons (nucleons) की संख्या.\n\n7. Notation: ᴬᶻX, जैसे ¹²₆C.\n\n8. Isotopes: Same element के atoms जिनका atomic number same पर mass number अलग (neutrons अलग). जैसे ¹₁H (protium), ²₁H (deuterium), ³₁H (tritium).\n\n9. Isobars: Different elements के atoms जिनका mass number same पर atomic number अलग. जैसे ⁴⁰₂₀Ca, ⁴⁰₁₉K, ⁴⁰₁₈Ar.\n\n10. Isotopes के chemical properties similar होते हैं क्योंकि valence electrons की संख्या same होती है.\n\n11. Isotopes के uses: ²³⁵U nuclear reactors में; ⁶⁰Co cancer treatment में; ¹³¹I thyroid के लिए; ¹⁴C fossils की dating के लिए.\n\n12. Average atomic mass = natural abundance के आधार पर isotopic masses का weighted average. जैसे Chlorine = (35 × 75/100) + (37 × 25/100) = 35.5 u.\nKeywords: electron, proton, neutron, atomic number, mass number, isotopes, isobars, average atomic mass, Chadwick, nucleons"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c6",
                            display_name: {
                                english: "Electronic Configuration & Valency",
                                hindi: "Electronic Configuration और Valency"
                            },
                            description: {
                                english: "1. Maximum electrons in a shell = 2n², where n is shell number. K (n=1): 2, L (n=2): 8, M (n=3): 18.\n\n2. Maximum electrons in outermost shell = 8 (octet). First shell can have maximum 2.\n\n3. Electrons filled in order K, L, M, N...\n\n4. Electronic configuration: Distribution of electrons among various shells.\n\n5. Valence shell: Outermost shell containing electrons.\n\n6. Valence electrons: Electrons present in valence shell.\n\n7. Octet: 8 electrons in outermost shell (stable configuration).\n\n8. Valency: Number of electrons gained, lost, or shared to complete octet.\n\n9. If valence electrons < 4, element tends to lose electrons. If > 4, tends to gain electrons. Carbon (2,4) shares 4 electrons → valency 4.\n\n10. Example: Sodium (2,8,1) loses 1 electron → valency 1. Oxygen (2,6) gains 2 electrons → valency 2.",
                                hindi: "1. किसी shell में maximum electrons = 2n², जहाँ n shell number है. K (n=1): 2, L (n=2): 8, M (n=3): 18.\n\n2. Outermost shell में maximum electrons = 8 (octet). First shell में maximum 2.\n\n3. Electrons K, L, M, N... order में fill होते हैं.\n\n4. Electronic configuration: विभिन्न shells में electrons का distribution.\n\n5. Valence shell: Outermost shell जिसमें electrons होते हैं.\n\n6. Valence electrons: Valence shell में present electrons.\n\n7. Octet: Outermost shell में 8 electrons (stable configuration).\n\n8. Valency: Octet complete करने के लिए gain, lose, या share किए गए electrons की संख्या.\n\n9. यदि valence electrons < 4, element electrons lose करता है. यदि > 4, electrons gain करता है. Carbon (2,4) 4 electrons share करता है → valency 4.\n\n10. Example: Sodium (2,8,1) 1 electron lose करता है → valency 1. Oxygen (2,6) 2 electrons gain करता है → valency 2.\nKeywords: electronic configuration, 2n², octet, valence shell, valence electrons, valency, K L M N shells"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        },
        // ===== CHAPTER 9: ATOMIC FOUNDATIONS OF MATTER =====
        {
            id: "es_ch9",
            display_name: {
                english: "⚗️ Atomic Foundations of Matter",
                hindi: "⚗️ Atomic Foundations of Matter"
            },
            color: "#FFE66D",
            topics: [
                {
                    id: "es_t9",
                    display_name: {
                        english: "⚖️ Laws of Chemical Combination & Dalton's Theory",
                        hindi: "⚖️ Laws of Chemical Combination और Dalton's Theory"
                    },
                    concepts: [
                        {
                            id: "es_c7",
                            display_name: {
                                english: "Law of Conservation of Mass & Constant Proportions",
                                hindi: "Law of Conservation of Mass और Constant Proportions"
                            },
                            description: {
                                english: "1. Law of Conservation of Mass (Antoine Lavoisier, 1789): Mass can neither be created nor destroyed in a chemical reaction. Total mass of reactants = total mass of products.\n\n2. Law of Constant Proportions (Joseph Proust): In any compound, elements combine in a fixed ratio by mass, irrespective of source. E.g., water always has H:O mass ratio 1:8.\n\n3. Example 9.1: 4.0 g CaCO₃ + 2.92 g HCl → 1.76 g CO₂ + 0.72 g H₂O + 4.44 g CaCl₂. Total reactants = 6.92 g; total products = 6.92 g. Law obeyed.\n\n4. Example 9.2: 12 g C + 32 g O₂ → 44 g CO₂. If 2.4 g C reacts, CO₂ produced = (44/12) × 2.4 = 8.8 g.\n\n5. Example 9.3: NaCl has Na:Cl mass ratio 23:35.5. If 46 g Na reacts, Cl needed = (35.5/23) × 46 = 71 g.\n\n6. Dalton's Atomic Theory (1808) postulates: (i) All matter made of tiny indivisible atoms, (ii) Atoms cannot be created or destroyed in a chemical reaction, (iii) Atoms of given element are identical in mass and chemical properties, (iv) Atoms of different elements have different masses and properties, (v) Atoms combine in simple whole number ratios to form compounds, (vi) Relative number and kinds of atoms are constant in a given compound.",
                                hindi: "1. Law of Conservation of Mass (Antoine Lavoisier, 1789): Chemical reaction में mass न तो create हो सकता है न destroy. Reactants का total mass = Products का total mass.\n\n2. Law of Constant Proportions (Joseph Proust): किसी compound में elements हमेशा fixed mass ratio में combine होते हैं, source कोई भी हो. जैसे water में H:O mass ratio हमेशा 1:8.\n\n3. Example 9.1: 4.0 g CaCO₃ + 2.92 g HCl → 1.76 g CO₂ + 0.72 g H₂O + 4.44 g CaCl₂. Total reactants = 6.92 g; total products = 6.92 g. Law obeyed.\n\n4. Example 9.2: 12 g C + 32 g O₂ → 44 g CO₂. यदि 2.4 g C reacts, CO₂ produced = (44/12) × 2.4 = 8.8 g.\n\n5. Example 9.3: NaCl में Na:Cl mass ratio 23:35.5 है. यदि 46 g Na reacts, Cl needed = (35.5/23) × 46 = 71 g.\n\n6. Dalton's Atomic Theory (1808) postulates: (i) सभी matter tiny indivisible atoms से बना है, (ii) Chemical reaction में atoms create या destroy नहीं हो सकते, (iii) दिए गए element के atoms mass और chemical properties में identical हैं, (iv) Different elements के atoms के masses और properties अलग हैं, (v) Atoms simple whole number ratios में combine होकर compounds बनाते हैं, (vi) किसी compound में atoms की relative number और kinds constant हैं.\nKeywords: conservation of mass, Lavoisier, constant proportions, Proust, Dalton's atomic theory, chemical combination"
                            },
                            diagrams: null
                        }
                    ]
                },
                {
                    id: "es_t10",
                    display_name: {
                        english: "🔗 Chemical Bonding & Formulae",
                        hindi: "🔗 Chemical Bonding और Formulae"
                    },
                    concepts: [
                        {
                            id: "es_c8",
                            display_name: {
                                english: "Covalent & Ionic Bonds",
                                hindi: "Covalent और Ionic Bonds"
                            },
                            description: {
                                english: "1. Molecule: Electrically neutral entity of more than one atom capable of independent existence.\n\n2. Chemical bond: Force that holds atoms together.\n\n3. Covalent bond: Formed by sharing of electrons between atoms. E.g., H₂ (H-H), Cl₂ (Cl-Cl), O₂ (O=O, double bond), H₂O, HCl, CO₂.\n\n4. Single bond: Sharing one electron pair. Double bond: Sharing two electron pairs.\n\n5. Ionic bond: Formed by transfer of electrons from one atom to another, creating cations (+) and anions (-). Electrostatic force of attraction holds them. E.g., NaCl (Na⁺Cl⁻), MgCl₂.\n\n6. Cation: Positively charged ion formed by losing electrons (e.g., Na⁺, Ca²⁺, Al³⁺).\n\n7. Anion: Negatively charged ion formed by gaining electrons (e.g., Cl⁻, O²⁻, S²⁻).\n\n8. Naming covalent compounds: Prefixes mono-, di-, tri-, tetra-, penta-, hexa- indicate number of atoms. First element keeps name, second ends in -ide. E.g., CO₂ = carbon dioxide, PCl₃ = phosphorus trichloride, SF₆ = sulfur hexafluoride. When H is first, no prefix (H₂S = hydrogen sulfide).\n\n9. Naming ionic compounds: Cation name first, then anion name ending in -ide. E.g., NaCl = sodium chloride, CaO = calcium oxide.\n\n10. Polyatomic ions: Ions formed by combination of atoms (e.g., OH⁻, NO₃⁻, CO₃²⁻, SO₄²⁻, NH₄⁺).",
                                hindi: "1. Molecule: एक से अधिक atoms की electrically neutral entity जो independently exist कर सकती है.\n\n2. Chemical bond: वह force जो atoms को together रखता है.\n\n3. Covalent bond: Atoms के बीच electrons sharing से बनता है. जैसे H₂ (H-H), Cl₂ (Cl-Cl), O₂ (O=O, double bond), H₂O, HCl, CO₂.\n\n4. Single bond: एक electron pair share करना. Double bond: दो electron pairs share करना.\n\n5. Ionic bond: एक atom से दूसरे atom में electrons transfer से बनता है, cations (+) और anions (-) बनते हैं. Electrostatic force of attraction उन्हें hold करता है. जैसे NaCl (Na⁺Cl⁻), MgCl₂.\n\n6. Cation: Electrons lose करके बना positively charged ion (जैसे Na⁺, Ca²⁺, Al³⁺).\n\n7. Anion: Electrons gain करके बना negatively charged ion (जैसे Cl⁻, O²⁻, S²⁻).\n\n8. Covalent compounds का naming: Prefixes mono-, di-, tri-, tetra-, penta-, hexa- atoms की संख्या बताते हैं. First element का नाम same रहता है, second -ide पर ends होता है. जैसे CO₂ = carbon dioxide, PCl₃ = phosphorus trichloride, SF₆ = sulfur hexafluoride. जब H first हो, prefix नहीं (H₂S = hydrogen sulfide).\n\n9. Ionic compounds का naming: Cation का नाम पहले, फिर anion का नाम -ide पर ending. जैसे NaCl = sodium chloride, CaO = calcium oxide.\n\n10. Polyatomic ions: Atoms के combination से बने ions (जैसे OH⁻, NO₃⁻, CO₃²⁻, SO₄²⁻, NH₄⁺).\nKeywords: molecule, covalent bond, ionic bond, cation, anion, polyatomic ion, naming compounds, H₂O, NaCl"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c9",
                            display_name: {
                                english: "Writing Chemical Formulae & Molecular Mass",
                                hindi: "Writing Chemical Formulae और Molecular Mass"
                            },
                            description: {
                                english: "1. For covalent compounds: Write symbols, write valencies, crossover valencies as subscripts.\n\n2. For ionic compounds: Write cation symbol first, then anion. Write charges, crossover numbers (drop signs). Divide subscripts by common factor if needed.\n\n3. Use brackets for polyatomic ions when more than one is present. E.g., Mg(OH)₂, Al(OH)₃.\n\n4. Examples: HCl, H₂S, CCl₄, CaCl₂, Al₂O₃, MgO, CaCO₃, Al₂(SO₄)₃.\n\n5. Molecular mass of covalent compound = sum of atomic masses of all atoms in molecule. E.g., H₂O = (1×2) + 16 = 18 u; CO₂ = 12 + (16×2) = 44 u.\n\n6. Formula unit mass of ionic compound = sum of atomic masses of all atoms in formula unit. E.g., Na₂O = (23×2) + 16 = 62 u.",
                                hindi: "1. Covalent compounds के लिए: Symbols लिखें, valencies लिखें, valencies को subscripts के रूप में crossover करें.\n\n2. Ionic compounds के लिए: Cation symbol पहले, फिर anion. Charges लिखें, numbers crossover करें (signs drop करें). जरूरत हो तो subscripts को common factor से divide करें.\n\n3. Polyatomic ions के लिए brackets का उपयोग करें जब एक से अधिक हों. जैसे Mg(OH)₂, Al(OH)₃.\n\n4. Examples: HCl, H₂S, CCl₄, CaCl₂, Al₂O₃, MgO, CaCO₃, Al₂(SO₄)₃.\n\n5. Covalent compound का molecular mass = molecule के सभी atoms के atomic masses का sum. जैसे H₂O = (1×2) + 16 = 18 u; CO₂ = 12 + (16×2) = 44 u.\n\n6. Ionic compound का formula unit mass = formula unit के सभी atoms के atomic masses का sum. जैसे Na₂O = (23×2) + 16 = 62 u.\nKeywords: chemical formula, criss-cross, molecular mass, formula unit mass, polyatomic ion, brackets, valency"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c10",
                            display_name: {
                                english: "Properties of Ionic & Covalent Compounds",
                                hindi: "Ionic और Covalent Compounds के Properties"
                            },
                            description: {
                                english: "1. Ionic compounds: Generally soluble in water, insoluble in kerosene/petrol. Do not conduct electricity in solid state (ions fixed). Conduct electricity when dissolved in water (ions free to move). High melting and boiling points due to strong inter-ionic attractions.\n\n2. Covalent compounds: Most are insoluble in water but dissolve in kerosene/petrol. Do not conduct electricity (no free ions). Low melting and boiling points. Sugar is soluble in water but does not conduct electricity (no ions).\n\n3. Ionic compounds form 3-D crystal structures (e.g., NaCl where each Na⁺ is surrounded by six Cl⁻ and vice versa).\n\n4. Covalent compounds form molecules (e.g., H₂O, CO₂).",
                                hindi: "1. Ionic compounds: आमतौर पर water में soluble, kerosene/petrol में insoluble. Solid state में electricity conduct नहीं करते (ions fixed). Water में dissolve होने पर electricity conduct करते हैं (ions free to move). Strong inter-ionic attractions के कारण high melting और boiling points.\n\n2. Covalent compounds: अधिकतर water में insoluble पर kerosene/petrol में dissolve होते हैं. Electricity conduct नहीं करते (free ions नहीं). Low melting और boiling points. Sugar water में soluble है पर electricity conduct नहीं करता (ions नहीं).\n\n3. Ionic compounds 3-D crystal structures बनाते हैं (जैसे NaCl में each Na⁺ six Cl⁻ से surrounded है और vice versa).\n\n4. Covalent compounds molecules बनाते हैं (जैसे H₂O, CO₂).\nKeywords: ionic compounds, covalent compounds, solubility, electrical conductivity, crystal structure, melting point, boiling point"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        },
        // ===== CHAPTER 10: SOUND WAVES =====
        {
            id: "es_ch10",
            display_name: {
                english: "🔊 Sound Waves - Characteristics and Applications",
                hindi: "🔊 Sound Waves - Characteristics और Applications"
            },
            color: "#A8E6CF",
            topics: [
                {
                    id: "es_t11",
                    display_name: {
                        english: "🎵 Production & Propagation of Sound",
                        hindi: "🎵 Production और Propagation of Sound"
                    },
                    concepts: [
                        {
                            id: "es_c11",
                            display_name: {
                                english: "Sound Production & Medium",
                                hindi: "Sound Production और Medium"
                            },
                            description: {
                                english: "1. Sound is produced by vibrations (periodic to-and-fro motion) of objects.\n\n2. Source of sound: The object that produces sound.\n\n3. Human voice: Produced by vibration of vocal cords in the larynx (voice box).\n\n4. Tuning fork: U-shaped metal bar with prongs; struck on rubber pad to vibrate.\n\n5. Sound propagates through a medium (solid, liquid, or gas). It cannot travel in vacuum.\n\n6. Vacuum bell jar experiment: Electric bell in bell jar; as air is pumped out, sound becomes fainter; near vacuum → almost no sound heard.\n\n7. Sound travels through solids (e.g., table), liquids (e.g., water), and gases (e.g., air).\n\n8. Astronauts in space cannot directly hear each other (near vacuum).",
                                hindi: "1. Sound objects के vibrations (periodic to-and-fro motion) से produce होता है.\n\n2. Source of sound: वह object जो sound produce करता है.\n\n3. Human voice: Larynx (voice box) में vocal cords के vibration से produce होती है.\n\n4. Tuning fork: U-shaped metal bar जिसमें prongs होते हैं; rubber pad पर strike करके vibrate कराया जाता है.\n\n5. Sound medium (solid, liquid, या gas) के through propagate होता है. Vacuum में travel नहीं कर सकता.\n\n6. Vacuum bell jar experiment: Bell jar में electric bell; air pump out करने पर sound fainter होता जाता है; near vacuum → लगभग कोई sound नहीं सुनाई देता.\n\n7. Sound solids (जैसे table), liquids (जैसे water), और gases (जैसे air) के through travel करता है.\n\n8. Space में astronauts एक-दूसरे को directly नहीं सुन सकते (near vacuum).\nKeywords: vibration, source of sound, vocal cords, tuning fork, medium, vacuum, bell jar experiment"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c12",
                            display_name: {
                                english: "Sound Waves, Characteristics & Speed",
                                hindi: "Sound Waves, Characteristics और Speed"
                            },
                            description: {
                                english: "1. Sound wave: Disturbance consisting of alternating compressions (C) and rarefactions (R) propagating through a medium without actual flow of particles.\n\n2. Compression: Region of higher density. Rarefaction: Region of lower density.\n\n3. Particles of medium vibrate about their mean positions; they do not travel with the wave.\n\n4. Longitudinal wave: Particles vibrate parallel to direction of wave propagation. Sound is a longitudinal wave.\n\n5. Mechanical wave: Requires material medium for propagation. Sound is a mechanical wave.\n\n6. Transverse wave: Particles vibrate perpendicular to direction of propagation. Light is a transverse wave (can travel through vacuum).\n\n7. Wavelength (λ): Distance between two consecutive crests or troughs. SI unit: metre (m).\n\n8. Frequency (ν): Number of density oscillations per unit time at a fixed point. SI unit: hertz (Hz).\n\n9. Time period (T): Time for one complete oscillation. ν = 1/T.\n\n10. Amplitude: Maximum change in density from average. Larger amplitude → more energy → louder sound.\n\n11. Intensity: Sound energy passing through unit area per unit time. Decreases with distance from source.\n\n12. Speed of sound (v): v = λ × ν. Speed = distance/time.\n\n13. Speed in different media: Solid > Liquid > Gas. In air, ~331 m/s at 0°C and ~344 m/s at 22°C.\n\n14. Example 10.2: For human hearing range 20 Hz to 20 kHz, wavelengths in air at 344 m/s: 17.2 m (20 Hz) and 1.72 cm (20 kHz).\n\n15. Example 10.3: Thunder heard 5 s after lightning → distance = 340 × 5 = 1700 m (1.7 km).\n\n16. Example 10.4: Wavelength 50 m in steel (v = 5000 m/s) → frequency = 100 Hz, time period = 0.01 s.",
                                hindi: "1. Sound wave: Medium में alternating compressions (C) और rarefactions (R) की disturbance जो propagate होती है, particles का actual flow नहीं होता.\n\n2. Compression: Higher density का region. Rarefaction: Lower density का region.\n\n3. Medium के particles अपनी mean positions के about vibrate करते हैं; वे wave के साथ travel नहीं करते.\n\n4. Longitudinal wave: Particles wave propagation की direction के parallel vibrate करते हैं. Sound longitudinal wave है.\n\n5. Mechanical wave: Propagation के लिए material medium चाहिए. Sound mechanical wave है.\n\n6. Transverse wave: Particles propagation की direction के perpendicular vibrate करते हैं. Light transverse wave है (vacuum में travel कर सकती है).\n\n7. Wavelength (λ): दो consecutive crests या troughs के बीच distance. SI unit: metre (m).\n\n8. Frequency (ν): Fixed point पर प्रति unit time density oscillations की संख्या. SI unit: hertz (Hz).\n\n9. Time period (T): एक complete oscillation का time. ν = 1/T.\n\n10. Amplitude: Average से maximum density change. ज्यादा amplitude → ज्यादा energy → louder sound.\n\n11. Intensity: Unit area से प्रति unit time pass होने वाली sound energy. Source से distance के साथ घटती है.\n\n12. Speed of sound (v): v = λ × ν.\n\n13. Different media में speed: Solid > Liquid > Gas. Air में, 0°C पर ~331 m/s और 22°C पर ~344 m/s.\n\n14. Example 10.2: Human hearing range 20 Hz से 20 kHz, air में 344 m/s पर wavelengths: 17.2 m (20 Hz) और 1.72 cm (20 kHz).\n\n15. Example 10.3: Lightning के 5 s बाद thunder सुनाई दे → distance = 340 × 5 = 1700 m (1.7 km).\n\n16. Example 10.4: Steel में wavelength 50 m (v = 5000 m/s) → frequency = 100 Hz, time period = 0.01 s.\nKeywords: sound wave, compression, rarefaction, longitudinal wave, mechanical wave, wavelength, frequency, time period, amplitude, intensity, speed of sound"
                            },
                            diagrams: null
                        }
                    ]
                },
                {
                    id: "es_t12",
                    display_name: {
                        english: "👂 Human Perception, Reflection & Applications",
                        hindi: "👂 Human Perception, Reflection और Applications"
                    },
                    concepts: [
                        {
                            id: "es_c13",
                            display_name: {
                                english: "Pitch, Loudness & Audible Range",
                                hindi: "Pitch, Loudness और Audible Range"
                            },
                            description: {
                                english: "1. Pitch: How frequency is perceived by humans. High pitch = higher frequency; low pitch = lower frequency.\n\n2. Loudness: How amplitude is perceived. Larger amplitude = louder sound.\n\n3. Audible range (human hearing range): 20 Hz to 20,000 Hz (20 kHz). Varies with age.\n\n4. Infrasonic waves: Frequency below 20 Hz. Not audible to humans. Elephants can detect.\n\n5. Ultrasonic waves: Frequency above 20 kHz. Not audible to humans. Dogs, cats, bats, dolphins can detect.\n\n6. Decibel (dB): Unit for sound loudness. Normal conversation ~60 dB; firecrackers >100 dB.\n\n7. Noise pollution: Unwanted/harmful sound. Prolonged exposure to loud sound can cause hearing loss.\n\n8. Tone: Sound of a single frequency (e.g., tuning fork, whistling).\n\n9. Musical note: Combination of fundamental frequency and overtones (e.g., singing, tanpura).\n\n10. Timbre: Quality of sound that distinguishes different instruments playing same note. Depends on shape, material, construction, and overtone pattern.\n\n11. Octave: Interval between two notes where one has double the frequency of the other.",
                                hindi: "1. Pitch: Humans द्वारा frequency को कैसे perceive किया जाता है. High pitch = higher frequency; low pitch = lower frequency.\n\n2. Loudness: Amplitude को कैसे perceive किया जाता है. Larger amplitude = louder sound.\n\n3. Audible range (human hearing range): 20 Hz से 20,000 Hz (20 kHz). Age के साथ बदलती है.\n\n4. Infrasonic waves: 20 Hz से कम frequency. Humans को सुनाई नहीं देती. Elephants detect कर सकते हैं.\n\n5. Ultrasonic waves: 20 kHz से ज्यादा frequency. Humans को सुनाई नहीं देती. Dogs, cats, bats, dolphins detect कर सकते हैं.\n\n6. Decibel (dB): Sound loudness का unit. Normal conversation ~60 dB; firecrackers >100 dB.\n\n7. Noise pollution: Unwanted/harmful sound. Prolonged exposure से hearing loss हो सकती है.\n\n8. Tone: Single frequency की sound (जैसे tuning fork, whistling).\n\n9. Musical note: Fundamental frequency और overtones का combination (जैसे singing, tanpura).\n\n10. Timbre: Sound की quality जो different instruments को same note बजाने पर distinguish करती है. Shape, material, construction, और overtone pattern पर depend करती है.\n\n11. Octave: दो notes के बीच interval जहाँ एक की frequency दूसरे की double होती है.\nKeywords: pitch, loudness, audible range, infrasonic, ultrasonic, decibel, noise pollution, tone, timbre, octave"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c14",
                            display_name: {
                                english: "Reflection of Sound, Echo & Applications",
                                hindi: "Reflection of Sound, Echo और Applications"
                            },
                            description: {
                                english: "1. Reflection of sound: Sound waves bounce off obstacles (solids/liquids). Follows same laws as light reflection.\n\n2. Echo: Reflected sound heard separately after original sound. Requires time gap of at least 0.1 s.\n\n3. Minimum echo distance: 17 m (for v = 340 m/s).\n\n4. Example 10.5: Clap heard echo after 0.5 s → distance from wall = (340 × 0.5)/2 = 85 m.\n\n5. Reverberation: Multiple reflections making sound persist after source stops. Occurs when reflections arrive with time difference < 0.05 s.\n\n6. Sonar (Sound Navigation and Ranging): Uses ultrasonic waves in water to determine distance, direction, speed of underwater objects.\n\n7. Example 10.6: Sonar signal returns after 0.90 s (v = 1530 m/s in seawater) → distance = 1530 × 0.45 = 688.5 m.\n\n8. Ultrasonic applications: Sonar, medical imaging, industrial cleaning, distance sensors (parking assistance), pest control.\n\n9. Infrasonic applications: Earthquake detection (seismic waves), animal communication (elephants).\n\n10. Audio surveillance: Detecting drones/aircraft by their low-frequency sound.",
                                hindi: "1. Reflection of sound: Sound waves obstacles (solids/liquids) से bounce off होती हैं. Light reflection के समान laws follow करती हैं.\n\n2. Echo: Original sound के बाद अलग से सुनाई देने वाली reflected sound. कम से कम 0.1 s का time gap चाहिए.\n\n3. Minimum echo distance: 17 m (v = 340 m/s के लिए).\n\n4. Example 10.5: 0.5 s बाद echo सुनाई दे → wall से distance = (340 × 0.5)/2 = 85 m.\n\n5. Reverberation: Multiple reflections से source बंद होने के बाद भी sound persist करती है. जब reflections 0.05 s से कम time difference से आती हैं.\n\n6. Sonar (Sound Navigation and Ranging): Water में ultrasonic waves का उपयोग करके underwater objects की distance, direction, speed determine करता है.\n\n7. Example 10.6: Sonar signal 0.90 s बाद return (seawater में v = 1530 m/s) → distance = 1530 × 0.45 = 688.5 m.\n\n8. Ultrasonic applications: Sonar, medical imaging, industrial cleaning, distance sensors (parking assistance), pest control.\n\n9. Infrasonic applications: Earthquake detection (seismic waves), animal communication (elephants).\n\n10. Audio surveillance: Drones/aircraft को उनकी low-frequency sound से detect करना.\nKeywords: reflection of sound, echo, reverberation, sonar, ultrasonic, infrasonic, audio surveillance"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        },
        // ===== CHAPTER 11: REPRODUCTION =====
        {
            id: "es_ch11",
            display_name: {
                english: "🧬 Reproduction - How Life Continues",
                hindi: "🧬 Reproduction - How Life Continues"
            },
            color: "#FFB347",
            topics: [
                {
                    id: "es_t13",
                    display_name: {
                        english: "🌱 Asexual & Sexual Reproduction",
                        hindi: "🌱 Asexual और Sexual Reproduction"
                    },
                    concepts: [
                        {
                            id: "es_c15",
                            display_name: {
                                english: "Asexual Reproduction & Vegetative Propagation",
                                hindi: "Asexual Reproduction और Vegetative Propagation"
                            },
                            description: {
                                english: "1. Asexual reproduction: Single parent produces offspring that are genetically identical (clones).\n\n2. Seen in unicellular organisms (bacteria, amoeba, yeast) and simple multicellular organisms (hydra, sponge).\n\n3. Vegetative propagation in plants: New plants arise from vegetative parts (roots, stems, leaves).\n\n4. Examples: Potato and ginger (underground stems), money plant stem, sugarcane stem cuttings, Bryophyllum leaves sprout plantlets.\n\n5. Artificial methods: Cutting, grafting, layering, tissue culture.\n\n6. Cutting: Shoot cuttings with nodes inserted in soil at 45-60° angle.\n\n7. Grafting: Stem piece of desired plant (scion) inserted into slit of rooted plant (stock).\n\n8. Layering: Flexible twig buried in soil; roots develop; then cut from parent.\n\n9. Tissue culture: Mass production of healthy plantlets from shoot tip (apical meristem).\n\n10. Budding: Repeated cell division at specific site produces bud that separates (e.g., hydra).\n\n11. Spore formation: Fungi produce spores in sac-like structures (e.g., Rhizopus) or on swollen vesicles (e.g., Aspergillus). Spores are lightweight, single-celled, float through air.\n\n12. Central process in asexual reproduction is mitosis, producing genetically identical offspring.\n\n13. Louis Pasteur proved new life always comes from pre-existing life.",
                                hindi: "1. Asexual reproduction: Single parent से offspring produce होते हैं जो genetically identical (clones) होते हैं.\n\n2. Unicellular organisms (bacteria, amoeba, yeast) और simple multicellular organisms (hydra, sponge) में देखा जाता है.\n\n3. Plants में vegetative propagation: Vegetative parts (roots, stems, leaves) से नए plants बनते हैं.\n\n4. Examples: Potato और ginger (underground stems), money plant stem, sugarcane stem cuttings, Bryophyllum leaves से plantlets.\n\n5. Artificial methods: Cutting, grafting, layering, tissue culture.\n\n6. Cutting: Nodes वाली shoot cuttings 45-60° angle पर soil में insert की जाती हैं.\n\n7. Grafting: Desired plant (scion) का stem piece rooted plant (stock) की slit में insert किया जाता है.\n\n8. Layering: Flexible twig soil में bury की जाती है; roots develop होते हैं; फिर parent से cut किया जाता है.\n\n9. Tissue culture: Shoot tip (apical meristem) से healthy plantlets का mass production.\n\n10. Budding: Specific site पर repeated cell division से bud बनता है जो separate हो जाता है (जैसे hydra).\n\n11. Spore formation: Fungi sac-like structures (जैसे Rhizopus) या swollen vesicles (जैसे Aspergillus) पर spores produce करते हैं. Spores lightweight, single-celled, air में float करते हैं.\n\n12. Asexual reproduction में central process mitosis है, जिससे genetically identical offspring बनते हैं.\n\n13. Louis Pasteur ने prove किया कि नई life हमेशा pre-existing life से आती है.\nKeywords: asexual reproduction, vegetative propagation, cutting, grafting, layering, tissue culture, budding, spore formation, mitosis, clone"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c16",
                            display_name: {
                                english: "Sexual Reproduction in Plants & Animals",
                                hindi: "Plants और Animals में Sexual Reproduction"
                            },
                            description: {
                                english: "1. Sexual reproduction: Two parents contribute genetic material.\n\n2. Meiosis: Special cell division forming gametes with half the chromosome number. Creates genetic variation.\n\n3. In animals: Male gamete = sperm; female gamete = egg.\n\n4. In plants: Pollen grain contains male gametes; ovule contains female gamete (egg).\n\n5. Flower parts: Sepals (protect bud), Petals (attract pollinators), Stamens (male: anther + filament), Pistil (female: stigma + style + ovary).\n\n6. Pollination: Transfer of pollen from anther to stigma. Self-pollination (same flower/plant) or cross-pollination (different plant of same type).\n\n7. Pollinators: Wind, water, insects (bees, butterflies), birds.\n\n8. Wind-pollinated flowers: Light, small pollen, large numbers, feathery stigma (e.g., wheat, maize, rice).\n\n9. Insect-pollinated flowers: Bright colours, nectar, fragrance, large sticky/spiny pollen, sticky stigma (e.g., sunflower, hibiscus).\n\n10. Fertilisation: Fusion of male and female gametes to form zygote. Pollen tube carries male gamete to ovule.\n\n11. After fertilisation: Ovule → seed; Ovary → fruit.\n\n12. Seed dispersal: Wind, water, animals.\n\n13. In animals: External fertilisation (fish, frogs) — eggs and sperm released in water. Internal fertilisation (reptiles, birds, mammals) — inside female body.\n\n14. Animals with external fertilisation produce more eggs (low survival). Internal fertilisation → more protection, fewer eggs.\n\n15. Metamorphosis: Larva (feeding stage) transforms into adult (e.g., butterfly, frog).",
                                hindi: "1. Sexual reproduction: दो parents genetic material contribute करते हैं.\n\n2. Meiosis: Special cell division जो gametes बनाती है जिनमें half chromosome number होता है. Genetic variation create करती है.\n\n3. Animals में: Male gamete = sperm; female gamete = egg.\n\n4. Plants में: Pollen grain में male gametes होते हैं; ovule में female gamete (egg) होता है.\n\n5. Flower parts: Sepals (bud protect करते हैं), Petals (pollinators attract करते हैं), Stamens (male: anther + filament), Pistil (female: stigma + style + ovary).\n\n6. Pollination: Anther से stigma तक pollen का transfer. Self-pollination (same flower/plant) या cross-pollination (same type के different plant).\n\n7. Pollinators: Wind, water, insects (bees, butterflies), birds.\n\n8. Wind-pollinated flowers: Light, small pollen, large numbers, feathery stigma (जैसे wheat, maize, rice).\n\n9. Insect-pollinated flowers: Bright colours, nectar, fragrance, large sticky/spiny pollen, sticky stigma (जैसे sunflower, hibiscus).\n\n10. Fertilisation: Male और female gametes का fusion से zygote बनता है. Pollen tube male gamete को ovule तक ले जाती है.\n\n11. Fertilisation के बाद: Ovule → seed; Ovary → fruit.\n\n12. Seed dispersal: Wind, water, animals.\n\n13. Animals में: External fertilisation (fish, frogs) — eggs और sperm water में release होते हैं. Internal fertilisation (reptiles, birds, mammals) — female body के अंदर.\n\n14. External fertilisation वाले animals ज्यादा eggs produce करते हैं (low survival). Internal fertilisation → ज्यादा protection, कम eggs.\n\n15. Metamorphosis: Larva (feeding stage) adult में transform होता है (जैसे butterfly, frog).\nKeywords: sexual reproduction, meiosis, gametes, flower parts, pollination, self-pollination, cross-pollination, fertilisation, zygote, seed, fruit, external fertilisation, internal fertilisation, metamorphosis"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c17",
                            display_name: {
                                english: "Human Reproductive System & Menstrual Cycle",
                                hindi: "Human Reproductive System और Menstrual Cycle"
                            },
                            description: {
                                english: "1. Male reproductive system: Testes (produce sperm and hormones), scrotum (keeps testes cooler), vas deferens, urethra, seminal vesicles, prostate gland, penis.\n\n2. Sperm: Head (genetic material) + tail (for swimming).\n\n3. Female reproductive system: Ovaries (produce eggs and hormones), oviducts (fallopian tubes), uterus, cervix, vagina.\n\n4. Ovulation: Release of one mature egg from ovary, usually once every month from puberty onwards.\n\n5. Menstrual cycle: Repeats every 21-35 days (often ~28 days).\n\n6. Day 1-5: Menstruation (shedding of uterine lining).\n\n7. Day 6-14: Uterine lining rebuilds; egg matures in ovary.\n\n8. Day 14: Ovulation (ovary releases mature egg).\n\n9. Day 15-28: Uterine lining becomes thick and rich with blood vessels; if no fertilisation, lining breaks down ~28th day.\n\n10. Fertilisation: Sperm fuses with egg in oviduct → zygote → travels to uterus → implants in uterine lining → pregnancy begins.\n\n11. Pregnancy: ~9 months, divided into three trimesters. Embryo → foetus. Childbirth: uterine contractions push foetus out through birth canal.\n\n12. If egg not fertilised: Egg degenerates; uterine lining sheds (menstruation).\n\n13. Sex determination: Females have XX chromosomes; males have XY. Mother contributes X; father contributes X (female) or Y (male).\n\n14. Contraception: Condoms (barrier), oral pills (hormonal), IUDs (Copper-T).\n\n15. STIs: Gonorrhoea, herpes, syphilis, genital warts, HIV/AIDS. Condoms prevent transmission.",
                                hindi: "1. Male reproductive system: Testes (sperm और hormones produce करते हैं), scrotum (testes को cooler रखता है), vas deferens, urethra, seminal vesicles, prostate gland, penis.\n\n2. Sperm: Head (genetic material) + tail (swimming के लिए).\n\n3. Female reproductive system: Ovaries (eggs और hormones produce करते हैं), oviducts (fallopian tubes), uterus, cervix, vagina.\n\n4. Ovulation: Ovary से एक mature egg का release, puberty के बाद आमतौर पर महीने में एक बार.\n\n5. Menstrual cycle: हर 21-35 days (अक्सर ~28 days) में repeat होता है.\n\n6. Day 1-5: Menstruation (uterine lining का shedding).\n\n7. Day 6-14: Uterine lining rebuild होती है; ovary में egg mature होता है.\n\n8. Day 14: Ovulation (ovary mature egg release करती है).\n\n9. Day 15-28: Uterine lining thick और blood vessels से rich होती है; fertilisation न हो तो lining ~28th day पर break down होती है.\n\n10. Fertilisation: Oviduct में sperm और egg का fusion → zygote → uterus तक travel → uterine lining में implant → pregnancy शुरू.\n\n11. Pregnancy: ~9 months, three trimesters में divided. Embryo → foetus. Childbirth: uterine contractions foetus को birth canal से बाहर push करती हैं.\n\n12. Egg fertilised न हो: Egg degenerates; uterine lining shed होती है (menstruation).\n\n13. Sex determination: Females में XX chromosomes; males में XY. Mother X contribute करती है; father X (female) या Y (male) contribute करता है.\n\n14. Contraception: Condoms (barrier), oral pills (hormonal), IUDs (Copper-T).\n\n15. STIs: Gonorrhoea, herpes, syphilis, genital warts, HIV/AIDS. Condoms transmission prevent करते हैं.\nKeywords: testes, sperm, ovaries, egg, ovulation, menstrual cycle, menstruation, fertilisation, zygote, pregnancy, sex determination, contraception, STI"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        },
        // ===== CHAPTER 12: DIVERSITY AND CLASSIFICATION =====
        {
            id: "es_ch12",
            display_name: {
                english: "🌿 Patterns in Life: Diversity and Classification",
                hindi: "🌿 Patterns in Life: Diversity और Classification"
            },
            color: "#DDA0DD",
            topics: [
                {
                    id: "es_t14",
                    display_name: {
                        english: "🌍 Biodiversity & Classification Systems",
                        hindi: "🌍 Biodiversity और Classification Systems"
                    },
                    concepts: [
                        {
                            id: "es_c18",
                            display_name: {
                                english: "Biodiversity, Endemic Species & Hotspots",
                                hindi: "Biodiversity, Endemic Species और Hotspots"
                            },
                            description: {
                                english: "1. Biodiversity: Immense variety of living organisms on Earth.\n\n2. Endemic species: Species restricted to particular regions and not found naturally elsewhere. Examples: Nilgiri tahr, Lion-tailed macaque, Nepenthes khasiana (pitcher plant), Neelakurinji.\n\n3. Biodiversity hotspots: Regions supporting large number of endemic species and having undergone significant habitat loss. Examples: Western Ghats, Indo-Burma (including North East India), Himalayas, Sundaland (including Nicobar Islands).\n\n4. India's landscape diversity: Mountains in north, desert in west, rainforests in North East, plateaus in south, long coastlines.\n\n5. Biodiversity evolution: Small differences among individuals affect survival and reproduction, accumulate over generations, give rise to new life forms.\n\n6. Sangam Tinai classification and sacred groves show ancient Indian understanding of landscapes and biota.",
                                hindi: "1. Biodiversity: Earth पर living organisms की immense variety.\n\n2. Endemic species: Particular regions तक restricted species जो naturally कहीं और नहीं पाई जातीं. Examples: Nilgiri tahr, Lion-tailed macaque, Nepenthes khasiana (pitcher plant), Neelakurinji.\n\n3. Biodiversity hotspots: ऐसे regions जहाँ large number of endemic species हों और significant habitat loss हुआ हो. Examples: Western Ghats, Indo-Burma (North East India सहित), Himalayas, Sundaland (Nicobar Islands सहित).\n\n4. India की landscape diversity: North में mountains, west में desert, North East में rainforests, south में plateaus, long coastlines.\n\n5. Biodiversity evolution: Individuals में small differences survival और reproduction को affect करते हैं, generations में accumulate होते हैं, नए life forms बनते हैं.\n\n6. Sangam Tinai classification और sacred groves ancient Indian landscapes और biota की understanding दर्शाते हैं.\nKeywords: biodiversity, endemic species, biodiversity hotspot, Western Ghats, Himalayas, Nilgiri tahr, Lion-tailed macaque, Neelakurinji"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c19",
                            display_name: {
                                english: "Five Kingdom Classification",
                                hindi: "Five Kingdom Classification"
                            },
                            description: {
                                english: "1. Aristotle (4th century BCE): Grouped animals by habitat (land, water, air) — artificial system.\n\n2. Two Kingdom System (Linnaeus, 1758): Plantae and Animalia.\n\n3. Three Kingdom System (Haeckel, 1866): Added Protista for unicellular microscopic organisms.\n\n4. Four Kingdom System (Copeland, 1938): Added Monera for bacteria (prokaryotes without true nucleus).\n\n5. Five Kingdom System (Whittaker, 1969): Monera, Protista, Fungi, Plantae, Animalia.\n\n6. Criteria for five kingdom classification: Cell type (prokaryote/eukaryote), Cell structure (presence/absence of cell wall), Level of organisation (unicellular/multicellular), Mode of nutrition (autotrophic/heterotrophic).\n\n7. Monera: Unicellular prokaryotes (bacteria, cyanobacteria). Found everywhere including extreme environments. Some harmful (pathogens), many useful (Lactobacillus, Rhizobium). Cyanobacteria autotrophs and decomposers.\n\n8. Protista: Unicellular eukaryotes. May or may not have cell wall. Examples: Amoeba, Paramecium, Euglena, Chlamydomonas.\n\n9. Fungi: Multicellular (mostly) heterotrophic eukaryotes with cell wall made of chitin. Saprophytes (decomposers), some parasitic, some symbiotic. Examples: Yeast (unicellular), Aspergillus, mushrooms, Penicillium.\n\n10. Plantae: Multicellular autotrophic eukaryotes with cell wall made of cellulose. Divided into Thallophyta (algae), Bryophyta (mosses, liverworts), Pteridophyta (ferns), Gymnosperms (pines, cycads), Angiosperms (flowering plants).\n\n11. Animalia: Multicellular heterotrophic eukaryotes without cell wall. Divided into invertebrates (Porifera, Cnidaria, Platyhelminthes, Nematoda, Annelida, Arthropoda, Mollusca, Echinodermata) and chordates (Protochordata, Vertebrata).\n\n12. Three Domain System (Carl Woese, 1977): Bacteria, Archaea, Eukarya — based on genetic data.",
                                hindi: "1. Aristotle (4th century BCE): Animals को habitat (land, water, air) के आधार पर group किया — artificial system.\n\n2. Two Kingdom System (Linnaeus, 1758): Plantae और Animalia.\n\n3. Three Kingdom System (Haeckel, 1866): Unicellular microscopic organisms के लिए Protista add किया.\n\n4. Four Kingdom System (Copeland, 1938): Bacteria (prokaryotes without true nucleus) के लिए Monera add किया.\n\n5. Five Kingdom System (Whittaker, 1969): Monera, Protista, Fungi, Plantae, Animalia.\n\n6. Five kingdom classification के criteria: Cell type (prokaryote/eukaryote), Cell structure (presence/absence of cell wall), Level of organisation (unicellular/multicellular), Mode of nutrition (autotrophic/heterotrophic).\n\n7. Monera: Unicellular prokaryotes (bacteria, cyanobacteria). Extreme environments सहित हर जगह पाए जाते हैं. कुछ harmful (pathogens), कई useful (Lactobacillus, Rhizobium). Cyanobacteria autotrophs और decomposers.\n\n8. Protista: Unicellular eukaryotes. Cell wall हो या न हो. Examples: Amoeba, Paramecium, Euglena, Chlamydomonas.\n\n9. Fungi: Multicellular (अधिकतर) heterotrophic eukaryotes जिनकी cell wall chitin की बनी होती है. Saprophytes (decomposers), कुछ parasitic, कुछ symbiotic. Examples: Yeast (unicellular), Aspergillus, mushrooms, Penicillium.\n\n10. Plantae: Multicellular autotrophic eukaryotes जिनकी cell wall cellulose की बनी होती है. Thallophyta (algae), Bryophyta (mosses, liverworts), Pteridophyta (ferns), Gymnosperms (pines, cycads), Angiosperms (flowering plants) में divided.\n\n11. Animalia: Multicellular heterotrophic eukaryotes जिनमें cell wall नहीं होती. Invertebrates (Porifera, Cnidaria, Platyhelminthes, Nematoda, Annelida, Arthropoda, Mollusca, Echinodermata) और chordates (Protochordata, Vertebrata) में divided.\n\n12. Three Domain System (Carl Woese, 1977): Bacteria, Archaea, Eukarya — genetic data के आधार पर.\nKeywords: Aristotle, Linnaeus, Whittaker, five kingdom, Monera, Protista, Fungi, Plantae, Animalia, three domain, Woese"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c20",
                            display_name: {
                                english: "Plant & Animal Classification",
                                hindi: "Plant और Animal Classification"
                            },
                            description: {
                                english: "1. Plant groups: Thallophyta (algae — undifferentiated body, aquatic), Bryophyta (mosses — rhizoids, moist land, need water for reproduction, 'amphibians' of plant kingdom), Pteridophyta (ferns — true roots/stems/leaves, vascular tissues, need water for reproduction, no seeds), Gymnosperms (pines — needle-like leaves, seeds not enclosed in fruits, no water needed for fertilisation), Angiosperms (flowering plants — flowers, fruits, seeds enclosed, most diverse).\n\n2. Animal classification: Presence/absence of notochord → non-chordata (invertebrates) and chordata.\n\n3. Invertebrates: Porifera (sponges — no tissues, pores), Cnidaria (Hydra, jellyfish — tissue level, tentacles, single opening), Platyhelminthes (flatworms — bilateral symmetry, parasitic hooks/suckers), Nematoda (roundworms — cylindrical, two openings), Annelida (earthworms — segmented, body cavity), Arthropoda (insects, crabs, spiders — jointed appendages, exoskeleton), Mollusca (snails, squids — soft bodies, shell), Echinodermata (starfish — spiny skin, internal skeleton).\n\n4. Protochordates (e.g., Amphioxus): Notochord present at least once in life.\n\n5. Vertebrates: Vertebral column (backbone) present. Groups: Fish, Amphibians, Reptiles, Birds, Mammals.\n\n6. Adaptation examples: Fins/gills (fish), feathers/hollow bones (birds), fat storage (camels), thick fur (polar bears), mammary glands (mammals).\n\n7. Binomial nomenclature (Linnaeus): Two-part scientific name (genus + species). Genus starts with capital, species lowercase. Written in italics or underlined. Examples: Panthera tigris (tiger), Mangifera indica (mango).",
                                hindi: "1. Plant groups: Thallophyta (algae — undifferentiated body, aquatic), Bryophyta (mosses — rhizoids, moist land, reproduction के लिए water चाहिए, plant kingdom के 'amphibians'), Pteridophyta (ferns — true roots/stems/leaves, vascular tissues, reproduction के लिए water चाहिए, seeds नहीं), Gymnosperms (pines — needle-like leaves, seeds fruits में enclosed नहीं, fertilisation के लिए water नहीं चाहिए), Angiosperms (flowering plants — flowers, fruits, seeds enclosed, most diverse).\n\n2. Animal classification: Notochord की presence/absence → non-chordata (invertebrates) और chordata.\n\n3. Invertebrates: Porifera (sponges — tissues नहीं, pores), Cnidaria (Hydra, jellyfish — tissue level, tentacles, single opening), Platyhelminthes (flatworms — bilateral symmetry, parasitic hooks/suckers), Nematoda (roundworms — cylindrical, two openings), Annelida (earthworms — segmented, body cavity), Arthropoda (insects, crabs, spiders — jointed appendages, exoskeleton), Mollusca (snails, squids — soft bodies, shell), Echinodermata (starfish — spiny skin, internal skeleton).\n\n4. Protochordates (जैसे Amphioxus): Life में कम से कम एक बार notochord present.\n\n5. Vertebrates: Vertebral column (backbone) present. Groups: Fish, Amphibians, Reptiles, Birds, Mammals.\n\n6. Adaptation examples: Fins/gills (fish), feathers/hollow bones (birds), fat storage (camels), thick fur (polar bears), mammary glands (mammals).\n\n7. Binomial nomenclature (Linnaeus): Two-part scientific name (genus + species). Genus capital से शुरू, species lowercase. Italics में या underlined लिखा जाता है. Examples: Panthera tigris (tiger), Mangifera indica (mango).\nKeywords: Thallophyta, Bryophyta, Pteridophyta, Gymnosperms, Angiosperms, invertebrates, vertebrates, Porifera, Cnidaria, Arthropoda, Mollusca, Echinodermata, binomial nomenclature, Linnaeus"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        },
        // ===== CHAPTER 13: EARTH AS A SYSTEM =====
        {
            id: "es_ch13",
            display_name: {
                english: "🌍 Earth as a System: Energy, Matter, and Life",
                hindi: "🌍 Earth as a System: Energy, Matter, और Life"
            },
            color: "#FF6B6B",
            topics: [
                {
                    id: "es_t15",
                    display_name: {
                        english: "☀️ Solar Radiation & Earth's Spheres",
                        hindi: "☀️ Solar Radiation और Earth's Spheres"
                    },
                    concepts: [
                        {
                            id: "es_c21",
                            display_name: {
                                english: "Earth's Spheres & Uneven Heating",
                                hindi: "Earth's Spheres और Uneven Heating"
                            },
                            description: {
                                english: "1. Earth's spheres: Geosphere (rocks, soil, landforms), Hydrosphere (liquid water — oceans, rivers, lakes, groundwater), Cryosphere (solid water — ice, snow, glaciers), Atmosphere (air), Biosphere (all living organisms and habitats).\n\n2. Solar radiation: Main source of energy. Electromagnetic (EM) waves travel through vacuum at speed of light (3 × 10⁸ m/s).\n\n3. EM spectrum: Gamma rays, X-rays, UV, Visible, IR, Microwaves, Radio waves. About 99% of Sun's energy reaching Earth is in UV, visible, and IR range.\n\n4. Ozone layer absorbs UV radiation. Visible light provides energy for photosynthesis and warms land/water. IR radiation warms Earth's surface and is re-radiated; greenhouse gases (CO₂, CH₄, water vapour) trap some heat.\n\n5. Insolation: Amount of Sun's radiation reaching Earth's surface. Solar constant: ~1.4 kW/m² at top of atmosphere. Maximum insolation at surface under clear sky: ~1 kW/m².\n\n6. Albedo: Fraction of solar radiation reflected by a surface. Snow (0.80-0.90), Ice (0.50-0.70), Crushed rock (0.25-0.30). High albedo → cool; low albedo → warm.\n\n7. Latitude and Earth's shape: Sun's rays strike different latitudes at different angles. Equatorial regions warm; polar regions cold. Uneven heating drives winds and ocean currents.\n\n8. Atmosphere layers: Troposphere (0-12 km, weather formation, temperature decreases with height), Stratosphere (12-50 km, ozone layer, temperature increases with height), Mesosphere, Thermosphere, Exosphere.\n\n9. Greenhouse effect: Earth's surface absorbs sunlight, re-radiates IR; greenhouse gases trap heat. Without atmosphere, Earth would be too cold. Excess CO₂ → global warming.\n\n10. Urban heat island effect: Cities warmer than rural areas due to built-up areas (concrete, asphalt) absorbing and retaining heat.",
                                hindi: "1. Earth's spheres: Geosphere (rocks, soil, landforms), Hydrosphere (liquid water — oceans, rivers, lakes, groundwater), Cryosphere (solid water — ice, snow, glaciers), Atmosphere (air), Biosphere (सभी living organisms और habitats).\n\n2. Solar radiation: Energy का main source. Electromagnetic (EM) waves vacuum में speed of light (3 × 10⁸ m/s) से travel करती हैं.\n\n3. EM spectrum: Gamma rays, X-rays, UV, Visible, IR, Microwaves, Radio waves. Earth तक पहुँचने वाली Sun की ~99% energy UV, visible, और IR range में है.\n\n4. Ozone layer UV radiation absorb करती है. Visible light photosynthesis के लिए energy देती है और land/water को warm करती है. IR radiation Earth's surface को warm करती है और re-radiate होती है; greenhouse gases (CO₂, CH₄, water vapour) कुछ heat trap करती हैं.\n\n5. Insolation: Earth's surface तक पहुँचने वाली Sun की radiation की मात्रा. Solar constant: atmosphere के top पर ~1.4 kW/m². Clear sky में surface पर maximum insolation: ~1 kW/m².\n\n6. Albedo: Surface द्वारा reflected solar radiation का fraction. Snow (0.80-0.90), Ice (0.50-0.70), Crushed rock (0.25-0.30). High albedo → cool; low albedo → warm.\n\n7. Latitude और Earth's shape: Sun की rays different latitudes पर different angles से strike करती हैं. Equatorial regions warm; polar regions cold. Uneven heating winds और ocean currents drive करती है.\n\n8. Atmosphere layers: Troposphere (0-12 km, weather formation, height के साथ temperature decreases), Stratosphere (12-50 km, ozone layer, height के साथ temperature increases), Mesosphere, Thermosphere, Exosphere.\n\n9. Greenhouse effect: Earth's surface sunlight absorb करती है, IR re-radiate करती है; greenhouse gases heat trap करती हैं. Atmosphere के बिना Earth बहुत ठंडी होती. Excess CO₂ → global warming.\n\n10. Urban heat island effect: Built-up areas (concrete, asphalt) के कारण cities rural areas से warmer होती हैं.\nKeywords: geosphere, hydrosphere, cryosphere, atmosphere, biosphere, solar radiation, insolation, solar constant, albedo, troposphere, stratosphere, ozone layer, greenhouse effect, urban heat island"
                            },
                            diagrams: null
                        },
                        {
                            id: "es_c22",
                            display_name: {
                                english: "Winds, Ocean Currents & Biogeochemical Cycles",
                                hindi: "Winds, Ocean Currents और Biogeochemical Cycles"
                            },
                            description: {
                                english: "1. Wind: Movement of air from high pressure to low pressure, caused by uneven heating.\n\n2. Local winds: Valley breeze (day — warm air rises over slopes, cooler valley air moves up), Mountain breeze (night — slopes cool faster, cold air sinks into valley).\n\n3. Planetary winds: Uneven heating between equator and poles creates pressure belts. Equatorial low pressure (warm air rises), sub-tropical high pressure (~30° N/S, air sinks), sub-polar low pressure (~60° N/S), polar high pressure (~90° N/S). Earth's rotation deflects winds (right in Northern Hemisphere, left in Southern Hemisphere).\n\n4. Ocean currents: Continuous movement of large masses of ocean water. Driven by planetary winds (drag surface water), temperature and salinity differences, Earth's rotation, and landmass distribution.\n\n5. Gyres: Large circular patterns of ocean currents — clockwise in Northern Hemisphere, counterclockwise in Southern Hemisphere.\n\n6. North Atlantic Drift: Warm ocean current (extension of Gulf Stream) flows toward northwestern Europe, keeping ports ice-free in winter.\n\n7. Biogeochemical cycles: Cyclic movement of matter and energy between abiotic and biotic components.\n\n8. Water cycle: Evaporation → condensation → precipitation → runoff/infiltration → groundwater. Climate change affects water cycle (heavier rains, droughts, glacier melting, sea level rise).\n\n9. Carbon cycle: Fast cycle (days-years): photosynthesis, respiration, decomposition. Slow cycle (millions of years): fossil fuel formation. Human activities (burning fossil fuels, deforestation) raise atmospheric CO₂ (from ~315 ppm in 1960 to ~420 ppm in 2025).\n\n10. Nitrogen cycle: Nitrogen fixation (Rhizobium, Azotobacter → ammonia), nitrification (Nitrosomonas, Nitrobacter → nitrite/nitrate), assimilation, ammonification (decomposers), denitrification (Pseudomonas → N₂). Lightning also fixes nitrogen oxides. Haber-Bosch process fixes nitrogen industrially for fertilizers.\n\n11. Oxygen cycle: Respiration and combustion use O₂ and release CO₂; photosynthesis restores O₂.\n\n12. Human impact: Excess CO₂ → ocean acidification, coral bleaching; fertilizer overuse → eutrophication (algal blooms, oxygen depletion, fish kills); deforestation → reduced rainfall, soil erosion, biodiversity loss.",
                                hindi: "1. Wind: High pressure से low pressure की ओर air का movement, uneven heating के कारण.\n\n2. Local winds: Valley breeze (day — slopes पर warm air rises, cooler valley air up moves), Mountain breeze (night — slopes जल्दी cool होते हैं, cold air valley में sink करती है).\n\n3. Planetary winds: Equator और poles के बीच uneven heating pressure belts बनाती है. Equatorial low pressure (warm air rises), sub-tropical high pressure (~30° N/S, air sinks), sub-polar low pressure (~60° N/S), polar high pressure (~90° N/S). Earth's rotation winds को deflect करती है (Northern Hemisphere में right, Southern Hemisphere में left).\n\n4. Ocean currents: Ocean water के large masses का continuous movement. Planetary winds (surface water drag), temperature और salinity differences, Earth's rotation, और landmass distribution से driven.\n\n5. Gyres: Ocean currents के large circular patterns — Northern Hemisphere में clockwise, Southern Hemisphere में counterclockwise.\n\n6. North Atlantic Drift: Warm ocean current (Gulf Stream का extension) northwestern Europe की ओर बहती है, winter में ports को ice-free रखती है.\n\n7. Biogeochemical cycles: Abiotic और biotic components के बीच matter और energy का cyclic movement.\n\n8. Water cycle: Evaporation → condensation → precipitation → runoff/infiltration → groundwater. Climate change water cycle को affect करता है (heavier rains, droughts, glacier melting, sea level rise).\n\n9. Carbon cycle: Fast cycle (days-years): photosynthesis, respiration, decomposition. Slow cycle (millions of years): fossil fuel formation. Human activities (fossil fuels burning, deforestation) atmospheric CO₂ बढ़ाते हैं (1960 में ~315 ppm से 2025 में ~420 ppm).\n\n10. Nitrogen cycle: Nitrogen fixation (Rhizobium, Azotobacter → ammonia), nitrification (Nitrosomonas, Nitrobacter → nitrite/nitrate), assimilation, ammonification (decomposers), denitrification (Pseudomonas → N₂). Lightning भी nitrogen oxides fix करती है. Haber-Bosch process industrially fertilizers के लिए nitrogen fix करता है.\n\n11. Oxygen cycle: Respiration और combustion O₂ use करते हैं और CO₂ release करते हैं; photosynthesis O₂ restore करता है.\n\n12. Human impact: Excess CO₂ → ocean acidification, coral bleaching; fertilizer overuse → eutrophication (algal blooms, oxygen depletion, fish kills); deforestation → reduced rainfall, soil erosion, biodiversity loss.\nKeywords: wind, valley breeze, mountain breeze, planetary winds, ocean currents, gyres, Gulf Stream, water cycle, carbon cycle, nitrogen cycle, oxygen cycle, eutrophication, Haber-Bosch"
                            },
                            diagrams: null
                        }
                    ]
                }
            ]
        }
    ]
};