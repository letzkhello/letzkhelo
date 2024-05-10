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
                  Terms and Conditions for Letzkhelo
                </h2>
                <h4 className="mb-4 font-bold text-black ">
                  Last updated: October 08, 2023
                </h4>
                <h4 className="mb-2 font-bold text-black ">Acceptance of Terms</h4>
                <p className="mb-6 text-black">
                  By using Letzkhelo, you agree to comply with and be bound by
                  these Terms and Conditions. If you do not agree with these
                  terms, please do not use our website.
                </p>
                <h4 className="text-black-600 font-bold text-black mb-4">Use of the Website</h4>
                <ul className="list-disc text-black">
                  <li className="mb-4">You must be at least 13 years old to use our website.</li>
                  <li className="mb-4">
                    You agree not to use the website for any unlawful or
                    prohibited purpose.
                  </li>
                  <li className="mb-4">
                    We reserve the right to modify, suspend, or terminate the
                    website or any part of it at any time without notice.
                  </li>
                </ul>

                <h4 className="text-black-600 font-bold text-black mb-4">
                  Intellectual Property
                </h4>
                <ul className="list-disc text-black">
                  <li className="mb-4">You must be at least 13 years old to use our website.</li>
                  <li className="mb-4">
                    All content on this website, including text, graphics,
                    logos, and images, is the property of Letzkhelo and is
                    protected by intellectual property laws.
                  </li>
                  <li className="mb-4">
                    You may not reproduce, distribute, or use our content
                    without our explicit permission.
                  </li>
                </ul>

                <h4 className="text-black-600 font-bold text-black mb-4">
                  User-Generated Content
                </h4>
                <ul className="list-disc text-black">
                  <li className="mb-4">
                    Users may submit content to our website, such as comments or
                    forum posts. By doing so, you grant us a non-exclusive,
                    worldwide, royalty-free license to use, reproduce, and
                    distribute your content.
                  </li>
                  <li className="mb-4">
                    We reserve the right to remove or edit user-generated
                    content that violates these Terms and Conditions or is
                    otherwise objectionable.
                  </li>
                </ul>
                <h4 className="text-black-600 font-bold text-black mb-4">Privacy</h4>
                <ul className="list-disc text-black">
                  <li className="mb-4">
                    Your use of the website is also governed by our Privacy
                    Policy, which you can find 
                     <Link className=" text-blue-500" href={"http://localhost:3000/privacyPolicy || https://www.letzkhelo.com/termandCondition"}> Privacy Policy</Link>.
                  </li>
                </ul>
                <h4 className="text-black-600 font-bold text-black mb-4">Disclaimer</h4>
                <ul className="list-disc text-black">
                  <li className="mb-4">
                    The information on our website is provided for general
                    informational purposes only. We do not guarantee the
                    accuracy, completeness, or timeliness of the content.
                  </li>
                  <li className="mb-4">
                    We are not responsible for any decisions you make based on
                    the information provided on our website.
                  </li>
                </ul>
                <h4 className="text-black-600 font-bold text-black mb-4">
                  Limitation of Liability
                </h4>
                <ul className="list-disc text-black">
                  <li className="mb-4">
                    We are not liable for any direct, indirect, incidental,
                    consequential, or punitive damages arising from your use of
                    our website.
                  </li>
                </ul>
                <h4 className="text-black-600 font-bold text-black mb-4">Indemnification</h4>
                <ul className="list-disc text-black">
                  <li className="mb-4">
                    You agree to indemnify and hold us harmless from any claims,
                    damages, or expenses arising from your use of the website or
                    your violation of these Terms and Conditions
                  </li>
                </ul>
                <h4 className="text-black-600 font-bold text-black mb-4">
                  Changes to Terms and Conditions
                </h4>
                <ul className="list-disc text-black">
                  <li className="mb-4">
                    We may update these Terms and Conditions from time to time.
                    Any changes will be posted on this page, and the &quot;Last
                    Updated&quot; date will be revised accordingly.
                  </li>
                </ul>
                <h4 className="text-black-600 font-bold text-black mb-4">Governing Law</h4>
                <ul className="list-disc text-black">
                  <li className="mb-4">
                    These Terms and Conditions are governed by and construed in
                    accordance with the laws of Indian Jurisdiction, without
                    regard to its conflict of law principles.
                  </li>
                </ul>
                <h4 className="mb-2 font-bold text-black">Contact Us</h4>
                <p className="mb-6 text-black">
                  If you have any questions about this Privacy Policy, You can
                  contact us:
                </p>
                <p className="mb-6 text-black">
                  By email: letzkhello@gmail.com
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}
