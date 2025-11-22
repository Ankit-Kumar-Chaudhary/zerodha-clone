export default function Footer() {
  return (
    <footer className="w-full mt-10 bg-[#1E2939] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Logo */}
        <div className="flex items-center mb-6">
          <img
            src="https://zerodha.com/static/images/logo.svg"
            alt="Zerodha Logo"
            className="h-6 invert" // optional, agar logo dark me white chahiye
          />
        </div>

        {/* Top Footer Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-10 mb-12">
          {/* Account */}
          <div>
            <h3 className="font-semibold mb-3">Account</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Open demat account</li>
              <li>Minor demat account</li>
              <li>NRI demat account</li>
              <li>Commodity</li>
              <li>Dematerialisation</li>
              <li>Fund transfer</li>
              <li>MTF</li>
              <li>Referral program</li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="font-semibold mb-3">Support</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Contact us</li>
              <li>Support portal</li>
              <li>How to file a complaint?</li>
              <li>Status of your complaints</li>
              <li>Bulletin</li>
              <li>Circular</li>
              <li>Z-Connect blog</li>
              <li>Downloads</li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-3">Company</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>About</li>
              <li>Philosophy</li>
              <li>Press & media</li>
              <li>Careers</li>
              <li>Zerodha Cares (CSR)</li>
              <li>Zerodha.tech</li>
              <li>Open source</li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-3">Quick links</h3>
            <ul className="space-y-1 text-sm text-gray-300">
              <li>Upcoming IPOs</li>
              <li>Brokerage charges</li>
              <li>Market holidays</li>
              <li>Economic calendar</li>
              <li>Calculators</li>
              <li>Markets</li>
              <li>Sectors</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm text-gray-400 mb-6">
          © 2010 - 2025, Zerodha Broking Ltd. All rights reserved.
        </div>

        {/* Legal Text */}
        <div className="space-y-4 text-xs text-gray-400 leading-relaxed">
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE & MCX – SEBI Registration
            no.: INZ000031633...
          </p>
          <p>
            Procedure to file a complaint on SEBI SCORES: Register on SCORES
            portal...
          </p>
          <p>
            Smart Online Dispute Resolution | Grievances Redressal Mechanism...
          </p>
        </div>

        {/* Bottom Links */}
        <div className="flex flex-wrap gap-4 mt-6 text-xs text-gray-400">
          <span>NSE</span>
          <span>BSE</span>
          <span>MCX</span>
          <span>Terms & conditions</span>
          <span>Policies & procedures</span>
          <span>Privacy policy</span>
          <span>Disclosure</span>
          <span>Investor charter</span>
        </div>
      </div>
    </footer>
  );
}
