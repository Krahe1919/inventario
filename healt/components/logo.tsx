import Link from "next/link";

export const Logo = () => {
    return( <Link href="/" className="flex items-center
    text-2xl">
        <span className="font-black bg-white text-custom-blue flex items-center justify-center rounded mr-px">Sena</span>Inventory
    </Link>
    );
}