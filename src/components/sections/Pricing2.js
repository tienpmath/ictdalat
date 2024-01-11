import PricingTable from '../elements/PricingTable'

export default function Pricing2() {
    return (
        <>
            <section className="pricing__area pricing__bg pricing__bg-two" data-background="/assets/img/bg/pricing_bg.jpg">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-5">
                            <div className="section-title text-center mb-30 tg-heading-subheading animation-style3">
                                <span className="sub-title">DỰ TOÁN CHI PHÍ XÂY DỰNG WEB</span>
                                <h2 className="title tg-element-title">Bạn có thể tham khảo nhanh các gói</h2>
                            </div>
                        </div>
                    </div>
                    <div className="pricing__item-wrap">
                        <PricingTable />
                    </div>
                </div>
                <div className="pricing__shape-wrap">
                    <img src="/assets/img/images/pricing_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                    <img src="/assets/img/images/pricing_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                </div>
            </section>
        </>
    )
}
