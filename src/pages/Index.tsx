import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const featuredCars = [
  {
    id: 1,
    name: "Mercedes S-Class",
    brand: "Mercedes",
    price: "5.200.000.000",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80",
    specs: { engine: "3.0L V6", power: "429 HP", transmission: "9-Speed" }
  },
  {
    id: 2,
    name: "BMW 7 Series",
    brand: "BMW",
    price: "4.899.000.000",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    specs: { engine: "3.0L I6", power: "375 HP", transmission: "8-Speed" }
  },
  {
    id: 3,
    name: "Audi A8",
    brand: "Audi",
    price: "4.799.000.000",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
    specs: { engine: "3.0L V6", power: "335 HP", transmission: "8-Speed" }
  }
];

const brands = [
  { name: "Mercedes", logo: "https://www.carlogos.org/logo/Mercedes-Benz-logo.png" },
  { name: "BMW", logo: "https://www.carlogos.org/logo/BMW-logo.png" },
  { name: "Audi", logo: "https://www.carlogos.org/logo/Audi-logo.png" },
  { name: "Lexus", logo: "https://www.carlogos.org/logo/Lexus-logo.png" },
  { name: "Toyota", logo: "https://www.carlogos.org/logo/Toyota-logo.png" }
];

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      
      {/* Brands Section */}
      <section className="py-16 bg-secondary border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Thương hiệu <span className="text-primary">đối tác</span>
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {brands.map((brand) => (
              <div 
                key={brand.name}
                className="flex items-center justify-center p-6 bg-background rounded-lg border border-border hover:border-primary/50 transition-all duration-300"
              >
                <img 
                  src={brand.logo} 
                  alt={brand.name}
                  className="h-12 w-auto opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Cars */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-end justify-between mb-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Xe nổi bật <span className="text-primary">trong tuần</span>
              </h2>
              <p className="text-muted-foreground">
                Khám phá những mẫu xe cao cấp được yêu thích nhất
              </p>
            </div>
            <Button variant="outline" className="hidden md:flex">
              Xem tất cả
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredCars.map((car) => (
              <CarCard key={car.id} {...car} />
            ))}
          </div>

          <div className="mt-8 text-center md:hidden">
            <Button variant="outline">
              Xem tất cả
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-secondary border-y border-border py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Sẵn sàng sở hữu xe mơ ước?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Liên hệ ngay với chúng tôi để được tư vấn và trải nghiệm lái thử miễn phí
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Liên hệ tư vấn
            </Button>
            <Button size="lg" variant="outline">
              Xem bộ sưu tập
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
