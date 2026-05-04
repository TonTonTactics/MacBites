import { FaGithub, FaLinkedin } from "react-icons/fa";
import { LuMail } from "react-icons/lu"; 

const socialLinks = [
  { icon: FaGithub, href: "https://github.com/TonTonTactics", label: "GitHub" },
  { icon: FaLinkedin, href: "https://www.linkedin.com/in/antony-w-811653281/", label: "LinkedIn" },
  { icon: LuMail, href: "mailto:antonywiegand2006@gmail.com?subject=Inquiry%20about%20MacBites", label: "Email" },
];

export default function Preview() {
  return (
    <div className="grid h-screen place-items-center bg-background p-4 animate-fade-in">
      <div className="flex flex-col items-center gap-8 text-center max-w-md">
        
        {/* Title & Under Construction */}
        <div className="space-y-3 animate-float">
          <h1 className="text-5xl font-bold tracking-tight md:text-7xl animate-macbites-load">
    MacBites
  </h1>
          <p className="text-lg font-medium text-muted-foreground uppercase tracking-[0.3em]">
            Under Construction
          </p>
        </div>

        {/* Improved "For more information" Section */}
        <div className="w-full flex items-center gap-4">
          <div className="h-[1px] flex-1 bg-border/60" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground whitespace-nowrap">
            Follow the Development
          </span>
          <div className="h-[1px] flex-1 bg-border/60" />
        </div>

        {/* Social Links with improved hover states */}
        <div className="flex justify-center gap-6">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="group relative flex flex-col items-center"
            >
              <div className="p-3 rounded-xl border border-border bg-surface group-hover:border-secondary group-hover:text-primary transition-all duration-300 shadow-sm">
                <social.icon className="w-6 h-6" />
              </div>
              {/* Tooltip-style label that appears on hover */}
              <span className="absolute -bottom-6 scale-0 group-hover:scale-100 text-[10px] font-bold text-primary transition-all duration-200">
                {social.label}
              </span>
            </a>
          ))}
        </div>

      </div>
    </div>
  );
}