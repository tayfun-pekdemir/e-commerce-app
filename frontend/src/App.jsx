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
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { verifyUser } from "./store/actions/clientActions";
import { useSelector } from "react-redux";
import { fetchCategories, fetchProducts } from "./store/actions/productActions";

function App() {
  const categories = useSelector(state => state.productRed.categories);
  const products = useSelector(state => state.productRed.productList);
  const fetchState = useSelector(state => state.productRed.fetchState);
  const dispatch = useDispatch();

    useEffect(() => {

    dispatch(verifyUser());
    if(!categories?.length){
      dispatch(fetchCategories());
    };

    if (products?.length === 0 && fetchState !== "FETCHING") {
    dispatch(fetchProducts());
    console.log("products: " + products);
  }
  }, []);

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
          <Route exact path="/shop/:gender/:categoryName/:categoryId" component={ShopPage} />
          <Route exact path="/shop/:gender/:categoryName/:categoryId/:productSlug/:id" component={ProductDetailPage} />
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
