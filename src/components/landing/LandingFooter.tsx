export function LandingFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="max-w-6xl mx-auto md:px-10 px-6 pb-12">
      <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
      <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs text-white/50 font-['Poppins']">
          © <span className="font-['Poppins']">{currentYear}</span> Flow Finance
        </p>
        <nav className="flex items-center gap-4 text-xs text-white/65">
          <a href="#" className="hover:text-white font-['Poppins']">Privacy</a>
          <a href="#" className="hover:text-white font-['Poppins']">Terms</a>
          <a href="#" className="hover:text-white font-['Poppins']" id="security">Security</a>
        </nav>
      </div>
    </footer>
  );
}
