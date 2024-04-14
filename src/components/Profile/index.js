import React, { useContext } from 'react';
import './index.scss'
import TypedText from "../TypedText";
import SocialLinks from "../SocialLinks";
import Info from "../Info";
import Skills from "../Skills";
import {ThemeContext} from "../../context/ThemeContext";
import {useAnimation} from "../../use/animation";
import me from '../../assets/PHOTO.jpg';
import cv from '../../assets/HU_resume_0412.pdf'

const Profile = () => {
    const {  type } = useContext(ThemeContext);
    const { animation } = useAnimation();
    return (
        <div className="profile">
            <div className="profile__banner">
                <div className={`profile__photo ${animation}`} />
                <img
                    src={me}
                    alt={type}
                />
            </div>
            <div className="profile__content">
                <div className="profile__title">
                    HU GUANGXIN
                </div>
                <TypedText/>
                <SocialLinks/>
                <Info icon="location">
                    MORIOKA
                </Info>
                <Skills />
            </div>
            <div className="profile__contact">
                <a href={cv} target="_blank" rel="noreferrer">
                        <span>
                            Download CV
                        </span>
                </a>
                <a href="mailto:g0323065@iwate-u.ac.jp">
                        <span>
                            Contact Me
                        </span>
                </a>
            </div>
        </div>
    );
};

export default Profile;
