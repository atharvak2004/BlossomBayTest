import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FlowerGallery from "@/components/FlowerGallery";
import { Instagram, MessageCircle, Facebook } from "lucide-react";
import heroImage from "@/assets/hero-flowers.jpg";
import rosesImage from "@/assets/roses.jpg";
import peoniesImage from "@/assets/peonies.jpg";
import lavenderImage from "@/assets/lavender.jpg";
import eucalyptusImage from "@/assets/eucalyptus.jpg";
import tulipsImage from "@/assets/tulips.jpg";
import chrysanthemumsImage from "@/assets/chrysanthemums.jpg";
import aboutImage from "@/assets/about-background.jpg";
import Carousel from '../components/ui/carousal_f'
import Shopbutton from "@/components/ui/shopbutton";
import CountUp from "@/components/ui/countup";
import flower1 from "@/assets/gallery/flower1.avif";
import flower2 from "@/assets/gallery/flower2.avif";
import flower3 from "@/assets/gallery/flower3.avif";




const Index = () => {
  const featuredFlowers = [
    {
      name: "Premium Roses",
      image: rosesImage,
      description: "Fresh cut roses in various colors, perfect for weddings and special events."
    },
    {
      name: "White Peonies",
      image: peoniesImage,
      description: "Elegant seasonal peonies with full, luxurious blooms and delicate fragrance."
    },
    {
      name: "Lavender Sprigs",
      image: lavenderImage,
      description: "Aromatic lavender stems, ideal for rustic and romantic arrangements."
    },
    {
      name: "Eucalyptus",
      image: eucalyptusImage,
      description: "Fresh eucalyptus branches providing beautiful greenery and natural scent."
    },
    {
      name: "Spring Tulips",
      image: tulipsImage,
      description: "Vibrant tulips in seasonal colors, bringing joy to any arrangement."
    },
    {
      name: "Chrysanthemums",
      image: chrysanthemumsImage,
      description: "Classic chrysanthemums with lasting beauty and versatile styling options."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="bg-card/80 backdrop-blur-sm border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <h1 className="font-dancing text-2xl sm:text-3xl font-bold text-primary">BlossomBay</h1>
          <nav className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-8 font-inter text-sm sm:text-base">
            <a href="#home" className="text-foreground hover:text-primary transition-smooth">Home</a>
            <a href="#gallery" className="text-foreground hover:text-primary transition-smooth">Gallery</a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">About</a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 252, 255, 0.7), rgba(250, 245, 255, 0.8)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="text-center max-w-4xl mx-auto px-4 animate-fade-in">
          <h1 className="font-dancing text-4xl sm:text-6xl md:text-8xl font-bold text-primary mb-6 drop-shadow-sm">
            BlossomBay
          </h1>
          <p className="font-inter text-lg sm:text-xl md:text-2xl text-foreground mb-8 max-w-2xl mx-auto leading-relaxed px-4">
            Wholesale Fresh Flowers, Straight from Nature to You
          </p>
          {/* <Button variant="hero" size="lg" className="font-inter text-base sm:text-lg px-8 sm:px-12 py-4 sm:py-6 rounded-full">
            View Catalog
          </Button> */}
        </div>
      </section>

      {/* Featured Flowers Section */}
      <section className="py-20 bg-secondary-light/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="font-dancing text-5xl font-bold text-primary mb-4">Featured Flowers</h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Discover our most popular wholesale flowers, handpicked for their exceptional quality and beauty
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredFlowers.map((flower, index) => (
              <Card
                key={flower.name}
                className="group hover:shadow-card transition-all duration-500 ease-in-out hover:-translate-y-2 bg-gradient-card border-border/50 overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="aspect-square overflow-hidden">
                  <img
                    src={flower.image}
                    alt={flower.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-500 ease-in-out"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-inter font-semibold text-xl text-foreground mb-3">
                    {flower.name}
                  </h3>
                  <p className="font-inter text-muted-foreground leading-relaxed mb-4">
                    {flower.description}
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Premium Collections Section */}
      <div className="text-center bg-white ">
        <h2 className="font-dancing text-5xl font-bold text-primary mb-5 pt-10">From Our Garden</h2>
        <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
          Hand-picked blooms cultivated with care, bringing our garden to your home.
        </p>
        <Carousel />
      </div>

            
      {/* Premium Collections Section */}
      <div className="container mx-auto px-4 mt-20 mb-10">
        <h2 className="text-center font-dancing text-5xl font-bold text-primary mb-5">Premium Collections</h2>
        <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto mb-10 text-center">
          A curated selection of our finest flowers, hand-picked for their exceptional quality and beauty.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div className="relative overflow-hidden group">
            <img src={flower1} alt="Spring Peonies" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 opacity-100 transition-opacity">
              <h3 className="text-white text-3xl font-bold mb-4">Spring Peonies</h3>
              {/* <button className="bg-white hover:bg-black text-black hover:text-white py-2 px-6 font-semibold border-2 border-white transition-all duration-300">
                SHOP NOW
              </button> */}
              <Shopbutton />
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img src={flower2} alt="Sunset Gladiolus" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 opacity-100 transition-opacity">
              <h3 className="text-white text-3xl font-bold mb-4">Sunset Gladiolus</h3>
              {/* <button className="bg-white text-black py-2 px-6 font-semibold border-2 border-white">SHOP NOW</button> */}
              <Shopbutton />
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img src={flower3} alt="Summer Bouquet" className="w-full h-full object-cover" />
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 opacity-100 transition-opacity">
              <h3 className="text-white text-3xl font-bold mb-4">Summer Bouquet</h3>
              {/* <button className="bg-white text-black py-2 px-6 font-semibold border-2 border-white">SHOP NOW</button> */}
              <Shopbutton />
            </div>
          </div>
        </div>
      </div>


      {/* About Us Section */}
      <section id="about" className="py-20 bg-accent-light/20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div
              className="relative rounded-3xl overflow-hidden shadow-card aspect-[4/3]"
              style={{
                backgroundImage: `url(${aboutImage})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-accent/10"></div>
            </div>
            <div className="space-y-6">
              <h2 className="font-dancing text-5xl font-bold text-primary">Our Story</h2>

              <div className="space-y-4 font-inter text-foreground leading-relaxed">
                <p className="text-lg">
                  For over two decades, BlossomBay has been your trusted partner in wholesale floriculture.
                  Founded with a passion for bringing nature's most beautiful creations to your doorstep,
                  we've grown from a small family farm to a premier wholesale flower distributor.
                </p>
                <p>
                  Our commitment to freshness begins at dawn in our carefully tended fields and extends
                  through our temperature-controlled facilities to your business. We understand that in
                  the floral industry, quality and timing are everything.
                </p>
                <p>
                  Whether you're a florist, event planner, or retailer, BlossomBay delivers bulk
                  quantities of the freshest flowers with the reliability and trust that has made us
                  industry leaders. Every stem tells a story of care, craftsmanship, and natural beauty.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-6">
                <div className="text-center">
                  <div className="font-dancing text-3xl font-bold text-primary">
                    <CountUp from={0} to={20} separator="," direction="up" duration={1} className="count-up-text" />+
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="font-dancing text-3xl font-bold text-primary">
                    <CountUp from={0} to={500} separator="," direction="up" duration={1} className="count-up-text" />+
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="font-dancing text-3xl font-bold text-primary">
                    <CountUp from={0} to={24} separator="," direction="up" duration={1} className="count-up-text" />/
                    <CountUp from={0} to={7} separator="," direction="up" duration={1} className="count-up-text" />
                  </div>
                  <div className="font-inter text-sm text-muted-foreground">Fresh Guarantee</div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section id="gallery">
        <FlowerGallery />
      </section>

      {/* Wholesale Inquiry Section */}
      <section id="contact" className="py-20 bg-gradient-hero">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-dancing text-5xl font-bold text-primary mb-4">Wholesale Inquiry</h2>
            <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to partner with us? Get in touch for bulk pricing, custom arrangements, and wholesale opportunities.
            </p>
          </div>

          <form className="bg-card/80 backdrop-blur-sm rounded-3xl p-8 shadow-card border border-border/50">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="space-y-2">
                <label className="font-inter font-medium text-foreground text-sm">Full Name *</label>
                <input
                  type="text"
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
                  placeholder="Enter your full name"
                />
              </div>

              <div className="space-y-2">
                <label className="font-inter font-medium text-foreground text-sm">Email Address *</label>
                <input
                  type="email"
                  className="w-full px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="font-inter font-medium text-foreground text-sm">Phone Number</label>
              <input
                type="tel"
                className="w-full mt-2 px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-smooth"
                placeholder="Enter your phone number"
              />
            </div>

            <div className="mb-8">
              <label className="font-inter font-medium text-foreground text-sm">Message *</label>
              <textarea
                rows={5}
                className="w-full mt-2 px-4 py-3 rounded-xl bg-input border border-border text-foreground placeholder:text-muted-foreground focus:ring-2 focus:ring-primary focus:border-primary transition-smooth resize-none"
                placeholder="Tell us about your wholesale needs, quantities, and any specific requirements..."
              />
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" className="font-inter text-lg px-12 py-4 rounded-full">
                Send Inquiry
              </Button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Us & Footer */}
      <footer className="bg-card border-t border-border">
        {/* Contact Information */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-3 gap-12 mb-12">
            <div className="text-center lg:text-left">
              <h3 className="font-dancing text-3xl font-bold text-primary mb-6">Get In Touch</h3>
              <div className="space-y-4 font-inter">
                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                    📞
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Phone</div>
                    <div className="text-muted-foreground">(555) 123-BLOOM</div>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                    📧
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Email</div>
                    <div className="text-muted-foreground">hello@blossombay.com</div>
                  </div>
                </div>

                <div className="flex items-center justify-center lg:justify-start space-x-3">
                  <div className="w-10 h-10 bg-primary-light rounded-full flex items-center justify-center">
                    📍
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">Address</div>
                    <div className="text-muted-foreground">123 Fresh Flower District<br />Garden Valley, CA 90210</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-inter font-semibold text-foreground mb-6">Follow Us</h4>
              <div className="flex justify-center space-x-4 mb-6">
                <a href="https://instagram.com/blossombay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1 border border-border/50 hover:border-red-700 hover:ring-red-700/30"
                  aria-label="Follow us on Instagram">
                  <Instagram className="w-5 h-5 text-primary transition-smooth group-hover:text-red-700" />
                </a>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1 border border-border/50 hover:border-red-700 hover:ring-red-700/30"
                  aria-label="Contact us on WhatsApp"
                >
                  <MessageCircle className="w-5 h-5 text-primary transition-smooth group-hover:text-red-700" />
                </a>

                <a
                  href="https://facebook.com/blossombay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group w-12 h-12 bg-gradient-card rounded-full flex items-center justify-center transition-all duration-300 ease-in-out hover:-translate-y-1 border border-border/50 hover:border-red-700 hover:ring-red-700/30"
                  aria-label="Follow us on Facebook"
                >
                  <Facebook className="w-5 h-5 text-primary transition-smooth group-hover:text-red-700" />
                </a>
              </div>

              <p className="font-inter text-muted-foreground text-sm">
                Stay updated with our latest collections and seasonal offerings
              </p>
            </div>

            <div className="text-center lg:text-left">
              <h4 className="font-inter font-semibold text-foreground mb-6">
                Business Hours
              </h4>

              <div className="space-y-3 font-inter text-muted-foreground">
                {[
                  { day: 'Monday - Friday', time: '6:00 AM - 6:00 PM' },
                  { day: 'Saturday', time: '6:00 AM - 4:00 PM' },
                  { day: 'Sunday', time: 'Closed' },
                ].map(({ day, time }) => (
                  <div
                    key={day}
                    className="grid grid-cols-[200px_1fr] lg:grid-cols-[180px_1fr] gap-x-4"
                  >
                    <span className="font-medium">{day}</span>
                    <span>{time}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
        {/* Footer Links */}
        <div className="border-t border-border">
          <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-3 items-center">
              <div className="flex items-center space-x-2">
                <h3 className="font-dancing text-2xl font-bold text-primary">
                  BlossomBay
                </h3>
                <span className="font-inter text-muted-foreground text-sm">
                  Wholesale Flowers
                </span>
              </div>
              <div className="text-center font-inter text-muted-foreground text-sm">
                &copy; 2024 BlossomBay. All rights reserved.
              </div>
              <div></div>
            </div>
          </div>
        </div>

      </footer>
    </div >
  );
};

export default Index;