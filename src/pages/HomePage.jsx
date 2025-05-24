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
  FaUsers,
  FaAward,
  FaCheckCircle,
  FaArrowRight,
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";
import { Logo, LogoTransparent } from "../../public";

const HomePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices();
        setServices(response.data.slice(0, 6));
        setLoading(false);
      } catch (error) {
        console.error("Xizmatlarni yuklashda xatolik:", error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  const stats = [
    { icon: FaUsers, number: "150+", label: "Mamnun mijozlar" },
    { icon: FaRocket, number: "200+", label: "Tugallangan loyihalar" },
    { icon: FaAward, number: "5+", label: "Yil tajriba" },
    { icon: FaCode, number: "50+", label: "Texnologiyalar" },
  ];

  const features = [
    {
      icon: FaCode,
      title: "Web Development",
      description: "Zamonaviy va responsiv veb-saytlar yaratamiz",
    },
    {
      icon: FaMobile,
      title: "Mobile Apps",
      description: "iOS va Android uchun mobil ilovalar",
    },
    {
      icon: FaCloud,
      title: "Cloud Solutions",
      description: "Bulutli texnologiyalar va hosting",
    },
    {
      icon: FaShieldAlt,
      title: "Cybersecurity",
      description: "Ma'lumotlar xavfsizligi va himoya",
    },
  ];

  const testimonials = [
    {
      name: "Jasur Karimov",
      position: "Biznes direktor",
      text: "IMAX IT Company bizning kompaniyamiz uchun ajoyib veb-sayt yaratdi. Professional yondashuv va sifatli natija.",
      rating: 5,
    },
    {
      name: "Dilnoza Rahimova",
      position: "Startup asoschisi",
      text: "Mobil ilovamizni ishlab berishda yordam berganingiz uchun rahmat. Juda tez va sifatli ish.",
      rating: 5,
    },
  ];

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Gradient va animatsiyalar bilan */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-900 via-blue-800 to-purple-800 dark:from-slate-900 dark:via-slate-800 dark:to-blue-900">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute top-0 -right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl animate-pulse animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 grid items-center gap-12 py-20 lg:grid-cols-2">
          <div className="text-white">
            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
              Kelajakni
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Yaratamiz
              </span>
            </h1>
            <p className="mb-8 text-xl text-blue-100 leading-relaxed">
              Zamonaviy texnologiyalar bilan biznesingizni raqamli dunyoga olib
              chiqamiz. Innovatsion yechimlar va professional yondashuv.
            </p>

            <div className="flex flex-col gap-4 sm:flex-row">
              <Link
                to="/services"
                className="group inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 bg-white rounded-xl hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
              >
                Xizmatlarimiz
                <FaArrowRight className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/portfolio"
                className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white border-opacity-30 rounded-xl backdrop-blur-sm hover:bg-white hover:bg-opacity-10 hover:shadow-xl hover:-translate-y-1"
              >
                Loyihalarimiz
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <Icon className="mx-auto mb-2 text-2xl text-blue-300" />
                    <div className="text-2xl font-bold">{stat.number}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            {/* Floating Cards Animation */}
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-2xl rotate-12 animate-bounce opacity-80"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-500 rounded-2xl -rotate-12 animate-pulse opacity-80"></div>
              <div className="relative p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl border border-white border-opacity-20">
                <img
                  src={LogoTransparent}
                  alt="IT Solutions"
                  className="w-full max-w-md mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50 dark:bg-slate-800">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Bizning imkoniyatlar</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Zamonaviy texnologiyalar va professional yondashuv bilan sizning
              ehtiyojlaringizni qondiramiz
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className="group p-8 text-center transition-all duration-300 bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 dark:bg-slate-700"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 mb-6 text-white transition-all duration-300 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl group-hover:scale-110 group-hover:rotate-6">
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="mb-4 text-xl font-semibold">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Bizning xizmatlar</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Professional IT xizmatlarining to'liq spektri
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service._id}
                    className="group overflow-hidden transition-all duration-300 bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 dark:bg-slate-800 dark:border-slate-700"
                  >
                    <div className="p-8">
                      <div className="flex items-center mb-6">
                        <img
                          src={generateUrl(service.image)}
                          alt={service.name}
                          className="object-cover w-16 h-16 rounded-xl"
                        />
                        <div className="ml-4">
                          <h3 className="text-xl font-semibold">
                            {service.name}
                          </h3>
                        </div>
                      </div>
                      <p className="mb-6 text-gray-600 dark:text-gray-300 line-clamp-3">
                        {service.description}
                      </p>
                      <div className="flex items-center justify-between pt-6 border-t border-gray-200 dark:border-slate-700">
                        <div>
                          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {service.price}
                          </div>
                          <div className="text-sm text-gray-500">
                            {service.duration}
                          </div>
                        </div>
                        <div className="p-3 text-blue-600 transition-all duration-300 bg-blue-50 rounded-xl group-hover:bg-blue-600 group-hover:text-white dark:bg-blue-900 dark:text-blue-400">
                          <FaArrowRight />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 text-center">
                <Link
                  to="/services"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:shadow-xl hover:-translate-y-1"
                >
                  Barcha xizmatlar
                  <FaArrowRight className="ml-2" />
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">Mijozlarimiz fikri</h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Bizning ishimiz haqida mijozlarimizning fikrlari
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="relative p-8 bg-white rounded-2xl shadow-lg dark:bg-slate-800"
              >
                <FaQuoteLeft className="absolute top-4 left-4 text-3xl text-blue-200" />
                <div className="pt-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="text-yellow-400" />
                    ))}
                  </div>
                  <p className="mb-6 text-lg text-gray-700 dark:text-gray-300">
                    "{testimonial.text}"
                  </p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-semibold">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="ml-4">
                      <div className="font-semibold">{testimonial.name}</div>
                      <div className="text-sm text-gray-500">
                        {testimonial.position}
                      </div>
                    </div>
                  </div>
                </div>
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
            Loyihangizni boshlashga tayyormisiz?
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-blue-100">
            Bizga bog'laning va biz sizning g'oyalaringizni professional IT
            yechimlar bilan hayotga tatbiq etamiz!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 bg-white rounded-xl hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
            >
              <FaRocket className="mr-2" />
              Loyihani boshlash
            </Link>
            <Link
              to="/about"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white border-opacity-30 rounded-xl backdrop-blur-sm hover:bg-white hover:bg-opacity-10 hover:shadow-xl hover:-translate-y-1"
            >
              Biz haqimizda
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
