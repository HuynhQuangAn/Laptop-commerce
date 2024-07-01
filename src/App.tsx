import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import WEB from "./pages/WEB";
import IPAD from "./pages/IPAD";
import MAC from "./pages/MAC";
import MACIPAD from "./pages/MACIPAD";
import PhuKien from "./pages/PhuKien";
import PhuKienIPAD from "./pages/PhuKienIPAD";
import Tintuc from "./pages/Tintuc";
import TintucIPAD from "./pages/TintucIPAD";
import GioHang from "./pages/GioHang";
import GioHangIPAD from "./pages/GioHangIPAD";
import ChiTietSanPham from "./pages/ChiTietSanPham";
import ChiTietSanPhamIPAD from "./pages/ChiTietSanPhamIPAD";
import NEWS from "./pages/NEWS";
import NEWSIPAD from "./pages/NEWSIPAD";
import DatHang from "./pages/DatHang";
import DatHangIPAD from "./pages/DatHangIPAD";
import Laptop from "./pages/Laptop";
import LaptopIPAD from "./pages/LaptopIPAD";
import WEB1 from "./pages/WEB1";
import Frame from "./pages/Frame";
import Frame1 from "./pages/Frame1";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/ipad":
        title = "";
        metaDescription = "";
        break;
      case "/mac":
        title = "";
        metaDescription = "";
        break;
      case "/mac-ipad":
        title = "";
        metaDescription = "";
        break;
      case "/phukien":
        title = "";
        metaDescription = "";
        break;
      case "/phukien-ipad":
        title = "";
        metaDescription = "";
        break;
      case "/tintuc":
        title = "";
        metaDescription = "";
        break;
      case "/tintuc-ipad":
        title = "";
        metaDescription = "";
        break;
      case "/gio-hang":
        title = "";
        metaDescription = "";
        break;
      case "/gio-hang-ipad":
        title = "";
        metaDescription = "";
        break;
      case "/chi-tiet-san-pham":
        title = "";
        metaDescription = "";
        break;
      case "/chi-tiet-san-pham-ipad":
        title = "";
        metaDescription = "";
        break;
      case "/news":
        title = "";
        metaDescription = "";
        break;
      case "/news-ipad":
        title = "";
        metaDescription = "";
        break;
      case "/dathang":
        title = "";
        metaDescription = "";
        break;
      case "/dathang-ipad":
        title = "";
        metaDescription = "";
        break;
      case "/laptop":
        title = "";
        metaDescription = "";
        break;
      case "/laptop-ipad":
        title = "";
        metaDescription = "";
        break;
      case "/web-2":
        title = "";
        metaDescription = "";
        break;
      case "/frame-145":
        title = "";
        metaDescription = "";
        break;
      case "/frame-185":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag: HTMLMetaElement | null = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<WEB />} />
      <Route path="/ipad" element={<IPAD />} />
      <Route path="/mac" element={<MAC />} />
      <Route path="/mac-ipad" element={<MACIPAD />} />
      <Route path="/phukien" element={<PhuKien />} />
      <Route path="/phukien-ipad" element={<PhuKienIPAD />} />
      <Route path="/tintuc" element={<Tintuc />} />
      <Route path="/tintuc-ipad" element={<TintucIPAD />} />
      <Route path="/gio-hang" element={<GioHang />} />
      <Route path="/gio-hang-ipad" element={<GioHangIPAD />} />
      <Route path="/chi-tiet-san-pham" element={<ChiTietSanPham />} />
      <Route path="/chi-tiet-san-pham-ipad" element={<ChiTietSanPhamIPAD />} />
      <Route path="/news" element={<NEWS />} />
      <Route path="/news-ipad" element={<NEWSIPAD />} />
      <Route path="/dathang" element={<DatHang />} />
      <Route path="/dathang-ipad" element={<DatHangIPAD />} />
      <Route path="/laptop" element={<Laptop />} />
      <Route path="/laptop-ipad" element={<LaptopIPAD />} />
      <Route path="/web-2" element={<WEB1 />} />
      <Route path="/frame-145" element={<Frame />} />
      <Route path="/frame-185" element={<Frame1 />} />
    </Routes>
  );
}
export default App;
