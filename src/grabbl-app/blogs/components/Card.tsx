import React from "react";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className }) => {
  return (
    <div className={`rounded-lg shadow-md bg-white border-2 border-black ${className || ""}`}>
      {children}
    </div>
  );
};

export default Card;