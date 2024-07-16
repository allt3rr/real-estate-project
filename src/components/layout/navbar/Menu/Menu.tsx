import { MenuItems } from "@/utils/Constants";
import { usePathname } from "next/navigation";
import Link from "next/link";

const Menu = () => {
  const pathname = usePathname();

  return (
    <ul className="flex gap-[10px] lg:gap-[25px] items-center flex-col md:flex-row">
      {MenuItems.map((item) => (
        <li
          key={item.site_name}
          className={
            "text-lg cursor-pointer " +
            (pathname === item.site_url
              ? "text-white bg-[#008EF4] px-6 py-2 sm:text-xl font-semibold rounded-full"
              : " ")
          }
        >
          <Link href={item.site_url}>{item.site_name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;
