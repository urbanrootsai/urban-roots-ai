import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const About = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gradient-primary mb-6">About Urban Roots Botanica</h1>
          <p className="text-xl text-muted-foreground mb-8">
            We're building the future of agriculture through technology and social impact.
          </p>
          <div className="prose prose-lg max-w-none">
            <p>
              Founded on the belief that technology should serve humanity, Urban Roots Botanica combines 
              cutting-edge agricultural intelligence with meaningful social impact.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default About;