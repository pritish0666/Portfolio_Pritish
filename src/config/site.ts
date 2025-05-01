
export const siteConfig = {
  name: 'PRITISH P PATRA',
  description:
    'Full Stack Developer || Bangalore',
  images: {
    profile: '/pro.jpeg',
    about: '/about1.jpeg',
    favicon: '/favicon.png',
  },
  links: {
    linkedin: 'https://www.linkedin.com/in/pritish-p-patra-25548421a/',
    github: 'https://github.com/pritish0666',
    instagram: 'https://www.instagram.com/pritish._.29/',
    whatsapp: 'https://wa.me/917681040982',
    buyMeCoffee: 'https://buymeacoffee.com/pp29',
    resume: '/resume.pdf',
  },
  about: {
    description:
      'Driven Software Developer specializing in backend and full-stack roles, with a strong command of JavaScript, C, and Python. Certified in Data Structures and Python Programming, skilled in Node.js, React.js, and MongoDB. Proven ability to build secure, scalable web applications and improve database management and API integrations. Passionate about leveraging deep technical expertise and robust problem-solving skills to contribute to innovative software solutions in dynamic environments.',
    achievements: [
      'ENIGMA 2023 Runners-Up.',
      'Best Paper @ 3rd International Conference on Advancements in Research & Development',

    ],
  },
  projects: [
    {
      name: 'Complete-Backend',
      description: [
        'Designed a secure authentication system using CAPTCHA verification, refresh tokens, and access tokens, improving security by 40%.',
        'Integrated RAZORPAY API for seamless payment handling, successfully processing over 95% of transactions without errors.',
        'Optimized database queries using MongoDB Aggregation Pipeline, reducing query time by 30%.',
        'Automated PDF generation and email dispatch via Gmail SMTP, saving up to 20 hours of manual effort monthly.',
      ],
      links: {
        github: 'https://github.com/pritish0666/Backend_Project',
      },
    },
    {
      name: 'Video Meet App',
      description: [
        'Enabled users to create instant meetings or schedule them for specific dates/times, improving meeting setup efficiency by 60%.',
        'Implemented seamless meeting joining via unique links.',
        'Integrated automatic meeting recording and secure cloud storage, ensuring 100% availability of past sessions.',
        'Secured the application with Clerk authentication, providing robust user management and access control.'
      ],
      links: {
        github: 'https://github.com/pritish0666/video_meet_app',
        deployment: 'https://video-meet-app-six.vercel.app/'
      }
    },
    {
      name: 'Real-Time Chat App',
      description: [
        'Built a MERN chat app with Socket.IO, reducing latency by 80% for real-time messaging.',
        'Enhanced user privacy by implementing encrypted data storage, increasing data security compliance by 50%.',
        'Deployed using Render Free Tier, achieving 99.9% uptime during stress testing with up to 100 concurrent users.',
      ],
      links: {
        github: 'https://github.com/pritish0666/ChatApp',
        deployment: 'https://chatapp-6sfx.onrender.com/',
      },
    },

    {
      name: 'LinkedIn Post Reactor – Chrome Extension',
      description: [
        'Automated post reactions on LinkedIn using JavaScript and DOM manipulation, reducing user effort by 50%.',
        'Designed a user-friendly popup interface for streamlined input, improving task efficiency by 35%.',
        'Published the extension on the Chrome Web Store, garnering over 100 installations within the first month.',
      ],
      links: {
        github: 'https://github.com/pritish0666/LinkedIN_Post_React',
        deployment: 'https://chromewebstore.google.com/detail/linkedin-post-reactor/mbkphhdgblhfbdhddakcelfpnjlppcmj',
      },
    },
  ],
};
