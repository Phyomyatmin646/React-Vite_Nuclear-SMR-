import React, { useState, useEffect, useRef, useCallback } from 'react';
import { MapContainer, TileLayer, Polygon, Polyline, Circle, CircleMarker, Marker, Popup, useMapEvents, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MyModel from "../../three/MyModel";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

const ChinStateIntro = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=500&fit=crop',
      caption: 'Chin State Mountain Landscape'
    },
    {
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=500&fit=crop',
      caption: 'Agricultural Fields in Rural Myanmar'
    },
    {
      image: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&h=500&fit=crop',
      caption: 'Clean Energy for Remote Communities'
    },
    {
      image: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&h=500&fit=crop',
      caption: 'Rural Villages Need Reliable Power'
    },
    {
      image: 'https://images.unsplash.com/photo-1595437193398-f24279553f4f?w=800&h=500&fit=crop',
      caption: 'Traditional Farming Meets Modern Technology'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const challenges = [
    {
      icon: '⚡',
      title: 'Limited Grid Access',
      description: 'Only 30% of Chin State has reliable electricity access, the lowest in Myanmar.'
    },
    {
      icon: '🏔️',
      title: 'Remote Terrain',
      description: 'Mountainous geography makes traditional power grid extension extremely costly.'
    },
    {
      icon: '🌾',
      title: 'Agricultural Potential',
      description: 'Rich agricultural land remains underutilized due to lack of modern irrigation and processing.'
    },
    {
      icon: '🏥',
      title: 'Healthcare & Education',
      description: 'Schools and clinics struggle without consistent power for equipment and lighting.'
    }
  ];

  const smrBenefits = [
    {
      icon: '🔋',
      title: 'Reliable 24/7 Power',
      description: 'SMRs provide consistent baseload power regardless of weather or season.'
    },
    {
      icon: '🌱',
      title: 'Zero Carbon Emissions',
      description: 'Clean nuclear energy helps preserve Chin State\'s pristine environment.'
    },
    {
      icon: '📦',
      title: 'Compact & Modular',
      description: 'Small footprint ideal for remote mountainous regions with limited space.'
    },
    {
      icon: '💰',
      title: 'Economic Development',
      description: 'Enables food processing, cold storage, and new industries for local employment.'
    }
  ];

  return (
    <div className="bg-white">
  
      <div className="relative">
        {/* Slideshow */}
        <div className="relative h-[300px] sm:h-[400px] md:h-[500px] overflow-hidden">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                }`}
            >
              <img
                src={slide.image}
                alt={slide.caption}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.src = `https://via.placeholder.com/800x500/1e3a8a/ffffff?text=${encodeURIComponent(slide.caption)}`;
                }}
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
            </div>
          ))}

          {/* Overlay Content */}
          <div className="absolute inset-0 flex items-end">
            <div className="w-full p-6 md:p-10">
              <div className="max-w-4xl">
                <span className="inline-block px-3 py-1 bg-blue-600 text-white text-xs font-semibold rounded-full mb-3">
                  CHIN STATE, MYANMAR
                </span>
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
                  Why Chin State Needs Small Nuclear Reactors
                </h1>
                <p className="text-gray-200 text-sm md:text-base max-w-2xl">
                  {slides[currentSlide].caption}
                </p>
              </div>
            </div>
          </div>

          {/* Slide Indicators */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-2 h-2 rounded-full transition-all ${index === currentSlide ? 'bg-white w-6' : 'bg-white/50'
                  }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* About Chin State */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Map Image */}
          <div className="relative">
            <img
              src="/images/map.png"
              alt="Chin State Location in Myanmar"
              className="w-full max-w-md h-64 object-cover mx-auto rounded-lg shadow-lg"
            />
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-4">
              About Chin State
            </h2>
            <p className="text-gray-700 mb-4 leading-relaxed">
              Chin State is the least developed region in Myanmar, located in the western
              mountainous area bordering India and Bangladesh. With a population of approximately
              500,000 people spread across rugged terrain, the state faces significant
              infrastructure challenges.
            </p>
            <p className="text-gray-700 mb-6 leading-relaxed">
              The region's economy is primarily agricultural, with farmers growing rice, corn,
              and vegetables. However, lack of reliable electricity severely limits agricultural
              productivity, food preservation, and economic opportunities for local communities.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-xl md:text-2xl font-bold text-blue-900">~500K</p>
                <p className="text-xs text-gray-600">Population</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-xl md:text-2xl font-bold text-blue-900">30%</p>
                <p className="text-xs text-gray-600">Electrification</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-xl md:text-2xl font-bold text-blue-900">9</p>
                <p className="text-xs text-gray-600">Townships</p>
              </div>
              <div className="text-center p-3 bg-blue-50 rounded-lg">
                <p className="text-xl md:text-2xl font-bold text-blue-900">3,000m</p>
                <p className="text-xs text-gray-600">Peak Elevation</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Energy Challenges */}
      <div className="bg-gray-50 py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
              Energy Challenges in Chin State
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Understanding why traditional power solutions have failed this remote region
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {challenges.map((challenge, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow border-t-4 border-red-500"
              >
                <span className="text-3xl mb-3 block">{challenge.icon}</span>
                <h3 className="font-bold text-gray-900 mb-2">{challenge.title}</h3>
                <p className="text-sm text-gray-600">{challenge.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>


      {/* 3D Model */}
      <div className="bg-gray-100 py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-4">

         
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-200">

            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
                3D Model
              </h2>
              <p className="text-gray-600">
                Interactive visualization of the system structure
              </p>
            </div>

            {/* Image */}
            <div className="flex justify-center h-150">
              <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 5, 5]} />

                <MyModel />  {/* scaled + centered */}

                <OrbitControls />
              </Canvas>
            </div>

          </div>
        </div>
      </div>













      <div className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-blue-900 mb-3">
              Why Small Nuclear Reactors Are the Solution
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              SMR technology is uniquely suited to address Chin State's energy needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {smrBenefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-linear-to-br from-blue-900 to-blue-800 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow text-white"
              >
                <span className="text-3xl mb-3 block">{benefit.icon}</span>
                <h3 className="font-bold mb-2">{benefit.title}</h3>
                <p className="text-sm text-blue-100">{benefit.description}</p>
              </div>
            ))}
          </div>

      
          <div className="mt-12 text-center">
            <div className="inline-block bg-blue-50 border border-blue-200 rounded-xl p-6 md:p-8">
              <h3 className="text-xl font-bold text-blue-900 mb-2">
                🎯 Use the Site Selection Tool Below
              </h3>
              <p className="text-gray-600 mb-4">
                Click on the map to evaluate potential SMR locations based on seismic safety,
                water access, grid proximity, and population buffers.
              </p>
              <div className="flex items-center justify-center gap-2 text-blue-600">
                <svg className="w-5 h-5 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
                <span className="font-medium">Scroll down to begin</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const geoData = {
  populationCenters: [
    { name: 'Yangon', coords: [16.8661, 96.1951], population: 5500000, radius: 80000 },
    { name: 'Mandalay', coords: [21.9588, 96.0891], population: 1500000, radius: 50000 },
    { name: 'Naypyidaw', coords: [19.7633, 96.0785], population: 1200000, radius: 40000 },
    { name: 'Mawlamyine', coords: [16.4905, 97.6255], population: 500000, radius: 30000 },
    { name: 'Bago', coords: [17.3366, 96.4811], population: 300000, radius: 25000 },
    { name: 'Pathein', coords: [16.7794, 94.7331], population: 280000, radius: 25000 },
    { name: 'Myitkyina', coords: [25.3867, 97.3936], population: 200000, radius: 20000 },
    { name: 'Taunggyi', coords: [20.7833, 97.0333], population: 180000, radius: 20000 },
  ],
  waterSources: [
    { name: 'Irrawaddy River', coords: [[25.5, 97.0], [24.0, 96.5], [22.0, 95.5], [19.5, 95.0], [17.0, 95.5], [16.0, 95.0]] },
    { name: 'Chindwin River', coords: [[26.0, 95.5], [24.5, 95.0], [23.0, 94.5], [22.0, 95.0]] },
    { name: 'Salween River', coords: [[20.0, 98.5], [18.0, 97.8], [16.5, 97.6]] },
    { name: 'Sittaung River', coords: [[19.5, 96.5], [18.0, 96.8], [17.0, 96.7]] },
  ],
  gridLines: [
    { name: 'North-South Main', coords: [[25.0, 96.5], [22.0, 96.0], [19.5, 96.0], [17.0, 96.2]] },
    { name: 'Yangon-Mandalay', coords: [[16.8, 96.2], [19.5, 96.0], [22.0, 96.1]] },
    { name: 'Western Grid', coords: [[20.0, 94.5], [18.0, 94.8], [16.5, 95.0]] },
    { name: 'Eastern Connection', coords: [[21.0, 97.0], [19.5, 97.5], [17.5, 97.5]] },
  ],
  seismicZones: [
    { name: 'Sagaing Fault Zone', risk: 'high', coords: [[26.0, 95.8], [26.0, 96.8], [22.0, 96.5], [19.0, 96.3], [16.0, 96.8], [16.0, 95.8], [19.0, 95.3], [22.0, 95.5]] },
    { name: 'Eastern Highland Zone', risk: 'medium', coords: [[24.0, 97.0], [24.0, 98.5], [20.0, 98.5], [20.0, 97.0]] },
    { name: 'Western Fold Belt', risk: 'medium', coords: [[21.0, 93.0], [21.0, 94.5], [18.0, 94.5], [18.0, 93.0]] }
  ]
};

