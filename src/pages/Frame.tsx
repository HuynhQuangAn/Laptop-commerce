import { FunctionComponent } from "react";
import styles from "./Frame.module.css";

const Frame: FunctionComponent = () => {
  return (
    <div className={styles.instanceParent}>
      <div className={styles.frameWrapper}>
        <div className={styles.iconThinkParent}>
          <div className={styles.iconThink}>
            <div className={styles.thnk}>Th!nk!</div>
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
      <div className={styles.sildeItem}>
        <div className={styles.ipadSlideItem}>
          <div className={styles.sildeItem1}>
            <img
              className={styles.sildeItemChild}
              alt=""
              src="/rectangle-1@2x.png"
            />
          </div>
          <div className={styles.sildeItem2}>
            <img
              className={styles.sildeItemChild}
              alt=""
              src="/rectangle-11@2x.png"
            />
          </div>
          <div className={styles.sildeItem3}>
            <img
              className={styles.sildeItemChild}
              alt=""
              src="/rectangle-12@2x.png"
            />
          </div>
          <div className={styles.sildeItem4}>
            <img
              className={styles.sildeItemChild}
              alt=""
              src="/rectangle-13@2x.png"
            />
          </div>
          <div className={styles.sildeItem5}>
            <img
              className={styles.sildeItemChild}
              alt=""
              src="/rectangle-14@2x.png"
            />
          </div>
        </div>
        <div className={styles.navigationIpad}>
          <div className={styles.component8}>
            <img
              className={styles.iconNavigationNhat}
              alt=""
              src="/icon-navigation-nhat2.svg"
            />
            <img
              className={styles.iconNavigationDam}
              alt=""
              src="/icon-navigation-dam1.svg"
            />
            <img
              className={styles.iconNavigationNhat1}
              alt=""
              src="/icon-navigation-nhat1.svg"
            />
            <img
              className={styles.iconNavigationNhat2}
              alt=""
              src="/icon-navigation-nhat3.svg"
            />
            <img
              className={styles.iconNavigationNhat3}
              alt=""
              src="/icon-navigation-nhat2.svg"
            />
          </div>
          <div className={styles.component8}>
            <img
              className={styles.iconNavigationNhat}
              alt=""
              src="/icon-navigation-nhat2.svg"
            />
            <img
              className={styles.iconNavigationDam}
              alt=""
              src="/icon-navigation-nhat.svg"
            />
            <img
              className={styles.iconNavigationNhat1}
              alt=""
              src="/icon-navigation-dam2.svg"
            />
            <img
              className={styles.iconNavigationNhat3}
              alt=""
              src="/icon-navigation-nhat2.svg"
            />
            <img
              className={styles.iconNavigationNhat2}
              alt=""
              src="/icon-navigation-nhat3.svg"
            />
          </div>
          <div className={styles.component8}>
            <img
              className={styles.iconNavigationNhat}
              alt=""
              src="/icon-navigation-nhat2.svg"
            />
            <img
              className={styles.iconNavigationDam}
              alt=""
              src="/icon-navigation-nhat.svg"
            />
            <img
              className={styles.iconNavigationNhat1}
              alt=""
              src="/icon-navigation-nhat1.svg"
            />
            <img
              className={styles.iconNavigationNhat3}
              alt=""
              src="/icon-navigation-nhat2.svg"
            />
            <img
              className={styles.iconNavigationNhat2}
              alt=""
              src="/icon-navigation-dam3.svg"
            />
          </div>
          <div className={styles.component8}>
            <img
              className={styles.iconNavigationNhat}
              alt=""
              src="/icon-navigation-nhat2.svg"
            />
            <img
              className={styles.iconNavigationDam}
              alt=""
              src="/icon-navigation-nhat.svg"
            />
            <img
              className={styles.iconNavigationNhat1}
              alt=""
              src="/icon-navigation-nhat1.svg"
            />
            <img
              className={styles.iconNavigationNhat3}
              alt=""
              src="/icon-navigation-dam.svg"
            />
            <img
              className={styles.iconNavigationNhat2}
              alt=""
              src="/icon-navigation-nhat3.svg"
            />
          </div>
        </div>
        <img className={styles.rightIcon} alt="" src="/right1.svg" />
      </div>
    </div>
  );
};

export default Frame;
