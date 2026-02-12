export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <nav>
            <h1 className="text-2xl font-bold">Semantic HTML Structure</h1>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <section className="container mx-auto px-4 py-12">
          <article>
            <h2 className="text-3xl font-bold mb-4">Welcome</h2>
            <p className="text-muted-foreground">
              This page demonstrates proper semantic HTML5 structure with header, main, and footer elements.
            </p>
          </article>
        </section>
      </main>

      <footer className="border-t mt-auto">
        <div className="container mx-auto px-4 py-6">
          <p className="text-sm text-muted-foreground text-center">
            © {new Date().getFullYear()} · Built with love using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
                typeof window !== 'undefined' ? window.location.hostname : 'semantic-html-app'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </footer>
    </div>
  );
}
