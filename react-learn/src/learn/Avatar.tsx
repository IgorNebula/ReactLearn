import { getImageUrl } from "./utils";

export default function Avatar(props: { person: any; size: number; }) {
    let person = props.person;
    let size = props.size || 50;
    return (
        <img
            className="avatar"
            src={getImageUrl(person)}
            alt={person.name}
            width={size}
            height={size}
        />
    )
}

