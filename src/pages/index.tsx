export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center w-screen h-screen bg-main text-soft-blue">
            <main className="grid max-w-sm p-6 mx-4 md:mx-0 place-items-center rounded-xl bg-card">
                <div className="grid w-full mb-6 bg-contain group place-items-center rounded-xl bg-card-header">
                    <img
                        className="invisible bg-opacity-50 bg-cyan rounded-xl p-36 group-hover:visible"
                        src="/images/icon-view.svg"
                        alt="View"
                    />
                </div>

                <section className="mb-6">
                    <h1 className="mb-4 text-lg font-semibold text-white hover:text-cyan">Equilibrium #3429</h1>
                    <p className="text-base font-light">Our Equilibrium collection promotes balance and calm.</p>
                </section>

                <section className="flex justify-between w-full mb-6 text-sm">
                    <div className="flex items-center">
                        <img className="w-3 mr-2" src="/images/icon-ethereum.svg" alt="Ethereum" />
                        <span className="font-semibold text-cyan">0.041 ETH</span>
                    </div>
                    <div className="flex items-center">
                        <img className="w-5 mr-2" src="/images/icon-clock.svg" alt="Time remaining" />
                        <span className="">3 days left</span>
                    </div>
                </section>

                <div className="w-full mb-6 border-[1px] border-line" />

                <section className="flex items-center w-full text-sm">
                    <div className="w-8 mr-4">
                        <img
                            className="border-2 border-white rounded-full"
                            src="/images/image-avatar.png"
                            alt="Avatar"
                        />
                    </div>
                    <span>
                        Creation of <span className="text-white hover:text-cyan">Jules Wyvern</span>
                    </span>
                </section>
            </main>

            <footer className="absolute bottom-0 pb-2 attribution">
                Challenge by{" "}
                <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
                    Frontend Mentor
                </a>
                . Coded by <a href="https://github.com/nrademacher">Nikolay Rademacher</a>.
            </footer>
        </div>
    )
}
