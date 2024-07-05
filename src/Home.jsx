import React from 'react';
import Editor from './components/Editor';
import Previewer from './components/Previewer';

const Home = ({ markdownContent, setMarkdownContent, setShowPopup }) => {
    return (
        <>
        <h2 style={{ textAlign: 'center', marginBottom: '16px', marginTop: '16px' }}>MarkDown View</h2>
        <div className="home-container">
            
            <div className="home-content">
                <Editor
                    markdownContent={markdownContent}
                    setMarkdownContent={setMarkdownContent}
                    setShowPopup={setShowPopup}
                />
                <Previewer markdownContent={markdownContent} />
            </div>
        </div>
        </>
    );
};

export default Home;
