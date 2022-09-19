import Link from "next/link";
import Image from "next/image";
import projectImage from "../public/images/003.png";
import { NextPage } from "next";

const Streaimg: NextPage = () => {
  return (
		<div>
			<Image src={projectImage}/>
			<div className="my-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
        ullamco laboris nisi ut aliquip ex ea commodo consequat. 
        Duis aute irure dolor in reprehenderit in voluptate velit 
        esse cillum dolore eu fugiat nulla pariatur. Excepteur 
        sint occaecat cupidatat non proident, sunt in culpa qui 
        officia deserunt mollit anim id est laborum.
			</div>
			<div className="mt-4">
				<Link href="/">
				<a className="font-bold underline hover:text-indigo-600">
						back
					</a>
				</Link>
			</div>
		</div>
	);
}

export default Streaimg;