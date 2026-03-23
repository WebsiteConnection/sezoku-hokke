import { Mail, Globe } from "lucide-react";

const FooterSectionJa = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body"
          >
            <Globe className="w-4 h-4" />
            English Website
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a
            href="mailto:SecularLotus@gmail.com"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body"
          >
            <Mail className="w-4 h-4" />
            SecularLotus@gmail.com
          </a>
        </div>
        <p className="text-sm text-muted-foreground font-body">
          最終更新：2026年3月1日
        </p>
      </div>
    </footer>
  );
};

export default FooterSectionJa;
