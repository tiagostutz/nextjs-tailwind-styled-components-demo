import tw from "tailwind-styled-components";

const TDBase = tw.td`
    border-gray-200
`;

export const TD = tw(
  ({ border, borderLeft, borderTop, borderRight, borderBottom, ...props }) => (
    <TDBase {...props} />
  )
)`
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
