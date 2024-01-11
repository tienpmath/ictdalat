import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: 'ICT Đà Lạt',
        short_name: 'Tiến Dev 0944838788 chuyên Thiết kế website phần mềm Đà Lạt',
        description: 'Thiết kế website phần mềm Đà Lạt, Bảo Lộc, Lâm Đồng',
        start_url: '/',
        display: 'standalone',
        background_color: '#fff',
        theme_color: '#fff',
        icons: [
            {
                src: '/favicon.ico',
                sizes: 'any',
                type: 'image/x-icon',
            },
        ],
    }
}