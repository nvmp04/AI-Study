import { 
  Brain, 
  Mail, 
  Phone, 
  MapPin,
  Facebook,
  Youtube, 
  Github,
  Sparkles,
  Heart,
  Shield,
  Users,
  Zap,
  Globe,
  BookOpen,
  Award,
  Headphones,
  FileText,
  Star
} from 'lucide-react';

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Study Sets', href: '#', icon: BookOpen },
    { name: 'AI Tutor', href: '#', icon: Brain },
    { name: 'Progress Tracking', href: '#', icon: Award },
    { name: 'Community', href: '#', icon: Users },
    { name: 'Premium Features', href: '#', icon: Sparkles }
  ];

  const resources = [
    { name: 'Help Center', href: '#', icon: Headphones },
    { name: 'Documentation', href: '#', icon: FileText },
    { name: 'Study Guides', href: '#', icon: BookOpen },
    { name: 'API Reference', href: '#', icon: Globe },
    { name: 'Tutorials', href: '#', icon: Star }
  ];

  const company = [
    { name: 'About Us', href: '#' },
    { name: 'Careers', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Press', href: '#' },
    { name: 'Partnerships', href: '#' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'GDPR', href: '#' },
    { name: 'Accessibility', href: '#' }
  ];

  const socialLinks = [
    { name: 'Facebook', icon: Facebook, href: '#', color: 'hover:text-blue-500' },
    { name: 'YouTube', icon: Youtube, href: '#', color: 'hover:text-red-500' },
    { name: 'GitHub', icon: Github, href: '#', color: 'hover:text-gray-300' }
  ];

  return (
    <footer className="relative bg-black border-t border-white/10">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-blue-900/5 to-cyan-900/10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(120,119,198,0.15),rgba(255,255,255,0))]"></div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            
            {/* Brand Section */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-600 rounded-xl blur opacity-75"></div>
                  <div className="relative bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl">
                    <Brain className="h-10 w-10 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                    StudyAI Pro
                  </h3>
                  <div className="flex items-center space-x-1">
                    <Sparkles className="h-3 w-3 text-yellow-400" />
                    <span className="text-xs text-yellow-400 font-medium">PREMIUM AI LEARNING</span>
                  </div>
                </div>
              </div>
              
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Revolutionizing education through AI-powered study tools. Create, learn, and master any subject with intelligent flashcards, personalized tutoring, and advanced analytics.
              </p>

              {/* Contact Info */}
              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3 text-gray-400">
                  <Mail className="h-5 w-5 text-blue-400" />
                  <span>support@studyaipro.com</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <Phone className="h-5 w-5 text-green-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-400">
                  <MapPin className="h-5 w-5 text-red-400" />
                  <span>San Francisco, CA</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex items-center space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      className={`bg-white/5 border border-white/10 p-3 rounded-xl text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:bg-white/10`}
                      aria-label={social.name}
                    >
                      <IconComponent className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                <Zap className="h-5 w-5 text-yellow-400" />
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-4">
                {quickLinks.map((link, index) => {
                  const IconComponent = link.icon;
                  return (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                      >
                        <IconComponent className="h-4 w-4 group-hover:text-blue-400 transition-colors" />
                        <span>{link.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                <BookOpen className="h-5 w-5 text-blue-400" />
                <span>Resources</span>
              </h4>
              <ul className="space-y-4">
                {resources.map((resource, index) => {
                  const IconComponent = resource.icon;
                  return (
                    <li key={index}>
                      <a
                        href={resource.href}
                        className="flex items-center space-x-3 text-gray-400 hover:text-white transition-colors duration-300 group"
                      >
                        <IconComponent className="h-4 w-4 group-hover:text-green-400 transition-colors" />
                        <span>{resource.name}</span>
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Company & Legal */}
            <div>
              <h4 className="text-lg font-bold text-white mb-6 flex items-center space-x-2">
                <Users className="h-5 w-5 text-purple-400" />
                <span>Company</span>
              </h4>
              <ul className="space-y-4 mb-8">
                {company.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-gray-400 hover:text-white transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>

              <h5 className="text-sm font-bold text-gray-300 mb-4 flex items-center space-x-2">
                <Shield className="h-4 w-4" />
                <span>Legal</span>
              </h5>
              <ul className="space-y-3">
                {legal.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-sm text-gray-500 hover:text-gray-300 transition-colors duration-300"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0">
              <div className="flex items-center space-x-2 text-gray-400">
                <span>© {currentYear} StudyAI Pro. All rights reserved.</span>
                <span className="hidden sm:inline">•</span>
                <span className=" space-x-2">
                  <span className='flex items-center gap-1'>Made with <Heart className="h-4 w-4 text-red-400" /> for learners worldwide</span>
                </span>
              </div>
              
              <div className="flex items-center space-x-6 text-sm text-gray-500">
                <span className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span>All systems operational</span>
                </span>
                <span>v2.4.1</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;