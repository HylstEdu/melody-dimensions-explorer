
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card mt-auto">
      <div className="mx-auto max-w-7xl overflow-hidden px-6 py-12 sm:py-16 lg:px-8">
        <nav className="mb-8 columns-2 sm:flex sm:justify-center sm:space-x-12" aria-label="Footer">
          <div className="pb-6">
            <h3 className="text-sm font-semibold leading-6">Explorer</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/physique-son" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                  Physique du Son
                </Link>
              </li>
              <li>
                <Link to="/culture" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                  Culture Musicale
                </Link>
              </li>
              <li>
                <Link to="/technique" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                  Aspects Techniques
                </Link>
              </li>
              <li>
                <Link to="/societe" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                  Fonctions Sociales
                </Link>
              </li>
            </ul>
          </div>
          <div className="pb-6">
            <h3 className="text-sm font-semibold leading-6">À propos</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/a-propos" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                  L'auteur
                </Link>
              </li>
              <li>
                <a href="mailto:geoffroy.streit@gmail.com" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                  Contact
                </a>
              </li>
              <li>
                <Link to="/mentions-legales" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                  Mentions légales
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          <a href="https://github.com/hylst" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">GitHub</span>
            <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          <a href="https://facebook.com/hylst" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Facebook</span>
            <Facebook className="h-6 w-6" />
          </a>
          <a href="https://twitter.com/hylst" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Twitter</span>
            <Twitter className="h-6 w-6" />
          </a>
          <a href="mailto:geoffroy.streit@gmail.com" className="text-muted-foreground hover:text-foreground">
            <span className="sr-only">Email</span>
            <Mail className="h-6 w-6" />
          </a>
        </div>
        <p className="mt-8 text-center text-xs leading-5 text-muted-foreground">
          &copy; {new Date().getFullYear()} MéloDimensions par Geoffroy Streit (Hylst). Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
