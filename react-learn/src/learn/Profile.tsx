import Avatar from "./Avatar";

export function Profile() {
    return (
        <div>
            <Avatar
                size={100}
                person={{
                    name: "John Doe",
                    imageId: "https://via.placeholder.com/100"
                }}
            />
            <Avatar
                size={100}
                person={{
                    name: "Jane Doe",
                    imageId: "https://via.placeholder.com/100"
                }}
            />
            <Avatar
                size={100}
                person={{
                    name: "Bob Smith",
                    imageId: "https://via.placeholder.com/100"
                }}
            />

        </div>
    );
};

export default function Gallery() {
    return (
        <section>
            <h1>Amazing scientists</h1>
            <Profile />
            <Profile />
            <Profile />
        </section>
    );

}