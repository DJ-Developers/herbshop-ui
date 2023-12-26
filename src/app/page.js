import Image from 'next/image'
import Link from 'next/link'

// -----------
import ProductCategoriesCarousel from '@/components/product-categories/ProductCategoriesCarousel'

// -----------
import { LogoSimple } from '@/components/logo'
import ProductCard from '@/components/card/ProductCard'
import { PRODUCTS } from '@/constants/index'
import SimplePostCard from '@/components/card/SimplePostCard'
import Countdown from '@/components/count-down/Countdown'
import { kaushan_script, sacramento } from '@/components/fonts'

export default function Home() {
  return (
    <main>
      <div className='relative lg:h-auto h-[650px] w-full'>
        <Image
          src='/slider-01-01.jpeg'
          alt=''
          width={0}
          height={0}
          sizes='100vw'
          className='w-full h-full object-cover object-center animate-[fadeIn_3s_ease-in-out]'
        />
        <div className='absolute w-[340px] h-[340px] bg-white rounded-full top-[calc(50%-160px)] left-[calc(50%-160px)] p-4 animate-[scaleOut_1s_ease-in-out]'>
          <div className='border rounded-full w-full h-full border-lime-600 border-dashed flex flex-col justify-center items-center space-y-3 animate-[scaleOut_1.2s_ease-in-out] '>
            <LogoSimple
              disabledLink={true}
              className='w-16 h-16 animate-[fadeDown_1.5s_ease-in-out]'
            />
            <h2
              className={`${sacramento.className} text-4xl animate-[fadeUp_1.7s_ease-in-out]`}>
              Handicraft Shop
            </h2>
            <p
              className={`${kaushan_script.className} text-3xl text-lime-600 animate-[fadeUp_2s_ease-in-out]`}>
              Just for you
            </p>

            <Link
              href='/product'
              className='uppercase underline underline-offset-8 pt-1 animate-[fadeUp_2.3s_ease-in-out] '>
              Shop now
            </Link>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=' max-w-7xl mx-auto lg:py-28 py-20 text-center'>
        <p
          className={`${sacramento.className} text-4xl lg:text-5xl text-lime-600`}>
          Just for you
        </p>
        <h2 className=' text-4xl lg:text-5xl leading-normal '>
          Making & crafting
        </h2>
      </div>
      {/*  */}
      <div className='max-w-7xl mx-auto lg:px-10 px-6 lg:pb-32 pb-20'>
        <div className='flex lg:flex-row flex-col gap-x-10 gap-y-10'>
          <div className='lg:w-1/2 w-full'>
            <div className='max-w-[500px] h-auto relative'>
              <Image
                src='/bg-banner.png'
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                className='w-full h-full object-cover object-center'
              />
              <div className=' absolute top-0 left-0 right-0 bottom-0 flex flex-col justify-center items-center'>
                <h2 className={` text-4xl lg:text-5xl ${sacramento.className}`}>
                  Winter Sale
                </h2>

                <h3 className=' text-4xl text-center max-w-[220px]  mx-auto lg:mb-9 mb-6'>
                  <span className='text-8xl float-left'>40</span>% OFF
                </h3>
                <Link
                  href='/product'
                  className=' underline decoration-2 underline-offset-8 decoration-gray-300 hover:decoration-gray-900 transition-colors duration-500'>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className='lg:w-1/2 w-full'>
            <div className='relative group mb-9 '>
              <div className='overflow-hidden'>
                <Image
                  src='/bg-category.jpeg'
                  alt=''
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-full h-full object-cover object-center group-hover:scale-110 transition-all ease-in-out duration-1000'
                />
              </div>
              <div className='absolute top-[15px] left-[15px] w-[calc(100%-30px)] h-[calc(100%-30px)] border border-white '></div>
            </div>
            <div className='text-gray-900 flex lg:flex-row flex-col lg:items-center gap-y-6 justify-between'>
              <div>
                <h2 className='text-5xl font-normal'>10% off</h2>
                <h3 className=' leading-10 font-light tracking-wider'>
                  YOUR NEXT PURCHASE
                </h3>
              </div>
              <div className='text-right'>
                <Link
                  href='/product'
                  className='uppercase font-light px-10  py-3 bg-rose-50 rounded-full leading-8 hover:bg-gray-900 hover:text-white transition-colors duration-500'>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ProductCategoriesCarousel />

      {/* PRODUCT */}
      <div className=' max-w-7xl mx-auto pt-32 pb-12 text-center'>
        <p
          className={`${sacramento.className} lg:text-5xl text-4xl text-lime-600`}>
          Shop now
        </p>
        <h2 className='lg:text-5xl text-3xl leading-normal '>
          Shop our best sellers
        </h2>
      </div>
      <div className='max-w-7xl mx-auto lg:px-10 px-6'>
        <div className='grid lg:grid-cols-4 grid-cols-1 gap-8'>
          {PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
      {/*  */}
      <div className='max-w-7xl mx-auto lg:py-20 py-8 lg:px-10 px-4'>
        <div className='flex lg:flex-row flex-col space-x-8'>
          <div className='lg:w-1/2 h-auto relative overflow-hidden group '>
            <Image
              src='/banner-01.jpeg'
              alt=''
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500'
            />
            <div className=' absolute lg:left-10 left-5 top-1/2 -translate-y-1/2'>
              <p className='lg:text-3xl text-xl mb-4'>
                Little simple <br /> things
              </p>
              <Link
                href='/product'
                className=' underline decoration decoration-black/10 underline-offset-8 hover:decoration-black transition-all duration-500'>
                SHOP NOW
              </Link>
            </div>
          </div>

          <div className='lg:w-1/2 h-auto relative overflow-hidden group'>
            <Image
              src='/banner-02.jpeg'
              alt=''
              width={0}
              height={0}
              sizes='100vw'
              className='w-full h-full object-cover object-center group-hover:scale-110 transition-all duration-500'
            />
            <div className=' absolute lg:left-10 left-5  top-1/2 -translate-y-1/2'>
              <p className='lg:text-3xl text-xl mb-4'>
                Holiday <br /> Gifts
              </p>
              <Link
                href='/product'
                className=' underline decoration decoration-black/10 underline-offset-8 hover:decoration-black transition-all duration-500'>
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* DEAL DAY */}
      <div className=' bg-[#f3f4ec]'>
        <div className='max-w-7xl mx-auto py-24 '>
          <div className='flex lg:flex-row flex-col items-center gap-6 px-6'>
            <div className='lg:w-1/2 w-full animate-[bounce_8s_ease-in-out_infinite_]'>
              <Image
                src='/banner-hp-6.png'
                alt=''
                width={0}
                height={0}
                sizes='100vw'
                className='w-full -h-full object-cover object-center'
              />
            </div>
            <div className='lg:w-1/2 w-full'>
              <p className='text-4xl text-gray-900 mb-6'>Deal of the day</p>
              <p className='text-sm font-light leading-8 lg:max-w-md'>
                Các thợ thủ công lành nghề của chúng tôi có thể đảm bảo rằng mỗi
                tác phẩm được sản xuất đều là một tác phẩm nghệ thuật. Trọng tâm
                của chúng tôi luôn là chất lượng tốt nhất có thể.
              </p>
              <div className='lg:max-w-md py-6'>
                <Countdown />
              </div>
              <div className='mt-8'>
                <Link
                  href='/product'
                  className='px-10 py-4 bg-gray-900 border border-gray-900 hover:bg-transparent hover:text-gray-900 transition-all duration-500 text-white rounded-full text-lg tracking-widest'>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* BLOGS */}
      <div className=' max-w-7xl mx-auto pt-32 pb-12 text-center'>
        <p
          className={`${sacramento.className} lg:text-5xl text-4xl text-lime-600`}>
          Blog updates
        </p>
        <h2 className=' lg:text-5xl text-4xl leading-normal '>
          From our blogs
        </h2>
      </div>
      <div className='max-w-7xl mx-auto lg:px-10 px-6 mb-32'>
        <div className='grid lg:grid-cols-3 gap-6 '>
          {/*  */}
          <SimplePostCard />
          <SimplePostCard />
          <SimplePostCard />
        </div>
        <div className='mt-8 text-center'>
          <Link
            href='/blog'
            className=' text-center uppercase  px-10 py-4 bg-gray-900 tracking-widest rounded-full leading-8 hover:bg-rose-50 text-white hover:text-gray-900 transition-colors duration-500'>
            view all
          </Link>
        </div>
      </div>

      {/* Subscribe */}
      <div className=' bg-neutral-100 py-12'>
        <div className='max-w-7xl mx-auto flex lg:flex-row flex-col gap-y-8 items-center lg:px-10 px-6'>
          <div
            className={`${sacramento.className} text-5xl text-center leading-normal lg:w-1/2 w-full`}>
            Stay connected <br /> with us
          </div>
          <div className='lg:w-1/3 w-full'>
            <p className='text-xl font-medium mb-6 lg:text-left text-center'>
              Subscribe to our newsletter.
            </p>
            <form className='relative'>
              <input
                type='text'
                name='email'
                id='email'
                autoComplete='email'
                className='border-0 pl-5 pr-24 h-12 w-full rounded-full bg-white text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6'
                placeholder='Your email address'
              />
              <button className='text-sm absolute h-12 bg-black hover:bg-transparent hover:text-gray-900 border border-gray-900 transition-all duration-500 text-white px-9 py-[14px] rounded-full uppercase -right-0.5'>
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </main>
  )
}
