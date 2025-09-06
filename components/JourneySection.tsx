import { timeline } from "@/lib/data";
import * as motion from "motion/react-client";


export default function JourneySection() {
  return (
    <section className="py-20 px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Journey
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A timeline of milestones that shaped our story and vision.
          </p>
        </motion.div>

        <div className="relative border-l border-primary/30 pl-8 space-y-10">
          {timeline.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute -left-4 top-2 w-3 h-3 rounded-full bg-primary" />
              <h3 className="text-xl font-bold">{item.year}</h3>
              <p className="text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
