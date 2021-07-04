import Head from "next/head";
import { faTrashAlt } from "@fortawesome/fontawesome-free-regular";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Layout from "../../components/layout";

export default function UXUICompare() {
  return (
    <>
      <Layout>
        {/* 
          Simulating this code as provided by a HTML/CSS Design System expert or even by a code generator 
          based on a given Design System. In this case, Tailwind is our Design System.
        */}

        <main className="container mx-auto max-w-screen-lg pt-8">
          <h1 className="flex justify-start items-center mt-4 border-b border-gray-200 pb-6 text-3xl text-blue-700 font-bold">
            4 producten vergelijken
          </h1>

          {/* 
              As the provided Design Spec presents the data in a very "tabular way" and to have a more direct IE11 compatibility, 
              the use of <table/> is a good choice to have this working properly
            */}
          <table>
            <tbody>
              <tr>
                <td className="pt-8 align-top pr-4 border-r border-gray-200">
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
                          O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer
                          Ø=2.62; AS568- 102)
                        </label>
                      </div>
                    </li>
                    <li className="my-3">
                      <div className="flex flex-row items-baseline">
                        <input id="product2" type="checkbox" className="mr-2" />
                        <label htmlFor="product2" className="text-sm font-bold">
                          O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.78 Snoer
                          Ø=1.78; AS568- 004)
                        </label>
                      </div>
                    </li>
                    <li className="my-3">
                      <div className="flex flex-row items-baseline">
                        <input id="product3" type="checkbox" className="mr-2" />
                        <label htmlFor="product3" className="text-sm font-bold">
                          O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.06 Snoer
                          Ø=2.62; AS568- 103)
                        </label>
                      </div>
                    </li>
                    <li className="my-3">
                      <div className="flex flex-row items-baseline">
                        <input id="product4" type="checkbox" className="mr-2" />
                        <label htmlFor="product4" className="text-sm font-bold">
                          O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.06 Snoer
                          Ø=2.62; AS568- 103)
                        </label>
                      </div>
                    </li>
                  </ul>
                </td>
                <td className="pt-8 px-4 text-left">
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
                  <div className="pb-6 mb-8 border-b border-gray-200">
                    <div className="font-bold text-lg">299.95</div>
                    <div className="text-xs text-gray-400">
                      per stuk / excl btw
                    </div>
                  </div>
                </td>
                <td className="pt-8 px-4 text-left">
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
                  <div className="pb-6 mb-8 border-b border-gray-200">
                    <div className="font-bold text-lg">299.95</div>
                    <div className="text-xs text-gray-400">
                      per stuk / excl btw
                    </div>
                  </div>
                </td>
                <td className="pt-8 px-4 text-left">
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
                  <div className="pb-6 mb-8 border-b border-gray-200">
                    <div className="font-bold text-lg">299.95</div>
                    <div className="text-xs text-gray-400">
                      per stuk / excl btw
                    </div>
                  </div>
                </td>
                <td className="pt-8 px-4 text-left">
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
                  <div className="pb-6 mb-8 border-b border-gray-200">
                    <div className="font-bold text-lg">299.95</div>
                    <div className="text-xs text-gray-400">
                      per stuk / excl btw
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-xs border-r border-b p-2  border-gray-200">
                  Keurmerk
                </td>
                <td className="text-xs border-b p-2 border-gray-200 text-left">
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
                <td className="text-xs border-b p-2 border-gray-200 text-left">
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
                <td className="text-xs border-b p-2 border-gray-200 text-left">
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
                <td className="text-xs border-b p-2 border-gray-200 text-left">
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
                <td className="text-xs border-r border-b p-2 border-gray-200">
                  Materiaal
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left">
                  CR
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left">
                  CR
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left">
                  CR
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left">
                  CR
                </td>
              </tr>
              <tr>
                <td className="text-xs border-r border-b p-2 border-gray-200">
                  Toepassing
                </td>
                <td className="text-xs font-bold border-b  p-2 border-gray-200 text-left">
                  Voedsel en dranken
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left">
                  Voedsel en dranken
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left">
                  Voedsel en dranken
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left">
                  Voedsel en dranken
                </td>
              </tr>
              <tr>
                <td className="text-xs border-r border-b p-2 border-gray-200 bg-gray-200">
                  Compound
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left bg-gray-200">
                  12906
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left bg-gray-200">
                  1246
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left bg-gray-200">
                  16
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left bg-gray-200">
                  1006
                </td>
              </tr>
              <tr>
                <td className="text-xs border-r border-b p-2 border-gray-200">
                  Maat volgens AS568
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left">
                  103
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left">
                  103
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left">
                  103
                </td>
                <td className="text-xs font-bold border-b p-2 border-gray-200 text-left">
                  103
                </td>
              </tr>
            </tbody>
          </table>
        </main>

        {/*  */}
      </Layout>

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
