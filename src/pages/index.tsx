export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen">
            <main className="">
                <h1>Equilibrium #3429</h1>
                <p>Our Equilibrium collection promotes balance and calm.</p>

                <section>
                    <span>0.041 ETH</span>
                    <span>3 days left</span>
                </section>

                <section>Creation of Jules Wyvern</section>
            </main>
            <footer className="absolute bottom-0 w-full pb-2 text-xl attribution">
                Challenge by{" "}
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
                    Frontend Mentor
                </a>
                . Coded by <a href="#">Your Name Here</a>.
            </footer>
        </div>
    )
}
