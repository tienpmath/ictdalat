import Layout from "@/components/layout/Layout"
import ProjectForm from "@/components/project/ProjectForm";
import Link from "next/link"
import Image from 'next/image'

import type { Metadata, ResolvingMetadata } from 'next'

type Props = {
    params: { slug: string }
    searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
): Promise<Metadata> {
    // read route params
    const id = params.slug

    // fetch data
    const product = await fetch(`https://admin.ictdalat.vn/api/Portfolio/GetDetailBy/${id}`).then((res) => res.json())

    // optionally access and extend (rather than replace) parent metadata
    const previousImages = (await parent).openGraph?.images || []

    return {
        title: product.name,
        description: product.description,
        openGraph: {
            title: product.name,
            description: product.description,
            images: ['https://admin.ictdalat.vn/gallery/' + product.image, ...previousImages],
        },
    }
}



const ProjectDetail = async (props: any) => {

    // console.log(slug);
    const id = props.params.slug;


    //console.log(id);
    const res = await fetch(
        `https://admin.ictdalat.vn/api/Portfolio/GetDetailBy/${id}`,
        {
            method: "GET",
            // next: { tags: ['project-detail'] }
            cache: 'no-store'
        },
    );

    const data = await res.json();
    //console.log(data);
    const jsonLd = {
        '@context': 'https://schema.org',
        '@type': 'Product',
        name: data.name,
        image: data.image,
        description: data.description,
    }

    return (
        <>
            <section>
                {/* Add JSON-LD to your page */}
                <script
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                />
                {/* ... */}
            </section>
            <Layout headerStyle={1} footerStyle={1} breadcrumbTitle={data.name} headTitle={data.name} transparent="">
                <div>
                    <section className="project__details-area">
                        <div className="container">
                            <div className="project__details-wrap">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="project__details-top">
                                            <div className="row">
                                                <div className="col-70">
                                                    <div className="project__details-thumb">

                                                        <Image
                                                            src={"https://admin.ictdalat.vn/" + data.image}
                                                            width={500}
                                                            height={500}
                                                            alt={data.name}
                                                        />
                                                    </div>
                                                </div>
                                                <div className="col-30">
                                                    <div className="project__details-info">
                                                        <h4 className="title">Chi tiết dự án</h4>
                                                        <ul className="list-wrap">
                                                            <li><span>Danh mục:</span>{data.categoryName}</li>
                                                            <li><span>Khách hàng:</span>{data.client}</li>
                                                            <li><span>Yêu cầu:</span>{data.clientRequest1}</li>
                                                            <li><span>Giá:</span>{data.price} vnđ</li>
                                                            <li><span>Website:</span>{data.urlPreview}</li>
                                                            <li>
                                                                <span>Share:</span>
                                                                <ul className="list-wrap project-social">
                                                                    <li><Link href="#"><i className="fab fa-facebook-f" /></Link></li>
                                                                    <li><Link href="#"><i className="fab fa-twitter" /></Link></li>
                                                                    <li><Link href="#"><i className="fab fa-instagram" /></Link></li>
                                                                    <li><Link href="#"><i className="fab fa-pinterest-p" /></Link></li>
                                                                </ul>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="project__details-content">
                                            <h2 className="title">{data.name}</h2>


                                            <p dangerouslySetInnerHTML={{ __html: data.shortDescription }}></p>
                                            <p dangerouslySetInnerHTML={{ __html: data.description }}></p>


                                            <div className="project__details-inner">
                                                <div className="row align-items-center">
                                                    <div className="col-lg-6 order-0 order-lg-2">
                                                        <div className="project__details-inner-img">
                                                            <img src="/assets/img/project/project_details02.jpg" alt="" />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-6">
                                                        <div className="project__details-inner-content">
                                                            <h2 className="title">{data.name}</h2>
                                                            <p dangerouslySetInnerHTML={{ __html: data.shortDescription }}></p>
                                                            <div className="content-inner">
                                                                <div className="graph-img">
                                                                    <img src="/assets/img/project/graph.jpg" alt={data.name} />
                                                                </div>
                                                                <div className="about__list-box">
                                                                    <ul className="list-wrap">
                                                                        <li><i className="flaticon-arrow-button" />Nhiều mẫu giao diện đẹp</li>
                                                                        <li><i className="flaticon-arrow-button" />Tốc độ load trang nhanh</li>
                                                                        <li><i className="flaticon-arrow-button" />100% Bảo mật</li>
                                                                        <li><i className="flaticon-arrow-button" />100% Chuẩn Seo</li>
                                                                    </ul>
                                                                </div>
                                                            </div>
                                                            <p className="last-info">Liên hệ chúng tôi để được phân tích, thiết kế và tư vấn miễn phí: 0944838788 - Tiến Dev - Đà Lạt</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    {/* project-details-area-end */}
                    {/* call-back-area */}
                    <section className="call-back-area">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="call-back-content">
                                        <div className="section-title white-title mb-10">
                                            <h2 className="title">Gửi yêu cầu</h2>
                                        </div>
                                        <p>Chung tôi sẵn sáng tiếp nhận các yêu cầu và tư vấn miễn phí cho các Doanh nghiệp, định hình và phát triển thương hiệu.</p>
                                        <div className="shape">
                                            <img src="/assets/img/images/call_back_shape.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="call-back-form">
                                        <ProjectForm />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

            </Layout>
        </>
    )
}

export default ProjectDetail;