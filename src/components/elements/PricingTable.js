'use client'
import Link from 'next/link'
import { useState } from 'react'

export default function PricingTable() {
    const [isToggled, setToggled] = useState(false)
    const handleToggle = () => setToggled(!isToggled)
    return (
        <>
            <div className={isToggled ? "pricing__tab selected" : " pricing__tab"}>
                <span className={`pricing__tab-btn monthly_tab_title  ${isToggled ? "active" : ""}`}>Tháng</span>
                <span className={`pricing__tab-switcher ${isToggled ? "active" : ""}`} onClick={handleToggle} />
                <span className={`pricing__tab-btn annual_tab_title ${isToggled ? "active" : ""}`}>Năm</span>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="pricing__box">
                        <div className="pricing__head">
                            <h5 className="title">Gói cơ bản</h5>
                        </div>
                        <div className={`pricing__price ${isToggled ? "change-subs-duration" : ""}`}>
                            <h2 className="price monthly_price"><strong>vnđ</strong> 150.000 <span>/ Tháng</span></h2>
                            <h2 className="price annual_price"><strong>vnđ</strong> 15.000.000 <span>/ Năm</span></h2>
                        </div>
                        <div className="pricing__list">
                            <ul className="list-wrap">
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Chọn website mẫu trong kho giao diện có sẵn
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Miễn phí Hosting
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Tiêu chuẩn của web thương mại
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Miễn phí chứng chỉ bảo mật SSL
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Bảo hành vĩnh viễn
                                </li>
                            </ul>
                        </div>
                        <div className="pricing__btn">
                            <Link href="/contact" className="btn">Đặt ngay</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="pricing__box">
                        <div className="pricing__head">
                            <h5 className="title">Doanh nghiệp</h5>
                        </div>
                        <div className={`pricing__price ${isToggled ? "change-subs-duration" : ""}`}>
                            <h2 className="price monthly_price"><strong>vnđ</strong> 350.000 <span>/ Tháng</span></h2>
                            <h2 className="price annual_price"><strong>vnđ</strong> 3.500.000 <span>/ Năm</span></h2>
                        </div>
                        <div className="pricing__list">
                            <ul className="list-wrap">
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Chọn website mẫu trong kho giao diện có sẵn
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Miễn phí Hosting - Tên Miền .com/.net/.VN
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Tiêu chuẩn của web thương mại
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Miễn phí chứng chỉ bảo mật SSL
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Bảo hành vĩnh viễn
                                </li>
                            </ul>
                        </div>
                        <div className="pricing__btn">
                            <Link href="/contact" className="btn">Đặt ngay</Link>
                        </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-8">
                    <div className="pricing__box">
                        <div className="pricing__head">
                            <h5 className="title">Thương mại điện tử</h5>
                        </div>
                        <div className={`pricing__price ${isToggled ? "change-subs-duration" : ""}`}>
                            <h2 className="price monthly_price"><strong>vnđ</strong> 700.000 <span>/ Tháng</span></h2>
                            <h2 className="price annual_price"><strong>vnđ</strong> 7.000.000 <span>/ Năm</span></h2>
                        </div>
                        <div className="pricing__list">
                            <ul className="list-wrap">
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Thiết kế theo yêu cầu, giao diện độc quyền
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Miễn phí Hosting - Tên Miền .com/.net/.VN
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Tiêu chuẩn của web thương mại Doanh nghiệp
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Miễn phí chứng chỉ bảo mật SSL
                                </li>
                                <li>
                                    <img src="/assets/img/icon/check_icon.svg" alt="" />
                                    Bảo hành vĩnh viễn
                                </li>
                            </ul>
                        </div>
                        <div className="pricing__btn">
                            <Link href="/contact" className="btn">Đặt ngay</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
