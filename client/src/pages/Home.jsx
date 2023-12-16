import React from 'react';
import heroImg01 from '../assets/images/hero-img01.png';
import heroImg02 from '../assets/images/hero-img02.png';
import heroImg03 from '../assets/images/hero-img03.png';
import icon01 from '../assets/images/icon01.png';
import {Link} from 'react-router-dom';

const Home = () => {
  return (
    <>
    {/* hero section */}
    <section className='hero_section pt-[60px] 2xl:h-[800px]'>
        <div className="container">
          <div className="flex flex-col lg:flex-row gap-[90px] items-center justify-between">
            {/* hero content */}
            <div>
              <div className='lg:w-[570px]'>
                <h1 className='text-[36px] leading-[46px] text-headingColor font-[600] md:text-[60px] md:leading-[70px]'>We help patients to live a healthy and long life</h1>

                <p className='text_para'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Est, reiciendis vero. Veniam molestias esse recusandae facere nesciunt, tempora, similique iste doloribus maxime adipisci rem modi pariatur natus inventore non. </p>

                <button className='btn'>Request An Appointment</button>
              </div>

              {/* hero counter */}
              <div className='mt-[30px] lg:mt-[70px] flex flex-col lg:flex-row gap-5 lg:gap-[30px]'>
                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>30+</h2>
                  <span className='w-[100px] h-2 bg-yellowColor rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Years of Experience</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>10+</h2>
                  <span className='w-[100px] h-2 bg-purpleColor rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Clinic Location</p>
                </div>

                <div>
                  <h2 className='text-[36px] leading-[56px] lg:text-[44px] lg:leading-[54px] font-[700] text-headingColor'>100%</h2>
                  <span className='w-[100px] h-2 bg-irisBlueColor rounded-full block mt-[-14px]'></span>
                  <p className='text_para'>Patient satisfaction</p>
                </div>

              </div>

            </div>
            {/* hero content end */}

            <div className='flex gap-[30px] justify-end'>
              <div>
                <img src={heroImg01} alt="img1" className='w-full'/>
              </div>

              <div className='mt-[30px]'>
                <img src={heroImg02} alt="img2" className='w-full mb-[30px]'/>
                <img src={heroImg03} alt="img3" className='w-full'/>
              </div>
            </div>

          </div>
        </div>
    </section>
    {/* hero section end */}

    <section>
      <div className="container">
        <div className='lg:w-[470px] max-auto'>
          <h2 className='heading text-center'>Providing the best medical services</h2>
          <p className='text_para text-center'>Best medical facilities for everyone. Our healthcare system offers unmatched care and experts</p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] lg:mt-[55px]'>

          <div className='py-[30px] px-5'>
            <div className='flex item-center justify-center'>
              <img src={icon01} alt="icon1" />
            </div>

            <div className='mt-[30px]'>
              <h2 className='text-[26px] leading-9 text-headingColor font-[700] text-center'>
                Find a Doctor
              </h2>

              <p className='text-[16px] leading-7 text-textColor font-[400] mt-4 text-center'>Best medical facilities for everyone. Our healthcare system offers unmatched care and experts</p>

              <Link to='/doctors' className='w-[44px] h-[44px] rounded-full border border-solid border-[#181AE] mt-[30xp] mx-auto'>

              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
    </>
  )
}

export default Home
