import Head from "next/head";
import {
  faArrowAltCircleDown,
  faCaretSquareDown,
  faTrashAlt,
} from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Content from "../../../../layout/content";
import Link from "next/link";

/**
 * This is a page that has the Product Comparision MOBILE page coded
 * in pure HTML/CSS using the Design System tokens.
 *
 * This page is just used for developmental purpose. The actual React components
 * will be identified and broken into isolated and reusable ones in its respective
 * structure in the project. Good part of the code here will be used in this process
 * of coding the React/Styled-Components Components
 *
 * This design gives a clear view of repetition of structures, spacing, semantic elements, etc
 * and can be done by someone that doesn't necessarily is a React dev, because it is a
 * pure HTML/CSS Design System work.
 *
 * @returns UXUICompare React component
 */
export default function UXUICompareMobile() {
  return (
    <>
      <Content>
        <div className="border-l-8 bg-red-200 border-red-600 text-black p-4 mb-10">
          This is just the UI/UX static spec study/chop for the{" "}
          <span className="font-bold mx-1">Mobile version.</span>
          For the actual React dynamic version,
          <Link href="/">
            <span className="underline text-blue-500 ml-1 cursor-pointer">
              go to the Home page
            </span>
          </Link>
        </div>

        {/* 
          Simulating this code as provided by a HTML/CSS Design System expert or even by a code generator 
          based on a given Design System. In this case, Tailwind is our Design System.
        */}
        <div className="max-w-sm">
          <h1 className="flex justify-between items-center mt-4 text-3xl text-blue-700 font-bold border border-gray-200 p-2">
            4 producten vergelijken
            <FontAwesomeIcon icon={faCaretSquareDown} width="24" />
          </h1>
          <ul className="p-2 border border-t-0 border-gray-200">
            <li className="my-3">
              <div className="flex flex-row items-baseline">
                <input id="product1" type="checkbox" className="mr-2" />
                <label htmlFor="product1" className="text-sm font-bold">
                  O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer Ø=2.62;
                  AS568- 102)
                </label>
              </div>
            </li>
            <li className="my-3">
              <div className="flex flex-row items-baseline">
                <input id="product2" type="checkbox" className="mr-2" />
                <label htmlFor="product2" className="text-sm font-bold">
                  O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.78 Snoer Ø=1.78;
                  AS568- 004)
                </label>
              </div>
            </li>
            <li className="my-3">
              <div className="flex flex-row items-baseline">
                <input id="product3" type="checkbox" className="mr-2" />
                <label htmlFor="product3" className="text-sm font-bold">
                  O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.06 Snoer Ø=2.62;
                  AS568- 103)
                </label>
              </div>
            </li>
            <li className="my-3">
              <div className="flex flex-row items-baseline">
                <input id="product4" type="checkbox" className="mr-2" />
                <label htmlFor="product4" className="text-sm font-bold">
                  O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.06 Snoer Ø=2.62;
                  AS568- 103)
                </label>
              </div>
            </li>
          </ul>

          {/*
           * We will build a more "mobile" mode experience using cards with slide.
           */}

          <ul className="hs full no-scrollbar">
            <li className="item">
              <div className="shadow-lg">
                {/* Basic Info */}
                <div className="pt-8 px-4 text-left">
                  <div className="mb-4 flex flex-row justify-end items-center">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      width={16}
                      className="text-blue-700"
                    />
                  </div>
                  <div>
                    <img src="https://eriksdigitalcdn.azureedge.net/shop/detail/hlr-system/maagtechnic/converted/preview/0100610a-2.jpg" />
                  </div>
                  <h3 className="my-5 text-sm">
                    <strong className="text-blue-600 font-bold">
                      O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer
                      Ø=2.62; AS568- 102)
                    </strong>
                  </h3>
                  <div className="pb-6 mb-2 border-b border-gray-200">
                    <div className="font-bold text-lg">299.95</div>
                    <div className="text-xs text-gray-400">
                      per stuk / excl btw
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="pb-4">
                    <div className="flex flex-row">
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/leto-awards/64/__award_badge-128.png"
                        width="32"
                      />
                      <img
                        src="https://images.vexels.com/media/users/3/194371/isolated/lists/0b2cd37cbce39a3ce3044f764e07f0f5-golden-eagle-badge-icon.png"
                        width="32"
                      />
                      <img
                        src="https://image.flaticon.com/icons/png/128/2532/2532447.png"
                        width="32"
                      />
                    </div>
                  </div>

                  {/*  */}
                  <ul>
                    <li className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        Materiaal
                      </div>
                      <div className="font-bold p-1 border-b border-gray-200">
                        CR
                      </div>
                    </li>
                    <li className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        Toepassing
                      </div>
                      <div className="font-bold p-1 border-b border-gray-200">
                        Voedsel en dranken
                      </div>
                    </li>
                    <li className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        Compound
                      </div>
                      <div className="font-bold p-1 border-b border-gray-200 bg-gray-100">
                        12906
                      </div>
                    </li>
                    <li className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        Maat volgens AS568
                      </div>
                      <div className="font-bold p-1 border-b border-gray-200">
                        103
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
            {/* COPY TO CHECK SCROLL WORKING */}
            <li className="item">
              <div className="shadow-lg">
                {/* Basic Info */}
                <div className="pt-8 px-4 text-left">
                  <div className="mb-4 flex flex-row justify-end items-center">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      width={16}
                      className="text-blue-700"
                    />
                  </div>
                  <div>
                    <img src="https://eriksdigitalcdn.azureedge.net/shop/detail/hlr-system/maagtechnic/converted/preview/0100610a-2.jpg" />
                  </div>
                  <h3 className="my-5 text-sm">
                    <strong className="text-blue-600 font-bold">
                      O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer
                      Ø=2.62; AS568- 102)
                    </strong>
                  </h3>
                  <div className="pb-6 mb-2 border-b border-gray-200">
                    <div className="font-bold text-lg">299.95</div>
                    <div className="text-xs text-gray-400">
                      per stuk / excl btw
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="pb-4">
                    <div className="flex flex-row">
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/leto-awards/64/__award_badge-128.png"
                        width="32"
                      />
                      <img
                        src="https://images.vexels.com/media/users/3/194371/isolated/lists/0b2cd37cbce39a3ce3044f764e07f0f5-golden-eagle-badge-icon.png"
                        width="32"
                      />
                      <img
                        src="https://image.flaticon.com/icons/png/128/2532/2532447.png"
                        width="32"
                      />
                    </div>
                  </div>

                  {/*  */}
                  <ul>
                    <li className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        Materiaal
                      </div>
                      <div className="font-bold p-1 border-b border-gray-200">
                        CR
                      </div>
                    </li>
                    <li className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        Toepassing
                      </div>
                      <div className="font-bold p-1 border-b border-gray-200">
                        Voedsel en dranken
                      </div>
                    </li>
                    <li className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        Compound
                      </div>
                      <div className="font-bold p-1 border-b border-gray-200 bg-gray-100">
                        33106
                      </div>
                    </li>
                    <li className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        Maat volgens AS568
                      </div>
                      <div className="font-bold p-1 border-b border-gray-200">
                        103
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="item">
              <div className="shadow-lg">
                {/* Basic Info */}
                <div className="pt-8 px-4 text-left">
                  <div className="mb-4 flex flex-row justify-end items-center">
                    <FontAwesomeIcon
                      icon={faTrashAlt}
                      width={16}
                      className="text-blue-700"
                    />
                  </div>
                  <div>
                    <img src="https://eriksdigitalcdn.azureedge.net/shop/detail/hlr-system/maagtechnic/converted/preview/0100610a-2.jpg" />
                  </div>
                  <h3 className="my-5 text-sm">
                    <strong className="text-blue-600 font-bold">
                      O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer
                      Ø=2.62; AS568- 102)
                    </strong>
                  </h3>
                  <div className="pb-6 mb-2 border-b border-gray-200">
                    <div className="font-bold text-lg">299.95</div>
                    <div className="text-xs text-gray-400">
                      per stuk / excl btw
                    </div>
                  </div>

                  {/* Badges */}
                  <div className="pb-4">
                    <div className="flex flex-row">
                      <img
                        src="https://cdn1.iconfinder.com/data/icons/leto-awards/64/__award_badge-128.png"
                        width="32"
                      />
                      <img
                        src="https://images.vexels.com/media/users/3/194371/isolated/lists/0b2cd37cbce39a3ce3044f764e07f0f5-golden-eagle-badge-icon.png"
                        width="32"
                      />
                      <img
                        src="https://image.flaticon.com/icons/png/128/2532/2532447.png"
                        width="32"
                      />
                    </div>
                  </div>

                  {/*  */}
                  <ul>
                    <li className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        Materiaal
                      </div>
                      <div className="font-bold p-1 border-b border-gray-200">
                        CR
                      </div>
                    </li>
                    <li className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        Toepassing
                      </div>
                      <div className="font-bold p-1 border-b border-gray-200">
                        Voedsel en dranken
                      </div>
                    </li>
                    <li className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        Compound
                      </div>
                      <div className="font-bold p-1 border-b border-gray-200 bg-gray-100">
                        401
                      </div>
                    </li>
                    <li className="text-center">
                      <div className="border-gray-100 text-sm mt-2">
                        Maat volgens AS568
                      </div>
                      <div className="font-bold p-1 border-b border-gray-200">
                        103
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </Content>

      {/* 
        This will be placed at the <head/> section of the page. 
        This is for SEO optimization
      */}
      <Head>
        <title>NextJS + Tailwind + Styled Components - UX/UI Spec Demo</title>
        <meta
          name="title"
          content="NextJS + Tailwind + Styled Components - UX/UI Spec Demo"
        />
        <meta
          name="description"
          content="Page with the UX/UI spec for Products feature and price comparison using NextJS + TailwindCSS + StyledComponents"
        />
        <meta
          name="keywords"
          content="product, comparison, react, nextjs, styled-components, tailwindcss, ux, ui"
        />
      </Head>
    </>
  );
}
