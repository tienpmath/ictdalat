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

    const sendgoooglesheet = await fetch(`https://script.google.com/macros/s/AKfycbzG0S4P0HHKaXfD-TXvo1iAbppQwT8FSn0sWT_JnFVi60ZQVJkB9uI3l4YY3u30Hp--3g/exec`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: fullName, email: email, phone: phone, subject: subject, content: messageBody }),
    });
    const resultsend = await sendgoooglesheet.json();

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