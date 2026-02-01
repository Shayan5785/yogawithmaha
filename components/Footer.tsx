export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full border-2 border-primary-foreground flex items-center justify-center">
                <span className="font-bold text-sm">Ⅿ</span>
              </div>
              <span className="font-semibold">Yoga with Maha</span>
            </div>
            <p className="text-sm text-primary-foreground/80">Your sanctuary for peace and wellness.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary-foreground/80 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="#offerings" className="hover:text-primary-foreground/80 transition">
                  Classes
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-primary-foreground/80 transition">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <a href="#" className="hover:text-primary-foreground/80 transition">
                <span className="text-lg">📱</span>
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition">
                <span className="text-lg">𝕏</span>
              </a>
              <a href="#" className="hover:text-primary-foreground/80 transition">
                <span className="text-lg">📷</span>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <p className="text-sm text-primary-foreground/80">📍 South Koramangala, Kharadi</p>
            <p className="text-sm text-primary-foreground/80 mt-2">© 2026 Yoga with Maha. All rights reserved.</p>
          </div>
        </div>
        <div className="border-t border-primary-foreground/20 pt-8 text-center text-sm text-primary-foreground/80">
          <p>Designed with ❤️ | Programs and Services by Maha</p>
        </div>
      </div>
    </footer>
  )
}
