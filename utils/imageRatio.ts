export const getImageRatio = ({
  width,
  height,
}: {
  width: number;
  height: number;
}) => {
  return width / height;
};

export const getImageHeightPercentage = (imageRatio: number) => {
  return (1 / imageRatio) * 100;
};
