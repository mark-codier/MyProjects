import noProjImg from '../../assets/no-projects.png'
import UnicBtn from './UnicBtn'
export default function NoProjectSelected({onStartAdd}){
    return <div className="mt-24 w-3/4 text-center">
        <img src={noProjImg} className='w-16 h-16 object-contain mx-auto' alt="" />
        <h2 className='text-xl font-bold text-stone-500 my-4'>No project selected</h2>
        <p className='mb-4 text-stone-400'>Select a project or create a new one</p>
        <p className='mt-8'>
            <UnicBtn onClick={onStartAdd}>Create a new project</UnicBtn>
        </p>
    </div>
}