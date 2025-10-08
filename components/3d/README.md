# 3D Bracelet Model Components

This folder contains the 3D interactive bracelet model components using React Three Fiber.

## Current Implementation

The bracelet is currently a **procedurally generated 3D model** built with Three.js primitives:
- Torus shape for the band
- Cylinder for the medical badge
- Box geometry for the plus sign
- Additional decorative spheres

## Features

✅ **Interactive Controls**
- Drag to rotate the model
- Auto-rotation when not interacting
- Smooth animations

✅ **Fullscreen Modal**
- Click "View 360°" button to open fullscreen view
- Zoom enabled in fullscreen mode
- Beautiful dark theme UI

✅ **Responsive Design**
- Works on all screen sizes
- Touch-friendly controls

## How to Replace with Your Own 3D Model

If you have a `.glb` or `.gltf` 3D model file:

1. **Add your model file** to `/public/models/bracelet.glb`

2. **Update `BraceletModel.tsx`**:

```tsx
import { useGLTF } from '@react-three/drei'

function Bracelet() {
  const { scene } = useGLTF('/models/bracelet.glb')
  
  return (
    <primitive 
      object={scene} 
      scale={1.5}
      rotation={[0, Math.PI, 0]}
    />
  )
}

// Don't forget to preload
useGLTF.preload('/models/bracelet.glb')
```

3. **Remove the procedural geometry** (torus, cylinder, etc.)

## Getting a 3D Model

### Option 1: Design Tools
- **Blender** (Free) - Professional 3D modeling
- **SketchUp** - User-friendly CAD
- **Tinkercad** (Free) - Online, beginner-friendly

### Option 2: 3D Scanning
- Use iPhone/iPad with LiDAR scanner
- Apps: Polycam, 3D Scanner App

### Option 3: Commission/Purchase
- **Fiverr** - Hire a 3D artist
- **TurboSquid** - Purchase models
- **Sketchfab** - Browse free/paid models

### Option 4: AI Generation
- **Spline** - AI 3D model generation
- **Meshy.ai** - Text/image to 3D

## Model Requirements

- **Format**: `.glb` (preferred) or `.gltf`
- **File size**: < 5MB for web performance
- **Polygon count**: < 50k polygons recommended
- **Textures**: Embedded or max 2048x2048px

## Libraries Used

- `three` - Core 3D rendering engine
- `@react-three/fiber` - React renderer for Three.js
- `@react-three/drei` - Useful helpers (OrbitControls, etc.)

## Performance Tips

1. Use Draco compression for GLB files
2. Optimize textures (use WebP or compressed formats)
3. Use LOD (Level of Detail) for complex models
4. Enable lazy loading with Suspense

## Need Help?

Check out the [React Three Fiber docs](https://docs.pmnd.rs/react-three-fiber) for more advanced features!

