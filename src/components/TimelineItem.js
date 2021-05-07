import React from "react";

const TimelineItem = ({timelineData}) => (
    <div className="timeline-item">
        <div className="timeline-item-content">
            <span className="tag" style={{ background: timelineData.category.color}}>
                {timelineData.category.tag}
            </span>
            <time>{timelineData.date}</time>
            <p>{timelineData.text}</p>
            {timelineData.link && (<a href={timelineData.link.url}
                target="_blank"
                rel='noopener noreferrer'>
                {timelineData.link.text}
            </a>
            )}
            <span className="circle"></span>
        </div>
    </div>
);

export default TimelineItem;