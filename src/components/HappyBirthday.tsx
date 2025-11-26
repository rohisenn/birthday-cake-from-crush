import { useLoader } from "@react-three/fiber";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { useMemo } from "react";
import type { ThreeElements } from "@react-three/fiber";

type HappyBirthdayProps = ThreeElements["group"];

export function HappyBirthday(props: HappyBirthdayProps) {
  const gltf = useLoader(GLTFLoader, "/happybirthday.glb");
  const scene = useMemo(() => gltf.scene.clone(true), [gltf.scene]);

  return (
    <group {...props}>
      <primitive object={scene} />
    </group>
  );
}