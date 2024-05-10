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
                  Shipping Policy
                </h2>
                <h4 className="mb-4 font-bold text-black ">
                  Thank you for choosing Letzkhelo for your equipment needs! We
                  strive to provide you with the best shipping experience
                  possible. Please review our shipping policy below
                </h4>

                <h4 className="mb-2 font-bold text-black ">Shipping Times:</h4>

                <ul className="list-disc text-black mb-2">
                  <li className="mb-4">
                    {" "}
                    Orders are typically processed within 1-2 business days
                    after payment confirmation.
                  </li>
                  <li className="mb-4">
                    Standard shipping within India generally takes 5-7 business
                    days for delivery.
                  </li>
                  <li>
                    Please note that shipping times may vary depending on the
                    destination and any unforeseen circumstances such as weather
                    delays or public holidays.
                  </li>
                </ul>

                <h4 className="text-black-600 font-bold text-black mb-4">
                  Shipping Rates:
                </h4>
                <ul className="list-disc text-black mb-2">
                  <li className="mb-4">
                    Shipping rates are calculated based on the weight and
                    dimensions of your order, as well as the selected shipping
                    method.
                  </li>
                  <li className="mb-4">
                    We offer competitive shipping rates to provide you with the
                    best value for your money.
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
