import React from 'react';

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import GitHubIcon from '@material-ui/icons/GitHub';
import {
  WebOutlined,
  AssignmentIndOutlined,
  YouTube,
  Language
} from '@material-ui/icons';

export default {
  name: 'David De Castro',
  title: 'Front End Developer',

  birthaday: '06 April 1984',
  email: 'daviddecastro36@gmail.com',
  address: '13 Chapman Street, Bolton, BL1 5JX',
  phone: '07783450578',

  socials: {
    Linkedin: {
      link: 'https://www.linkedin.com/in/david-l-de-castro',
      text: 'DavidConding',
      icon: <LinkedInIcon />
    },
    Facebook: {
      link: 'https://www.facebook.com/',
      text: 'MyFacebook',
      icon: <FacebookIcon />
    },
    Twitter: {
      link: 'https://twitter.com/lentorico',
      text: 'MyTwitter',
      icon: <TwitterIcon />
    },
    Github: {
      link: 'https://github.com/Clesio7844',
      text: 'MyGithub',
      icon: <GitHubIcon />
    }
  },
  about:
    'That David De Castro must be one of the most brilliant developers Ive ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers in no time! \n\n My name is David, I am a Full Stack ReactJS Developer. Currently I am working at Clever Programmer while also coaching must be one of the most brilliant developers Ive ever met! It is amazing that nobody has hired him yet. Hey you, you should hire this guy, he may be fresh out of University and have zero on the job experience but I am confident that he will be one of your best developers',

  experiences: [
    {
      title: 'Junior Front End Develper',
      date: '2020 - Present',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur adipisicing elit Eius pariatur'
    },
    {
      title: 'Taxi drive',
      date: '2019 - 2020',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur adipisicing elit Eius pariatur'
    },
    {
      title: 'Securite Guarden',
      date: '2005 - 2019',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur adipisicing elit Eius pariatur'
    }
  ],
  educations: [
    {
      title: 'Computer Network - BSc',
      date: '2010 - 2014',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur adipisicing elit Eius pariatur'
    },
    {
      title: 'Computer Business - HND',
      date: '2008 - 2010',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur adipisicing elit Eius pariatur'
    },
    {
      title: 'Electronic - BTEC',
      date: '2007 - 2008',
      description:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, pariatur adipisicing elit Eius pariatur'
    }
  ],
  services: [
    {
      title: 'Web Development',
      description: 'I have been work in front end developer for one year',
      icon: <WebOutlined />
    },
    {
      title: 'Branding Identity',
      description: 'I will make you a brand that is catchy and leaves atrace',
      icon: <AssignmentIndOutlined />
    },
    {
      title: 'Illustrator',
      description: 'I have been working on illustrtion design for 1 year',
      icon: <WebOutlined />
    }
  ],
  skills: [
    {
      title: 'FRONT-END',
      description: ['React.JS', 'JavaScript', 'HTML5', 'CSS', 'Material UI']
    },
    {
      title: 'BACK-END',
      description: ['Node.JS']
    },
    {
      title: 'DATABASES',
      description: ['Firebse', 'MongoDB']
    },
    {
      title: 'SOURCE CONTROL',
      description: ['Git', 'GitHub']
    }
  ],

  projects: [
    {
      tag: 'React',
      image:
        'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1972&q=80',
      title: 'React Project 1',
      caption: 'A short description',
      description: 'This is my react.js project. Please fill it in',
      links: [
        { link: 'https://google.com', icon: <YouTube /> },
        { link: 'https://google.com', icon: <GitHubIcon /> },
        { link: 'https://google.com', icon: <Language /> }
      ]
    },
    {
      tag: 'React',
      image:
        'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1972&q=80',
      title: 'React Project 2',
      caption: 'A short description',
      description: 'This is my react.js project. Please fill it in',
      links: [
        { link: 'https://google.com', icon: <YouTube /> },
        { link: 'https://google.com', icon: <GitHubIcon /> },
        { link: 'https://google.com', icon: <Language /> }
      ]
    },
    {
      tag: 'Wordpress',
      image:
        'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1972&q=80',
      title: 'Project 1',
      caption: 'A short description',
      description: 'This is my react.js project. Please fill it in',
      links: [
        { link: 'https://google.com', icon: <YouTube /> },
        { link: 'https://google.com', icon: <GitHubIcon /> },
        { link: 'https://google.com', icon: <Language /> }
      ]
    },
    {
      tag: 'Javascript',
      image:
        'https://images.unsplash.com/photo-1485988412941-77a35537dae4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1972&q=80',
      title: 'Project 1',
      caption: 'A short description',
      description: 'This is my react.js project. Please fill it in',
      links: [
        { link: 'https://google.com', icon: <YouTube /> },
        { link: 'https://google.com', icon: <GitHubIcon /> },
        { link: 'https://google.com', icon: <Language /> }
      ]
    }
  ]
};
