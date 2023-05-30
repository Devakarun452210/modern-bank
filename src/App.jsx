import styles from "./style";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Billing from "./components/Billing";
import Business from "./components/Business";
import Button from "./components/Button";
import CardDeal from "./components/cardDeal";
import CTA from "./components/CTA";
import Clients from "./components/Clients";
import Feedback from "./components/Feedback";
import Footer from "./components/Footer";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";

const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <NavBar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
