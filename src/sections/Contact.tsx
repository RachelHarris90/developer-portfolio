import { Button } from "../commonComponents/Button/Button";
import { Card } from "../commonComponents/Card";
import { Input } from "../commonComponents/Input/Input";
import { TextArea } from "../commonComponents/TextArea/TextArea";

export const Contact = () => {
  return (
    <>
      <h1 className="text-3xl pb-4 font-bold">contact me.</h1>
      <Card>
        <form className="space-y-4">
          <Input label="Name" type="text" required />
          <Input label="Email" type="email" required />
          <Input label="Phone" type="tel" required />
          <TextArea label="Message" required />

          <Button label="Submit" onClick={() => console.log("onclick")} />
        </form>
      </Card>
    </>
  );
};
