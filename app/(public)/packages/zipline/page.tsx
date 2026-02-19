import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, SectionHeader, Badge, Button, Card } from '@/components/ui';
import { getPackagesByCategory } from '@/lib/data/packages';
import { formatPrice } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Zipline Packages',
  description: 'Choose from our zipline courses with 10, 18, or 32 platforms at Hanuman World Phuket.',
};

export default function ZiplinePackagesPage() {
  const packages = getPackagesByCategory('zipline');

  return (
    <main className="min-h-screen pt-20">
      <Section className="bg-gradient-to-b from-primary-dark to-background-dark">
        <Container>
          <SectionHeader
            title="Zipline Packages"
            subtitle="Experience the thrill of flying through the ancient rainforest"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <Card key={pkg.id} padding="none" className="overflow-hidden group">
                <div className="relative h-56 overflow-hidden">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                    style={{ backgroundImage: `url(${pkg.image})`, backgroundColor: '#1a237e' }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />
                  <div className="absolute top-4 left-4">
                    <Badge>{pkg.duration}</Badge>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-[family-name:var(--font-oswald)] font-normal text-white mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-foreground-muted text-sm mb-4">{pkg.shortDescription}</p>
                  
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-bold text-accent">{formatPrice(pkg.price)}</p>
                    <Link href={`/packages/zipline`}>
                      <Button size="sm">View Details</Button>
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
