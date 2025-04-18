
import { Link } from "react-router-dom";
import { Facebook, Twitter, Instagram, Youtube, Mail, Github } from "lucide-react";

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
            <h3 className="text-sm font-semibold leading-6">Informations</h3>
            <ul className="mt-2 space-y-2">
              <li>
                <Link to="/a-propos" className="text-sm leading-6 text-muted-foreground hover:text-foreground">
                  À propos
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
            <Github className="h-6 w-6" />
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
