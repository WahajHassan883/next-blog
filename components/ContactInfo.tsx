import * as motion from "motion/react-client";
import { Card, CardContent } from "./ui/card";
import { contactDetails } from "@/lib/data";

export default function ContactInfo() {
  return (
    <section className="py-20 px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Contact <span className="text-primary italic">Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We’d love to hear from you! Reach out through any of the channels below,
            and we’ll get back to you as soon as possible.
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {contactDetails.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="p-6 shadow-md hover:shadow-xl transition-all duration-300 hover:scale-105">
                <CardContent className="flex flex-col items-center text-center">
                  <div
                    className="w-10 h-10 text-primary mb-4"
                    dangerouslySetInnerHTML={{ __html: item.icon }}
                  />
                  <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
