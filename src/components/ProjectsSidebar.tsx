import React from "react"

type SidebarProps = {
    styles: string;
}

const ProjectsSidebar = ({styles}:SidebarProps) =>{


    return (
    <nav className={styles}>
        <ul className="flex flex-col">
            <li className="mt-4 mb-4">
                <a href="#WebDev"  className="hover:text-white hover:underline">
                    Web Development
                </a>
            </li>
            <li className="mb-4">
                <a href="#GameDev" className="hover:text-white hover:underline">
                    Game Development
                </a>
            </li>
            <li className="mb-4">
                <a href="#MiscDev" className="hover:text-white hover:underline">
                    Misc Programming
                </a>
            </li>
        </ul>
    </nav>

    )
  }

export default ProjectsSidebar
