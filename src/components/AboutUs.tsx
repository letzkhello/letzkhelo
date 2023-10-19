"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <>
      <div className="sm:flex items-center max-w-screen-xl">
        <div className="sm:w-1/2 p-10">
          <div className="image object-center text-center transition-all duration-500 hover:invert animate-waving-hand">
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
            <span className="text-white border-b-2 border-white uppercase">
              About Us
            </span>
            <h2 className="my-4 font-bold text-3xl  sm:text-4xl ">
              <div className="flex">
                <motion.div
                  initial={{ opacity: 0, x: "-100vh" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                >
                  {/* <span>ABOUT</span> */}
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, x: "100vh" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                >
                  <span className="text-white"> LETZKHELO</span>
                </motion.div>
              </div>
            </h2>
            <p className="text-white">
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
      <section className="bg-[#c52f2f] py-16">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mt-12 flex">
            <div>
              <div className="mt-5">
                <motion.div
                  initial={{ opacity: 0, x: "-100vh" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ type: "spring", bounce: 0.6 }}
                >
                  <h2 className="text-3xl font-extrabold text-white">
                    Mission
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: "-100vh" }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 1 }}
                >
                  <p className="mt-2 mb-5 text-base text-white">
                    Our mission is simple: to create a vibrant and inclusive
                    community for athletes of all levels. Whether you&apos;re a
                    seasoned pro or just starting your sporting journey,
                    Letzkhelo is the place where you can connect, compete, and
                    grow.
                  </p>
                </motion.div>
              </div>
            </div>
          </div>

          <div>
            <div className="mt-5">
              <motion.div
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", bounce: 0.6 }}
              >
                <h2 className="text-3xl font-extrabold text-white">
                  What we Offers
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <p className="mt-2 text-base text-white  mb-5">
                  Team and Player Registration: Register your team or yourself
                  as an individual player and become part of our dynamic sports
                  network. Showcase your skills, build your team, and connect
                  with like-minded athletes. Challenge Mode: Challenge other
                  teams or players to thrilling matches and test your skills in
                  a competitive environment. From friendly scrimmages to intense
                  showdowns, Letzkhelo is where the action happens. Weekly and
                  Monthly Competitions: Join our exciting weekly and monthly
                  competitions spanning a wide range of sports. Compete for
                  glory, prizes, and the thrill of victory. Community and
                  Support: We&apos;re more than just a platform; we&apos;re a
                  community. Connect with fellow athletes, share your
                  experiences, and find support and inspiration from others who
                  share your passion.
                </p>
              </motion.div>
            </div>
          </div>
          <div>
            <div className="mt-5">
              <motion.div
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ type: "spring", bounce: 0.6 }}
              >
                <h2 className="text-3xl font-extrabold text-white">
                  Why Choose Letzkhelo?
                </h2>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: "-100vh" }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
              >
                <p className="mt-2 text-base text-white mb-5">
                  Passion for Sports: We&apos;re sports enthusiasts, just like
                  you. Our dedication to the world of athletics drives us to
                  provide the best platform for athletes to shine. Fair Play: We
                  value fair competition and sportsmanship above all. Letzkhelo
                  is a place where everyone has a chance to succeed and enjoy
                  sports to the fullest. Innovation: We&apos;re always evolving,
                  introducing new features and improvements to enhance your
                  experience on Letzkhelo. Join Letzkhelo today and embark on an
                  exciting journey through the world of sports. Whether
                  you&apos;re looking for competition, camaraderie, or a way to
                  stay active, Letzkhelo is your home for all things sports.
                  Let&apos;s play, compete, and conquer together!
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}





