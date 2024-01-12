import Link from "next/link"

export default function Footer5() {
    return (
        <>
            <footer>
                <div className="footer__area-two">
                    <div className="footer__newsletter-two">
                        <div className="container">
                            <div className="footer__newsletter-inner">
                                <h2 className="title">Nhận thông báo mới từ chúng tôi</h2>
                                <form action="#">
                                    <input type="text" placeholder="e-mail Type . . ." />
                                    <button type="submit" className="btn">Subscribe</button>
                                </form>
                                <div className="footer__social-two">
                                    <ul className="list-wrap">
                                        <li><Link href="https://facebook.com/tienpmath"><i className="fab fa-facebook-f" /></Link></li>
                                        <li><Link href="https://facebook.com/tienpmath"><i className="fab fa-twitter" /></Link></li>
                                        <li><Link href="https://facebook.com/tienpmath"><i className="fab fa-instagram" /></Link></li>
                                        <li><Link href="https://facebook.com/tienpmath"><i className="fab fa-pinterest-p" /></Link></li>
                                        <li><Link href="https://facebook.com/tienpmath"><i className="fab fa-youtube" /></Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__top-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-4 col-lg-5 col-md-6">
                                    <div className="footer-widget">
                                        <div className="footer__content-two">
                                            <div className="fw-logo mb-25">
                                                <Link href="/"><img src="/assets/img/logo/w_logo.png" alt="" /></Link>
                                            </div>
                                            <p>Công ty Thiết kế website, phần mềm - cài đặt hỗ trợ, dịch vụ sửa chữa, vệ sinh máy tính, khôi phục dữ liệu...</p>
                                            <div className="footer-info-list footer-info-two">
                                                <ul className="list-wrap">
                                                    <li>
                                                        <div className="icon">
                                                            <i className="flaticon-phone-call" />
                                                        </div>
                                                        <div className="content">
                                                            <Link href="tel:0944838788">0944838788</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="flaticon-envelope" />
                                                        </div>
                                                        <div className="content">
                                                            <Link href="mailto:tiendev88@gmail.com">tiendev88@gmail.com</Link>
                                                        </div>
                                                    </li>
                                                    <li>
                                                        <div className="icon">
                                                            <i className="flaticon-pin" />
                                                        </div>
                                                        <div className="content">
                                                            <p>ICT Đà Lạt - Chuyên thiết kế web, phần mềm, cài đặt, hỗ trợ fix web...</p>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-2 col-lg-3 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Danh mục</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/gioi-thieu">Giới thiệu</Link></li>
                                                <li><Link href="/lien-he">Liên hệ</Link></li>
                                                <li><Link href="/du-an">Dự án</Link></li>
                                                <li><Link href="/dich-vu">Dịch vụs</Link></li>
                                                <li><Link href="https://webdalat.com">Đối tác</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Tin tức</h4>
                                        <div className="footer-link-list">
                                            <ul className="list-wrap">
                                                <li><Link href="/gioi-thieu">Giới thiệu</Link></li>
                                                <li><Link href="/lien-he">Liên hệ</Link></li>
                                                <li><Link href="/du-an">Dự án</Link></li>
                                                <li><Link href="/dich-vu">Dịch vụs</Link></li>
                                                <li><Link href="https://webdalat.com">Đối tác</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Đội ngũ kỹ sư IT</h4>
                                        <div className="footer-instagram">
                                            <ul className="list-wrap">
                                                <li><Link href="#"><img src="/assets/img/images/footer_insta01.jpg" alt="" /></Link></li>
                                                <li><Link href="#"><img src="/assets/img/images/footer_insta02.jpg" alt="" /></Link></li>
                                                <li><Link href="#"><img src="/assets/img/images/footer_insta03.jpg" alt="" /></Link></li>
                                                <li><Link href="#"><img src="/assets/img/images/footer_insta04.jpg" alt="" /></Link></li>
                                                <li><Link href="#"><img src="/assets/img/images/footer_insta05.jpg" alt="" /></Link></li>
                                                <li><Link href="#"><img src="/assets/img/images/footer_insta06.jpg" alt="" /></Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer__bottom-two">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="copyright-text-two">
                                        <p>Copyright © <Link href="/">ICT Đà Lạt</Link> | All Right Reserved - Phạm Tiến 0944838788</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}
