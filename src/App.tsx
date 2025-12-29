import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import { EffectComposer, Bloom, TiltShift, Vignette } from '@react-three/postprocessing'
import { Suspense } from 'react'
import { GameUI } from './components/game/GameUI'
import { Scene } from './components/game/Scene'
import { GameLoop } from './components/game/GameLoop'
import { GameEnvironment } from './components/game/GameEnvironment'

function App() {
  return (
    <div className="relative w-full h-full bg-slate-900 touch-none">
      <GameLoop />
      <Canvas
        shadows
        camera={{ position: [20, 20, 20], fov: 50 }}
        dpr={[1, 2]} // Handle high pixel density screens (mobile)
        gl={{ antialias: false }} // Disable default antialias for post-processing performance
      >
        <Suspense fallback={
          <mesh position={[0, 0, 0]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" wireframe />
          </mesh>
        }>
          <GameEnvironment />
          
          <Scene />
          
          <OrbitControls 
            makeDefault 
            maxPolarAngle={Math.PI / 2.2} // Don't allow going below ground
            minDistance={10}
            maxDistance={80}
            enableDamping={true}
            dampingFactor={0.05}
          />

          <EffectComposer>
            <Bloom luminanceThreshold={1} mipmapBlur intensity={0.5} />
            <TiltShift />
            <Vignette eskil={false} offset={0.1} darkness={0.5} />
          </EffectComposer>
        </Suspense>
      </Canvas>
      <GameUI />
    </div>
  )
}

export default App
