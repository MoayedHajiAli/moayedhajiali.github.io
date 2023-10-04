import React from 'react'
import PropTypes from 'prop-types'
import Page from "./page"
import About from "./about"
import Social from './social'
import Projects from "./projects"


class Main extends React.Component {
  render() {


    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <Page id="#work" page_name="work" article={this.props.article}  articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle}>
            <div >
                <h2 className="major">Projects</h2>
            </div>
            <Projects  onOpenArticle={this.props.onOpenArticle} article={this.props.article}  articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle}/>
            
        </Page>
        

        <About article={this.props.article} articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle}/>

        <Page class="contact" page_name="contact" article={this.props.article}  articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle}>
            <h2 className="major">Contact</h2>
            <p  style={{'line-hight':'1rem', 'margin-bottom':'0rem'}}> Please reach out if you have reasrch internship opportunities, or just want a simple chat.</p>
            <p style={{'margin-bottom':'2.5rem'}}>
              Feel free to contact me via the form below or at <a href="mailto:mh155@rice.edu">mh155@rice.edu</a>
            </p>
            <form target="transFrame" method="post" action='https://formspree.io/f/mgedkjno'>
                <div className="field half first">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" id="name" />
                </div>
                <div className="field half">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
                </div>
                <div className="field">
                <label htmlFor="message">Message</label>
                <textarea name="message" id="message" rows="4"></textarea>
                </div>
                <ul className="actions">
                <li><input type="submit" value="Send Message" className="special"/></li>
                <li><input type="reset" value="Reset" /></li>
                </ul>
            </form>
            <Social/>
        </Page>

        

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main