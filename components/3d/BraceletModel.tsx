'use client'

import { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

function Bracelet() {
  const braceletRef = useRef<THREE.Group>(null)
  const [hovered, setHovered] = useState(false)

  // Auto-rotate when not being controlled
  useFrame((state, delta) => {
    if (braceletRef.current && !hovered) {
      braceletRef.current.rotation.y += delta * 0.3
    }
  })

  return (
    <group ref={braceletRef}>
      {/* Main Bracelet Band - Torus shape */}
      <mesh 
        rotation={[Math.PI / 2, 0, 0]}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
      >
        <torusGeometry args={[2, 0.3, 16, 50]} />
        <meshStandardMaterial 
          color="#ef4444" 
          metalness={0.3}
          roughness={0.4}
          envMapIntensity={0.8}
        />
      </mesh>

      {/* Inner shine effect */}
      <mesh rotation={[Math.PI / 2, 0, 0]}>
        <torusGeometry args={[2, 0.25, 16, 50]} />
        <meshStandardMaterial 
          color="#ef4444" 
          metalness={0.4}
          roughness={0.3}
        />
      </mesh>

      {/* Medical Badge/Plate in center */}
      <group position={[0, 0, 0]}>
        {/* Badge background */}
        <mesh>
          <cylinderGeometry args={[0.6, 0.6, 0.15, 32]} />
          <meshStandardMaterial 
            color="#ffffff" 
            metalness={0.3}
            roughness={0.2}
          />
        </mesh>

        {/* Medical Plus Sign - Vertical */}
        <mesh position={[0, 0, 0.1]}>
          <boxGeometry args={[0.15, 0.6, 0.1]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>

        {/* Medical Plus Sign - Horizontal */}
        <mesh position={[0, 0, 0.1]}>
          <boxGeometry args={[0.6, 0.15, 0.1]} />
          <meshStandardMaterial color="#ef4444" />
        </mesh>

        {/* Badge border ring */}
        <mesh>
          <torusGeometry args={[0.6, 0.05, 16, 32]} />
          <meshStandardMaterial 
            color="#ef4444" 
            metalness={0.7}
            roughness={0.2}
          />
        </mesh>
      </group>

      {/* Decorative elements - small spheres around band */}
      {[0, 60, 120, 180, 240, 300].map((angle, i) => {
        const radian = (angle * Math.PI) / 180
        const x = Math.cos(radian) * 2
        const z = Math.sin(radian) * 2
        return (
          <mesh key={i} position={[x, 0, z]}>
            <sphereGeometry args={[0.08, 16, 16]} />
            <meshStandardMaterial 
              color="#ffffff" 
              metalness={0.8}
              roughness={0.1}
            />
          </mesh>
        )
      })}
    </group>
  )
}

export default function BraceletModel({ inModal = false }: { inModal?: boolean }) {
  return (
    <div className={inModal ? "w-full h-full" : "w-full h-96"}>
      <Canvas dpr={[1, 2]} performance={{ min: 0.5 }}>
        <PerspectiveCamera makeDefault position={[0, 2, 6]} />
        
        {/* Lighting */}
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 5]} intensity={1} />
        <directionalLight position={[-10, -10, -5]} intensity={0.3} />
        <spotLight position={[0, 10, 0]} angle={0.3} intensity={0.5} />
        <pointLight position={[0, 0, 5]} intensity={0.5} color="#ef4444" />

        {/* 3D Model */}
        <Bracelet />

        {/* Interactive Controls */}
        <OrbitControls 
          enableZoom={inModal}
          enablePan={false}
          minDistance={3}
          maxDistance={10}
          autoRotate={false}
        />
      </Canvas>
    </div>
  )
}

