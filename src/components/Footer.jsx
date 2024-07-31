function Footer() {
    return ( 
        <footer className="footer py-8 bg-bgheader">
            <div className="container">
                <div className="flex flex-wrap lg:flex-nowrap items-center">
                    {/* /.footer-logo */}
                    <div className="footer-logo order-0 basis-full sm:basis-1/2 lg:basis-1/3 shrink-0 text-center sm:text-left">
                        <a href="{{ route('home') }}" className="inline-block mt-1" rel="home">
                            <img src="/img/logo.svg" className="w-[38px] h-[38px]" alt="CutCode" />
                        </a>
                    </div>

                    <div className="footer-copyright order-2 lg:order-1 basis-full lg:basis-1/3 mt-8 lg:mt-0">
                        <div className="text-darkblue text-xxs xs:text-xs sm:text-sm text-center">
                            Fcqdaqp, 2023
                        </div>
                    </div>{/* /.footer-copyright */}

                    <div className="footer-social order-1 lg:order-2 basis-full sm:basis-1/2 lg:basis-1/3 mt-8 sm:mt-0">
                        <div className="flex flex-wrap items-center justify-center sm:justify-end space-x-6">
                            <a href="https://youtube.com" className="inline-flex items-center text-darkblue hover:text-purple"
                                target="_blank" rel="nofollow noopener">
                                <img className="h-5 lg:h-6" src="/img/youtube.svg" alt="YouTube" />
                                <span className="ml-2 lg:ml-3 text-xxs font-semibold">YouTube</span>
                            </a>
                            <a href="https://telegram.org" className="inline-flex items-center text-darkblue hover:text-purple"
                                target="_blank" rel="nofollow noopener">
                                <img className="h-5 lg:h-6" src="/img/telegram.svg" alt="Telegram" />
                                <span className="ml-2 lg:ml-3 text-xxs font-semibold">Telegram</span>
                            </a>
                        </div>
                    </div>{/* /.footer-social */}

                </div>
            </div> {/* /.container  */}
        </footer>
     );
}

export default Footer;