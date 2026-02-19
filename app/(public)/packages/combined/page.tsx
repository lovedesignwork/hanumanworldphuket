import { Metadata } from 'next';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle, Clock, Users, Star } from 'lucide-react';
import { Container, Section, SectionHeader, Badge, Button, Card } from '@/components/ui';
import { getPackagesByCategory } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Combined Zipline Packages',
  description: 'Experience the best value with our combined packages featuring ziplines, roller zipline, skywalk, and more at Hanuman World Phuket.',
};

export default function CombinedPackagesPage() {
  const packages = getPackagesByCategory('combined');

  return (
    <main className="min-h-screen pt-20">
      <Section className="bg-gradient-to-b from-primary-dark to-background-dark">
        <Container>
          <SectionHeader
            title="Combined Packages"
            subtitle="Get the best value with our all-inclusive adventure packages"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} padding="none" className="overflow-hidden group">
                <div className="relative h-64 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${pkg.image})`, backgroundColor: '#1a237e' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />
                  <div className="absolute top-4 left-4 flex gap-2">
                    <Badge>{pkg.duration}</Badge>
                    {pkg.popular && <Badge variant="accent">POPULAR</Badge>}
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-[family-name:var(--font-oswald)] font-normal text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-foreground-muted mb-4">{pkg.shortDescription}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {pkg.features.slice(0, 4).map((feature) => (
                      <span key={feature} className="text-xs bg-white/10 px-2 py-1 rounded-full text-white/80">
                        {feature}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-foreground-muted text-sm">From</span>
                      <p className="text-2xl font-bold text-accent">{formatPrice(pkg.price)}</p>
                    </div>
                    <Link href={`/packages/combined`}>
                      <Button>View Details</Button>
                    </Link>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
