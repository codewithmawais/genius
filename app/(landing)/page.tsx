import Link from "next/link";

 const LandingPage = () => {
    return (
        <div>
            LandingPage
            <div>
                <Link href="/sign-in"><button>Sign In</button></Link>
            </div>
        </div>
    );
};

export default LandingPage;