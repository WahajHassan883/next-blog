import * as motion from "motion/react-client";
import { Card, CardContent } from "./ui/card";
import { mission } from "@/lib/data";


export default function MissionSection() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            To create meaningful, human-centered digital products that inspire
            and connect people across the world.
          </p>
        </motion.div>

        {/* Mission Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {mission.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 bg-background/80 backdrop-blur-sm shadow-sm border border-border/40 
                                hover:shadow-xl hover:scale-105 transition-all duration-300 group cursor-pointer">
                <CardContent className="flex flex-col items-center text-center">
                  <div
                    className="h-10 w-10 mb-4 text-primary group-hover:scale-110 transition-transform duration-300"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
