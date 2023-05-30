import { card } from "../assets";
import styles, { layout } from "../style";
import Button from "./Button";

const cardDeal = () => (
  <section className={layout.section}>
    <div className={layout.sectionInfo}>
      <h2 className={styles.heading2}>
        Find a better card deal <br className="sm:block hidden" /> in few easy
        steps.
      </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5 `}>
        Credit Card Services are any products, credit services and/or financial
        accommodations relating to credit cards and/or other cash management
        services other than under the Cash Management Reserve previously, now,
        or hereafter provided to Borrower or any of its Subsidiaries by Bank or
        any Bank Affiliate.
      </p>
      <Button styles="mt-10" />
    </div>
    <div className={layout.sectionImgReverse}>
      <img
        src={card}
        alt="billing image"
        className="w-[100%] h-[100%] relative z-[5]"
      />
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] -left-1/2 bottom-0 w-[50%] h-[50%] rounded-full pink__gradient" />
    </div>
  </section>
);

export default cardDeal;
