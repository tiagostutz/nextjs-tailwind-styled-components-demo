import tw from "tailwind-styled-components";

export const TD = tw.td`
    border-gray-200
`;

export const TDTopAligned = tw(TD)`
    align-top 
    border-r
`;

export const TDLined = tw(TD)`
    border-r
    border-b
    ${(props) => (props.highlighted ? "bg-gray-100" : "")}
`;
