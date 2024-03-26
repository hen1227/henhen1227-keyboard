import "./Pages.css";
import "./FAQ.css";


const FAQPage = () => {
    return (
        <div className={'subpage'}>
            <div className={"content"}>
                <h2>FAQ</h2>

                <div className={"faq-question"}>
                    <h3>What is KeySoundboard?</h3>
                    <p>It's a MacOS app that allows you to play your favorite sound effects on your laptop whenever you
                        want!</p>
                </div>

                <div className={"faq-question"}>
                    <h3>What is the virtual audio device?</h3>
                    <p>The virtual audio device is a tool that allows you to route audio from one application to
                        another. This is useful for streaming, recording, and other audio-related tasks.</p>
                    <p>More information <a href={"/soundboard/driver"}>here</a>.</p>
                </div>

                <div className={"faq-question"}>
                    <h3>Why do KeySoundboard want to access my Microphone?</h3>
                    <p>KeySoundboard will take your microphone audio, add custom sound effects to it, then play it to a virtual microphone where it mixes the audio from your sound effects.</p>
                    <p>This allows your sounds to be heard in voice calls, AND allows you to add special effects to your voice such has low pitch and high reverb!</p>
                </div>

                <div className={"faq-question"}>
                    <h3>Why can't my friends hear the sounds on Discord?</h3>
                    <p>They can! But you first need to have a virtual audio device installed and your microphone enabled on KeySoundboard.</p>
                    <p>More information <a href={"/soundboard/driver"}>here</a>.</p>
                </div>
            </div>

        </div>
    )
}

export default FAQPage;
