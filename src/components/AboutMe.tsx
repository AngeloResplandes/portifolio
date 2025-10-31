export const AboutMe = () => {
    const aboutMe = {
        name: "Angelo Resplandes",
        url: "https://i.imgur.com/0GkmMXO.jpeg"
    }

    return (
        <div className="h-screen w-full flex flex-col sm:flex-row justify-center items-center">
            <div className="mr-20">
                <h1 className="text-3xl font-medium mb-5">Sobre mim:</h1>
                <p className="max-w-80 sm:max-w-[400px] text-lg">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Praesent eu porttitor leo. Aliquam erat volutpat. Fusce
                    fermentum rutrum gravida. Phasellus nec elit id magna
                    vehicula suscipit varius vitae felis.
                </p>
            </div>
            <div>
                <img src={aboutMe.url} alt={aboutMe.name}
                    className="w-2xs object-cover rounded-lg" />
            </div>
        </div>
    );
}