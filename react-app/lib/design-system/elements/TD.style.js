import tw from "tailwind-styled-components";

export const TD = tw.td`
    border-gray-200
    ${(props) => (props.border ? "border" : "")}
    ${(props) => (props.borderRight ? "border-r" : "")}
    ${(props) => (props.borderLeft ? "border-l" : "")}
    ${(props) => (props.borderTop ? "border-t" : "")}
    ${(props) => (props.borderBottom ? "border-b" : "")}
`;

export const TDTopAligned = tw(TD)`
    align-top     
`;

export const TDBottomAligned = tw(TD)`
    align-bottom 
`;

export const TDLined = tw(TD)`
    border-b
    ${(props) => (props.highlighted ? "bg-gray-100" : "")}
`;
