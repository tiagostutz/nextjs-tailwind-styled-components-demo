import Head from "next/head";
import { faLightbulb, faTrashAlt } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Content from "../../../../layout/content";
import Link from "next/link";

/**
 * This is a page that has the Product Comparision DESKTOP page coded
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
export default function UXUICompareDesktop() {
  return (
    <>
      <Content>
        <div className="border-l-8 bg-red-200 border-red-600 text-black p-4 mb-10 flex flex-row">
          <FontAwesomeIcon icon={faLightbulb} width="16" className="mr-2" />{" "}
          This is just the UI/UX static spec study/chop for the{" "}
          <span className="font-bold mx-1">Desktop version.</span>
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

        <h1 className="flex justify-start items-center mt-4 pb-6 border-b border-gray-200 text-3xl text-blue-700 font-bold">
          4 producten vergelijken
        </h1>

        {/* 
          As the provided Design Spec presents the data in a very "tabular way" and to have a more direct IE11 compatibility, 
          the use of <table/> is a good choice to have this working properly as IE11 has some issues when using flex.
          That's a reason also for not using a Grid System here, because we have few elements Grid positioned. The main
          content here is tabular positioned.
        */}
        <table className="table-fixed w-full">
          <tbody>
            <tr>
              <td className="align-top border-r border-gray-200">
                <div className="pt-8 pr-4">
                  <ul>
                    <li>
                      <h2 className="mb-2 text-lg text-blue-700 font-bold">
                        Je selectie
                      </h2>
                    </li>
                    <li className="my-3">
                      <div className="flex flex-row items-baseline">
                        <input id="product1" type="checkbox" className="mr-2" />
                        <label htmlFor="product1" className="text-sm font-bold">
                          O-ring EPDM 70 shore - Voedsel (Binnen ??=1.25 Snoer
                          ??=2.62; AS568- 102)
                        </label>
                      </div>
                    </li>
                    <li className="my-3">
                      <div className="flex flex-row items-baseline">
                        <input id="product2" type="checkbox" className="mr-2" />
                        <label htmlFor="product2" className="text-sm font-bold">
                          O-ring EPDM 70 shore - Voedsel (Binnen ??=1.78 Snoer
                          ??=1.78; AS568- 004)
                        </label>
                      </div>
                    </li>
                    <li className="my-3">
                      <div className="flex flex-row items-baseline">
                        <input id="product3" type="checkbox" className="mr-2" />
                        <label htmlFor="product3" className="text-sm font-bold">
                          O-ring EPDM 70 shore - Voedsel (Binnen ??=2.06 Snoer
                          ??=2.62; AS568- 103)
                        </label>
                      </div>
                    </li>
                    <li className="my-3">
                      <div className="flex flex-row items-baseline">
                        <input id="product4" type="checkbox" className="mr-2" />
                        <label htmlFor="product4" className="text-sm font-bold">
                          O-ring EPDM 70 shore - Voedsel (Binnen ??=2.06 Snoer
                          ??=2.62; AS568- 103)
                        </label>
                      </div>
                    </li>
                  </ul>
                </div>
              </td>
              <td>
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
                      O-ring EPDM 70 shore - Voedsel (Binnen ??=1.25 Snoer
                      ??=2.62; AS568- 102)
                    </strong>
                  </h3>
                  <div className="pb-6 mb-8 border-b border-gray-200">
                    <div className="font-bold text-lg">299.95</div>
                    <div className="text-xs text-gray-400">
                      per stuk / excl btw
                    </div>
                  </div>
                </div>
              </td>
              <td>
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
                      O-ring EPDM 70 shore - Voedsel (Binnen ??=1.25 Snoer
                      ??=2.62; AS568- 102)
                    </strong>
                  </h3>
                  <div className="pb-6 mb-8 border-b border-gray-200">
                    <div className="font-bold text-lg">299.95</div>
                    <div className="text-xs text-gray-400">
                      per stuk / excl btw
                    </div>
                  </div>
                </div>
              </td>
              <td>
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
                      O-ring EPDM 70 shore - Voedsel (Binnen ??=1.25 Snoer
                      ??=2.62; AS568- 102)
                    </strong>
                  </h3>
                  <div className="pb-6 mb-8 border-b border-gray-200">
                    <div className="font-bold text-lg">299.95</div>
                    <div className="text-xs text-gray-400">
                      per stuk / excl btw
                    </div>
                  </div>
                </div>
              </td>
              <td>
                <div className="pt-8 px-4 text-left"></div>
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
                    O-ring EPDM 70 shore - Voedsel (Binnen ??=1.25 Snoer ??=2.62;
                    AS568- 102)
                  </strong>
                </h3>
                <div className="pb-6 mb-8 border-b border-gray-200">
                  <div className="font-bold text-lg">299.95</div>
                  <div className="text-xs text-gray-400">
                    per stuk / excl btw
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td className="border-r border-b p-2  border-gray-200">
                <span className="text-sm">Keurmerk</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
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
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
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
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
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
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
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
              </td>
            </tr>
            <tr>
              <td className="border-r border-b p-2 border-gray-200">
                <span className="text-sm">Materiaal</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
                <span className="text-xs font-bold">CR</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
                <span className="text-xs font-bold">CR</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
                <span className="text-xs font-bold">CR</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
                <span className="text-xs font-bold">CR</span>
              </td>
            </tr>
            <tr>
              <td className="border-r border-b p-2 border-gray-200">
                <span className="text-sm">Toepassing</span>
              </td>
              <td className="border-b  p-2 border-gray-200 text-left">
                <span className="text-xs font-bold">Voedsel en dranken</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
                <span className="text-xs font-bold">Voedsel en dranken</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
                <span className="text-xs font-bold">Voedsel en dranken</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
                <span className="text-xs font-bold">Voedsel en dranken</span>
              </td>
            </tr>
            <tr>
              <td className="border-r border-b p-2 border-gray-200 bg-gray-200">
                <span className="text-sm">Compound</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left bg-gray-200">
                <span className="text-xs font-bold">12906</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left bg-gray-200">
                <span className="text-xs font-bold">1246</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left bg-gray-200">
                <span className="text-xs font-bold">16</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left bg-gray-200">
                <span className="text-xs font-bold">1006</span>
              </td>
            </tr>
            <tr>
              <td className="border-r border-b p-2 border-gray-200">
                <span className="text-sm">Maat volgens AS568</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
                <span className="text-xs font-bold">103</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
                <span className="text-xs font-bold">103</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
                <span className="text-xs font-bold">103</span>
              </td>
              <td className="border-b p-2 border-gray-200 text-left">
                <span className="text-xs font-bold">103</span>
              </td>
            </tr>
          </tbody>
        </table>

        {/*  */}
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
