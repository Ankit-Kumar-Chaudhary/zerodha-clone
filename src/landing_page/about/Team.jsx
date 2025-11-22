export default function Team() {
  const founders = [
    {
      name: "Nithin Kamath",
      role: "Founder & CEO",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPCvT-wLkkMV82trpj3Br1aZuXgVRm65quw&s", // <-- Add your image URL here
    },
    {
      name: "Nikhil Kamath",
      role: "Co-founder & CFO",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRPCvT-wLkkMV82trpj3Br1aZuXgVRm65quw&s", // <-- Add your image URL here
    },
  ];

  const team = [
    {
      name: "Team Member 1",
      role: "Technology Lead",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrikMk8c68u7SGdSyYWT9BPEPLdCH7GjplJvzInXgK8rj9Q73MM9FtmCKoq5m5T18HAFY&usqp=CAU", // <-- Add your image URL
    },
    {
      name: "Team Member 2",
      role: "Product Manager",
      img: "Venu.jpg",
    },
    {
      name: "Team Member 3",
      role: "UI/UX Designer",
      img: "Seema.jpg",
    },
    {
      name: "Team Member 4",
      role: "Operations Head",
      img: "Hanan.jpg",
    },
  ];

  return (
    <section id="team" className="bg-gray-50 dark:bg-gray-800 py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Founders Section */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100">
          Founders
        </h2>
        <p className="mt-3 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          Zerodha was founded by two brothers, building India's largest
          brokerage platform.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-10">
          {founders.map((member, index) => (
            <div
              key={index}
              className="text-center p-8 border rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="w-32 h-32 mx-auto rounded-full overflow-hidden shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text */}
              <h3 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>

        {/* Team Section */}
        <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-gray-100 mt-20">
          Leadership Team
        </h2>

        <p className="mt-3 text-center text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
          The people who help build and scale world-class products.
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          {team.map((member, index) => (
            <div
              key={index}
              className="text-center p-6 border rounded-xl bg-white dark:bg-gray-900 shadow-sm hover:shadow-md transition"
            >
              {/* Image */}
              <div className="w-28 h-28 mx-auto rounded-full overflow-hidden shadow-md">
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info */}
              <h3 className="mt-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                {member.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
