import { Typography } from '@/components';
import { MotionDiv } from '@/components/motion-div/motion-div';
import { paymePng } from '@/mock';

import Image from 'next/image';

export const OurLocations = () => {
  return (
    <section className="container mx-auto py-16 flex flex-col md:flex-row md:items-center">
      <div className="w-full md:w-1/2 px-4">
        <MotionDiv direction="right">
          <Typography
            variant="h2"
            className="main__title mb-10"
          >
            Bizning manzil
          </Typography>
        </MotionDiv>
        <div className="w-full mt-20 h-64 rounded-lg shadow-md overflow-hidden">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2994.7057394983085!2d69.29709827593646!3d41.35874927130349!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef3eecc32fa39%3A0xf38c9e8123f0f5b5!2sOlmaliq!5e0!3m2!1sen!2s!4v1710237073429!5m2!1sen!2s"
            width="700"
            height="550"
            style={{ border: 0 }}
            allowfullscreen="allow"
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="w-full md:w-1/2 px-4 mt-12 ml-12 flex flex-col justify-center">
        <div className="flex mt-7 items-center mb-8">
          <Image
            src={paymePng}
            alt="Company Logo"
            width={80}
            height={80}
          />
          <h3 className="text-xl font-semibold ml-4">iTechAcademy</h3>
        </div>
        <div className="mb-6">
          <span className="text-gray-500 mr-4">Ish vaqti:</span>
          <span className="font-semibold">09:00 - 20:00</span>
        </div>
        <div className="mb-6">
          <span className="text-gray-500 mr-4">Telefon:</span>
          <a
            href="tel:+9989912345677"
            className="font-semibold"
          >
            +998 99 123 45 67
          </a>
        </div>
        <a
          href="mailto:info@company.com"
          className="text-blue-500 hover:underline"
        >
          iqrodev@company.com
        </a>
      </div>
    </section>
  );
};
