import React from 'react';
import './ourTeam.css';
import team_lead from '../../assests/WhatsApp Image 2025-08-19 at 17.55.40_757a1bdd.jpg';
import team_member1 from '../../assests/WhatsApp Image 2025-08-19 at 17.55.25_dccdf3a9.jpg';
import team_member2 from '../../assests/WhatsApp Image 2025-08-19 at 17.55.25_dccdf3a9.jpg';
import team_member3 from '../../assests/WhatsApp Image 2025-08-19 at 17.55.25_dccdf3a9.jpg';
import team_member4 from '../../assests/WhatsApp Image 2025-08-19 at 17.55.25_dccdf3a9.jpg';
import team_member5 from '../../assests/WhatsApp Image 2025-08-19 at 17.55.25_dccdf3a9.jpg';
import team_member6 from '../../assests/WhatsApp Image 2025-08-19 at 17.55.25_dccdf3a9.jpg';
import { FaFacebookF, FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';


const OurTeam = () => {
    return (
        <div className='team-container'>
            <div className='banner'>
                <h1 className='head'>Our Team</h1>
                <p className='bio'></p>
            </div>

            <div className='team-members'>
                <div className='img-team'>
                    <img src={team_lead} alt="Team Lead" className='team-lead-img' />

                </div>
                <div className='bio-team'>
                    <h1 className='team-lead-name'>Jhon Doe</h1>
                    <p className='team-lead-bio'>Senior Real Estate Manager, bringing expertise in property management, client relations, and market insights.</p>

                    <div className='team-member-icons'>
                        <a className='fa-icon' href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            {FaFacebookF({})}
                        </a>
                        <a  className='fa-icon'  href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            {FaLinkedinIn({})}
                        </a>
                        <a  className='fa-icon'  href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            {FaTwitter({})}
                        </a>
                        <a  className='fa-icon'  href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            {FaInstagram({})}
                        </a>

                    </div>

                    <h1 className='team-lead-name'>Senior Real Estate Manager</h1>

                    <p className='team-lead-bio'>With over 10 years of experience in property management, client advisory, and real estate development, John specializes in guiding clients through investment and property solutions.</p>




                </div>


            </div>

            <h2 className='team-member-head'>Meet Our Team</h2>

            <div className='team-member-cards'>
                <div className='team-member-card'>
                    <img src={team_member1} alt="Team Member 1" className='team-member-img' />
                    <div className='team-member-details'>
                        <div className='team-center'>


                            <h1 className='team-member-name'>Mr. Rajesh Varma</h1>
                            <p className='team-member-role'>Managing Partner</p>
                        </div>
                        <p className='team-member-bio'>Leads strategic operations and legal oversight with 15+ years of real estate experience.</p>

                    </div>
                </div>

                <div className='team-member-card'>
                    <img src={team_member2} alt="Team Member 1" className='team-member-img' />
                    <div className='team-member-details'>
                        <div className='team-center'>


                            <h1 className='team-member-name'>Mr. Suresh Reddy</h1>
                            <p className='team-member-role'>Operations Head</p>
                        </div>
                        <p className='team-member-bio'>Oversees service execution and client coordination across all projects.</p>

                    </div>
                </div>

                <div className='team-member-card'>
                    <img src={team_member3} alt="Team Member 1" className='team-member-img' />
                    <div className='team-member-details'>
                        <div className='team-center'>


                            <h1 className='team-member-name'>Mr. Arvind Kumar</h1>
                            <p className='team-member-role'>Customer Web Administrator</p>
                        </div>
                        <p className='team-member-bio'>Manages property listings, lead generation, and customer engagement.</p>

                    </div>
                </div>

                <div className='team-member-card'>
                    <img src={team_member4} alt="Team Member 1" className='team-member-img' />
                    <div className='team-member-details'>
                        <div className='team-center'>


                            <h1 className='team-member-name'>Wilbert Stokes</h1>
                            <p className='team-member-role'>Customer Web Administrator</p>
                        </div>
                        <p className='team-member-bio'>Oversees service execution and client coordination across all projects..</p>

                    </div>
                </div>

                <div className='team-member-card'>
                    <img src={team_member5} alt="Team Member 1" className='team-member-img' />
                    <div className='team-member-details'>
                        <div className='team-center'>


                            <h1 className='team-member-name'>Wilbert Stokes</h1>
                            <p className='team-member-role'>Customer Web Administrator</p>
                        </div>
                        <p className='team-member-bio'>Oversees service execution and client coordination across all projects.</p>

                    </div>
                </div>

                <div className='team-member-card'>
                    <img src={team_member6} alt="Team Member 1" className='team-member-img' />
                    <div className='team-member-details'>
                        <div className='team-center'>


                            <h1 className='team-member-name'>Wilbert Stokes</h1>
                            <p className='team-member-role'>Customer Web Administrator</p>
                        </div>
                        <p className='team-member-bio'>Oversees service execution and client coordination across all projects.</p>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default OurTeam