import tw from "tailwind-styled-components";

export const TextSmall = tw.span`
    md:text-xs
    lg:text-sm
`;

export const TextSmallBold = tw(TextSmall)`
    font-bold
`;
