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
          <h1 className="flex justify-start items-center mt-4 text-3xl border-b border-gray-200 pb-6">
            4 producten vergelijken
          </h1>

          {/* 
              As the provided Design Spec presents the data in a very "tabular way" and to have a more direct IE11 compatibility, 
              the use of <table/> is a good choice to have this working properly
            */}
          <table className="table-auto w-full">
            <thead>
              <tr>
                <th className="px-4 text-left border-r border-gray-200">
                  <h2 className="text-lg text-blue-700 font-bold">
                    Je selectie
                  </h2>
                </th>
                <th className="px-4">
                  <div className="flex justify-end items-center">
                    <FontAwesomeIcon icon={faTrashAlt} width={16} />
                  </div>
                </th>
                <th className="px-4">
                  <div className="flex justify-end items-center">
                    <FontAwesomeIcon icon={faTrashAlt} width={16} />
                  </div>
                </th>
                <th className="px-4">
                  <div className="flex justify-end items-center">
                    <FontAwesomeIcon icon={faTrashAlt} width={16} />
                  </div>
                </th>
                <th className="px-4">
                  <div className="flex justify-end items-center">
                    <FontAwesomeIcon icon={faTrashAlt} width={16} />
                  </div>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="px-4 border-r border-gray-200">
                  <ul>
                    <li>
                      <input type="checkbox" className="mr-2" />
                      <strong>
                        O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer
                        Ø=2.62; AS568- 102)
                      </strong>
                    </li>
                    <li>
                      <input type="checkbox" className="mr-2" />
                      <strong>
                        O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.78 Snoer
                        Ø=1.78; AS568- 004)
                      </strong>
                    </li>
                    <li>
                      <input type="checkbox" className="mr-2" />
                      <strong>
                        O-ring EPDM 70 shore - Voedsel (Binnen Ø=2.9 Snoer
                        Ø=1.78; AS568- 006)
                      </strong>
                    </li>
                  </ul>
                </td>
                <td className="px-4 text-left">
                  <div>
                    <img src="https://eriksdigitalcdn.azureedge.net/shop/detail/hlr-system/maagtechnic/converted/preview/0100610a-2.jpg" />
                  </div>
                  <h3>
                    <strong className="text-blue-700 font-bold">
                      O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer
                      Ø=2.62; AS568- 102)
                    </strong>
                  </h3>
                </td>
                <td className="px-4 text-left">
                  <div>
                    <img src="https://eriksdigitalcdn.azureedge.net/shop/detail/hlr-system/maagtechnic/converted/preview/0100610a-2.jpg" />
                  </div>
                  <h3>
                    <strong className="text-blue-700  font-bold">
                      O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer
                      Ø=2.62; AS568- 102)
                    </strong>
                  </h3>
                </td>
                <td className="px-4 text-left">
                  <div>
                    <img src="https://eriksdigitalcdn.azureedge.net/shop/detail/hlr-system/maagtechnic/converted/preview/0100610a-2.jpg" />
                  </div>
                  <h3>
                    <strong className="text-blue-700  font-bold">
                      O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer
                      Ø=2.62; AS568- 102)
                    </strong>
                  </h3>
                </td>
                <td className="px-4 text-left">
                  <div>
                    <img src="https://eriksdigitalcdn.azureedge.net/shop/detail/hlr-system/maagtechnic/converted/preview/0100610a-2.jpg" />
                  </div>
                  <h3>
                    <strong className="text-blue-700  font-bold">
                      O-ring EPDM 70 shore - Voedsel (Binnen Ø=1.25 Snoer
                      Ø=2.62; AS568- 102)
                    </strong>
                  </h3>
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
