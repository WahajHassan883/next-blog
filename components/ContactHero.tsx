import * as motion from "motion/react-client";
import { Mail } from "lucide-react";
import { Button } from "./ui/button";

export default function ContactHero() {
  return (
    <section className="min-h-[80vh] flex items-center justify-center px-6 lg:px-8">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h1
            initial={{opacity: 0, y: 20}} 
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
          className="text-4xl md:text-6xl font-serif font-bold text-foreground mb-6"
        >
          Contact <span className="text-primary italic">Us</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
        >
          Have a question, an idea, or just want to say hello?  
          We’d love to hear from you. Let’s start a conversation today!
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
        >
          <Button size="lg" className="group">
            Send a Message
            <Mail className="ml-2 h-5 w-5 transition-transform group-hover:-rotate-12 group-hover:scale-110" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
