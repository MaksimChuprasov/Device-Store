import Header from './Header';
import Footer from './Footer';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <section>
            <Header />

            <div className="content">
                {children}
            </div>

            <Footer />
        </section>
    );
}

export default Layout;