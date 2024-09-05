
function Home() {
    return (
        <>
            <div className="flex justify-center bg-emerald-700 text-white">
                <div className='grid text-green- container'>
                    <div className="flex flex-col justify-center items-center gap-4 py-4">
                        <h2 className='font-bold text-5xl'>
                            Bem vindo a Farmácia Preço Popular!
                        </h2>
                        <p className='text-3xl font-bold'>Aqui você encontra tudo oque você precisa!</p>

                        <div className="flex justify-around gap-4">
                            <div className='border-2 text-whiteborder-white bg-emerald-500 px-4 py-2 border-solid rounded text-white'>
                                Novo Produto
                            </div>
                        </div>
                    </div>

                    
                </div>
            </div>

            <div className="bg-white text-black py-24">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Os mais vendidos</h1>
          <div className='grid grid-cols-5 text-green- container'>
          <img src= "https://ik.imagekit.io/hyd78ucng/farmacia/loratadina.PNG?updatedAt=1725494227404"></img>
          <img src= "https://ik.imagekit.io/hyd78ucng/farmacia/dipirona.PNG?updatedAt=1725494226506"></img>
          <img src= "https://ik.imagekit.io/hyd78ucng/farmacia/dramin.PNG?updatedAt=1725494227931"></img>
          <img src= "https://ik.imagekit.io/hyd78ucng/farmacia/cetoprofeno.PNG?updatedAt=1725494564271"></img>
          <img src= "https://ik.imagekit.io/hyd78ucng/farmacia/metformina.PNG?updatedAt=1725494583951"></img>
          </div>
          
        </div>
      </div>
            

            
        </>
    )
}

export default Home;