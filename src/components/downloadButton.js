import React from 'react'

const DownloadButton = (props) => {
  console.log(props.children)
  if (props.blog) {
    return (
      <a href={props.href} target="_blank" rel="noreferrer" class = "buttonStyle button2">{props.children}</a>
    )
  } else {
    return (
      <a href={props.href} target="_blank" rel="noreferrer" class="buttonStyles button">{props.children}</a>
    )
  }
}

export default DownloadButton
