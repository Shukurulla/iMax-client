import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getServices } from "../services/api";
import { generateUrl } from "../utils/generateUrl";
import {
  FaCode,
  FaMobile,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaCheckCircle,
  FaStar,
  FaArrowRight,
  FaClock,
  FaMoneyBillWave,
  FaLightbulb,
  FaHeadset,
} from "react-icons/fa";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const f = new Intl.NumberFormat("es-sp");

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices();
        setServices(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Xizmatlarni yuklashda xatolik:", error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const categories = [
    { id: "all", name: "Barcha xizmatlar", icon: FaRocket },
    { id: "web", name: "Web Development", icon: FaCode },
    { id: "mobile", name: "Mobile Apps", icon: FaMobile },
    { id: "cloud", name: "Cloud Solutions", icon: FaCloud },
    { id: "security", name: "Cybersecurity", icon: FaShieldAlt },
  ];

  const features = [
    {
      icon: FaCheckCircle,
      title: "Sifat kafolati",
      description: "100% sifatli va professional yechimlar",
    },
    {
      icon: FaClock,
      title: "Tez yetkazib berish",
      description: "Belgilangan muddatda loyihani tugallash",
    },
    {
      icon: FaHeadset,
      title: "24/7 qo'llab-quvvatlash",
      description: "Doimiy texnik yordam va konsultatsiya",
    },
    {
      icon: FaLightbulb,
      title: "Innovatsion yechimlar",
      description: "Eng so'nggi texnologiyalar bilan ishlash",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Konsultatsiya",
      description: "Sizning ehtiyojlaringizni o'rganamiz va tahlil qilamiz",
    },
    {
      step: "02",
      title: "Rejalashtirish",
      description: "Loyiha bo'yicha batafsil reja va strategiya tuzamiz",
    },
    {
      step: "03",
      title: "Ishlab chiqish",
      description: "Professional jamoa tomonidan loyihani amalga oshirish",
    },
    {
      step: "04",
      title: "Testlash",
      description: "Sifatni ta'minlash uchun har tomonlama sinovdan o'tkazish",
    },
    {
      step: "05",
      title: "Yetkazib berish",
      description: "Tayyor mahsulotni mijozga topshirish va o'rgatish",
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative py-20 text-white bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
        </div>

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-medium text-blue-200 bg-blue-800 bg-opacity-50 rounded-full backdrop-blur-sm">
                💼 Professional IT Services
              </span>
            </div>
            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
              Bizning
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Xizmatlar
              </span>
            </h1>
            <p className="mb-8 text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              IT biznesingiz uchun professional va zamonaviy xizmatlarning
              to'liq spektri. Sifatli yechimlar, tezkor yetkazib berish va
              doimiy qo'llab-quvvatlash.
            </p>

            <div className="flex justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 bg-white rounded-xl hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
              >
                <FaRocket className="mr-2" />
                Bepul konsultatsiya
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200 dark:bg-slate-800 dark:text-gray-300 dark:hover:bg-slate-700"
                  }`}
                >
                  <Icon className="mr-2" />
                  {category.name}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          {loading ? (
            <div className="flex justify-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service, index) => (
                <div
                  key={service._id}
                  className="group relative overflow-hidden transition-all duration-500 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-3 dark:bg-slate-900"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative p-8">
                    {/* Service Image */}
                    <div className="relative mb-6">
                      <div className="w-20 h-20 p-4 bg-gradient-to-br from-blue-100 to-purple-100 rounded-2xl group-hover:from-blue-600 group-hover:to-purple-600 transition-all duration-300 group-hover:scale-110 group-hover:rotate-6">
                        <img
                          src={generateUrl(service.image)}
                          alt={service.name}
                          className="w-full h-full object-cover rounded-lg group-hover:brightness-0 group-hover:invert transition-all duration-300"
                        />
                      </div>
                      <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                    </div>

                    {/* Service Title */}
                    <h3 className="mb-4 text-2xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                      {service.name}
                    </h3>

                    {/* Service Description */}
                    <p className="mb-6 text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-3">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6 space-y-2">
                      <div className="flex items-center text-sm text-green-600">
                        <FaCheckCircle className="mr-2 text-xs" />
                        Sifat kafolati
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <FaCheckCircle className="mr-2 text-xs" />
                        24/7 qo'llab-quvvatlash
                      </div>
                      <div className="flex items-center text-sm text-green-600">
                        <FaCheckCircle className="mr-2 text-xs" />
                        Bepul konsultatsiya
                      </div>
                    </div>

                    {/* Price and Duration */}
                    <div className="flex items-center justify-between p-4 mb-6 bg-gray-50 rounded-xl dark:bg-slate-800">
                      <div className="flex items-center">
                        <FaMoneyBillWave className="mr-2 text-green-500" />
                        <div>
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {f.format(service.price)} so'm
                          </div>
                          <div className="text-xs text-gray-500">
                            Boshlang'ich narx
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <FaClock className="mr-2 text-blue-500" />
                        <div className="text-right">
                          <div className="font-semibold text-gray-700 dark:text-gray-300">
                            {service.duration}
                          </div>
                          <div className="text-xs text-gray-500">
                            Bajarilish muddat
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Action Button */}
                    <Link
                      to="/contact"
                      className="group/btn w-full inline-flex items-center justify-center px-6 py-3 text-white font-semibold bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      Buyurtma berish
                      <FaArrowRight className="ml-2 transition-transform group-hover/btn:translate-x-1" />
                    </Link>
                  </div>

                  {/* Floating Elements */}
                  <div className="absolute top-4 right-4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
                  <div className="absolute bottom-4 left-4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Nega aynan bizni tanlaysiz?
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Biz bilan ishlashning asosiy afzalliklari
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 text-center transition-all duration-300 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:from-blue-600 hover:to-purple-600 hover:text-white hover:shadow-2xl hover:-translate-y-2 dark:from-slate-800 dark:to-slate-700"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-blue-600 transition-all duration-300 bg-white rounded-2xl group-hover:text-white group-hover:bg-white group-hover:bg-opacity-20 group-hover:scale-110">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-blue-100 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Ish jarayoni</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Loyihani qanday bosqichlarda amalga oshiramiz
            </p>
          </div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 hidden lg:block"></div>

            <div className="grid gap-8 md:grid-cols-3 lg:grid-cols-5">
              {processSteps.map((step, index) => (
                <div key={index} className="relative text-center">
                  {/* Step Number */}
                  <div className="relative mx-auto mb-6 w-24 h-24 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {step.step}
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full opacity-20 animate-ping"></div>
                  </div>

                  {/* Step Content */}
                  <div className="p-6 bg-white rounded-2xl shadow-lg dark:bg-slate-800">
                    <h3 className="mb-3 text-lg font-semibold">{step.title}</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
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
            Bepul konsultatsiya oling va loyihangiz uchun eng yaxshi yechimlarni
            toping
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 bg-white rounded-xl hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
            >
              <FaRocket className="mr-2" />
              Bepul konsultatsiya
            </Link>
            <Link
              to="/portfolio"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white border-opacity-30 rounded-xl backdrop-blur-sm hover:bg-white hover:bg-opacity-10 hover:shadow-xl hover:-translate-y-1"
            >
              Loyihalarni ko'rish
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
