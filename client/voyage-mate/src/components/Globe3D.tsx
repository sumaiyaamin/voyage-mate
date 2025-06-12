
import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

const Globe = () => {
  const globeRef = useRef<THREE.Mesh>(null);
  const markersRef = useRef<THREE.Group>(null);

  useFrame(() => {
    if (globeRef.current) {
      globeRef.current.rotation.y += 0.002;
    }
    if (markersRef.current) {
      markersRef.current.rotation.y += 0.002;
    }
  });

  const locations = [
    { lat: 40.7128, lng: -74.0060, name: "New York", color: "#ff6b6b" },
    { lat: 51.5074, lng: -0.1278, name: "London", color: "#4ecdc4" },
    { lat: 35.6762, lng: 139.6503, name: "Tokyo", color: "#45b7d1" },
    { lat: -33.8688, lng: 151.2093, name: "Sydney", color: "#96ceb4" },
    { lat: 25.2048, lng: 55.2708, name: "Dubai", color: "#feca57" },
  ];

  return (
    <>
      {/* Main Globe */}
      <mesh ref={globeRef}>
        <sphereGeometry args={[2, 64, 64]} />
        <meshPhongMaterial color="#1e40af" transparent opacity={0.8} />
      </mesh>

      {/* Wireframe overlay */}
      <mesh>
        <sphereGeometry args={[2.01, 32, 32]} />
        <meshBasicMaterial color="#60a5fa" wireframe transparent opacity={0.3} />
      </mesh>

      {/* Location markers */}
      <group ref={markersRef}>
        {locations.map((location) => {
          const phi = (90 - location.lat) * (Math.PI / 180);
          const theta = (location.lng + 180) * (Math.PI / 180);
          const radius = 2.02;

          const x = -(radius * Math.sin(phi) * Math.cos(theta));
          const z = radius * Math.sin(phi) * Math.sin(theta);
          const y = radius * Math.cos(phi);

          return (
            <group key={location.name} position={[x, y, z]}>
              <mesh>
                <sphereGeometry args={[0.05, 8, 8]} />
                <meshBasicMaterial color={location.color} />
              </mesh>
              <mesh position={[0, 0.2, 0]}>
                <cylinderGeometry args={[0.01, 0.01, 0.3]} />
                <meshBasicMaterial color={location.color} />
              </mesh>
            </group>
          );
        })}
      </group>

      <ambientLight intensity={0.6} />
      <directionalLight position={[5, 5, 5]} intensity={1} />
    </>
  );
};

const Globe3D = () => {
  return (
    <div className="w-full h-[500px] relative">
      <Canvas
        camera={{ position: [0, 0, 8], fov: 45 }}
        style={{ background: 'transparent' }}
      >
        <Globe />
        <OrbitControls
          enablePan={false}
          enableZoom={true}
          minDistance={5}
          maxDistance={15}
          autoRotate={false}
        />
      </Canvas>
      
      {/* Floating destination cards */}
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-sm font-medium">New York</span>
        </div>
      </div>
      
      <div className="absolute top-20 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-teal-500 rounded-full"></div>
          <span className="text-sm font-medium">London</span>
        </div>
      </div>
      
      <div className="absolute bottom-16 left-8 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm font-medium">Tokyo</span>
        </div>
      </div>
      
      <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-green-400 rounded-full"></div>
          <span className="text-sm font-medium">Sydney</span>
        </div>
      </div>
      
      <div className="absolute top-1/2 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <span className="text-sm font-medium">Dubai</span>
        </div>
      </div>
    </div>
  );
};

export default Globe3D;
