import { useState } from "react"
import emailjs from '@emailjs/browser';
import { ToastContainer, toast, cssTransition } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import validate from "deep-email-validator-fix";

const Form = () => {

    const bounce = cssTransition({
        enter: "animate__animated animate__bounceIn",
        exit: "animate__animated animate__bounceOut"
    });

    const options = {
        transition: bounce,
        autoClose: 10,
        pauseOnHover: false,
        closeOnClick: true
    }

    const [loading, setLoading] = useState(false)

    const handleSubmit = async(x) => {
        x.preventDefault();
        setLoading(true)
        if (formValues.fname.length === 0 || formValues.lname.length === 0 || formValues.email.length === 0 || formValues.subject.length === 0 || formValues.content.length === 0){
            if (formValues.fname.length === 0) {
                toast.warn("Enter your First Name", options)
            }
            if (formValues.lname.length === 0) {
                toast.warn("Enter your Last Name", options)
            }
            if (formValues.email.length === 0) {
                toast.warn("Enter your Email Address", options)
            }
            if (formValues.subject.length === 0) {
                toast.warn("Enter the Subject for the Email", options)
            }
            if (formValues.content.length === 0) {
                toast.warn("Enter the Email body", options)
            }
        }
        else{
            var sendingEmail = await emailjs.send(
                "service_zopalck",
                "template_5f8nftd",
                {
                    message: formValues.content,
                    subject: formValues.subject,
                    from_name: formValues.fname + formValues.lname,
                    from_email: formValues.email
                },
                "45P9ZQPMf4F3SVAPp"
            )
            if (sendingEmail.status === 200 || sendingEmail.status === 201) {
                toast.success("Email Sent!", options)
                setFormValues({
                    fname: "",
                    lname: "",
                    email: "",
                    subject: "",
                    content: "",
                });
            }
            else {
                toast.error("Something went wrong!", options)
            }
        }
        setLoading(false)
    }

    const [formValues, setFormValues] = useState({
        fname: "",
        lname: "",
        email: "",
        subject: "",
        content: "",
    })

    return(
        <>
            <ToastContainer/>
            <form
                className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 justify-center items-center"
                method="POST"
                dataNetlify="true"
                onSubmit={async(e) => handleSubmit(e)}
            >
                <div className="sm:col-span-3">
                    <label htmlFor="first-name" className="block text-base font-medium leading-6">
                        First name
                    </label>
                    <div className="mt-2">
                        <input
                            value={formValues.fname}
                            onChange={(t) => { setFormValues({ ...formValues, fname: t.target.value }) }}
                            type="text"
                            name="first-name"
                            id="first-name"
                            className="block w-full rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="last-name" className="block text-base font-medium leading-6">
                        Last name
                    </label>
                    <div className="mt-2">
                        <input
                            value={formValues.lname}
                            onChange={(t) => { setFormValues({ ...formValues, lname: t.target.value }) }}
                            type="text"
                            name="last-name"
                            id="last-name"
                            autoComplete="family-name"
                            className="block w-full rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="email" className="block text-base font-medium leading-6">
                        Email address
                    </label>
                    <div className="mt-2">
                        <input
                            value={formValues.email}
                            onChange={(t) => { setFormValues({ ...formValues, email: t.target.value }) }}
                            id="email"
                            name="email"
                            type="email"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                        />
                    </div>
                </div>

                <div className="sm:col-span-3">
                    <label htmlFor="subject" className="block text-base font-medium leading-6">
                        Subject
                    </label>
                    <div className="mt-2">
                        <input
                            value={formValues.subject}
                            onChange={(t) => { setFormValues({ ...formValues, subject: t.target.value }) }}
                            id="suhject"
                            name="subject"
                            type="subject"
                            autoComplete="email"
                            className="block w-full rounded-md border-0 py-1.5 bg-transparent shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                        />
                    </div>
                </div>

                <div className="col-span-full">
                    <label htmlFor="about" className="block text-base font-medium leading-6">
                        Write a Message
                    </label>
                    <div className="mt-2">
                        <textarea
                            value={formValues.content}
                            onChange={(t) => { setFormValues({ ...formValues, content: t.target.value }) }}
                            id="about"
                            name="about"
                            rows={3}
                            className="block bg-transparent w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 pl-2"
                        />
                    </div>
                    <p className="mt-3 text-sm leading-6 text-gray-300">Write whatever's on your mind.</p>
                </div>

                <button
                    type='submit'
                    className='sendButton px-3 py-3 sm:col-span-2 justify-center items-center sm:col-start-3'
                    disabled={loading}
                >
                {loading ? <span className="loading loading-dots loading-lg" /> : 
                (
                    <>
                        <div className="svg-wrapper-1">
                            <div className="svg-wrapper">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    width="24"
                                    height="24"
                                    className='sendSvg'
                                >
                                    <path fill="none" d="M0 0h24v24H0z"></path>
                                    <path
                                        fill="currentColor"
                                        d="M1.946 9.315c-.522-.174-.527-.455.01-.634l19.087-6.362c.529-.176.832.12.684.638l-5.454 19.086c-.15.529-.455.547-.679.045L12 14l6-8-8 6-8.054-2.685z"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                        <span className='sendSpan'>Send</span>
                    </>
                )
                }
                </button>

            </form>
        </>
    )
}

export default Form;
