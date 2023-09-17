import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "./pages/Navigation";
import Page404 from "./pages/Page404";
import Profile from "./pages/profile/_profile";
import Sessions from "./pages/profile/Sessions";
import History from "./pages/profile/History";
import Applications from "./pages/Applications";
import Messages from "./pages/profile/Messages";
import Marketing from "./pages/profile/Marketing";
import Partners from "./pages/profile/Partners";
import PromoCode from "./pages/profile/PromoCode";
import GiftCards from "./pages/profile/GiftCards";
import PaymentMethods from "./pages/profile/PaymentMethods";
import ParentalControl from "./pages/profile/ParentalControl";
import Subscription from "./pages/profile/Subscription";

export function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index path="/" element={<Home />} />
          <Route path="profile" element={<Profile />}>
            <Route path="subscription" element={<Subscription />} />
            <Route path="payment-methods" element={<PaymentMethods />} />
            <Route path="parental-control" element={<ParentalControl />} />
            <Route path="sessions" element={<Sessions />} />
            <Route path="my-gift-cards" element={<GiftCards />} />
            <Route path="my-promo-code" element={<PromoCode />} />
            <Route path="applications" element={<Applications />} />
            <Route path="messages" element={<Messages />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="partners" element={<Partners />} />
            <Route path="extras/history" element={<History />} />
          </Route>

          <Route path="*" element={<Page404 />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
