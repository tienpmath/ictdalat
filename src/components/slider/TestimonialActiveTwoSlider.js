'use client'
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    spaceBetween: 0,
    loop: true,
    slidesPerView: 1,
    spaceBetween: 0,
    autoplay: {
        delay: 6000,
    },
    // Navigation arrows
    navigation: {
        nextEl: '.testimonial-button-next',
        prevEl: '.testimonial-button-prev',
    },

};

export default function TestimonialActiveTwoSlider() {
    return (
        <>
            <Swiper {...swiperOptions}>
                <SwiperSlide>
                    <div className="testimonial__item-three">
                        <div className="testimonial__rating testimonial__rating-two">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <p>“ Chất lượng tuyệt vời, SEO quá nhanh, phù hợp phát triển thị trường Đà Lạt.</p>
                        <div className="testimonial__bottom">
                            <div className="testimonial__info-three">
                                <h4 className="title">Mr. Kim</h4>
                                <span>CEO ICT Đà Lạt</span>
                            </div>
                            <div className="testimonial__icon">
                                <img src="/assets/img/icon/quote02.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="testimonial__item-three">
                        <div className="testimonial__rating testimonial__rating-two">
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                            <i className="fas fa-star" />
                        </div>
                        <p>“ Xây dựng thương hiệu đẳng cấp, triển khai nhanh chóng, giá cả phù hợp cho doanh nghiệp vừa, nhỏ, các công ty khởi nghiêp Đà Lạt.</p>
                        <div className="testimonial__bottom">
                            <div className="testimonial__info-three">
                                <h4 className="title">Kỹ sư</h4>
                                <span>CEO Tiến Dev</span>
                            </div>
                            <div className="testimonial__icon">
                                <img src="/assets/img/icon/quote02.svg" alt="" />
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>
            <div className="testimonial__nav-two">
                <div className="testimonial-button-prev"><i className="flaticon-right-arrow" /></div>
                <div className="testimonial-button-next"><i className="flaticon-right-arrow" /></div>
            </div>
        </>
    )
}
