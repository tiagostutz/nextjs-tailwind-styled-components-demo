import tw from "tailwind-styled-components";

const H3Base = tw.h3`
    text-blue-600 
    font-bold
`;

export const H3 = tw(H3Base)`
    text-sm
`;

export const H3Mobile = tw(H3Base)``;
