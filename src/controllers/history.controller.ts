import { useContext, useEffect, useState } from "react";
import { UserContext } from "../contexts/user.context";
import HistoryService from "../services/water.service";

type HistoryItem = {
    date: string;
    total_ml: number
};

const service = new HistoryService();

const HistoryController = () => {
    const { user } = useContext(UserContext);
    const [history, setHistory] = useState<HistoryItem[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const dailyMeta = user?.weight ? user.weight * 35 : 0;

    useEffect(() => {
        if (user) fetchHistory();
    }, [user]);

    async function fetchHistory() {
        try {
            setLoading(true);
            const response = await service.history();
            setHistory(response);
        } catch (error: any) {
            setError(error?.message || "Erro ao buscar histórico");
        } finally {
            setLoading(false);
        }
    }

    return {
        user,
        error,
        history,
        loading,
        dailyMeta,
    };
};

export default HistoryController;
