import React from 'react';
import './index.scss';
import Title from "../common/Title";

const About = () => {
    return (
        <div className="page" id="about">
            <Title>
                About Me
            </Title>
            <div className="row">
                <div className="column">
                    {/* <strong>
                        岩手大学大学院の胡 广昕(コ コウキン)と申します。
                    </strong>
                    <p>
                       
                    <br/>
                       デザイン・メディアメジャーなので、3Dグラフィック分野では幅広い知識を持っています。現在の研究テーマは三次元点群アルゴリズムで、普段はC++とpythonを使って研究を行っています。
                       普段は趣味でWebアプリケーションを制作している、大学時代にWeb関連の分野に触れ、様々なWebページを制作することに面白さを感じていました。
                       ブロックを積み上げるようにページを作っていくと達成感があるので、日本でフロントエンドエンジニアとして働きたいと思っています。
                       

                    </p> */}
                    <strong>
                        Hi, I am HU GUANGXIN!
                    </strong>
                    <p>
                       
                    <br/>
                    Currently enrolled in a Master's program at Iwate University, with a personal focus on 3D algorithms and point clouds.
                    I have been studying the web field since university and have been involved in the development of web applications.
                    <br/>
                    <br/>
                    Mainly use React for front-end development on a daily basis, with a deep understanding of Javascript and familiarity with team development.
                    Personally, I like to learn and use the latest technologies as the web front-end field is ever-changing and am looking for challenging projects.
                       

                    </p>
                </div>
            </div>
            {/* <Title>
                My philosophy of programming
            </Title> */}
           
            <Title>
                Highlights of Qualifications
            </Title>
            <div className="row">
                <div className="column">
                    <ul>
                        <li>
                            Deep understanding of JavaScript
                        </li>
                        <li>
                            Hungry and eager to learn
                        </li>
                        <li>
                            Ability to learn rapidly
                        </li>
                        <li>
                            Follow emerge technologies
                        </li>
                        
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default About;
