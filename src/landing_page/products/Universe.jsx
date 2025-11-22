export default function Universe() {
  const products = [
    {
      title: "Kite",
      desc: "Ultra-fast trading app",
      img: "ditto-logo.png",
    },
    {
      title: "Console",
      desc: "Central dashboard",
      img: "smallcase-logo.png",
    },
    {
      title: "Coin",
      desc: "Direct mutual fund investing",
      img: "streak-logo.png",
    },
    {
      title: "Varsity",
      desc: "Free stock market education",
      img: "zerodhafundhouse.png",
    },
    {
      title: "Zerodha API",
      desc: "Build your own trading platform",
      img: "smallcase-logo.png",
    },
    {
      title: "Streak",
      desc: "Strategy automation",
      img: "ditto-logo.png",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900">
          Our Product Universe
        </h2>
        <p className="text-center mt-3 text-gray-600 max-w-2xl mx-auto">
          Explore tools designed for beginners, long-term investors, and active
          traders.
        </p>

        <div className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-10">
          {products.map((p, i) => (
            <div key={i} className="text-center group">
              <img
                src={p.img}
                alt={p.title}
                className="w-20 mx-auto group-hover:scale-110 transition"
              />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
