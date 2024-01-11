import Link from 'next/link'

export default function Banner4() {
    return (
        <>
            <section className="banner__area-four banner__bg-four" data-background="/assets/img/banner/h5_banner_bg.jpg">
                <div className="container">
                    <div className="row align-items-center justify-content-center">
                        <div className="col-lg-6">
                            <div className="banner__content-four">
                                <h2 className="title" data-aos="fade-up" data-aos-delay={100}>ICT Đà Lạt -Thiết kế web chuyên nghiệp. </h2>
                                <p data-aos="fade-up" data-aos-delay={300}>Thương hiệu Doanh nghiệp đi đôi Thiết kế website chuẩn seo chính là một trong những việc đầu tiên sẽ phải  xây dựng nếu muốn truyền thông của doanh nghiệp mình vươn xa..</p>
                                <Link href="/contact" className="btn" data-aos="fade-up" data-aos-delay={600}>0944838788</Link>
                                <div className="shape">
                                    <img src="/assets/img/banner/h5_banner_shape01.png" alt="" className="rotateme" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-9">
                            <div className="banner__img-two">
                                <img src="/assets/img/banner/h5_banner_img01.png" alt="" />
                                <img src="/assets/img/banner/h5_banner_img02.png" alt="" />
                                <div className="img__shape">
                                    <img src="/assets/img/banner/h5_banner_shape02.png" alt="" className="rightToLeft" />
                                    <img src="/assets/img/banner/h5_banner_shape03.png" alt="" className="alltuchtopdown" />
                                    <img src="/assets/img/banner/h5_banner_shape04.png" alt="" />
                                    <img src="/assets/img/banner/h5_banner_shape05.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