const getDistance = (latlng1, coord2) => {
  const lat1 = latlng1.lat || latlng1[0];
  const lng1 = latlng1.lng || latlng1[1];
  const lat2 = coord2[0];
  const lng2 = coord2[1];

  const R = 6371000;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
};

const pointToLineDistance = (point, lineStart, lineEnd) => {
  const lat = point.lat;
  const lng = point.lng;
  const x1 = lineStart[1], y1 = lineStart[0];
  const x2 = lineEnd[1], y2 = lineEnd[0];

  const A = lng - x1;
  const B = lat - y1;
  const C = x2 - x1;
  const D = y2 - y1;

  const dot = A * C + B * D;
  const lenSq = C * C + D * D;
  let param = lenSq !== 0 ? dot / lenSq : -1;

  const xx = param < 0 ? x1 : param > 1 ? x2 : x1 + param * C;
  const yy = param < 0 ? y1 : param > 1 ? y2 : y1 + param * D;

  return getDistance(point, [yy, xx]);
};

const isPointInPolygon = (point, polygon) => {
  const x = point.lng;
  const y = point.lat;
  let inside = false;

  for (let i = 0, j = polygon.length - 1; i < polygon.length; j = i++) {
    const xi = polygon[i][1], yi = polygon[i][0];
    const xj = polygon[j][1], yj = polygon[j][0];

    if (((yi > y) !== (yj > y)) && (x < (xj - xi) * (y - yi) / (yj - yi) + xi)) {
      inside = !inside;
    }
  }
  return inside;
};

