
import Image from "next/image";

export default function AboutUs() {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center">
            <Image
              src="https://i.imgur.com/WbQnbas.png"
              alt="img"
              width="400"
              height="400"
            />
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
              they&apos;re a way of life. Our platform was born out of a passion
              for sports and a desire to bring athletes and teams together like
              never before.
            </p>
          </div>
        </div>
      </div>
      <section className="bg-gray-100 py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 flex">
            <div>
              <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"></div>
              <div className="mt-5">
                <h2 className="text-3xl font-extrabold text-gray-900">
                  Mission
                </h2>
                <p className="mt-2 mb-5 text-base text-gray-500">
                  Our mission is simple: to create a vibrant and inclusive
                  community for athletes of all levels. Whether you&apos;re a
                  seasoned pro or just starting your sporting journey, Letzkhelo
                  is the place where you can connect, compete, and grow.
                </p>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"></div>
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
                prizes, and the thrill of victory. Community and Support:
                We&apos;re more than just a platform; we&apos;re a community.
                Connect with fellow athletes, share your experiences, and find
                support and inspiration from others who share your passion.
              </p>
            </div>
          </div>
          <div>
            <div className="flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white"></div>
            <div className="mt-5">
              <h2 className="text-3xl font-extrabold text-gray-900">
                Why Choose Letzkhelo?
              </h2>
              <p className="mt-2 text-base text-gray-500  mb-5">
                assion for Sports: We&apos;re sports enthusiasts, just like you.
                Our dedication to the world of athletics drives us to provide
                the best platform for athletes to shine. Fair Play: We value
                fair competition and sportsmanship above all. Letzkhelo is a
                place where everyone has a chance to succeed and enjoy sports to
                the fullest. Innovation: We&apos;re always evolving, introducing
                new features and improvements to enhance your experience on
                Letzkhelo. Join Letzkhelo today and embark on an exciting
                journey through the world of sports. Whether you&apos;re looking
                for competition, camaraderie, or a way to stay active, Letzkhelo
                is your home for all things sports. Let&apos;s play, compete,
                and conquer together!
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
