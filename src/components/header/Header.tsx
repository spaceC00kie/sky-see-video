// components/header/Header.tsx
import { useState } from "react";
import { HeaderLeft } from "./HeaderLeft";
import { HeaderMiddle } from "./HeaderMiddle";
import { DesktopNav } from "./DesktopNav";
import { MobileMenu } from "./MobileMenu";

export const Header: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className="sticky top-0 z-50 flex h-28 w-full shrink-0 items-center justify-center bg-white px-4 text-xl">
        <div className="no-wrap relative flex w-full justify-between">
          <HeaderLeft onMenuClick={() => setOpen(true)} />
          <HeaderMiddle />
          <DesktopNav />
        </div>
      </div>
      <MobileMenu open={open} onClose={() => setOpen(false)} />
    </>
  );
};
