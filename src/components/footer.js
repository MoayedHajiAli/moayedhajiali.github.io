import React from 'react'
import PropTypes from 'prop-types'

// Footer that contains only copywrite
const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">&copy; Moayed Haji Ali</p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
