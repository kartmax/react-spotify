import RegistrationButton from "./RegistrationButton";
import RegistrationInfo from "./RegistrationInfo";

function Registration() {
    return (
        <a href="/" className="relative bg-gradient-to-r from-[#af2896] to-[#509bf5] flex flex-wrap justify-between items-center gap-x-2 gap-y-5 px-6 sm:px-8 py-4">
            <RegistrationInfo />
            <RegistrationButton />
        </a>
    )
}

export default Registration;