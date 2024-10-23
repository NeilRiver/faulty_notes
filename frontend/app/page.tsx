import { Button } from '@/components/ui/button';
import Image from 'next/image';
import { Roboto } from 'next/font/google';

import SvgMoon from '@/public/svg/moon.svg';
import SvgClock from '@/public/svg/clock.svg';
import SvgMap from '@/public/svg/map.svg';
import SvgFile from '@/public/svg/file.svg';
import SvgImage from '@/public/svg/image.svg';
import SvgAddressBook from '@/public/svg/address-book.svg';

import { FC, SVGProps } from 'react';
type SvgComponent = FC<SVGProps<SVGSVGElement>>;

interface Feature {
  Icon: SvgComponent;
  text: string;
}

const roboto = Roboto({ subsets: ['latin'], weight: ['400', '700'] });

const features: Feature[] = [
  {
    Icon: SvgMoon,
    text: 'Store your memories about some places. Add photo and get access to your past trips anywhere.'
  },
  {
    Icon: SvgClock,
    text: 'Send your own opinion about different cities, towns and places for interest.'
  },
  { Icon: SvgMap, text: 'See map with your achievements and plan your next steps.' }
];

const readFeatures: Feature[] = [
  { Icon: SvgFile, text: 'Read about new places.' },
  { Icon: SvgImage, text: 'Look photos from places where you never been.' },
  { Icon: SvgAddressBook, text: 'Use best practice from other peoples.' }
];

const FeatureCard: FC<Feature> = ({ Icon, text }) => (
  <div className='w-full sm:w-1/2 md:w-1/3 px-2'>
    <div className='text-6xl text-center text-cyan-500'>
      <Icon width={60} height={60} className='inline' />
    </div>
    <div className='max-w-[300px] text-[19px] mx-auto'>{text}</div>
  </div>
);

export default function Home() {
  return (
    <main>
      <section className='text-white p-10 bg-[#00bcd4] min-h-[470px] relative'>
        <header className='flex flex-col items-center'>
          <h1 className='text-5xl'>Travel Note</h1>
          <p className='text-xl p-5'>Store your travel experience! Open new horizons!</p>
          <Button className='uppercase text-sm'>Get Started</Button>
        </header>
        <Image
          src='/images/devices.png'
          width={600}
          height={360}
          alt='Devices'
          className='absolute -bottom-[100px] max-w-full left-1/2 transform -translate-x-1/2'
          priority
        />
      </section>

      <section className='px-0 py-[150px] overflow-hidden'>
        <h2 className={`${roboto.className} text-center text-2xl my-3 mx-0 font-bold`}>
          We help to store your memories and impressions
        </h2>
        <div className='box-border flex flex-row flex-wrap -mx-2'>
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </section>

      <section className='bg-[#00bcd4] py-12 px-2 min-h-[300px] relative text-white'>
        <h2 className={`${roboto.className} text-center text-2xl my-5 mx-0 font-bold`}>
          Look all you travel experience on one map
        </h2>
        <Image
          src='/images/map.png'
          width={600}
          height={360}
          alt='Map'
          className='border-10 border-solid border-[10px] border-white rounded-[10px] w-[400px] max-w-[70%] absolute left-1/2 transform -translate-x-1/2'
        />
      </section>

      <section className='px-0 py-[150px]'>
        <h2 className={`${roboto.className} text-center text-2xl my-5 mx-0 font-bold`}>
          Read about new places and new details about your favorite places
        </h2>
        <div className='flex flex-wrap'>
          {readFeatures.map((feature, index) => (
            <div key={index} className='md:w-1/3 sm:w-1/2 w-full'>
              <div className='max-w-[300px] text-[19px] mx-auto'>
                <div className='text-6xl text-center text-cyan-500'>
                  <feature.Icon width={60} height={60} className='inline' />
                </div>
                {feature.text}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
