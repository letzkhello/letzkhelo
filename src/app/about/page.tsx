export default function AboutUs() {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <img src="https://i.imgur.com/WbQnbas.png" />
          </div>
        </div>
        <div className="sm:w-1/2 p-5">
          <div className="text">
            <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
              About us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              About <span className="text-indigo-600"> Letzkhelo</span>
            </h2>
            <p className="text-gray-700">
              Welcome to Letzkhelo, where sports enthusiasts unite to challenge,
              compete, and celebrate the spirit of athleticism!
              <br />
              At Letzkhelo, we believe that sports are more than just games;
              they're a way of life. Our platform was born out of a passion for
              sports and a desire to bring athletes and teams together like
              never before.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 flex">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                  />
                </svg>
              </div>
              <div className="mt-5">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Mission
                </h2>
                <p className="mt-2 mb-5 text-base text-gray-500">
                  Our mission is simple: to create a vibrant and inclusive
                  community for athletes of all levels. Whether you're a
                  seasoned pro or just starting your sporting journey, Letzkhelo
                  is the place where you can connect, compete, and grow.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
                />
              </svg>
            </div>
            <div className="mt-5">
              <h2 className="text-3xl font-extrabold text-gray-900">
                What we Offers
              </h2>
              <p className="mt-2 text-base text-gray-500  mb-5">
                Team and Player Registration: Register your team or yourself as
                an individual player and become part of our dynamic sports
                network. Showcase your skills, build your team, and connect with
                like-minded athletes. Challenge Mode: Challenge other teams or
                players to thrilling matches and test your skills in a
                competitive environment. From friendly scrimmages to intense
                showdowns, Letzkhelo is where the action happens. Weekly and
                Monthly Competitions: Join our exciting weekly and monthly
                competitions spanning a wide range of sports. Compete for glory,
                prizes, and the thrill of victory. Community and Support: We're
                more than just a platform; we're a community. Connect with
                fellow athletes, share your experiences, and find support and
                inspiration from others who share your passion.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <div className="mt-5">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Why Choose Letzkhelo?
              </h2>
              <p className="mt-2 text-base text-gray-500  mb-5">
                assion for Sports: We're sports enthusiasts, just like you. Our
                dedication to the world of athletics drives us to provide the
                best platform for athletes to shine. Fair Play: We value fair
                competition and sportsmanship above all. Letzkhelo is a place
                where everyone has a chance to succeed and enjoy sports to the
                fullest. Innovation: We're always evolving, introducing new
                features and improvements to enhance your experience on
                Letzkhelo. Join Letzkhelo today and embark on an exciting
                journey through the world of sports. Whether you're looking for
                competition, camaraderie, or a way to stay active, Letzkhelo is
                your home for all things sports. Let's play, compete, and
                conquer together!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
