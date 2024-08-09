import Layout from "../components/Layout";

function Profile() {
    return (
        <Layout>
            <div className="max-w-[640px] mt-12 mx-auto p-6 xs:p-8 md:p-12 2xl:p-16 rounded-lg bg-gray/5 border border-black">
                <h1 className="mb-5 text-lg font-semibold text-black">
                    Login to account
                </h1>
                <form className="space-y-6 mb-4" action="{{ $action }}" method="{{ $method }}">
                    <input className="w-full h-14 px-4 rounded-lg border border-black bg-white/20 text-black outline-none transition placeholder:text-darkblue text-xxs md:text-xs font-semibold" type="email" name="email" placeholder="E-mail" required/>

                    <input className="w-full h-14 px-4 rounded-lg border border-black bg-white/20 text-black outline-none transition placeholder:text-darkblue text-xxs md:text-xs font-semibold" type="password" name="password" placeholder="Password" required />

                    <button className="w-full h-8 btn btn-blue">Login</button>
                </form>

                <ul className="space-y-3 my-2">
                    <li>
                        <a href="{{ route('socialRedirect', ['socialName' => 'github']) }}"
                            className="relative flex items-center h-14 px-12 rounded-lg border border-black bg-white/20 hover:bg-white/20 active:bg-white/10 active:translate-y-0.5">
                            <svg className="shrink-0 absolute left-4 w-5 sm:w-6 h-5 sm:h-6 text-black" xmlns="http://www.w3.org/2000/svg"
                                fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd"
                                    d="M10 0C4.475 0 0 4.475 0 10a9.994 9.994 0 0 0 6.838 9.488c.5.087.687-.213.687-.476 0-.237-.013-1.024-.013-1.862-2.512.463-3.162-.612-3.362-1.175-.113-.287-.6-1.175-1.025-1.412-.35-.188-.85-.65-.013-.663.788-.013 1.35.725 1.538 1.025.9 1.512 2.337 1.087 2.912.825.088-.65.35-1.088.638-1.338-2.225-.25-4.55-1.112-4.55-4.937 0-1.088.387-1.987 1.025-2.688-.1-.25-.45-1.274.1-2.65 0 0 .837-.262 2.75 1.026a9.28 9.28 0 0 1 2.5-.338c.85 0 1.7.112 2.5.337 1.912-1.3 2.75-1.024 2.75-1.024.55 1.375.2 2.4.1 2.65.637.7 1.025 1.587 1.025 2.687 0 3.838-2.337 4.688-4.562 4.938.362.312.675.912.675 1.85 0 1.337-.013 2.412-.013 2.75 0 .262.188.574.688.474A10.017 10.017 0 0 0 20 10c0-5.525-4.475-10-10-10Z"
                                    clipRule="evenodd" />
                            </svg>
                            <span className="grow text-xxs md:text-xs font-bold text-center text-black">GitHub</span>
                        </a>
                    </li>
                    <li>
                        <a href="{{ route('socialRedirect', ['socialName' => 'google']) }}"
                            className="relative flex items-center h-14 px-12 rounded-lg border border-black bg-white/20 hover:bg-white/20 active:bg-white/10 active:translate-y-0.5">
                            <svg className="shrink-0 absolute left-4 w-5 sm:w-6 h-5 sm:h-6 text-black" fill="currentColor"
                                enableBackground="new 0 0 32 32" version="1.1" viewBox="0 0 32 32"
                                xmlns="http://www.w3.org/2000/svg">
                                <g id="Flat_copy">
                                    <path
                                        d="M31.37,13c0.2,1.07,0.31,2.19,0.31,3.36C31.68,25.5,25.56,32,16.32,32c-8.84,0-16-7.16-16-16s7.16-16,16-16   c4.32,0,7.93,1.59,10.7,4.17L22.51,8.68V8.67c-1.68-1.6-3.81-2.42-6.189-2.42c-5.28,0-9.57,4.46-9.57,9.74   c0,5.279,4.29,9.75,9.57,9.75c4.79,0,8.05-2.74,8.721-6.5H16.32V13L31.37,13L31.37,13z" />
                                </g>
                            </svg>
                            <span className="grow text-xxs md:text-xs font-bold text-center text-black">Google</span>
                        </a>
                    </li>
                </ul>

                <x-slot:buttons>
                    <div className="mt-5 flex items-center justify-between">
                        <div className="text-xxs md:text-xs"><a href="{{ route('forgotPassword') }}"
                                className="text-black hover:text-darkblue font-bold">Forgot your password?</a></div>
                        <div className="text-xxs md:text-xs"><a href="{{ route('register') }}"
                                className="text-black hover:text-darkblue font-bold">Create account</a></div>
                    </div>
                </x-slot:buttons>

                <ul className="flex flex-col md:flex-row justify-between gap-3 md:gap-4 mt-14 md:mt-20">
                    <li>
                        <a href="#" className="inline-block text-black hover:text-darkblue text-xxs md:text-xs font-medium"
                            target="_blank" rel="noopener">Conditions of Use</a>
                    </li>
                    <li className="hidden md:block">
                        <div className="h-full w-[2px] bg-black"></div>
                    </li>
                    <li>
                        <a href="#" className="inline-block text-black hover:text-darkblue text-xxs md:text-xs font-medium"
                            target="_blank" rel="noopener">Privacy Notice</a>
                    </li>
                </ul>
            </div>
        </Layout>
    );
}

export default Profile;