import { useGLTF } from "@react-three/drei";

export default function MyModel() {
  const { scene } = useGLTF("/images/powerplant.glb");
  return (
    <primitive
      object={scene}
      scale={10}
      position={[0, -1, 0]}
    />
  );
}