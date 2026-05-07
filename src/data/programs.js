export const academicPrograms = [
  {
    dept: "Agriculture",
    programs: ["Agricultural Informatics and Artificial Intelligence"],
  },
  {
    dept: "Bioengineering",
    programs: [
      "Artificial Intelligence in Biomedical Engineering",
      "Artificial Intelligence in Biotechnology",
      "Artificial Intelligence in Food Technology",
      "Biomaterials and Artificial Organs",
    ],
  },
  {
    dept: "Bioscience",
    programs: ["Artificial Intelligence in Biological Sciences"],
  },
  {
    dept: "Business Administration",
    programs: [
      "Artificial Intelligence",
      "Artificial Intelligence in Health & Applied Sciences",
    ],
  },
  {
    dept: "Chemistry",
    programs: ["Advanced Applications of Artificial Intelligence in Chemical Sciences"],
  },
  {
    dept: "Civil Engineering",
    programs: [
      "Artificial Intelligence in Civil Engineering",
      "Artificial Intelligence in Geotechnical Engineering",
    ],
  },
  {
    dept: "Basic Medical Sciences",
    programs: ["Introduction to Artificial Intelligence"],
  },
  {
    dept: "Humanities & Social Sciences",
    programs: ["Application of Artificial Intelligence in Social Science"],
  },
  {
    dept: "Electrical Engineering",
    programs: [
      "Artificial Neural Network",
      "Introduction to Artificial Neural Network",
    ],
  },
  {
    dept: "Electronics",
    programs: ["Introduction to Artificial Intelligence & Applications"],
  },
  {
    dept: "Faculty of Law",
    programs: ["Artificial Intelligence and its Legal Implications"],
  },
  {
    dept: "Mathematics & Statistics",
    programs: ["Application of Artificial Intelligence in Mathematical Sciences"],
  },
  {
    dept: "Pharmacy",
    programs: ["Artificial Intelligence in Health & Applied Sciences"],
  },
  {
    dept: "Physics",
    programs: ["Artificial Intelligence and Physics"],
  },
  {
    dept: "Physiotherapy",
    programs: ["Artificial Intelligence in Physiotherapy"],
  },
  {
    dept: "Polytechnic",
    programs: ["Artificial Intelligence & Neural Network"],
  },
];

export const getTotalProgramCount = () => {
  return academicPrograms.reduce((total, dept) => total + dept.programs.length, 0);
};
