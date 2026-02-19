import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-semibold mb-4">PlantSavvy</h3>
            <p className="text-sm text-muted-foreground">
              Your intelligent companion for plant care and identification.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li key="home">
                <Link href="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li key="about">
                <Link href="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li key="plants">
                <Link href="/plants" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Plants
                </Link>
              </li>
              <li key="contact">
                <Link href="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li key="email">hello@plantsavvy.com</li>
              <li key="phone">+1 (555) 123-4567</li>
              <li key="address">123 Plant Street<br />Green City, GC 12345</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © {currentYear} PlantSavvy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}