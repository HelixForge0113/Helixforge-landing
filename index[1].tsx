import { Button } from "@/components/ui/button";

export default function HelixForgeLanding() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <div className="relative h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/hero.jpg)' }}>
        <div className="absolute inset-0 bg-black bg-opacity-70" />
        <div className="z-10 text-center space-y-6 p-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-widest">HELIX FORGE, LLC</h1>
          <p className="text-lg md:text-2xl text-gray-300">AI-Driven Construction Consulting</p>
          <p className="italic text-gray-400">Forged in Fire. Delivered with Precision.</p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black">Get in Touch</Button>
        </div>
      </div>

      {/* Services Section */}
      <div className="max-w-4xl mx-auto py-16 px-6 space-y-10">
        <h2 className="text-3xl font-bold text-center">What We Do</h2>
        <ul className="space-y-4 text-gray-300">
          <li>- Construction Project Management</li>
          <li>- Site Inspection & Logistics</li>
          <li>- AI-Enhanced Scheduling & Oversight</li>
          <li>- Field Ops Documentation & Reporting</li>
        </ul>
      </div>

      {/* Why Us Section */}
      <div className="bg-gray-900 py-16 px-6 text-gray-300">
        <div className="max-w-4xl mx-auto space-y-10">
          <h2 className="text-3xl font-bold text-center">Why Helix Forge</h2>
          <ul className="space-y-4">
            <li>- Veteran-Owned. Battle-Tested.</li>
            <li>- AI-integrated systems = faster, smarter results</li>
            <li>- Boots on the ground + data in the cloud</li>
            <li>- Clients carry the cost—we carry the mission</li>
          </ul>
        </div>
      </div>

      {/* Contact Section */}
      <div className="max-w-4xl mx-auto py-16 px-6 text-gray-300">
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <div className="text-center space-y-2">
          <p>Email: you@helixforge.net</p>
          <p>Phone: (XXX) XXX-XXXX</p>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black mt-4">Send a Message</Button>
        </div>
      </div>
    </div>
  );
}
