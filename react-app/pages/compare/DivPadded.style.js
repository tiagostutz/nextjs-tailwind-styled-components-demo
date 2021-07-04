import tw from "tailwind-styled-components";

export const DivPadded = tw.div`
    pt-8
    px-4
    text-left
`;

// If want to have a className override option, will have to wait for this
// https://github.com/MathiasGilson/Tailwind-Styled-Component/issues/24

// export const DivPadded = (props) => {
//   const { className, children } = props;

//   const styledClassName =
//     "pt-8 px-4 text-left" + " " + (className ? className : "");
//   return <div className={styledClassName}>{children}</div>;
// };
