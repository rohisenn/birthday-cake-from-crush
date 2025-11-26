import { useGLTF } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import type { JSX } from "react/jsx-dev-runtime";
import * as THREE from "three";

// Preload the model
useGLTF.preload("/happybirthday.glb");

export function HappyBirthday(props: JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF("/happybirthday.glb");
  const modelRef = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    if (modelRef.current) {
      // Apply materials or shadow settings if needed
      modelRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          child.castShadow = true;
          child.receiveShadow = true;
        }
      });
    }
  }, []);

  return (
    <group {...props}>
      {/* Scale set to 1.0, adjust if model is too large/small */}
      <primitive ref={modelRef} object={scene} scale={[1, 1.2, 1]} />
    </group>
  );
}