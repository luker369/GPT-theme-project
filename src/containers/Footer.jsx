// import { useEffect } from 'react';

const Links = ({title,links})=>(

  <div>
    <h4 className='font-bold mb-[30px] text-[20px]'>{title}</h4>
    {
      links.map((link,ind)=><a key={ind} href='#' className={`${ind === links.length - 1 ? '' : 'mb-[10px]'}`}>{link}</a>)
    }
  </div>
)

const Footer = () => {

// useEffect(() => {
//   console.log('Component re-rendered');
// }, []);

  return (
    <footer className='footer-color mt-[100px]'>
   
        <h1 className='gradient__text px-[20px] text-[40px] md:text-[55px] font-bold text-center mt-[70px] max-w-[700px] mx-auto'>Do you want to step into the future before everybody else?</h1>

        <a href='#' className='w-[230px] h-[60px] font-semibold mx-auto my-[70px] grid place-items-center border border-white rounded-[6px]'>Request Early Access</a>

        <div className='grid gap-[70px] sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-[20px] sm:mx-[100px]'>

          <div className=''>
            <h3 className='text-[40px] font-semibold mb-[20px]'>GPT-4</h3>
            <p>Crechterwoord K12 DK <br /> Alknjkcb, All Rights Reserved</p>
          </div>
          <Links title='Links' links={['overons','Counters','Contact']} />
          <Links title='Company' links={['Terms & Conditions','Privacy Policy','Contact']} />
          <Links title='Get In Touch' links={['Crechterwoord K12 DK Alknjkcb','085-132567','infopayment.net']} />

        </div>

        <p className='pt-[50px] pb-[20px] text-center fonte-semibold text-[18px]'>&copy;{new Date().getUTCFullYear()} GPT-4.All rights reserved.</p>
     
    </footer>
  )
}

export default Footer
