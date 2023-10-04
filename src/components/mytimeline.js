import React from 'react'
import { Timeline}  from './timeline'
import { TimelineItem}  from './timelineitem'
import { news } from '../assets/config/text'

const TimeLine = (props) => {
  return (
    <div style={props.style}>
      <Timeline>
        {
            news.map(item =>
                <TimelineItem
                    dateText={item.date}
                    dateStyle = {{width:'50%'}}
                    >
                    <h3 style={{'font-size':'1.2rem', 'text-transform':'none'}}>{item.title}</h3>
                    <ul style={{'font-size':'1.1rem'}}>
                        <div dangerouslySetInnerHTML={{__html: item.description}}></div>
                    </ul>
                    </TimelineItem>
                )
        }
      </Timeline>
    </div>
  )
}

export default TimeLine