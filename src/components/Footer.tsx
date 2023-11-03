import Link from "next/link";
import Image from "next/image";
export default function Footer() {
  return (
    <>
      <footer
        className="footer p-10 bg-black
   mt-10"
      >
        <aside>
        <Link href="/" className="btn btn-ghost normal-case text-xl ">
          <Image
            src="/LetzKhelo.png"
            alt="logo"
            height={50}
            width={50}
            className="rounded-full" // Adjust the classes as needed
          />
        </Link>
          <p className="text-white">
            Let Z Khello Ltd.
            <br />
            <Link href="mailto:letzkhello@gmail.com">
              SEND MAIL TO-letzkhello@gmail.com<span></span>
            </Link>
          </p>
        </aside>
        <nav>
          <header className="footer-title text-white">Company</header>
          <Link href={"/about"} className="link link-hover text-white">
            About us
          </Link>
          <Link href={"/contact"} className="link link-hover text-white">
            Contact
          </Link>
          <Link href={"/ourTeam"} className="link link-hover text-white">
            Our Team
          </Link>
          <Link href={"/blog"} className="link link-hover text-white">
            Blogs Page
          </Link>
        </nav>
        <nav>
          <header className="footer-title text-white">Legal</header>
          <Link
            href={"/termandCondition"}
            className="link link-hover text-white"
          >
            Terms of use
          </Link>
          <Link href={"/privacyPolicy"} className="link link-hover text-white">
            Privacy policy
          </Link>
          <Link href={"/cookiesPolicy"} className="link link-hover text-white">
            Cookie policy
          </Link>
        </nav>
        <nav>
          <header className="footer-title text-white">Social</header>
          <div className="grid grid-flow-col gap-8 text-white ">
            <Link href="https://www.facebook.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current cursor-pointer transition-all duration-500  animate-waving-hand"
                style={{ animationDelay: "0.3s" }}
              >
                <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
              </svg>
            </Link>
            <Link href="https://www.youtube.com/@LetzKhelo" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current cursor-pointer transition-all duration-500 animate-waving-hand"
                style={{ animationDelay: "0.5s" }}
              >
                <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
              </svg>
            </Link>
            <Link href="https://www.instagram.com/letzkhelo" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 30 30"
                className="fill-current cursor-pointer transition-all duration-500 animate-waving-hand"
                style={{ animationDelay: "0.7s" }}
              >
                <circle cx="15" cy="15" r="4"></circle>
                <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z"></path>
              </svg>
            </Link>
{/* 
            <Link href="https://www.facebook.com/" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="fill-current cursor-pointer transition-all duration-500 animate-waving-hand"
                style={{ animationDelay: "0.7s" }}
              >
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link> */}
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="username@site.com"
              className="input input-bordered w-full pr-16"
            />
            <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
              Subscribe
            </button>
          </div>
        </nav>
      </footer>
    </>
  );
}
