import { FC, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card: FC<CardProps> = ({ children, className = "" }) => {
  return (
    <div className={`shadow-md bg-white ${className}`}>
      {children}
    </div>
  );
};

export default Card;