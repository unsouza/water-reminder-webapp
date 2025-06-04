import UserProvider from "../contexts/user.context";
import HistoryController from "../controllers/history.controller";

const HistoryPage = () => {
    const {
        user,
        history,
        dailyMeta,
        loading,
        error,
    } = HistoryController();

    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-50 px-4 py-10">
            <div className="text-center mb-6">
                <h1 className="text-2xl font-bold mb-2">Histórico de consumo</h1>
                <h2 className="text-lg font-semibold text-gray-600">{user?.name}</h2>
            </div>

            {loading && <p className="text-gray-500">Carregando histórico...</p>}
            {error && <p className="text-red-500">{error}</p>}

            <div className="w-full max-w-sm space-y-4">
                {history.length === 0 && !loading ? (
                    <p className="text-gray-500 text-center">Nenhum consumo registrado ainda.</p>
                ) : (
                    history.map((item, index) => {
                        const reachedMeta = item.total_ml >= dailyMeta;
                        return (
                            <div key={index} className="bg-white p-6 rounded shadow-md text-left">
                                <p className="text-gray-500"><strong>Data:</strong> {item.date}</p>
                                <p className="text-gray-500"><strong>Meta:</strong> {dailyMeta} ml</p>
                                <p className="text-gray-500"><strong>Consumido:</strong> {item.total_ml} ml</p>
                                <p className={`font-semibold ${reachedMeta ? "text-green-600" : "text-red-600"}`}>
                                    {reachedMeta ? "Meta atingida 💧" : "Meta não atingida 😓"}
                                </p>
                            </div>
                        );
                    })
                )}
            </div>

            <div className="w-full max-w-sm flex justify-center mt-6">
                <button
                    className="bg-gray-200 text-gray-800 px-5 py-2 rounded hover:bg-gray-300 transition"
                    onClick={() => window.history.back()}
                >
                    Voltar
                </button>
            </div>
        </div>
    );
};

export default () => <UserProvider>
    <HistoryPage />
    </UserProvider>;
