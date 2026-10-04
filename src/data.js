// =====================================================
//  EDIT THIS FILE to change your portfolio content.
//  You never need to touch the components for text changes.
// =====================================================

export const profile = {
  name: 'Anees Ur Rehman Farooq',
  shortName: 'Anees',
  role: 'MERN Stack Developer & Software QA',
  location: 'Karachi, Pakistan',
  email: 'your.email@example.com', // TODO: put your real email
  github: 'https://github.com/your-username', // TODO
  linkedin: 'https://www.linkedin.com/in/your-username', // TODO
  intro:
    'I build full-stack web apps with MongoDB, Express, React and Node, then test them like a QA engineer before anyone else sees them.',
}

// Lines shown in the hero "test runner"
export const heroTests = [
  'builds REST APIs with Node and Express',
  'designs MongoDB schemas that scale',
  'ships React and Next.js interfaces',
  'writes test cases before release',
  'reports bugs with clear steps',
]

export const about = {
  paragraphs: [
    'I am a Software Engineering graduate from the University of Karachi. I like building complete web products, from the database to the button on the screen.',
    'I also trained in Software Quality Assurance, so I check my own work for bugs, edge cases and broken flows. That habit makes my code cleaner and my releases calmer.',
  ],
  facts: [
    ['Location', 'Karachi, Pakistan'],
    ['Degree', 'BS Software Engineering'],
    ['Focus', 'MERN stack and Software QA'],
    ['Also', 'Next.js and TypeScript'],
  ],
}

export const skills = {
  mern: {
    label: 'MERN development',
    text: 'The stack I use to build and ship full web applications.',
    items: [
      'MongoDB',
      'Express.js',
      'React',
      'Node.js',
      'Next.js',
      'TypeScript',
      'JavaScript (ES6+)',
      'Tailwind CSS',
      'REST APIs',
      'JWT authentication',
      'Git and GitHub',
    ],
  },
  qa: {
    label: 'Software QA',
    text: 'How I make sure what I build actually works. Edit this list to match what you know.',
    items: [
      'Test case design',
      'Test plans',
      'Bug reporting',
      'Manual testing',
      'Regression testing',
      'Black-box testing',
      'API testing with Postman',
      'SDLC and STLC',
    ],
  },
}

// ---------------------------------------------------
// SAMPLE PROJECTS: replace these with your real work.
// type must be either "MERN" or "SQA".
// ---------------------------------------------------
export const projects = [
  {
    type: 'MERN',
    title: 'Task Manager App',
    description:
      'Full-stack task tracker with user login, project boards and a REST API. Replace this text with your real project.',
    stack: ['React', 'Node.js', 'Express', 'MongoDB'],
    live: '#',
    code: '#',
  },
  {
    type: 'MERN',
    title: 'Next.js Blog Platform',
    description:
      'Server-rendered blog with an admin dashboard and image uploads. Replace this text with your real project.',
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB'],
    live: '#',
    code: '#',
  },
  {
    type: 'SQA',
    title: 'E-commerce Checkout Test Plan',
    description:
      'Test plan, test cases and bug reports for a checkout flow. Replace this text with your real QA work.',
    stack: ['Test cases', 'Bug reports', 'Postman'],
    live: '#',
    code: '#',
  },
]

// Education and experience timeline (newest first)
export const journey = [
  {
    title: 'BS Software Engineering',
    place: 'University of Karachi',
    period: 'Feb 2021 – Mar 2025',
  },
  {
    title: 'Software Quality Assurance training',
    place: 'Add your institute or course name',
    period: '',
  },
  {
    title: 'Teacher',
    place: 'Add your school or academy name',
    period: '',
  },
  {
    title: 'Data Entry Operator',
    place: 'Add your company name',
    period: '',
  },
]
