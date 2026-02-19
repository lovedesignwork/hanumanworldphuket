import { Metadata } from 'next';
import Link from 'next/link';
import { Container, Section, SectionHeader, Card, Badge } from '@/components/ui';
import { blogPosts } from '@/lib/data/blog';
import { formatDate } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Read the latest news, tips, and stories from Hanuman World Phuket.',
};

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-20">
      <Section className="bg-gradient-to-b from-primary-dark to-background-dark">
        <Container>
          <SectionHeader
            title="Our Blog"
            subtitle="Tips, stories, and news from Thailand's biggest zipline adventure"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.slug}`}>
                <Card padding="none" className="overflow-hidden group h-full hover:border-accent/30 transition-colors">
                  <div className="relative h-48 overflow-hidden">
                    <div 
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
                      style={{ backgroundImage: `url(${post.image})`, backgroundColor: '#1a237e' }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark to-transparent" />
                    <div className="absolute top-4 left-4">
                      <Badge>{post.category}</Badge>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-xl font-[family-name:var(--font-oswald)] font-normal text-white mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-foreground-muted text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-foreground-muted">
                      <span>{formatDate(post.publishedAt)}</span>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </Container>
      </Section>
    </main>
  );
}
