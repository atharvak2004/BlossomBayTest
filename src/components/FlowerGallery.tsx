import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { X } from "lucide-react";

import wedding1 from "@/assets/gallery/wedding-1.jpg";
import wedding2 from "@/assets/gallery/wedding-2.jpg";
import event1 from "@/assets/gallery/event-1.jpg";
import event2 from "@/assets/gallery/event-2.jpg";
import wholesale1 from "@/assets/gallery/wholesale-1.jpg";
import seasonal1 from "@/assets/gallery/seasonal-1.jpg";

const galleryItems = [
  {
    id: 1,
    image: wedding1,
    title: "Elegant Bridal Bouquet",
    category: "weddings",
    description: "Romantic white roses and peonies with eucalyptus greenery"
  },
  {
    id: 2,
    image: event1,
    title: "Spring Event Centerpiece",
    category: "events",
    description: "Vibrant tulips and daffodils for special occasions"
  },
  {
    id: 3,
    image: wholesale1,
    title: "Fresh Rose Bundles",
    category: "daily-wholesale",
    description: "Daily wholesale roses in commercial quantities"
  },
  {
    id: 4,
    image: seasonal1,
    title: "Autumn Collection",
    category: "seasonal",
    description: "Chrysanthemums and fall foliage arrangements"
  },
  {
    id: 5,
    image: wedding2,
    title: "Wedding Centerpiece",
    category: "weddings",
    description: "Luxury table decoration with blush pink flowers"
  },
  {
    id: 6,
    image: event2,
    title: "Corporate Events",
    category: "events",
    description: "Modern minimalist arrangements for business settings"
  }
];

const categories = [
  { id: "all", label: "All" },
  { id: "weddings", label: "Weddings" },
  { id: "events", label: "Events" },
  { id: "daily-wholesale", label: "Daily Wholesale" },
  { id: "seasonal", label: "Seasonal Flowers" }
];

interface LightboxProps {
  image: string;
  title: string;
  description: string;
}

const Lightbox = ({ image, title, description }: LightboxProps) => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="group relative overflow-hidden rounded-2xl shadow-card hover:shadow-card transition-all duration-500 hover:-translate-y-2 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover group-hover:scale-110 transition-all duration-500"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500">
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="font-inter font-semibold text-lg">{title}</h4>
              <p className="text-sm opacity-90">{description}</p>
            </div>
          </div>
        </button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-full p-0 bg-transparent border-none shadow-none">
        <div className="relative bg-card rounded-2xl overflow-hidden">
          <button
            onClick={() => setOpen(false)}
            className="absolute top-4 right-4 z-10 w-10 h-10 bg-card/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-card transition-all duration-300 shadow-soft"
          >
            <X className="w-5 h-5 text-foreground" />
          </button>
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="font-dancing text-3xl font-bold text-primary mb-2">{title}</h3>
            <p className="font-inter text-muted-foreground">{description}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

const FlowerGallery = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  return (
    <section className="py-20 bg-accent-light/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-dancing text-5xl font-bold text-primary mb-4">Flower Gallery</h2>
          <p className="font-inter text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our beautiful collection of wholesale flower arrangements and discover inspiration for your next project
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "hero" : "outline"}
              size="sm"
              onClick={() => setActiveCategory(category.id)}
              className="rounded-full px-6 py-2 font-inter text-sm transition-all duration-300"
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="animate-fade-in"
            >
              <Lightbox
                image={item.image}
                title={item.title}
                description={item.description}
              />
            </div>
          ))}
        </div>

        {filteredItems.length === 0 && (
          <div className="text-center py-12">
            <p className="font-inter text-muted-foreground">No items found in this category.</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default FlowerGallery;