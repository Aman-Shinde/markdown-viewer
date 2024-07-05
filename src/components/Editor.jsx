import React, { useRef } from 'react';

const Editor = ({ markdownContent, setMarkdownContent, setShowPopup }) => {
    const textRef = useRef(null);

    const handleCopy = () => {
        if (textRef.current) {
            textRef.current.select();
            document.execCommand('copy');
            document.getSelection().removeAllRanges();
            setShowPopup(true);
            setTimeout(() => {
                setShowPopup(false);
            }, 2000);
        }
    };

    const handleClear = () => {
        setMarkdownContent('');
        textRef.current.focus();
    };

    return (
        <div className="editor-container">
            <div className="editor-header">
                <h5>Editor</h5>
                <button onClick={handleCopy} style={{cursor: "pointer", background: 'transparent', border: "none" }}><span class="material-symbols-outlined" style={{ color: "white" }}>
                    content_copy
                </span></button>
                <button onClick={handleClear} style={{cursor: "pointer", background: 'transparent', border: "none" }}><span class="material-symbols-outlined" style={{ color: "white" }}>
                    close
                </span></button>
            </div>
            <textarea
                ref={textRef}
                value={markdownContent}
                onChange={(e) => setMarkdownContent(e.target.value)}
                className="editor-textarea"
                placeholder="Enter Markdown here..."
            />
        </div>
    );
};

export default Editor;
