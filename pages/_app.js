import "bootstrap/dist/css/bootstrap.min.css";

import "reactjs-popup/dist/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import in component you use
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
