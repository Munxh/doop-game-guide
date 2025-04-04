
import { useState, useEffect, ReactNode } from 'react';
import { Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 1024);
      if (window.innerWidth < 1024) {
        setSidebarOpen(false);
      } else {
        setSidebarOpen(true);
      }
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-doop-light">
      <div className="flex min-h-screen">
        {/* Mobile sidebar toggle */}
        <button 
          onClick={toggleSidebar} 
          className={cn(
            "fixed top-4 left-4 z-50 lg:hidden bg-doop-primary text-white p-2 rounded-md",
            sidebarOpen && isMobile ? "left-[240px]" : "left-4"
          )}
          aria-label="Toggle sidebar"
        >
          {sidebarOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
        
        {/* Sidebar */}
        <div 
          className={cn(
            "fixed top-0 left-0 h-full bg-white shadow-lg transition-all duration-300 z-40 overflow-y-auto scrollbar-thin scrollbar-thumb-doop-primary/20",
            sidebarOpen ? "w-64" : "w-0 -ml-64",
            isMobile && sidebarOpen ? "block" : "",
            isMobile && !sidebarOpen ? "hidden" : ""
          )}
        >
          <div className="p-6">
            <h2 className="text-2xl font-bold text-doop-primary mb-6">doop</h2>
            <nav>
              <ul className="space-y-3">
                <li>
                  <a href="#introduction" className="block py-1.5 px-3 hover:bg-doop-light rounded text-doop-primary hover:text-doop-primary font-medium">
                    Introduksjon
                  </a>
                </li>
                <li>
                  <a href="#action-cards" className="block py-1.5 px-3 hover:bg-doop-light rounded text-doop-primary hover:text-doop-primary font-medium">
                    Actionkort
                  </a>
                </li>
                <li className="pl-3">
                  <a href="#swap-card" className="block py-1 px-3 hover:bg-doop-light rounded text-doop-muted hover:text-doop-primary">
                    Swap
                  </a>
                </li>
                <li className="pl-3">
                  <a href="#highest-card" className="block py-1 px-3 hover:bg-doop-light rounded text-doop-muted hover:text-doop-primary">
                    Highest
                  </a>
                </li>
                <li className="pl-3">
                  <a href="#lowest-card" className="block py-1 px-3 hover:bg-doop-light rounded text-doop-muted hover:text-doop-primary">
                    Lowest
                  </a>
                </li>
                <li className="pl-3">
                  <a href="#trade-card" className="block py-1 px-3 hover:bg-doop-light rounded text-doop-muted hover:text-doop-primary">
                    Trade One Card
                  </a>
                </li>
                <li className="pl-3">
                  <a href="#exchange-card" className="block py-1 px-3 hover:bg-doop-light rounded text-doop-muted hover:text-doop-primary">
                    Exchange All Cards
                  </a>
                </li>
                <li>
                  <a href="#actions" className="block py-1.5 px-3 hover:bg-doop-light rounded text-doop-primary hover:text-doop-primary font-medium">
                    Handlinger
                  </a>
                </li>
                <li>
                  <a href="#gameplay" className="block py-1.5 px-3 hover:bg-doop-light rounded text-doop-primary hover:text-doop-primary font-medium">
                    Spillets gang
                  </a>
                </li>
                <li className="pl-3">
                  <a href="#getting-started" className="block py-1 px-3 hover:bg-doop-light rounded text-doop-muted hover:text-doop-primary">
                    Komme i gang
                  </a>
                </li>
                <li className="pl-3">
                  <a href="#losing-lives" className="block py-1 px-3 hover:bg-doop-light rounded text-doop-muted hover:text-doop-primary">
                    Hvem mister liv
                  </a>
                </li>
                <li className="pl-3">
                  <a href="#special-cases" className="block py-1 px-3 hover:bg-doop-light rounded text-doop-muted hover:text-doop-primary">
                    Spesialtilfeller
                  </a>
                </li>
                <li className="pl-3">
                  <a href="#new-round" className="block py-1 px-3 hover:bg-doop-light rounded text-doop-muted hover:text-doop-primary">
                    Ny spillomgang
                  </a>
                </li>
                <li>
                  <a href="#game-end" className="block py-1.5 px-3 hover:bg-doop-light rounded text-doop-primary hover:text-doop-primary font-medium">
                    Spillets slutt
                  </a>
                </li>
                <li>
                  <a href="#examples" className="block py-1.5 px-3 hover:bg-doop-light rounded text-doop-primary hover:text-doop-primary font-medium">
                    Eksempelrunder
                  </a>
                </li>
                <li>
                  <a href="#improvements" className="block py-1.5 px-3 hover:bg-doop-light rounded text-doop-primary hover:text-doop-primary font-medium">
                    Forbedringer
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
        
        {/* Main content */}
        <main 
          className={cn(
            "flex-1 transition-all duration-300 p-6 pt-16 lg:pt-6",
            sidebarOpen ? "lg:ml-64" : "ml-0"
          )}
        >
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;
