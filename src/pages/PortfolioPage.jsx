import React, { useEffect, useState } from "react";
import { getPortfolio } from "../services/api";
import { generateUrl } from "../utils/generateUrl";

const PortfolioPage = () => {
  const [portfolioItems, setPortfolioItems] = useState([]);
  const [loading, setLoading] = useState(true);

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

  return (
    <div>
      {/* Header */}
      <section className="py-16 text-white bg-blue-700 dark:bg-slate-800">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold">Bajarilgan Loyihalar</h1>
          <p className="max-w-2xl mx-auto">
            Bizning eng yaxshi loyihalarimizni ko'rib chiqing. Har bir loyiha
            mijozlarimizning ehtiyojlariga moslashtirilgan holda yaratilgan.
          </p>
        </div>
      </section>

      {/* Portfolio List */}
      <section className="py-16 bg-gray-50 dark:bg-slate-900">
        <div className="container">
          {loading ? (
            <div className="flex justify-center">
              <p>Yuklanmoqda...</p>
            </div>
          ) : (
            <div className="grid gap-12">
              {portfolioItems.map((item) => (
                <div
                  key={item._id}
                  className="p-6 overflow-hidden bg-white border border-gray-200 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700"
                >
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <h2 className="mb-3 text-2xl font-bold">{item.name}</h2>
                      <p className="mb-6 text-gray-600 dark:text-gray-300">
                        {item.description}
                      </p>
                      <div className="mb-4">
                        <h3 className="mb-2 font-semibold">
                          Ishlatilgan texnologiyalar:
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {item.technologies.map((tech, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-200"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                        {item.images.map((image, index) => (
                          <img
                            key={index}
                            src={generateUrl(image)}
                            alt={`${item.name} screenshot ${index + 1}`}
                            className="object-cover w-full h-48 rounded-lg shadow-sm"
                          />
                        ))}
                      </div>
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

export default PortfolioPage;
