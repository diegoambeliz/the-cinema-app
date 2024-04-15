import Link from "next/link";
import { LinkItem } from "../link";
import { usePathname } from "next/navigation";

export default function NavLink({ item }: { item: LinkItem }) {

    const pathName = usePathname();

    return (
        <Link
            key={item.name}
            href={item.path}
            className={`p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-rose-600 text-white ${pathName === item.path ? 'bg-rose-600' : ''}`}
        >
            <i className={`bi bi-${item.icon}`}></i>
            <span className="text-[15px] ml-4 text-gray-200 font-bold">{item.name}</span>
        </Link>
    );
}