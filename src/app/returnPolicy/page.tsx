import React from "react";
import Link from "next/link";
export default function Term_Condition() {
  return (
    <>
      <div className="mx-4 sm:mx-auto">
        <div className="container my-24 mx-auto md:px-6 ">
          <section className="mb-32">
            <div className="flex flex-wrap">
              <div className="mb-10 w-full">
                <h2 className="mb-4 text-3xl font-bold text-black ">
                  Return Policy
                </h2>
                <h4 className="mb-4 font-bold text-black ">
                  At Letzkhelo, customer satisfaction is our top priority. If
                  you are not entirely satisfied with your purchase, we are here
                  to help. Please review our return policy below:
                </h4>

                <h4 className="mb-2 font-bold text-black ">
                  Eligibility for Refunds:
                </h4>

                <ul className="list-disc text-black mb-2">
                  <li className="mb-4">
                    Items may be returned within 7 days of the purchase date.
                  </li>
                  <li>
                    Proof of purchase, such as a receipt or order confirmation,
                    is required for all returns.
                  </li>
                </ul>

                <h4 className="text-black-600 font-bold text-black mb-4">
                  Return Process:
                </h4>
                <ul className="list-disc text-black">
                  <li className="mb-4">
                    Contact our customer service team at letzkhello@gmail.com to
                    initiate the return process and obtain a Return Merchandise
                    Authorization (RMA) number.
                  </li>
                  <li className="mb-4">
                    Pack the item securely, including any accessories or
                    documentation, and clearly mark the RMA number on the
                    outside of the package.
                  </li>
                  <li className="mb-4">
                    Ship the item back to our designated return address using a
                    trackable shipping method. The customer is responsible for
                    return shipping costs.
                  </li>
                  <li className="mb-4">
                    Once we receive the returned item and verify its condition,
                    we will process the return and issue a refund or store
                    credit
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
