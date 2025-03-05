import { Input } from "./input/Input";
import Card from "./card/Card"
import { Head } from "./Heading/Head";
export const Login = () =>   
 <Card >
<Head heading="login"/>

<Input type="username"/>
<Input type="password" />

</Card>