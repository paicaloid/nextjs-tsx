import Image from "next/image";
import Link from "next/link";

export interface ProjectPreviewInterface {
  title: string;
  description: string;
  linkUrl: string;
  imagePath: string;
}

// const title: string = "Data Analysis App";
// const description: string = "A data analysis app built with Next.js and Tailwind CSS";
// const linkUrl: string = "/data_analysis";

const ProjectPreview = (props: ProjectPreviewInterface) => {
  return (
		<div className="flex gap-4 bg-slate-200">
			<div className="relative w-32 h-24">
				<Image 
					src={props.imagePath}
					layout="fill"
				/>
			</div>
			<div className="my-auto">
				<Link href={props.linkUrl}>
					<a href="/" className="font-bold underline hover:text-indigo-600">
						{props.title}
					</a>
				</Link>
				<div>{props.description}</div>
			</div>
		</div>
	);
}

export default ProjectPreview;