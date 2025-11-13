import GaugeChart from "./GaugeChart/GaugeChart";
import AtividadesChart from "./AtividadesChart/AtividadesChart";
import { useEffect, useState } from "react";
import { useError } from "@/hooks/useError";
import { api } from "@/utils/api";
import Loading from "@/components/ui/loading";
import { ApiResult } from "@/types/grades";

interface GradeProps {
    student_id: number
    course_id: number
}

export default function Grade({ student_id, course_id }: GradeProps) {
    const [data, setData] = useState<ApiResult | null>(null);
    const error = useError()

    useEffect(() => {
        const fetch = async () => {
            try {
                error.clear()
                const response = await api.get(`/analysis/subject/${course_id}/student/${student_id}/grades`)
                setData(response.data.data.student_grades)
            } catch (err) {
                error.setError("Erro ao buscar dados gerais")
                console.error("Erro ao buscar dados gerais: ", err)
            }
        };
        fetch()
    }, [student_id])

    return (
        <div className="flex gap-4 mb-8 justify-between">
            {error.hasError ? error.renderError() : data ? (
                <>
                    <div className="Box4 flex-1 p-6">
                        <h1 className="text-xl font-poppins font-semibold text-left">
                            Nota final
                        </h1>
                        <p className="text-[#9291A5] mb-6 pb-4 border-b border-gray-200">da disciplina</p>
                        <div className="flex p-2 justify-center"><GaugeChart value={data.final.grade} max_value={data.final.max} /></div>
                    </div>

                    <div className="Box4 flex-1 p-6">
                        <h1 className="text-xl font-poppins font-semibold text-left">
                            Notas
                        </h1>
                        <p className="text-[#9291A5] mb-4 pb-4 border-b border-gray-200">da disciplina</p>
                        <div className="overflow-auto">
                            <AtividadesChart activities={data.activities} />
                        </div>
                    </div>
                </>
            ) : (
                <Loading>Careegando resultados...</Loading>
            )}
        </div>
    );
};
