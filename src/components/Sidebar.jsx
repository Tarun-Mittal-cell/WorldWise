import AppNav from "./AppNav";
import Logo from "./Logo";
import styles from "./Sidebar.module.css";
import Footer from "./Footer";

function Sidebar() {
  return (
    <div className={styles.sidebar}>
      <Logo />
      <AppNav />
      <p>List of cities</p>
      <div className={styles.spacer}></div> {/* Spacer element */}
      <Footer />
    </div>
  );
}

export default Sidebar;
