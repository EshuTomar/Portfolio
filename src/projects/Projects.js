// src/components/Projects.js
import React from 'react';
import './Projects.css';
import Footer from '../footer/Footer';

  const projectsData = [
    {
      title: 'Movie-Watchlist App',
      description: 'The Movie Watchlist App lets users create and manage personalized lists of movies they want to search, watch, watched list',
      image: '/movie-app.png', 
      link: 'https://your-codetogether-link.com'
    },
    {
      title: 'Calendar',
      description: 'The Calendar App is a dynamic scheduling tool that allows users to organize events, set reminders, and manage their time efficiently with an intuitive and interactive interface.',
      image: '/calendar.png', 
      link: 'https://your-moneymap-link.com'
  },
    {
        title: 'CodeTogether',
        description: 'A real-time code collaboration web app with features like live editing, syntax highlighting, and version control.',
        image: '/codetogether.png', 
        link: 'https://your-codetogether-link.com'
    },
    {
      title: 'MoneyMap',
      description: 'A financial tracking app that visualizes your income and expenses using interactive charts and graphs.',
      image: '/moneymap.png', 
      link: 'https://your-moneymap-link.com'
  },
    {
      title: 'Employee Review System',
      description: 'The Employee Review System streamlines performance evaluations by enabling managers to provide structured feedback, set goals, and track employee progress over time.',
      image: '/employee-system.png', 
      link: 'https://your-codetogether-link.com'
    },
    {
      title: 'Habit tracker',
      description: 'The Habit Tracker App helps users build and maintain positive habits by allowing them to track daily routines, set goals, and visualize progress with ease.',
      image: '/habit-tracker.png', 
      link: 'https://your-codetogether-link.com'
    },
    {
      title: 'Portfolio',
      description: 'The Portfolio is a showcase of my expertise as a full-stack developer, featuring a collection of projects that demonstrate my skills in web development, design, and software engineering.',
      image: '/portfolio.png', 
      link: 'https://your-codetogether-link.com'
    },
   
    // Add more projects here
];
const workingOnProjectsData = [
  {
      title: 'BillMaster',
      description: 'A comprehensive invoice management system for small businesses, with features like invoice generation, tracking, and payment integration.',
      image: '/invoice.png', // Replace with actual image
  },
  {
    title: 'Chitchat',
    description: 'ChitChat is a modern, real-time chat application built with React, designed for seamless and interactive communication. Connect with friends, family, and colleagues through an intuitive and customizable platform.',
    image: '/chat-app.png',
  },
  
  {
    title: 'E-commerce',
    description: 'The E-commerce App provides a comprehensive online shopping experience, featuring a user-friendly interface, secure payment options, and efficient product management for both buyers and sellers.',
    image: '/e-commerce.png',
  } 
];

const Projects = () => {
    return (
      <>
        <section id="projects">
            <div className="projects-intro">
                <h1>My Projects</h1>
                <p>
                    As a passionate full-stack developer, I’ve worked on various projects that span the entire stack, from designing engaging front-end interfaces to developing robust back-end services. Here are some of the projects that showcase my skills and expertise.
                </p>
            </div>
            <div className="projects-grid">
                {projectsData.map((project, index) => (
                    <div className="project-card" key={index}>
                        <div className="project-image">
                            <img src={project.image} alt={project.title} />
                        </div>
                        <div className="project-info">
                            <h2>{project.title}</h2>
                            <p>{project.description}</p>
                            <a href={project.link} target="_blank" rel="noopener noreferrer">
                                View Project
                            </a>
                        </div>
                    </div>
                ))}
            </div>

            <div className="currently-working-on">
                <h2>Currently Working On</h2>
                <p>
                    I'm always learning and developing new projects to expand my skills and contribute to the tech community. Here are a few projects that I'm currently working on:
                </p>
                <div className="projects-grid">
                    {workingOnProjectsData.map((project, index) => (
                        <div className="project-card" key={index}>
                            <div className="project-image">
                                <img src={project.image} alt={project.title} />
                            </div>
                            <div className="project-info">
                                <h2>{project.title}</h2>
                                <p>{project.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        <Footer/>
        </>
    );
};

export default Projects;

