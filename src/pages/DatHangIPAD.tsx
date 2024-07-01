import { FunctionComponent } from "react";
import styles from "./DatHangIPAD.module.css";

const DatHangIPAD: FunctionComponent = () => {
  return (
    <div className={styles.dathangIpad}>
      <div className={styles.frameParent}>
        <div className={styles.checkOutWrapper}>
          <b className={styles.checkOut}>CHECK OUT</b>
        </div>
        <div className={styles.thngTinThanhTonWrapper}>
          <b className={styles.checkOut}>Thông tin thanh toán</b>
        </div>
        <div className={styles.ghiChNHngTyChnParent}>
          <div className={styles.ghiChN}>Tên:</div>
          <div className={styles.instanceChild} />
        </div>
        <div className={styles.ghiChNHngTyChnParent}>
          <div className={styles.ghiChN}>Họ:</div>
          <div className={styles.instanceChild} />
        </div>
        <div className={styles.ghiChNHngTyChnParent}>
          <div className={styles.ghiChN}>Quốc gia:</div>
          <div className={styles.instanceChild} />
        </div>
        <div className={styles.ghiChNHngTyChnParent}>
          <div className={styles.ghiChN}>Địa chỉ:</div>
          <div className={styles.instanceChild} />
        </div>
        <div className={styles.ghiChNHngTyChnParent}>
          <div className={styles.ghiChN}>Tỉnh / Thành phố:</div>
          <div className={styles.instanceChild} />
        </div>
        <div className={styles.ghiChNHngTyChnParent}>
          <div className={styles.ghiChN}>Số điện thoại</div>
          <div className={styles.instanceChild} />
        </div>
        <div className={styles.ghiChNHngTyChnParent}>
          <div className={styles.ghiChN}>Địa chỉ email</div>
          <div className={styles.instanceChild} />
        </div>
        <div className={styles.thngTinThanhTonWrapper}>
          <b className={styles.checkOut}>Thông tin bổ sung</b>
        </div>
        <div className={styles.ghiChNHngTyChnParent}>
          <div className={styles.ghiChN}>Ghi chú đơn hàng (tùy chọn)</div>
          <div className={styles.instanceChild} />
        </div>
        <div className={styles.thngTinThanhTonWrapper}>
          <b className={styles.checkOut}>Đơn hàng của bạn</b>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.frameWrapper1}>
                <div className={styles.snPhmWrapper}>
                  <b className={styles.checkOut}>Sản phẩm</b>
                </div>
              </div>
              <div className={styles.frameWrapper2}>
                <div className={styles.giWrapper}>
                  <b className={styles.checkOut}>Giá</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.instanceWrapper}>
                <div className={styles.frameParent2}>
                  <div className={styles.macbookPro13InchM210CorWrapper}>
                    <div
                      className={styles.macbookPro13}
                    >{`MacBook Pro 13 inch M2 (10 core| 8GB RAM| 256GB SSD) `}</div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.muWrapper}>
                      <b className={styles.checkOut}>Màu:</b>
                    </div>
                    <div className={styles.xmWrapper}>
                      <div className={styles.checkOut}>Xám</div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.muWrapper}>
                      <b className={styles.checkOut}>Dung lượng:</b>
                    </div>
                    <div className={styles.xmWrapper}>
                      <div className={styles.checkOut}>8GB</div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.muWrapper}>
                      <b className={styles.checkOut}>Bộ nhớ:</b>
                    </div>
                    <div className={styles.xmWrapper}>
                      <div className={styles.checkOut}>256GB</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.wrapper}>
                  <div className={styles.checkOut}>29.690.000₫</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent1}>
              <div className={styles.instanceWrapper}>
                <div className={styles.frameParent2}>
                  <div className={styles.macbookPro13InchM210CorWrapper}>
                    <div
                      className={styles.macbookPro13}
                    >{`MacBook Pro 13 inch M2 (10 core| 8GB RAM| 256GB SSD) `}</div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.muWrapper}>
                      <b className={styles.checkOut}>Màu:</b>
                    </div>
                    <div className={styles.xmWrapper}>
                      <div className={styles.checkOut}>Xám</div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.muWrapper}>
                      <b className={styles.checkOut}>Dung lượng:</b>
                    </div>
                    <div className={styles.xmWrapper}>
                      <div className={styles.checkOut}>8GB</div>
                    </div>
                  </div>
                  <div className={styles.frameParent3}>
                    <div className={styles.muWrapper}>
                      <b className={styles.checkOut}>Bộ nhớ:</b>
                    </div>
                    <div className={styles.xmWrapper}>
                      <div className={styles.checkOut}>256GB</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameWrapper3}>
                <div className={styles.wrapper}>
                  <div className={styles.checkOut}>29.690.000₫</div>
                </div>
              </div>
            </div>
            <div className={styles.frameParent11}>
              <div className={styles.tngWrapper}>
                <b className={styles.checkOut}>{`Tổng: `}</b>
              </div>
              <div className={styles.frame}>
                <div className={styles.checkOut}>59.380.000₫</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.thngTinThanhTonWrapper}>
          <b className={styles.checkOut}>Chọn phương thức thanh toán</b>
        </div>
        <div className={styles.frameParent12}>
          <div className={styles.instanceParent}>
            <div className={styles.frameChild} />
            <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
            <b className={styles.checkOut}>Thanh toán khi nhận hàng</b>
          </div>
          <div className={styles.instanceParent}>
            <div className={styles.frameChild} />
            <img className={styles.image7Icon} alt="" src="/image-7@2x.png" />
            <b className={styles.checkOut}>Momo</b>
          </div>
          <div className={styles.instanceParent1}>
            <div className={styles.frameChild} />
            <img className={styles.image8Icon} alt="" src="/image-8@2x.png" />
            <b className={styles.checkOut}>Visa</b>
          </div>
        </div>
        <div className={styles.frameWrapper5}>
          <div className={styles.frameWrapper6}>
            <div className={styles.tHngWrapper}>
              <div className={styles.checkOut}>Đặt hàng</div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headingNewletter}>
        <div className={styles.categoryItemParent}>
          <div className={styles.categoryItem}>
            <div className={styles.footerThongTin}>
              <div className={styles.thngTinWrapper}>
                <b className={styles.checkOut}>Chính sách</b>
              </div>
              <div className={styles.thuCIMiParent}>
                <div className={styles.checkOut}>Thu cũ đổi mới</div>
                <div className={styles.checkOut}>Giao hàng</div>
                <div className={styles.checkOut}>Giao hàng (ZaloPay)</div>
                <div className={styles.checkOut}>{`Huỷ giao dịch `}</div>
                <div className={styles.checkOut}>Đổi trả</div>
                <div className={styles.checkOut}>Bảo hành</div>
                <div className={styles.checkOut}>Giải quyết khiếu nại</div>
                <div className={styles.checkOut}>Bảo mật thông tin</div>
              </div>
            </div>
            <div className={styles.footerThongTin}>
              <div className={styles.thngTinWrapper}>
                <b className={styles.checkOut}>Thông tin</b>
              </div>
              <div className={styles.thuCIMiParent}>
                <div className={styles.checkOut}>Tin tức</div>
                <div className={styles.checkOut}>Giới thiệu</div>
                <div className={styles.checkOut}>Phương thức thanh toán</div>
                <div className={styles.checkOut}>Bảo hành và sửa chữa</div>
                <div className={styles.nhGiCht}>
                  Đánh giá chẩt lượng, khiếu nại
                </div>
                <div className={styles.checkOut}>Tuyển dụng</div>
              </div>
            </div>
            <div className={styles.footerThongTin}>
              <div className={styles.thngTinWrapper}>
                <b className={styles.checkOut}>{`Địa chỉ & Liên hệ`}</b>
              </div>
              <div className={styles.thuCIMiParent}>
                <div className={styles.checkOut}>Tài khoản của tôi</div>
                <div className={styles.checkOut}>Đơn đặt hàng</div>
                <div className={styles.checkOut}>{`Hệ thống cửa hàng: `}</div>
                <div className={styles.checkOut}>Tìm Store trên Google Map</div>
                <div className={styles.checkOut}>
                  <span>{`Mua hàng: `}</span>
                  <span className={styles.span}>1900.6626</span>
                </div>
                <div className={styles.checkOut}>
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
      <div className={styles.dathangIpadInner}>
        <div className={styles.iconThinkParent}>
          <div className={styles.iconThink}>
            <div className={styles.checkOut}>Th!nk!</div>
          </div>
          <div className={styles.iconSearchParent}>
            <div className={styles.iconSearch}>
              <img className={styles.vectorIcon} alt="" src="/vector4.svg" />
            </div>
            <div className={styles.iconBag}>
              <img className={styles.vectorIcon1} alt="" src="/vector3.svg" />
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

export default DatHangIPAD;
