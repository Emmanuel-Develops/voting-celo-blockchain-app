import ButtonRoute from './ButtonRoute'


const ProjectCard = ({project}) => {
    return (
        <div className="flex flex-col md:flex-row justify-items-stretch font-osans text-white md:text-xl font-medium shadow-2xl rounded-xl bg-gray-800">
            <div className='p-3 text-gray-200 text2xl md:text-3xl md:p-4 font-bold sm:rounded-t-xl md:rounded-none md:rounded-l-xl md:w-2/5 bg-blue-200 bg-opacity-20'>
                <div className="h-full">
                    {project.name}
                </div>
            </div>
            <div className="p-5 h-100 text-sm md:text-base md:w-3/5">
                <div className="">
                    <p className="font-bold text-sm opacity-60 mb-4">INFO</p>
                    <p className="mb-4 md:mb-8 text-sm md:text-base">{project.info}</p>
                </div>

                {/* <div className="w-90 bg-red-400 h-1 rounded opacity-60 my-5"></div> */}
                
                <div className="flex relative justify-between items-center mb-4 bg-gray-700 bg-opacity-80 rounded pl-2">
                    <div className="">Entry: ${project.costToEntry}</div>
                    <div className="bg-pink-200 bg-opacity-80 text-gray-700 px-2 py-2 rounded-r">
                        <i class="fa-solid fa-user w-5"></i>
                        <span className="ml-2">{project.contestants.length}</span>
                    </div>
                </div>
                
                <div className="flex justify-between items-center mb-10 bg-gray-700 bg-opacity-80 rounded pl-2">
                    <div className="">Voting: ${project.costToVote}</div>
                    <div className="bg-pink-200 bg-opacity-80 text-gray-700 px-2 py-2 rounded-r">
                        <i class="fa-solid fa-check-to-slot w-5"></i>
                        <span className="ml-2">{project.contestants.reduce((a,b) => a + b.votes, 0)}</span>
                    </div>
                </div>

                <div className="grid place-items-center h-100 relative top">
                    <ButtonRoute route={`dashboard/${project.name}`} id={project.index} text={'OPEN'} />
                </div>
            
            </div>
        </div>
    )
}

export default ProjectCard
