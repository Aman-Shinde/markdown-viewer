import React from 'react';
import Markdown from 'react-markdown';

const Previewer = ({ markdownContent }) => {
    return (
        <div className="previewer-container">
            <div className="previewer-header">
                <h5>Previewer</h5>
            </div>
            <div className="previewer-content">
                <Markdown>{markdownContent}</Markdown>
            </div>
        </div>
    );
};

export default Previewer;
