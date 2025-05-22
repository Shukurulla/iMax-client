import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getServices } from "../services/api";
import { generateUrl } from "../utils/generateUrl";

const HomePage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await getServices();
        // Get only first 3 services for home page preview
        setServices(response.data.slice(0, 3));
        setLoading(false);
      } catch (error) {
        console.error("Xizmatlarni yuklashda xatolik:", error);
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="py-16 text-white bg-gradient-to-r from-blue-800 to-blue-600 dark:from-slate-800 dark:to-blue-900">
        <div className="container grid items-center gap-8 md:grid-cols-2">
          <div>
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              Professional IT Xizmatlar
            </h1>
            <p className="mb-8 text-lg text-blue-100">
              Biznesingizni rivojlantirish uchun zamonaviy IT yechimlar.
              Sifatli, tezkor va ishonchli.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                to="/services"
                className="btn-primary bg-white text-blue-700 hover:bg-blue-50"
              >
                Xizmatlarimiz
              </Link>
              <Link
                to="/about"
                className="px-6 py-3 transition-all border border-white rounded-lg hover:bg-white hover:bg-opacity-10"
              >
                Biz haqimizda
              </Link>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="/hero-image.svg"
              alt="IT Xizmatlar"
              className="max-w-md"
            />
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-16 bg-white dark:bg-slate-800">
        <div className="container">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">Bizning Xizmatlar</h2>
            <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
              Mijozlarimiz ehtiyojlariga qarab, ko'plab IT xizmatlarni taqdim
              etamiz.
            </p>
          </div>

          {loading ? (
            <div className="flex justify-center">
              <p>Yuklanmoqda...</p>
            </div>
          ) : (
            <>
              <div className="grid gap-8 md:grid-cols-3">
                {services.map((service) => (
                  <div
                    key={service._id}
                    className="p-6 transition-all bg-white border border-gray-200 rounded-lg shadow-md dark:bg-slate-700 dark:border-slate-600 hover:shadow-lg"
                  >
                    <img
                      src={generateUrl(service.image)}
                      alt={service.name}
                      className="object-cover w-16 h-16 mb-4 rounded"
                    />
                    <h3 className="mb-2 text-xl font-semibold">
                      {service.name}
                    </h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-300">
                      {service.description}
                    </p>
                    <div className="flex justify-between">
                      <span className="font-medium text-blue-700 dark:text-blue-400">
                        {service.price}
                      </span>
                      <span className="text-gray-500 dark:text-gray-400">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-10 text-center">
                <Link to="/services" className="btn-secondary">
                  Barcha xizmatlarni ko'rish
                </Link>
              </div>
            </>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 text-white bg-blue-700 dark:bg-blue-900">
        <div className="container text-center">
          <h2 className="mb-4 text-3xl font-bold">
            Loyihangiz haqida gaplashamizmi?
          </h2>
          <p className="max-w-2xl mx-auto mb-8">
            Bizga bog'laning va biz sizning g'oyalaringizni hayotga tatbiq
            etishda yordam beramiz!
          </p>
          <Link
            to="/contact"
            className="btn-primary bg-white text-blue-700 hover:bg-blue-50"
          >
            Bog'lanish
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
