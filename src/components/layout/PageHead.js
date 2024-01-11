import Head from 'next/head'

const PageHead = ({ headTitle }) => {
    return (
        <>
            <Head>
                <title>
                    {headTitle ? headTitle : "ICT Đà Lạt 2024 - Thiết kế website phần mềm chuyên nghiệp"}
                </title>
            </Head>
        </>
    )
}

export default PageHead