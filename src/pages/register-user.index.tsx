import Input from "../components/input.component";
import RegisterUserContoller from "../controllers/register-user.controller";

const RegisterUserPage = () => {

    const { error, setProperty, register } = RegisterUserContoller();

    return <div className="flex justify-center items-center h-screen bg-gray-50 px-4">
        <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
            <h1 className="text-2xl font-bold text-center mb-6">Cadastre-se!</h1>
            <div className="flex flex-col justify-center">
                <label className="block mb-1" htmlFor="">Nome</label>
                <Input placeholder="Digite seu nome..." onChangeText={(text) => setProperty(text, 'name')} />

                <label className="block mt-4 mb-1" htmlFor="">Peso</label>
                <Input placeholder="Digite seu peso..." onChangeText={(text) => setProperty(text, 'weight')} />
            </div>
            {error ? <div className="bg-red-600/80 rounded-md px-4 py-2 text-white text-sm sm:text-base font-medium transition-all duration-300 min-h-[48px] break-words w-full">
                <h5 className="font-bold">{error}</h5>
            </div> : null}
            <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition" onClick={register}>
                Registrar
            </button>
        </div>
    </div>
}

export default RegisterUserPage;