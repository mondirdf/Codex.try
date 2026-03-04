export default function ContactPage() {
  return (
    <section className="max-w-2xl">
      <p className="text-cyan-300">تواصل</p>
      <h1 className="mt-2 text-3xl font-black">جاهز نبدأ مشروعك؟</h1>
      <p className="mt-3 text-slate-300">أرسل تفاصيل مشروعك وسأتواصل معك خلال 24 ساعة.</p>

      <form className="mt-8 space-y-4 rounded-2xl border border-white/10 bg-slate-900 p-6">
        <label className="block">
          <span className="mb-1 block text-sm font-bold">الاسم</span>
          <input className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2" type="text" required />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-bold">البريد الإلكتروني</span>
          <input className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2" type="email" required />
        </label>

        <label className="block">
          <span className="mb-1 block text-sm font-bold">نبذة عن المشروع</span>
          <textarea className="w-full rounded-lg border border-white/15 bg-slate-950 px-3 py-2" rows={5} required />
        </label>

        <button className="rounded-full bg-violet-500 px-5 py-2 font-bold text-white" type="submit">
          إرسال
        </button>
      </form>
    </section>
  );
}
