import ahmed001 from "./src/assets/pictures/ahmed001.jpg";
import amr001 from "./src/assets/pictures/amr001.jpg";
import ibrahimhagag001 from "./src/assets/pictures/ibrahimhagag001.jpg";
import member from "./src/assets/pictures/man_8526419.png";
import slider001 from "./src/assets/pictures/slider001.jpg";
import slider002 from "./src/assets/pictures/slider002.jpg";
import slider003 from "./src/assets/pictures/slider003.jpg";
import slider004 from "./src/assets/pictures/slider004.jpg";
import slider005 from "./src/assets/pictures/slider005.jpg";
import fruit001 from "./src/assets/pictures/fruit001.png";
import fruit002 from "./src/assets/pictures/fruit002.png";
import fruit003 from "./src/assets/pictures/fruit003.png";
import fruit004 from "./src/assets/pictures/fruit004.png";
import fruit005 from "./src/assets/pictures/fruit005.png";
import fruit006 from "./src/assets/pictures/fruit006.png";
import fruit007 from "./src/assets/pictures/fruit007.png";
import veg001 from "./src/assets/pictures/veg001.png";
import veg002 from "./src/assets/pictures/veg002.png";
import veg003 from "./src/assets/pictures/veg003.png";
import veg004 from "./src/assets/pictures/veg004.png";
import veg005 from "./src/assets/pictures/veg005.png";
import veg006 from "./src/assets/pictures/veg006.png";
import veg007 from "./src/assets/pictures/veg007.png";
import veg008 from "./src/assets/pictures/veg008.png";
import veg009 from "./src/assets/pictures/veg009.png";
const sliderImages = [
  {
    id: 1,
    url: slider001,
  },
  {
    id: 2,
    url: slider002,
  },
  {
    id: 3,
    url: slider003,
  },
  {
    id: 4,
    url: slider004,
  },
  {
    id: 5,
    url: slider005,
  },
];

