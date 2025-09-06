import * as motion from "motion/react-client";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function ContactForm() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-muted/20">
      <div className="max-w-3xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Send Us a <span className="text-primary italic">Message</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to collaborate? Fill out the form below and our
            team will get back to you shortly.
          </p>
        </motion.div>

        {/* Contact Form */}
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <Input
              placeholder="Your Name"
              className="p-6"
              required
            />
            <Input
              type="email"
              placeholder="Your Email"
              className="p-6"
              required
            />
          </div>
          <Input placeholder="Subject" className="p-6" />
          <Textarea
            placeholder="Write your message..."
            className="min-h-[150px] p-4"
            required
          />
          <div className="text-center">
            <Button size="lg" className="group w-full">
              Send Message
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
