import { Building2, Users, Award, Sparkles } from 'lucide-react';

const stats = [
  { icon: Building2, value: '700+', label: 'Projects Completed' },
  { icon: Users, value: '750+', label: 'Happy Clients' },
  { icon: Award, value: '6+', label: 'Awards Won' },
  { icon: Sparkles, value: '45+', label: 'Years Experience' },
];

export function Stats() {
  return (
    <section className="py-20 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-4xl lg:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </h3>
                <p className="text-white/60">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}