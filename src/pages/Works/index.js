import React, { useState } from 'react';
import { projects } from './data';
import Title from "../common/Title";
import WorkItem from "./Item";
import "./index.scss"

const initalState = projects.filter(p => p.type === 'react');

const Works = () => {
    const [selectedProjects, setSelectedProjects] = useState(initalState);


    return (
        <div className="page" id="works">
            <Title>
                WORKS
            </Title>

            <div className="row">
                {/* <WorkItem
                    images=""
                    title=""
                /> */}
                {
                    selectedProjects.map(
                        item => <div className="column" key={item.sourceCodeLink}>
                            <WorkItem
                                {...item}
                            />
                        </div>
                    )
                }
            </div>
            <div className='row'>
                <WorkItem
                {
                    ... 
                    {
                        title: 'React portfolio',
                        images: [
                            "https://i.ibb.co/3TqgZRr/shot20.jpg" 
                        ],
                        sourceCodeLink: 'https://github.com/ResplendentGrave/myportfolio',
                        demoLink: '',
                        type: 'react'
                    }
                }
                
                />
            </div>
            <div className='row'>
               
                <WorkItem
                {
                    ... 
                    {
                        title: 'React flea market management site',
                        images: [
                            "https://i.ibb.co/dDRnqfb/shot30.jpg",
                            "https://i.ibb.co/w4mxr7Y/shot31.jpg"
                        ],
                        sourceCodeLink: 'https://github.com/ResplendentGrave/react_manage_site',
                        demoLink: '',
                        type: 'react'
                    }
                }
                
                />
                 <WorkItem
                {
                    ... 
                    {
                        title: 'Weixin flea market',
                        images: [
                            "https://i.ibb.co/R6WFtb4/shot34.jpg",
                            "https://i.ibb.co/PNkp7bj/shot33.jpg",
                            "https://i.ibb.co/x8stHR4/shot32.jpg"
                        ],
                        sourceCodeLink: 'https://github.com/ResplendentGrave/wx_fleamarket',
                        demoLink: '',
                        type: 'react'
                    }
                }
                
                />
            </div>
            <Title>        
                ARTICLES
            </Title>
           

        </div>
    );
};

export default Works;
