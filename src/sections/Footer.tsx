import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink,
  Facebook,
  Twitter,
  Youtube,
  Globe
} from 'lucide-react';

const organizationLinks = [
  { name: 'Office of the Prime Minister and Council of Ministers', url: 'https://www.opmcm.gov.np' },
  { name: 'Ministry of Home Affairs', url: 'https://www.moha.gov.np' },
  { name: 'Ministry of Education, Science and Technology', url: 'https://moe.gov.np' },
  { name: 'Department of Consular Services', url: 'https://nepalconsular.gov.np' },
  { name: 'Department of Foreign Employment', url: 'https://dofe.gov.np' },
  { name: 'Department of Tourism', url: 'https://www.tourismdepartment.gov.np' },
  { name: 'Department of Passports', url: 'https://nepalpassport.gov.np' },
  { name: 'Financial Comptroller General Office', url: 'https://fcgo.gov.np' },
  { name: 'Nepal Rastra Bank', url: 'https://nrb.org.np' },
  { name: 'Nepalese Missions Abroad', url: 'https://mofa.gov.np/departmentsmissions/' },
];

const officeHours = [
  { days: 'Sunday to Thursday', time: '10:00 AM - 5:00 PM', note: 'Normal Working Days' },
  { days: 'Friday', time: '10:00 AM - 3:00 PM', note: 'Short working day' },
  { days: 'Saturday & Public Holidays', time: '11:00 AM - 1:00 PM', note: 'Tourist Visa Only' },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-gov-dark text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Contact Column */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <div className="w-8 h-8 bg-gov-red rounded-lg flex items-center justify-center">
                <Globe className="w-4 h-4" />
              </div>
              Contact
            </h3>
            
            <div className="space-y-4">
              <div>
                <h4 className="font-semibold text-lg">Department of Immigration</h4>
                <p className="text-white/60 text-sm">Ministry of Home Affairs</p>
              </div>
              
              <div className="flex items-start gap-3 text-white/80">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5 text-gov-red" />
                <span>Kalikasthan, Kathmandu, Nepal</span>
              </div>
              
              <a 
                href="tel:+977-01-4529659"
                className="flex items-center gap-3 text-white/80 hover:text-gov-red transition-colors duration-200 group"
              >
                <Phone className="w-5 h-5 flex-shrink-0 text-gov-red group-hover:animate-bounce" />
                <span>+977-01-4529659, 4429660</span>
              </a>
              
              <a 
                href="mailto:info@immigration.gov.np"
                className="flex items-center gap-3 text-white/80 hover:text-gov-red transition-colors duration-200"
              >
                <Mail className="w-5 h-5 flex-shrink-0 text-gov-red" />
                <span>info@immigration.gov.np</span>
              </a>
              
              <div className="flex items-start gap-3 text-white/80">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5 text-gov-red" />
                <div>
                  <span className="text-sm">inquiry@immigration.gov.np</span>
                  <p className="text-xs text-white/50">(For VISA related inquiry)</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gov-red transition-colors duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gov-red transition-colors duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-gov-red transition-colors duration-300"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Organization Links */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6">Organization Links</h3>
            <ul className="space-y-2">
              {organizationLinks.slice(0, 7).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-gov-red transition-colors duration-200 text-sm group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* More Links */}
          <div className="lg:col-span-1 lg:pt-12">
            <ul className="space-y-2">
              {organizationLinks.slice(7).map((link) => (
                <li key={link.name}>
                  <a
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-white/70 hover:text-gov-red transition-colors duration-200 text-sm group"
                  >
                    <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                    <span className="group-hover:translate-x-1 transition-transform duration-200">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Office Hours */}
          <div className="lg:col-span-1">
            <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
              <Clock className="w-5 h-5 text-gov-red" />
              Office Hours
            </h3>
            
            <div className="space-y-4">
              {officeHours.map((schedule) => (
                <div 
                  key={schedule.days}
                  className="bg-white/5 rounded-xl p-4 hover:bg-white/10 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-medium text-sm">{schedule.days}</span>
                    <span className="text-gov-red font-semibold text-sm">{schedule.time}</span>
                  </div>
                  <p className="text-white/50 text-xs">{schedule.note}</p>
                </div>
              ))}
            </div>

            <div className="mt-4 p-4 bg-gov-red/10 rounded-xl border border-gov-red/20">
              <p className="text-sm text-white/80">
                <span className="font-semibold text-gov-red">Application Submission:</span>
                <br />
                10:30 AM - 2:30 PM
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-sm text-white/60">
              <span>Last Updated: 2026-01-27 15:24:31</span>
              <span className="hidden sm:inline">|</span>
              <span>© All Rights Reserved to Department of Immigration</span>
            </div>
            
            <div className="flex items-center gap-4">
              <span className="text-sm text-white/60">Site Visited:</span>
              <div className="bg-white/10 px-3 py-1 rounded-lg">
                <span className="text-gov-red font-bold">1,234,567</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
