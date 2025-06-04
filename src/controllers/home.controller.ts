import { useContext, useState } from "react";
import HistoryService from "../services/water.service";
import { UserContext } from "../contexts/user.context";

const service = new HistoryService();

interface OptionsProperty {
    label: string,
    value: number
}

const HomeController = () => {
    const [error, setError] = useState('');
    const { user } = useContext(UserContext);
    const [consumed, setConsumed] = useState(0);
    const [selectedOption, setSelectedOption] = useState<OptionsProperty>();

    const options = [
        { label: "Copo pequeno de 250ml", value: 250 },
        { label: "Copo médio de 350ml", value: 350 },
        { label: "Garrafa média de 500ml", value: 500 },
    ];

    const today = new Date().toLocaleDateString("pt-BR", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
    });

    async function register() {
        if (!selectedOption) {
            setError("Selecione uma quantidade de água.");
            return;
        }

        try {
            await service.store({ ml: selectedOption.value })
            await fetchConsumed();
        } catch (error: any) {
            setError(error)
        }
    }

    async function fetchConsumed() {
        try {
            const data = await service.consumed();
            setConsumed(data.total_consumed);
        } catch (err: any) {
            setError("Erro ao buscar consumo de água");
        }
    }

    function calculateDailyMeta() {
        const waterMLPerKg = 35;
        return user?.weight ? user.weight * waterMLPerKg : 0;
    }

    function calculateRemainingMeta() {
        return Math.max(calculateDailyMeta() - consumed, 0);
    }

    function calculatePercentConsumed() {
        const meta = calculateDailyMeta();
        if (!meta) return 0;
        return Math.min((consumed / meta) * 100, 100);
    }

    return {
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
    }
}

export default HomeController;