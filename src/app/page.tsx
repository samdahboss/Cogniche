import React from "react";
import { Button } from "antd";

const App: React.FC = () => (
  <div className='flex flex-col gap-5 px-6 py-12'>
    <Button type='primary'>Primary Button</Button>
    <Button>Default Button</Button>
    <Button type='dashed'>Dashed Button</Button>
    <Button type='text'>Text Button</Button>
    <Button type='link'>Link Button</Button>
  </div>
);

export default App;
