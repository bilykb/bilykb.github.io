interface DataType {
  header: string,
  subheader?: string,
  content: string[]
  date?: string
  website?: string[]
}

interface SectionType {
  education: DataType[]
  employment: DataType[]
  projects: DataType[]
  volunteering: DataType[]
  learning: DataType[]
}

export const sectionData: SectionType = {
  education: [
    {
      header: 'Lighthouse Labs',
      date: 'July 2021 to February 2022',
      content: [
        'Web Development Diploma'
      ]
    },
    {
      header: 'University of Western Ontario',
      date: 'September 2015 to August 2016',
      content: [
        'Masters in Public History'
      ]
    },
    {
      header: 'MacEwan University',
      date: 'September 2010 to May 2015',
      content: [
        'Bachelor of ARts History Major and Political Science Minor'
      ]
    }
  ],
  employment: [
    {
      header: 'Athennian',
      subheader: 'Full Stack Web Developer',
      date: 'February 2022 to July 2023',
      content: [
        'Participated in code review and code testing, while maintaining best practices',
        'Designed, coded, and tested technical solutions with a performance and security focus',
        'Collaborated closely with team members and customers in an Agile environment, and actively engaged in group discussions',
        'Successfully utilized resources and problem-solving skills to find solutions when faced with challenges or problems',
        'Contributed to technical documentation, identified common and recurring problems, and created reusable code',
        'Coordinate with departments and colleagues to create the best experience for customers',
        'Deliver features, fix bugs, and support the software application through the entire software development cycle, from inception to delivery and adoption',
        'Contribute to Athennian\'s Diversity, Equity, and Inclusion Committee',
        'Utilized AI, such as chatGPT, as a valuable resource to enhance problem-solving and code optimization',
        'Tech stack included Angular2+, AngularJS, Express, MongoDB, Mongoose, AWS, SASS'
      ]
    },
    {
      header: 'Edmonton Public Schools Archives and Museum',
      subheader: 'Archivist',
      date: 'January 2018 to June 2021',
      content: [
        'Received, processed, and facilitated requests for Freedom of Information and Protection of Privacy (FOIP) restricted student record archival data',
        'Coordinated access to on-site archival material to members of the public to answer specific archival questions',
        'Regularly interacted with the public and responded to public inquiries',
        'Provided on-site information technology assistance for co-workers and museum events',
        'Digitized archival content to adapt to rapidly changing COVID health restrictions'
      ]
    },
    {
      header: 'Government of Alberta - Heritage Resource Management Branch',
      date: 'May 2016 to August 2016',
      content: [
        'Performed extensive and thorough research into one of Alberta\'s potential heritage structures while utilizing archival material',
        'Developed an understanding, and applied Alberta\'s Historical Resources Act',
        'Drafted a detailed historical analysis of the Dominion Hotel in Edmonton'
      ]
    }
  ],
  projects: [
    {
      header: 'Microservice Refactoring for Document Generation',
      subheader: 'Employer: Athennian',
      date: 'May 2022 to September 2022',
      content: [
        'Refactored a section of a monolithic codebase into a standalone microservice for document generation using docx templater and pdftron',
        'Utilized docx templater library to dynamically generate documents based on customizable templates and data inputs',
        'Implemented robust error handling, logging, and testing mechanisms for reliability and performance optimization',
        'Collaborated with cross-functional teams to integrate the document generation microservice into the larger system architecture'
      ]
    },
    {
      header: 'Batch Document Generation Implementation',
      subheader: 'Employer: Athennian',
      date: 'May 2022 to September 2023',
      content: [
        'Participated in cross-functional collaboration efforts to implement a batch document generation feature in our application, leveraging docx templater',
        'Coordinated with multiple teams within the organization to gather requirements, and ensure seamless integration of the new functionality',
        'Successfully delivered an enhanced system capability, enabling users to generate multiple templates simultaneously, improving user efficiency and productivity  '
      ]
    },
    {
      header: 'Know Your Client(KYC) Integration and Backwards Compatibility',
      subheader: 'Employer: Athennian',
      date: 'May 2022 to July 2023',
      content: [
        'Collaborated with a cross-functional team to implement Know Your Client (KYC) stories within a complex legacy codebase',
        'Developed front-end functionalities for capturing and verifying client information using AngularJS and Angular 2+ frameworks',
        'Addressed the challenges of working with legacy code by implementing backward compatibility measures between AngularJS and Angular 2+ to ensure a consistent user experience'
      ]
    },
    {
      header: 'Cross-Compatibility Layer for Document Generation',
      subheader: 'Employer: Athennian',
      date: 'March 2023 to May 2023',
      content: [
        'Developed a cross-compatibility layer to bridge the gap between deprecated docx and pdf templates and the new microservice\'s data shape',
        'Designed and implemented a data transformation mechanism to convert and map data between the old and new data shapes for accurate document generation',
        'Collaborated closely with the team to identify and resolve discrepancies or inconsistencies between the old and new data shapes'
      ]
    }
  ],
  volunteering: [
    {
      header: 'SnowBusters',
      date: 'November 2022 to Present',
      content: [
        'Performed snow shovelling and sweeping, and ice removal tasks to maintain safe and accessible pathways, driveways, and entryways',
        'Communicated with residents to learn specific snow removal needs and preferences'
      ]
    },
    {
      header: 'LawnBusters',
      date: 'May 2023 to Current',
      content: [
        'Effectively communicated with resident over specific lawn maintenance needs and schedule',
        'Operated and maintained lawn care equipment, including mowers, trimmers, and edgers, to ensure optimal performance'
      ]
    }

  ],
  learning: [
    {
      header: 'Catchlight',
      subheader: 'React, Axios, Tailwind-css, Express.js, Postgresql',
      website: [ 
        'https://github.com/bilykb/catchlight', 
        'https://github.com/bilykb/catchlight-api' 
      ],
      content: [
        'Catchlight was built as a final project with a team of students at Lighthouse Labs. It allows users to save a list of previously watched movies, rate and communicate with other users in regards to their preferences'
      ]
    },
    {
      header: 'Keyhole',
      subheader: 'React, Axios, CSS, Express.js, bcryptjs, Postgresql, SASS',
      website: [
        'https://github.com/bilykb/PasswordKeepR'
      ],
      content: [
        'Keyhole is a full-stack, multi-page application that allows the user to generate and save passwords with two-way AES 256-bit encryption'
      ]
    },
    {
      header: 'Scheduler',
      subheader: 'React, Storybook, axios',
      website: [
        'https://github.com/bilykb/scheduler'
      ],
      content: [
        'Scheduler is a front-end focused, single-page application that allows users to schedule interviews with programming mentors'
      ]
    },
    {
      header: 'Tweeter',
      subheader: 'React, Express.js',
      website: [
        'https://github.com/bilykb/tweeter'
      ],
      content: [
        'Tweeter is a front-end focused, single-page Twitter clone where users can post tweets'
      ]
    },
    {
      header: 'Jungle',
      subheader: 'Ruby, Ruby on Rails, Postgresql',
      website: [
        'https://github.com/bilykb/jungle-rails'
      ],
      content: [
        'Jungle is a full-stack, multi-page application that allows people to navigate a store page, and make purchases'
      ]
    }
  ]
}