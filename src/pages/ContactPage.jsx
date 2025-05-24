import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { submitContact } from "../services/api";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaCheckCircle,
  FaExclamationTriangle,
  FaClock,
  FaUsers,
  FaHandshake,
  FaRocket,
  FaTelegram,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
  FaCalendarAlt,
  FaBullhorn,
  FaLightbulb,
} from "react-icons/fa";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    company: "",
    service: "",
    budget: "",
    message: "",
  });
  const [status, setStatus] = useState({
    submitting: false,
    submitted: false,
    error: null,
  });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
      setFormData({
        name: "",
        phone: "",
        email: "",
        company: "",
        service: "",
        budget: "",
        message: "",
      });
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

  const contactInfo = [
    {
      icon: FaMapMarkerAlt,
      title: "Bizning manzil",
      content: "Toshkent sh., Shayxontohur tumani, IT Park",
      subContent: "Ish vaqti: Du-Ju 9:00-18:00",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaPhoneAlt,
      title: "Telefon raqam",
      content: "+998 90 123 45 67",
      subContent: "24/7 qo'llab-quvvatlash",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaEnvelope,
      title: "Email manzil",
      content: "info@itcompany.uz",
      subContent: "24 soat ichida javob beramiz",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const socialLinks = [
    {
      icon: FaTelegram,
      url: "#",
      name: "Telegram",
      color: "hover:text-blue-500",
    },
    {
      icon: FaFacebook,
      url: "#",
      name: "Facebook",
      color: "hover:text-blue-600",
    },
    {
      icon: FaInstagram,
      url: "#",
      name: "Instagram",
      color: "hover:text-pink-500",
    },
    {
      icon: FaLinkedin,
      url: "#",
      name: "LinkedIn",
      color: "hover:text-blue-700",
    },
    {
      icon: FaWhatsapp,
      url: "#",
      name: "WhatsApp",
      color: "hover:text-green-500",
    },
  ];

  const reasons = [
    {
      icon: FaClock,
      title: "Tez javob",
      description: "24 soat ichida sizning so'rovingizga javob beramiz",
    },
    {
      icon: FaUsers,
      title: "Professional jamoa",
      description: "Tajribali mutaxassislar bilan ishlaysiz",
    },
    {
      icon: FaHandshake,
      title: "Bepul konsultatsiya",
      description: "Birinchi konsultatsiya mutlaqo bepul",
    },
    {
      icon: FaRocket,
      title: "Tezkor ishga tushirish",
      description: "Loyihani tez va sifatli amalga oshiramiz",
    },
  ];

  const serviceOptions = [
    "Web Development",
    "Mobile App Development",
    "E-commerce Solutions",
    "UI/UX Design",
    "Digital Marketing",
    "Cloud Solutions",
    "Cybersecurity",
    "Boshqa",
  ];

  const budgetRanges = [
    "1-5 mln so'm",
    "5-15 mln so'm",
    "15-50 mln so'm",
    "50-100 mln so'm",
    "100+ mln so'm",
    "Muhokama qilamiz",
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-medium text-blue-200 bg-blue-800 bg-opacity-50 rounded-full backdrop-blur-sm">
                📞 Let's Connect
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
              Biz bilan
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Bog'laning
              </span>
            </h1>
            <p className="mb-8 text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Loyihangiz haqida gaplashib, sizning g'oyalaringizni hayotga
              tatbiq etish uchun bepul konsultatsiya oling. Biz har doim
              aloqada!
            </p>

            <div className="flex justify-center space-x-4">
              {socialLinks.slice(0, 3).map((social, index) => {
                const Icon = social.icon;
                return (
                  <a
                    key={index}
                    href={social.url}
                    className="p-4 text-2xl text-white transition-all duration-300 bg-white bg-opacity-20 rounded-full backdrop-blur-sm hover:bg-opacity-30 hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-3">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <div
                  key={index}
                  className={`group p-8 text-center transition-all duration-500 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-2xl hover:-translate-y-3 dark:from-slate-800 dark:to-slate-700 ${
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mb-6 text-white transition-all duration-300 bg-gradient-to-br ${info.color} rounded-2xl group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="mb-3 text-xl font-semibold">{info.title}</h3>
                  <p className="mb-2 text-lg font-medium text-blue-600 dark:text-blue-400">
                    {info.content}
                  </p>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {info.subContent}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div className="p-8 bg-white rounded-2xl shadow-2xl dark:bg-slate-900">
              <div className="mb-8">
                <h2 className="mb-4 text-3xl font-bold">
                  Loyiha haqida gaplashing
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Quyidagi formani to'ldiring va biz siz bilan 24 soat ichida
                  bog'lanamiz
                </p>
              </div>

              {status.submitted ? (
                <div className="p-8 text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-white bg-green-500 rounded-full">
                    <FaCheckCircle className="text-2xl" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-green-600">
                    Xabar muvaffaqiyatli yuborildi!
                  </h3>
                  <p className="mb-6 text-gray-600 dark:text-gray-300">
                    Rahmat! Biz tez orada siz bilan bog'lanamiz va loyihangiz
                    bo'yicha batafsil gaplashamiz.
                  </p>
                  <button
                    className="inline-flex items-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
                    onClick={() => setStatus({ ...status, submitted: false })}
                  >
                    Yana xabar yuborish
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {status.error && (
                    <div className="flex items-center p-4 text-red-700 bg-red-100 rounded-xl dark:bg-red-900 dark:text-red-200">
                      <FaExclamationTriangle className="mr-3" />
                      {status.error}
                    </div>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                        Ismingiz *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Ismingizni kiriting"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                        Telefon raqam *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="+998 XX XXX XX XX"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                        Email
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                        Kompaniya nomi
                      </label>
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                        placeholder="Kompaniya nomi"
                      />
                    </div>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                        Qiziqtirgan xizmat
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Xizmatni tanlang</option>
                        {serviceOptions.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                        Loyiha byudjeti
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Byudjetni tanlang</option>
                        {budgetRanges.map((budget, index) => (
                          <option key={index} value={budget}>
                            {budget}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block mb-2 font-medium text-gray-700 dark:text-gray-300">
                      Loyiha tavsifi
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl dark:border-slate-600 dark:bg-slate-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Loyihangiz haqida batafsil ma'lumot bering..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={status.submitting}
                    className="group w-full inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {status.submitting ? (
                      <>
                        <div className="w-6 h-6 mr-3 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        Yuborilmoqda...
                      </>
                    ) : (
                      <>
                        <FaPaperPlane className="mr-3 transition-transform group-hover:translate-x-1" />
                        Xabar yuborish
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>

            {/* Additional Info */}
            <div className="space-y-8">
              {/* Why Choose Us */}
              <div className="p-8 bg-white rounded-2xl shadow-lg dark:bg-slate-900">
                <h3 className="mb-6 text-2xl font-bold">
                  Nega bizni tanlaysiz?
                </h3>
                <div className="space-y-6">
                  {reasons.map((reason, index) => {
                    const Icon = reason.icon;
                    return (
                      <div key={index} className="flex items-start">
                        <div className="flex-shrink-0 w-12 h-12 mr-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <Icon className="text-white text-xl" />
                        </div>
                        <div>
                          <h4 className="mb-2 text-lg font-semibold">
                            {reason.title}
                          </h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            {reason.description}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Quick Actions */}
              <div className="p-8 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl dark:from-slate-800 dark:to-slate-700">
                <h3 className="mb-6 text-2xl font-bold">Tezkor aloqa</h3>
                <div className="space-y-4">
                  <a
                    href="tel:+998901234567"
                    className="flex items-center p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 dark:bg-slate-800"
                  >
                    <div className="w-12 h-12 mr-4 bg-green-500 rounded-xl flex items-center justify-center">
                      <FaPhoneAlt className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Qo'ng'iroq qiling</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        +998 90 123 45 67
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://t.me/imaxitcompany"
                    className="flex items-center p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 dark:bg-slate-800"
                  >
                    <div className="w-12 h-12 mr-4 bg-blue-500 rounded-xl flex items-center justify-center">
                      <FaTelegram className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">Telegram orqali</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        @imaxitcompany
                      </div>
                    </div>
                  </a>

                  <a
                    href="https://wa.me/998901234567"
                    className="flex items-center p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 dark:bg-slate-800"
                  >
                    <div className="w-12 h-12 mr-4 bg-green-500 rounded-xl flex items-center justify-center">
                      <FaWhatsapp className="text-white" />
                    </div>
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        +998 90 123 45 67
                      </div>
                    </div>
                  </a>
                </div>
              </div>

              {/* Office Hours */}
              <div className="p-8 bg-white rounded-2xl shadow-lg dark:bg-slate-900">
                <h3 className="mb-6 text-2xl font-bold">Ish vaqti</h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="font-medium">Dushanba - Juma</span>
                    <span className="text-blue-600 dark:text-blue-400">
                      9:00 - 18:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Shanba</span>
                    <span className="text-blue-600 dark:text-blue-400">
                      10:00 - 16:00
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="font-medium">Yakshanba</span>
                    <span className="text-gray-500">Dam olish</span>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-blue-50 rounded-xl dark:bg-blue-900 dark:bg-opacity-20">
                  <div className="flex items-center">
                    <FaCalendarAlt className="mr-3 text-blue-600" />
                    <div>
                      <div className="font-semibold text-blue-800 dark:text-blue-300">
                        Bepul konsultatsiya
                      </div>
                      <div className="text-sm text-blue-600 dark:text-blue-400">
                        Oldindan vaqt belgilash talab etiladi
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Bizning joylashuvimiz</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              IT Park markazida joylashgan zamonaviy ofisimizga tashrif buyuring
            </p>
          </div>

          <div className="grid gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="overflow-hidden rounded-2xl shadow-2xl h-96">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1212.1110278570511!2d69.2798461432335!3d41.32559081584836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8b685b1e7941%3A0x9c79d2a5e373408!2z0KLQsNGI0LrQtdC90YLRgdC60LjQuSDQmNCkINCS0LDRgNC6!5e0!3m2!1sru!2s!4v1684839384359!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="IT Park Location"
                  className="filter brightness-95 hover:brightness-100 transition-all duration-300"
                ></iframe>
              </div>
            </div>

            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl dark:from-slate-800 dark:to-slate-700">
                <h3 className="mb-4 text-xl font-bold">Manzil ma'lumotlari</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <FaMapMarkerAlt className="mt-1 mr-3 text-red-500" />
                    <div>
                      <div className="font-medium">
                        Toshkent sh., Shayxontohur tumani
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        IT Park, A blok, 15-qavat
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaBullhorn className="mt-1 mr-3 text-blue-500" />
                    <div>
                      <div className="font-medium">Metro bekat</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Ming Urik (5 daqiqa piyoda)
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <FaLightbulb className="mt-1 mr-3 text-yellow-500" />
                    <div>
                      <div className="font-medium">Maslahat</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        Avval qo'ng'iroq qiling
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 bg-white rounded-2xl shadow-lg dark:bg-slate-900">
                <h3 className="mb-4 text-xl font-bold">Ijtimoiy tarmoqlar</h3>
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.url}
                        className={`p-3 text-gray-400 transition-all duration-300 bg-gray-100 rounded-xl hover:bg-gray-200 dark:bg-slate-800 dark:hover:bg-slate-700 ${social.color}`}
                        aria-label={social.name}
                      >
                        <Icon className="text-xl" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Ko'p so'raladigan savollar
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Mijozlarimiz tez-tez so'raydigan savollarga javoblar
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {[
              {
                question: "Loyihani bajarish uchun qancha vaqt kerak?",
                answer:
                  "Loyiha murakkabligiga qarab, oddiy veb-sayt uchun 2-4 hafta, murakkab tizimlar uchun 2-6 oy vaqt ketishi mumkin.",
              },
              {
                question: "To'lov qanday amalga oshiriladi?",
                answer:
                  "Odatda loyihaning 50% oldindan to'lanadi, qolgan qismi esa loyiha tugagandan keyin to'lanadi. Katta loyihalar uchun bosqichma-bosqich to'lov ham mumkin.",
              },
              {
                question: "Loyiha tugagandan keyin qo'llab-quvvatlash bormi?",
                answer:
                  "Ha, biz barcha loyihalar uchun 6 oy bepul texnik qo'llab-quvvatlash va kerakli o'zgartirishlarni amalga oshiramiz.",
              },
              {
                question: "Masofaviy ishlash mumkinmi?",
                answer:
                  "Albatta! Biz butun dunyo bo'ylab mijozlar bilan muvaffaqiyatli hamkorlik qilamiz. Barcha jarayonlar onlayn tarzda tashkil etiladi.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg dark:bg-slate-900"
              >
                <h3 className="mb-3 text-xl font-semibold text-blue-600 dark:text-blue-400">
                  {faq.question}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 text-white bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container relative z-10 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Loyihangizni bugun boshlang!
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-blue-100">
            Professional jamoa bilan ishlang va o'z g'oyalaringizni hayotga
            tatbiq eting
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <a
              href="tel:+998901234567"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 bg-white rounded-xl hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
            >
              <FaPhoneAlt className="mr-2" />
              Qo'ng'iroq qiling
            </a>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white border-opacity-30 rounded-xl backdrop-blur-sm hover:bg-white hover:bg-opacity-10 hover:shadow-xl hover:-translate-y-1"
            >
              Xizmatlarni ko'rish
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
