import Link from 'next/link'

export default function About5() {
    return (
        <>
            <section className="about__area-eight">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6 col-md-9 order-0 order-lg-2">
                            <div className="about__img-wrap-seven">
                                <img src="/assets/img/images/inner04_about_img.jpg" alt="" />
                                <div className="about__award-box about__award-box-two">
                                    <div className="icon">
                                        <i className="flaticon-trophy" />
                                    </div>
                                    <div className="content">
                                        <h2 className="title">Trên 15+ năm</h2>
                                        <p>Thiết kế website <br /> </p>
                                    </div>
                                </div>
                                <div className="shape">
                                    <img src="/assets/img/images/h5_about_shape.png" alt="" className="ribbonRotate" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="about__content-seven">
                                <div className="section-title mb-25">
                                    <span className="sub-title">Về chúng tôi</span>
                                    <h2 className="title wow">ICT Đà Lạt là một doanh nghiệp lâu năm trong lĩnh vực thiết kế <span>Website, Phần mềm, Marketing...</span></h2>
                                </div>
                                <p>Chúng tôi chuyên về thiết kế website, dịch vụ SEO, Quản trị website. Thiết kế thương hiệu và các Giải pháp Marketing cho các cá nhân, doanh nghiệp tại Đà Lạt và toàn quốc <b />
                                    Hỗ trợ quảng bá website tự nhiên thông qua SEO, tạo web chuyên nghiệp. Hệ thống giao diện web đều được ứng dụng công nghệ Responsive trên điện thoại, máy tính iển thị tối ưu trên mọi thiết bị
                                </p>
                                <p>Công nghệ chúng tôi sử dụng gồm công nghệ mới nhất của Microsoft, Asp.Net Core, ReactJs, NextJs, Laravel, Wordpress
                                </p>
                                <div className="about__content-inner-five">
                                    <div className="about__list-img-four">
                                        <img src="/assets/img/images/about_list_img04.png" alt="" />
                                    </div>
                                    <div className="about__list-box">
                                        <ul className="list-wrap">
                                            <li><i className="flaticon-arrow-button" />Hơn 400 giao diện website đẹp mắt</li>
                                            <li><i className="flaticon-arrow-button" />Bảo mật web với chứng chỉ SSL free</li>
                                            <li><i className="flaticon-arrow-button" />Tối ưu hiển thị trên mọi thiết bị</li>
                                            <li><i className="flaticon-arrow-button" />Tích hợp báo cáo Google Analytics trên quản trị website</li>
                                        </ul>
                                    </div>
                                </div>
                                <Link href="/contact" className="btn btn-two">Liên hệ chúng tôi ngay</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
