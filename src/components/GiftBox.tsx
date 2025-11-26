import { useGLTF } from "@react-three/drei";
import { useLayoutEffect, useRef } from "react";
import type { JSX } from "react/jsx-dev-runtime";
import * as THREE from "three";

// Preload the model
useGLTF.preload("/giftbox.glb");

export function GiftBox(props: JSX.IntrinsicElements['group']) {
  const { scene } = useGLTF("/giftbox.glb");
  const modelRef = useRef<THREE.Group>(null);

  useLayoutEffect(() => {
    if (modelRef.current) {
      // Enable shadows
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
      <primitive ref={modelRef} object={scene} />
    </group>
  );
}