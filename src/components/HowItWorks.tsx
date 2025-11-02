import { motion } from 'motion/react';
import { Cpu, Globe, Eye } from 'lucide-react';

export function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: Globe,
      title: 'Generate your SES.json',
      description: 'Tell LLMs where your official accounts live.',
      color: 'from-[#2E6EFF] to-[#1a4fcc]',
    },
    {
      number: '02',
      icon: Cpu,
      title: 'Activate your API Feed',
      description: 'Choose how much detail AIs can see.',
      color: 'from-[#65F1B5] to-[#3dd68f]',
    },
    {
      number: '03',
      icon: Eye,
      title: 'Get Seen Through AI',
      description: 'Every AI answer becomes a new touchpoint.',
      color: 'from-[#2E6EFF] to-[#65F1B5]',
    },
  ];

  return (
    <section id="how-it-works" className="relative py-16 sm:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4 sm:mb-6 text-foreground px-4">
              How It Works
            </h2>
            <p className="text-lg sm:text-xl text-muted-foreground px-4">
              Three simple steps to AI visibility
            </p>
          </motion.div>
        </div>

        {/* Horizontal 3-Step Flow */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="relative"
            >
              {/* Card */}
              <div className="bg-card rounded-3xl p-6 sm:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full border border-border text-center">
                {/* Icon */}
                <div className="mb-4 sm:mb-6 flex justify-center">
                  <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <step.icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl mb-3 sm:mb-4 text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Arrow connector (not on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 text-3xl text-primary/30">
                  →
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12 sm:mt-16 px-4"
        >
          <p className="text-sm sm:text-base text-muted-foreground italic">
            Simple story. Powerful impact. Your identity, finally machine-readable.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