const getScoreColor = (score) => {
  if (score >= 80) return '#22c55e';
  if (score >= 60) return '#84cc16';
  if (score >= 40) return '#eab308';
  return '#ef4444';
};

const getScoreLabel = (score) => {
  if (score >= 80) return 'Excellent';
  if (score >= 60) return 'Good';
  if (score >= 40) return 'Moderate';
  return 'Poor';
};

const getRecommendation = (score) => {
  if (score >= 80) return { text: '✅ Highly recommended for SMR development. Proceed with detailed feasibility study.', className: 'bg-green-100 text-green-800 border-green-300' };
  if (score >= 60) return { text: '👍 Suitable site with some considerations. Review specific constraints before proceeding.', className: 'bg-lime-100 text-lime-800 border-lime-300' };
  if (score >= 40) return { text: '⚠️ Marginal suitability. Significant infrastructure investment may be required.', className: 'bg-yellow-100 text-yellow-800 border-yellow-300' };
  return { text: '❌ Not recommended. Major constraints exist. Consider alternative locations.', className: 'bg-red-100 text-red-800 border-red-300' };
};

const calculateSeismicScore = (latlng) => {
  for (const zone of geoData.seismicZones) {
    if (isPointInPolygon(latlng, zone.coords)) {
      if (zone.risk === 'high') {
        return { score: 25, detail: 'Located in high seismic risk zone (Sagaing Fault)' };
      }
      return { score: 60, detail: 'Located in moderate seismic risk zone' };
    }
  }
  return { score: 95, detail: 'Located in low seismic risk area' };
};

const calculateWaterScore = (latlng) => {
  let minDist = Infinity;
  let nearestRiver = '';

  for (const river of geoData.waterSources) {
    for (const coord of river.coords) {
      const dist = getDistance(latlng, coord);
      if (dist < minDist) {
        minDist = dist;
        nearestRiver = river.name;
      }
    }
  }

  const distKm = minDist / 1000;

  if (distKm < 20) return { score: 95, detail: `Excellent - ${distKm.toFixed(0)}km from ${nearestRiver}` };
  if (distKm < 50) return { score: 80, detail: `Good - ${distKm.toFixed(0)}km from ${nearestRiver}` };
  if (distKm < 100) return { score: 55, detail: `Moderate - ${distKm.toFixed(0)}km from water` };
  return { score: 25, detail: `Poor - ${distKm.toFixed(0)}km from nearest water source` };
};

const calculateGridScore = (latlng) => {
  let minDist = Infinity;
  let nearestLine = '';

  for (const line of geoData.gridLines) {
    for (let i = 0; i < line.coords.length - 1; i++) {
      const dist = pointToLineDistance(latlng, line.coords[i], line.coords[i + 1]);
      if (dist < minDist) {
        minDist = dist;
        nearestLine = line.name;
      }
    }
  }

  const distKm = minDist / 1000;

  if (distKm < 15) return { score: 95, detail: `Excellent - ${distKm.toFixed(0)}km from ${nearestLine}` };
  if (distKm < 40) return { score: 75, detail: `Good - ${distKm.toFixed(0)}km from grid` };
  if (distKm < 80) return { score: 50, detail: `Moderate - ${distKm.toFixed(0)}km from grid` };
  return { score: 20, detail: `Poor - ${distKm.toFixed(0)}km from nearest grid connection` };
};

