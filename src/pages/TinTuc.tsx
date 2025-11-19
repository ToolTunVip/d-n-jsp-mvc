import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight } from "lucide-react";

const newsArticles = [
  {
    id: 1,
    title: "Mercedes S-Class 2024 - Đỉnh cao công nghệ ô tô sang trọng",
    excerpt: "Khám phá những cải tiến vượt trội của Mercedes S-Class thế hệ mới với công nghệ hiện đại nhất...",
    image: "https://images.unsplash.com/photo-1617531653332-bd46c24f2068?auto=format&fit=crop&w=800&q=80",
    date: "15/11/2024",
    author: "Nguyễn Văn A",
    category: "Đánh giá xe"
  },
  {
    id: 2,
    title: "BMW 7 Series vs Mercedes S-Class: Cuộc đua xe sang hạng sang",
    excerpt: "So sánh chi tiết hai mẫu sedan hạng sang hàng đầu từ BMW và Mercedes-Benz...",
    image: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=800&q=80",
    date: "12/11/2024",
    author: "Trần Thị B",
    category: "So sánh"
  },
  {
    id: 3,
    title: "Top 5 xe điện cao cấp đáng mua nhất năm 2024",
    excerpt: "Xu hướng xe điện đang thay đổi thị trường ô tô cao cấp. Cùng điểm qua những mẫu xe đáng chú ý...",
    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=800&q=80",
    date: "10/11/2024",
    author: "Lê Văn C",
    category: "Xu hướng"
  },
  {
    id: 4,
    title: "Audi A8 2024: Sự kết hợp hoàn hảo giữa công nghệ và sang trọng",
    excerpt: "Audi A8 thế hệ mới mang đến trải nghiệm lái xe đẳng cấp với nhiều tính năng vượt trội...",
    image: "https://images.unsplash.com/photo-1606664515524-ed2f786a0bd6?auto=format&fit=crop&w=800&q=80",
    date: "08/11/2024",
    author: "Phạm Thị D",
    category: "Đánh giá xe"
  },
  {
    id: 5,
    title: "Lexus LS: Biểu tượng của sự sang trọng Nhật Bản",
    excerpt: "Tìm hiểu về lịch sử và sự phát triển của dòng xe sedan cao cấp từ Lexus...",
    image: "https://images.unsplash.com/photo-1621007947382-bb3c3994e3fb?auto=format&fit=crop&w=800&q=80",
    date: "05/11/2024",
    author: "Hoàng Văn E",
    category: "Lịch sử"
  },
  {
    id: 6,
    title: "5 mẹo bảo dưỡng xe sang để giữ giá trị xe qua thời gian",
    excerpt: "Hướng dẫn chi tiết cách bảo dưỡng và chăm sóc xe cao cấp để duy trì giá trị...",
    image: "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?auto=format&fit=crop&w=800&q=80",
    date: "02/11/2024",
    author: "Vũ Thị F",
    category: "Hướng dẫn"
  }
];

const TinTuc = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Header Section */}
        <section className="bg-secondary border-b border-border py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Tin tức <span className="text-primary">ô tô</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Cập nhật tin tức mới nhất về thế giới xe hơi cao cấp
            </p>
          </div>
        </section>

        {/* Featured Article */}
        <section className="py-12 border-b border-border">
          <div className="container mx-auto px-4">
            <Card className="overflow-hidden bg-card border-border">
              <div className="grid md:grid-cols-2 gap-0">
                <div className="relative aspect-video md:aspect-auto">
                  <img 
                    src={newsArticles[0].image} 
                    alt={newsArticles[0].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-primary text-primary-foreground rounded-full text-xs font-medium">
                    Nổi bật
                  </div>
                </div>
                <CardContent className="p-8 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 mb-4 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{newsArticles[0].date}</span>
                    <span>•</span>
                    <User className="h-4 w-4" />
                    <span>{newsArticles[0].author}</span>
                  </div>
                  <h2 className="text-3xl font-bold mb-4">{newsArticles[0].title}</h2>
                  <p className="text-muted-foreground mb-6">{newsArticles[0].excerpt}</p>
                  <Button className="w-fit">
                    Đọc thêm
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>
        </section>

        {/* News Grid */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsArticles.slice(1).map((article) => (
                <Card key={article.id} className="overflow-hidden bg-card border-border hover:border-primary/50 transition-all duration-300 group">
                  <div className="relative aspect-video overflow-hidden">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-secondary/90 backdrop-blur-sm rounded-full text-xs font-medium">
                      {article.category}
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                      <Calendar className="h-3 w-3" />
                      <span>{article.date}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
                      {article.excerpt}
                    </p>
                    <Button variant="ghost" size="sm" className="p-0 h-auto font-medium">
                      Đọc thêm
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Load More */}
            <div className="mt-12 text-center">
              <Button size="lg" variant="outline">
                Xem thêm tin tức
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TinTuc;
