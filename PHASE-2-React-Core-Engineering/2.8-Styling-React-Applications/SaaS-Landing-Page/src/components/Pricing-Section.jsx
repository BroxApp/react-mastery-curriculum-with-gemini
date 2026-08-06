import React from 'react';

const prices = [
  {
    type: "Free",
    title: "شروع رایگان برای مدیریت اولیه",
    description: "این پلن کاملاً رایگان بوده و ابزارهای پایه را برای شروع و مدیریت کارآمد کسب‌وکارتان در اختیارتان قرار می‌دهد.",
    price: "$0",
    period: "/ ماهانه",
    isPopular: false,
    buttonText: "شروع رایگان",
    features: [
      "دسترسی به امکانات پایه",
      "مدیریت ۱ پروژه",
      "پشتیبانی عمومی"
    ]
  },
  {
    type: "Pro",
    title: "مدیریت حرفه‌ای و پیشرفته",
    description: "ابزارها و امکانات پیشرفته برای کسب‌وکارهای در حال رشد که تا ۷۵٪ در زمان و انرژی شما صرفه‌جویی می‌کند.",
    price: "$10",
    period: "/ ماهانه",
    isPopular: true, // برجسته‌سازی پلن محبوب
    buttonText: "ارتقا به پرو",
    features: [
      "تمام امکانات پلن رایگان",
      "مدیریت نامحدود پروژه‌ها",
      "گزارش‌گیری پیشرفته",
      "پشتیبانی 24/7 اختصاصی"
    ]
  },
  {
    type: "Enterprise",
    title: "راه‌کار جامع برای سازمان‌ها",
    description: "مناسب برای تیم‌های بزرگ و سازمان‌هایی که نیازمند زیرساخت اختصاصی، امنیت بالا و سفارشی‌سازی کامل هستند.",
    price: "$11",
    period: "/ ماهانه",
    isPopular: false,
    buttonText: "تماس با بخش فروش",
    features: [
      "تمام امکانات پلن Pro",
      "امنیت و کنترل دسترسی سفارشی",
      "اتصال به API اختصاصی",
      "مدیر حساب اختصاصی"
    ]
  }
];

function PricingSection() {
  return (
    <section id="pricingSection" className="py-20 px-4 bg-slate-900 text-slate-100 dir-rtl">
      {/* هدر بخش قیمت‌گذاری */}
      <div id="pricingSection-header" className="max-w-3xl mx-auto text-center mb-16 space-y-4">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
          پلن‌ها و قیمت‌گذاری
        </h2>
        <p className="text-slate-400 text-base md:text-lg">
          با انتخاب پلن مناسب، مدیریت کسب‌وکار خود را به سطحی جدید ارتقا دهید.
        </p>
      </div>

      {/* کارت‌های قیمت‌گذاری */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
        {prices.map((plan, index) => (
          <div
            key={index}
            className={`relative flex flex-col justify-between rounded-2xl p-8 transition-all duration-300 backdrop-blur-sm ${
              plan.isPopular
                ? "bg-slate-800/90 border-2 border-blue-500 shadow-2xl shadow-blue-500/20 md:-translate-y-4"
                : "bg-slate-800/40 border border-slate-700/60 hover:border-slate-500 shadow-lg"
            }`}
          >
            {/* نشان پلن محبوب */}
            {plan.isPopular && (
              <span className="absolute -top-4 right-1/2 translate-x-1/2 bg-gradient-to-r from-blue-500 to-emerald-500 text-white text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-wider shadow-md">
                محبوب‌ترین پلن
              </span>
            )}

            <div>
              {/* عنوان و توضیحات پلن */}
              <div className="flex justify-between items-center mb-4">
                <span className={`text-xl font-bold ${plan.isPopular ? "text-blue-400" : "text-slate-300"}`}>
                  {plan.type}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">
                {plan.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                {plan.description}
              </p>

              {/* قیمت */}
              <div className="flex items-baseline gap-1 my-6">
                <span className="text-4xl font-extrabold text-white">{plan.price}</span>
                <span className="text-slate-400 text-sm font-medium">{plan.period}</span>
              </div>

              {/* لیست ویژگی‌ها */}
              <ul className="space-y-3 mb-8 border-t border-slate-700/50 pt-6">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-300 text-sm">
                    <svg
                      className={`w-5 h-5 flex-shrink-0 ${plan.isPopular ? "text-blue-400" : "text-emerald-400"}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* دکمه اقدام (CTA) */}
            <button
              className={`w-full py-3.5 px-6 rounded-xl font-semibold transition-all duration-200 text-sm ${
                plan.isPopular
                  ? "bg-gradient-to-r from-blue-500 to-emerald-500 text-white hover:opacity-90 shadow-lg shadow-blue-500/25"
                  : "bg-slate-700 hover:bg-slate-600 text-white"
              }`}
            >
              {plan.buttonText}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default PricingSection;