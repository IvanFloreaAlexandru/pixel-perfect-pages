import { Calendar, Clock, Users, Headphones } from "lucide-react";

const stats = [
  {
    icon: Calendar,
    value: "10+",
    label: "ANI DE EXPERIENȚĂ",
  },
  {
    icon: Clock,
    value: "30 min",
    label: "TIMP DE RĂSPUNS",
  },
  {
    icon: Users,
    value: "5000+",
    label: "CLIENȚI MULȚUMIȚI",
  },
  {
    icon: Headphones,
    value: "24/7",
    label: "DISPONIBILITATE",
  },
];

const Stats = () => {
  return (
    <section className="bg-stats-bg py-12 md:py-16">
      <div className="container-custom">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex justify-center mb-4">
                <div className="bg-background/10 p-3 rounded-lg">
                  <stat.icon className="h-6 w-6 text-background" />
                </div>
              </div>
              <p className="text-3xl md:text-4xl font-bold text-background mb-2">
                {stat.value}
              </p>
              <p className="text-sm text-background/70 uppercase tracking-wide">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
