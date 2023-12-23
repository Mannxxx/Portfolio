import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import startpage from "../../Assets/Projects/startpage.gif";
import event from "../../Assets/Projects/event.jpg";
import blood from "../../Assets/Projects/blood.jpg";
import coinfun from "../../Assets/Projects/coinfun.jpg";
import movie from "../../Assets/Projects/movie.jpg";
// import bitsOfCode from "../../Assets/Projects/blog.png";
import exigency from "../../Assets/Projects/exigency.jpg";
import covid from "../../Assets/Projects/covid.jpg";
import track from "../../Assets/Projects/track.jpg";
import buddy from "../../Assets/Projects/buddy.png";
import olympic from "../../Assets/Projects/olympic.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={olympic}
              isBlog={false}
              title="Geek Olympic [Team- Artavis]"
              description="his submission aims to enhance the Olympics experience for users and organizers through a web-based application that offers various exciting features. We have utilized the provided Olympic dataset along with other data from the internet to create a feature-rich platform for Olympic enthusiasts. Our web-based application, Geek-Olympic WebApp, provides users with an interactive interface to stream various Olympic events and engage with them in a fun manner"
              ghLink="https://github.com/Mannxxx/Geek-A-Thon-Project"
              // demoLink="https://blogs.Mannxxx.tech/"
            />
          </Col>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={track}
              isBlog={false}
              title="Track check in Helicopter Main Rotor Blade using image processing"
              description="Developing a non-contact based method that is actually safe and reliable, that measures track (within 20mm) in military helicopters using computer vision and image processing, to ensure the safety and reliability of tracking in military aviation. This project is mandated by the BRD(Base Repair Depot) and defense sector to meet their needs and enhance their capabilities."
              ghLink="https://github.com/Mannxxx/BTP"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" 
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Bits-0f-C0de"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js. Supports dark mode and easy to write blogs using markdown."
              ghLink="https://github.com/Mannxxx/Bits-0f-C0de"
              demoLink="https://blogs.Mannxxx.tech/"
            />
          </Col> */}

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="Sony-sponsored project on Novel Multi-modal Recommendation Systems for Online Movie Recommendation"
              description="I had the privilege of contributing to a project that redefined online movie recommendations. By implementing advanced multi-modal recommendation systems, we combined user preferences, genres, ratings, and contextual data to provide highly personalized suggestions. Our team's innovative algorithms and collaborative filtering techniques not only improved accuracy but also enhanced the overall user experience, reducing search time and increasing engagement. It was a rewarding experience, knowing that our work made movie-watching more enjoyable for users."
              ghLink="https://github.com/Mannxxx/Movie-Recommendation-system"
              // demoLink="error 404"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={coinfun}
              isBlog={false}
              title="Coinfun: Crypto Paper Trading Exchange"
              description="Designed & launched working website for trading in cryptocurrencies along with P2P portal using python, flask and MySQL. Designed the backend of registration portal handling maximum corner cases equipped with an OTP verification API. Implemented basic KYC (Know your Customer) feature using Google-Face Recognition API to verify user accounts. Used cctx package to fetch real-time crypto price data and plot candle-stick charts in various timeframes using matplotlib"
              ghLink="https://github.com/Mannxxx/Coinfun"
              // demoLink="error 404"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={blood}
              isBlog={false}
              title="BloodBank mobile application"
              description="I worked as a vital member of the technical team at Blood Connect Foundation, which was responsible for the creation and maintenance of the Blood Connect mobile application. During my tenure, I contributed to the development and continuous improvement of the app, ensuring that it served as an essential tool for connecting blood donors with those in need. It was a fulfilling experience knowing that my technical skills were making a meaningful impact on the mission of saving lives through blood donation."
              ghLink="https://github.com/Mannxxx/BloodBank"
              // demoLink="error 404"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={buddy}
              isBlog={false}
              title="Buddy Chat"
              description="A basic native WebRTC peer to peer Web App implementation. It includes a web client and a signaling server for clients to connect and do signaling for WebRTC."
              ghLink="https://github.com/Mannxxx/BuddyChat"
              // demoLink="error 404"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={event}
              isBlog={false}
              title="Event Registration"
              description="It is an android application for registering in the sports event, which simplifies the process of signing up for sports events. This project involved designing an intuitive user interface, implementing secure user registration, and providing event organizers with tools to manage their events. I also ensured data privacy and security measures, integrated push notifications, and created a seamless user experience. This project allowed me to demonstrate my proficiency in mobile app development, user interface design, and database management while delivering a valuable solution for sports enthusiasts to easily engage with their favorite events."
              ghLink="https://github.com/Mannxxx/Event-Registration"
              // demoLink="error 404"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={covid}
              isBlog={false}
              title="COVID-19 TRACKER"
              description="Track the cases of Covid-19 on global level as well as on country level. This app also provided real-time COVID-19 related news updates. To enhance user safety, I created a user-friendly interface and integrated a feature allowing users to determine their proximity to containment zones by entering their location."
              ghLink="https://github.com/Mannxxx/COVID-19-TRACKER"
              // demoLink="error 404"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={exigency}
              isBlog={false}
              title="Exigency"
              description="It is an an Android application dedicated to saving lives during emergencies. It streamlines the process of booking an ambulance in critical situations, significantly reducing response times and enhancing the chances of saving lives."
              ghLink="https://github.com/Mannxxx/Exigency"
              // demoLink="error 404"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={startpage}
              isBlog={false}
              title="Minimal Startpage"
              description="A minimal starpage for Chrome and Firefox"
              ghLink="https://github.com/Mannxxx/startpage"
              // demoLink="error 404"       
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;