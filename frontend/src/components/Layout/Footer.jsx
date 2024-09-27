export default function Footer (){
    return (
      
      <footer className="text-center text-black bg-white mb-2">
      <hr/>
      
    
      <div className="container mx-auto text-center md:text-left">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 p-6">
          
          {/* First Column */}
          <div className="mb-4 mt-1">
            <h6 className="text-xl uppercase font-bold">Freelancer Fusion</h6>
            <hr className="my-2 w-24 mx-auto md:mx-0 border-white border-2" />
            <p className="text-md font-light">
            popular platform for freelancers who offer digital services like writing, graphic design,
             and video production. It has a large community of buyers and sellers and a user-friendly interfac
            </p>
          </div>
          
          {/* Second Column */}
          <div className="text-center mx-20 mt-1">
            <h4 className="text-lg font-bold uppercase">Quick Links</h4>
            <hr className="my-2 w-24 mx-auto md:mx-0 border-white border-2" />
            <ul className="space-y-2 text-center">
              <li><a href="/" className="text-md font-light  hover:underline">Home</a></li>
              <li><a href="/contact" className="text-md font-light hover:underline">Contact Us</a></li>
              <li><a href="/about" className="text-md font-light hover:underline">About Us</a></li>
            </ul>
          </div>
          
          {/* Third Column */}
          <div className="mt-1 ml-10">
            <h6 className="text-lg uppercase font-bold">Get in Touch</h6>
            <hr className="my-2 w-32 mx-auto md:mx-0 border-white border-2" />
            <ul className="space-y-2 text-md font-light">
              <li><i className="fa fa-home mr-2"></i> Ahmedabad, AHM 380013, INDIA</li>
              <li><i className="fa fa-envelope mr-2"></i> Ecademylearing@gmail.com</li>
              <li><i className="fa fa-phone mr-2"></i> +91 94298 70435</li>
              <li><i className="fa fa-print mr-2"></i> +91 98980 52549</li>
            </ul>
          </div>
          
        </div>
      </div>
    
      <hr />
      
      <div className="text-center py-4 text-lg">
      <div className="ml-8">
       <span className="text-2xl">Get connected with us on social networks</span>
      </div>
        © 2024 <a href="/" className="text-black hover:underline">Freelancer Fusion</a> | Powered by Freelancer Fusion
      </div>
    </footer>
    

         );
     };