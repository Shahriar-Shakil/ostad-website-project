"use client";

import toast, { Toaster } from "react-hot-toast";
import { useState } from "react";
import axios from "axios";

const Contacts = () => {
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    email: "",
    msg: "",
  });
  const [loading, setLoading] = useState(false);
  const onChange = (data, key) => {
    setFormData((prev) => {
      return { ...prev, [key]: data };
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (formData.fname.length === 0) {
      toast.error("First Name Required");
    } else if (formData.lname.length === 0) {
      toast.error("Last Name Required");
    } else if (formData.email.length === 0) {
      toast.error("Email Required");
    } else if (formData.msg.length === 0) {
      toast.error("Message Required");
    }
    try {
      const rawResponse = await axios.post("/api/contact", formData);
      toast.success("Your Message Sent Successfully");
    } catch (error) {
      toast.success("something Bad happen");
    } finally {
      setLoading(false);
    }
  };
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap items-center justify-center -mx-4">
          <div className="mb-16 lg:mb-0 max-w-2xl lg:w-1/2 px-4">
            <a
              className="mb-6 inline-block text-3xl font-bold leading-none"
              href="#"
            >
              <img
                className="h-12"
                src="atis-assets/logo/atis/atis-mono-sign.svg"
                alt=""
                width="auto"
              />
            </a>
            <h2 className="mb-4 text-4xl md:text-5xl font-bold font-heading">
              So much more than a business analytics tool
            </h2>
            <p className="mb-8 text-gray-500 leading-loose">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Pellentesque efficitur nisl sodales egestas lobortis.
            </p>
            <a
              className="inline-block py-2 px-6 bg-green-600 hover:bg-green-700 text-white font-bold leading-loose transition duration-250 rounded-l-xl rounded-t-xl"
              href="#"
            >
              Get Started
            </a>
          </div>
          <div className="w-full lg:w-1/2 px-4">
            <div className="max-w-sm mx-auto lg:mr-0 lg:ml-auto">
              <div className="mb-6 py-8 px-6 bg-white shadow rounded-t-3xl rounded-bl-3xl text-center">
                <form onSubmit={handleSubmit}>
                  <div className="mb-6">
                    <span className="text-sm text-gray-400">Sign Up</span>
                    <h4 className="text-2xl">Create an account</h4>
                  </div>
                  <div className="mb-4 flex flex-wrap -mx-2">
                    <div className="mb-4 lg:mb-0 w-full lg:w-1/2 px-2">
                      <input
                        className="py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                        type="text"
                        placeholder="First Name"
                        onChange={(e) => onChange(e.target.value, "fname")}
                      />
                    </div>
                    <div className="w-full lg:w-1/2 px-2">
                      <input
                        className="py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                        type="text"
                        placeholder="Last Name"
                        onChange={(e) => onChange(e.target.value, "lname")}
                      />
                    </div>
                  </div>
                  <input
                    className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                    type="email"
                    placeholder="hello@example.com"
                    onChange={(e) => onChange(e.target.value, "email")}
                  />
                  <textarea
                    className="mb-4 py-2 px-3 w-full bg-gray-50 rounded leading-loose"
                    type="email"
                    placeholder="Message"
                    onChange={(e) => onChange(e.target.value, "msg")}
                  />

                  <button
                    disabled={loading}
                    className={`${
                      loading ? "bg-green-600/30" : "bg-green-600"
                    } mb-4 py-4 w-full rounded text-sm  hover:bg-green-700 text-white font-bold leading-normal transition duration-200`}
                  >
                    {loading ? "Sending" : "Send"}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster position="bottom-center" />
    </section>
  );
};

export default Contacts;
