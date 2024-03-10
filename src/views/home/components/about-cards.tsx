import { Card, CardBody, CardHeader, Image } from '@nextui-org/react';

interface IAboutCards {
  imageURL: string;
  description: string;
}

export const AboutCards = (props: IAboutCards) => {
  const { imageURL, description } = props;
  return (
    <Card className="bg-light-gray shadow-sm ">
      <CardHeader className="p-5">
        <Image
          src={imageURL}
          alt="description"
        />
      </CardHeader>
      <CardBody className="p-5">
        <p className="text-lg">{description}</p>
      </CardBody>
    </Card>
  );
};