const calculatePopulationScore = (latlng) => {
  let minDist = Infinity;
  let nearestCity = '';

  for (const city of geoData.populationCenters) {
    const dist = getDistance(latlng, city.coords);

    if (dist < city.radius) {
      return { score: 10, detail: `Inside ${city.name} exclusion zone - unsuitable`, inExclusionZone: true };
    }

    if (dist < minDist) {
      minDist = dist;
      nearestCity = city.name;
    }
  }

  const distKm = minDist / 1000;

  if (distKm > 100) return { score: 95, detail: `Excellent buffer - ${distKm.toFixed(0)}km from ${nearestCity}` };
  if (distKm > 50) return { score: 80, detail: `Good buffer - ${distKm.toFixed(0)}km from ${nearestCity}` };
  if (distKm > 30) return { score: 60, detail: `Adequate buffer - ${distKm.toFixed(0)}km from ${nearestCity}` };
  return { score: 35, detail: `Close to ${nearestCity} - ${distKm.toFixed(0)}km` };
};

const calculateSiteScores = (latlng, weights) => {
  const seismic = calculateSeismicScore(latlng);
  const water = calculateWaterScore(latlng);
  const grid = calculateGridScore(latlng);
  const population = calculatePopulationScore(latlng);

  const totalWeight = weights.seismic + weights.water + weights.grid + weights.population;
  const overall = totalWeight > 0 ? Math.round(
    (seismic.score * weights.seismic +
      water.score * weights.water +
      grid.score * weights.grid +
      population.score * weights.population) / totalWeight
  ) : 0;

  return { overall, seismic, water, grid, population };
};


const simulateDispatch = (config) => {
  const hourly = [];
  let totalCost = 0;
  let totalEmissions = 0;
  let totalSmrOutput = 0;
  let totalUnmet = 0;

  for (let hour = 0; hour < 24; hour++) {
    
    const baseDemand = 350;
    const morningPeak = Math.exp(-Math.pow(hour - 9, 2) / 8) * 180;
    const eveningPeak = Math.exp(-Math.pow(hour - 20, 2) / 10) * 250;
    const demand = baseDemand + morningPeak + eveningPeak;

    
    const smrAvailable = config.smr * 0.92;

  
    const solarFactor = Math.max(0, Math.sin((hour - 5) * Math.PI / 14));
    const solarAvailable = config.solar * solarFactor * 0.75;

    
    const hydroAvailable = config.hydro * 0.65;

    
    let remaining = demand;

    const smrOutput = Math.min(smrAvailable, remaining);
    remaining -= smrOutput;

    const hydroOutput = Math.min(hydroAvailable, remaining);
    remaining -= hydroOutput;

    const solarOutput = Math.min(solarAvailable, remaining);
    remaining -= solarOutput;

    const gasOutput = Math.min(config.gas, remaining);
    remaining -= gasOutput;

  
    const hourCost = smrOutput * 35 + hydroOutput * 10 + solarOutput * 0 + gasOutput * 85;
    totalCost += hourCost;


    const hourEmissions = gasOutput * 0.45;
    totalEmissions += hourEmissions;

    totalSmrOutput += smrOutput;
    totalUnmet += Math.max(0, remaining);

    hourly.push({
      hour,
      demand,
      smr: smrOutput,
      hydro: hydroOutput,
      solar: solarOutput,
      gas: gasOutput,
      unmet: Math.max(0, remaining)
    });
  }

  return {
    hourly,
    totalCost,
    totalEmissions,
    smrUtilization: config.smr > 0 ? totalSmrOutput / (config.smr * 0.92 * 24) : 0,
    unmetDemand: totalUnmet
  };
};

