
function Home() {
    return (
        <>
            <div className="flex justify-center bg-white">
                <div className='grid grid-cols-2 text-green-700 container'>
                    <div className="flex flex-col justify-center items-center gap-4 py-4">
                        <h2 className='font-bold text-5xl'>
                            Bem vindo!
                        </h2>
                        <p className='text-xl'>Aqui você encontra tudo oque você precisa!</p>

                        <div className="flex justify-around gap-4">
                            <div className='border-2 text-whiteborder-white bg-white px-4 py-2 border-solid rounded'>
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center">
                        <img
                            src="https://ik.imagekit.io/hyd78ucng/farmacia/logo2.png?updatedAt=1725460173993"
                            alt="Imagem Página Home"
                            className='w-/3'
                        />
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home