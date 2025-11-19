import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShoppingCart, Wrench, CreditCard, FileText, Shield, Clock } from "lucide-react";

const services = [
  {
    icon: ShoppingCart,
    title: "Mua bán xe cao cấp",
    description: "Chuyên cung cấp các dòng xe sang nhập khẩu chính hãng từ Mercedes, BMW, Audi, Lexus với giá cạnh tranh nhất thị trường.",
  },
  {
    icon: Wrench,
    title: "Bảo dưỡng & Sửa chữa",
    description: "Dịch vụ bảo dưỡng định kỳ và sửa chữa chuyên nghiệp với đội ngũ kỹ thuật viên giàu kinh nghiệm và trang thiết bị hiện đại.",
  },
  {
    icon: CreditCard,
    title: "Hỗ trợ tài chính",
    description: "Tư vấn và hỗ trợ vay mua xe với lãi suất ưu đãi, thủ tục nhanh gọn, duyệt trong vòng 24h.",
  },
  {
    icon: FileText,
    title: "Đăng kiểm & Giấy tờ",
    description: "Hỗ trợ làm đầy đủ giấy tờ, đăng kiểm, sang tên, chuyển quyền sở hữu nhanh chóng và hợp pháp.",
  },
  {
    icon: Shield,
    title: "Bảo hành chính hãng",
    description: "Tất cả xe được bảo hành chính hãng từ nhà sản xuất, đảm bảo chất lượng và quyền lợi cho khách hàng.",
  },
  {
    icon: Clock,
    title: "Hỗ trợ 24/7",
    description: "Đội ngũ tư vấn luôn sẵn sàng hỗ trợ khách hàng mọi lúc mọi nơi, giải đáp mọi thắc mắc về sản phẩm và dịch vụ.",
  },
];

const DichVu = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-secondary border-b border-border py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Dịch vụ <span className="text-primary">của chúng tôi</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Cam kết mang đến trải nghiệm hoàn hảo với dịch vụ chuyên nghiệp và tận tâm
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                  <CardHeader>
                    <div className="mb-4 inline-flex p-3 rounded-lg bg-secondary group-hover:bg-primary/10 transition-colors">
                      <service.icon className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary border-y border-border py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Cần tư vấn thêm?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Đội ngũ chuyên gia của chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                Liên hệ ngay
              </Button>
              <Button size="lg" variant="outline">
                Gọi: 0901 234 567
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DichVu;
