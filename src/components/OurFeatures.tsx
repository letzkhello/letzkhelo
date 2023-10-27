import React from "react";
import Image from "next/image";

interface ServiceCardProps {
  title: string;
  details: string;
  image: string; // Define the type for the image prop
}
const Service = () => {
  return (
    <section className="pt-20 pb-12 lg:pt-[120px] lg:pb-[90px]">
      <div className="w-full">
        <div className="flex flex-wrap ">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[510px] text-center lg:mb-20 animate-bounce">
              <span className="block mb-2 text-lg font-semibold text-orange-200">
                Our Services
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-4xl md:text-[40px] animate-bounce  text-orange-200">
                What We Offer
              </h2>
              <p className="text-base text-body-color animate-bounce text-white">
                At LetzKhelo, we are passionate about sports and offer a wide
                range of exciting activities. Explore the sports we provide
                below.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap ">
          <ServiceCard
            title="Cricket"
            details="Experience the thrill of the gentleman's game. Join us for
            intense cricket matches, coaching, and more. Whether you're a
            seasoned pro or just starting, our cricket offerings will keep
            you engaged."
            image=" cricket.jpg"
          />
          <ServiceCard
            title="Arm Wrestling"
            details="Think you have the strength to compete? Test your arm-wrestling
            skills at LetzKhelo. We host arm wrestling competitions and offer
            training for those looking to improve their technique."
            image="arms.jpeg"
          />
          <ServiceCard
            title="Badminton"
            details="Badminton is not just a casual backyard game. It's a fast-paced
            sport that requires agility and precision. Join our badminton
            club, whether you're a beginner or an advanced player."
            image="/badminton.jpg"
          />
          <ServiceCard
            title="Kabbadi"
            details="Kabaddi is a sport that demands both strategy and physical
            prowess. Join our kabaddi events and learn from experienced
            players. Challenge yourself and be part of the kabaddi
            excitement."
            image="/kabbadi.jpg"
          />
        </div>
      </div>
    </section>
  );
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, details, image }) => {
  return (
    <div className="w-full md:w-1/2 lg:w-1/4 px-4 mb-8 animate-pulse">
      <div className="px-6 py-8 bg-white rounded-xl text-center">
        <img src={image} alt={title} className="w-32 h-32 mx-auto mb-4" />
        <h3 className="mb-2 text-lg font-semibold text-dark">{title}</h3>
        <p className="text-sm text-body-color">{details}</p>
      </div>
    </div>
  );
};

export default Service;