const ScoreBar = ({ label, score, detail }) => {
  const color = getScoreColor(score);
  return (
    <div className="mb-3">
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-gray-700">{label}</span>
        <span className="text-sm font-semibold" style={{ color }}>{score}</span>
      </div>
      <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${score}%`, backgroundColor: color }}
        />
      </div>
      <p className="text-xs text-gray-500 mt-1">{detail}</p>
    </div>
  );
};

// Site popup content
const SitePopupContent = ({ site, onRemove }) => {
  const { latlng, scores } = site;
  const recommendation = getRecommendation(scores.overall);

  return (
    <div className="min-w-[280px]">
      <p className="text-xs text-gray-500 font-mono mb-2">
        📍 {latlng.lat.toFixed(4)}°N, {latlng.lng.toFixed(4)}°E
      </p>

      <div
        className="text-center p-4 rounded-lg mb-3"
        style={{
          background: `linear-gradient(135deg, ${getScoreColor(scores.overall)}, ${getScoreColor(scores.overall)}dd)`
        }}
      >
        <p className="text-xs text-white/80 uppercase">Overall Suitability</p>
        <p className="text-4xl font-bold text-white">{scores.overall}</p>
        <p className="text-sm text-white/90">{getScoreLabel(scores.overall)} Site</p>
      </div>

      <ScoreBar label="Seismic Safety" score={scores.seismic.score} detail={scores.seismic.detail} />
      <ScoreBar label="Water Access" score={scores.water.score} detail={scores.water.detail} />
      <ScoreBar label="Grid Proximity" score={scores.grid.score} detail={scores.grid.detail} />
      <ScoreBar label="Population Buffer" score={scores.population.score} detail={scores.population.detail} />

      <div className={`p-3 rounded-lg text-sm border ${recommendation.className} mt-3`}>
        {recommendation.text}
      </div>

      <button
        onClick={() => onRemove(site.id)}
        className="w-full mt-3 py-2 px-4 border border-gray-300 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors"
      >
        Remove Site
      </button>
    </div>
  );
};


const MapClickHandler = ({ onMapClick }) => {
  useMapEvents({
    click: (e) => onMapClick(e.latlng)
  });
  return null;
};


const MapViewController = ({ center, zoom }) => {
  const map = useMap();
  useEffect(() => {
    if (center) {
      map.setView(center, zoom || 8);
    }
  }, [center, zoom, map]);
  return null;
};

const createMarkerIcon = (score) => {
  const color = getScoreColor(score);
  return L.divIcon({
    className: '',
    html: `<div style="
      width: 28px;
      height: 28px;
      background: ${color};
      border: 3px solid white;
      border-radius: 50%;
      box-shadow: 0 2px 8px rgba(0,0,0,0.3);
      display: flex;
      align-items: center;
      justify-content: center;
      color: white;
      font-size: 11px;
      font-weight: bold;
    ">${score}</div>`,
    iconSize: [28, 28],
    iconAnchor: [14, 14],
    popupAnchor: [0, -14]
  });
};


