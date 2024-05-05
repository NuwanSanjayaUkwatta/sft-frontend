import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "./api";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      message: ""
    },
    validate: values => {
      const errors = {};
      if (!values.name) {
        errors.name = "Name is required";
      }
      if (!values.phone) {
        errors.phone = "Phone is required";
      } else if (!/^\d{10}$/.test(values.phone)) {
        errors.phone = "Invalid phone number";
      }
      if (!values.email) {
        errors.email = "Email is required";
      } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
        errors.email = "Invalid email address";
      }
      // Add validation rules for other fields if needed
      return errors;
    },
    onSubmit: async values => {
      try {
        const response = await axios.post("/api/contact/create", values);
        setIsSubmitted(true);
      } catch (error) {
        console.error(error);
      }
    }
  });

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="px-6 py-8 md:flex md:items-center md:justify-between">
            <div className="mb-6 md:mb-0">
              <h2 className="text-2xl font-semibold text-gray-800 mb-2">Contact Us</h2>
              <p className="text-gray-600">Get in touch with us for any inquiries or assistance.</p>
            </div>
            <div className="md:flex-shrink-0">
              <button onClick={formik.handleSubmit} className="bg-green-500 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg">Send Message</button>
            </div>
          </div>
          <div className="px-6 py-8">
            <form onSubmit={formik.handleSubmit}>
              <div className="md:flex md:items-center">
                <div className="md:w-1/3">
                  <label className="block text-gray-600 font-semibold mb-1">Name</label>
                  <input
                    type="text"
                    className="w-full bg-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:bg-white"
                    placeholder="Your name"
                    name="name"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                  />
                  {formik.errors.name && <div className="text-red-500 text-sm">{formik.errors.name}</div>}
                </div>
                <div className="md:w-1/3 md:ml-6 mt-4 md:mt-0">
                  <label className="block text-gray-600 font-semibold mb-1">Email</label>
                  <input
                    type="email"
                    className="w-full bg-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:bg-white"
                    placeholder="Your email"
                    name="email"
                    onChange={formik.handleChange}
                    value={formik.values.email}
                  />
                  {formik.errors.email && <div className="text-red-500 text-sm">{formik.errors.email}</div>}
                </div>
                <div className="md:w-1/3 md:ml-6 mt-4 md:mt-0">
                  <label className="block text-gray-600 font-semibold mb-1">Phone</label>
                  <input
                    type="tel"
                    className="w-full bg-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:bg-white"
                    placeholder="Your phone"
                    name="phone"
                    onChange={formik.handleChange}
                    value={formik.values.phone}
                  />
                  {formik.errors.phone && <div className="text-red-500 text-sm">{formik.errors.phone}</div>}
                </div>
              </div>
              <div className="mt-6">
                <label className="block text-gray-600 font-semibold mb-1">Message</label>
                <textarea
                  className="w-full bg-gray-200 rounded-lg px-4 py-2 focus:outline-none focus:bg-white"
                  rows="4"
                  placeholder="Your message"
                  name="message"
                  onChange={formik.handleChange}
                  value={formik.values.message}
                ></textarea>
                {/* Add error message for message field if needed */}
              </div>
            </form>
          </div>
        </div>
      </div>
      {isSubmitted && formik.isValid && (
        <div className="fixed top-5 left-0 right-0 mx-auto max-w-md bg-green-500 text-white py-2 px-4 rounded-lg text-center">
          Message sent successfully!
        </div>
      )}
    </div>
  );
};

export default Contact;