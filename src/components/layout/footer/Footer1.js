import Link from "next/link"

export default function Footer1() {
    return (
        <>
            <footer>
                <div className="footer-area">
                    <div className="footer-top">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-3 col-lg-4 col-md-6">
                                    <div className="footer-widget">
                                        <div className="fw-logo mb-25">
                                            <Link href="/"><img src="/assets/img/logo/logo.png" alt="ICT Đà Lạt" /></Link>
                                        </div>
                                        <div className="footer-content">
                                            <p>Công ty Thiết kế website, phần mềm - cài đặt hỗ trợ, dịch vụ sửa chữa, vệ sinh máy tính, khôi phục dữ liệu...</p>
                                            <div className="footer-social">
                                                <ul className="list-wrap">
                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                    <li><Link href="#"><i className="fab fa-youtube" /></Link></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Thông tin </h4>
                                        <div className="footer-info-list">
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
                                                        <p>Thành phố Đà Lạt, Bảo Lộc, Lâm Đồng.</p>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-6">
                                    <div className="footer-widget">
                                        <h4 className="fw-title">Danh mục ICT</h4>
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
                                        <h4 className="fw-title">Instagram Posts</h4>
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
                    <div className="footer-bottom">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-lg-7 order-0 order-lg-2">
                                    <div className="footer-newsletter">
                                        <h4 className="title">Đăng ký nhận bản tin của chúng tôi!</h4>
                                        <form action="#">
                                            <input type="text" placeholder="e-mail Type . . ." />
                                            <button className="btn btn-two" type="submit">Subscribe</button>
                                        </form>
                                    </div>
                                </div>
                                <div className="col-lg-5">
                                    <div className="copyright-text">
                                        <p>Copyright © <Link href="/">ICT Đà Lạt</Link> | All Right Reserved </p>
                                        <Link href="/contact">Quản trị và vận hành by Phạm Tiến 0944838788</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="footer-shape">
                        <img src="/assets/img/images/footer_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                        <img src="/assets/img/images/footer_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                        <img src="/assets/img/images/footer_shape03.png" alt="" data-parallax="{&quot;x&quot; : 100 , &quot;y&quot; : -100 }" />
                    </div>
                </div>
            </footer>
        </>
    )
}
