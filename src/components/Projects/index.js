import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import project1 from '../../assets/projects/project1.png';
import project2 from '../../assets/projects/project2.png';
import project3 from '../../assets/projects/project3.png';
import project4 from '../../assets/projects/project4.png';
import project5 from '../../assets/projects/project5.png';
import project6 from '../../assets/projects/project6.png';



function Projects() {
  const [projects] = useState([
    {
      name: 'Home Made',
      url: 'https://quiet-dawn-67392.herokuapp.com/about',
      image: project2,
      description: 'This Project is still a work in progress. Its aim is to connect black-buisnesses with the the world, giving more expore to black buisness owners'
    },
    {
      name: 'Amys task',
      url: 'https://amystasks.herokuapp.com/',
      image: project1,
      description: 'Derived from "Taskmaster Pro", Amys Tasks lets you organize and scheduale your tasks',
    },
      {
      name: 'Budget Tracker',
      githuburl: 'https://github.com/sandy3392/legendary-waddle',
      image: project3,
      description: 'This is a budget tracker app with offline functionality wehre you can add and delete expenses with and without internet connectivity'
    },
    {
      name: 'NoteTaker App',
      githuburl: 'https://glacial-spire-91877.herokuapp.com',
      image: project4,
      description: 'The Note taker app lets a user take notes and save them online and users will be able to access the notes anytime anywhere'
    },
    {
      name: 'Code Quiz',
      githuburl: 'https://rod0352.github.io/Web-API-CodeQuiz-/',
      image: project6,
      description: 'The Code quiz is one of my earliest works, displaying front-end JS'
    },
    {
      name: 'ReadMe Generator',
      githuburl: 'https://github.com/Rod0352/README-generator',
      image: project5,
      description: 'Using "Inquier" and node, dynamically generate a README.md in your terminal with node index'
    },
  ]);
  return (
    <>
      <div className="d-flex justify-content-end  flex-row mx-2">
        {projects.map((project, i) => (
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={project.image} key={project.name} />
            <Card.Body>
              <Card.Title className='p'>{project.name}</Card.Title>
              <Card.Text >
                {project.description}
              </Card.Text>
              <Button href={project.url} target="blank">Check it Out!</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

    </>
  );
}

export default Projects;