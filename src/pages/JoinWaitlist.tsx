import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

const JoinWaitlist = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="pt-20 pb-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gradient-primary mb-6">Join the Waitlist</h1>
            <p className="text-xl text-muted-foreground">
              Be among the first to experience agricultural intelligence that creates impact.
            </p>
          </div>
          
          <Card className="p-8">
            <form className="space-y-6">
              <Input type="email" placeholder="Enter your email address" />
              <Button className="w-full btn-hero-primary">
                Join Waitlist
              </Button>
            </form>
          </Card>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default JoinWaitlist;