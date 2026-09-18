import React from 'react';
import {ButtonGroup} from "@/shared/ui/button-group";
import {Button} from "@/shared/ui/button";

function HeaderButtons() {
  return (
    <ButtonGroup>
      <Button>Login</Button>
      <Button>Demo</Button>
    </ButtonGroup>
  );
}

export default HeaderButtons;