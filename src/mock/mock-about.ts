export const MOCK_ABOUT = {
  id: 'about',
  title: 'Darya Ivanova',
  image: '/ivanova.png',
  location: 'Almaty, Kazakhstan',
  languages: ['English C1', 'Spanish B1', 'Russian Native'],
  about:
    'As a young and driven architect with 8 years of experience using Revit, SketchUp, and Enscape, I have taken part in a wide range of projects, from large residential communities to private homes and apartments. Architecture plays a major role in my life and I am always eager to tackle new projects and challenges.',
};

export const MOCK_OTHER = {
  skills: {
    advanced: ['Revit', 'SketchUp', 'Enscape', 'AutoCAD', 'Notion'],
    intermediate: ['ArchiCAD', 'Adobe Photoshop', 'CorelDRAW'],
    novice: ['Figma'],
  },
  experience: [
    {
      id: '1',
      title: 'L80',
      location: 'Almaty, Kazakhstan',
      position: 'Architect',
      time: 'Full-time',
      workType: 'Remote',
      period: 'June 2022 - Present',
      isSaved: true,
      achievements: [
        'High-rise residential complex Concept Developing (3D Exterior Concept, Floor Plans, Side Plan)',
        'Private houses Developing (Construction Drawings, Interior Design, Floor Plans, Schematic Design, Exterior 3D Concept, Construction Administration)',
      ],
    },
    {
      id: '2',
      title: 'LEVEL80 | architects',
      location: 'Minsk, Belarus',
      position: 'Architect',
      time: 'Full-time',
      workType: 'Office / Remote',
      period: 'May 2020 - September 2021',
      isSaved: true,
      achievements: [
        'High-rise residential complex Concept Developing (3D Exterior Concept, Floor Plans, Side Plan)',
        'Private houses Developing (Construction Drawings, Interior Design, Floor Plans, Schematic Design, Exterior 3D Concept, Construction Administration)',
      ],
    },
    {
      id: '3',
      title: 'Teltsov&partners',
      location: 'Minsk, Belarus',
      position: 'Architect',
      time: 'Full-time',
      workType: 'Office',
      period: 'November 2013 - April 2020',
      isSaved: true,
      achievements: [
        'Helped the company move from AutoCAD to Revit',
        '12 Interior Designs that have been realized',
        'Participation in more than 25 Exterior Designs of residential, private and public buildings',
        'From Schematic Design to Construction Administration project management',
      ],
    },
  ],
  education: [
    {
      id: '55',
      title: 'Belorussian National Technical University',
      location: 'Minsk, Belarus',
      position: 'Bachelor of Architecture',
      period: 'September 2008 - June 2014',
      isSaved: true,
    },
    {
      id: '56',
      title: 'College of Architecture and Civil Engineering',
      location: 'Minsk, Belarus',
      position: 'Specialty - architect',
      period: 'September 2005 - May 2007',
      isSaved: true,
    },
  ],
};
