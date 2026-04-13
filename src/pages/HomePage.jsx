import Navbar from '../components/Navbar';
import HomeSection from '../components/HomeSection';
import Reviews from '../components/Reviews';
import SetUp from '../components/SetUp';
import Premium from '../components/Premium';
import ProductDetails from '../components/ProductDetails';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

function HomePage() {
    return (
        <>
            <Navbar />

            <HomeSection />
            <Reviews />
            <SetUp />
            <Premium />
            <ProductDetails />
            <Contact />

            <Footer />
        </>
    )
}

export default HomePage;