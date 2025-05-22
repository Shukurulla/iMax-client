import React, { useEffect, useState } from "react";
import { getAboutInfo } from "../services/api";
import { generateUrl } from "../utils/generateUrl";

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

  return (
    <div>
      {/* Header */}
      <section className="py-16 text-white bg-blue-700 dark:bg-slate-800">
        <div className="container text-center">
          <h1 className="mb-4 text-4xl font-bold">Biz Haqimizda</h1>
          <p className="max-w-2xl mx-auto">
            IT Company haqida ma'lumot va bizning missiyamiz. Professional IT
            xizmatlarini taqdim etuvchi jamoamiz bilan tanishing.
          </p>
        </div>
      </section>

      {/* About Content */}
      {loading ? (
        <div className="flex justify-center py-16">
          <p>Yuklanmoqda...</p>
        </div>
      ) : (
        <>
          {/* Company History */}
          <section className="py-16 bg-white dark:bg-slate-900">
            <div className="container">
              <div className="grid gap-8 md:grid-cols-2">
                <div>
                  <h2 className="mb-4 text-3xl font-bold">Kompaniya Tarixi</h2>
                  <div
                    className="prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: aboutInfo?.history }}
                  />
                </div>
                <div className="flex items-center justify-center">
                  <img
                    src="/about-image.svg"
                    alt="Company History"
                    className="max-w-md rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Mission and Vision */}
          <section className="py-16 bg-gray-50 dark:bg-slate-800">
            <div className="container">
              <div className="grid gap-8 md:grid-cols-2">
                <div className="flex items-center justify-center order-2 md:order-1">
                  <img
                    src="/mission-image.svg"
                    alt="Our Mission"
                    className="max-w-md rounded-lg shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="mb-4 text-3xl font-bold">
                    Missiya va Maqsadlar
                  </h2>
                  <div
                    className="prose dark:prose-invert max-w-none"
                    dangerouslySetInnerHTML={{ __html: aboutInfo?.mission }}
                  />
                </div>
              </div>
            </div>
          </section>

          {/* Team */}
          {aboutInfo?.team?.length > 0 && (
            <section className="py-16 bg-white dark:bg-slate-900">
              <div className="container">
                <div className="mb-12 text-center">
                  <h2 className="mb-4 text-3xl font-bold">Bizning Jamoa</h2>
                  <p className="max-w-2xl mx-auto text-gray-600 dark:text-gray-300">
                    Professional va tajribali mutaxassislarimiz bilan tanishing.
                  </p>
                </div>

                <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                  {aboutInfo.team.map((member) => (
                    <div
                      key={member._id}
                      className="p-4 text-center bg-white border border-gray-200 rounded-lg shadow-md dark:bg-slate-800 dark:border-slate-700"
                    >
                      <img
                        src={generateUrl(member.image)}
                        alt={member.name}
                        className="object-cover w-32 h-32 mx-auto mb-4 rounded-full"
                      />
                      <h3 className="mb-1 text-xl font-semibold">
                        {member.name}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        {member.position}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};

export default AboutPage;
