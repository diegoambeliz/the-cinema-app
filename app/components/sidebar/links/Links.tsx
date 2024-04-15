import { LinkItem } from "./link";
import NavLink from "./navLink/NavLink";

export default function Links()
{
    const links: LinkItem[] = [
        {
            name: 'Home',
            path: '/',
            icon: 'house-door-fill'
        },
        {
            name: 'Movie Showtimes',
            path: '/movies',
            icon: 'film'
        }
    ];

    return (
        <>
            {
                links.map((link) => {
                    return (<NavLink item={link} key={link.name}></NavLink>)
                })
            }
        </>
    );
}