import Link from "next/link"
import { useState } from "react"

export default function MobileMenu() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: "",
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <ul className="navigation">
                <li className="active menu-item-has-children"><Link href="#">Home</Link>
                </li>
                <li><Link href="/gioi-thieu">Giới thiệu</Link></li>
                <li><Link href="/dich-vu">Dịch vụ</Link></li>
                <li><Link href="/lien-he">contacts</Link></li>
            </ul>
        </>
    )
}
