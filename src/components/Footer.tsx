import { Link } from 'react-router-dom';
import { Leaf, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Careers', path: '/careers' },
      { name: 'Blog', path: '/blog' },
      { name: 'Contact', path: '/contact' }
    ],
    products: [
      { name: 'AI Analysis', path: '/products' },
      { name: 'IoT Solutions', path: '/products' },
      { name: 'Shop', path: '/shop' },
      { name: 'Dashboard', path: '/dashboard' }
    ],
    legal: [
      { name: 'Privacy Policy', path: '/privacy' },
      { name: 'Terms of Service', path: '/terms' },
      { name: 'Cookie Policy', path: '/privacy' }
    ],
    support: [
      { name: 'Help Center', path: '/contact' },
      { name: 'Documentation', path: '/blog' },
      { name: 'API Status', path: '/contact' }
    ]
  };

  const socialLinks = [
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' }
  ];

  return (
    <footer className="bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-pattern-tech opacity-5"></div>
      
      <div className="relative">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12">
            {/* Brand Column */}
            <div className="lg:col-span-1">
              <Link to="/" className="flex items-center space-x-2 mb-6">
                <div className="p-2 bg-primary-glow rounded-lg">
                  <Leaf className="h-6 w-6 text-primary-foreground" />
                </div>
                <span className="text-xl font-bold">Urban Roots Botanica</span>
              </Link>
              
              <p className="text-primary-foreground/80 mb-6 leading-relaxed">
                Empowering farmers with AI-powered insights while creating meaningful social impact. 
                Technology meets purpose in sustainable agriculture.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary-glow" />
                  <span className="text-sm">hello@urbanrootsbotanica.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary-glow" />
                  <span className="text-sm">+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary-glow" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className="p-2 bg-primary-foreground/10 rounded-lg hover:bg-primary-glow hover:scale-110 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            <div className="lg:col-span-3 grid md:grid-cols-3 gap-8">
              {/* Company */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary-glow">Company</h3>
                <ul className="space-y-3">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-primary-foreground/80 hover:text-primary-glow transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Products */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary-glow">Products</h3>
                <ul className="space-y-3">
                  {footerLinks.products.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-primary-foreground/80 hover:text-primary-glow transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Support & Legal */}
              <div>
                <h3 className="font-semibold text-lg mb-4 text-primary-glow">Support</h3>
                <ul className="space-y-3 mb-6">
                  {footerLinks.support.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-primary-foreground/80 hover:text-primary-glow transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>

                <h4 className="font-semibold mb-3 text-primary-glow">Legal</h4>
                <ul className="space-y-3">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-primary-foreground/80 hover:text-primary-glow transition-colors duration-300"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="mt-16 pt-8 border-t border-primary-foreground/20">
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="text-2xl font-bold mb-4 text-primary-glow">
                Stay Updated on Our Impact
              </h3>
              <p className="text-primary-foreground/80 mb-6">
                Get monthly updates on our agricultural innovations and social impact initiatives.
              </p>
              <Link to="/join-waitlist">
                <Button className="bg-primary-glow hover:bg-primary-foreground hover:text-primary px-8 py-3 shadow-glow">
                  <Mail className="mr-2 h-5 w-5" />
                  Join Our Newsletter
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 bg-primary-light/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="md:flex md:items-center md:justify-between">
              <div className="text-sm text-primary-foreground/80">
                © {currentYear} Urban Roots Botanica. All rights reserved.
              </div>
              <div className="mt-4 md:mt-0">
                <div className="flex items-center space-x-6 text-sm text-primary-foreground/80">
                  <span>🌱 10% of profits donated to empower communities</span>
                  <span>🚀 AI-powered agricultural intelligence</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;