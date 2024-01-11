'use client'
import Aos from "aos"
import { useEffect, useState } from "react"
import BackToTop from '../elements/BackToTop'
import DataBg from "../elements/DataBg"
import Breadcrumb from './Breadcrumb'
import PageHead from './PageHead'
import Footer1 from './footer/Footer1'
import Footer2 from './footer/Footer2'
import Footer3 from "./footer/Footer3"
import Footer4 from "./footer/Footer4"
import Footer5 from "./footer/Footer5"
import Header1 from "./header/Header1"
import Header2 from './header/Header2'
import Header3 from "./header/Header3"
import Header4 from "./header/Header4"
import Header5 from "./header/Header5"
import Header6 from "./header/Header6"
import Footer7 from "./footer/Footer7"
import Footer6 from "./footer/Footer6"
import Script from "next/script";
export const metadata = {
    title: 'Thiết Kế Website Chuyên Nghiệp, Chuẩn SEO Đà Lạt - Lâm Đồng',
    description: 'ICT Đà Lạt chuyên thiết kế website chuyên nghiệp, uy tín tại Đà Lạt, Bảo Lộc.☎️ 0944838788 Dịch vụ Thiết kế website Đà Lạt - Lâm Đồng trọn gói chuẩn seo  2024✔️✔️ Thiết kế web bán hàng cao cấp, bảo trì trọn đời',
    openGraph: {
        title: 'Thiết Kế Website Chuyên Nghiệp, Chuẩn SEO Đà Lạt - Lâm Đồng',
        description: 'ICT Đà Lạt chuyên thiết kế website chuyên nghiệp, uy tín tại Đà Lạt, Bảo Lộc.☎️ 0944838788 Dịch vụ Thiết kế website Đà Lạt - Lâm Đồng trọn gói chuẩn seo  2024✔️✔️ Thiết kế web bán hàng cao cấp, bảo trì trọn đời',
    },
}

export default function Layout({ headerStyle, footerStyle, headTitle, breadcrumbTitle, children, transparent }) {

    const [scroll, setScroll] = useState(0)
    const [isMobileMenu, setMobileMenu] = useState(false)
    const handleMobileMenu = () => {
        setMobileMenu(!isMobileMenu)
        !isMobileMenu ? document.body.classList.add("mobile-menu-visible") : document.body.classList.remove("mobile-menu-visible")
    }
    // Search Menu
    const [isSearch, setSearch] = useState(false)
    const handleSearch = () => setSearch(!isSearch)
    // Moblile Menu
    const [isOffcanvus, setOffcanvus] = useState(false)
    const handleOffcanvus = () => setOffcanvus(!isOffcanvus)

    useEffect(() => {
        const WOW = require('wowjs')
        window.wow = new WOW.WOW({
            live: false
        })
        window.wow.init()
        Aos.init()

        document.addEventListener("scroll", () => {
            const scrollCheck = window.scrollY > 100
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck)
            }
        })
    }, [])
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: 'ICT Đà Lạt',
        image: '/assets/img/logo/logo.png',
        description: '0944838788 - Tiến Dev - Chuyên thiết kế website chuyên nghiệp, uy tín tại Đà Lạt, Bảo Lộc.☎️ 0944838788 Dịch vụ Thiết kế website Đà Lạt ',
    }

    return (
        <>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <Script
                strategy="afterInteractive"
                src={`https://www.googletagmanager.com/gtag/js?id=G-4R33J7RG3P`}
            />
            <Script id="my-script"
                strategy="afterInteractive"
                dangerouslySetInnerHTML={{
                    __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-4R33J7RG3P', {
              page_path: window.location.pathname,
            });
          `,
                }}
            />
            <section>
                {/* Add JSON-LD to your page */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {/* ... */}
            </section>
            <PageHead headTitle={headTitle} />
            <DataBg />

            {!headerStyle && <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} transparent={transparent} />}
            {headerStyle == 1 ? <Header1 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} transparent={transparent} /> : null}
            {headerStyle == 2 ? <Header2 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} /> : null}
            {headerStyle == 3 ? <Header3 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} /> : null}
            {headerStyle == 4 ? <Header4 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} /> : null}
            {headerStyle == 5 ? <Header5 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} /> : null}
            {headerStyle == 6 ? <Header6 scroll={scroll} isMobileMenu={isMobileMenu} handleMobileMenu={handleMobileMenu} isSearch={isSearch} handleSearch={handleSearch} isOffcanvus={isOffcanvus} handleOffcanvus={handleOffcanvus} /> : null}


            <main className="fix">
                {breadcrumbTitle && <Breadcrumb breadcrumbTitle={breadcrumbTitle} />}

                {children}
            </main>

            {!footerStyle && < Footer1 />}
            {footerStyle == 1 ? < Footer1 /> : null}
            {footerStyle == 2 ? < Footer2 /> : null}
            {footerStyle == 3 ? < Footer3 /> : null}
            {footerStyle == 4 ? < Footer4 /> : null}
            {footerStyle == 5 ? < Footer5 /> : null}
            {footerStyle == 6 ? < Footer6 /> : null}
            {footerStyle == 7 ? < Footer7 /> : null}
            <BackToTop />
        </>
    )
}
