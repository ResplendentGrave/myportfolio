import React from 'react';
import './index.scss';

class TypedText extends React.Component {

    state = {
        text: 'front engineer',

    }

    render() {
        return (
            <>
                <span className="typed-text">{ this.state.text }</span>
            </>
        );
    }
}

export default TypedText;
