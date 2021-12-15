import React from "react";
import "./topicIcon.scss";
interface TopicType {
  className?: string;
  icon?: React.SVGProps<SVGSVGElement>;
  text?: string;
  topic: string;
}
const TopicIcon: React.FC<TopicType> = ({ className, icon, text, topic }) => {
  return (
    <div className={className}>
      {icon}
      <h3>{text}</h3>
      <span>{topic}</span>
    </div>
  );
};

export default TopicIcon;
