export const academicPrograms = [
  {
    dept: "Agriculture",
    programs: ["Agricultural Informatics and Artificial Intelligence"],
    link: "https://www.iul.ac.in/Department/Agriculture.aspx",
  },
  {
    dept: "Bioengineering",
    programs: [
      "Artificial Intelligence in Biomedical Engineering",
      "Artificial Intelligence in Biotechnology",
      "Artificial Intelligence in Food Technology",
      "Biomaterials and Artificial Organs",
    ],
    link: "https://www.iul.ac.in/BE/",
  },
  {
    dept: "Bioscience",
    programs: ["Artificial Intelligence in Biological Sciences"],
    link: "https://www.iul.ac.in/BS/",
  },
  {
    dept: "Business Administration",
    programs: [
      "Artificial Intelligence",
      "Artificial Intelligence in Health & Applied Sciences",
    ],
    link: "https://www.iul.ac.in/BM/index.aspx",
  },
  {
    dept: "Chemistry",
    programs: ["Advanced Applications of Artificial Intelligence in Chemical Sciences"],
    link: "https://www.iul.ac.in/CH/",
  },
  {
    dept: "Civil Engineering",
    programs: [
      "Artificial Intelligence in Civil Engineering",
      "Artificial Intelligence in Geotechnical Engineering",
    ],
    link: "https://www.iul.ac.in/CE/",
  },
  {
    dept: "Basic Medical Sciences",
    programs: ["Introduction to Artificial Intelligence"],
    link: "https://www.iul.ac.in/MScMedical/",
  },
  {
    dept: "Humanities & Social Sciences",
    programs: ["Application of Artificial Intelligence in Social Science"],
    link: "https://www.iul.ac.in/Department/HumanitiesSocialSciences.aspx",
  },
  {
    dept: "Electrical Engineering",
    programs: [
      "Artificial Neural Network",
      "Introduction to Artificial Neural Network",
    ],
    link: "https://www.iul.ac.in/EE/",
  },
  {
    dept: "Electronics",
    programs: ["Introduction to Artificial Intelligence & Applications"],
    link: "https://www.iul.ac.in/EC/",
  },
  {
    dept: "Faculty of Law",
    programs: ["Artificial Intelligence and its Legal Implications"],
    link: "https://www.iul.ac.in/Department/Law.aspx",
  },
  {
    dept: "Mathematics & Statistics",
    programs: ["Application of Artificial Intelligence in Mathematical Sciences"],
    link: "https://www.iul.ac.in/MT/",
  },
  {
    dept: "Pharmacy",
    programs: ["Artificial Intelligence in Health & Applied Sciences"],
    link: "https://www.iul.ac.in/Department/Pharmacy.aspx",
  },
  {
    dept: "Physics",
    programs: ["Artificial Intelligence and Physics"],
    link: "https://www.iul.ac.in/PY/",
  },
  {
    dept: "Physiotherapy",
    programs: ["Artificial Intelligence in Physiotherapy"],
    link: "https://www.iul.ac.in/PHYT/",
  },
  {
    dept: "Polytechnic",
    programs: ["Artificial Intelligence & Neural Network"],
    link: "https://www.iul.ac.in/Department/Polytechnic.aspx",
  },
];

export const getTotalProgramCount = () => {
  return academicPrograms.reduce((total, dept) => total + dept.programs.length, 0);
};
