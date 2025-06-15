// import { useState } from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const ContactPage = () => {
    // const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    // const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    //     setFormData({ ...formData, [e.target.name]: e.target.value });
    // };

    // const handleSubmit = (e: React.FormEvent) => {
    //     e.preventDefault();
    //     alert("Message sent!");
    //     setFormData({ name: "", email: "", message: "" });
    // };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-16 text-white">
            <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
            <p className="text-center mb-5">
                Have a question or want to work together? Feel free to send a message!
            </p>
            <div className="flex justify-center space-x-5 mb-10">
                <a href="https://www.linkedin.com/in/lex-renders/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                    </svg>
                    <span className="sr-only">LinkedIn</span>
                </a>
            </div>
            <div className="text-center space-y-4 mb-10">
                <h2 className="text-2xl font-semibold mb-2">Contact Info</h2>
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                    <EnvelopeIcon className="h-5 w-5 text-purple-400" />
                    <a href="mailto:lex.renders@example.com" className="text-white hover:underline">
                        renders.lex@gmail.com
                    </a>
                </div>
                <div className="flex items-center justify-center space-x-2 text-gray-300">
                    <MapPinIcon className="h-5 w-5 text-purple-400" />
                    <span className="text-white">Geel, Belgium</span>
                </div>
            </div>
            <div className="h-100"></div>
            {/* <form
                action="https://formspree.io/f/xwpbkezy"
                method="POST"
                className="space-y-6"
                onSubmit={handleSubmit}>
                <div>
                    <label className="block mb-1 text-sm font-medium">Name</label>
                    <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-blue-950 text-white border border-purple-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-medium">Email</label>
                    <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-blue-950 text-white border border-purple-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <div>
                    <label className="block mb-1 text-sm font-medium">Message</label>
                    <textarea
                        name="message"
                        rows={5}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full bg-blue-950 text-white border border-purple-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500" />
                </div>
                <button
                    type="submit"
                    className="bg-purple-700 hover:bg-purple-800 transition-colors text-white font-semibold px-6 py-2 rounded-lg">
                    Send Message
                </button>
            </form> */}
        </div>
    );
};

export default ContactPage;
