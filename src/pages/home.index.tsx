import RadioList from "../components/radio-list.component";
import { useNavigate } from "react-router-dom";
import HomeController from "../controllers/home.controller";
import UserProvider from "../contexts/user.context";
import Card from "../components/card.component";

const HomePage = () => {
    const navigate = useNavigate();
    const {
        error,
        today,
        options,
        consumed,
        selectedOption,
        register,
        setSelectedOption,
        calculateDailyMeta,
        calculateRemainingMeta,
        calculatePercentConsumed
    } = HomeController();

    return <div className="min-h-screen flex flex-col bg-gray-50 px-4">
        <div className="flex flex-col items-center justify-center py-6">
            <h1 className="text-2xl font-bold mb-2">Seja bem-vindo de volta!</h1>
            <h2 className="text-lg font-semibold text-gray-600">Hoje é {today}</h2>
        </div>
        <div className="flex flex-col items-center gap-6">
            <Card
                title="Registrar consumo"
                contentClassName="flex flex-col gap-2 items-center text-center"
            >
                <RadioList
                    name="example"
                    options={options}
                    selected={selectedOption?.value ?? null}
                    onChange={setSelectedOption}
                />

                {error ? <div className="bg-red-600/80 rounded-md px-4 py-2 text-white text-sm sm:text-base font-medium transition-all duration-300 min-h-[48px] break-words w-full max-w-sm text-center">
                    <h5 className="font-bold">{error}</h5>
                </div> : null}

                <button
                    className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition"
                    onClick={register}
                >
                    Consumir
                </button>
            </Card>
            <Card
                title="Minhas metas"
                contentClassName="flex flex-col gap-2 items-center text-center"
            >
                <p className="text-gray-500"><strong>Meta do dia:</strong>{calculateDailyMeta()}</p>
                <p className="text-gray-500"><strong>Meta restante:</strong>{calculateRemainingMeta()}</p>
                <p className="text-gray-500"><strong>Meta já consumida:</strong>{consumed}</p>
                <p className="text-gray-500"><strong>Meta já consumida (%):</strong>{calculatePercentConsumed().toFixed(2)}</p>
            </Card>
            <Card
                title="Histórico"
                contentClassName="flex flex-col gap-2 items-center text-center"
            >
                <h3 className="text-lg font-semibold text-gray-600 mb-2">Bateu a meta hoje?</h3>
                <p className="text-blue-600 font-medium mb-4">
                    {calculateRemainingMeta() <= 0 ? "Sim" : "Não"}
                </p>

                <button
                    className="bg-gray-200 text-gray-800 px-5 py-2 rounded hover:bg-gray-300 transition"
                    onClick={() => navigate("/history")}
                >
                    Ver histórico
                </button>
            </Card>
        </div>
    </div>
};

export default () => <UserProvider>
    <HomePage />
</UserProvider>
