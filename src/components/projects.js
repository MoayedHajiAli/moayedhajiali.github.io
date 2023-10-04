import React from 'react';
import Cell from './cell';
import {projects} from '../assets/config/text';
import Page from './page'


const Projects = (props) => (
  <div class="active" id="projects" >
    <div close={false} page_name="work" 
          article={props.article}  
          articleTimeout={props.articleTimeout} 
          onCloseArticle={props.onCloseArticle}
          style={{"padding-top":"1rem"}}>
      {projects.map((project) => (
        <Cell
          data={project}
          key={project.title}
          article={props.article}
          articleTimeout={props.articleTimeout}
          onCloseArticle={props.onCloseArticle}
        />
      ))}
    
    </div>
    
  </div>

  
);

export default Projects;