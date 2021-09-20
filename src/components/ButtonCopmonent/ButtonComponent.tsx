import React from "react";
import "./buttonComponent.css";

interface btnTypes {
  className?: string;
  label?: string;
}
const ButtonComponent: React.FC<btnTypes> = ({ label, className }) => {
  return (
    <div className={className}>
      <span>{label}</span>
    </div>
  );
};

export default ButtonComponent;
