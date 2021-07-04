// import tw from "tailwind-styled-components";

// export const DivPadded = tw.div`
//     pt-8
//     px-4
//     text-left
// `;

// Currently no able to use styledComponents due to this:
// https://github.com/MathiasGilson/Tailwind-Styled-Component/issues/24

export const DivPadded = (props) => {
  const { className, children } = props;

  const styledClassName =
    "pt-8 px-4 text-left" + " " + (className ? className : "");
  return <div className={styledClassName}>{children}</div>;
};
