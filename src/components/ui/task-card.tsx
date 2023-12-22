import type { Task } from "@/libs/types";
import { Card, CardBody, CardHeader, CardFooter } from "@nextui-org/react";
type T = Task & {
  children: React.ReactNode;
};
const TaskCard = ({ name, url, children }: T) => {
  return (
    <>
      <Card>
        <CardHeader>{name}</CardHeader>
        <CardBody>
          <>{children}</>
        </CardBody>
        <CardFooter>{url}</CardFooter>
      </Card>
    </>
  );
};

export { TaskCard };
