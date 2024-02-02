import { ProfileImage } from "./styles"


interface IProfilePicture {
    imgResource: string
}

export const ProfilePicture: React.FC<IProfilePicture> = ({imgResource}) => {

    return(
        <>
        <ProfileImage src={imgResource}/>
        </>
    )


}