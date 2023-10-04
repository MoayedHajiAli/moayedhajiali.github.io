import React from 'react';
import PropTypes from 'prop-types';
import dayjs from 'dayjs';
import Page from './page'
const Cell = (props) => (
  <div className="cell-container active mini-post">
    <Page close={false} page_name="work" article={props.article}  articleTimeout={props.articleTimeout} onCloseArticle={props.onCloseArticle}
      style={{"padding-top":"1rem", "padding-left":"0rem"}}
      >
      <header>
        <h3>
          <a style={{"text-transform": "none"}} href={props.data.link}>{props.data.title}</a>
          </h3>
        <time className="published">{props.data.date}</time>
        <h4 style={{"display":"inline-block", "float":"left", "font-size":"1.1rem"}}>
          RELEVANT KEYWORDS: &nbsp;
        </h4>
        {
          props.data.relevantSkills.map(item =>
            <p class="skill">{item}</p>
            )
        }
        
      </header>
      <a href={props.data.link} className='image'>
        <img className={props.data.center ? 'center' : ''} src={props.data.image} alt={props.data.title} />
      </a>
      <div className="description">
        <p>
        <div className="Container" dangerouslySetInnerHTML={{__html: props.data.desc}}></div>
        </p>
      </div>
    </Page>

    
  </div>
);

// Cell.propTypes = {
//   data: PropTypes.shape({
//     title: PropTypes.string.isRequired,
//     link: PropTypes.string,
//     image: PropTypes.string.isRequired,
//     date: PropTypes.string.isRequired,
//     desc: PropTypes.string.isRequired,
//   }).isRequired,
// };

export default Cell;