
interface IProfileProps {
    title: string;
    imageSrc: string;
    achivments : {title:string, desp:string};
    


}

export const Profile:React.FC<IProfileProps> = ({title,imageSrc,achivments}):JSX.Element =>{
    return(
        
        <div>
            <section className="profile">
                <h2>{title}</h2>
                <img
                className="avatar"
                src={imageSrc}
                alt={title}
                width={70}
                height={70}
                />
                <ul>
                    {/* {achivments?.map((item) =>{
                        return(
                        <li key={item.title}>
                            <b>{item.desp}</b> 
                            <p>{item.title}</p>
                        </li>
                        );
                    })} */}
                    <li key={achivments.title}>
                            <b>{achivments.desp}</b> 
                            <p>{achivments.title}</p>
                        </li>

                </ul>
            </section>
            
        </div>
    )
}