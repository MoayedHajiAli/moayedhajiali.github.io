import React from 'react'
import PropTypes from 'prop-types'
import TimeLine from './mytimeline'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
         <div className="logo">
            <span className="icon main-icon">
                <img href="assets/images/profile.png"></img>
            </span>
        </div>
        <nav>
        <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About Me</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('work')}}>Projects</a></li>
                {/*<li><a href="javascript:;" onClick={() => {props.onOpenArticle('about')}}>About</a></li>*/}
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
        <div className="content">
            <div className="inner">
                <h1>Moayed Haji Ali</h1>
                <p>Machine Learning Engineer, Computer Scince PhD student at Rice University </p>
            </div>
        </div>
        <a href='#timeline' class='transition_title' style={{}}>What I have been up to?</a>
        <div class='news_line' id='timeline'> <TimeLine  style={{}}/> </div>
        
       
        
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
