import React from 'react';
import { Sprout, Shield, TrendingUp, Droplets, Mountain, Zap, Atom } from 'lucide-react';

const SoilErosion = () => {
  const solutions = [
    {
      icon: Atom,
      title: "Isotope Soil Tracing",
      desc: "Use of radioactive and stable isotopes to precisely measure soil erosion and sediment movement",
      color: "text-blue-600"
    },
    {
      icon: Mountain,
      title: "Nuclear-Based Land Mapping",
      desc: "Gamma-ray spectrometry and nuclear imaging for erosion risk assessment and terrain stability",
      color: "text-amber-600"
    },
    {
      icon: Droplets,
      title: "Soil Moisture Nuclear Sensors",
      desc: "Neutron-based sensors to monitor subsurface moisture and prevent runoff-triggered erosion",
      color: "text-cyan-600"
    },
    {
      icon: Shield,
      title: "Radiation Soil Stabilization",
      desc: "Radiation-assisted polymer and mineral soil binding for long-term erosion resistance",
      color: "text-purple-600"
    },
    {
      icon: TrendingUp,
      title: "Nuclear-Assisted Productivity",
      desc: "Improve soil fertility and crop stability using nuclear-based soil diagnostics",
      color: "text-orange-600"
    },
    {
      icon: Zap,
      title: "Real-Time Nuclear Monitoring",
      desc: "Continuous erosion tracking using nuclear probes and AI-integrated data systems",
      color: "text-yellow-600"
    }
  ];

  const statistics = [
    {
      metric: "90%",
      label: "Measurement Accuracy",
      description: "Nuclear isotope tracing enables ultra-precise erosion measurement"
    },
    {
      metric: "65%",
      label: "Runoff Reduction",
      description: "Radiation-stabilized soils show significantly lower runoff rates"
    },
    {
      metric: "30+ Years",
      label: "Soil Stability",
      description: "Long-term stabilization from nuclear soil treatment techniques"
    },
    {
      metric: "100%",
      label: "Non-GMO & Eco-Safe",
      description: "No genetic modification or environmental contamination involved"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-linear-to-br from-indigo-900 via-purple-800 to-blue-700 text-white overflow-hidden">
  <div className="absolute inset-0 bg-black opacity-30"></div>
        
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 grid lg:grid-cols-2 gap-12 items-center">

    {/* Text Content */}
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-8">
        <Atom className="w-12 h-12 text-indigo-300" />
        <span className="text-indigo-300 font-bold uppercase tracking-wider text-sm">
          Nuclear Soil Engineering
        </span>
      </div>
            
      <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mb-6">
        Nuclear Soil Erosion Control &<br />
        <span className="text-indigo-300">Land Stabilization</span>
      </h1>
            
      <p className="text-xl lg:text-2xl text-gray-100 leading-relaxed max-w-2xl mb-8">
        Advanced nuclear science applied to soil conservation using isotope tracking, radiation stabilization,
        and nuclear moisture sensing for precise, long-term erosion prevention.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-4 px-8 rounded-lg transition transform hover:scale-105 shadow-xl">
          Request Nuclear Soil Scan
        </a>
        <a href="/contact" className="inline-flex items-center justify-center border-2 border-white hover:bg-white hover:text-indigo-900 text-white font-bold py-4 px-8 rounded-lg transition">
          Explore Nuclear Methods
        </a>
      </div>
    </div>

    {/* Image Content */}
    <div className="relative">
      <div className="grid grid-cols-2 gap-4">
        <img 
          src="https://www.humboldtmfg.com/assets/blog-images/Nuke-Gauge.jpg" 
          alt="Nuclear soil testing"
          className="rounded-2xl shadow-2xl object-cover h-56 w-full"
        />
        <img 
          src="https://eos.org/wp-content/uploads/2020/11/agriculture-tunisia.jpg" 
          alt="Isotope soil analysis"
          className="rounded-2xl shadow-2xl object-cover h-56 w-full"
        />
        <img 
          src="https://www.iaea.org/sites/default/files/nuclear_explained_soil_erosion_frns.png" 
          alt="Gamma ray soil scanning"
          className="rounded-2xl shadow-2xl object-cover h-56 w-full col-span-2"
        />
      </div>
    </div>

  </div>
</section>

      {/* Solutions Grid */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Nuclear Soil Erosion Control System
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Precision nuclear technologies for accurate erosion detection, prevention, and soil reinforcement
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {solutions.map((item, i) => (
              <div key={i} className="group bg-linear-to-b from-gray-50 to-white rounded-2xl p-8 border border-gray-200 hover:shadow-2xl hover:border-indigo-300 transition-all duration-300">
                <div className="inline-flex p-4 bg-gray-100 rounded-2xl mb-6 group-hover:bg-indigo-100 transition">
                  <item.icon className={`w-12 h-12 ${item.color}`} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-24 bg-linear-to-r from-indigo-800 to-purple-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Nuclear Monitoring Impact
            </h2>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Proven results using nuclear measurement and soil stabilization technologies
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-10">
            {statistics.map((item, i) => (
              <div key={i} className="text-center">
                <div className="text-5xl lg:text-6xl font-extrabold text-indigo-300 mb-4">
                  {item.metric}
                </div>
                <h3 className="text-2xl font-bold mb-3">{item.label}</h3>
                <p className="text-indigo-100 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-16 text-center">
            Nuclear Soil Protection Workflow
          </h2>

          <div className="space-y-8">
            {[
              {
                phase: "Isotopic Assessment",
                items: [
                  "Cesium-137 and Lead-210 tracing",
                  "Gamma-ray soil density mapping",
                  "Sediment transport analysis",
                  "Radiological safety verification"
                ]
              },
              {
                phase: "Radiation Soil Treatment",
                items: [
                  "Radiation-induced polymer curing",
                  "Mineral soil fusion bonding",
                  "Surface erosion hardening",
                  "Micro-aggregate stabilization"
                ]
              },
              {
                phase: "Hydrological Control",
                items: [
                  "Neutron moisture sensors",
                  "Nuclear runoff modeling",
                  "Subsurface water tracking",
                  "Slope infiltration control"
                ]
              },
              {
                phase: "Nuclear Monitoring & AI",
                items: [
                  "Real-time isotope tracking",
                  "Satellite nuclear imaging",
                  "AI erosion prediction models",
                  "Automated soil integrity alerts"
                ]
              }
            ].map((phase, i) => (
              <div key={i} className="bg-linear-to-r from-gray-50 to-white rounded-2xl p-10 border border-gray-200 hover:shadow-lg transition-all">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                  <span className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 text-white font-bold">
                    {i + 1}
                  </span>
                  {phase.phase}
                </h3>
                <div className="grid sm:grid-cols-2 gap-4">
                  {phase.items.map((item, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className="h-2 w-2 rounded-full bg-indigo-500"></div>
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-linear-to-r from-indigo-700 to-purple-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Stabilize Land with Nuclear Precision</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Apply nuclear soil erosion control to protect farmland, slopes, riverbanks, and infrastructure
          </p>
          <a href="/contact" className="inline-flex items-center justify-center gap-3 bg-white hover:bg-gray-100 text-indigo-900 font-bold py-4 px-10 rounded-lg transition transform hover:scale-105 shadow-xl">
            Schedule Nuclear Soil Survey
          </a>
        </div>
      </section>
    </div>
  );
};

export default SoilErosion;
