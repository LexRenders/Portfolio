import { useState } from "react";
import { EnvelopeIcon, MapPinIcon } from "@heroicons/react/24/outline";

const ContactPage = () => {
    const [formData, setFormData] = useState({ name: "", email: "", message: "" });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert("Message sent!");
        setFormData({ name: "", email: "", message: "" });
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-16 text-white">
            <h1 className="text-4xl font-bold mb-4 text-center">Contact Me</h1>
            <p className="text-center mb-12">
                Have a question or want to work together? Feel free to send a message!
            </p>
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
            <form
                action="https://formspree.io/f/xwpbkezy"
                method="POST"
                className="space-y-6">
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
            </form>
        </div>
    );
};

export default ContactPage;
