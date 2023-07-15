// gitprofile.config.js

const config = {
  github: {
    username: 'muse254', // Your GitHub org/user name. (Required)
    sortBy: 'stars', // stars | updated
    limit: 6, // How many projects to display.
    exclude: {
      forks: false, // Forked projects will not be displayed if set to true.
      projects: [], // These projects will not be displayed. example: ['my-project1', 'my-project2']
    },
  },
  social: {
    linkedin: 'osoro-bironga-6646b0185/',
    //  twitter: 'arif_szn',
    //  mastodon: 'arifszn@mastodon.social',
    //  facebook: '',
    //  instagram: '',
    //  dribbble: '',
    //  behance: '',
    //  medium: 'arifszn',
    //  dev: 'arifszn',
    stackoverflow: '10020745/Osoro', // format: userid/username
    upwork: 'https://www.upwork.com/freelancers/osoro',
    //  skype: '',
    //  telegram: '',
    // website: 'https://osoro.dev',
    phone: '+254707079904',
    email: 'fanosoro@gmail.com',
  },
  resume: {
    fileUrl:
      'https://drive.google.com/file/d/16vGA_ISS6dSZaL8u4W-6QvltMvLOg7bg/view?usp=sharing', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    'Go',
    'Rust',
    'Zig',
    'Node.js',
    'MySQL',
    'PostgreSQL',
    'Git',
    'Docker',
  ],
  experiences: [
    {
      company: 'Doctaroo',
      position: 'Microservices Developer',
      from: 'June 2020',
      to: 'August 2020',
      companyLink: 'https://doctaroo.com/',
    },
    {
      company: 'Rabbit Care',
      position: 'Software Engineer',
      from: 'February 2022',
      to: 'April 2023',
      companyLink: 'https://rabbitcare.com/en',
    },
  ],
  /* certifications: [
    {
      name: 'Lorem ipsum',
      body: 'Lorem ipsum dolor sit amet',
      year: 'March 2022',
      link: 'https://example.com'
    },
  ], */
  education: [
    {
      institution: 'Moi University',
      degree: 'B.Sc in Computer Science',
      from: '2019',
      to: '2023',
    },
    {
      institution: 'Nairobi School',
      degree: 'High School Degree',
      from: '2013',
      to: '2017',
    },
  ],

  // To hide the `My Projects` section, keep it empty.
  externalProjects: [
    {
      title: 'Speak Programming Language',
      description:
        'Speak is an experimental programming language that aims to have configurable keywords. This is in an attempt to allow for the use of multiple written languages as preferred by the programmer.',
      imageUrl: 'https://github.com/speak-lang/speak/raw/main/assets/logo.png',
      link: 'https://github.com/speak-lang/speak',
    },
  /*  {
      title: 'Project Name',
      description:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc ut.',
      imageUrl: 'https://via.placeholder.com/250x250',
      link: 'https://example.com',
    }, */
  ],
  // Display blog posts from your medium or dev account. (Optional)
  //   blog: {
  //     source: 'dev', // medium | dev
  //     username: 'arifszn', // to hide blog section, keep it empty
  //     limit: 2, // How many posts to display. Max is 10.
  //   },
  //   googleAnalytics: {
  //     id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  //   },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'retro',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: true,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Hide the ring in Profile picture
    hideAvatarRing: false,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'procyon',
    ],

    // Custom theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
//   footer: `Made with <a 
//       class="text-primary" href="https://github.com/arifszn/gitprofile"
//       target="_blank"
//       rel="noreferrer"
//     >GitProfile</a> and ❤️`,
};

export default config;
