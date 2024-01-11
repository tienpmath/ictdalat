import Link from "next/link"

export default function Menu() {
    return (
        <>
            <ul className="navigation">
                <li className="active"><Link href="/">Home</Link>
                </li>
                <li><Link href="/gioi-thieu">Giới thiệu</Link></li>
                <li><Link href="/dich-vu">Dịch vụ</Link></li>

                <li><Link href="/contact">Liên hệ</Link></li>
            </ul>
        </>
    )
}
