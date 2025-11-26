import { useGLTF, Clone } from "@react-three/drei";

useGLTF.preload("/balloons.glb");

export function Balloons() {
  const { scene } = useGLTF("/balloons.glb");

  return (
    <>
      {/* Left Balloon */}
      <Clone object={scene} position={[0, 3, 6]} scale={1} />
      
      {/* Right Balloon */}
      <Clone object={scene} position={[0, 3, -6]} scale={1} />
    </>
  );
}