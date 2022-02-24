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

        <Page page_name="work" article={this.props.article}  articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle}>
            <div >
                <h2 className="major">Projects</h2>
            </div>
            <Projects article={this.props.article}  articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle}/>
            
        </Page>
        

        <About article={this.props.article} articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle}/>

        <Page page_name="contact" article={this.props.article}  articleTimeout={this.props.articleTimeout} onCloseArticle={this.props.onCloseArticle}>
            <h2 className="major">Contact</h2>
            <p>
              feel free to use the contact form, email me directly at <a href="mailto:mali18@ku.edu.tr">mali18@ku.edu.tr</a>
            </p>
            <form method="post" action="#">
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
                <li><input type="submit" value="Send Message" className="special" /></li>
                <li><input type="reset" value="Reset" /></li>
                </ul>
            </form>
            <p> Please reach out if you have any research internship opportunities. You are also welcomed to reach out if you have any question or just want a simple chat.</p>
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