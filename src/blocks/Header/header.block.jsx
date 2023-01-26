import React from 'react';

const Header = ({ title, borderColor }) => {
    return (
        <div style = {{
            border: "1px solid " + borderColor
        }}>
            {title}
        </div>
    );
}

export default Header;