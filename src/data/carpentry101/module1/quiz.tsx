import type { Quiz } from '@/types/course';

const quiz: Quiz = {
  id: 1,
  title: 'Module 1 Quiz: What is Carpentry?',
  questions: [
    {
      id: 1,
      question: 'What is carpentry primarily concerned with?',
      options: [
        'Working with metal only',
        'Working with wood and related materials',
        'Working with electronics',
        'Working with textiles'
      ],
      correctAnswer: 1,
      explanation: 'Carpentry is primarily concerned with working with wood and related materials to construct, install, repair, and maintain structures and objects.'
    },
    {
      id: 2,
      question: 'Which of the following is NOT a type of carpentry?',
      options: [
        'Rough Carpentry',
        'Finish Carpentry',
        'Formwork Carpentry',
        'Culinary Carpentry'
      ],
      correctAnswer: 3,
      explanation: 'Culinary Carpentry is not a type of carpentry. The main types include Rough, Finish, Formwork, Restoration, and Furniture Making.'
    },
    {
      id: 3,
      question: 'What is the main focus of rough carpentry?',
      options: [
        'Furniture design',
        'Aesthetic finishing',
        'Structural work such as framing and roofing',
        'Repairing antique furniture'
      ],
      correctAnswer: 2,
      explanation: 'Rough carpentry focuses on structural work such as framing buildings, constructing roofs, and building scaffolding, prioritizing strength and functionality over aesthetics.'
    },
    {
      id: 4,
      question: 'Which type of carpentry involves creating molds for concrete structures?',
      options: [
        'Restoration Carpentry',
        'Formwork Carpentry',
        'Finish Carpentry',
        'Furniture Making'
      ],
      correctAnswer: 1,
      explanation: 'Formwork Carpentry specializes in creating molds or frameworks for concrete structures, commonly used in bridges, foundations, and large-scale construction projects.'
    },
    {
      id: 5,
      question: 'What tool is commonly used for precision planning and design in modern carpentry?',
      options: [
        'Sewing machine',
        'CAD software',
        'Pottery wheel',
        'Multimeter'
      ],
      correctAnswer: 1,
      explanation: 'CAD (Computer-Aided Design) software is commonly used in modern carpentry for precision planning and design, along with laser tools for precision work.'
    },
    {
      id: 6,
      question: 'Which material is the primary focus of carpentry?',
      options: [
        'Plastic',
        'Wood',
        'Glass',
        'Stone'
      ],
      correctAnswer: 1,
      explanation: 'Wood is the primary material in carpentry, though carpenters may also work with engineered wood products, composites, or even metal and plastic in certain applications.'
    },
    {
      id: 7,
      question: 'In finish carpentry, which of the following tasks would be common?',
      options: [
        'Constructing scaffolding',
        'Installing trim and molding',
        'Pouring concrete',
        'Building bridges'
      ],
      correctAnswer: 1,
      explanation: 'Finish carpentry involves detailed, aesthetic work like installing trim, molding, cabinetry, and staircases, where precision and a keen eye for detail are essential.'
    },
    {
      id: 8,
      question: 'What is one of the key benefits of carpentry to society?',
      options: [
        'It only provides entertainment',
        'It ensures safe, durable, and functional buildings and furniture',
        'It eliminates the need for architects',
        'It replaces all forms of engineering'
      ],
      correctAnswer: 1,
      explanation: 'Carpentry is vital to society as it provides the backbone for housing, infrastructure, and functional design, ensuring safety, durability, and beauty in the built environment.'
    },
    {
      id: 9,
      question: 'What combination best describes carpentry as a profession?',
      options: [
        'Manual skill, creativity, and tool use',
        'Cooking, sewing, and weaving',
        'Singing, dancing, and acting',
        'Chemistry, biology, and physics only'
      ],
      correctAnswer: 0,
      explanation: 'Carpentry blends artistry, engineering, and practicality through manual skills, creativity, and tool use, making it a rewarding career for hands-on problem solvers.'
    },
    {
      id: 10,
      question: 'Which modern trend is becoming more important in carpentry?',
      options: [
        'Using reclaimed wood and sustainable practices',
        'Avoiding technology altogether',
        'Ignoring building codes',
        'Using only ancient tools'
      ],
      correctAnswer: 0,
      explanation: 'Modern carpentry increasingly incorporates sustainable practices such as using reclaimed wood, responsibly sourced timber, and energy-efficient designs, along with advanced technology.'
    }
  ]
};

export default quiz;

