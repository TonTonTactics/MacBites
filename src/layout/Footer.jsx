export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-border bg-background">
      <div className="container mx-auto px-6">
        {/* flex-col for mobile (stacked), md:flex-row for desktop (side-by-side) */}
        {/* justify-between pushes the two children to the far left and far right */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* 1. Left Side: Logo & Copyright */}
          <div className="text-center md:text-left">
            <a 
              href="#" 
              className="text-xl font-bold tracking-tight hover:text-permred"
            >
              <span>AW</span>
              <span className="text-permred">.</span>
            </a>
            <p className="text-sm text-muted-foreground mt-2">
              © {currentYear} Antony Wiegand.
            </p>
          </div>

          {/* 2. Right Side: Disclaimer */}
          {/* md:text-right aligns the actual lines of text to the right edge */}
          <div className="max-w-xs md:text-left"> 
            <p className="text-xs text-muted-foreground italic leading-relaxed text-center md:text-left">
              MacBites is an independent student project and is not affiliated with, 
              endorsed by, or sponsored by McMaster University.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
};