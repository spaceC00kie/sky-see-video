import { NavLink } from "react-router-dom";
import { WindowSize } from "../../containers/WindowSize";
import { NAV_ITEMS, QUOTE_ITEM } from "../common/NavItems";

export const DesktopNav: React.FC = () => {
  const { isSmall } = WindowSize.useContainer();
  if (isSmall) return null;

  return (
    <div className="mx-1 flex flex-auto flex-wrap items-end justify-end gap-6 px-2 text-xs">
      {NAV_ITEMS.map(({ label, path }) => (
        <NavLink key={path} to={path} className="whitespace-nowrap pb-2 hover:text-blue-400">
          {label}
        </NavLink>
      ))}
      <div className="flex flex-col gap-2 whitespace-nowrap">
        <div className="pt-4 text-center">678-304-9920</div>
        <NavLink
          to={QUOTE_ITEM.path}
          className="whitespace-nowrap rounded-md bg-blue-500 px-3 py-2 text-white hover:bg-blue-300"
        >
          {QUOTE_ITEM.label}
        </NavLink>
      </div>
    </div>
  );
};