const vegetablesData = [
  {
    id: 1,
    url: veg001,
    product_name: "potatoes",
    description:
      "The Egyptian potatoes are well-known of its good quality whether for the potatoes grown in clay or sandy soil , also well-known of its ability for preservation , the level of solidity and sugar for a period that exceeds twenty days from the day of harvest.",
    hs_code: "070190",
    calibration: "55mm Up",
    packing: "Mesh Bags",
    unit_weight: " 5 , 8 , 10 , 15 , 20 KG",
    jumbo_bag: "",
    container_capacity: "(40 feet) ",
    pallets: "18 Pallet per Container 27 Tons",
    loose: "Up to 30 Tons",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: "",
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
  {
    id: 2,
    url: veg002,
    product_name: "Red Onion",
    description:
      "The Red onion is a cured bulb onion with a deep purple, papery outer skin and slightly red tinted flesh. Red onion’s flavor ranges from sweet to pungent depending on its age and variety. This onion’s layers are thinner and crunchier compared to other onion varieties and therefore most commonly used for raw preparations.",
    hs_code: "07031010",
    calibration: "50mm : 100 mm",
    packing: "Mesh Bags",
    unit_weight: "5kg, 8 kg, 10 kg, 15kg, 20 kg, 25kg",
    jumbo_bag: "1200 Kg",
    container_capacity: "40 feet 25: 30 Tons",
    pallets: "",
    loose: "Up to 30 Tons",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: "",
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
  {
    id: 3,
    url: veg003,
    product_name: "Golden Onions",
    description:
      "Onions are a good source of vitamin C and help boost immunity with their many health properties. They contain chromium, which assists in regulating blood sugar and for centuries, onions have been used to reduce inflammation and heal infections",
    hs_code: "080550",
    calibration: "50mm : 100 mm",
    packing: "Mesh Bag",
    unit_weight: "5kg, 8 kg, 10 kg, 15kg, 20 kg, 25kg",
    jumbo_bag: "1200 Kg",
    container_capacity: "40 feet 25: 30 Tons",
    pallets: "",
    loose: "",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: "",
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
  {
    id: 4,
    url: veg004,
    product_name: "Garlic",
    description:
      "Egypt occupies the third place in the production and export of garlic worldwide and one of the most famous cultivars in Egypt is white garlic and red (Chinese) and is exported fresh and dried. Garlic Improves Cholesterol Levels, Which May Lower the Risk of Heart Disease , It consists of several lobes , It has thick striped leaves that have a distinctive strong smell and Have strong taste .",
    hs_code: "070320",
    calibration: "40mm: 90mm",
    packing: "Plastic Box: 10.0 kg N.W / 11.0 kg G.W. (Fresh & Dry) ",
    unit_weight: "",
    jumbo_bag: "",
    container_capacity: "(40 feet): 20 pallet per Container",
    pallets: "",
    loose: "",
    carton_box: "10.0 kg N.W / 11.0 kg G.W. ( Dry Only )",
    mesh_bags: "5.0 kg N.W / 5.1 kg G.W . (Fresh & Dry)",
    bamboo_bags: "5.0 kg N.W / 5.3 kg G.W. ( Fresh Only )",
    plastic_boxes: "",
    telescopic_cartons: "",
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
  {
    id: 5,
    url: veg005,
    product_name: "sweet patato",
    description:
      "Sweet potatoes are known for their sweet taste and creamy texture. They are rich in nutrients, including vitamins A and C, and dietary fiber. Additionally, they contain antioxidants, which help reduce the risk of chronic diseases. Versatility: Sweet potatoes can be cooked, baked, or used in desserts, making them suitable for a wide variety of dishes.",
    hs_code: " 07142000",
    calibration: "15 : 25 length - 5 : 10 width",
    packing: "cartons, bags, or boxes: 5 kg-10 kg-20 kg",
    unit_weight: "",
    jumbo_bag: "",
    container_capacity:
      "(40 feet) Pallets :21 Pallets including Euro per Container 25 Tons",
    pallets: "",
    loose: "",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: "",
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
  {
    id: 6,
    url: veg006,
    product_name: "carrot",
    description:
      "The sweet flavor of Egyptian carrots makes them a favorite in global markets. They are distinguished by their bright orange color, which enhances their appeal. Egyptian carrots have excellent storage capacity, making them ideal for export. They are rich in Vitamin A, fiber, and beta-carotene, making them a healthy and nutritious food.",
    hs_code: "070610000",
    calibration: "2cm: 5cm",
    packing: "Mesh bags, plastic crates, cardboard boxes",
    unit_weight: "5 kg, 10 kg",
    jumbo_bag: "",
    container_capacity: "(40 feet) Pallets :18 Pallet per Container 25 Tons",
    pallets: "",
    loose: "",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: "",
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
  {
    id: 7,
    url: veg007,
    product_name: " Iceberg lettuce",
    description:
      " Lettuce iceberg is one of the main constituents in salads and is known for its crunchy texture. It has comparatively less nutrients than the other greens that you may find in salads",
    hs_code: "070511",
    calibration: "72/80/88/100/113/125/138/150",
    packing:
      "Open Top Carton : Count (7-8-9-10-11-12) per unit .Approximately (7 – 8) kg Plastic Box : Count (6-7-8-9-10) per unit . Approximately (7 – 8) kg Approximately (5 – 6) kg",
    unit_weight: "",
    jumbo_bag: "",
    container_capacity:
      " ref 40, 20 pallet Open Top Carton : 70 units per Pallet. Euro Pallet: 39 units. Plastic Box : 90 box per Pallet. Euro Pallet: 60 units.",
    pallets: "",
    loose: "",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: "",
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
  {
    id: 8,
    url: veg008,
    product_name: "Lemon",
    description:
      "Fruit medium-small size, elliptical to oblong commonly with short neck or low collar at base, seeds content variable but usually few to none, Color yellow at maturity.",
    hs_code: "080530",
    calibration: "72/80/88/100/113/125/138/150",
    packing: "Telescopic Cartons : 15 KG. N.W.Plastic Box : 9 KG. N.W.",
    unit_weight: "",
    jumbo_bag: "",
    container_capacity: "(40 feet): 21 Pallet",
    pallets: "",
    loose: "",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: "",
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
  {
    id: 9,
    url: veg009,
    product_name: " Frozen French fries",
    description:
      "Produced from carefully selected potatoes, ensuring a distinctive taste and texture. They are also easy to prepare, as they can be fried or baked directly from the freezer without the need to thaw. They can be stored for long periods in the freezer, making them convenient for use at any time.",
    hs_code: "071050",
    calibration: ` Length and Shapes:
 Available in various lengths and shapes:
 Length of the strips: Ranges from 6 to 12 cm, depending on the type of fries.
 Thickness and Shapes: Shoestring Fries: Thickness is approximately 5-7 mm.
 Steak Fries: Thickness ranges from 10-12 mm.
 Crinkle Cut Fries: Have a wavy shape with a thickness of about 7-9 mm.
 Crinkle Cut Fries: Have a wavy shape with a thickness of about 7-9 mm. 
 Curly Fries: Take a spiral or curly shape.`,
    packing: `Carton with bag packages - PET plastic containers.*Unit Weights:0.5 kg-1 kg-1.5 kg-2.5 kg-5 kg-10 kg-20 kg`,
    unit_weight: "",
    jumbo_bag: "",
    container_capacity: `(40 feet):Pallets :21 Pallets including Euro per Container 
  • Total Weight: 25tons.
  • Loose Weight: Up to 27 tons.`,
    pallets: "",
    loose: "",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: "",
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
];

const fruitsData = [
  {
    id: 10,
    url: fruit001,
    product_name: "Navel",
    description: ` Lower acid content than most orange varieties , easily peeled , excellent flavor, earliest maturing. Citrus fruits are full of great health benefits.`,
    hs_code: "080510",
    calibration: "",
    packing: ` Telescopic Cartons: 15 Kg Open Top Cartons: 7.5Kg , 15 Kg`,
    unit_weight: "",
    jumbo_bag: "",
    container_capacity: ` (40 feet): 21 Pallet`,
    pallets: "",
    loose: "",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: ` 15 Kg : 80 Cartons (per Pallet) 64 Cartons per (Euro pallet) `,
    telescopic_cartons_7: "",
    open_top_cartons: ` 15 Kg : 65 Cartons (per Pallet)`,
    open_top_cartons_7: `7.5 Kg : 140 Carton (per Pallet) 112 Cartons (per Euro pallet)`,
  },
  {
    id: 11,
    url: fruit002,
    product_name: "Baladi",
    description: ` Juice orange, similar to Valencia, Lower sugar, Medium vigor. Citrus fruits are full of great health benefits.`,
    hs_code: "080510",
    calibration: "",
    packing: `Telescopic Cartons: 15 KG N.W. Bin Cartons: 550 KG N.W.`,
    unit_weight: "",
    jumbo_bag: "",
    container_capacity: "(40 feet): 21 Pallet",
    pallets: "",
    loose: "",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: `15 Kg : 80 Cartons (per Pallet) 64 Cartons per (Euro pallet )`,
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
  {
    id: 12,
    url: fruit003,
    product_name: "Sweety",
    description: `High sugars , very good mid-season orange.Medium vigor, good produce,full of great health benefits.`,
    hs_code: "080510",
    calibration: "",
    packing: "Telescopic Cartons: 7.5-15 KG N.W",
    unit_weight: "",
    jumbo_bag: "",
    container_capacity: "(40 feet): 21 Pallet",
    pallets: "",
    loose: "",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: `15 Kg : 80 Cartons (per Pallet) 64 Cartons per (Euro pallet )`,
    telescopic_cartons_7: `7.5 kg 168 Cartons (per Pallet) 120 Cartons . (per Euro pallet)`,
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
  {
    id: 13,
    url: fruit004,
    product_name: "Valencia",
    description: ` Excellent for eating & juice , Very juicy and sweety last orange variety for Egyptian orange season.Citrus fruits are full of great health benefits.`,
    hs_code: "080510",
    calibration: "",
    packing: `Telescopic Cartons: 7.5-15 KG N.W.
    Bin Cartons: 550 KG N.W.
    120 Cartons . (per Euro pallet)`,
    unit_weight: "",
    jumbo_bag: "",
    container_capacity: "(40 feet): 21 Pallet",
    pallets: "",
    loose: "",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: `15 Kg :
    80 Cartons (per Pallet)
    80 Cartons (per Pallet)
    64 Cartons per (Euro pallet )`,
    telescopic_cartons_7: ` 7.5 Kg :
    140 Cartons (per Pallet)
    112 Cartons . (per Euro pallet)`,
    open_top_cartons: "",
    open_top_cartons_7: "",
  },

  {
    id: 14,
    url: fruit005,
    product_name: "Watermelon",
    description: `Egyptian watermelon is characterized by its excellent quality and delicious flavor, making it highly sought after in international markets. It also has a large size, with the weight of Egyptian watermelons ranging from 5 to 15 kilograms, making them ideal for export. Additionally, it contains a high water content, making it refreshing and hydrating, which appeals to consumers`,
    hs_code: "080711",
    calibration: "",
    packing: `Plastic, wooden, and cardboard boxes that allow for ventilation.`,
    unit_weight: " 5 kg, 10 kg, 15 kg",
    jumbo_bag: "",
    container_capacity: "(40 feet)",
    pallets: "21 Pallets including Euro per Container 20 Tons",
    loose: " Up to 25 Tons",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: "",
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },

  {
    id: 15,
    url: fruit006,
    product_name: "Mango",
    description: ` Delicious Taste: Known for its sweet and aromatic flavor. Nutrient-Rich: Contains vitamins such as C and A, along with antioxidants.Promotes Digestive Health: High in fiber, aiding in digestion.`,
    hs_code: "080450",
    calibration: "",
    packing: `Plastic, wooden, and cardboard boxes that allow for ventilation.`,
    unit_weight: " 5 kg, 7 kg, 10 kg",
    jumbo_bag: "",
    container_capacity: "(40 feet)",
    pallets: `21 Pallets including Euro per Container 22 Tons.`,
    loose: "Up to 23 Tons",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes: "",
    telescopic_cartons: "",
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
  {
    id: 16,
    url: fruit007,
    product_name: "pomegranate",
    description: `The Egyptian pomegranate is considered one of the best types 
of pomegranates in the world, thanks to its high quality, 
attractive color, and unique taste. This fruit is a symbol of wealth 
and beauty in Egyptian culture, holding a special place in global markets.
 The number of pomegranates in each package ranges from 
6 to 12, depending on the size of the fruits. The standard weights vary 
between 400 grams to 800 grams per fruit.`,
    hs_code: "0810900050",
    calibration: "",
    packing:
      "Plastic boxes, cardboard, covered with bags that protect them from heat and humidity",
    unit_weight: " 5 kilograms",
    jumbo_bag: "",
    container_capacity: "(40 feet): 21 Pallet",
    pallets: "",
    loose: "",
    carton_box: "",
    mesh_bags: "",
    bamboo_bags: "",
    plastic_boxes:
      " 5 Kg : 180 Box (per Pallet) 180 Box (per Pallet) 144 Box (Euro pallet )",
    telescopic_cartons: "",
    telescopic_cartons_7: "",
    open_top_cartons: "",
    open_top_cartons_7: "",
  },
];

const allProducts = [...vegetablesData, ...fruitsData];

const employeesData = [
  {
    id: 1,
    username: "Amr El-mesarea",
    job_title: "CEO",
    phone: "01015860700",
    picture: amr001,
  },
  {
    id: 2,
    username: "Ahmed El-mesarea",
    job_title: "COO",
    phone: "01007400454",
    picture: ahmed001,
  },
  {
    id: 3,
    username: "Nour Al-Sheikh",
    job_title: "Head of Agriculture",
    phone: "01067986763",
    picture: member,
  },
  {
    id: 4,
    username: "Sami Zaghib",
    job_title: "Sales and Supply Support",
    phone: "01024529388",
    picture: member,
  },
  {
    id: 5,
    username: "Ibrahim Haggag",
    job_title: "Transportation Supervisor",
    phone: "01005476069",
    picture: ibrahimhagag001,
  },
  {
    id: 6,
    username: "Hani Hasaballah",
    job_title: "Manager of Sorting, Packaging, and Packing",
    phone: "01060840686",
    picture: member,
  },
  {
    id: 7,
    username: "Mohamed Ashry",
    job_title: "Electricity Manager",
    phone: "01061996801",
    picture: member,
  },
  {
    id: 8,
    username: "Mohamed Hassan",
    job_title: "Finance Department",
    phone: "01006610523",
    picture: member,
  },
];
export { sliderImages, vegetablesData, fruitsData, allProducts, employeesData };
