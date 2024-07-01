import { FunctionComponent } from "react";
import styles from "./MAC.module.css";

const MAC: FunctionComponent = () => {
  return (
    <div className={styles.mac}>
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
      <div className={styles.itemList}>
        <div className={styles.categoryGrid}>
          <div className={styles.categoryGrid1}>
            <div className={styles.itemGrid}>
              <b className={styles.ttC}>Tất cả</b>
              <div className={styles.thngTin}>MacBook Pro</div>
              <div className={styles.thngTin}>Macbook Air</div>
              <div className={styles.thngTin}>iMac</div>
              <div className={styles.thngTin}>Mac Mini</div>
            </div>
            <div className={styles.categoryGridInner}>
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector.svg" />
                <div className={styles.thngTin}>Lọc</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.categoryItem1}>
          <div className={styles.macWrapper}>
            <b className={styles.thngTin}>Mac</b>
          </div>
          <div className={styles.itemGrid1}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-30@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    <p className={styles.blankLine}>
                      MacBook Air M1 2020 (8GB RAM | 256GB SSD)
                    </p>
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>
                    <p className={styles.blankLine}>18.590.000₫</p>
                  </b>
                  <b className={styles.b1}>
                    <p className={styles.blankLine}>28.990.000₫</p>
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-301@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    MacBook Air M2 2022 (8GB RAM | 256GB SSD)
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>27.590.000₫</b>
                  <b className={styles.b1}>32.990.000₫</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-302@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b
                    className={styles.macbookAirM1Container}
                  >{`MacBook Pro 13 inch M2 (10 core| 8GB RAM| 256GB SSD) `}</b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>29.690.000₫</b>
                  <b className={styles.b1}>35.990.000₫</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-303@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    MacBook Pro 14 inch M2 Pro (16 Core| 16GB| 512GB)
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>47.550.000₫</b>
                  <b className={styles.b1}>55.000.000₫</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.categoryItemInner}>
            <div className={styles.xemTtCPhKinParent}>
              <div className={styles.thngTin}>Xem tất cả Mac</div>
              <img className={styles.frameIcon1} alt="" src="/frame.svg" />
            </div>
          </div>
        </div>
        <div className={styles.categoryItem2}>
          <div className={styles.macWrapper}>
            <b className={styles.thngTin}>Mac</b>
          </div>
          <div className={styles.itemGrid1}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-30@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    <p className={styles.blankLine}>
                      MacBook Air M1 2020 (8GB RAM | 256GB SSD)
                    </p>
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>
                    <p className={styles.blankLine}>18.590.000₫</p>
                  </b>
                  <b className={styles.b1}>
                    <p className={styles.blankLine}>28.990.000₫</p>
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-301@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    MacBook Air M2 2022 (8GB RAM | 256GB SSD)
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>27.590.000₫</b>
                  <b className={styles.b1}>32.990.000₫</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-302@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b
                    className={styles.macbookAirM1Container}
                  >{`MacBook Pro 13 inch M2 (10 core| 8GB RAM| 256GB SSD) `}</b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>29.690.000₫</b>
                  <b className={styles.b1}>35.990.000₫</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-303@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    MacBook Pro 14 inch M2 Pro (16 Core| 16GB| 512GB)
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>47.550.000₫</b>
                  <b className={styles.b1}>55.000.000₫</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.categoryItemInner}>
            <div className={styles.xemTtCPhKinParent}>
              <div className={styles.thngTin}>Xem tất cả Mac</div>
              <img className={styles.frameIcon1} alt="" src="/frame.svg" />
            </div>
          </div>
        </div>
        <div className={styles.categoryItem2}>
          <div className={styles.macWrapper}>
            <b className={styles.thngTin}>Mac</b>
          </div>
          <div className={styles.itemGrid1}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-30@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    <p className={styles.blankLine}>
                      MacBook Air M1 2020 (8GB RAM | 256GB SSD)
                    </p>
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>
                    <p className={styles.blankLine}>18.590.000₫</p>
                  </b>
                  <b className={styles.b1}>
                    <p className={styles.blankLine}>28.990.000₫</p>
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-301@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    MacBook Air M2 2022 (8GB RAM | 256GB SSD)
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>27.590.000₫</b>
                  <b className={styles.b1}>32.990.000₫</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-302@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b
                    className={styles.macbookAirM1Container}
                  >{`MacBook Pro 13 inch M2 (10 core| 8GB RAM| 256GB SSD) `}</b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>29.690.000₫</b>
                  <b className={styles.b1}>35.990.000₫</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-303@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    MacBook Pro 14 inch M2 Pro (16 Core| 16GB| 512GB)
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>47.550.000₫</b>
                  <b className={styles.b1}>55.000.000₫</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.categoryItemInner}>
            <div className={styles.xemTtCPhKinParent}>
              <div className={styles.thngTin}>Xem tất cả Mac</div>
              <img className={styles.frameIcon1} alt="" src="/frame.svg" />
            </div>
          </div>
        </div>
        <div className={styles.categoryItem2}>
          <div className={styles.macWrapper}>
            <b className={styles.thngTin}>Mac</b>
          </div>
          <div className={styles.itemGrid1}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-30@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    <p className={styles.blankLine}>
                      MacBook Air M1 2020 (8GB RAM | 256GB SSD)
                    </p>
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>
                    <p className={styles.blankLine}>18.590.000₫</p>
                  </b>
                  <b className={styles.b1}>
                    <p className={styles.blankLine}>28.990.000₫</p>
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-301@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    MacBook Air M2 2022 (8GB RAM | 256GB SSD)
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>27.590.000₫</b>
                  <b className={styles.b1}>32.990.000₫</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-302@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b
                    className={styles.macbookAirM1Container}
                  >{`MacBook Pro 13 inch M2 (10 core| 8GB RAM| 256GB SSD) `}</b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>29.690.000₫</b>
                  <b className={styles.b1}>35.990.000₫</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-303@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    MacBook Pro 14 inch M2 Pro (16 Core| 16GB| 512GB)
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>47.550.000₫</b>
                  <b className={styles.b1}>55.000.000₫</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.categoryItemInner}>
            <div className={styles.xemTtCPhKinParent}>
              <div className={styles.thngTin}>Xem tất cả Mac</div>
              <img className={styles.frameIcon1} alt="" src="/frame.svg" />
            </div>
          </div>
        </div>
        <div className={styles.categoryItem2}>
          <div className={styles.macWrapper}>
            <b className={styles.thngTin}>Mac</b>
          </div>
          <div className={styles.itemGrid1}>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-30@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    <p className={styles.blankLine}>
                      MacBook Air M1 2020 (8GB RAM | 256GB SSD)
                    </p>
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>
                    <p className={styles.blankLine}>18.590.000₫</p>
                  </b>
                  <b className={styles.b1}>
                    <p className={styles.blankLine}>28.990.000₫</p>
                  </b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-301@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    MacBook Air M2 2022 (8GB RAM | 256GB SSD)
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>27.590.000₫</b>
                  <b className={styles.b1}>32.990.000₫</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-302@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b
                    className={styles.macbookAirM1Container}
                  >{`MacBook Pro 13 inch M2 (10 core| 8GB RAM| 256GB SSD) `}</b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>29.690.000₫</b>
                  <b className={styles.b1}>35.990.000₫</b>
                </div>
              </div>
            </div>
            <div className={styles.frameParent}>
              <div className={styles.frameGroup}>
                <img
                  className={styles.frameChild}
                  alt=""
                  src="/frame-303@2x.png"
                />
                <div className={styles.component9Wrapper}>
                  <div className={styles.component9}>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceChild} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceItem} />
                    </div>
                    <div className={styles.component9Inner}>
                      <div className={styles.instanceInner} />
                    </div>
                    <div className={styles.component9Child}>
                      <div className={styles.instanceChild1} />
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.macbookAirM120208gbRamWrapper}>
                  <b className={styles.macbookAirM1Container}>
                    MacBook Pro 14 inch M2 Pro (16 Core| 16GB| 512GB)
                  </b>
                </div>
                <div className={styles.parent}>
                  <b className={styles.thngTin}>47.550.000₫</b>
                  <b className={styles.b1}>55.000.000₫</b>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.categoryItemInner}>
            <div className={styles.xemTtCPhKinParent}>
              <div className={styles.thngTin}>Xem tất cả Mac</div>
              <img className={styles.frameIcon1} alt="" src="/frame.svg" />
            </div>
          </div>
        </div>
        <div className={styles.pager}>
          <div className={styles.itemGrid6}>
            <div className={styles.wrapper}>
              <b className={styles.thngTin}>1</b>
            </div>
            <div className={styles.frame}>
              <b className={styles.thngTin}>2</b>
            </div>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon1} alt="" src="/vector1.svg" />
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
            <img className={styles.vectorIcon2} alt="" src="/vector2.svg" />
          </div>
          <div className={styles.btnBag}>
            <img className={styles.vectorIcon3} alt="" src="/vector3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MAC;
