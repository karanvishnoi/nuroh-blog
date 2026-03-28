import type { Metadata } from 'next';
import Link from 'next/link';
import { breadcrumbSchema, localBusinessSchema } from '@/lib/schema';

export const metadata: Metadata = {
  title: 'About Nuroh Cafe Jaipur',
  description: 'Learn about Nuroh Cafe — Jaipur\'s specialty coffee and Mediterranean dining destination in C Scheme, Ashok Marg.',
  alternates: { canonical: 'https://blog.nuroh.in/about/' },
};

export default function AboutPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema()) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema([{ name: 'Home', url: 'https://blog.nuroh.in/' }, { name: 'About', url: 'https://blog.nuroh.in/about/' }])) }} />

      <section className="max-w-3xl mx-auto px-4 py-16">
        <h1 className="font-display text-4xl md:text-5xl font-bold text-coffee mb-6">About Nuroh Cafe</h1>
        <p className="text-lg text-warm-500 leading-relaxed mb-8">Where Three Cultures Meet at One Table.</p>

        <div className="prose max-w-none">
          <p>Nestled on the 4th floor of Ashok Marg in C Scheme, Nuroh Cafe is Jaipur's unique fusion of Arabian, Italian, and Mediterranean flavours. We're more than just a cafe — we're a community space where stories are shared over specialty coffee and thoughtfully crafted food.</p>

          <h2>Our Story</h2>
          <p>Nuroh was born from a simple idea: Jaipur deserves a cafe that celebrates the world's best food cultures while staying rooted in Indian warmth and hospitality. From our hand-poured specialty coffee to our Mediterranean brunch plates, every detail is curated to make you feel at home.</p>

          <h2>What Makes Us Different</h2>
          <ul>
            <li><strong>Specialty Coffee:</strong> We source single-origin beans and brew them with precision — from pour-overs to cold brews.</li>
            <li><strong>Rooftop + Indoor Dining:</strong> Choose between our elegant 4th-floor interiors or the open-air rooftop with Jaipur skyline views.</li>
            <li><strong>Fast WiFi & Power:</strong> Built for freelancers, students, and remote workers who need a productive space.</li>
            <li><strong>Community Events:</strong> Book readings, open mic nights, and curated gatherings every month.</li>
          </ul>

          <h2>Visit Us</h2>
          <p><strong>Address:</strong> 4th Floor, Ashok Marg, Patel Colony, C Scheme, Jaipur, Rajasthan 302001</p>
          <p><strong>Hours:</strong> Monday – Sunday, 10:00 AM – 11:00 PM</p>
          <p><strong>Phone:</strong> +91 92144 44360</p>
          <p><strong>Email:</strong> connect@nuroh.in</p>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-4">
          <a href="https://nuroh.in" target="_blank" rel="noopener noreferrer" className="text-center bg-terracotta hover:bg-terracotta-dark text-white font-semibold px-8 py-3 rounded-xl transition-colors">Visit Website</a>
          <a href="https://nuroh.in" target="_blank" rel="noopener noreferrer" className="text-center border-2 border-coffee text-coffee hover:bg-coffee hover:text-white font-semibold px-8 py-3 rounded-xl transition-all">Visit Nuroh Cafe</a>
        </div>
      </section>
    </>
  );
}
