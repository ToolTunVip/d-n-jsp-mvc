import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    title: "Địa chỉ",
    content: "123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh",
  },
  {
    icon: Phone,
    title: "Điện thoại",
    content: "0901 234 567",
  },
  {
    icon: Mail,
    title: "Email",
    content: "info@tooltuncar.vn",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    content: "Thứ 2 - Chủ nhật: 8:00 - 20:00",
  },
];

const LienHe = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-secondary border-b border-border py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Liên hệ <span className="text-primary">với chúng tôi</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Hãy để lại thông tin, chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <Card className="bg-card border-border">
                  <CardContent className="p-8">
                    <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn</h2>
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Họ và tên *</Label>
                          <Input 
                            id="name" 
                            placeholder="Nguyễn Văn A" 
                            className="bg-secondary border-border"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Số điện thoại *</Label>
                          <Input 
                            id="phone" 
                            placeholder="0901 234 567" 
                            className="bg-secondary border-border"
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="email@example.com" 
                          className="bg-secondary border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="subject">Tiêu đề</Label>
                        <Input 
                          id="subject" 
                          placeholder="Tư vấn mua xe" 
                          className="bg-secondary border-border"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Nội dung *</Label>
                        <Textarea 
                          id="message" 
                          placeholder="Nhập nội dung tin nhắn của bạn..." 
                          rows={6}
                          className="bg-secondary border-border"
                        />
                      </div>

                      <Button size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                        Gửi tin nhắn
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>
                  <div className="space-y-4">
                    {contactInfo.map((info, index) => (
                      <Card key={index} className="bg-card border-border">
                        <CardContent className="p-6 flex items-start gap-4">
                          <div className="p-3 rounded-lg bg-secondary">
                            <info.icon className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold mb-1">{info.title}</h3>
                            <p className="text-muted-foreground">{info.content}</p>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>

                {/* Map */}
                <Card className="overflow-hidden bg-card border-border">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted flex items-center justify-center">
                      <MapPin className="h-12 w-12 text-muted-foreground" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary border-y border-border py-16">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Đến trực tiếp showroom
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Ghé thăm showroom để trải nghiệm trực tiếp và nhận tư vấn từ đội ngũ chuyên gia
            </p>
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Xem bản đồ chi tiết
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LienHe;
