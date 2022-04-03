import Body from '../components/body'
import SaludProvider from '../context/provider'
export default function Home() {
    return (
        <>
            <main className='pt-5 ' >
                <div className=" text-3xl font-bold underline bg-slate-50 ">
                    <SaludProvider>
                        <Body />
                    </SaludProvider>
                </div>
            </main>
        </>
    )
}