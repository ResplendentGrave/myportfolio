import React from 'react';
import './index.scss';

const SocialLinks = () => {
    return (
        <div className="social">
            <SocialLinks.Link
                url={'https://github.com/ResplendentGrave'}
                type={'github'}
            />
           
            <SocialLinks.Link
                url={'https://t.me/HUGUANGXIN'}
                type={'telegram'}
            />
            
        </div>
    );
};



SocialLinks.Link = ({url, type}) => <a href={url} target="_blank" ><span className={`fab fa-${type}`} /></a>;

export default SocialLinks;
