import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { motion } from "framer-motion";
import { Heart, Mail, MapPin, PawPrint, Phone, Users } from "lucide-react";
import GoBack from "@/components/custom_ui/goback";
import dogImg from "../../assets/dog.png";
import catImg from "../../assets/cat.png";
import birdImg from "../../assets/bird.png";
import personImg from "../../assets/person-1.png";
import { toast } from "sonner";

export default function AboutUsPage() {
  const teamMembers = [
    {
      name: "Alex Johnson",
      role: "Founder & CEO",
      bio: "Animal lover with 10+ years in pet care and rescue operations",
      image: personImg,
    },
    {
      name: "Sarah Williams",
      role: "Head Veterinarian",
      bio: "Specialized in small animal medicine with a passion for animal welfare",
      image: personImg,
    },
    {
      name: "Michael Chen",
      role: "Community Manager",
      bio: "Connecting pet lovers and building our growing community",
      image: personImg,
    },
    {
      name: "Jessica Rodriguez",
      role: "Pet Adoption Specialist",
      bio: "Helped 500+ pets find their forever homes in the last 3 years",
      image: personImg,
    },
  ];

  const stats = [
    { value: "5,000+", label: "Pets Adopted", icon: Heart },
    { value: "10,000+", label: "Community Members", icon: Users },
    { value: "24/7", label: "Support Available", icon: Phone },
    { value: "50+", label: "Partner Shelters", icon: MapPin },
  ];

  return (
    <>
      <div className="p-7 max-w-7xl mx-auto">
        <GoBack />

        {/* Hero Section */}
        <section className="mt-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-normal mb-3">About Paw Hub</h1>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              We're on a mission to create a better world for pets and their
              humans through technology, community, and compassion.
            </p>
          </motion.div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="relative overflow-hidden rounded-2xl h-64"
            >
              <img
                src={dogImg}
                alt="Happy dog"
                className="w-3/4 h-full mx-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-primary p-6 font-medium text-center">
                  Finding forever homes for pets in need
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative overflow-hidden rounded-2xl h-64"
            >
              <img
                src={catImg}
                alt="Playful cat"
                className="w-3/4 h-full mx-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-primary p-6 font-medium text-center">
                  Supporting pet parents with essential resources
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative overflow-hidden rounded-2xl h-64"
            >
              <img
                src={birdImg}
                alt="Colorful bird"
                className="w-3/4 h-full mx-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <p className="text-primary text-center p-6 font-medium">
                  Building a community of passionate pet lovers
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Our Mission */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-secondary p-8 rounded-2xl"
          >
            <div className="flex items-center gap-3 mb-4">
              <PawPrint className="h-8 w-8 text-primary" />
              <h2 className="text-2xl font-normal">Our Mission</h2>
            </div>
            <p className="text-lg leading-relaxed">
              At Paw Hub, we believe every pet deserves a loving home and every
              pet owner deserves support. We're dedicated to connecting pets
              with their perfect humans, providing essential resources for pet
              care, and building a community where pet lovers can share their
              experiences and knowledge.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="bg-neutral-900 p-6 rounded-xl">
                <h3 className="text-xl font-normal mb-2">For Pet Seekers</h3>
                <p>
                  We help you find the perfect companion through our network of
                  shelters and rescue organizations, with tools to match your
                  lifestyle and preferences.
                </p>
              </div>
              <div className="bg-neutral-900 p-6 rounded-xl">
                <h3 className="text-xl font-normal mb-2">For Pet Owners</h3>
                <p>
                  We provide resources, products, and community support to help
                  you give your pet the best possible life, from nutrition to
                  training to healthcare.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Stats Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-8 text-center">
              Our Impact
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-primary/5 rounded-xl p-6 text-center"
                >
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                  <h3 className="text-2xl font-bold">{stat.value}</h3>
                  <p className="text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Team Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-2">Our Team</h2>
            <p className="text-muted-foreground mb-8">
              Meet the passionate people behind Paw Hub
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  <Card className="overflow-hidden h-full">
                    <CardContent className="p-0">
                      <div className="aspect-square overflow-hidden">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover transition-transform hover:scale-105 duration-300"
                        />
                      </div>
                      <div className="p-5">
                        <h3 className="font-medium text-lg">{member.name}</h3>
                        <p className="text-primary text-sm mb-2">
                          {member.role}
                        </p>
                        <p className="text-muted-foreground text-sm">
                          {member.bio}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-xl">
                <h3 className="text-xl font-medium mb-2">Compassion First</h3>
                <p className="text-muted-foreground">
                  We believe in treating all animals with kindness and respect,
                  and we extend that same compassion to our community members.
                </p>
              </div>
              <div className="p-6 border rounded-xl">
                <h3 className="text-xl font-medium mb-2">
                  Education & Support
                </h3>
                <p className="text-muted-foreground">
                  We're committed to providing resources and knowledge to help
                  pet owners make informed decisions about their pets' care.
                </p>
              </div>
              <div className="p-6 border rounded-xl">
                <h3 className="text-xl font-medium mb-2">Community Building</h3>
                <p className="text-muted-foreground">
                  We foster connections between pet lovers, creating a
                  supportive network for sharing experiences and advice.
                </p>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Contact Section */}
        <section className="mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-primary/5 p-8 rounded-2xl text-center"
          >
            <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Have questions about Paw Hub or want to learn more about our
              mission? We'd love to hear from you!
            </p>
            <div className="flex flex-col md:flex-row gap-4 justify-center">
              <Button className="gap-2" onClick={() => toast.info("Developement mode.")}>
                <Mail className="h-4 w-4" /> Contact Us
              </Button>
              <Button variant="outline" className="gap-2">
                <Phone className="h-4 w-4" /> (123) 456-7890
              </Button>
            </div>
          </motion.div>
        </section>

        <Separator className="my-8" />

        <footer className="text-center text-muted-foreground">
          <p>© {new Date().getFullYear()} Paw Hub. All rights reserved.</p>
          <p className="mt-2">
            Made with <Heart className="h-4 w-4 inline text-red-500" /> for pets
            and their humans
          </p>
        </footer>
      </div>
    </>
  );
}
