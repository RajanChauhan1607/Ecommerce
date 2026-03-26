import React from 'react'
import footerlogo from "../../assets/footer.jpg"

const BannerImg = {
  backgroundImage: `url(${footerlogo})`,
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Footerlinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/about" },
  { title: "Contact", link: "/contact" },
  { title: "Blog", link: "/blog" },
];

const Footer = () => {
  return (
    <div 
    data-aos="fade-up"
    style={BannerImg} className='text-white mb-20'>
      <div className='container'>
        <div className='grid md:grid-cols-3 py-4 pt-5'>

          {/* company details */}
          <div className='py-8 px-4'>
            <h1 className='sm:text-3xl text-xl font-bold flex items-center gap-3 mb-3'>
              <img src={footerlogo} alt="logo" className='max-w-[50px]' />
              Shopsy
            </h1>
            <p>Thanks for Visiting</p>
          </div>

          {/* footer links */}
          <div className='py-8 px-4'>
            <h2 className='text-xl font-bold mb-3'>Quick Links</h2>
            <ul className='space-y-2'>
              {Footerlinks.map((link, index) => (
                <li key={index}>
                  <a href={link.link} className='hover:text-orange-400'>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Footer