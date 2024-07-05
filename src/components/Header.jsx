import React from 'react';

const headerStyle = {
    position: 'sticky',
    top: 0,
    backgroundColor: '#282c34',
    padding: '10px 20px',
    width: '100%',
    zIndex: 1000,
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
};

const navBarStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
};

const buttonStyle = {
    backgroundColor: '#61dafb',
    color: '#282c34',
    border: 'none',
    padding: '10px 20px',
    fontSize: '16px',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease, transform 0.3s ease',
    margin: '0 10px',
};

const buttonHoverStyle = {
    backgroundColor: '#21a1f1',
    transform: 'scale(1.05)',
};

const Header = ({ setToHome, setToDocs }) => {
    const homeHandler = () => {
        setToHome(true);
        setToDocs(false);
    }

    const docsHandler = () => {
        setToHome(false);
        setToDocs(true);
    }

    return (
        <header style={headerStyle}>
            <nav style={navBarStyle}>
                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
                        e.currentTarget.style.transform = buttonHoverStyle.transform;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
                        e.currentTarget.style.transform = 'none';
                    }}
                    onClick={() => {
                        homeHandler();
                    }}
                >
                    Home
                </button>
                <button
                    style={buttonStyle}
                    onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = buttonHoverStyle.backgroundColor;
                        e.currentTarget.style.transform = buttonHoverStyle.transform;
                    }}
                    onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = buttonStyle.backgroundColor;
                        e.currentTarget.style.transform = 'none';
                    }}
                    onClick={() => {
                        docsHandler();
                    }}
                >
                    Docs
                </button>
            </nav>
        </header>
    );
};

export default Header;
