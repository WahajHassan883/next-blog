import * as motion from "motion/react-client";

import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

export default function AboutHero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6"
        >
          About <span className="text-primary italic">Us</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          We craft digital experiences that combine creativity, technology, and
          human connection. Learn more about our journey and the values that
          guide us.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button size="lg" className="group">
            Explore Our Work{" "}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
