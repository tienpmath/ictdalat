
import { addQuery } from "@/actions/AddQuery"



export default function ProjectForm() {


    return (
        <>

            <form action={addQuery}>
                <div className="row">
                    <div className="col-md-6">
                        <div className="form-grp">
                            <input type="text" required name="fullName" placeholder="Họ và tên *" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-grp">
                            <input type="email" required name="email" placeholder="E-mail *" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-grp">
                            <input type="number" required maxLength={10} name="phone" placeholder="Số điện thoại *" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="form-grp">
                            <input type="text" required name="subject" placeholder="Tiêu đề *" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <button type="submit" className="btn">Gửi đi</button>
                    </div>
                </div>
            </form>

        </>
    )

}
