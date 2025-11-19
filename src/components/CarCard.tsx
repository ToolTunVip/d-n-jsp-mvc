import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Fuel, Gauge, Settings } from "lucide-react";

interface CarCardProps {
  name: string;
  brand: string;
  price: string;
  image: string;
  specs?: {
    engine?: string;
    power?: string;
    transmission?: string;
  };
}

const CarCard = ({ name, brand, price, image, specs }: CarCardProps) => {
  return (
    <Card className="group overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300">
      <div className="relative aspect-video overflow-hidden">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4 px-3 py-1 bg-secondary/90 backdrop-blur-sm rounded-full text-xs font-medium">
          {brand}
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {name}
        </h3>
        
        <div className="text-2xl font-bold text-primary mb-4">
          {price} đ
        </div>

        {specs && (
          <div className="grid grid-cols-3 gap-4 mb-4 pb-4 border-b border-border">
            {specs.engine && (
              <div className="flex flex-col items-center gap-1">
                <Fuel className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{specs.engine}</span>
              </div>
            )}
            {specs.power && (
              <div className="flex flex-col items-center gap-1">
                <Gauge className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{specs.power}</span>
              </div>
            )}
            {specs.transmission && (
              <div className="flex flex-col items-center gap-1">
                <Settings className="h-4 w-4 text-muted-foreground" />
                <span className="text-xs text-muted-foreground">{specs.transmission}</span>
              </div>
            )}
          </div>
        )}

        <Button className="w-full group" variant="outline">
          Xem chi tiết
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </CardContent>
    </Card>
  );
};

export default CarCard;
