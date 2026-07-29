import React from "react";

import { Zap, ShieldCheck, BarChart3, Users } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "سرعت و بازدهی بالا",
    description: "فرآیندهای تکراری را اتوماتیک کنید و سرعت پیشبرد پروژه‌ها را تا ۲ برابر افزایش دهید.",
  },
  {
    icon: ShieldCheck,
    title: "امنیت سطح سازمانی",
    description: "اطلاعات شما با استاندارد رمزنگاری end-to-end محافظت شده و کاملاً ایمن است.",
  },
  {
    icon: BarChart3,
    title: "گزارش‌گیری و آنالیز هوشمند",
    description: "با نمودارهای پیشرفته، روند رشد و عملکرد تیم را لحظه‌به‌لحظه ارزیابی کنید.",
  },
  {
    icon: Users,
    title: "همکاری گروهی آسان",
    description: "مدیریت سطوح دسترسی، کامنت‌گذاری و اشتراک‌گذاری فایل‌ها به ساده‌ترین شکل ممکن.",
  },
];

const Features = () => {
  return (
    <section id="features" className="py-16 md:py-24 bg-gray-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-3xl mx-auto mb-12 lg:mb-16">
          <span className="text-white font-semibold text-sm uppercase tracking-wider">
            ویژگی‌های کلیدی
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            هر آنچه برای رشد کسب‌وکارتان نیاز دارید
          </h2>
          <p className="mt-4 text-base sm:text-lg text-indigo-600">
            پلتفرم ما ابزارهای قدرتمندی در اختیارتان قرار می‌دهد تا تیم شما هوشمندتر و سریع‌تر کار کند.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="bg-gray-200 rounded-2xl p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col items-start group"
              >
                {/* باکس آیکون */}
                <div className="p-3 rounded-xl bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300 mb-5">
                  <IconComponent className="w-6 h-6" />
                </div>

                {/* عنوان ویژگی */}
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {feature.title}
                </h3>

                {/* توضیحات */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Features;