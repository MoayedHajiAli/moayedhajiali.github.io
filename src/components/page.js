import React from "React"


const Page = (props) => (

    <article className={`${props.article === props.page_name ? 'active' : ''} 
                ${props.articleTimeout ? 'timeout' : ''}`} 
                style={props.style}
                >
        {props.children}

        {
            props.close ? 
                <div className="close" onClick={() => {{props.onCloseArticle()}}}></div>
                :<></>
        }
        
        
    </article>
)

Page.defaultProps = {
    close: true,
  }

export default Page