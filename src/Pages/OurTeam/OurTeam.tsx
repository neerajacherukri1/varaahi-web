import React from 'react';
import './ourTeam.css';
import headerBg from "../../assests/images/header-bg.jpg";
import team_lead from '../../assests/images/ourteam_image1.jpg';
import team_member1 from '../../assests/images/ourteam_image2.jpg';
import team_member2 from '../../assests/images/ourteam_image3.jpg';
import team_member3 from '../../assests/images/ourteam_image4.jpg';
import team_member4 from '../../assests/images/ourteam_image5.jpg';
import team_member5 from '../../assests/images/ourteam_image6.jpg';
import team_member6 from '../../assests/images/ourteam_image7.jpg';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';
import PageHeader from '../../Components/SectionalBlock/PageHeader';
import GetStarted from '../../Components/GetSatrted/GetStarted';

const OurTeam = () => {
  return (
    <div className='team-container'>

      {/* Header Section */}
      <PageHeader
        title="OUR TEAM"
        breadcrumbs={[
          { label: "OUR TEAM", link: "/ourteam" },
        ]}
        backgroundImage={headerBg}
      />

      {/* Team Lead Section */}
      <div className='team-members'>
        <div className='img-team'>
          <img src={team_lead} alt="Team Lead" className='team-lead-img' />
        </div>

        <div className='bio-team'>
          <h2 className='team-lead-name'>Jhon Doe</h2>
          <p className='team-lead-bio'>
            Senior Real Estate Manager, bringing expertise in property management,
            client relations, and market insights.
          </p>

          <div className='team-member-icons'>
            <a className='fa-icon' href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a className='fa-icon' href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
            <a className='fa-icon' href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a className='fa-icon' href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
          </div>

          <h3 className='team-lead-position'>Senior Real Estate Manager</h3>
          <p className='team-lead-desc'>
            With over 10 years of experience in property management, client advisory, 
            and real estate development, John specializes in guiding clients through 
            investment and property solutions.
          </p>
        </div>
      </div>

      {/* Team Members Section */}
      <h2 className='team-member-head'>Meet Our Team</h2>

      <div className='team-member-cards'>
        {[
          { img: team_member1, name: "Mr. Rajesh Varma", role: "Managing Partner", bio: "Leads strategic operations and legal oversight with 15+ years of real estate experience." },
          { img: team_member2, name: "Mr. Suresh Reddy", role: "Operations Head", bio: "Oversees service execution and client coordination across all projects." },
          { img: team_member3, name: "Mr. Arvind Kumar", role: "Customer Web Administrator", bio: "Manages property listings, lead generation, and customer engagement." },
          { img: team_member4, name: "Wilbert Stokes", role: "Customer Web Administrator", bio: "Oversees service execution and client coordination across all projects." },
          { img: team_member5, name: "Wilbert Stokes", role: "Customer Web Administrator", bio: "Oversees service execution and client coordination across all projects." },
          { img: team_member6, name: "Wilbert Stokes", role: "Customer Web Administrator", bio: "Oversees service execution and client coordination across all projects." }
        ].map((member, idx) => (
          <div key={idx} className='team-member-card'>
            <img src={member.img} alt={member.name} className='team-member-img' />
            <div className='team-member-details'>
              <h3 className='team-member-name'>{member.name}</h3>
              <p className='team-member-role'>{member.role}</p>
              <p className='team-member-bio'>{member.bio}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <GetStarted />
    </div>
  )
}

export default OurTeam;
