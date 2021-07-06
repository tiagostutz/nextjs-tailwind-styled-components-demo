import tw from "tailwind-styled-components";

const H1Base = tw.h1`
    flex 
    justify-start 
    items-center 
    border-gray-200      
    text-blue-700 
    font-bold
`;

export const H1 = tw(H1Base)`
    text-3xl
    border-b 
`;

export const H1Mobile = tw(H1Base)`
    text-2xl
    justify-between
    border 
    border-gray-200 
    p-2
`;
