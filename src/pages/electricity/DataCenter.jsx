import React from 'react';
import { Power, Zap, Shield, Leaf, ArrowRight, CheckCircle2 } from 'lucide-react';
import Slideshow from '../../components/ImageSlideshow';

export default function DataCenter() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-start lg:min-h-[500px]">
            {/* Left Content */}
            <div className="space-y-8 flex flex-col justify-center">
              <div className="flex items-center gap-4">
                <Power className="w-12 h-12 text-green-400" />
                <span className="text-green-400 font-bold tracking-wider uppercase text-sm">
                  Data Center Power Solutions
                </span>
              </div>

              <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight">
                Uninterruptible Power for<br />
                <span className="text-green-400">AI & Hyperscale Computing</span>
              </h1>

              <p className="text-xl text-gray-200 leading-relaxed max-w-2xl">
                Our power system ensures continuous uptime, full redundancy, and seamless clean energy integration.
                Engineered specifically for high-density GPU clusters and next-gen AI workloads.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a href="#contact" className="inline-flex items-center justify-center gap-3 bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-xl">
                  Get a Custom Quote <ArrowRight className="w-5 h-5" />
                </a>
                <a href="#features" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-blue-900 text-white font-bold py-4 px-8 rounded-lg transition">
                  Learn More
                </a>
              </div>
            </div>

            {/* Right Slideshow */}
            <div className="relative h-96 lg:h-[500px]">
              <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                <Slideshow
                  images={[
                    { src: "/images/datacenter3.png", title: "50 MW Critical Power", caption: "N+2 Redundancy • Lithium BESS" },
                    { src: "/images/datacenter2.png", title: "Backup Data Center", caption: "100% Renewable Backup" },
                    { src: "/images/datacenter1.png", title: "Mission Control Room", caption: "24/7 Real-time Monitoring" },
                  ]}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Engineered for Maximum Reliability
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powered by agricultural waste-to-energy and renewable integration — delivering clean, firm power 24/7.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              { icon: Shield, title: "Tier IV Equivalent", desc: "N+2 redundancy across all critical systems", color: "text-blue-600" },
              { icon: Zap, title: "99.9999% Uptime", desc: "Proven six-nines reliability in live deployments", color: "text-yellow-500" },
              { icon: Leaf, title: "Carbon Negative Ready", desc: "Biogas + carbon capture from farm waste", color: "text-green-600" }
            ].map((item, i) => (
              <div key={i} className="group bg-linear-to-b from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl transition-all duration-300">
                <item.icon className={`w-14 h-14 ${item.color} mb-6 group-hover:scale-110 transition-transform`} />
                <h3 className="text-2xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                <div className="mt-4 flex items-center text-green-600 font-medium">
                  <CheckCircle2 className="w-5 h-5 mr-2" />
                  Verified Performance
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 bg-linear-to-r from-blue-800 to-indigo-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "50 MW+", label: "Deployed Capacity" },
              { value: "Supplied Data Center", label: "219GWh/year" },
              { value: "24/7", label: "Network uptime" },
              { value: "100%", label: "Renewable Blend" }
            ].map((stat, i) => (
              <div key={i} className="space-y-2">
                <div className="text-4xl lg:text-5xl font-extrabold">{stat.value}</div>
                <div className="text-blue-200 text-sm lg:text-base">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

     
      <section id="contact" className="py-24 bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Power Your Data Center with Clean Farm Energy
          </h2>
          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Join the future of sustainable AI infrastructure. Zero emissions. Rock-solid reliability.
          </p>
          <a href="mailto:power@snragriculture.com" className="inline-flex items-center gap-4 bg-green-500 hover:bg-green-600 text-white font-bold text-lg py-5 px-12 rounded-full transition transform hover:scale-105 shadow-2xl">
            Schedule a Free Consultation <ArrowRight className="w-6 h-6" />
          </a>
        </div>
      </section>
    </div>
  );
}