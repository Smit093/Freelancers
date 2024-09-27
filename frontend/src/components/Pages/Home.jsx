import React, { useContext } from 'react';
import UserContext from '../../contexts/UserContext';
import Video from '../../assets/Image/video.mp4';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import Img1 from '../../assets/Image/web.jpeg';
import Img5 from '../../assets/Image/logo.jpeg';
import Img8 from '../../assets/Image/AID.jpeg';
import Img7 from '../../assets/Image/app.jpeg';
import Img6 from '../../assets/Image/DM.jpeg';
import Img4 from '../../assets/Image/seo.jpeg';
import Img3 from '../../assets/Image/social.jpeg';
import Img2 from '../../assets/Image/voice.jpeg';

function Home() {
  const { user } = useContext(UserContext);
  console.log(user);

  const services = [
    { title: "Website Development", color: "bg-green-600", image: Img1 },
    { title: "Logo Design", color: "bg-orange-400", image: Img5 },
    { title: "SEO", color: "bg-green-700", image: Img4 },
    { title: "Architecture & Interior Design", color: "bg-purple-800", image: Img8 },
    { title: "Social Media Marketing", color: "bg-yellow-700", image: Img3 },
    { title: "Voice Over", color: "bg-orange-800", image: Img2 },
    { title: "App Development", color: "bg-blue-700", image: Img7 },
    { title: "Digital Marketing", color: "bg-teal-600", image: Img6 },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5, // Show 5 cards at a time
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const categories = [
    { title: 'Programming & Tech', icon: '💻' },
    { title: 'Graphics & Design', icon: '🎨' },
    { title: 'Digital Marketing', icon: '📱' },
    { title: 'Writing & Translation', icon: '✍' },
    { title: 'Video & Animation', icon: '🎬' },
    { title: 'AI Engineer', icon: '🤖' },
    { title: 'Music & Audio', icon: '🎵' },
    { title: 'Business', icon: '👥' },
  ];

  const features = [
    {
      title: "Over 700 categories",
      description: "Get results from skilled freelancers from all over the world, for every task, at any price point.",
    },
    {
      title: "Clear, transparent pricing",
      description: "Pay per project or by the hour (Pro). Payments only get released when you approve.",
    },
    {
      title: "Quality work done faster",
      description: "Filter to find the right freelancers quickly and get great work delivered in no time, every time.",
    },
    {
      title: "24/7 award-winning support",
      description: "Chat with our team to get your questions answered or resolve any issues with your orders.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <div className="bg-green-900 text-white min-h-max m-10 rounded-3xl">
        <section className="container mx-auto text-center pt-16 pb-10">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Find the right <span className="text-green-300">freelance</span> service, right away
          </h1>
        </section>

      </div>

      {/* Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 sm:px-10 md:px-20 mb-20">
        {categories.map((category, index) => (
          <Link
            key={index}
            to={`/${category.title.replace(/\s+/g, '-').toLowerCase()}`} // Example: /programming-tech
            className="flex flex-col items-center justify-center p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 ease-in-out hover:bg-gray-100"
            aria-label={`Explore ${category.title}`}
          >
            <span className="text-4xl mb-4">{category.icon}</span>
            <h2 className="text-lg font-semibold">{category.title}</h2>
          </Link>
        ))}
      </div>

      {/* Popular Services */}
      <div className="container mx-auto pb-16">
        <h2 className="text-3xl font-bold text-left mb-4">Popular Services</h2>
        <hr />
        <Slider {...settings}>
          {services.map((service, index) => (
            <div key={index} className="p-4">
              <div className={`rounded-lg shadow-lg overflow-hidden ${service.color} min-h-70 flex flex-col`}>
                <div className="p-4 h-16 text-center">
                  <h3 className="text-lg font-bold text-white">{service.title}</h3>
                </div>
                <div className="p-4">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="mt-4 w-full h-32 object-cover rounded-lg"
                  />
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-10">
            A whole world of freelance talent at your fingertips
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <h3 className="text-xl font-semibold text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Video Section */}
      <section className="py-16 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Watch Our Introductory Video
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Learn more about our platform and how we can help you connect with top freelancers worldwide.
          </p>

          <div className="relative pb-9/16 h-70 w-full">
            <video
              className="h-70 w-full rounded-3xl"
              autoPlay
              muted
              loop
              id="video-bg"
            >
              <source src={Video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
