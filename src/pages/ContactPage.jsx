import React, { useState } from "react";
import { submitContact } from "../services/api";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, submitted: false, error: null });

    try {
      await submitContact(formData);
      setStatus({ submitting: false, submitted: true, error: null });
      setFormData({ name: "", phone: "" });
    } catch (error) {
      console.error("Formani yuborishda xatolik:", error);
      setStatus({
        submitting: false,
        submitted: false,
        error:
          "Formani yuborishda xatolik yuz berdi. Iltimos, keyinroq qayta urinib ko'ring.",
      });
    }
  };

  return (
    <div>
      {/* Header */}
      <section className="py-16 text-white bg-blue-700 dark:bg-slate-800">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold">Bog'lanish</h1>
          <p className="max-w-2xl mx-auto">
            Savollaringiz bormi? Biz bilan bog'laning va biz sizga yordam
            beramiz.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2">
            {/* Contact Info */}
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-slate-800">
              <h2 className="mb-6 text-2xl font-bold">Bizning Manzil</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <FaMapMarkerAlt className="mt-1 mr-4 text-2xl text-blue-700 dark:text-blue-400" />
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Manzil</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      Toshkent sh., Shayxontohur tumani, IT Park
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaPhoneAlt className="mt-1 mr-4 text-2xl text-blue-700 dark:text-blue-400" />
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Telefon</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      +998 90 123 45 67
                    </p>
                  </div>
                </div>
                <div className="flex items-start">
                  <FaEnvelope className="mt-1 mr-4 text-2xl text-blue-700 dark:text-blue-400" />
                  <div>
                    <h3 className="mb-1 text-lg font-semibold">Email</h3>
                    <p className="text-gray-600 dark:text-gray-300">
                      info@itcompany.uz
                    </p>
                  </div>
                </div>
              </div>

              {/* Google Map Embed */}
              <div className="mt-8 overflow-hidden rounded-lg h-80">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1212.1110278570511!2d69.2798461432335!3d41.32559081584836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b1e7941%3A0x9c79d2a5e373408!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQmNCkINCS0LDRgNC6!5e0!3m2!1sru!2s!4v1684839384359!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IT Park Location"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="p-6 bg-white rounded-lg shadow-md dark:bg-slate-800">
              <h2 className="mb-6 text-2xl font-bold">Bizga xabar qoldiring</h2>

              {status.submitted ? (
                <div className="p-4 mb-6 text-center text-green-700 bg-green-100 rounded-lg dark:bg-green-900 dark:text-green-200">
                  <p className="text-lg font-medium">
                    Xabaringiz muvaffaqiyatli yuborildi!
                  </p>
                  <p className="mt-2">Tez orada siz bilan bog'lanamiz.</p>
                  <button
                    className="mt-4 btn-primary"
                    onClick={() => setStatus({ ...status, submitted: false })}
                  >
                    Qayta yuborish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  {status.error && (
                    <div className="p-4 mb-6 text-red-700 bg-red-100 rounded-lg dark:bg-red-900 dark:text-red-200">
                      {status.error}
                    </div>
                  )}

                  <div className="mb-4">
                    <label
                      htmlFor="name"
                      className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
                    >
                      Ismingiz (ixtiyoriy)
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <div className="mb-6">
                    <label
                      htmlFor="phone"
                      className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
                    >
                      Telefon raqamingiz *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      placeholder="+998 XX XXX XX XX"
                      className="w-full px-4 py-2 border border-gray-300 rounded-lg dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="w-full btn-primary"
                  >
                    {status.submitting ? "Yuborilmoqda..." : "Yuborish"}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
