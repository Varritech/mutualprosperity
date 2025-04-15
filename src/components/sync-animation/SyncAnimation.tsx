'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

interface SyncAnimationProps {
  className?: string;
}

const SyncAnimation: React.FC<SyncAnimationProps> = () => {
  const [activeStep, setActiveStep] = useState<number>(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const steps = [
    {
      id: 's',
      title: 'Synchronize',
      description: "Align your teams efforts with your vision, breaking down communication barriers and creating clear pathways for innovation",
      color: '#6B2C91', // Purple
      lightColor: '#9B59B6', // Lighter purple for gradients
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12 3v10.55c-.59-.34-1.27-.55-2-.55-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4V7h4V3h-6z"/>
        </svg>
      ),
      keyPoints: [
        "Clear communication pathways",
        "Team alignment with vision",
        "Breaking down silos",
        "Orchestrating collaborative effort"
      ]
    },
    {
      id: 'y',
      title: 'Yourself',
      description: "Develop the mindset and resilience needed to lead effectively while maintaining work-life balance",
      color: '#F39C12', // Yellow/gold
      lightColor: '#F1C40F', // Lighter yellow for gradients
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9-4.03-9-9-9zm0 16c-3.86 0-7-3.14-7-7s3.14-7 7-7 7 3.14 7 7-3.14 7-7 7z"/>
          <path d="M12 8c-2.21 0-4 1.79-4 4s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 6c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/>
        </svg>
      ),
      keyPoints: [
        "Mindful leadership practices",
        "Work-life harmony",
        "Resilience building",
        "Personal effectiveness"
      ]
    },
    {
      id: 'n',
      title: 'Naturalize',
      description: "Seamlessly integrate new skills and perspectives, helping your team adapt and thrive in a rapidly changing environment",
      color: '#27AE60', // Green
      lightColor: '#2ECC71', // Lighter green for gradients
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M6.05 8.05c-2.73 2.73-2.73 7.15 0 9.88C7.42 19.37 9.21 20 11 20s3.58-.63 4.95-2.05C19.92 14.1 16 4 16 4S5.9 4.08 6.05 8.05zM14 16.83C13.36 17.5 12.5 18 11.5 18s-1.86-.5-2.5-1.17C8.13 15.9 8 14.81 8 14.81l4-1.36 3.47 1.54S14.7 16.2 14 16.83z"/>
        </svg>
      ),
      keyPoints: [
        "Skill integration",
        "Adaptability to change",
        "Cross-cultural learning",
        "Sustainable growth practices"
      ]
    },
    {
      id: 'c',
      title: 'Communitize',
      description: "Build strong connections within your organization and expand your influence in the broader ecosystem",
      color: '#2980B9', // Blue
      lightColor: '#3498DB', // Lighter blue for gradients
      icon: (
        <svg viewBox="0 0 24 24" width="32" height="32" fill="currentColor">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/>
        </svg>
      ),
      keyPoints: [
        "Network building",
        "Ecosystem engagement",
        "Influential leadership",
        "Community development"
      ]
    },
  ];

  useEffect(() => {
    // Auto-rotate through steps
    const interval = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Handle manual step selection
  const handleStepClick = (index: number) => {
    setActiveStep(index);
  };

  const activeStepData = steps[activeStep];

  return (
    <div className="bg-[#080812] min-h-screen w-full text-white">
      <div className="container mx-auto px-4 py-12">
        <motion.h1 
          className="text-6xl font-light text-center pt-6 pb-10"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Our Methodology
        </motion.h1>
        
        <motion.div
          className="text-center mx-auto mb-16 max-w-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <p className="text-xl text-gray-300">
            The S.Y.N.C. Method™, exclusively offered by Mutual Prosperity, transforms how leaders and teams work together across cultures and borders.
          </p>
        </motion.div>
        
        {/* Main visualization container */}
        <div className="relative w-full max-w-6xl mx-auto" ref={containerRef}>
          <div className="flex flex-col lg:flex-row gap-10 items-center">
            {/* Left side - Cosmic orbital visualization */}
            <div className="relative w-full lg:w-1/2 flex justify-center">
              <div className="relative w-[450px] h-[450px]">
                {/* Ambient background glow */}
                <motion.div
                  className="absolute inset-0 rounded-full blur-3xl"
                  animate={{ 
                    opacity: [0.1, 0.2, 0.1],
                  }}
                  transition={{ 
                    duration: 8, 
                    repeat: Infinity,
                    ease: "easeInOut" 
                  }}
                  style={{ 
                    background: `radial-gradient(circle, ${activeStepData.lightColor}40 0%, transparent 70%)`,
                  }}
                />

                {/* Orbit paths */}
                <svg className="absolute inset-0 w-full h-full opacity-30">
                  <ellipse cx="225" cy="225" rx="200" ry="200" 
                    fill="none" 
                    stroke="#333" 
                    strokeWidth="1" 
                    strokeDasharray="5,5"
                  />
                  <ellipse cx="225" cy="225" rx="150" ry="150" 
                    fill="none" 
                    stroke="#333" 
                    strokeWidth="1"
                    strokeDasharray="3,3"
                  />
                  <ellipse cx="225" cy="225" rx="100" ry="100" 
                    fill="none" 
                    stroke="#333" 
                    strokeWidth="1" 
                    strokeDasharray="2,2"
                  />
                </svg>

                {/* Central Sun/core - represents central concept */}
                <motion.div
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full z-10"
                  style={{
                    width: '120px',
                    height: '120px',
                    background: `radial-gradient(circle at 30% 30%, ${steps[1].lightColor}, ${steps[1].color})`,
                    boxShadow: `0 0 40px ${steps[1].color}80`,
                  }}
                  animate={{
                    boxShadow: activeStep === 1 
                      ? `0 0 60px ${steps[1].color}90` 
                      : `0 0 40px ${steps[1].color}70`,
                  }}
                >
                  <div className="absolute inset-0 flex items-center justify-center">
                    <motion.div 
                      className="text-6xl font-bold"
                      animate={{
                        scale: activeStep === 1 ? 1.1 : 1
                      }}
                      transition={{ duration: 0.5 }}
                    >
                      Y
                    </motion.div>
                  </div>
                </motion.div>

                {/* Orbiting planets/nodes - each representing a part of the method */}
                {steps.map((step, index) => {
                  if (index === 1) return null; // Skip Y as it's in the center
                  
                  // Calculate position on the orbit
                  const orbit = (index === 0) ? 180 : (index === 2 ? 60 : 300); // Angle in degrees
                  const orbitRadius = (index === 0) ? 200 : 170; // Radius of orbit
                  const x = 225 + orbitRadius * Math.cos(orbit * Math.PI / 180);
                  const y = 225 + orbitRadius * Math.sin(orbit * Math.PI / 180);
                  const isActive = index === activeStep;
                  
                  // Determine if the node should be flipped based on position
                  const shouldFlip = index === 0; // Flip S
                  
                  return (
                    <motion.div
                      key={`node-${step.id}`}
                      className="absolute rounded-full flex items-center justify-center cursor-pointer"
                      style={{
                        width: isActive ? '90px' : '70px',
                        height: isActive ? '90px' : '70px',
                        left: `${x}px`,
                        top: `${y}px`,
                        transform: 'translate(-50%, -50%)',
                        background: `radial-gradient(circle at 30% 30%, ${step.lightColor}, ${step.color})`,
                        boxShadow: isActive ? `0 0 30px ${step.color}90` : `0 0 15px ${step.color}60`,
                        zIndex: isActive ? 20 : 5
                      }}
                      animate={{
                        scale: isActive ? 1.1 : 1,
                        boxShadow: isActive ? `0 0 30px ${step.color}90` : `0 0 15px ${step.color}60`,
                      }}
                      transition={{ duration: 0.4 }}
                      onClick={() => handleStepClick(index)}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="text-5xl font-bold" style={{ transform: shouldFlip ? 'scaleX(-1)' : 'none' }}>
                        {step.id.toUpperCase()}
                      </div>
                      
                      {/* Connection line to center */}
                      <motion.div
                        className="absolute z-0"
                        style={{
                          width: '2px',
                          height: orbitRadius,
                          background: `linear-gradient(to ${shouldFlip ? 'top' : 'bottom'}, transparent, ${step.color})`,
                          opacity: isActive ? 0.7 : 0.2,
                          transformOrigin: shouldFlip ? 'bottom' : 'top',
                          transform: `rotate(${shouldFlip ? orbit - 180 : orbit}deg)`,
                          left: '50%',
                          top: shouldFlip ? '50%' : 'auto',
                          bottom: shouldFlip ? 'auto' : '50%',
                        }}
                        animate={{
                          opacity: isActive ? 0.7 : 0.2
                        }}
                      />
                      
                      {/* Active indicators - small pulsing dots */}
                      {isActive && (
                        <motion.div 
                          className="absolute -top-1 -right-1 w-4 h-4 rounded-full"
                          style={{ background: step.lightColor }}
                          animate={{ 
                            scale: [1, 1.5, 1],
                            opacity: [0.7, 1, 0.7]
                          }}
                          transition={{ 
                            duration: 2,
                            repeat: Infinity,
                            ease: "easeInOut"
                          }}
                        />
                      )}
                      
                      {/* Icon hovering near the letter when active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            className="absolute -top-12 left-1/2 -translate-x-1/2 p-3 rounded-full bg-black bg-opacity-30 backdrop-blur-md"
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 10 }}
                            style={{ color: step.lightColor }}
                          >
                            {step.icon}
                          </motion.div>
                        )}
                      </AnimatePresence>
                      
                      {/* Method name appearing when active */}
                      <AnimatePresence>
                        {isActive && (
                          <motion.div
                            className="absolute whitespace-nowrap px-3 py-1 rounded-lg bg-black bg-opacity-50 backdrop-blur-md"
                            style={{
                              left: shouldFlip ? '120%' : 'auto',
                              right: shouldFlip ? 'auto' : '120%',
                            }}
                            initial={{ opacity: 0, x: shouldFlip ? -10 : 10 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: shouldFlip ? -10 : 10 }}
                          >
                            <span className="text-sm font-medium">{step.title}</span>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
                  );
                })}
                
                {/* Animated stars/particles */}
                {[...Array(20)].map((_, i) => (
                  <motion.div
                    key={`star-${i}`}
                    className="absolute rounded-full bg-white"
                    style={{
                      width: Math.random() * 2 + 1 + 'px',
                      height: Math.random() * 2 + 1 + 'px',
                      left: Math.random() * 450 + 'px',
                      top: Math.random() * 450 + 'px',
                      opacity: Math.random() * 0.5 + 0.2,
                    }}
                    animate={{
                      opacity: [0.2, 0.8, 0.2],
                    }}
                    transition={{
                      duration: 2 + Math.random() * 3,
                      repeat: Infinity,
                      delay: Math.random() * 2,
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Right side - content panel */}
            <div className="w-full lg:w-1/2">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStepData.id}
                  className="bg-black bg-opacity-30 backdrop-blur-md p-8 rounded-lg border-l-4"
                  style={{ borderLeftColor: activeStepData.color }}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="flex items-center gap-4 mb-6">
                    <div 
                      className="w-16 h-16 rounded-full flex items-center justify-center" 
                      style={{ 
                        background: `radial-gradient(circle at 30% 30%, ${activeStepData.lightColor}, ${activeStepData.color})`,
                        boxShadow: `0 0 20px ${activeStepData.color}50`
                      }}
                    >
                      <span className="text-white font-bold text-2xl">{activeStepData.id.toUpperCase()}</span>
                    </div>
                    <div>
                      <h3 className="text-3xl font-light">{activeStepData.title}</h3>
                      <div className="h-0.5 w-24 mt-1" style={{ background: activeStepData.color }}></div>
                    </div>
                  </div>
                  
                  <p className="text-gray-300 mb-8 leading-relaxed text-lg">{activeStepData.description}</p>
                  
                  <div>
                    <h4 className="uppercase text-sm tracking-wider mb-4 text-gray-400 flex items-center">
                      <span className="h-px w-8 bg-gray-500 mr-3"></span>
                      Key Components
                      <span className="h-px w-8 bg-gray-500 ml-3"></span>
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      {activeStepData.keyPoints.map((point, idx) => (
                        <motion.div 
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <div className="w-1.5 h-1.5 mt-2 rounded-full" style={{ backgroundColor: activeStepData.color }} />
                          <span className="text-gray-200 font-light">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
        
        <motion.div
          className="text-center mb-16 mx-auto px-4 max-w-3xl pt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <h2 className="text-3xl font-light mb-4">Transform Your Organization</h2>
          <p className="text-gray-300 mb-4 leading-relaxed text-lg">
            Just as an orchestra needs every instrument playing in perfect time, your organization needs alignment to achieve its full potential.
          </p>
          <p className="text-gray-400 text-md italic">
            &ldquo;Whether you&apos;re scaling a tech startup or leading a global corporation, our methodology helps you overcome the &apos;Curse of Babel&apos; that often plagues growing organizations.&rdquo;
          </p>
        </motion.div>
        
        <motion.footer
          className="text-center text-gray-400 border-t border-gray-800 py-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <p className="text-lg">
            With the S.Y.N.C. Method™, you&apos;ll not just lead a company - you&apos;ll conduct a symphony of success.
          </p>
        </motion.footer>
      </div>
    </div>
  );
};

export default SyncAnimation; 
