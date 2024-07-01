import { FunctionComponent } from "react";
import styles from "./NEWS.module.css";

const NEWS: FunctionComponent = () => {
  return (
    <div className={styles.news}>
      <div className={styles.image1Parent}>
        <img className={styles.image1Icon} alt="" src="/image-1@2x.png" />
        <div className={styles.vaQuaAppleRaMtCcTParent}>
          <div className={styles.vaQuaAppleContainer}>
            <p className={styles.vaQuaAppleRaMtCcT}>
              <span>
                Vừa qua, Apple đã ra mắt các tính năng phần mềm mới hỗ trợ cho
                nhận thức, thị giác, thính giác và khả năng vận động, cùng với
                các công cụ đột phá dành cho những người không nói được hoặc
                đang có nguy cơ mất đi khả năng nói. Những bản cập nhật này tập
                trung vào việc cải tiến phần cứng và phần mềm, bao gồm công nghệ
                máy học trên thiết bị để đảm bảo quyền riêng tư của người dùng,
                đồng thời mở rộng cam kết lâu dài của Apple trong việc tạo ra
                sản phẩm dành cho tất cả mọi người.
              </span>
            </p>
            <p className={styles.vaQuaAppleRaMtCcT}>
              <span>
                {`Apple cho biết, nhiều tính năng phần mềm hỗ trợ cho nhận thức, giọng nói và thị giác sẽ ra mắt vào cuối năm nay. Vì vậy, chắc chắn những tính năng này sẽ có mặt trên phiên bản `}
              </span>
              <a
                className={styles.ios17}
                href={`https://www.youtube.com/watch?v=Fb1OeeRBqTk&t=323s`}
                target="_blank"
              >
                <span>
                  <span className={styles.ios171}>iOS 17</span>
                </span>
              </a>
              <span>.</span>
            </p>
            <p className={styles.vaQuaAppleRaMtCcT}>
              <span>
                Apple đã cộng tác và làm việc chuyên sâu với các nhóm cộng đồng
                đa dạng đại diện cho người dùng khuyết tật để phát triển các
                tính năng trợ năng thật sự mang lại sức ảnh hưởng cho cuộc sống
                của mọi người. Người dùng có khiếm khuyết về mặt nhận thức có
                thể dùng iPhone và iPad dễ dàng, độc lập hơn nhờ tính năng Truy
                Cập Hỗ Trợ sắp ra mắt vào cuối năm nay; những người mất khả năng
                nói có thể nhập nội dung cần nói trong các cuộc gọi và cuộc hội
                thoại nhờ tính năng Lời Nói Trực Tiếp; và những người đang có
                nguy cơ mất khả năng nói có thể sử dụng tính năng Giọng Nói Cá
                Nhân để tạo ra một giọng nói điện tử giống giọng thật của họ để
                có thể trò chuyện với gia đình và bạn bè. Với những người dùng
                khiếm thị hay có thị lực kém, Chế Độ Phát Hiện trong ứng dụng
                Kính Lúp cung cấp tính năng Chỉ và Nói sẽ phát hiện văn bản mà
                người dùng chỉ vào và đọc to văn bản đó để giúp họ tương tác với
                các vật thể, ví dụ như thiết bị gia dụng.
              </span>
            </p>
            <p className={styles.vaQuaAppleRaMtCcT}>
              <b className={styles.tnhNngTruy}>
                Tính năng Truy cập hỗ trợ sẽ hỗ trợ người dùng khiếm khuyết về
                nhận thức
              </b>
            </p>
            <p className={styles.vaQuaAppleRaMtCcT}>
              <span className={styles.tnhNngTruy}>
                Tính năng Truy Cập Hỗ Trợ có nhiều đổi mới trong thiết kế, giúp
                chắt lọc những tính năng thiết yếu từ các ứng dụng và trải
                nghiệm, nhờ đó giảm khối lượng nhận thức. Tính năng này phản ánh
                ý kiến phản hồi của những người khiếm khuyết về mặt nhận thức và
                người hỗ trợ tin cậy của họ, tập trung vào các hoạt động mà họ
                yêu thích, và cũng là nền tảng của iPhone và iPad: kết nối với
                những người họ yêu quý, chụp và thưởng thức ảnh, cũng như nghe
                nhạc.
              </span>
            </p>
          </div>
          <img className={styles.image2Icon} alt="" src="/image-2@2x.png" />
          <div className={styles.vaQuaAppleContainer}>
            <p className={styles.vaQuaAppleRaMtCcT}>
              Tính năng Truy Cập Hỗ Trợ bao gồm trải nghiệm tùy chỉnh cho ứng
              dụng Điện Thoại và FaceTime, nay đã được kết hợp lại thành ứng
              dụng Điện Thoại, cũng như Tin Nhắn, Camera, Ảnh và Nhạc. Tính năng
              này cung cấp giao diện rõ ràng với các nút có độ tương phản cao và
              nhãn có cỡ chữ lớn hơn, cũng như các công cụ giúp người hỗ trợ tin
              cậy tùy chỉnh trải nghiệm dành cho người mà họ hỗ trợ. Ví dụ: với
              người dùng thích giao tiếp có hình ảnh, ứng dụng Tin Nhắn có bàn
              phím chỉ có biểu tượng và tùy chọn quay tin nhắn video để gửi cho
              những người họ yêu quý. Người dùng cũng như người hỗ trợ tin cậy
              có thể lựa chọn giữa bố cục lưới có nhiều hình ảnh hơn dành cho
              Màn Hình Chính và ứng dụng, hoặc chọn bố cục hàng nếu thích văn
              bản hơn.
            </p>
          </div>
        </div>
        <img className={styles.image3Icon} alt="" src="/image-3@2x.png" />
        <div className={styles.nhTnhNngContainer}>
          <p className={styles.vaQuaAppleRaMtCcT}>
            Nhờ tính năng Truy Cập Hỗ Trợ trên iPhone, người dùng có thể lựa
            chọn giữa bố cục lưới có nhiều hình ảnh hơn dành cho Màn Hình Chính
            và ứng dụng, hoặc chọn bố cục hàng nếu thích văn bản hơn.
          </p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <div className={styles.vaQuaAppleContainer}>
          <p className={styles.vaQuaAppleRaMtCcT}>
            <b>Tính năng Lời nói trực tiếp và Giọng nói cá nhân</b>
          </p>
          <p className={styles.vaQuaAppleRaMtCcT}>
            Nhờ tính năng Lời Nói Trực Tiếp trên iPhone, iPad và máy Mac, người
            dùng có thể nhập nội dung họ muốn nói để máy đọc to nội dung đó
            trong các cuộc gọi điện thoại và cuộc gọi FaceTime cũng như trong
            các cuộc hội thoại trực tiếp. Người dùng cũng có thể lưu những cụm
            từ thường dùng để đọc nhanh, giúp các cuộc hội thoại với gia đình,
            bạn bè và đồng nghiệp trở nên sống động hơn. Tính năng Lời Nói Trực
            Tiếp được thiết kế để hỗ trợ hàng triệu người không nói được hoặc đã
            mất khả năng nói trên toàn cầu.
          </p>
        </div>
        <div className={styles.image4Parent}>
          <img className={styles.image4Icon} alt="" src="/image-4@2x.png" />
          <img className={styles.image4Icon} alt="" src="/image-5@2x.png" />
        </div>
        <div className={styles.vaQuaAppleContainer}>
          <p className={styles.vaQuaAppleRaMtCcT}>
            Với người dùng có nguy cơ mất khả năng nói, ví dụ như những người
            mới bị chẩn đoán mắc ALS (hội chứng xơ cứng teo cơ một bên) hay các
            bệnh khác có thể dần ảnh hưởng đến khả năng nói, tính năng Giọng Nói
            Cá Nhân là một cách đơn giản và an toàn để tạo ra giọng nói giống
            giọng thật của họ.
          </p>
        </div>
        <img className={styles.image6Icon} alt="" src="/image-6@2x.png" />
        <div className={styles.vaQuaAppleContainer}>
          <p className={styles.vaQuaAppleRaMtCcT}>
            Người dùng có thể tạo ra Giọng Nói Cá Nhân bằng cách đọc to một
            chuỗi văn bản gợi ý ngẫu nhiên để ghi âm trong 15 phút trên iPhone
            hoặc iPad. Tính năng trợ năng về giọng nói này sử dụng công nghệ máy
            học trên thiết bị để bảo vệ quyền riêng tư và an toàn cho thông tin
            của người dùng, đồng thời tích hợp liền mạch với tính năng Lời Nói
            Trực Tiếp để người dùng có thể nói bằng Giọng Nói Cá Nhân khi trò
            chuyện với những người họ yêu quý.
          </p>
          <p className={styles.vaQuaAppleRaMtCcT}>
            <b>Chế độ phát hiện trong ứng dụng Kính lúp ra mắt</b>
          </p>
          <p className={styles.vaQuaAppleRaMtCcT}>
            Tính năng Chỉ và Nói trong ứng dụng Kính Lúp giúp người dùng khiếm
            khuyết về thị lực dễ dàng tương tác với các vật thể có nhiều nhãn
            văn bản. Ví dụ, khi dùng một thiết bị gia dụng, như lò vi sóng, tính
            năng Chỉ và Nói kết hợp thông tin đầu vào từ camera, Máy Quét LiDAR
            và công nghệ máy học trên thiết bị để đọc văn bản trên từng nút khi
            người dùng di chuyển ngón tay trên bàn phím. Tính năng Chỉ và Nói
            được tích hợp trong ứng dụng Kính Lúp trên iPhone và iPad, kết hợp
            ăn ý với tính năng VoiceOver, và có thể sử dụng cùng với các tính
            năng khác của ứng dụng Kính Lúp như Phát Hiện Người, Phát Hiện Cửa
            và Mô Tả Hình Ảnh để giúp người dùng nhận biết không gian quanh họ.
          </p>
          <p className={styles.vaQuaAppleRaMtCcT}>
            <b>Các tính năng khác</b>
          </p>
          <ul className={styles.ngiDngKhimThnhHocTh}>
            <li className={styles.khuLnhBSungGiPhin}>
              <span>
                Người dùng khiếm thính hoặc thính lực yếu có thể ghép đôi trực
                tiếp các
              </span>
              <b className={styles.tnhNngTruy}>
                {" "}
                thiết bị trợ thính Made for iPhone
              </b>
              <span className={styles.tnhNngTruy}>
                {" "}
                với máy Mac và tùy chỉnh thiết bị để phù hợp với thính lực của
                mình.
              </span>
            </li>
            <li className={styles.khuLnhBSungGiPhin}>
              <b className={styles.tnhNngTruy}>Khẩu Lệnh</b>
              <span
                className={styles.tnhNngTruy}
              >{` bổ sung gợi ý phiên âm khi chỉnh sửa văn bản, giúp người dùng nhập văn bản bằng giọng nói có thể chọn từ chính xác trong các từ đồng âm, ví dụ như “do,” “due,” và “dew.”4 Ngoài ra, nhờ `}</span>
              <b className={styles.tnhNngTruy}>Hướng Dẫn Khẩu Lệnh</b>
              <span className={styles.tnhNngTruy}>
                , người dùng có thể tìm hiểu những mẹo về việc sử dụng lệnh bằng
                giọng nói thay cho thao tác chạm và gõ phím trên iPhone, iPad,
                máy Mac.
              </span>
            </li>
            <li className={styles.khuLnhBSungGiPhin}>
              <span
                className={styles.tnhNngTruy}
              >{`Người dùng khuyết tật về mặt thể chất và vận động đang sử dụng tính năng `}</span>
              <b className={styles.tnhNngTruy}>Điều Khiển Công Tắc</b>
              <span className={styles.tnhNngTruy}>
                {" "}
                có thể biến bất kỳ công tắc nào thành bộ điều khiển trò chơi ảo
                để chơi trò chơi mình thích trên iPhone và iPad.
              </span>
            </li>
            <li className={styles.khuLnhBSungGiPhin}>
              <span className={styles.tnhNngTruy}>
                Với người dùng có thị lực yếu, tính năng
              </span>
              <b className={styles.tnhNngTruy}>{` Cỡ Chữ `}</b>
              <span className={styles.tnhNngTruy}>
                nay đã dễ điều chỉnh hơn trên các ứng dụng của máy Mac như
                Finder, Tin Nhắn, Mail, Lịch và Ghi Chú.
              </span>
            </li>
            <li className={styles.khuLnhBSungGiPhin}>
              <span
                className={styles.tnhNngTruy}
              >{`Người dùng nhạy cảm với các hoạt ảnh nhanh có thể tự động `}</span>
              <b className={styles.tnhNngTruy}>{`tạm dừng hình ảnh `}</b>
              <span className={styles.tnhNngTruy}>
                có thành phần chuyển động, ví dụ như ảnh GIF, trong ứng dụng Tin
                Nhắn và Safari.
              </span>
            </li>
            <li className={styles.khuLnhBSungGiPhin}>
              <span
                className={styles.tnhNngTruy}
              >{`Dành cho người dùng `}</span>
              <b className={styles.tnhNngTruy}>VoiceOver</b>
              <span className={styles.tnhNngTruy}>
                , giọng nói của Siri vẫn mang lại cảm giác tự nhiên và truyền
                cảm ngay cả khi tốc độ phản hồi lời nói cao; người dùng cũng có
                thể tùy chỉnh tốc độ mà Siri nói chuyện với họ, với các tùy chọn
                từ 0,8x đến 2x.
              </span>
            </li>
          </ul>
          <p className={styles.vaQuaAppleRaMtCcT}>&nbsp;</p>
          <p className={styles.blankLine}>&nbsp;</p>
        </div>
        <img
          className={styles.screenshot20230521At1336}
          alt=""
          src="/screenshot-20230521-at-1336-1@2x.png"
        />
      </div>
      <div className={styles.headingNewletter}>
        <div className={styles.categoryItemParent}>
          <div className={styles.categoryItem}>
            <div className={styles.footerThongTin}>
              <div className={styles.thngTinWrapper}>
                <b className={styles.thngTin}>Chính sách</b>
              </div>
              <div className={styles.thuCIMiParent}>
                <div className={styles.thngTin}>Thu cũ đổi mới</div>
                <div className={styles.thngTin}>Giao hàng</div>
                <div className={styles.thngTin}>Giao hàng (ZaloPay)</div>
                <div className={styles.thngTin}>{`Huỷ giao dịch `}</div>
                <div className={styles.thngTin}>Đổi trả</div>
                <div className={styles.thngTin}>Bảo hành</div>
                <div className={styles.thngTin}>Giải quyết khiếu nại</div>
                <div className={styles.thngTin}>Bảo mật thông tin</div>
              </div>
            </div>
            <div className={styles.footerThongTin}>
              <div className={styles.thngTinWrapper}>
                <b className={styles.thngTin}>Thông tin</b>
              </div>
              <div className={styles.thuCIMiParent}>
                <div className={styles.thngTin}>Tin tức</div>
                <div className={styles.thngTin}>Giới thiệu</div>
                <div className={styles.thngTin}>Phương thức thanh toán</div>
                <div className={styles.thngTin}>Bảo hành và sửa chữa</div>
                <div className={styles.nhGiCht}>
                  Đánh giá chẩt lượng, khiếu nại
                </div>
                <div className={styles.thngTin}>Tuyển dụng</div>
              </div>
            </div>
            <div className={styles.footerThongTin}>
              <div className={styles.thngTinWrapper}>
                <b className={styles.thngTin}>{`Địa chỉ & Liên hệ`}</b>
              </div>
              <div className={styles.thuCIMiParent}>
                <div className={styles.thngTin}>Tài khoản của tôi</div>
                <div className={styles.thngTin}>Đơn đặt hàng</div>
                <div className={styles.thngTin}>{`Hệ thống cửa hàng: `}</div>
                <div className={styles.thngTin}>Tìm Store trên Google Map</div>
                <div className={styles.thngTin}>
                  <span>{`Mua hàng: `}</span>
                  <span className={styles.span}>1900.6626</span>
                </div>
                <div className={styles.thngTin}>
                  <p className={styles.blankLine}>&nbsp;</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.cngTyCPhnHesmanVitNaWrapper}>
            <div className={styles.cngTyCContainer}>
              <p
                className={styles.blankLine}
              >{`© 2016 Công ty Cổ Phần HESMAN Việt Nam GPDKKD: 0107465657 do Sở KH & ĐT TP. Hà Nội cấp ngày 08/06/2016.`}</p>
              <p className={styles.blankLine}>
                Địa chỉ: Số 76 Thái Hà, phường Trung Liệt, quận Đống Đa, thành
                phố Hà Nội, Việt Nam
              </p>
              <p className={styles.blankLine}>
                Tổng giám đốc: Trần Đức Lương | ĐT: 0247.305.9999 | Email:
                lienhe@think.com
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.component6}>
        <div className={styles.iconThinkParent}>
          <div className={styles.iconThink}>
            <div className={styles.thngTin}>Th!nk!</div>
          </div>
          <div className={styles.iconMac}>
            <div className={styles.thngTin}>Mac</div>
          </div>
          <div className={styles.iconLaptop}>
            <div className={styles.thngTin}>Laptop</div>
          </div>
          <div className={styles.iconLaptop}>
            <div className={styles.thngTin}>Phụ kiện</div>
          </div>
          <div className={styles.iconLaptop}>
            <div className={styles.thngTin}>Tin tức</div>
          </div>
          <div className={styles.btnSearch}>
            <img className={styles.vectorIcon} alt="" src="/vector2.svg" />
          </div>
          <div className={styles.btnBag}>
            <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default NEWS;
