import { Profile } from "../Profile"

interface IGalleryProps {}

export const Gallery:React.FC<IGalleryProps> = ():JSX.Element =>{
    return(
        <div>
            <h1>Notable Scientists</h1>
            <Profile title="hadis" 
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHN8VZBh3H-DJG7Cp3kfbRDnd7UF932qrhJMVqjA7uJw&s"
            achivments = {{title:"hadis", desp:"front"}}
            />
            <Profile title="saeed" 
            imageSrc="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4KK-Q2mcxD1oB5e3SPK-Sa0_eqpXkUaFe7t2gEuvYqA&s"
            achivments = {{title:"saeed", desp:"back"}}
            />
        </div>
    )
}