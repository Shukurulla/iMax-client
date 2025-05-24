import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAboutInfo } from "../services/api";
import { generateUrl } from "../utils/generateUrl";
import {
  FaRocket,
  FaUsers,
  FaLightbulb,
  FaHeart,
  FaTrophy,
  FaEye,
  FaBullseye,
  FaHandshake,
  FaGraduationCap,
  FaCode,
  FaAward,
  FaStar,
  FaQuoteLeft,
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaCalendarAlt,
} from "react-icons/fa";

const AboutPage = () => {
  const [aboutInfo, setAboutInfo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAboutInfo = async () => {
      try {
        const response = await getAboutInfo();
        setAboutInfo(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Ma'lumotlarni yuklashda xatolik:", error);
        setLoading(false);
      }
    };

    fetchAboutInfo();
  }, []);

  const companyStats = [
    {
      icon: FaCalendarAlt,
      number: "5+",
      label: "Yil tajriba",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: FaUsers,
      number: "150+",
      label: "Mamnun mijozlar",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: FaTrophy,
      number: "200+",
      label: "Tugallangan loyihalar",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: FaAward,
      number: "15+",
      label: "Mukofotlar",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const values = [
    {
      icon: FaLightbulb,
      title: "Innovatsiya",
      description:
        "Eng so'nggi texnologiyalar va kreativ yechimlar bilan ishlaymiz",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: FaHeart,
      title: "Mijozlarga e'tibor",
      description:
        "Har bir mijozning ehtiyojlarini chuqur tushunib yechim topamiz",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: FaHandshake,
      title: "Ishonch",
      description:
        "Uzukmuddatli hamkorlik va o'zaro ishonchga asoslangan munosabatlar",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: FaRocket,
      title: "Sifat",
      description:
        "Yuqori sifatli mahsulot va xizmatlarni taqdim etish bizning ustuvorimiz",
      color: "from-green-400 to-blue-500",
    },
  ];

  const milestones = [
    {
      year: "2019",
      title: "Kompaniya tashkil etildi",
      description: "Kichik jamoa bilan IT xizmatlar ko'rsatishni boshladik",
    },
    {
      year: "2020",
      title: "Birinchi yirik loyiha",
      description:
        "50+ mijozlar bilan hamkorlik va birinchi katta e-commerce loyihasi",
    },
    {
      year: "2021",
      title: "Jamoa kengaytirish",
      description: "20+ professional mutaxassis jamoaga qo'shildi",
    },
    {
      year: "2022",
      title: "Xalqaro hamkorlik",
      description: "Chet el mijozlari bilan ishlashni boshlash",
    },
    {
      year: "2023",
      title: "Texnologik o'sish",
      description: "AI va blockchain sohasida yangi loyihalar",
    },
    {
      year: "2024",
      title: "Industry leader",
      description: "O'zbekistondagi yetakchi IT kompaniyalaridan biri",
    },
  ];

  const teamRoles = [
    {
      title: "Frontend Developers",
      count: 8,
      icon: FaCode,
      color: "bg-blue-500",
    },
    {
      title: "Backend Developers",
      count: 6,
      icon: FaCode,
      color: "bg-green-500",
    },
    {
      title: "UI/UX Designers",
      count: 4,
      icon: FaLightbulb,
      color: "bg-purple-500",
    },
    {
      title: "Project Managers",
      count: 3,
      icon: FaUsers,
      color: "bg-orange-500",
    },
    {
      title: "DevOps Engineers",
      count: 2,
      icon: FaRocket,
      color: "bg-red-500",
    },
    { title: "QA Engineers", count: 3, icon: FaTrophy, color: "bg-cyan-500" },
  ];

  const testimonialFromCEO = {
    text: "Bizning maqsadimiz - mijozlarimizning raqamli transformatsiyasida ishonchli hamkor bo'lish. Har bir loyiha bizning professional o'sishimizga hissa qo'shadi.",
    author: "Jasur Karimov",
    position: "CEO va asoschisi",
    image: "/ceo-avatar.jpg",
  };

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
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6">
                <span className="inline-block px-4 py-2 text-sm font-medium text-blue-200 bg-blue-800 bg-opacity-50 rounded-full backdrop-blur-sm">
                  👥 About Our Company
                </span>
              </div>
              <h1 className="mb-6 text-5xl font-bold leading-tight lg:text-6xl">
                Biz
                <span className="block text-transparent bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text">
                  Haqimizda
                </span>
              </h1>
              <p className="mb-8 text-xl text-blue-100 leading-relaxed">
                IMAX IT Company - professional IT xizmatlarini taqdim etuvchi
                kompaniya. Biz zamonaviy texnologiyalar bilan mijozlarimizning
                raqamli transformatsiyasida yordam beramiz.
              </p>

              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  to="/contact"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 bg-white rounded-xl hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
                >
                  <FaHandshake className="mr-2" />
                  Hamkorlik qilish
                </Link>
                <Link
                  to="/portfolio"
                  className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white border-opacity-30 rounded-xl backdrop-blur-sm hover:bg-white hover:bg-opacity-10 hover:shadow-xl hover:-translate-y-1"
                >
                  Loyihalarni ko'rish
                </Link>
              </div>
            </div>

            <div className="relative">
              <div className="relative p-8 bg-white bg-opacity-10 backdrop-blur-lg rounded-3xl border border-white border-opacity-20">
                <img
                  src="/about-image.svg"
                  alt="About Us"
                  className="w-full max-w-md mx-auto"
                />
                {/* Floating stats */}
                <div className="absolute -top-6 -right-6 p-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl border border-white border-opacity-30">
                  <div className="text-2xl font-bold">5+</div>
                  <div className="text-sm">Yil tajriba</div>
                </div>
                <div className="absolute -bottom-6 -left-6 p-4 bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl border border-white border-opacity-30">
                  <div className="text-2xl font-bold">200+</div>
                  <div className="text-sm">Loyihalar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white dark:bg-slate-900">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {companyStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="group p-8 text-center transition-all duration-300 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-2xl hover:-translate-y-2 dark:from-slate-800 dark:to-slate-700"
                >
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 mb-6 text-white transition-all duration-300 bg-gradient-to-br ${stat.color} rounded-2xl group-hover:scale-110 group-hover:rotate-6`}
                  >
                    <Icon className="text-2xl" />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.number}</div>
                  <div className="text-gray-600 dark:text-gray-300">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Company Story */}
      {loading ? (
        <div className="flex justify-center py-16">
          <div className="w-16 h-16 border-4 border-blue-600 border-dashed rounded-full animate-spin"></div>
        </div>
      ) : (
        <>
          {/* Mission & Vision */}
          <section className="py-20 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-slate-800 dark:to-slate-700">
            <div className="container">
              <div className="grid gap-16 lg:grid-cols-2">
                {/* Mission */}
                <div className="group">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl">
                      <FaBullseye className="text-xl" />
                    </div>
                    <h2 className="text-3xl font-bold">Bizning missiya</h2>
                  </div>
                  <div className="p-8 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 dark:bg-slate-800">
                    <div
                      className="prose dark:prose-invert max-w-none text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html:
                          aboutInfo?.mission ||
                          "Mijozlarimizning biznesini raqamli texnologiyalar orqali rivojlantirish va ularning maqsadlariga erishishda ishonchli hamkor bo'lish.",
                      }}
                    />
                  </div>
                </div>

                {/* Vision */}
                <div className="group">
                  <div className="flex items-center mb-6">
                    <div className="inline-flex items-center justify-center w-12 h-12 mr-4 text-white bg-gradient-to-br from-purple-600 to-pink-600 rounded-xl">
                      <FaEye className="text-xl" />
                    </div>
                    <h2 className="text-3xl font-bold">Bizning vazifa</h2>
                  </div>
                  <div className="p-8 bg-white rounded-2xl shadow-lg group-hover:shadow-2xl transition-all duration-300 dark:bg-slate-800">
                    <div
                      className="prose dark:prose-invert max-w-none text-lg leading-relaxed"
                      dangerouslySetInnerHTML={{
                        __html:
                          aboutInfo?.vision ||
                          "O'zbekistondagi yetakchi IT kompaniyalaridan biri bo'lib, innovatsion yechimlar bilan mijozlarimizning raqamli kelajagini yaratish.",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Values */}
          <section className="py-20 bg-white dark:bg-slate-900">
            <div className="container">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-4xl font-bold">Bizning qadriyatlar</h2>
                <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                  Bizni boshqaruvchi asosiy tamoyillar va qadriyatlar
                </p>
              </div>

              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                {values.map((value, index) => {
                  const Icon = value.icon;
                  return (
                    <div
                      key={index}
                      className="group p-8 text-center transition-all duration-500 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-2xl hover:-translate-y-3 dark:from-slate-800 dark:to-slate-700"
                    >
                      <div
                        className={`inline-flex items-center justify-center w-16 h-16 mb-6 text-white transition-all duration-300 bg-gradient-to-br ${value.color} rounded-2xl group-hover:scale-110 group-hover:rotate-12`}
                      >
                        <Icon className="text-2xl" />
                      </div>
                      <h3 className="mb-4 text-xl font-semibold">
                        {value.title}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                        {value.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="py-20 bg-gray-50 dark:bg-slate-800">
            <div className="container">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-4xl font-bold">Bizning yo'lim</h2>
                <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                  Kompaniya tarixi va muhim voqealar
                </p>
              </div>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-purple-600 rounded-full hidden lg:block"></div>

                <div className="space-y-12">
                  {milestones.map((milestone, index) => (
                    <div
                      key={index}
                      className={`flex items-center ${
                        index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                      } gap-8`}
                    >
                      {/* Content */}
                      <div
                        className={`flex-1 ${
                          index % 2 === 0 ? "lg:text-right" : "lg:text-left"
                        }`}
                      >
                        <div className="p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 dark:bg-slate-900">
                          <div className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full">
                            {milestone.year}
                          </div>
                          <h3 className="mb-3 text-2xl font-bold">
                            {milestone.title}
                          </h3>
                          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                            {milestone.description}
                          </p>
                        </div>
                      </div>

                      {/* Timeline Point */}
                      <div className="relative z-10 hidden lg:block">
                        <div className="w-4 h-4 bg-white border-4 border-blue-600 rounded-full shadow-lg"></div>
                      </div>

                      {/* Spacer */}
                      <div className="flex-1 hidden lg:block"></div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Team Overview */}
          <section className="py-20 bg-white dark:bg-slate-900">
            <div className="container">
              <div className="mb-16 text-center">
                <h2 className="mb-4 text-4xl font-bold">Bizning jamoa</h2>
                <p className="max-w-2xl mx-auto text-xl text-gray-600 dark:text-gray-300">
                  Professional va tajribali mutaxassislarimiz
                </p>
              </div>

              {/* Team Composition */}
              <div className="grid gap-6 mb-16 md:grid-cols-2 lg:grid-cols-3">
                {teamRoles.map((role, index) => {
                  const Icon = role.icon;
                  return (
                    <div
                      key={index}
                      className="group p-6 bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl hover:shadow-lg transition-all duration-300 dark:from-slate-800 dark:to-slate-700"
                    >
                      <div className="flex items-center">
                        <div
                          className={`w-12 h-12 ${role.color} rounded-xl flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                        >
                          <Icon className="text-white text-xl" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">
                            {role.title}
                          </h3>
                          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">
                            {role.count}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Team Members */}
              {aboutInfo?.team?.length > 0 && (
                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {aboutInfo.team.map((member) => (
                    <div
                      key={member._id}
                      className="group p-6 text-center bg-white border border-gray-200 rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 dark:bg-slate-800 dark:border-slate-700"
                    >
                      <div className="relative mb-6">
                        <img
                          src={generateUrl(member.image)}
                          alt={member.name}
                          className="object-cover w-24 h-24 mx-auto rounded-full shadow-lg group-hover:scale-110 transition-transform duration-300"
                        />
                        <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                          <div className="w-3 h-3 bg-white rounded-full"></div>
                        </div>
                      </div>
                      <h3 className="mb-2 text-xl font-semibold group-hover:text-blue-600 transition-colors duration-300">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300 mb-4">
                        {member.position}
                      </p>
                      <div className="flex justify-center space-x-3">
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300">
                          <FaLinkedin />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300">
                          <FaTwitter />
                        </button>
                        <button className="p-2 text-gray-400 hover:text-blue-600 transition-colors duration-300">
                          <FaGithub />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>

          {/* CEO Testimonial */}
          <section className="py-20 bg-gradient-to-br from-blue-900 via-purple-800 to-blue-900 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900 text-white">
            <div className="container">
              <div className="max-w-4xl mx-auto text-center">
                <FaQuoteLeft className="mx-auto mb-8 text-6xl text-blue-300 opacity-50" />
                <blockquote className="mb-8 text-2xl font-light leading-relaxed">
                  "{testimonialFromCEO.text}"
                </blockquote>
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 bg-gradient-to-br from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                    {testimonialFromCEO.author.charAt(0)}
                  </div>
                  <div className="text-left">
                    <div className="text-xl font-semibold">
                      {testimonialFromCEO.author}
                    </div>
                    <div className="text-blue-200">
                      {testimonialFromCEO.position}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Culture & Benefits */}
          <section className="py-20 bg-white dark:bg-slate-900">
            <div className="container">
              <div className="grid gap-16 lg:grid-cols-2">
                {/* Company Culture */}
                <div>
                  <h2 className="mb-8 text-4xl font-bold">
                    Kompaniya madaniyati
                  </h2>
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 mr-4 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center">
                        <FaUsers className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold">
                          Jamoaviy ish
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Ochiq muloqot va hamkorlikda ishlash orqali eng yaxshi
                          natijalarni erishish
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 mr-4 bg-gradient-to-br from-green-500 to-blue-500 rounded-xl flex items-center justify-center">
                        <FaGraduationCap className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold">
                          Doimiy o'rganish
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Yangi texnologiyalarni o'rganish va professional
                          rivojlanishni qo'llab-quvvatlash
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="flex-shrink-0 w-12 h-12 mr-4 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                        <FaLightbulb className="text-white text-xl" />
                      </div>
                      <div>
                        <h3 className="mb-2 text-xl font-semibold">
                          Kreativlik
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300">
                          Har bir jamoamizning g'oyalari va kreativ yechimlarini
                          qadrlash
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Benefits */}
                <div>
                  <h2 className="mb-8 text-4xl font-bold">
                    Jamoa uchun imtiyozlar
                  </h2>
                  <div className="grid gap-4">
                    {[
                      "Raqobatbardosh maosh va bonuslar",
                      "Flexibel ish vaqti",
                      "Masofaviy ishlash imkoniyati",
                      "Professional rivojlanish kurslari",
                      "Sog'liqni saqlash sug'urtasi",
                      "Zamonaviy texnik vositalar",
                      "Korporativ tadbirlar",
                      "Karyera o'sish imkoniyatlari",
                    ].map((benefit, index) => (
                      <div
                        key={index}
                        className="flex items-center p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl dark:from-slate-800 dark:to-slate-700"
                      >
                        <div className="w-6 h-6 mr-3 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center">
                          <svg
                            className="w-3 h-3 text-white"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                        <span className="font-medium">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {/* CTA Section */}
      <section className="relative py-20 text-white bg-gradient-to-r from-blue-900 via-purple-800 to-blue-900 dark:from-slate-900 dark:via-blue-900 dark:to-slate-900">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container relative z-10 text-center">
          <h2 className="mb-6 text-4xl font-bold">
            Bizga qo'shilishni xohlaysizmi?
          </h2>
          <p className="max-w-3xl mx-auto mb-8 text-xl text-blue-100">
            Professional jamoamizning bir qismi bo'ling va o'zingizning
            karyerangizni rivojlantiring!
          </p>
          <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-blue-900 transition-all duration-300 bg-white rounded-xl hover:bg-blue-50 hover:shadow-xl hover:-translate-y-1"
            >
              <FaUsers className="mr-2" />
              Vakansiyalar
            </Link>
            <Link
              to="/services"
              className="inline-flex items-center px-8 py-4 text-lg font-semibold text-white transition-all duration-300 border-2 border-white border-opacity-30 rounded-xl backdrop-blur-sm hover:bg-white hover:bg-opacity-10 hover:shadow-xl hover:-translate-y-1"
            >
              Xizmatlarimiz
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
