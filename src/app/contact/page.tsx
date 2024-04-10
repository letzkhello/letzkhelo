export default function ContactUs() {
  return (
    <>
      <div className="mx-4 sm:mx-auto">
        <div className="container my-24 mx-auto md:px-6 ">
          <section className="mb-32">
            <div className="flex flex-wrap">
              <div className="mb-10 w-full">
                <h2 className="mb-6 text-3xl font-bold ">
                  <span className="text-white">CONTACT US</span>
                </h2>
                <p className="mb-10 text-white">
                Thank you for your interest in contacting us. We&apos;re here to assist you and provide the information you need. Please find our contact details below:
                </p>
                <h4 className="text-white font-bold">Address</h4>
                <p className="mb-10 text-white ">
                Visit our office at the following location : 
                <span className="capitalize">B 226/5 street no.7 Ashok nagar shahdara, delhi-93</span>
                </p>
                <h4 className="text-white font-bold">Phone No</h4>
                <p className="mb-10 text-white"> You can speak with our team directly by calling : +91 8851840604</p>
                <h4 className="text-white font-bold">E-mail</h4>
                <p className="mb-2 text-white"> For inquiries or assistance, you can reach us via email at : letzkhello@gmail.com</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}


export function generateMetadata(){
  return{
    title:"Contacts",
    description:"For inquiries, support, or collaboration,get in touch with Letzkhelo. We’re here to assist you. Contact us today!",
    keywords:"Contact, Contact Information, Inquiry,Support, Collaboration, Get in Touch, Contact Us, Support Team, Contact Details.",
    robots:"index, follow",
    language:"EN",

  }
}
