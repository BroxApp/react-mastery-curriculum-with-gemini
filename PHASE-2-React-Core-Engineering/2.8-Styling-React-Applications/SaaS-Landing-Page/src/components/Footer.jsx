import React from 'react';

function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-400 border-t border-slate-800 dir-rtl">
      <div className="max-w-7xl mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          
          {/* بخش برندینگ و توضیحات */}
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">
              TaskFlow
            </h3>
            <p className="text-sm leading-relaxed max-w-sm text-slate-400">
              پلتفرم جامع مدیریت پروژه و افزایش بهره‌وری تیم‌ها. مدیریت زمان، وظایف و ارتباطات تیمی در یک ابزار یکپارچه.
            </p>
          </div>

          {/* لینک‌های سریع */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">دسترسی سریع</h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a href="#hero" className="hover:text-blue-400 transition-colors">خانه</a>
              </li>
              <li>
                <a href="#features" className="hover:text-blue-400 transition-colors">ویژگی‌ها</a>
              </li>
              <li>
                <a href="#pricingSection" className="hover:text-blue-400 transition-colors">قیمت‌گذاری</a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-400 transition-colors">درباره ما</a>
              </li>
            </ul>
          </div>

          {/* شبکه های اجتماعی */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-base">همراه ما باشید</h4>
            <div className="flex gap-4">
              {/* لینکدین */}
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                </svg>
              </a>

              {/* گیت‌هاب */}
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-slate-700 hover:text-white transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2A10 10 0 0 0 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z"/>
                </svg>
              </a>

              {/* توییتر / X */}
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 flex items-center justify-center hover:bg-sky-500 hover:text-white transition-all">
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* خط جداکننده و کپی‌رایت */}
        <div className="pt-8 border-t border-slate-800/80 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} TaskFlow. تمامی حقوق محفوظ است.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">قوانین و مقررات</a>
            <a href="#" className="hover:text-slate-400 transition-colors">حریم خصوصی</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;