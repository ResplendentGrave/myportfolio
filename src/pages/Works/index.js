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
                <WorkItem
                    images=""
                    title=""
                />
                {/* {
                    selectedProjects.map(
                        item => <div className="column" key={item.sourceCodeLink}>
                            <WorkItem
                                {...item}
                            />
                        </div>
                    )
                } */}
            </div>
        </div>
    );
};

export default Works;