const GridSimulationPanel = ({ sites = [] }) => {
  const [selectedSites, setSelectedSites] = useState([]);
  const [results, setResults] = useState(null);

  const simulateSitePerformance = (site, years = 25) => {
    const yearlyData = [];
    const baseSMROutput = 300; 
    const costPerMWh = 35;

    for (let year = 0; year < years; year++) {
      const yearLabel = new Date().getFullYear() + year;

      const smrOutput = baseSMROutput * (0.92 + year * 0.002);

      const locationEfficiency = (site.scores.overall / 100) * 0.15; 
      const adjustedOutput = smrOutput * (1 + locationEfficiency);

    
      const maintenanceVariation = (Math.sin(year * 0.5) * 0.05); 
      const weatherVariation = (Math.random() - 0.5) * 0.08; 
      const coolingWaterAvailability = (Math.cos(year * 0.3) * 0.03); 
      const totalVariation = maintenanceVariation + weatherVariation + coolingWaterAvailability;

      const finalOutput = adjustedOutput * (1 + totalVariation);
      const yearlyCost = finalOutput * 8760 * costPerMWh; 
      const co2Avoided = finalOutput * 8760 * 0.5; 

      yearlyData.push({
        year: yearLabel,
        output: Math.max(finalOutput, baseSMROutput * 0.70), 
        cost: yearlyCost,
        co2Avoided,
        siteScore: site.scores.overall
      });
    }

    return yearlyData;
  };

  const toggleSite = (site) => {
    setSelectedSites(prev => {
      const exists = prev.find(s => s.id === site.id);
      if (exists) {
        return prev.filter(s => s.id !== site.id);
      } else {
        return [...prev, site];
      }
    });
  };

  const runSimulation = () => {
    if (selectedSites.length === 0) {
      alert('Please select at least one site to compare');
      return;
    }

    const simResults = selectedSites.map(site => ({
      site,
      performance: simulateSitePerformance(site, 25)
    }));

    setResults(simResults);
  };

 
  const chartData = results ? {
    labels: results[0].performance.map(p => p.year),
    datasets: results.map((result, idx) => ({
      label: `Site ${idx + 1} (Score: ${result.site.scores.overall})`,
      data: result.performance.map(p => p.output),
      borderColor: ['#ef4444', '#3b82f6', '#10b981', '#f59e0b'][idx % 4],
      backgroundColor: ['rgba(239, 68, 68, 0.1)', 'rgba(59, 130, 246, 0.1)', 'rgba(16, 185, 129, 0.1)', 'rgba(245, 158, 11, 0.1)'][idx % 4],
      fill: false,
      borderWidth: 2,
      tension: 0.4
    }))
  } : null;

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 2,
    scales: {
      x: {
        title: { display: true, text: 'Year' }
      },
      y: {
        title: { display: true, text: 'Output (MW)' },
        beginAtZero: true
      }
    },
    plugins: {
      legend: { position: 'bottom' }
    }
  };

  return (
    <div className="flex h-full">
      
      <div className="w-72 p-4 border-r border-gray-200 bg-gray-50 overflow-y-auto">
        <div className="mb-4">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Select Sites to Compare</h3>
        </div>

        {sites.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <p className="text-sm">No sites placed yet.</p>
            <p className="text-xs mt-2">Go to Site Selection tab and place SMR locations.</p>
          </div>
        ) : (
          <>
            <div className="space-y-2 mb-4">
              {sites.map((site, idx) => (
                <label key={site.id} className="flex items-center gap-3 p-3 bg-white rounded-lg cursor-pointer hover:bg-blue-50 transition-colors">
                  <input
                    type="checkbox"
                    checked={selectedSites.some(s => s.id === site.id)}
                    onChange={() => toggleSite(site)}
                    className="w-4 h-4 rounded"
                  />
                  <div className="flex-1">
                    <p className="text-sm font-medium">Site {idx + 1}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500">{site.latlng.lat.toFixed(2)}°N, {site.latlng.lng.toFixed(2)}°E</span>
                      <span
                        className="text-xs font-semibold px-2 py-1 rounded"
                        style={{
                          color: getScoreColor(site.scores.overall),
                          backgroundColor: getScoreColor(site.scores.overall) + '20'
                        }}
                      >
                        {site.scores.overall}
                      </span>
                    </div>
                  </div>
                </label>
              ))}
            </div>

            <button
              onClick={runSimulation}
              disabled={selectedSites.length === 0}
              className="w-full py-2.5 px-4 bg-blue-500 text-white rounded-lg text-sm font-medium hover:bg-blue-600 transition-colors disabled:bg-gray-300"
            >
              Run Comparison
            </button>

            {selectedSites.length > 0 && (
              <div className="mt-4 p-3 bg-blue-50 rounded-lg text-xs text-blue-700">
                {selectedSites.length} site{selectedSites.length !== 1 ? 's' : ''} selected for comparison over 25 years
              </div>
            )}
          </>
        )}
      </div>

      {/* Main Content */}
      <div className="flex-1 p-4 flex flex-col">
        {results && selectedSites.length > 0 && (
          <>
          
            <div className="grid grid-cols-3 gap-4 mb-5">
              <div className="bg-linear-to-br from-blue-50 to-blue-100 p-4 rounded-lg">
                <label className="text-xs text-blue-600 font-semibold uppercase">Comparison Period</label>
                <div className="text-2xl font-bold text-blue-900 mt-1">25 Years</div>
                <p className="text-xs text-blue-700 mt-1">2025 - 2050 projection</p>
              </div>
              <div className="bg-linear-to-br from-green-50 to-green-100 p-4 rounded-lg">
                <label className="text-xs text-green-600 font-semibold uppercase">Sites Compared</label>
                <div className="text-2xl font-bold text-green-900 mt-1">{selectedSites.length}</div>
                <p className="text-xs text-green-700 mt-1">Locations analyzed</p>
              </div>
              <div className="bg-linear-to-br from-purple-50 to-purple-100 p-4 rounded-lg">
                <label className="text-xs text-purple-600 font-semibold uppercase">25-Year Output</label>
                <div className="text-2xl font-bold text-purple-900 mt-1">
                  {(results.reduce((sum, r) => sum + r.performance[r.performance.length - 1].output, 0) * 8760 * 25 / 1000).toFixed(0)} TWh
                </div>
                <p className="text-xs text-purple-700 mt-1">Cumulative energy</p>
              </div>
            </div>

            {/* Chart */}
            <div className="bg-white rounded-lg p-4 shadow-sm" style={{ height: '400px' }}>
              <h3 className="text-sm font-semibold text-gray-900 mb-3">SMR Output Over 25 Years by Location</h3>
              <Line data={chartData} options={chartOptions} />
            </div>
          </>
        )}

        {!results && (
          <div className="h-full flex items-center justify-center text-gray-400">
            <div className="text-center">
              <div className="text-5xl mb-3">📊</div>
              <p>Select sites and click "Run Comparison"</p>
              <p className="text-sm mt-2 text-gray-500">to see 25-year performance analysis</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const SiteSelectionPanel = ({
  sites,
  weights,
  setWeights,
  layers,
  setLayers,
  showInstruction,
  handleMapClick,
  handleRemoveSite,
  handleClearAll,
  handleSiteFocus,
  focusedSite
}) => {
  return (
    <div className="flex h-full">
      {/* Sidebar */}
      <div className="w-72 p-4 border-r border-gray-200 bg-gray-50 overflow-y-auto">
        
        <div className="mb-5">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Data Layers</h3>
          {[
            { key: 'seismic', label: '🟥 Seismic Risk Zones' },
            { key: 'water', label: '🟦 Water Sources' },
            { key: 'grid', label: '🟪 Grid Infrastructure' },
            { key: 'population', label: '🟧 Population Centers' }
          ].map(({ key, label }) => (
            <label key={key} className="flex items-center gap-2 mb-2 cursor-pointer text-sm">
              <input
                type="checkbox"
                checked={layers[key]}
                onChange={() => setLayers(prev => ({ ...prev, [key]: !prev[key] }))}
                className="w-4 h-4 rounded"
              />
              {label}
            </label>
          ))}
        </div>

        {/* Criteria Weights */}
        <div className="mb-5">
          <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Criteria Weights</h3>
          {[
            { key: 'seismic', label: 'Seismic Safety' },
            { key: 'water', label: 'Water Access' },
            { key: 'grid', label: 'Grid Proximity' },
            { key: 'population', label: 'Population Buffer' }
          ].map(({ key, label }) => (
            <div key={key} className="mb-3">
              <div className="flex justify-between text-sm mb-1">
                <span>{label}</span>
                <span className="font-medium">{weights[key]}%</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                value={weights[key]}
                onChange={(e) => setWeights(prev => ({ ...prev, [key]: Number(e.target.value) }))}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
              />
            </div>
          ))}
        </div>

        
        <div className="mb-5 p-3 bg-white rounded-lg">
          <h4 className="text-xs font-semibold text-gray-500 uppercase mb-2">Score Legend</h4>
          {[
            { color: '#22c55e', label: 'Excellent (80-100)' },
            { color: '#84cc16', label: 'Good (60-79)' },
            { color: '#eab308', label: 'Moderate (40-59)' },
            { color: '#ef4444', label: 'Poor (0-39)' }
          ].map(({ color, label }) => (
            <div key={label} className="flex items-center gap-2 text-xs mb-1">
              <div className="w-4 h-4 rounded" style={{ backgroundColor: color }} />
              {label}
            </div>
          ))}
        </div>

      
        {sites.length > 0 && (
          <div>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
              Placed Sites ({sites.length})
            </h3>
            <div className="space-y-2 mb-3">
              {sites.map((site, index) => (
                <div
                  key={site.id}
                  onClick={() => handleSiteFocus(site)}
                  className="flex justify-between items-center p-2 bg-white border border-gray-200 rounded-lg cursor-pointer hover:border-blue-400 transition-colors"
                >
                  <span className="text-sm">Site {index + 1} ({site.latlng.lat.toFixed(2)}°N)</span>
                  <div className="flex items-center gap-2">
                    <span
                      className="font-semibold text-sm"
                      style={{ color: getScoreColor(site.scores.overall) }}
                    >
                      {site.scores.overall}
                    </span>
                    <button
                      onClick={(e) => { e.stopPropagation(); handleRemoveSite(site.id); }}
                      className="text-gray-400 hover:text-red-500 px-1"
                    >
                      ✕
                    </button>
                  </div>
                </div>
              ))}
            </div>
            <button
              onClick={handleClearAll}
              className="w-full py-2 px-4 bg-gray-200 text-gray-700 rounded-lg text-sm hover:bg-gray-300 transition-colors"
            >
              Clear All Sites
            </button>
          </div>
        )}
      </div>

      <div className="flex-1 relative">
        {showInstruction && (
          <div className="absolute top-4 left-1/2 -translate-x-1/2 z-1000 bg-black/75 text-white px-5 py-2 rounded-full text-sm pointer-events-none">
            👆 Click on the map to place an SMR site and get suitability scores
          </div>
        )}

        <MapContainer
          center={[19.5, 96.5]}
          zoom={6}
          className="h-full w-full"
        >
          <TileLayer
            url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            attribution='&copy; OpenStreetMap contributors'
          />

          <MapClickHandler onMapClick={handleMapClick} />
          {focusedSite && <MapViewController center={focusedSite.latlng} zoom={8} />}


          {layers.seismic && geoData.seismicZones.map((zone, idx) => (
            <Polygon
              key={`seismic-${idx}`}
              positions={zone.coords}
              pathOptions={{
                color: zone.risk === 'high' ? '#ef4444' : '#f97316',
                fillColor: zone.risk === 'high' ? '#ef4444' : '#f97316',
                fillOpacity: 0.25,
                weight: 2
              }}
            >
              <Popup>{zone.name} (Seismic Risk: {zone.risk})</Popup>
            </Polygon>
          ))}

          {layers.water && (
            <>
              {geoData.waterSources.map((river, idx) => (
                <React.Fragment key={`river-${idx}`}>
                  <Polyline
                    positions={river.coords}
                    pathOptions={{ color: '#3b82f6', weight: 4, opacity: 0.7 }}
                  >
                    <Popup>{river.name}</Popup>
                  </Polyline>
                  {river.coords.map((coord, cIdx) => (
                    <Circle
                      key={`water-buffer-${idx}-${cIdx}`}
                      center={coord}
                      radius={30000}
                      pathOptions={{ color: '#3b82f6', fillOpacity: 0.1, weight: 0 }}
                    />
                  ))}
                </React.Fragment>
              ))}
            </>
          )}

        
          {layers.grid && geoData.gridLines.map((line, idx) => (
            <Polyline
              key={`grid-${idx}`}
              positions={line.coords}
              pathOptions={{ color: '#8b5cf6', weight: 3, dashArray: '10, 5', opacity: 0.8 }}
            >
              <Popup>{line.name} (Transmission Line)</Popup>
            </Polyline>
          ))}

    
          {layers.population && geoData.populationCenters.map((city, idx) => (
            <React.Fragment key={`city-${idx}`}>
              <Circle
                center={city.coords}
                radius={city.radius}
                pathOptions={{ color: '#f97316', fillOpacity: 0.15, weight: 1, dashArray: '5, 5' }}
              />
              <CircleMarker
                center={city.coords}
                radius={6}
                pathOptions={{ color: '#1f2937', fillColor: '#f97316', fillOpacity: 1, weight: 2 }}
              >
                <Popup>{city.name} (Pop: {city.population.toLocaleString()})</Popup>
              </CircleMarker>
            </React.Fragment>
          ))}


          {sites.map((site) => (
            <Marker
              key={site.id}
              position={site.latlng}
              icon={createMarkerIcon(site.scores.overall)}
            >
              <Popup maxWidth={320}>
                <SitePopupContent site={site} onRemove={handleRemoveSite} />
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};


const Location = ({ onSiteSelect, initialSites = [] }) => {
 
  const [activeTab, setActiveTab] = useState('siting');


  const [sites, setSites] = useState(initialSites);
  const [weights, setWeights] = useState({
    seismic: 25,
    water: 25,
    grid: 25,
    population: 25
  });
  const [layers, setLayers] = useState({
    seismic: true,
    water: true,
    grid: true,
    population: true
  });
  const [showInstruction, setShowInstruction] = useState(true);
  const [focusedSite, setFocusedSite] = useState(null);


  const handleMapClick = useCallback((latlng) => {
    const id = `site-${Date.now()}`;
    const scores = calculateSiteScores(latlng, weights);

    const newSite = { id, latlng, scores };
    setSites(prev => [...prev, newSite]);
    setShowInstruction(false);


    if (onSiteSelect) {
      onSiteSelect(newSite);
    }
  }, [weights, onSiteSelect]);


  const handleRemoveSite = useCallback((siteId) => {
    setSites(prev => prev.filter(s => s.id !== siteId));
  }, []);


  const handleClearAll = useCallback(() => {
    setSites([]);
    setShowInstruction(true);
  }, []);

  
  useEffect(() => {
    setSites(prev => prev.map(site => ({
      ...site,
      scores: calculateSiteScores(site.latlng, weights)
    })));
  }, [weights]);


  const handleSiteFocus = useCallback((site) => {
    setFocusedSite(site);
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
   
      <ChinStateIntro />

     
      <div className="max-w-7xl mx-auto p-5 flex flex-col" style={{ minHeight: '800px' }}>
        
        <header className="text-center mb-5">
          <h1 className="text-2xl font-bold text-gray-900 mb-1">🔋 SMR Siting & Grid Optimizer</h1>
          <p className="text-gray-500">Small Nuclear Power Plant site selection for Myanmar</p>
        </header>

     
        <div className="flex gap-1 mb-5 bg-gray-200 p-1 rounded-lg">
          <button
            onClick={() => setActiveTab('siting')}
            className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${activeTab === 'siting'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            📍 Site Selection
          </button>
          <button
            onClick={() => setActiveTab('grid')}
            className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${activeTab === 'grid'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-500 hover:text-gray-700'
              }`}
          >
            ⚡ Grid Simulation
          </button>
        </div>

        
        <div className="flex-1 bg-white rounded-xl shadow-lg overflow-hidden" style={{ minHeight: '600px' }}>
          {activeTab === 'siting' ? (
            <SiteSelectionPanel
              sites={sites}
              weights={weights}
              setWeights={setWeights}
              layers={layers}
              setLayers={setLayers}
              showInstruction={showInstruction}
              handleMapClick={handleMapClick}
              handleRemoveSite={handleRemoveSite}
              handleClearAll={handleClearAll}
              handleSiteFocus={handleSiteFocus}
              focusedSite={focusedSite}
            />
          ) : (
            <GridSimulationPanel sites={sites} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Location;
