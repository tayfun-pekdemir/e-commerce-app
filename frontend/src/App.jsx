import "./App.css";
import { Switch, Route } from "react-router-dom";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import PageContent from "./layout/PageContent";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import ContactPage from "./pages/ContactPage";
import TeamPage from "./pages/TeamPage";
import AboutUsPage from "./pages/AboutUsPage";
import SignUpPage from "./pages/SignUpPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginPage from "./pages/LoginPage";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { verifyUser } from "./store/actions/clientActions";
import { useSelector } from "react-redux";
import { fetchCategories, fetchProducts } from "./store/actions/productActions";
import ShoppingCartPage from "./pages/ShoppingCartPage";
import OrderPage from "./pages/OrderPage";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const categories = useSelector(state => state.productRed.categories);
  const products = useSelector(state => state.productRed.productList);
  const fetchState = useSelector(state => state.productRed.fetchState);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState(true);

  useEffect(() => {

    dispatch(verifyUser()).finally(() => setLoading(false));

    if (!categories?.length) dispatch(fetchCategories());
    if (products?.length === 0 && fetchState !== "FETCHING") dispatch(fetchProducts());
  }, []);

  if (loading) return (
    <div className="flex justify-center items-center min-h-75">
      <span className="w-8 h-8 border-4 border-[#252B42] border-t-transparent rounded-full animate-spin"></span>
    </div>
  );

  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={3000}
        pauseOnHover
      />
      <Header />
      <PageContent>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={ShopPage} />
          <Route exact path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />
          <Route exact path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" component={ProductDetailPage} />
          <Route exact path="/cart" component={ShoppingCartPage} />
          <ProtectedRoute path="/order" component={OrderPage} />
          <Route exact path="/contact" component={ContactPage} />
          <Route exact path="/team" component={TeamPage} />
          <Route exact path="/about" component={AboutUsPage} />
          <Route exact path="/signup" component={SignUpPage} />
          <Route exact path="/login" component={LoginPage} />
        </Switch>
      </PageContent>
      <Footer />
    </>
  )
}

export default App
