import Header from './Header';
import Footer from './Footer';

// eslint-disable-next-line react/prop-types
function Layout({ children }) {
    return (
        <section>
            <Header />

            <div className="content py-8 lg:pb-16">
                {children}
            </div>

            <Footer />
        </section>
    );
}

export default Layout;