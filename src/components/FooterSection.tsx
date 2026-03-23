import { Mail, Globe } from "lucide-react";

const FooterSection = () => {
  return (
    <footer className="py-16 px-6 border-t border-border">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-8">
          <a
            href="/ja"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body">
            
            <Globe className="w-4 h-4" />
            日本語サイト
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a
            href="mailto:SecularLotus@gmail.com"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body">
            
            <Mail className="w-4 h-4" />
            SecularLotus@gmail.com
          </a>
        </div>
        <p className="text-sm text-muted-foreground font-body">
          Last update: March 22, 2026
        </p>
      </div>
    </footer>);

};

export default FooterSection;