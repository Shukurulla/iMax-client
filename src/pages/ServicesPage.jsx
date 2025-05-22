import React, { useEffect, useState } from "react";
import { getServices } from "../services/api";
import { generateUrl } from "../utils/generateUrl";

const ServicesPage = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      {/* Header */}
      <section className="py-16 text-white bg-blue-700 dark:bg-slate-800">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold">Bizning Xizmatlar</h1>
          <p className="max-w-2xl mx-auto">
            IT biznesingiz uchun professional va zamonaviy xizmatlarni taqdim
            etamiz. Quyida taklif qilinayotgan xizmatlar va ularning narxlarini
            ko'rishingiz mumkin.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container">
          {loading ? (
            <div className="flex justify-center">
              <p>Yuklanmoqda...</p>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-3">
              {services.map((service) => (
                <div
                  key={service._id}
                  className="p-6 transition-all bg-white border border-gray-200 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700 hover:shadow-lg"
                >
                  <img
                    src={generateUrl(service.image)}
                    alt={service.name}
                    className="object-cover w-16 h-16 mb-4 rounded"
                  />
                  <h2 className="mb-2 text-xl font-semibold">{service.name}</h2>
                  <p className="mb-4 text-gray-600 dark:text-gray-300">
                    {service.description}
                  </p>
                  <div className="pt-4 mt-4 border-t border-gray-200 dark:border-slate-700">
                    <div className="flex justify-between mb-2">
                      <span className="font-medium">Narx:</span>
                      <span className="font-medium text-blue-700 dark:text-blue-400">
                        {f.format(service.price)} so'm
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Muddat:</span>
                      <span className="text-gray-700 dark:text-gray-300">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
