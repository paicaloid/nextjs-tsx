import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import MultipleFile from '../components/multiple_file'
import Profile from '../components/profile'
import ProjectPreview from '../components/project_preview'
import { ProjectPreviewInterface } from '../components/project_preview'



const Home: NextPage = () => {
  const projectMetadatArray = [];
  projectMetadatArray.push(
    {
      title: "Data Analysis App",
      description: "A data analysis app built with Next.js and Tailwind CSS",
      linkUrl: "/data_analysis",
      imagePath: "/images/001.png"
    },
    {
      title: "Test Upload  Image File",
      description: "Testing upload single/multiple image file with multipart/form-data",
      linkUrl: "/image_upload",
      imagePath: "/images/002.png"
    },
    {
      title: "Streaming App",
      description: "Super streaming app built with Next.js and Tailwind CSS",
      linkUrl: "/streaming",
      imagePath: "/images/003.png"
    }
  );

  const projectPreviewElements = [];
  
  for (let i = 0; i < projectMetadatArray.length; i++) {
    const metaData = projectMetadatArray[i];
    const element = <ProjectPreview {...metaData} key={i}/>;
    projectPreviewElements.push(element);
  }

  return (
    <div>
      <Profile />
      <div className="mt-4 flex flex-col gap-2">
        {projectPreviewElements}
      </div>
      <MultipleFile />
    </div>
  )
}

export default Home
