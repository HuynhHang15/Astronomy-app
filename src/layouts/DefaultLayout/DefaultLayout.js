import Header from "~/layouts/Header";
import Footer from "~/layouts/Footer";

function DefaultLayout({ children }) {
  return (
    <div>
      <Header/>
      
      <div>{children}</div>

      <Footer/>
    </div>
  );
}

export default DefaultLayout;
