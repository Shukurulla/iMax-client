import React from "react";
import { Link } from "react-router-dom";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaFacebook,
  FaTelegram,
  FaInstagram,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="text-white bg-blue-900 dark:bg-slate-900">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Company Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold"> IMAX IT Company</h3>
            <p className="mb-4 text-blue-100 dark:text-slate-300">
              Professional IT xizmatlarini taqdim etuvchi kompaniya. Sifatli va
              ishonchli yechimlar.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-xl text-white hover:text-blue-300"
                aria-label="Facebook"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="text-xl text-white hover:text-blue-300"
                aria-label="Telegram"
              >
                <FaTelegram />
              </a>
              <a
                href="#"
                className="text-xl text-white hover:text-blue-300"
                aria-label="Instagram"
              >
                <FaInstagram />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Sahifalar</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-blue-100 dark:text-slate-300 hover:text-white"
                >
                  Bosh Sahifa
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-blue-100 dark:text-slate-300 hover:text-white"
                >
                  Xizmatlar
                </Link>
              </li>
              <li>
                <Link
                  to="/portfolio"
                  className="text-blue-100 dark:text-slate-300 hover:text-white"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-blue-100 dark:text-slate-300 hover:text-white"
                >
                  Biz Haqimizda
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-blue-100 dark:text-slate-300 hover:text-white"
                >
                  Aloqa
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-xl font-bold">Bog'lanish</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-300" />
                <span className="text-blue-100 dark:text-slate-300">
                  Toshkent sh., Shayxontohur tumani, IT Park
                </span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-blue-300" />
                <span className="text-blue-100 dark:text-slate-300">
                  +998 90 123 45 67
                </span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-300" />
                <span className="text-blue-100 dark:text-slate-300">
                  info@itcompany.uz
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="py-4 text-center border-t border-blue-800 dark:border-slate-700">
        <p className="text-sm text-blue-200 dark:text-slate-400">
          &copy; {new Date().getFullYear()} IMAX IT Company. Barcha huquqlar
          himoyalangan.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
