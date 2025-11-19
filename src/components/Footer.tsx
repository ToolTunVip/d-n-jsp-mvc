import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/logo-v2.svg";

const Footer = () => {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <img src={logo} alt="ToolTun Car" className="h-12 w-auto mb-4" />
            <p className="text-sm text-muted-foreground mb-4">
              Showroom xe hơi cao cấp hàng đầu Việt Nam. Chuyên cung cấp các dòng xe sang nhập khẩu chính hãng.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên kết nhanh</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Trang chủ
                </Link>
              </li>
              <li>
                <Link to="/san-pham" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sản phẩm
                </Link>
              </li>
              <li>
                <Link to="/dich-vu" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dịch vụ
                </Link>
              </li>
              <li>
                <Link to="/tin-tuc" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Tin tức
                </Link>
              </li>
              <li>
                <Link to="/lien-he" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Liên hệ
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Dịch vụ</h3>
            <ul className="space-y-2">
              <li className="text-sm text-muted-foreground">Mua bán xe cao cấp</li>
              <li className="text-sm text-muted-foreground">Tư vấn chuyên nghiệp</li>
              <li className="text-sm text-muted-foreground">Bảo dưỡng định kỳ</li>
              <li className="text-sm text-muted-foreground">Hỗ trợ tài chính</li>
              <li className="text-sm text-muted-foreground">Đăng kiểm xe</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Liên hệ</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3 text-sm text-muted-foreground">
                <MapPin className="h-5 w-5 flex-shrink-0 mt-0.5" />
                <span>123 Đường Nguyễn Huệ, Quận 1, TP. Hồ Chí Minh</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Phone className="h-5 w-5 flex-shrink-0" />
                <span>0901 234 567</span>
              </li>
              <li className="flex items-center gap-3 text-sm text-muted-foreground">
                <Mail className="h-5 w-5 flex-shrink-0" />
                <span>info@tooltuncar.vn</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; 2024 ToolTun Car. Bản quyền thuộc về chúng tôi.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
