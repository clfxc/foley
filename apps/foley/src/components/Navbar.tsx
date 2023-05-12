import { Link } from "@clfxc/ui/components/Link";
import { URLS } from "@utils/enums";
import { londrinaSketch } from "@utils/misc";
import { type HTMLAttributes } from "react";
import Auth from "./Auth";

type Props = HTMLAttributes<HTMLElement>;

export default function Navbar({ className, ...rest }: Props): JSX.Element {
    const linkClasses = "hover:!text-[var(--clr-orange)] !text-white hover:underline hover:underline-offset-2 px-2";

    return (
        <nav
            className={`${className ? className : ""} sticky top-0 flex items-center py-2 px-4 min-h-[15vh] bg-[var(--clr-bg-500)]`}
            {...rest}
        >
            <div className="container flex flex-wrap items-center max-sm:justify-around max-sm:gap-6 gap-4">
                <Logo />
                <section className="flex flex-wrap justify-center gap-6 px-4">
                    <Link className={linkClasses} href={URLS.SMOL}>
                        smol
                    </Link>
                    <Link className={linkClasses} href={URLS.QR}>
                        qr
                    </Link>
                    <Link className={linkClasses} href={URLS.REPLACE}>
                        replace
                    </Link>
                </section>
                <Auth className="sm:ml-auto" />
            </div>
        </nav>
    );
}

function Logo(): JSX.Element {
    return (
        <Link href="/">
            <h1
                className={`hover:text-[var(--clr-orange)] text-white text-6xl leading-none ${londrinaSketch.variable} font-londrina-sketch`}
            >
                K
            </h1>
        </Link>
    );
}
