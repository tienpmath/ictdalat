import Link from 'next/link'
import Image from 'next/image'

const BlogPost5 = async () => {


    //  const slug = props;
    //console.log(slug);
    const res = await fetch(
        `https://api.ictdalat.vn/api/Portfolio`,
        {
            method: "GET",
            cache: 'no-store'
        }
    );
    //const total_items = +(res.headers?.get("X-Total-Count") ?? 0)
    const data = await res.json();
    //console.log(data);
    return (
        <>
            <section className="blog__post-area-five">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-xl-6">
                            <div className="section-title text-center mb-50 tg-heading-subheading animation-style3">
                                <span className="sub-title">Dự án đã thực hiện</span>
                                <h2 className="title tg-element-title">Đã hoàn thành</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row gutter-24 justify-content-center">
                        {data.map((item) => (

                            <div key={item.id} className="col-lg-4 col-md-6">
                                <div className="blog__post-four shine-animate-item">
                                    <div className="blog__post-thumb-four">

                                        <Link href={"du-an/" + item.slug} className="shine-animate">

                                            <Image
                                                src={"https://admin.ictdalat.vn/" + item.image}
                                                width={250}
                                                height={150}
                                                alt={item.name}
                                            />
                                        </Link>
                                    </div>
                                    <div className="blog__post-content-four">
                                        <Link href="/du-an" className="blog__post-tag-three">Business</Link>
                                        <h2 className="title"><Link href={"/du-an/" + item.slug}>{item.name}</Link></h2>
                                        <div className="blog-post-meta blog-post-meta-two">
                                            <ul className="list-wrap">
                                                <li><i className="fas fa-calendar-alt" />Oct 21, 2024</li>
                                                <li><i className="far fa-comment-alt" /><Link href={"/du-an/" + item.slug}>02 Comments</Link></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
                <div className="blog-shape-wrap">
                    <img src="/assets/img/images/h5_blog_shape01.png" alt="" data-aos="fade-right" data-aos-delay={400} />
                    <img src="/assets/img/images/h5_blog_shape02.png" alt="" data-aos="fade-left" data-aos-delay={400} />
                </div>
            </section >
        </>
    )
}
export default BlogPost5;