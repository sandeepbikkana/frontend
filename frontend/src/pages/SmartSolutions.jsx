'use client';

const SmartSolutions = () => {
  const stats = [
    {
      number: '8',
      unit: 'Years',
      description: 'of pioneering digital growth'
    },
    {
      number: '200+',
      unit: '',
      description: 'Satisfied Clients Across Industries'
    },
    {
      number: '21',
      unit: '',
      description: 'Countries Where Our Clients Are Based'
    },
    {
      number: '7',
      unit: '',
      description: 'Continents Reached Through Our Service Innovations'
    }
  ];

  return (
    <section className="min-h-screen bg-black relative overflow-hidden">
      {/* Background gradient effects */}
      <div className="absolute inset-0 bg-black"></div>
      
      <div className="relative z-10 container mx-auto px-4 py-16 lg:py-24">
        {/* Main Headline */}
        <div className="text-center mb-16">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-sora mb-1">
            <span className="bg-gradient-to-r from-purple-500 to-blue-500 bg-clip-text text-transparent">
              Smart Solutions,
            </span>
            {' '}
            <span className="text-blue-500">
              Trusted Team
            </span>
          </h1>
           <h2 className="text-xl md:text-4xl lg:text-5xl font-sora text-white mb-2">
            Built to Grow Your Business
          </h2>
        </div>

        {/* Description Paragraph */}
        <div className="max-w-4xl mx-auto text-center mb-13">
                   <p className="text-base md:text-lg text-gray-300 leading-relaxed font-extralight font-sora -mt-12">
            At GTM Labs, we leverage deep industry expertise to deliver tailored Web3, AI, and growth solutions that integrate seamlessly into your workflows - driving results without disruption.
          </p>
        </div>

        {/* Statistics Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 max-w-6xl mx-auto mb-14 px-4">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-black/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-4 md:p-6 lg:p-8 text-center transition-all duration-300 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/20 hover:scale-105"
            >
              <div className="mb-4">
                <span className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-blue-500">
                  {stat.number}
                </span>
                {stat.unit && (
                  <span className="text-xl md:text-2xl font-semibold text-blue-500 ml-2">
                    {stat.unit}
                  </span>
                )}
              </div>
              <p className="text-sm md:text-base text-white leading-relaxed font-thin font-sora">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <a href="https://calendly.com/gtmlabsxyz/consult" target="_blank" rel="noopener noreferrer">
            <button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-black font-semibold py-4 px-8 rounded-full text-lg md:text-xl transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 cursor-pointer">
              Talk to Expert
            </button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default SmartSolutions;
