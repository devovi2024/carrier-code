import React from "react";
import { Twitter, Youtube, Facebook } from "lucide-react";

const Footer = () => {
  const services = ["Branding", "Design", "Marketing", "Advertisement"];
  const company = ["About us", "Contact", "Jobs", "Press kit"];
  const socialIcons = [
    { name: "Twitter", href: "#", icon: <Twitter size={24} /> },
    { name: "YouTube", href: "#", icon: <Youtube size={24} /> },
    { name: "Facebook", href: "#", icon: <Facebook size={24} /> },
  ];

  return (
    <footer className="footer sm:footer-horizontal bg-base-300 text-base-content p-10">
      <nav>
        <h6 className="footer-title">Services</h6>
        {services.map((service) => (
          <a key={service} href="#" className="link link-hover">
            {service}
          </a>
        ))}
      </nav>

      <nav>
        <h6 className="footer-title">Company</h6>
        {company.map((item) => (
          <a key={item} href="#" className="link link-hover">
            {item}
          </a>
        ))}
      </nav>

      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          {socialIcons.map((icon) => (
            <a key={icon.name} href={icon.href} aria-label={icon.name}>
              {icon.icon}
            </a>
          ))}
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
