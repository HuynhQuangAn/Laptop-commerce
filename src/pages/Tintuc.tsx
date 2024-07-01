import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./Tintuc.module.css";

const Tintuc: FunctionComponent = () => {
  const navigate = useNavigate();

  const onFrameContainerClick = useCallback(() => {
    navigate("/news");
  }, [navigate]);

  return (
    <div className={styles.tintuc}>
      <div className={styles.frameParent}>
        <div className={styles.instanceParent}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.iTcAppleXyNhMySnXuWrapper}>
                <b className={styles.iTcApple}>
                  Đối tác Apple xây nhà máy sản xuất MacBook tại Việt Nam
                </b>
              </div>
              <div className={styles.frameContainer}>
                <img className={styles.frameIcon} alt="" src="/frame3.svg" />
                <div className={styles.div}>25/04/2023</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameGroup}>
              <div className={styles.iTcAppleXyNhMySnXuWrapper}>
                <b className={styles.iTcApple}>
                  Đối tác Apple xây nhà máy sản xuất MacBook tại Việt Nam
                </b>
              </div>
              <div className={styles.frameContainer}>
                <img className={styles.frameIcon} alt="" src="/frame3.svg" />
                <div className={styles.div}>25/04/2023</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceGroup}>
          <div className={styles.frameParent3}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/frame-143@2x.png"
            />
            <div className={styles.frameParent4}>
              <div className={styles.iTcAppleXyNhMySnXuFrame}>
                <b className={styles.iTcApple}>
                  Đối tác Apple xây nhà máy sản xuất MacBook tại Việt Nam
                </b>
              </div>
              <div className={styles.frameParent5}>
                <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                <div className={styles.div}>25/04/2023</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/frame-143@2x.png"
            />
            <div className={styles.frameParent4}>
              <div className={styles.iTcAppleXyNhMySnXuFrame}>
                <b className={styles.iTcApple}>
                  Đối tác Apple xây nhà máy sản xuất MacBook tại Việt Nam
                </b>
              </div>
              <div className={styles.frameParent5}>
                <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                <div className={styles.div}>25/04/2023</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent3}>
            <img
              className={styles.instanceChild}
              alt=""
              src="/frame-143@2x.png"
            />
            <div className={styles.frameParent4}>
              <div className={styles.iTcAppleXyNhMySnXuFrame}>
                <b className={styles.iTcApple}>
                  Đối tác Apple xây nhà máy sản xuất MacBook tại Việt Nam
                </b>
              </div>
              <div className={styles.frameParent5}>
                <img className={styles.frameIcon} alt="" src="/frame2.svg" />
                <div className={styles.div}>25/04/2023</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.instanceContainer}>
          <div className={styles.frameParent12} onClick={onFrameContainerClick}>
            <img
              className={styles.instanceChild1}
              alt=""
              src="/frame-35@2x.png"
            />
            <div className={styles.tinTcParent}>
              <b className={styles.tinTc}>Tin tức</b>
              <b className={styles.appleHL}>
                Apple hé lộ một số tính năng mới trên iOS 17
              </b>
              <div className={styles.vaQuaApple}>
                Vừa qua, Apple đã ra mắt các tính năng phần mềm mới hỗ trợ cho
                nhận thức, thị giác, thính giác và khả ...
              </div>
              <div className={styles.byParent}>
                <div className={styles.div}>
                  <span>By</span>
                  <span className={styles.span}>{` `}</span>
                </div>
                <b className={styles.appleHL}>{` Đức Trịnh `}</b>
                <div className={styles.frameParent13}>
                  <div className={styles.frame}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector5.svg"
                    />
                  </div>
                  <div className={styles.div}>25/04/2023</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent14}>
            <img
              className={styles.instanceChild2}
              alt=""
              src="/frame-40@2x.png"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-17@2x.png"
            />
            <div className={styles.nhGiChiTitPixeWrapper}>
              <div className={styles.iTcApple}>Đánh giá chi tiết pixe...</div>
            </div>
            <img className={styles.frameIcon5} alt="" src="/frame4.svg" />
          </div>
        </div>
        <div className={styles.instanceContainer}>
          <div className={styles.frameParent15}>
            <img
              className={styles.instanceChild1}
              alt=""
              src="/frame-35@2x.png"
            />
            <div className={styles.tinTcParent}>
              <b className={styles.tinTc}>Tin tức</b>
              <b className={styles.appleHL}>
                Apple hé lộ một số tính năng mới trên iOS 17
              </b>
              <div className={styles.vaQuaApple}>
                Vừa qua, Apple đã ra mắt các tính năng phần mềm mới hỗ trợ cho
                nhận thức, thị giác, thính giác và khả ...
              </div>
              <div className={styles.byParent}>
                <div className={styles.div}>
                  <span>By</span>
                  <span className={styles.span}>{` `}</span>
                </div>
                <b className={styles.appleHL}>{` Đức Trịnh `}</b>
                <div className={styles.frameParent13}>
                  <div className={styles.frame}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector5.svg"
                    />
                  </div>
                  <div className={styles.div}>25/04/2023</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent14}>
            <img
              className={styles.instanceChild2}
              alt=""
              src="/frame-40@2x.png"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-17@2x.png"
            />
            <div className={styles.nhGiChiTitPixeWrapper}>
              <div className={styles.iTcApple}>Đánh giá chi tiết pixe...</div>
            </div>
            <img className={styles.frameIcon5} alt="" src="/frame4.svg" />
          </div>
        </div>
        <div className={styles.instanceContainer}>
          <div className={styles.frameParent15}>
            <img
              className={styles.instanceChild1}
              alt=""
              src="/frame-35@2x.png"
            />
            <div className={styles.tinTcParent}>
              <b className={styles.tinTc}>Tin tức</b>
              <b className={styles.appleHL}>
                Apple hé lộ một số tính năng mới trên iOS 17
              </b>
              <div className={styles.vaQuaApple}>
                Vừa qua, Apple đã ra mắt các tính năng phần mềm mới hỗ trợ cho
                nhận thức, thị giác, thính giác và khả ...
              </div>
              <div className={styles.byParent}>
                <div className={styles.div}>
                  <span>By</span>
                  <span className={styles.span}>{` `}</span>
                </div>
                <b className={styles.appleHL}>{` Đức Trịnh `}</b>
                <div className={styles.frameParent13}>
                  <div className={styles.frame}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector5.svg"
                    />
                  </div>
                  <div className={styles.div}>25/04/2023</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent14}>
            <img
              className={styles.instanceChild2}
              alt=""
              src="/frame-40@2x.png"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-17@2x.png"
            />
            <div className={styles.nhGiChiTitPixeWrapper}>
              <div className={styles.iTcApple}>Đánh giá chi tiết pixe...</div>
            </div>
            <img className={styles.frameIcon5} alt="" src="/frame4.svg" />
          </div>
        </div>
        <div className={styles.instanceContainer}>
          <div className={styles.frameParent15}>
            <img
              className={styles.instanceChild1}
              alt=""
              src="/frame-35@2x.png"
            />
            <div className={styles.tinTcParent}>
              <b className={styles.tinTc}>Tin tức</b>
              <b className={styles.appleHL}>
                Apple hé lộ một số tính năng mới trên iOS 17
              </b>
              <div className={styles.vaQuaApple}>
                Vừa qua, Apple đã ra mắt các tính năng phần mềm mới hỗ trợ cho
                nhận thức, thị giác, thính giác và khả ...
              </div>
              <div className={styles.byParent}>
                <div className={styles.div}>
                  <span>By</span>
                  <span className={styles.span}>{` `}</span>
                </div>
                <b className={styles.appleHL}>{` Đức Trịnh `}</b>
                <div className={styles.frameParent13}>
                  <div className={styles.frame}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector5.svg"
                    />
                  </div>
                  <div className={styles.div}>25/04/2023</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent14}>
            <img
              className={styles.instanceChild2}
              alt=""
              src="/frame-40@2x.png"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-17@2x.png"
            />
            <div className={styles.nhGiChiTitPixeWrapper}>
              <div className={styles.iTcApple}>Đánh giá chi tiết pixe...</div>
            </div>
            <img className={styles.frameIcon5} alt="" src="/frame4.svg" />
          </div>
        </div>
        <div className={styles.instanceContainer}>
          <div className={styles.frameParent15}>
            <img
              className={styles.instanceChild1}
              alt=""
              src="/frame-35@2x.png"
            />
            <div className={styles.tinTcParent}>
              <b className={styles.tinTc}>Tin tức</b>
              <b className={styles.appleHL}>
                Apple hé lộ một số tính năng mới trên iOS 17
              </b>
              <div className={styles.vaQuaApple}>
                Vừa qua, Apple đã ra mắt các tính năng phần mềm mới hỗ trợ cho
                nhận thức, thị giác, thính giác và khả ...
              </div>
              <div className={styles.byParent}>
                <div className={styles.div}>
                  <span>By</span>
                  <span className={styles.span}>{` `}</span>
                </div>
                <b className={styles.appleHL}>{` Đức Trịnh `}</b>
                <div className={styles.frameParent13}>
                  <div className={styles.frame}>
                    <img
                      className={styles.vectorIcon}
                      alt=""
                      src="/vector5.svg"
                    />
                  </div>
                  <div className={styles.div}>25/04/2023</div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent14}>
            <img
              className={styles.instanceChild2}
              alt=""
              src="/frame-40@2x.png"
            />
            <img
              className={styles.ellipseIcon}
              alt=""
              src="/ellipse-17@2x.png"
            />
            <div className={styles.nhGiChiTitPixeWrapper}>
              <div className={styles.iTcApple}>Đánh giá chi tiết pixe...</div>
            </div>
            <img className={styles.frameIcon5} alt="" src="/frame4.svg" />
          </div>
        </div>
        <div className={styles.pager}>
          <div className={styles.itemGrid}>
            <div className={styles.wrapper}>
              <b className={styles.div}>1</b>
            </div>
            <div className={styles.container}>
              <b className={styles.div}>2</b>
            </div>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon5} alt="" src="/vector1.svg" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.headingNewletter}>
        <div className={styles.categoryItemParent}>
          <div className={styles.categoryItem}>
            <div className={styles.footerThongTin}>
              <div className={styles.thngTinWrapper}>
                <b className={styles.div}>Chính sách</b>
              </div>
              <div className={styles.thuCIMiParent}>
                <div className={styles.div}>Thu cũ đổi mới</div>
                <div className={styles.div}>Giao hàng</div>
                <div className={styles.div}>Giao hàng (ZaloPay)</div>
                <div className={styles.div}>{`Huỷ giao dịch `}</div>
                <div className={styles.div}>Đổi trả</div>
                <div className={styles.div}>Bảo hành</div>
                <div className={styles.div}>Giải quyết khiếu nại</div>
                <div className={styles.div}>Bảo mật thông tin</div>
              </div>
            </div>
            <div className={styles.footerThongTin}>
              <div className={styles.thngTinWrapper}>
                <b className={styles.div}>Thông tin</b>
              </div>
              <div className={styles.thuCIMiParent}>
                <div className={styles.div}>Tin tức</div>
                <div className={styles.div}>Giới thiệu</div>
                <div className={styles.div}>Phương thức thanh toán</div>
                <div className={styles.div}>Bảo hành và sửa chữa</div>
                <div className={styles.nhGiCht}>
                  Đánh giá chẩt lượng, khiếu nại
                </div>
                <div className={styles.div}>Tuyển dụng</div>
              </div>
            </div>
            <div className={styles.footerThongTin}>
              <div className={styles.thngTinWrapper}>
                <b className={styles.div}>{`Địa chỉ & Liên hệ`}</b>
              </div>
              <div className={styles.thuCIMiParent}>
                <div className={styles.div}>Tài khoản của tôi</div>
                <div className={styles.div}>Đơn đặt hàng</div>
                <div className={styles.div}>{`Hệ thống cửa hàng: `}</div>
                <div className={styles.div}>Tìm Store trên Google Map</div>
                <div className={styles.div}>
                  <span>{`Mua hàng: `}</span>
                  <span className={styles.span5}>1900.6626</span>
                </div>
                <div className={styles.div}>
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
            <div className={styles.div}>Th!nk!</div>
          </div>
          <div className={styles.iconMac}>
            <div className={styles.div}>Mac</div>
          </div>
          <div className={styles.iconLaptop}>
            <div className={styles.div}>Laptop</div>
          </div>
          <div className={styles.iconLaptop}>
            <div className={styles.div}>Phụ kiện</div>
          </div>
          <div className={styles.iconLaptop}>
            <div className={styles.div}>Tin tức</div>
          </div>
          <div className={styles.btnSearch}>
            <img className={styles.vectorIcon6} alt="" src="/vector2.svg" />
          </div>
          <div className={styles.btnBag}>
            <img className={styles.vectorIcon7} alt="" src="/vector3.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tintuc;
