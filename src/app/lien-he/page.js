import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { addQuery } from "@/actions/AddQuery"

export const metadata = {
    title: 'Liên hệ Tiến dev 0944838788 - Thiết Kế Website Chuyên Nghiệp, Chuẩn SEO Đà Lạt - Lâm Đồng',
    description: '☎️ 0944838788 Dịch vụ Thiết kế website Đà Lạt - Lâm Đồng trọn gói chuẩn seo  2024✔️✔️ Thiết kế web bán hàng cao cấp, bảo trì trọn đời',
    openGraph: {
        title: 'Liên hệ Tiến dev 0944838788 - Thiết Kế Website Chuyên Nghiệp, Chuẩn SEO Đà Lạt - Lâm Đồng',
        description: '☎️ 0944838788 Dịch vụ Thiết kế website Đà Lạt - Lâm Đồng trọn gói chuẩn seo  2024✔️✔️ Thiết kế web bán hàng cao cấp, bảo trì trọn đời',
    },
}

export default function LienHe() {
    return (
        <>
            <Layout headerStyle={5} footerStyle={5} breadcrumbTitle="Liên hệ với chúng tôi">
                <div>
                    <section className="contact__area">
                        <div className="container">
                            {/* <div className="row">
                                <div className="col-lg-12">
                                    <div className="contact-map">
                                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3152.332792000835!2d144.96011341744386!3d-37.805673299999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad65d4c2b349649%3A0xb6899234e561db11!2sEnvato!5e0!3m2!1sen!2sbd!4v1685027435635!5m2!1sen!2sbd" allowFullScreen loading="lazy" />
                                    </div>
                                </div>
                            </div> */}
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="contact__content">
                                        <div className="section-title mb-35">
                                            <h2 className="title">Đừng ngại liên hệ chúng tôi, tư vấn miễn phí?</h2>
                                            <p>Thiết kế website, quản trị website. dịch vụ SEO, Thiết kế thương hiệu và các Giải pháp Marketing cho các cá nhân, doanh nghiệp tại Đà Lạt, Bảo Lộc, Lâm Đồng và toàn quốc</p>
                                        </div>
                                        <div className="contact__info">
                                            <ul className="list-wrap">
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-pin" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">Đỉa chỉ</h4>
                                                        <p>Thành phố Đà Lạt, Bảo Lộc, Lâm Đồng</p>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-phone-call" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">Điện thoại</h4>
                                                        <Link href="tel:0123456789">0944838788</Link>
                                                    </div>
                                                </li>
                                                <li>
                                                    <div className="icon">
                                                        <i className="flaticon-mail" />
                                                    </div>
                                                    <div className="content">
                                                        <h4 className="title">E-mail</h4>
                                                        <Link href="mailto:tiendev88@gmail.com">tiendev88@gmail.com</Link>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <div className="contact__form-wrap">
                                        <h2 className="title">Gửi Yêu cầu</h2>
                                        <p>Vui lòng nhập chính xác thông tin để liên hệ *</p>
                                        <form id="contact-form" action={addQuery} method="POST">

                                            <div className="row">
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input type="text" name="fullName" placeholder="Họ và tên" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input type="email" name="email" placeholder="Email" required />
                                                    </div>
                                                </div>
                                                <div className="col-md-4">
                                                    <div className="form-grp">
                                                        <input type="number" name="phone" placeholder="Phone" required />
                                                    </div>
                                                </div>
                                                <div className="form-grp">
                                                    <input type="text" name="subject" placeholder="Tiêu đề" required />
                                                </div>
                                                <div className="form-grp">
                                                    <textarea name="messageBody" placeholder="Nội dung" required />
                                                </div>
                                            </div>
                                            {/* <div className="form-grp checkbox-grp">
                                                <input type="checkbox" name="checkbox" id="checkbox" />
                                                <label htmlFor="checkbox">Save my name, email, and website in this browser for the next time I comment.</label>
                                            </div> */}
                                            <button type="submit" className="btn">Gửi yêu cầu </button>
                                        </form>
                                        <p className="ajax-response mb-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* contact-area-end */}
                    {/* call-back-area */}
                    {/* <section className="call-back-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="call-back-content">
                                        <div className="section-title white-title mb-10">
                                            <h2 className="title">Request A Call Back</h2>
                                        </div>
                                        <p>Ever find yourself staring at your computer screen a good consulting slogan to come to mind? Oftentimes.</p>
                                        <div className="shape">
                                            <img src="/assets/img/images/call_back_shape.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="call-back-form">
                                        <form action="#">
                                            <div className="row">
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Name *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="email" placeholder="E-mail *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <div className="form-grp">
                                                        <input type="number" placeholder="Phone *" />
                                                    </div>
                                                </div>
                                                <div className="col-md-6">
                                                    <button type="submit" className="btn">Send Now</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section> */}
                </div>
            </Layout>
        </>
    )
}