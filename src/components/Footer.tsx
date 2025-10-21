export function Footer() {
  return (
    <footer className="py-8 mt-16 border-t">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Clarity. All rights reserved.</p>
        <p className="mt-2 text-sm">Built with ���️ at Cloudflare</p>
      </div>
    </footer>
  );
}