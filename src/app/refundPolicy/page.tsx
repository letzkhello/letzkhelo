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
                <h2 className="mb-4 text-3xl font-bold text-white ">
                Refund Policy
                </h2>
                <h4 className="mb-4 font-bold text-white ">
                At Letzkhelo, customer satisfaction is our top priority. If you are not entirely satisfied with your purchase, we are here to help. Please review our refund policy below:


                </h4>
              
                <h4 className="mb-2 font-bold text-white ">Eligibility for Refunds:</h4>
             
                <ul className="list-disc text-white">
                  <li className="mb-4">  To be eligible for a refund, your item must be unused and in the same condition that you received it. It must also be in the original packaging.</li>
                  <li className="mb-4">
                  You must request a refund within 7 days of the original purchase date.

                  </li>
                </ul>

                <h4 className="text-black-600 font-bold text-white mb-4">
                Refund Process:

                </h4>
                <ul className="list-disc text-white">
                  <li className="mb-4">Once your return is received and inspected, we will send you an email to notify you that we have received your returned item. We will also notify you of the approval or rejection of your refund.</li>
                  <li className="mb-4">
                  if your refund is approved, it will be processed, and a credit will automatically be applied to your original method of payment within 7 days</li>
                  <li className="mb-4">
                    You may not reproduce, distribute, or use our content
                    without our explicit permission.
                  </li>
                </ul>

                <h4 className="text-black-600 font-bold text-white mb-4">
                Damaged or Defective Items:

                </h4>
                <ul className="list-disc text-white">
                  <li className="mb-4">
                  If you receive a damaged or defective item, please contact us immediately for assistance. We will work with you to resolve the issue promptly.


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
