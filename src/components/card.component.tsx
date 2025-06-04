import React from "react";
import { twMerge } from "tailwind-merge";

interface CardProps {
    title?: string;
    containerClassName?: string; // Customização do container externo
    contentClassName?: string;   // Customização da área de children
    children: React.ReactNode;
}

const Card = ({ children, title, containerClassName, contentClassName }: CardProps) => {
    return (
        <div className={twMerge("flex flex-col bg-white p-6 rounded shadow-md w-full max-w-sm", containerClassName)}>
            {title && (
                <h3 className="text-lg font-semibold text-left text-gray-600 mb-2">
                    {title}
                </h3>
            )}
            <div className={twMerge("w-full", contentClassName)}>
                {children}
            </div>
        </div>
    );
};

export default Card;
