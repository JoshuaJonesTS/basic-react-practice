import React from 'react';

const Header = ({ title }) => {
    return (
        <div style = {{
            border: '1px solid red'
        }}>
            {title}
        </div>
    );
}

export default Header;