import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ChiTietSanPhamIPAD.module.css";

const ChiTietSanPhamIPAD: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/dathang-ipad");
  }, [navigate]);

  return (
    <div className={styles.chiTietSanPhamIpad}>
      <div className={styles.instanceParent}>
        <div className={styles.instanceGroup}>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <img
                className={styles.frameChild}
                alt=""
                src="/frame-91@2x.png"
              />
            </div>
            <div className={styles.frameGroup}>
              <div className={styles.instanceWrapper}>
                <div className={styles.instanceContainer}>
                  <div className={styles.frameContainer}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/frame-93@2x.png"
                    />
                  </div>
                  <div className={styles.frameContainer}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/frame-931@2x.png"
                    />
                  </div>
                  <div className={styles.frameContainer}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/frame-932@2x.png"
                    />
                  </div>
                  <div className={styles.frameContainer}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/frame-933@2x.png"
                    />
                  </div>
                  <div className={styles.frameContainer}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/frame-934@2x.png"
                    />
                  </div>
                  <div className={styles.frameContainer}>
                    <img
                      className={styles.frameChild}
                      alt=""
                      src="/frame-935@2x.png"
                    />
                  </div>
                </div>
              </div>
              <img className={styles.frameIcon1} alt="" src="/frame5.svg" />
            </div>
          </div>
          <div className={styles.frameParent1}>
            <div className={styles.macbookAirM120208gbRamWrapper}>
              <b className={styles.cngTyCContainer}>
                MacBook Air M1 2020 (8GB RAM | 256GB SSD)
              </b>
            </div>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector7.svg" />
              <img className={styles.vectorIcon} alt="" src="/vector8.svg" />
            </div>
            <div className={styles.frameParent2}>
              <div className={styles.wrapper}>
                <b className={styles.b}>18.590.000₫</b>
              </div>
              <div className={styles.container}>
                <b className={styles.b1}>28.990.000₫</b>
              </div>
            </div>
            <div className={styles.frameParent3}>
              <div className={styles.wrapper}>
                <div className={styles.b}>Màu sắc</div>
              </div>
              <div className={styles.component15Parent}>
                <img
                  className={styles.component15Icon}
                  alt=""
                  src="/component-15.svg"
                />
                <img
                  className={styles.component16Icon}
                  alt=""
                  src="/component-16.svg"
                />
                <img
                  className={styles.component16Icon}
                  alt=""
                  src="/component-18.svg"
                />
                <img
                  className={styles.component16Icon}
                  alt=""
                  src="/component-17.svg"
                />
              </div>
            </div>
            <div className={styles.frameParent4}>
              <div className={styles.frameParent5}>
                <img className={styles.frameIcon2} alt="" src="/frame6.svg" />
                <b className={styles.b}>Ưu đãi</b>
              </div>
              <div className={styles.uICQuynThng52023Parent}>
                <div className={styles.b}>Ưu đãi đặc quyền tháng 5/2023</div>
                <div className={styles.tngGiMicrosoftContainer}>
                  <span>●</span>
                  <span className={styles.tngGiMicrosoft}>
                    {" "}
                    Tặng gói Microsoft Office 365 Personal trị giá 1.490.000đ
                    cho khách hàng đang là học sinh , sinh viên (SL có hạn)
                  </span>
                </div>
              </div>
            </div>
            <div className={styles.frameParent6}>
              <div
                className={styles.muaNgayWrapper}
                onClick={onFrameContainerClick}
              >
                <b className={styles.b}>MUA NGAY</b>
              </div>
              <div className={styles.thmVoGiHngWrapper}>
                <b className={styles.b}>Thêm vào giở hàng</b>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.macbookAirM1LMyTnhXcWrapper}>
          <div className={styles.macbookAirM1Container}>
            <p className={styles.macbookAirM1LMyTnhXc}>
              <b className={styles.macbookAirM11}>{`MacBook Air M1 `}</b>
              <span>
                Là máy tính xách tay mỏng và nhẹ nhất của Apple – nay thay đổi
                ngoạn mục với chip Apple M1 mạnh mẽ. Tạo ra một cú nhảy vọt về
                hiệu năng CPU và đồ họa, cùng thời lượng pin lên đến 18 giờ.
              </span>
            </p>
            <p className={styles.macbookAirM1LMyTnhXc}>
              <b>Tính năng nổi bật</b>
            </p>
            <ul className={styles.chipM1DoAppleThitKTo}>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  Chip M1 do Apple thiết kế tạo ra một cú nhảy vọt về hiệu năng
                  máy học, CPU và GPU
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  Tăng thời gian sử dụng với thời lượng pin lên đến 18 giờ
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  CPU 8 lõi cho tốc độ nhanh hơn đến 3.5x, xử lý công việc nhanh
                  chóng hơn bao giờ hết
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  GPU lên đến 8 lõi với tốc độ xử lý đồ họa nhanh hơn đến 5x cho
                  các ứng dụng và game đồ họa khủng
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>Neural Engine 16 lõi cho công nghệ máy học hiện đại</span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  Bộ nhớ thống nhất 8GB giúp bạn làm việc gì cũng nhanh chóng và
                  trôi chảy
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  Ổ lưu trữ SSD siêu nhanh giúp mở các ứng dụng và tập tin chỉ
                  trong tích tắc
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  Thiết kế không quạt giảm tối đa tiếng ồn khi sử dụng
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  Màn hình Retina 13.3 inch với dải màu rộng P3 cho hình ảnh
                  sống động và chi tiết ấn tượng
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  Camera FaceTime HD với bộ xử lý tín hiệu hình ảnh tiên tiến
                  cho các cuộc gọi video đẹp hình, rõ tiếng hơn
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  Bộ ba micro phối hợp tập trung thu giọng nói của bạn, không
                  thu tạp âm môi trường
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>Wi-Fi 6 thế hệ mới giúp kết nối nhanh hơn</span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  Hai cổng Thunderbolt / USB 4 để sạc và kết nối phụ kiện
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  Bàn phím Magic Keyboard có đèn nền và Touch ID giúp mở khóa và
                  thanh toán an toàn hơn
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>
                  macOS Big Sur với thiết kế mới đầy táo bạo cùng nhiều cập nhật
                  quan trọng cho các ứng dụng Safari, Messages và Maps
                </span>
              </li>
              <li className={styles.tngThiGianSDngViTh}>
                <span>Hiện có màu vàng kim, xám bạc và bạc</span>
              </li>
            </ul>
            <p className={styles.macbookAirM1LMyTnhXc}>
              <b>Bộ sản phẩm bao gồm</b>
            </p>
            <p className={styles.macbookAirM1LMyTnhXc}>
              MacBook. Dây sạc. HDSD bảo hành điện tử 12 tháng
            </p>
            <p className={styles.macbookAirM1LMyTnhXc}>
              <b>Các thông tin Apple đảm bảo ( Pháp lý )</b>
            </p>
            <p className={styles.macbookAirM1LMyTnhXc}>
              Hiện có sẵn các lựa chọn để nâng cấp.
            </p>
            <p className={styles.macbookAirM1LMyTnhXc}>
              Thời lượng pin khác nhau tùy theo cách sử dụng và cấu hình. Truy
              cập apple.com/batteries để biết thêm thông tin. So với thế hệ máy
              trước. Kích thước màn hình tính theo đường chéo.
            </p>
          </div>
        </div>
      </div>
      <div className={styles.headingNewletter}>
        <div className={styles.categoryItemParent}>
          <div className={styles.categoryItem}>
            <div className={styles.footerThongTin}>
              <div className={styles.thngTinWrapper}>
                <b className={styles.b}>Chính sách</b>
              </div>
              <div className={styles.thuCIMiParent}>
                <div className={styles.b}>Thu cũ đổi mới</div>
                <div className={styles.b}>Giao hàng</div>
                <div className={styles.b}>Giao hàng (ZaloPay)</div>
                <div className={styles.b}>{`Huỷ giao dịch `}</div>
                <div className={styles.b}>Đổi trả</div>
                <div className={styles.b}>Bảo hành</div>
                <div className={styles.b}>Giải quyết khiếu nại</div>
                <div className={styles.b}>Bảo mật thông tin</div>
              </div>
            </div>
            <div className={styles.footerThongTin}>
              <div className={styles.thngTinWrapper}>
                <b className={styles.b}>Thông tin</b>
              </div>
              <div className={styles.thuCIMiParent}>
                <div className={styles.b}>Tin tức</div>
                <div className={styles.b}>Giới thiệu</div>
                <div className={styles.b}>Phương thức thanh toán</div>
                <div className={styles.b}>Bảo hành và sửa chữa</div>
                <div className={styles.nhGiCht}>
                  Đánh giá chẩt lượng, khiếu nại
                </div>
                <div className={styles.b}>Tuyển dụng</div>
              </div>
            </div>
            <div className={styles.footerThongTin}>
              <div className={styles.thngTinWrapper}>
                <b className={styles.b}>{`Địa chỉ & Liên hệ`}</b>
              </div>
              <div className={styles.thuCIMiParent}>
                <div className={styles.b}>Tài khoản của tôi</div>
                <div className={styles.b}>Đơn đặt hàng</div>
                <div className={styles.b}>{`Hệ thống cửa hàng: `}</div>
                <div className={styles.b}>Tìm Store trên Google Map</div>
                <div className={styles.b}>
                  <span>{`Mua hàng: `}</span>
                  <span className={styles.span}>1900.6626</span>
                </div>
                <div className={styles.b}>
                  <p className={styles.macbookAirM1LMyTnhXc}>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cngTyCPhnHesmanVitNaWrapper}>
            <div className={styles.cngTyCContainer}>
              <p
                className={styles.macbookAirM1LMyTnhXc}
              >{`© 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH & ĐT TP. Hà Nội cấp ngày 08/06/2016.`}</p>
              <p className={styles.macbookAirM1LMyTnhXc}>
                Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành
                phố Hà Nội, Việt Nam
              </p>
              <p className={styles.macbookAirM1LMyTnhXc}>
                Tổng giám đốc: Trần Đức Lương | ĐT: 0247.305.9999 | Email:
                lienhe@think.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.chiTietSanPhamIpadInner}>
        <div className={styles.iconThinkParent}>
          <div className={styles.iconThink}>
            <div className={styles.b}>Th!nk!</div>
          </div>
          <div className={styles.iconSearchParent}>
            <div className={styles.iconSearch}>
              <img className={styles.vectorIcon5} alt="" src="/vector4.svg" />
            </div>
            <div className={styles.iconBag}>
              <img className={styles.vectorIcon6} alt="" src="/vector3.svg" />
            </div>
            <img
              className={styles.iconNavigation}
              alt=""
              src="/icon-navigation.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChiTietSanPhamIPAD;
