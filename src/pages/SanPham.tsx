import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CarCard from "@/components/CarCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

const cars = [
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
  },
  {
    id: 4,
    name: "Lexus LS 500",
    brand: "Lexus",
    price: "4.200.000.000",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
    specs: { engine: "3.5L V6", power: "416 HP", transmission: "10-Speed" }
  },
  {
    id: 5,
    name: "Mercedes E-Class",
    brand: "Mercedes",
    price: "2.799.000.000",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=800&q=80",
    specs: { engine: "2.0L I4", power: "255 HP", transmission: "9-Speed" }
  },
  {
    id: 6,
    name: "BMW 5 Series",
    brand: "BMW",
    price: "2.599.000.000",
    image: "https://images.unsplash.com/photo-1523983302122-73e869e1f850?auto=format&fit=crop&w=800&q=80",
    specs: { engine: "2.0L I4", power: "248 HP", transmission: "8-Speed" }
  }
];

const brands = ["Tất cả", "Mercedes", "BMW", "Audi", "Lexus", "Toyota"];

const SanPham = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-secondary border-b border-border py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Bộ sưu tập <span className="text-primary">xe cao cấp</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Khám phá danh mục xe hơi sang trọng từ các thương hiệu hàng đầu thế giới
            </p>
          </div>
        </section>

        {/* Filters */}
        <section className="border-b border-border">
          <div className="container mx-auto px-4 py-6">
            <div className="flex flex-wrap items-center gap-4">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Bộ lọc
              </Button>
              <div className="flex flex-wrap gap-2">
                {brands.map((brand) => (
                  <Button
                    key={brand}
                    variant={brand === "Tất cả" ? "default" : "outline"}
                    size="sm"
                  >
                    {brand}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Cars Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {cars.map((car) => (
                <CarCard key={car.id} {...car} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Xem thêm xe
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default SanPham;
