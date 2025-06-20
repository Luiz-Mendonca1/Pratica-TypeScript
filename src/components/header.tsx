import './header.css'

interface HeaderPromp{
    title: string
}

export function Header({title}: HeaderPromp){
    return(
        <header className='header'>
            <h1 className='title'>{title}</h1>
        </header>
    )
}