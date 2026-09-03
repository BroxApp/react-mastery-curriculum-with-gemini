export default function App() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-900 text-white p-6">
      <div className="rounded-2xl bg-slate-800 p-8 shadow-2xl border border-slate-700 text-center max-w-sm">
        <div className="inline-block rounded-full bg-emerald-500/10 p-3 text-emerald-400 mb-4">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h1 className="text-2xl font-bold tracking-tight text-emerald-400">
          Tailwind v4 فعاله!
        </h1>
        <p className="mt-2 text-sm text-slate-400">
          استایل‌ها، رنگ‌ها و کادربندی بدون مشکل کار می‌کنند.
        </p>
        <button className="mt-6 w-full rounded-xl bg-emerald-500 px-4 py-2.5 font-semibold text-slate-950 transition-all hover:bg-emerald-400 active:scale-95">
          تست دکمه
        </button>
      </div>
    </div>
  );
}