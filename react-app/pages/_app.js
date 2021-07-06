// imports the tailwind required styles.
// In the build phase a purge process will guarantee that only
// the used tailwind classes will be built to the final package
import "../styles/tailwind.css";
import "../styles/mobile-grid.css";

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

// Wrap the MyApp root component with translation context
// so we can use the useTranslation hook in all components of the Application
export default MyApp;
