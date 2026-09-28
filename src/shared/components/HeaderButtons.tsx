import Link from "next/link";

import {ButtonGroup} from "@/shared/ui/button-group";
import {Button} from "@/shared/ui/button";

function HeaderButtons() {
  return (
    <ButtonGroup>
      <Button><Link href="/login">Login</Link></Button>
      <Button>Demo</Button>
    </ButtonGroup>
  );
}

export default HeaderButtons;