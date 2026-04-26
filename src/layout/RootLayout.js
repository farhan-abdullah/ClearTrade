import { Outlet, useNavigation } from "react-router";
import Footer from "../shared/Footer";
import Navbar from "../shared/Navbar";
function RootLayout() {
  const navigation = useNavigation();
  const isLoading = navigation.state === "loading";
  return (
    <div>
      <Navbar />
      {isLoading && <div className="spinner">Caricamento in corso...</div>}
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default RootLayout;
