import * as motion from "motion/react-client";
import { Slugcategories } from "@/lib/data";
import { Calendar, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

interface Props {
  params: Promise<{ slug: string }>; 
}

export default async function CategoryPage({ params }: Props) {
  const { slug } = await params;
  const category = Slugcategories.find((c) => c.slug === slug);

  if (!category) {
    return (
      <div className="min-h-[50vh] flex items-center justify-center">
        <p className="text-muted-foreground">Category not found.</p>
      </div>
    );
  }

  const posts = [
    {
      id: 1,
      title: "Getting Started with " + category.name,
      excerpt: `An introduction to ${category.name} with practical insights.`,
      date: "Sept 2025",
      image: category.image,
    },
    {
      id: 2,
      title: `Advanced ${category.name} Techniques`,
      excerpt: `Deep dive into advanced concepts in ${category.name}.`,
      date: "Aug 2025",
      image: category.image,
    },
    {
      id: 3,
      title: `${category.name} Best Practices`,
      excerpt: `Learn the dos and don’ts when working with ${category.name}.`,
      date: "July 2025",
      image: category.image,
    },
  ];

  return (
    <section>
      {/* Hero Section */}
      <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.name}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white p-6">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-serif font-bold mb-4"
          >
            {category.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-lg max-w-2xl"
          >
            {category.description}
          </motion.p>
        </div>
      </div>

      {/* Posts Section */}
      <div className="max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
            Latest in {category.name}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore recent posts and insights from this category.
          </p>
        </motion.div>

        {/* Grid of posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-xs">
                <CardHeader className="p-0">
                  <div className="relative w-full h-48">
                    <Image
                      src={post.image}
                      alt={post.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute top-4 left-4">
                    <Badge
                      variant="secondary"
                      className="bg-background/80 backdrop-blur-xs"
                    >
                      {category.name}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="flex items-center text-sm text-muted-foreground mb-3">
                    <Calendar className="h-4 w-4 mr-2" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-serif font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:underline">
                    Read more{" "}
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export async function generateStaticParams() {
  return Slugcategories.map((c) => ({
    slug: c.slug,
  }));
}
