import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getPortfolio } from "../services/api";
import { generateUrl } from "../utils/generateUrl";
import {
  FaCode,
  FaMobile,
  FaCloud,
  FaShieldAlt,
  FaRocket,
  FaEye,
  FaExternalLinkAlt,
  FaGithub,
  FaCalendarAlt,
  FaUser,
  FaTrophy,
  FaStar,
  FaArrowRight,
  FaLightbulb,
  FaHeart,
} from "react-icons/fa";

const PortfolioPage = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const response = await getPortfolio();
        setPortfolioItems(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Portfolioni yuklashda xatolik:", error);
        setLoading(false);
      }
    };

    fetchPortfolio();
  }, []);

  const categories = [
    { id: "all", name: "Barcha loyihalar", icon: FaRocket },
    { id: "web", name: "Web saytlar", icon: FaCode },
    { id: "mobile", name: "Mobil ilovalar", icon: FaMobile },
    { id: "ecommerce", name: "E-commerce", icon: FaShieldAlt },
    { id: "dashboard", name: "Dashboard", icon: FaCloud },
  ];

  const stats = [
    { icon: FaTrophy, number: "200+", label: "Tugallangan loyihalar" },
    { icon: FaHeart, number: "150+", label: "Mamnun mijozlar" },
    { icon: FaStar, number: "4.9", label: "O'rtacha baho" },
    { icon: FaCode, number: "50+", label: "Texnologiyalar" },
  ];

  const achievements = [
    {
      icon: FaTrophy,
      title: "Eng yaxshi veb-dizayn",
      description: "2024 yil IT Awards",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: FaRocket,
      title: "Eng tez o'suvchi kompaniya",
      description: "Startup Uzbekistan",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: FaStar,
      title: "Mijozlar tanlovi",
      description: "5 yil ketma-ket",
      color: "from-green-400 to-blue-500",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter(
          (item) =>
            item.category?.toLowerCase() === selectedCategory.toLowerCase()
        );

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
            <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
              Bajarilgan
              <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                Loyihalar
              </span>
            </h1>
            <p className="mb-8 text-xl text-blue-100 leading-relaxed max-w-3xl mx-auto">
              Bizning eng yaxshi loyihalarimizni ko'rib chiqing. Har bir loyiha
              mijozlarimizning ehtiyojlariga moslashtirilgan holda professional
              darajada yaratilgan.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mt-12 lg:grid-cols-4">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="p-6 bg-white bg-opacity-10 backdrop-blur-lg rounded-2xl border border-white border-opacity-20"
                  >
                    <Icon className="mx-auto mb-2 text-3xl text-blue-300" />
                    <div className="text-3xl font-bold">{stat.number}</div>
                    <div className="text-sm text-blue-200">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Bizning yutuqlarimiz</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Professional faoliyatimiz davomida qozongan mukofotlar
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <div
                  key={index}
                  className="group p-8 text-center transition-all duration-300 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-2xl hover:-translate-y-2 dark:from-slate-800 dark:to-slate-700"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mb-6 text-white transition-all duration-300 bg-gradient-to-br ${achievement.color} rounded-2xl group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="text-2xl" />
                  </div>
                  <h3 className="mb-2 text-xl font-semibold">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {achievement.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-16 bg-gray-50 dark:bg-slate-800">
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
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-105"
                      : "bg-white text-gray-700 hover:bg-gray-100 dark:bg-slate-700 dark:text-gray-300 dark:hover:bg-slate-600"
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

      {/* Portfolio Grid */}
      <section className="py-20 bg-white dark:bg-slate-900">
        <div className="container">
          {loading ? (
            <div className="flex justify-center">
              <div className="w-16 h-16 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
            </div>
          ) : (
            <div className="grid gap-12">
              {filteredProjects.map((item, index) => (
                <div
                  key={item._id}
                  className={`group overflow-hidden transition-all duration-700 bg-gradient-to-br from-white to-blue-50 rounded-3xl shadow-lg hover:shadow-2xl dark:from-slate-800 dark:to-slate-700 ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  }`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="grid gap-8 lg:grid-cols-2">
                    {/* Project Images */}
                    <div
                      className={`relative p-8 ${
                        index % 2 === 0 ? "lg:order-1" : "lg:order-2"
                      }`}
                    >
                      <div className="relative">
                        {/* Main Image */}
                        <div className="relative overflow-hidden rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">
                          <img
                            src={generateUrl(item.images[0])}
                            alt={`${item.name} main screenshot`}
                            className="w-full h-64 md:h-80 object-cover transition-transform duration-700 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                            <button
                              onClick={() => setSelectedProject(item)}
                              className="inline-flex items-center px-6 py-3 text-white bg-blue-600 rounded-xl hover:bg-blue-700 transition-colors duration-300"
                            >
                              <FaEye className="mr-2" />
                              Ko'rish
                            </button>
                          </div>
                        </div>

                        {/* Secondary Images */}
                        {item.images.length > 1 && (
                          <div className="grid grid-cols-2 gap-4 mt-4">
                            {item.images.slice(1, 3).map((image, imgIndex) => (
                              <div
                                key={imgIndex}
                                className="relative overflow-hidden rounded-xl shadow-lg"
                              >
                                <img
                                  src={generateUrl(image)}
                                  alt={`${item.name} screenshot ${
                                    imgIndex + 2
                                  }`}
                                  className="w-full h-32 object-cover transition-transform duration-500 hover:scale-110"
                                />
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Floating Elements */}
                        <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full animate-bounce"></div>
                        <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div
                      className={`p-8 lg:p-12 flex flex-col justify-center ${
                        index % 2 === 0 ? "lg:order-2" : "lg:order-1"
                      }`}
                    >
                      <div className="mb-4">
                        <span className="inline-block px-3 py-1 text-sm font-medium text-blue-600 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300">
                          Loyiha #{index + 1}
                        </span>
                      </div>

                      <h2 className="mb-4 text-3xl font-bold group-hover:text-blue-600 transition-colors duration-300">
                        {item.name}
                      </h2>

                      <p className="mb-6 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h3 className="mb-3 text-lg font-semibold">
                          Ishlatilgan texnologiyalar:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, techIndex) => (
                            <span
                              key={techIndex}
                              className="px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-full hover:bg-blue-200 transition-colors duration-300 dark:bg-blue-900 dark:text-blue-300 dark:hover:bg-blue-800"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Project Stats */}
                      <div className="grid grid-cols-2 gap-4 mb-6">
                        <div className="p-4 bg-gray-50 rounded-xl dark:bg-slate-700">
                          <div className="flex items-center mb-2">
                            <FaCalendarAlt className="mr-2 text-blue-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              Muddat
                            </span>
                          </div>
                          <div className="font-semibold">3-6 oy</div>
                        </div>
                        <div className="p-4 bg-gray-50 rounded-xl dark:bg-slate-700">
                          <div className="flex items-center mb-2">
                            <FaUser className="mr-2 text-green-500" />
                            <span className="text-sm text-gray-600 dark:text-gray-300">
                              Jamoa
                            </span>
                          </div>
                          <div className="font-semibold">5-8 kishi</div>
                        </div>
                      </div>

                      {/* Action Buttons */}
                      <div className="flex flex-wrap gap-4">
                        <button
                          onClick={() => setSelectedProject(item)}
                          className="inline-flex items-center px-6 py-3 font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl hover:from-blue-700 hover:to-purple-700 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                          <FaEye className="mr-2" />
                          Batafsil ko'rish
                        </button>
                        <button className="inline-flex items-center px-6 py-3 font-semibold text-blue-600 border-2 border-blue-600 rounded-xl hover:bg-blue-600 hover:text-white transition-all duration-300">
                          <FaExternalLinkAlt className="mr-2" />
                          Live Demo
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
        <div className="container">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Texnologiyalar va ko'nikmalar
            </h2>
            <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
              Loyihalarimizda foydalangan zamonaviy texnologiyalar
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              {
                name: "React.js",
                level: 95,
                color: "from-blue-500 to-cyan-500",
              },
              {
                name: "Node.js",
                level: 90,
                color: "from-green-500 to-emerald-500",
              },
              {
                name: "Python",
                level: 85,
                color: "from-yellow-500 to-orange-500",
              },
              {
                name: "MongoDB",
                level: 88,
                color: "from-purple-500 to-pink-500",
              },
              {
                name: "React Native",
                level: 82,
                color: "from-indigo-500 to-blue-500",
              },
              { name: "AWS", level: 78, color: "from-orange-500 to-red-500" },
              { name: "Docker", level: 85, color: "from-cyan-500 to-blue-500" },
              {
                name: "GraphQL",
                level: 80,
                color: "from-pink-500 to-purple-500",
              },
            ].map((skill, index) => (
              <div
                key={index}
                className="p-6 bg-white rounded-2xl shadow-lg dark:bg-slate-800"
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-semibold">{skill.name}</h3>
                  <span className="text-sm font-medium text-gray-500">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2 dark:bg-slate-700">
                  <div
                    className={`h-2 bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                    style={{ width: `${skill.level}%` }}
                  ></div>
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
            Sizning loyihangiz keyingisi bo'lsinmi?
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-blue-100">
            Bizning professional jamoa bilan birgalikda ajoyib loyiha yaratamiz!
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
              to="/services"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white border-opacity-30 rounded-xl backdrop-blur-sm hover:bg-white hover:bg-opacity-10 hover:shadow-xl hover:-translate-y-1"
            >
              Xizmatlarni ko'rish
            </Link>
          </div>
        </div>
      </section>

      {/* Modal for Project Details */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-75">
          <div className="relative max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl dark:bg-slate-800 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 p-2 text-gray-500 hover:text-gray-700 bg-white rounded-full shadow-lg dark:bg-slate-700 dark:text-gray-300"
            >
              ✕
            </button>

            <div className="p-8">
              <h2 className="mb-4 text-3xl font-bold">
                {selectedProject.name}
              </h2>
              <p className="mb-6 text-gray-600 dark:text-gray-300">
                {selectedProject.description}
              </p>

              <div className="grid gap-4 mb-6 md:grid-cols-2">
                {selectedProject.images.map((image, index) => (
                  <img
                    key={index}
                    src={generateUrl(image)}
                    alt={`${selectedProject.name} screenshot ${index + 1}`}
                    className="w-full h-48 object-cover rounded-xl"
                  />
                ))}
              </div>

              <div className="mb-6">
                <h3 className="mb-3 text-lg font-semibold">Texnologiyalar:</h3>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 text-sm font-medium text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PortfolioPage;
