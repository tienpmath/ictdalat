import { Inter, Outfit } from 'next/font/google'
import "/public/assets/css/animate.min.css"
import "/public/assets/css/bootstrap.min.css"
import "/public/assets/css/flaticon.css"
import "/public/assets/css/fontawesome-all.min.css"
import "/public/assets/css/magnific-popup.css"
import "/public/assets/css/odometer.css"
import "/public/assets/css/swiper-bundle.css"
import "/public/assets/css/aos.css"
import "/public/assets/css/default.css"
import "/public/assets/css/main.css"
import 'react-toastify/dist/ReactToastify.css';

const inter = Inter({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: "--tg-body-font-family",
    display: 'swap',
})
const outfit = Outfit({
    weight: ['400', '500', '600', '700', '800', '900'],
    subsets: ['latin'],
    variable: "--tg-heading-font-family",
    display: 'swap',
})

export const metadata = {
    title: 'Thiết Kế Website Chuyên Nghiệp, Chuẩn SEO Đà Lạt - Lâm Đồng',
    description: 'ICT Đà Lạt là công ty thiết kế website chuyên nghiệp, uy tín tại Đà Lạt, Bảo Lộc.☎️ 0944838788 Dịch vụ Thiết kế website Đà Lạt - Lâm Đồng trọn gói chuẩn seo  2024✔️✔️ Thiết kế web bán hàng cao cấp, bảo trì trọn đời'
}

export default function RootLayout({ children }) {
    return (
        <html lang="vi">
            <body className={`${inter.variable} ${outfit.variable}`}>{children}</body>
        </html>
    )
}
