import React from "react";
import { Button } from "antd";
import { UserButton } from "@clerk/nextjs";

const App: React.FC = () => (
  <div className='flex flex-col gap-5 px-6 py-12'>
    <Button type='primary'>Primary Button</Button>
    <UserButton/>
    <Button type='text'>Text Button</Button>
    <Button type='link'>Link Button</Button>
  </div>
);

export default App;
