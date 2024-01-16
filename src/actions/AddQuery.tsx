// /services/actions/AddQuery
'use server'

import { redirect } from 'next/navigation'


export async function addQuery(formData: FormData) {
    const fullName = formData.get('fullName');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const phone = formData.get('phone');
    const messageBody = formData.get('messageBody');
    // console.log(fullName);

    // console.log(JSON.stringify({ fullName: fullName, email: email, messageBody: subject, phone: phone, subject: fullName }));

    const response = await fetch(`https://api.ictdalat.vn/api/ContactQuery`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ fullName: fullName, email: email, phone: phone, subject: subject, messageBody: messageBody }),
    });
    const result = await response.json();

    if (result) {
        // console.log(result);
        //     //  message.success("Gửi data thành công succeed!")
        // const notify = () => toast("Wow so easy!");
        // toast("Bạn đã gửi thông tin thành công ");
        ////  notify();

        // <Noti />
        redirect('/')
    }
    return result;
}