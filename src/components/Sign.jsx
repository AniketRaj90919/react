import { Input } from "./input/Input";
import Card from "./card/Card"
import { Head } from "./Heading/Head";
export const Sign = () =>   
 <Card >
<Head heading="signup"/>

<Input type="username"/>
<Input type="password" />
<Input type="cnfpass" />
</Card>