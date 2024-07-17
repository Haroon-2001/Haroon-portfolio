import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I am Mohamed Haroon, a student at the University of Colombo, Faculty of Instrumentation and Automation. I have gained knowledge in various topics such as Arduino, embedded systems, programming, and development.`;

export const ABOUT_TEXT = `I am Mohamed Haroon. I studied at the University of Colombo in the Faculty of Instrumentation and Automation, where I gained knowledge in various topics such as Arduino, embedded systems, programming, and development. I have strong communication skills and am eager to work to my experience and knowledge`;

export const EXPERIENCES = [
 
  {
    year: "2024/03 - 2024/09",
    role: "Automation Engineer - Intern",
    company: "Printcare PLC",
    description: 'I worked as an Automation Engineer intern at Printcare, where I contributed to various small projects, addressing a range of needs. This experience allowed me to gain valuable knowledge and hands-on expertise in the field.',
    technologies: ["Python", "PowerBi", "React", "Excel"],
  },
];

export const PROJECTS = [

  {
    title: "Energy Monitoring System",
    image: project2,
    description:
      "During my second-year project at university, I designed an energy monitoring system using Arduino. This system incorporated voltage and current meters to accurately monitor the energy consumption of devices.",
    technologies: ["Arduino", "Voltage sensor", "Current sensor"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["HTML", "CSS", "React", "Bootstrap"],
  },
  {
    title: "Atmeg-328p counter application",
    image: project4,
    description:
      "I developed a counter application utilizing the ATmega328P microcontroller with Microchip Studio. This project features functionalities such as counting displayed on a 7-segment display and counting using LEDs.",
    technologies: [ "PCB Soldering", "Ardiuno", "Microchip Studio"],
  },
];

export const CONTACT = {
  address: "Batticaloa,Sri Lanka ",
  phoneNo: "+94 075 555 86 10 ",
  email: "kmmharoon200@gmail.com",
};
