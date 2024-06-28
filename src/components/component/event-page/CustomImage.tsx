
import NextImage, { ImageProps } from "next/image";

interface CustomImageProps extends ImageProps {
  width?: number;
  height?: number;
}

const CustomImage: React.FC<CustomImageProps> = ({ width = 500, height = 500, ...props }) => {
  return <NextImage {...props} width={width} height={height} />;
};

export default CustomImage;
