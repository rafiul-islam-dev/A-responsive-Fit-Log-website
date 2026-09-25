const Loading = () => {
    return (
        <main className="min-h-screen bg-[#0b0d10]">
            <div className="mx-auto max-w-7xl px-5 py-10">
                <div className="grid gap-8 lg:grid-cols-2">
                    <div className="min-h-[500px] animate-pulse rounded-xl bg-[#14161b]" />

                    <div className="space-y-5">
                        <div className="h-10 w-3/4 animate-pulse rounded bg-[#14161b]" />

                        <div className="h-20 animate-pulse rounded bg-[#14161b]" />

                        <div className="h-10 w-1/3 animate-pulse rounded bg-[#14161b]" />

                        <div className="h-64 animate-pulse rounded bg-[#14161b]" />
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Loading;